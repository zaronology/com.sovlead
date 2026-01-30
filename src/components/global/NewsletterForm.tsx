"use client";

import React, { useState, FormEvent } from "react";
import { sendGAEvent } from "@next/third-parties/google";
import toast from "react-hot-toast";

type FormStatus = "idle" | "sending" | "success" | "error";

export default function NewsletterForm() {
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email_address")?.toString();

    // Basic validation
    if (!email || !email.includes("@")) {
      toast.error("Please enter a valid email address.", { id: "news-val" });
      return;
    }

    setStatus("sending");

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email_address: email,
          source: "newsletter_cta",
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        toast.success("Welcome aboard. Check your inbox.", {
          id: "news-success",
        });

        sendGAEvent("event", "form_submit", {
          form_name: "newsletter",
          category: "engagement",
        });

        // Reset form on success
        (e.target as HTMLFormElement).reset();
        setStatus("idle");
      } else {
        setStatus("error");
        toast.error(data.error || "Something went wrong.", {
          id: "news-api-error",
        });
      }
    } catch (error) {
      setStatus("error");
      toast.error("Connection failed. Please try again.", {
        id: "news-net-error",
      });
    }
  };

  return (
    <div className="w-full">
      <form
        onSubmit={handleSubmit}
        className="relative flex flex-col sm:flex-row gap-3"
      >
        <input
          type="email"
          name="email_address"
          required
          placeholder="Enter your email"
          disabled={status === "sending"}
          className="flex-grow bg-white/5 border border-white/10 px-5 py-4 rounded-lg text-white placeholder:text-white/30 focus:outline-none focus:border-gold transition-all"
        />
        <button
          type="submit"
          disabled={status === "sending"}
          className="bg-gold hover:bg-gold/90 text-gray-900 font-bold px-8 py-4 rounded-lg transition-all duration-300 uppercase tracking-widest text-sm disabled:bg-gray-600 disabled:text-gray-300"
        >
          {status === "sending" ? "Processing..." : "Join"}
        </button>
      </form>
    </div>
  );
}
