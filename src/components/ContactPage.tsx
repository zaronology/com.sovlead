"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import { Turnstile } from "@marsidev/react-turnstile";
import toast from "react-hot-toast";
import { sendGAEvent } from "@next/third-parties/google";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type Status = "idle" | "submitting" | "error";

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "General inquiries",
    message: "",
  });
  const [token, setToken] = useState<string | null>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [validated, setValidated] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    // Custom Validation Check
    if (form.checkValidity() === false) {
      setValidated(true);
      toast.error("Please fill out all required fields.");
      return;
    }

    if (!token) {
      toast.error("Security check pending. Please wait a moment.");
      return;
    }

    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, token }),
      });

      if (!response.ok) throw new Error("Server error");

      toast.success("Message sent successfully! We will be in touch.");
      setStatus("idle");
      setFormData({
        name: "",
        email: "",
        subject: "General inquiries",
        message: "",
      });
      sendGAEvent("event", "form_submit", {
        form_name: "contact_page_main",
        category: "engagement",
      });
      setValidated(false);
      setToken(null);
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("Something went wrong. Please try again later.");
      setStatus("error");
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header Section */}
      <header className="bg-white border-b border-gray-100 py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <span className="text-gold font-bold uppercase tracking-[0.2em] text-xs mb-4 block">
              Direct Access
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tighter">
              Contact Us
            </h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row gap-16 justify-center">
          {/* Contact Info Column */}
          <div className="w-full lg:w-5/12">
            <div className="bg-white p-8 md:p-12 shadow-2xl rounded-2xl border border-gray-100 h-full">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 tracking-tight">
                Get in Touch
              </h2>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                Have questions about The Foundry, speaking engagements, or just
                want to connect? Reach out.
              </p>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xs font-bold text-gold uppercase tracking-widest mb-2">
                    Email
                  </h3>
                  <a
                    href="mailto:hello@sovlead.com"
                    className="text-xl font-medium text-gray-900 hover:text-rust transition-colors"
                  >
                    hello@sovlead.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="w-full lg:w-6/12">
            <div className="bg-white p-8 md:p-12 shadow-2xl rounded-2xl border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 tracking-tight">
                Send a Message
              </h2>

              <form
                noValidate
                onSubmit={handleSubmit}
                className={`space-y-6 ${validated ? "was-validated" : ""}`}
              >
                {/* Full Name */}
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-gray-700 uppercase tracking-wide">
                    Full Name
                  </label>
                  <input
                    required
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all placeholder:text-gray-400 text-gray-900"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-gray-700 uppercase tracking-wide">
                    Email Address
                  </label>
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="name@example.com"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all placeholder:text-gray-400 text-gray-900"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                {/* Subject Select */}
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-gray-700 uppercase tracking-wide">
                    Subject
                  </label>
                  <select
                    name="subject"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all text-gray-900 appearance-none"
                    value={formData.subject}
                    onChange={handleChange}
                  >
                    <option value="General inquiries">General inquiries</option>
                    <option value="The Foundry inquiries">
                      The Foundry inquiries
                    </option>
                    <option value="Work with Dave inquiries">
                      Work with Dave inquiries
                    </option>
                    <option value="Speaking inquiries">
                      Speaking inquiries
                    </option>
                  </select>
                </div>

                {/* Message Textarea */}
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-gray-700 uppercase tracking-wide">
                    Message
                  </label>
                  <textarea
                    required
                    name="message"
                    rows={4}
                    placeholder="How can we help you?"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all placeholder:text-gray-400 text-gray-900 resize-none"
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>

                {/* Security Check */}
                <div className="py-2">
                  <Turnstile
                    siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
                    onSuccess={(token) => setToken(token)}
                    options={{ theme: "light", size: "flexible" }}
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full py-4 bg-gray-900 text-white font-bold uppercase tracking-widest rounded-lg hover:bg-rust transition-all duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  {status === "submitting" ? "Sending..." : "Submit Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
