import React, { useState, useEffect, FormEvent, ChangeEvent } from "react";
import { sendGAEvent } from "@next/third-parties/google";
import toast from "react-hot-toast";

const STORAGE_KEY = "foundry_form_backup";

interface FormData {
  fullName: string;
  email: string;
  linkedin: string;
  role: string;
  roleOther: string;
  orgName: string;
  orgType: string;
  companySize: string;
  teamSize: string;
  pressure: string;
  consequences: string;
  supportNeeded: string[];
  supportOther: string;
  winDefinition: string;
  timeline: string;
  investment: string;
  referralSource: string;
  additionalInfo: string;
  budgetStatus: string;
  investmentCoverage: string;
  approverRole: string;
}

const INITIAL_STATE: FormData = {
  fullName: "",
  email: "",
  linkedin: "",
  role: "",
  roleOther: "",
  orgName: "",
  orgType: "",
  companySize: "",
  teamSize: "",
  pressure: "",
  consequences: "",
  supportNeeded: [],
  supportOther: "",
  winDefinition: "",
  timeline: "",
  investment: "",
  referralSource: "",
  additionalInfo: "",
  budgetStatus: "",
  investmentCoverage: "",
  approverRole: "",
};

interface FoundryApplicationFormProps {
  onSuccess: () => void;
}

const FoundryApplicationForm: React.FC<FoundryApplicationFormProps> = ({
  onSuccess,
}) => {
  const [validated, setValidated] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>(INITIAL_STATE);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedData = localStorage.getItem(STORAGE_KEY);
      if (savedData) {
        try {
          setFormData(JSON.parse(savedData));
        } catch (error) {
          console.error("Error parsing saved form data:", error);
        }
      }
      setIsLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
    }
  }, [formData, isLoaded]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    let updatedList = [...formData.supportNeeded];
    if (checked) {
      updatedList.push(value);
    } else {
      updatedList = updatedList.filter((item) => item !== value);
    }
    setFormData((prev) => ({ ...prev, supportNeeded: updatedList }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    const form = e.currentTarget;
    e.preventDefault();

    // 1. Identify specific missing fields
    const elements = Array.from(form.elements) as HTMLInputElement[];
    const firstInvalid = elements.find(
      (el) => el.checkValidity && !el.checkValidity(),
    );

    if (firstInvalid) {
      setValidated(true);
      // Grab the label text associated with the ID
      const labelText =
        form
          .querySelector(`label[for="${firstInvalid.id}"]`)
          ?.textContent?.replace("*", "")
          .trim() ||
        firstInvalid.name ||
        "required field";

      toast.error(`Please provide your ${labelText}`, { id: "val-err" });
      firstInvalid.focus();
      return;
    }

    // Custom check for checkboxes
    if (formData.supportNeeded.length === 0) {
      setValidated(true);
      toast.error("Please select at least one area where you need support.", {
        id: "val-err",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/foundry-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Application received. We will be in touch.");
        onSuccess();
        sendGAEvent("event", "submit_application", {
          category: "foundry",
          value: 100,
        });
        localStorage.removeItem(STORAGE_KEY);
        setFormData(INITIAL_STATE);
        setValidated(false);
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      toast.error("Network error. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputBaseStyle =
    "mt-1 block w-full rounded-md border-rust shadow-sm focus:border-rust focus:ring-rust sm:text-sm border py-2 px-3 transition-colors";
  const labelStyle = "block text-sm font-medium text-blue";
  const sectionTitleStyle =
    "text-sm uppercase tracking-wider font-bold text-blue mb-6";
  const requiredAsterisk = <span className="text-rust ml-1">*</span>;

  return (
    <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="bg-white shadow-lg rounded-xl overflow-hidden border border-gold">
        <div className="px-6 py-8 sm:p-10">
          <form noValidate onSubmit={handleSubmit} className="space-y-8">
            {/* --- SECTION A --- */}
            <div>
              <h5 className={sectionTitleStyle}>Section A: Contact & Basics</h5>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="fullName" className={labelStyle}>
                    Full Name {requiredAsterisk}
                  </label>
                  <input
                    required
                    id="fullName"
                    name="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={handleChange}
                    className={`${inputBaseStyle} ${validated && !formData.fullName ? "border-red-500" : "border-blue/20"}`}
                  />
                </div>
                <div>
                  <label htmlFor="email" className={labelStyle}>
                    Best Email {requiredAsterisk}
                  </label>
                  <input
                    required
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`${inputBaseStyle} ${validated && (!formData.email || !formData.email.includes("@")) ? "border-red-500" : "border-blue/20"}`}
                  />
                </div>
              </div>
              <div className="mt-6">
                <label htmlFor="linkedin" className={labelStyle}>
                  LinkedIn Profile{" "}
                  <span className="text-blue/60 font-normal">(Optional)</span>
                </label>
                <input
                  id="linkedin"
                  name="linkedin"
                  type="url"
                  placeholder="https://linkedin.com/in/..."
                  value={formData.linkedin}
                  onChange={handleChange}
                  className={`${inputBaseStyle} border-blue/20`}
                />
              </div>
            </div>

            <hr className="border-blue/40" />

            {/* --- SECTION B --- */}
            <div>
              <h5 className={sectionTitleStyle}>
                Section B: Role & Organization
              </h5>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="role" className={labelStyle}>
                    Current Role {requiredAsterisk}
                  </label>
                  <select
                    required
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    className={`${inputBaseStyle} ${validated && !formData.role ? "border-red-500" : "border-blue/20"}`}
                  >
                    <option value="">Select...</option>
                    <option value="CIO">CIO</option>
                    <option value="CTO">CTO</option>
                    <option value="VP of Engineering">VP of Engineering</option>
                    <option value="Head of Engineering">
                      Head of Engineering
                    </option>
                    <option value="Head of IT / Director of IT">
                      Head of IT / Director of IT
                    </option>
                    <option value="Chief Architect / Principal Engineer">
                      Chief Architect / Principal Engineer
                    </option>
                    <option value="Technical Founder / Co-Founder">
                      Technical Founder / Co-Founder
                    </option>
                    <option value="Other">Other</option>
                  </select>
                  {formData.role === "Other" && (
                    <input
                      required
                      type="text"
                      name="roleOther"
                      placeholder="Please specify your role"
                      value={formData.roleOther}
                      onChange={handleChange}
                      className={`mt-2 ${inputBaseStyle} border-blue/20`}
                    />
                  )}
                </div>
                <div>
                  <label htmlFor="orgName" className={labelStyle}>
                    Organization Name {requiredAsterisk}
                  </label>
                  <input
                    required
                    id="orgName"
                    name="orgName"
                    type="text"
                    value={formData.orgName}
                    onChange={handleChange}
                    className={`${inputBaseStyle} ${validated && !formData.orgName ? "border-red-500" : "border-blue/20"}`}
                  />
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="orgType" className={labelStyle}>
                  Organization Type {requiredAsterisk}
                </label>
                <select
                  required
                  id="orgType"
                  name="orgType"
                  value={formData.orgType}
                  onChange={handleChange}
                  className={`${inputBaseStyle} ${validated && !formData.orgType ? "border-red-500" : "border-blue/20"}`}
                >
                  <option value="">Select...</option>
                  <option value="Product company (SaaS / software)">
                    Product company (SaaS / software)
                  </option>
                  <option value="Services / Agency / Consulting">
                    Services / Agency / Consulting
                  </option>
                  <option value="Internal IT / Shared Services">
                    Internal IT / Shared Services
                  </option>
                  <option value="Startup (pre-Series A)">
                    Startup (pre-Series A)
                  </option>
                  <option value="Scaleup (post-Series A)">
                    Scaleup (post-Series A)
                  </option>
                  <option value="Enterprise (1,000+ employees)">
                    Enterprise (1,000+ employees)
                  </option>
                  <option value="Government / Nonprofit">
                    Government / Nonprofit
                  </option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="companySize" className={labelStyle}>
                    Company Size {requiredAsterisk}
                  </label>
                  <select
                    required
                    id="companySize"
                    name="companySize"
                    value={formData.companySize}
                    onChange={handleChange}
                    className={`${inputBaseStyle} ${validated && !formData.companySize ? "border-red-500" : "border-blue/20"}`}
                  >
                    <option value="">Select...</option>
                    <option value="1–10">1–10</option>
                    <option value="11–50">11–50</option>
                    <option value="51–200">51–200</option>
                    <option value="201–500">201–500</option>
                    <option value="501–2,000">501–2,000</option>
                    <option value="2,001+">2,001+</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="teamSize" className={labelStyle}>
                    Team Size You’re Responsible For {requiredAsterisk}
                  </label>
                  <select
                    required
                    id="teamSize"
                    name="teamSize"
                    value={formData.teamSize}
                    onChange={handleChange}
                    className={`${inputBaseStyle} ${validated && !formData.teamSize ? "border-red-500" : "border-blue/20"}`}
                  >
                    <option value="">Select...</option>
                    <option value="I’m an IC / no direct reports">
                      I’m an IC / no direct reports
                    </option>
                    <option value="1–5 people">1–5 people</option>
                    <option value="6–15 people">6–15 people</option>
                    <option value="16–50 people">16–50 people</option>
                    <option value="51–100 people">51–100 people</option>
                    <option value="100+ people">100+ people</option>
                  </select>
                </div>
              </div>
            </div>

            <hr className="border-blue/40" />

            {/* --- SECTION C --- */}
            <div>
              <h5 className={sectionTitleStyle}>
                Section C: Pressure & Context
              </h5>
              <div className="mb-6">
                <label htmlFor="pressure" className={labelStyle}>
                  What is the biggest pressure you’re under in your role right
                  now? {requiredAsterisk}
                </label>
                <textarea
                  required
                  id="pressure"
                  rows={3}
                  name="pressure"
                  value={formData.pressure}
                  onChange={handleChange}
                  className={`${inputBaseStyle} ${validated && !formData.pressure ? "border-red-500" : "border-blue/20"}`}
                />
              </div>
              <div className="mb-6">
                <label htmlFor="consequences" className={labelStyle}>
                  If nothing changes in the next 6–12 months, what do you
                  believe will happen? {requiredAsterisk}
                </label>
                <textarea
                  required
                  id="consequences"
                  rows={3}
                  name="consequences"
                  value={formData.consequences}
                  onChange={handleChange}
                  className={`${inputBaseStyle} ${validated && !formData.consequences ? "border-red-500" : "border-blue/20"}`}
                />
              </div>
              <div className="mb-6">
                <label className={labelStyle}>
                  Where do you feel you need the most support right now?{" "}
                  {requiredAsterisk}
                </label>
                <div className="mt-3 space-y-2">
                  {[
                    "Holding the line with leadership",
                    "Translating technical risk",
                    "Navigating AI pressure",
                    "Protecting my team",
                    "Managing my own stress",
                    "Resetting expectations",
                    "Clarifying my role",
                    "Other",
                  ].map((option, idx) => (
                    <div key={option} className="flex items-start">
                      <input
                        id={`support-option-${idx}`}
                        type="checkbox"
                        value={option}
                        checked={formData.supportNeeded.includes(option)}
                        onChange={handleCheckboxChange}
                        className="h-4 w-4 rounded border-gold text-rust focus:ring-rust"
                      />
                      <label
                        htmlFor={`support-option-${idx}`}
                        className="ml-3 text-sm font-medium text-blue"
                      >
                        {option}
                      </label>
                    </div>
                  ))}
                </div>
                {formData.supportNeeded.includes("Other") && (
                  <input
                    type="text"
                    name="supportOther"
                    placeholder="Please specify"
                    value={formData.supportOther}
                    onChange={handleChange}
                    className={`mt-3 ${inputBaseStyle} border-blue/20`}
                  />
                )}
              </div>
              <div>
                <label htmlFor="winDefinition" className={labelStyle}>
                  What would a clear “win” look like 6 months from now?{" "}
                  {requiredAsterisk}
                </label>
                <textarea
                  required
                  id="winDefinition"
                  rows={3}
                  name="winDefinition"
                  value={formData.winDefinition}
                  onChange={handleChange}
                  className={`${inputBaseStyle} ${validated && !formData.winDefinition ? "border-red-500" : "border-blue/20"}`}
                />
              </div>
            </div>

            <hr className="border-blue/40" />

            {/* --- SECTION D --- */}
            <div>
              <h5 className={sectionTitleStyle}>
                Section D: Fit, Timing & Investment
              </h5>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="investment" className={labelStyle}>
                    Are you able and willing to invest in a 6-month 1:1
                    engagement? {requiredAsterisk}
                  </label>
                  <select
                    required
                    id="investment"
                    name="investment"
                    value={formData.investment}
                    onChange={handleChange}
                    className={`${inputBaseStyle} ${validated && !formData.investment ? "border-red-500" : "border-blue/20"}`}
                  >
                    <option value="">Select...</option>
                    <option value="Yes — I have the authority">
                      Yes — I have the authority
                    </option>
                    <option value="Yes — but I’ll need approval">
                      Yes — but I’ll need approval
                    </option>
                    <option value="Not right now">Not right now</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="timeline" className={labelStyle}>
                    How soon would you want to start? {requiredAsterisk}
                  </label>
                  <select
                    required
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className={`${inputBaseStyle} ${validated && !formData.timeline ? "border-red-500" : "border-blue/20"}`}
                  >
                    <option value="">Select...</option>
                    <option value="ASAP (within 30 days)">ASAP</option>
                    <option value="1–3 months">1–3 months</option>
                    <option value="3–6 months">3–6 months</option>
                    <option value="I’m just exploring for now">
                      I’m just exploring
                    </option>
                  </select>
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="budgetStatus" className={labelStyle}>
                  Does your company have budget for leadership development?{" "}
                  {requiredAsterisk}
                </label>
                <select
                  required
                  id="budgetStatus"
                  name="budgetStatus"
                  value={formData.budgetStatus}
                  onChange={handleChange}
                  className={`${inputBaseStyle} ${validated && !formData.budgetStatus ? "border-red-500" : "border-blue/20"}`}
                >
                  <option value="">Select...</option>
                  <option value="Yes">Yes</option>
                  <option value="Probably">Probably</option>
                  <option value="Not sure">Not sure</option>
                  <option value="No">No</option>
                  <option value="I’d prefer to handle this privately">
                    I’d prefer to handle this privately
                  </option>
                </select>
              </div>
            </div>

            <hr className="border-blue/40" />

            {/* --- SECTION E --- */}
            <div>
              <div className="mb-6">
                <label htmlFor="referralSource" className={labelStyle}>
                  How did you hear about us? {requiredAsterisk}
                </label>
                <select
                  required
                  id="referralSource"
                  name="referralSource"
                  value={formData.referralSource}
                  onChange={handleChange}
                  className={`${inputBaseStyle} ${validated && !formData.referralSource ? "border-red-500" : "border-blue/20"}`}
                >
                  <option value="">Select...</option>
                  <option value="Referral">Referral</option>
                  <option value="LinkedIn">LinkedIn</option>
                  <option value="Podcast / interview">
                    Podcast / interview
                  </option>
                  <option value="Article / blog post">
                    Article / blog post
                  </option>
                  <option value="Search">Search</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="mb-8">
                <label htmlFor="additionalInfo" className={labelStyle}>
                  Anything else you want me to know?{" "}
                  <span className="text-blue/60 font-normal">(Optional)</span>
                </label>
                <textarea
                  id="additionalInfo"
                  rows={3}
                  name="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={handleChange}
                  className={`${inputBaseStyle} border-blue/20`}
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-4 text-white text-lg font-bold uppercase tracking-wider rounded-lg shadow-md transition-all ${isSubmitting ? "bg-rust/70 cursor-not-allowed" : "bg-rust hover:shadow-lg"}`}
            >
              {isSubmitting ? "Sending..." : "Submit Application"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FoundryApplicationForm;
