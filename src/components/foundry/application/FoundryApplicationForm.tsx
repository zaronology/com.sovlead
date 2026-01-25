import React, { useState, useEffect, FormEvent, ChangeEvent } from "react";
import { sendGAEvent } from "@next/third-parties/google";

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

interface FormStatus {
  type: "success" | "danger" | "";
  message: string;
}

const FoundryApplicationForm: React.FC<FoundryApplicationFormProps> = ({ onSuccess }) => {
  const [validated, setValidated] = useState<boolean>(false);
  const [status, setStatus] = useState<FormStatus>({ type: "", message: "" });
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
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
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
    e.stopPropagation();

    // 1. Run Validation
    if (form.checkValidity() === false || formData.supportNeeded.length === 0) {
      setValidated(true);
      // Scroll to top to show validation errors if needed
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return; 
    }

    setValidated(true);
    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      // 2. Send data to your Next.js API route
      const response = await fetch("/api/foundry-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus({ type: "success", message: "Application received. We will be in touch." });
        onSuccess();
        sendGAEvent("event", "submit_application", {
          category: "foundry",
          value: 100,
        });
        // 3. Clear Local Storage & Reset Form on Success
        localStorage.removeItem(STORAGE_KEY);
        setFormData(INITIAL_STATE);
        setValidated(false);
      } else {
        setStatus({ type: "danger", message: "Something went wrong. Please try again." });
      }
    } catch (error) {
      setStatus({ type: "danger", message: "Network error. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Helper styles
  const inputBaseStyle = "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-600 focus:ring-blue-600 sm:text-sm border py-2 px-3";
  const labelStyle = "block text-sm font-medium text-gray-700";
  const sectionTitleStyle = "text-sm uppercase tracking-wider font-bold text-blue-800 mb-6";
  const requiredAsterisk = <span className="text-red-600 ml-1">*</span>;

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="bg-white shadow-lg rounded-xl overflow-hidden border border-gray-100">
        <div className="px-6 py-8 sm:p-10">
          
          {/* Status Alert */}
          {status.message && (
            <div
              className={`mb-6 p-4 rounded-md flex items-center ${
                status.type === "success"
                  ? "bg-green-50 text-green-800 border border-green-200"
                  : "bg-red-50 text-red-800 border border-red-200"
              }`}
            >
              <span className="font-medium">{status.message}</span>
            </div>
          )}

          <form 
            noValidate 
            onSubmit={handleSubmit} 
            className={`space-y-8 ${validated ? 'was-validated' : ''}`}
          >
            {/* --- SECTION A: Contact & Basics --- */}
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
                    className={`${inputBaseStyle} ${validated && !formData.fullName ? 'border-red-500' : ''}`}
                  />
                  {validated && !formData.fullName && (
                    <p className="mt-1 text-sm text-red-600">Name is required.</p>
                  )}
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
                    className={`${inputBaseStyle} ${validated && (!formData.email || !formData.email.includes('@')) ? 'border-red-500' : ''}`}
                  />
                  {validated && (!formData.email || !formData.email.includes('@')) && (
                    <p className="mt-1 text-sm text-red-600">Valid email is required.</p>
                  )}
                </div>
              </div>

              <div className="mt-6">
                <label htmlFor="linkedin" className={labelStyle}>
                  LinkedIn Profile <span className="text-gray-500 font-normal">(Optional)</span>
                </label>
                <input
                  id="linkedin"
                  name="linkedin"
                  type="url"
                  placeholder="https://linkedin.com/in/..."
                  value={formData.linkedin}
                  onChange={handleChange}
                  className={inputBaseStyle}
                />
              </div>
            </div>

            <hr className="border-gray-200" />

            {/* --- SECTION B: Role & Organization --- */}
            <div>
              <h5 className={sectionTitleStyle}>Section B: Role & Organization</h5>
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
                    className={`${inputBaseStyle} ${validated && !formData.role ? 'border-red-500' : ''}`}
                  >
                    <option value="">Select...</option>
                    <option value="CIO">CIO</option>
                    <option value="CTO">CTO</option>
                    <option value="VP of Engineering">VP of Engineering</option>
                    <option value="Head of Engineering">Head of Engineering</option>
                    <option value="Head of IT / Director of IT">Head of IT / Director of IT</option>
                    <option value="Chief Architect / Principal Engineer">Chief Architect / Principal Engineer</option>
                    <option value="Technical Founder / Co-Founder">Technical Founder / Co-Founder</option>
                    <option value="Other">Other</option>
                  </select>
                  {validated && !formData.role && (
                    <p className="mt-1 text-sm text-red-600">Please select a role.</p>
                  )}

                  {formData.role === "Other" && (
                    <input
                      required
                      type="text"
                      name="roleOther"
                      placeholder="Please specify your role"
                      value={formData.roleOther}
                      onChange={handleChange}
                      className={`mt-2 ${inputBaseStyle}`}
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
                    className={`${inputBaseStyle} ${validated && !formData.orgName ? 'border-red-500' : ''}`}
                  />
                  {validated && !formData.orgName && (
                    <p className="mt-1 text-sm text-red-600">Organization name is required.</p>
                  )}
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
                  className={`${inputBaseStyle} ${validated && !formData.orgType ? 'border-red-500' : ''}`}
                >
                  <option value="">Select...</option>
                  <option value="Product company (SaaS / software)">Product company (SaaS / software)</option>
                  <option value="Services / Agency / Consulting">Services / Agency / Consulting</option>
                  <option value="Internal IT / Shared Services">Internal IT / Shared Services</option>
                  <option value="Startup (pre-Series A)">Startup (pre-Series A)</option>
                  <option value="Scaleup (post-Series A)">Scaleup (post-Series A)</option>
                  <option value="Enterprise (1,000+ employees)">Enterprise (1,000+ employees)</option>
                  <option value="Government / Nonprofit">Government / Nonprofit</option>
                  <option value="Other">Other</option>
                </select>
                {validated && !formData.orgType && (
                  <p className="mt-1 text-sm text-red-600">Please select an organization type.</p>
                )}
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
                    className={`${inputBaseStyle} ${validated && !formData.companySize ? 'border-red-500' : ''}`}
                  >
                    <option value="">Select...</option>
                    <option value="1–10">1–10</option>
                    <option value="11–50">11–50</option>
                    <option value="51–200">51–200</option>
                    <option value="201–500">201–500</option>
                    <option value="501–2,000">501–2,000</option>
                    <option value="2,001+">2,001+</option>
                  </select>
                  {validated && !formData.companySize && (
                    <p className="mt-1 text-sm text-red-600">Please select company size.</p>
                  )}
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
                    className={`${inputBaseStyle} ${validated && !formData.teamSize ? 'border-red-500' : ''}`}
                  >
                    <option value="">Select...</option>
                    <option value="I’m an IC / no direct reports">I’m an IC / no direct reports</option>
                    <option value="1–5 people">1–5 people</option>
                    <option value="6–15 people">6–15 people</option>
                    <option value="16–50 people">16–50 people</option>
                    <option value="51–100 people">51–100 people</option>
                    <option value="100+ people">100+ people</option>
                  </select>
                  {validated && !formData.teamSize && (
                    <p className="mt-1 text-sm text-red-600">Please select team size.</p>
                  )}
                </div>
              </div>
            </div>

            <hr className="border-gray-200" />

            {/* --- SECTION C: Pressure & Context --- */}
            <div>
              <h5 className={sectionTitleStyle}>Section C: Pressure & Context</h5>

              <div className="mb-6">
                <label htmlFor="pressure" className={labelStyle}>
                  What is the biggest pressure you’re under in your role right now? {requiredAsterisk}
                </label>
                <textarea
                  required
                  id="pressure"
                  rows={3}
                  name="pressure"
                  value={formData.pressure}
                  onChange={handleChange}
                  className={`${inputBaseStyle} ${validated && !formData.pressure ? 'border-red-500' : ''}`}
                />
                <p className="mt-1 text-xs text-gray-500">Give me the specific situation(s), not just "stress" or "too much work."</p>
                {validated && !formData.pressure && (
                  <p className="mt-1 text-sm text-red-600">This field is required.</p>
                )}
              </div>

              <div className="mb-6">
                <label htmlFor="consequences" className={labelStyle}>
                  If nothing changes in the next 6–12 months, what do you believe will happen? {requiredAsterisk}
                </label>
                <textarea
                  required
                  id="consequences"
                  rows={3}
                  name="consequences"
                  value={formData.consequences}
                  onChange={handleChange}
                  className={`${inputBaseStyle} ${validated && !formData.consequences ? 'border-red-500' : ''}`}
                />
                {validated && !formData.consequences && (
                  <p className="mt-1 text-sm text-red-600">This field is required.</p>
                )}
              </div>

              <div className="mb-6">
                <label className={labelStyle}>
                  Where do you feel you need the most support right now? {requiredAsterisk}
                </label>
                <div className="mt-3 space-y-2">
                  {[
                    "Holding the line with leadership on scope and timelines",
                    "Translating technical risk into business language",
                    "Navigating AI pressure and hype without becoming “the blocker”",
                    "Protecting my team from chaos and burnout",
                    "Managing my own stress, reactivity, and decision fatigue",
                    "Resetting expectations with stakeholders who think everything is urgent",
                    "Clarifying my role, authority, and boundaries",
                    "Other",
                  ].map((option, idx) => (
                    <div key={option} className="flex items-start">
                      <div className="flex h-5 items-center">
                        <input
                          id={`support-option-${idx}`}
                          type="checkbox"
                          value={option}
                          checked={formData.supportNeeded.includes(option)}
                          onChange={handleCheckboxChange}
                          className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-600"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor={`support-option-${idx}`} className="font-medium text-gray-700">
                          {option}
                        </label>
                      </div>
                    </div>
                  ))}
                </div>
                {formData.supportNeeded.length === 0 && validated && (
                  <p className="mt-2 text-sm text-red-600">Please select at least one option.</p>
                )}

                {formData.supportNeeded.includes("Other") && (
                  <input
                    type="text"
                    name="supportOther"
                    placeholder="Please specify"
                    value={formData.supportOther}
                    onChange={handleChange}
                    className={`mt-3 ${inputBaseStyle}`}
                  />
                )}
              </div>

              <div>
                <label htmlFor="winDefinition" className={labelStyle}>
                  What would a clear “win” look like 6 months from now if we work together? {requiredAsterisk}
                </label>
                <textarea
                  required
                  id="winDefinition"
                  rows={3}
                  name="winDefinition"
                  value={formData.winDefinition}
                  onChange={handleChange}
                  className={`${inputBaseStyle} ${validated && !formData.winDefinition ? 'border-red-500' : ''}`}
                />
                {validated && !formData.winDefinition && (
                  <p className="mt-1 text-sm text-red-600">This field is required.</p>
                )}
              </div>
            </div>

            <hr className="border-gray-200" />

            {/* --- SECTION D: Fit, Timing & Investment --- */}
            <div>
              <h5 className={sectionTitleStyle}>Section D: Fit, Timing & Investment</h5>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="investment" className={labelStyle}>
                    Are you able and willing to invest in a 6-month 1:1 engagement? {requiredAsterisk}
                  </label>
                  <select
                    required
                    id="investment"
                    name="investment"
                    value={formData.investment}
                    onChange={handleChange}
                    className={`${inputBaseStyle} ${validated && !formData.investment ? 'border-red-500' : ''}`}
                  >
                    <option value="">Select...</option>
                    <option value="Yes — I have the authority to approve this personally">
                      Yes — I have the authority to approve this personally
                    </option>
                    <option value="Yes — but I’ll need to involve my leadership/partner">
                      Yes — but I’ll need to involve my leadership/partner
                    </option>
                    <option value="Not right now — I’m not in a position to invest at this level">
                      Not right now — I’m not in a position to invest at this level
                    </option>
                  </select>
                  {validated && !formData.investment && (
                    <p className="mt-1 text-sm text-red-600">Please select an option.</p>
                  )}
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
                    className={`${inputBaseStyle} ${validated && !formData.timeline ? 'border-red-500' : ''}`}
                  >
                    <option value="">Select...</option>
                    <option value="ASAP (within 30 days)">ASAP (within 30 days)</option>
                    <option value="1–3 months">1–3 months</option>
                    <option value="3–6 months">3–6 months</option>
                    <option value="I’m just exploring for now">I’m just exploring for now</option>
                  </select>
                  {validated && !formData.timeline && (
                    <p className="mt-1 text-sm text-red-600">Please select a timeline.</p>
                  )}
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="budgetStatus" className={labelStyle}>
                  Does your company have budget for leadership or executive development? {requiredAsterisk}
                </label>
                <select
                  required
                  id="budgetStatus"
                  name="budgetStatus"
                  value={formData.budgetStatus}
                  onChange={handleChange}
                  className={`${inputBaseStyle} ${validated && !formData.budgetStatus ? 'border-red-500' : ''}`}
                >
                  <option value="">Select...</option>
                  <option value="Yes — there’s a defined budget for this">Yes — there’s a defined budget for this</option>
                  <option value="Probably — we’ve paid for coaching / training before">
                    Probably — we’ve paid for coaching / training before
                  </option>
                  <option value="Not sure — I’d need to ask">Not sure — I’d need to ask</option>
                  <option value="No — we don’t have budget for this">No — we don’t have budget for this</option>
                  <option value="I’d prefer to handle this privately">I’d prefer to handle this privately</option>
                </select>
                {validated && !formData.budgetStatus && (
                  <p className="mt-1 text-sm text-red-600">Please select an option.</p>
                )}
              </div>
            </div>

            <hr className="border-gray-200" />

            {/* --- SECTION E: Miscellaneous --- */}
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
                  className={`${inputBaseStyle} ${validated && !formData.referralSource ? 'border-red-500' : ''}`}
                >
                  <option value="">Select...</option>
                  <option value="Referral">Referral</option>
                  <option value="LinkedIn">LinkedIn</option>
                  <option value="Podcast / interview">Podcast / interview</option>
                  <option value="Article / blog post">Article / blog post</option>
                  <option value="Search (Google / AI assistant)">Search (Google / AI assistant)</option>
                  <option value="Previous work together">Previous work together</option>
                  <option value="Other">Other</option>
                </select>
                {validated && !formData.referralSource && (
                  <p className="mt-1 text-sm text-red-600">Please select a source.</p>
                )}
              </div>

              <div className="mb-8">
                <label htmlFor="additionalInfo" className={labelStyle}>
                  Anything else you want me to know? <span className="text-gray-500 font-normal">(Optional)</span>
                </label>
                <textarea
                  id="additionalInfo"
                  rows={3}
                  name="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={handleChange}
                  className={inputBaseStyle}
                />
              </div>
            </div>

            {/* Submission Area */}
            {status.message && status.type === "danger" && (
              <div className="p-4 bg-red-50 text-red-800 border border-red-200 rounded-md mb-4 font-medium">
                {status.message}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-4 px-6 text-white text-lg font-bold uppercase tracking-wider rounded-lg shadow-md transition-all 
                ${isSubmitting 
                  ? 'bg-blue-400 cursor-not-allowed' 
                  : 'bg-blue-600 hover:bg-blue-700 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50'
                }`}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </span>
              ) : "Submit Application"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FoundryApplicationForm;