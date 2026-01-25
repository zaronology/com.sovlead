"use client";

import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Turnstile } from "@marsidev/react-turnstile";
import toast from "react-hot-toast";
import { sendGAEvent } from "@next/third-parties/google";

interface EbookModalProps {
  show: boolean;
  handleClose: () => void;
}

interface FormData {
  name: string;
  email: string;
  tag_name: string;
}

type Status = "" | "sending" | "success" | "error";

const EbookModal: React.FC<EbookModalProps> = ({ show, handleClose }) => {
  const [status, setStatus] = useState<Status>("");
  const [token, setToken] = useState<string | null>(null);
  const [validated, setValidated] = useState<boolean>(false);

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    tag_name: "ebook-arp",
  });

  const router = useRouter();
  const runOto = false;
  const ebookURL = "/ebook/download/authority-reset-protocol";
  const otoURL = "/offers/gpt-templates";

  // Lock background scrolling when modal is open
  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [show]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    const form = e.currentTarget;
    e.preventDefault();

    // 1. Check Field Validation
    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
      toast.error("Please fill in all required fields.");
      return;
    }
    setValidated(true);

    // 2. Check Security Token
    if (!token) {
      toast.error("Security check pending. Please wait a moment.");
      return;
    }

    setStatus("sending");
    const loadingToast = toast.loading("Sending your guide...");

    try {
      const payload = {
        name: formData.name,
        email_address: formData.email,
        tag_name: formData.tag_name,
        token: token,
      };

      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      // Success
      toast.dismiss(loadingToast);
      toast.success("Success! Check your inbox for the guide.");
      setStatus("success");
      sendGAEvent("event", "generate_lead", {
        method: "ebook_modal",
        item_name: "Authority Reset Protocol",
      });

      // Handle Redirection logic
      if (runOto) {
        sessionStorage.setItem("sov_oto_next", ebookURL);
        router.push(otoURL);
      } else {
        router.push(ebookURL);
      }

      // Cleanup and Close
      setTimeout(() => {
        handleClose();
        setTimeout(() => {
          setFormData({ name: "", email: "", tag_name: formData.tag_name });
          setStatus("");
          setValidated(false);
          setToken(null);
        }, 500);
      }, 2000);
    } catch (error: any) {
      console.error("Error:", error);
      toast.dismiss(loadingToast);
      toast.error(error.message || "An unexpected error occurred.");
      setStatus("error");
    }
  };

  // Do not render if not showing
  if (!show) return null;

  return (
    // Static Backdrop wrapper
    <div className="fixed inset-0 z-50 flex items-start sm:items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      {/* Modal Dialog */}
      <div className="w-full max-w-md bg-white rounded-xl shadow-2xl overflow-hidden mt-10 sm:mt-0 animate-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-100 bg-gray-50">
          <h3 className="text-lg font-bold text-gray-800">
            Get The Authority Reset Protocol
          </h3>
          <button
            onClick={handleClose}
            className="text-gray-400 hover:text-gray-700 hover:bg-gray-200 p-2 rounded-full transition-colors focus:outline-none"
            aria-label="Close modal"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="p-6">
          <p className="text-sm text-gray-600 mb-6">
            Enter your details below and I'll send the guide straight to your
            inbox.
          </p>

          <form noValidate onSubmit={handleSubmit} className="space-y-4">
            {/* Name Field */}
            <div>
              <label
                htmlFor="ebookName"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Full Name
              </label>
              <input
                required
                id="ebookName"
                name="name"
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                disabled={status === "sending" || status === "success"}
                className={`w-full rounded-md border py-2 px-3 shadow-sm sm:text-sm focus:outline-none focus:ring-2 disabled:bg-gray-100 disabled:cursor-not-allowed
                  ${
                    validated && !formData.name
                      ? "border-red-500 focus:border-red-500 focus:ring-red-200"
                      : "border-gray-300 focus:border-blue-500 focus:ring-blue-200"
                  }`}
              />
              {validated && !formData.name && (
                <p className="mt-1 text-sm text-red-600">Name is required.</p>
              )}
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="ebookEmail"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email Address
              </label>
              <input
                required
                id="ebookEmail"
                name="email"
                type="email"
                placeholder="name@company.com"
                value={formData.email}
                onChange={handleChange}
                disabled={status === "sending" || status === "success"}
                className={`w-full rounded-md border py-2 px-3 shadow-sm sm:text-sm focus:outline-none focus:ring-2 disabled:bg-gray-100 disabled:cursor-not-allowed
                  ${
                    validated &&
                    (!formData.email || !formData.email.includes("@"))
                      ? "border-red-500 focus:border-red-500 focus:ring-red-200"
                      : "border-gray-300 focus:border-blue-500 focus:ring-blue-200"
                  }`}
              />
              {validated &&
                (!formData.email || !formData.email.includes("@")) && (
                  <p className="mt-1 text-sm text-red-600">
                    Please provide a valid email.
                  </p>
                )}
            </div>

            {/* Turnstile Widget */}
            <div className="pt-2 min-h-[65px]">
              <Turnstile
                siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY as string}
                onSuccess={(token) => setToken(token)}
                options={{ theme: "light", size: "flexible" }}
              />
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={
                  status === "sending" || status === "success" || !token
                }
                className={`w-full py-3 px-4 font-bold text-white uppercase tracking-wider rounded-lg shadow-md transition-all flex justify-center items-center
                  ${
                    status === "sending" || status === "success" || !token
                      ? "bg-blue-400 cursor-not-allowed"
                      : "bg-blue-600 hover:bg-blue-700 hover:shadow-lg focus:ring-4 focus:ring-blue-500/50"
                  }`}
              >
                {status === "sending" ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  "Send Me the E-Book"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EbookModal;
