"use client";

import React, { useState, FormEvent } from "react";
import { sendGAEvent } from "@next/third-parties/google";

type FormStatus = "idle" | "sending" | "success" | "error";

export default function NewsletterForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email_address")?.toString();

    // Basic validation
    if (!email || !email.includes("@")) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
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
        sendGAEvent("event", "form_submit", {
          form_name: "newsletter",
          category: "engagement",
        });
      } else {
        setStatus("error");
        setMessage(data.error || "Something went wrong.");
      }
    } catch (error) {
      setStatus("error");
      setMessage("Connection failed. Please try again.");
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
          disabled={status === "success" || status === "sending"}
          className="flex-grow bg-white/5 border border-white/10 px-5 py-4 rounded-lg text-white placeholder:text-white/30 focus:outline-none focus:border-gold transition-all"
        />
        <button
          type="submit"
          disabled={status === "success" || status === "sending"}
          className="bg-gold hover:bg-gold/90 text-gray-900 font-bold px-8 py-4 rounded-lg transition-all duration-300 uppercase tracking-widest text-sm disabled:bg-gray-600 disabled:text-gray-300"
        >
          {status === "sending" ? "Processing..." : "Join"}
        </button>
      </form>

      {/* Response Messages */}
      <div className="mt-4 min-h-[24px]">
        {status === "error" && (
          <p className="text-rust font-bold text-sm animate-pulse">{message}</p>
        )}
        {status === "success" && (
          <p className="text-gold font-bold text-sm">
            Welcome aboard. Check your inbox.
          </p>
        )}
      </div>
    </div>
  );
}
