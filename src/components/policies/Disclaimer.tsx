import React from "react";

const DisclaimerContent: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12 text-blue">
      <div className="flex flex-wrap justify-center">
        <div className="w-full lg:w-5/6">
          {/* Header Section */}
          <header className="mb-12 border-b pb-6">
            <h1 className="font-bold mb-4 text-4xl md:text-5xl">DISCLAIMER</h1>
            <p className="text-gray-500">Last updated Dec 20, 2025</p>
          </header>

          {/* Website Disclaimer */}
          <section className="mb-12">
            <h2 className="mt-6 mb-4 pl-4 border-l-4 border-blue-600 text-2xl font-bold">
              WEBSITE DISCLAIMER
            </h2>
            <p className="mb-4">
              The information provided by{" "}
              <strong>Sovereign Leadership LLC</strong> ("we," "us," or "our")
              on{" "}
              <a
                href="https://sovlead.com"
                className="text-blue-600 hover:underline"
              >
                https://sovlead.com
              </a>{" "}
              (the "Site") is for general informational purposes only. All
              information on the Site is provided in good faith, however we make
              no representation or warranty of any kind, express or implied,
              regarding the accuracy, adequacy, validity, reliability,
              availability, or completeness of any information on the Site.
            </p>
            <div className="bg-gray-100 p-4 border rounded uppercase font-bold text-gray-600 text-sm">
              Under no circumstance shall we have any liability to you for any
              loss or damage of any kind incurred as a result of the use of the
              site or reliance on any information provided on the site. Your use
              of the site and your reliance on any information on the site is
              solely at your own risk.
            </div>
          </section>

          {/* External Links Disclaimer */}
          <section className="mb-12">
            <h2 className="mt-6 mb-4 pl-4 border-l-4 border-blue-600 text-2xl font-bold">
              EXTERNAL LINKS DISCLAIMER
            </h2>
            <p className="mb-4">
              The Site may contain (or you may be sent through the Site) links
              to other websites or content belonging to or originating from
              third parties or links to websites and features in banners or
              other advertising. Such external links are not investigated,
              monitored, or checked for accuracy, adequacy, validity,
              reliability, availability, or completeness by us.
            </p>
            <div className="bg-gray-100 p-4 border rounded uppercase font-bold text-gray-600 text-sm">
              We do not warrant, endorse, guarantee, or assume responsibility
              for the accuracy or reliability of any information offered by
              third-party websites linked through the site or any website or
              feature linked in any banner or other advertising. We will not be
              a party to or in any way be responsible for monitoring any
              transaction between you and third-party providers of products or
              services.
            </div>
          </section>

          {/* Professional Disclaimer */}
          <section className="mb-12">
            <h2 className="mt-6 mb-4 pl-4 border-l-4 border-blue-600 text-2xl font-bold">
              PROFESSIONAL DISCLAIMER
            </h2>
            <p className="mb-4">
              This site provides general information for educational purposes
              only. It does not constitute professional advice. Before taking
              action based on anything on this site, consult qualified
              professionals for guidance specific to your situation. For
              tailored support, contact our team directly.
            </p>
            <div className="bg-gray-100 p-4 border rounded uppercase font-bold text-gray-600 text-sm">
              The use or reliance of any information contained on the site is
              solely at your own risk.
            </div>
          </section>

          {/* Testimonials Disclaimer */}
          <section className="mb-12">
            <h2 className="mt-6 mb-4 pl-4 border-l-4 border-blue-600 text-2xl font-bold">
              TESTIMONIALS DISCLAIMER
            </h2>
            <p className="mb-4">
              The Site may contain testimonials by users of our products and/or
              services. These testimonials reflect the real-life experiences and
              opinions of such users. However, the experiences are personal to
              those particular users, and may not necessarily be representative
              of all users of our products and/or services. We do not claim, and
              you should not assume, that all users will have the same
              experiences.
            </p>
            <div className="bg-gray-100 p-4 border rounded uppercase font-bold text-gray-600 text-sm mb-4">
              Your individual results may vary.
            </div>
            <p className="mb-4">
              The testimonials on the Site are submitted in various forms such
              as text, audio and/or video, and are reviewed by us before being
              posted. They appear on the Site verbatim as given by the users,
              except for the correction of grammar or typing errors. Some
              testimonials may have been shortened for the sake of brevity where
              the full testimonial contained extraneous information not relevant
              to the general public.
            </p>
            <p>
              The views and opinions contained in the testimonials belong solely
              to the individual user and do not reflect our views and opinions.
              We are not affiliated with users who provide testimonials, and
              users are not paid or otherwise compensated for their
              testimonials.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default DisclaimerContent;
