import React from "react";

const CookiePolicy: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12 text-blue">
      <div className="flex flex-wrap justify-center">
        <div className="w-full lg:w-5/6">
          {/* --- Header Section --- */}
          <header className="mb-12 border-b pb-6">
            <h1 className="font-bold mb-4 text-4xl md:text-5xl text-blue">
              COOKIE POLICY
            </h1>
            <p className="text-gray-500">Last updated Dec 20, 2025</p>
          </header>

          {/* --- Introduction --- */}
          <section className="mb-12">
            <p className="mb-4">
              This Cookie Policy explains how{" "}
              <strong>Sovereign Leadership LLC</strong> ("Company," "we," "us,"
              and "our") uses cookies and similar technologies to recognize you
              when you visit our website at{" "}
              <a
                href="https://sovlead.com"
                className="text-blue-600 hover:underline"
              >
                https://sovlead.com
              </a>{" "}
              ("Website"). It explains what these technologies are and why we
              use them, as well as your rights to control our use of them.
            </p>
            <p className="mb-4">
              In some cases we may use cookies to collect personal information,
              or that becomes personal information if we combine it with other
              information.
            </p>
          </section>

          {/* --- What are cookies? --- */}
          <section className="mb-12">
            <h3 className="text-2xl font-bold mb-4">What are cookies?</h3>
            <p className="mb-4">
              Cookies are small data files that are placed on your computer or
              mobile device when you visit a website. Cookies are widely used by
              website owners in order to make their websites work, or to work
              more efficiently, as well as to provide reporting information.
            </p>
            <p className="mb-4">
              Cookies set by the website owner (in this case,{" "}
              <strong>Sovereign Leadership LLC</strong>) are called "first-party
              cookies." Cookies set by parties other than the website owner are
              called "third-party cookies." Third-party cookies enable
              third-party features or functionality to be provided on or through
              the website (e.g., advertising, interactive content, and
              analytics). The parties that set these third-party cookies can
              recognize your computer both when it visits the website in
              question and also when it visits certain other websites.
            </p>
          </section>

          {/* --- Why do we use cookies? --- */}
          <section className="mb-12">
            <h3 className="text-2xl font-bold mb-4">Why do we use cookies?</h3>
            <p className="mb-4">
              We use first- and third-party cookies for several reasons. Some
              cookies are required for technical reasons in order for our
              Website to operate, and we refer to these as "essential" or
              "strictly necessary" cookies. Other cookies also enable us to
              track and target the interests of our users to enhance the
              experience on our Online Properties. Third parties serve cookies
              through our Website for advertising, analytics, and other
              purposes. This is described in more detail below.
            </p>
          </section>

          {/* --- How can I control cookies? --- */}
          <section className="mb-12">
            <h3 className="text-2xl font-bold mb-4">
              How can I control cookies?
            </h3>
            <p className="mb-4">
              You have the right to decide whether to accept or reject cookies.
              You can exercise your cookie rights by setting your preferences in
              the Cookie Consent Manager. The Cookie Consent Manager allows you
              to select which categories of cookies you accept or reject.
              Essential cookies cannot be rejected as they are strictly
              necessary to provide you with services.
            </p>
            <p className="mb-4">
              The Cookie Consent Manager can be found in the notification banner
              and on our Website. If you choose to reject cookies, you may still
              use our Website though your access to some functionality and areas
              of our Website may be restricted. You may also set or amend your
              web browser controls to accept or refuse cookies.
            </p>
            <p className="mb-6">
              The specific types of first- and third-party cookies served
              through our Website and the purposes they perform are described in
              the table below (please note that the specific cookies served may
              vary depending on the specific Online Properties you visit):
            </p>

            {/* --- Table 1: Essential Cookies --- */}
            <div className="mb-8 bg-white border border-gray-200 shadow-sm rounded-lg overflow-hidden">
              <div className="bg-gray-100 px-4 py-3 font-bold border-b border-gray-200">
                Essential website cookies
              </div>
              <div className="p-4">
                <p className="mb-4 text-gray-700">
                  These cookies are strictly necessary to provide you with
                  services available through our Website and to use some of its
                  features, such as access to secure areas.
                </p>
                <div className="overflow-x-auto">
                  <table className="min-w-full text-sm text-left border-collapse border border-gray-300">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="border border-gray-300 px-3 py-2 font-bold">
                          Name
                        </th>
                        <th className="border border-gray-300 px-3 py-2 font-bold">
                          Purpose
                        </th>
                        <th className="border border-gray-300 px-3 py-2 font-bold">
                          Provider
                        </th>
                        <th className="border border-gray-300 px-3 py-2 font-bold">
                          Service
                        </th>
                        <th className="border border-gray-300 px-3 py-2 font-bold">
                          Type
                        </th>
                        <th className="border border-gray-300 px-3 py-2 font-bold">
                          Expires in
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-700">
                      <tr className="hover:bg-gray-50 even:bg-gray-50/50">
                        <td className="border border-gray-300 px-3 py-2">m</td>
                        <td className="border border-gray-300 px-3 py-2">
                          Tracks the user's session for Stripe
                        </td>
                        <td className="border border-gray-300 px-3 py-2">
                          m.stripe.com
                        </td>
                        <td className="border border-gray-300 px-3 py-2">
                          Stripe
                        </td>
                        <td className="border border-gray-300 px-3 py-2">
                          server_cookie
                        </td>
                        <td className="border border-gray-300 px-3 py-2">
                          1 year 11 months 29 days
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50 even:bg-gray-50/50">
                        <td className="border border-gray-300 px-3 py-2">
                          TERMLY_API_CACHE
                        </td>
                        <td className="border border-gray-300 px-3 py-2">
                          Used to store visitor’s consent result in order to
                          improve performance of the consent banner.
                        </td>
                        <td className="border border-gray-300 px-3 py-2">
                          sovlead.com
                        </td>
                        <td className="border border-gray-300 px-3 py-2">
                          Termly
                        </td>
                        <td className="border border-gray-300 px-3 py-2">
                          html_local_storage
                        </td>
                        <td className="border border-gray-300 px-3 py-2">
                          1 year
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50 even:bg-gray-50/50">
                        <td className="border border-gray-300 px-3 py-2">
                          GCLB
                        </td>
                        <td className="border border-gray-300 px-3 py-2">
                          A session cookie that allow user to manage the server
                          workload in the Group’s hosting
                        </td>
                        <td className="border border-gray-300 px-3 py-2">
                          featureassets.org
                        </td>
                        <td className="border border-gray-300 px-3 py-2">
                          Google Cloud
                        </td>
                        <td className="border border-gray-300 px-3 py-2">
                          server_cookie
                        </td>
                        <td className="border border-gray-300 px-3 py-2">
                          less than 1 minute
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50 even:bg-gray-50/50">
                        <td className="border border-gray-300 px-3 py-2">
                          csrf_token
                        </td>
                        <td className="border border-gray-300 px-3 py-2">
                          Protects against hacking and malicious actors.
                        </td>
                        <td className="border border-gray-300 px-3 py-2">
                          sovlead.com
                        </td>
                        <td className="border border-gray-300 px-3 py-2">
                          Django
                        </td>
                        <td className="border border-gray-300 px-3 py-2">
                          http_cookie
                        </td>
                        <td className="border border-gray-300 px-3 py-2">
                          30 days
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50 even:bg-gray-50/50">
                        <td className="border border-gray-300 px-3 py-2">
                          __cf_bm
                        </td>
                        <td className="border border-gray-300 px-3 py-2">
                          Cloudflare places the cookie on end-user devices that
                          access customer sites protected by Bot Management or
                          Bot Fight Mode.
                        </td>
                        <td className="border border-gray-300 px-3 py-2">
                          .calendly.com
                        </td>
                        <td className="border border-gray-300 px-3 py-2">
                          CloudFlare
                        </td>
                        <td className="border border-gray-300 px-3 py-2">
                          http_cookie
                        </td>
                        <td className="border border-gray-300 px-3 py-2">
                          29 minutes
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50 even:bg-gray-50/50">
                        <td className="border border-gray-300 px-3 py-2">
                          GCLB
                        </td>
                        <td className="border border-gray-300 px-3 py-2">
                          A session cookie that allow user to manage the server
                          workload in the Group’s hosting
                        </td>
                        <td className="border border-gray-300 px-3 py-2">
                          prodregistryv2.org
                        </td>
                        <td className="border border-gray-300 px-3 py-2">
                          Google Cloud
                        </td>
                        <td className="border border-gray-300 px-3 py-2">
                          server_cookie
                        </td>
                        <td className="border border-gray-300 px-3 py-2">
                          less than 1 minute
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* --- Table 2: Performance Cookies --- */}
            <div className="mb-8 bg-white border border-gray-200 shadow-sm rounded-lg overflow-hidden">
              <div className="bg-gray-100 px-4 py-3 font-bold border-b border-gray-200">
                Performance and functionality cookies
              </div>
              <div className="p-4">
                <p className="mb-4 text-gray-700">
                  These cookies are used to enhance the performance and
                  functionality of our Website but are non-essential to their
                  use. However, without these cookies, certain functionality
                  (like videos) may become unavailable.
                </p>
                <div className="overflow-x-auto">
                  <table className="min-w-full text-sm text-left border-collapse border border-gray-300">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="border border-gray-300 px-3 py-2 font-bold">
                          Name
                        </th>
                        <th className="border border-gray-300 px-3 py-2 font-bold">
                          Purpose
                        </th>
                        <th className="border border-gray-300 px-3 py-2 font-bold">
                          Provider
                        </th>
                        <th className="border border-gray-300 px-3 py-2 font-bold">
                          Service
                        </th>
                        <th className="border border-gray-300 px-3 py-2 font-bold">
                          Type
                        </th>
                        <th className="border border-gray-300 px-3 py-2 font-bold">
                          Expires in
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-700">
                      <tr className="hover:bg-gray-50 even:bg-gray-50/50">
                        <td className="border border-gray-300 px-3 py-2">
                          _cfuvid
                        </td>
                        <td className="border border-gray-300 px-3 py-2">
                          This cookie is set by Cloudflare to enhance security
                          and performance. It helps identify trusted web traffic
                          and ensures a secure browsing experience for users.
                        </td>
                        <td className="border border-gray-300 px-3 py-2">
                          .calendly.com
                        </td>
                        <td className="border border-gray-300 px-3 py-2">
                          Cloudflare
                        </td>
                        <td className="border border-gray-300 px-3 py-2">
                          server_cookie
                        </td>
                        <td className="border border-gray-300 px-3 py-2">
                          session
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50 even:bg-gray-50/50">
                        <td className="border border-gray-300 px-3 py-2">
                          OptanonConsent
                        </td>
                        <td className="border border-gray-300 px-3 py-2">-</td>
                        <td className="border border-gray-300 px-3 py-2">
                          .calendly.com
                        </td>
                        <td className="border border-gray-300 px-3 py-2">
                          OneTrust
                        </td>
                        <td className="border border-gray-300 px-3 py-2">
                          http_cookie
                        </td>
                        <td className="border border-gray-300 px-3 py-2">
                          11 months 30 days
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50 even:bg-gray-50/50">
                        <td className="border border-gray-300 px-3 py-2">
                          __cfruid
                        </td>
                        <td className="border border-gray-300 px-3 py-2">
                          Used by the content network, Cloudflare, to identify
                          trusted web traffic.
                        </td>
                        <td className="border border-gray-300 px-3 py-2">
                          .calendly.com
                        </td>
                        <td className="border border-gray-300 px-3 py-2">
                          CloudFlare
                        </td>
                        <td className="border border-gray-300 px-3 py-2">
                          server_cookie
                        </td>
                        <td className="border border-gray-300 px-3 py-2">
                          session
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* --- Table 3: Analytics Cookies --- */}
            <div className="mb-8 bg-white border border-gray-200 shadow-sm rounded-lg overflow-hidden">
              <div className="bg-gray-100 px-4 py-3 font-bold border-b border-gray-200">
                Analytics and customization cookies
              </div>
              <div className="p-4">
                <p className="mb-4 text-gray-700">
                  These cookies collect information that is used either in
                  aggregate form to help us understand how our Website is being
                  used or how effective our marketing campaigns are, or to help
                  us customize our Website for you.
                </p>
                <div className="overflow-x-auto">
                  <table className="min-w-full text-sm text-left border-collapse border border-gray-300">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="border border-gray-300 px-3 py-2 font-bold">
                          Name
                        </th>
                        <th className="border border-gray-300 px-3 py-2 font-bold">
                          Purpose
                        </th>
                        <th className="border border-gray-300 px-3 py-2 font-bold">
                          Provider
                        </th>
                        <th className="border border-gray-300 px-3 py-2 font-bold">
                          Service
                        </th>
                        <th className="border border-gray-300 px-3 py-2 font-bold">
                          Type
                        </th>
                        <th className="border border-gray-300 px-3 py-2 font-bold">
                          Expires in
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-700">
                      <tr className="hover:bg-gray-50 even:bg-gray-50/50">
                        <td className="border border-gray-300 px-3 py-2">
                          4cfbcefc-fcf9-4b66-5dc6-9b0d81bb07a9
                        </td>
                        <td className="border border-gray-300 px-3 py-2">-</td>
                        <td className="border border-gray-300 px-3 py-2">
                          data.pendo.io
                        </td>
                        <td className="border border-gray-300 px-3 py-2">-</td>
                        <td className="border border-gray-300 px-3 py-2">
                          pixel_tracker
                        </td>
                        <td className="border border-gray-300 px-3 py-2">
                          session
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50 even:bg-gray-50/50">
                        <td className="border border-gray-300 px-3 py-2">s7</td>
                        <td className="border border-gray-300 px-3 py-2">
                          Gather data regarding site usage and user behavior on
                          the website.
                        </td>
                        <td className="border border-gray-300 px-3 py-2">
                          calendly.com
                        </td>
                        <td className="border border-gray-300 px-3 py-2">
                          Adobe Analytics
                        </td>
                        <td className="border border-gray-300 px-3 py-2">
                          server_cookie
                        </td>
                        <td className="border border-gray-300 px-3 py-2">
                          21 days
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50 even:bg-gray-50/50">
                        <td className="border border-gray-300 px-3 py-2">
                          _ga_#
                        </td>
                        <td className="border border-gray-300 px-3 py-2">
                          Used to distinguish individual users by means of
                          designation of a randomly generated number as client
                          identifier, which allows calculation of visits and
                          sessions
                        </td>
                        <td className="border border-gray-300 px-3 py-2">
                          .sovlead.com
                        </td>
                        <td className="border border-gray-300 px-3 py-2">
                          Google Analytics
                        </td>
                        <td className="border border-gray-300 px-3 py-2">
                          http_cookie
                        </td>
                        <td className="border border-gray-300 px-3 py-2">
                          1 year 1 month 4 days
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50 even:bg-gray-50/50">
                        <td className="border border-gray-300 px-3 py-2">
                          _ga
                        </td>
                        <td className="border border-gray-300 px-3 py-2">
                          Records a particular ID used to come up with data
                          about website usage by the user
                        </td>
                        <td className="border border-gray-300 px-3 py-2">
                          .sovlead.com
                        </td>
                        <td className="border border-gray-300 px-3 py-2">
                          Google Analytics
                        </td>
                        <td className="border border-gray-300 px-3 py-2">
                          http_cookie
                        </td>
                        <td className="border border-gray-300 px-3 py-2">
                          1 year 1 month 4 days
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* --- Table 4: Unclassified Cookies --- */}
            <div className="mb-8 bg-white border border-gray-200 shadow-sm rounded-lg overflow-hidden">
              <div className="bg-gray-100 px-4 py-3 font-bold border-b border-gray-200">
                Unclassified cookies
              </div>
              <div className="p-4">
                <p className="mb-4 text-gray-700">
                  These are cookies that have not yet been categorized. We are
                  in the process of classifying these cookies with the help of
                  their providers.
                </p>
                <div className="overflow-x-auto">
                  <table className="min-w-full text-sm text-left border-collapse border border-gray-300">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="border border-gray-300 px-3 py-2 font-bold">
                          Name
                        </th>
                        <th className="border border-gray-300 px-3 py-2 font-bold">
                          Provider
                        </th>
                        <th className="border border-gray-300 px-3 py-2 font-bold">
                          Type
                        </th>
                        <th className="border border-gray-300 px-3 py-2 font-bold">
                          Expires in
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-700">
                      <tr className="hover:bg-gray-50 even:bg-gray-50/50">
                        <td className="border border-gray-300 px-3 py-2">
                          tPL
                        </td>
                        <td className="border border-gray-300 px-3 py-2">
                          sovlead.com
                        </td>
                        <td className="border border-gray-300 px-3 py-2">
                          html_local_storage
                        </td>
                        <td className="border border-gray-300 px-3 py-2">
                          persistent
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50 even:bg-gray-50/50">
                        <td className="border border-gray-300 px-3 py-2">
                          tTDu
                        </td>
                        <td className="border border-gray-300 px-3 py-2">
                          sovlead.com
                        </td>
                        <td className="border border-gray-300 px-3 py-2">
                          html_local_storage
                        </td>
                        <td className="border border-gray-300 px-3 py-2">
                          persistent
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50 even:bg-gray-50/50">
                        <td className="border border-gray-300 px-3 py-2">
                          tMQ
                        </td>
                        <td className="border border-gray-300 px-3 py-2">
                          sovlead.com
                        </td>
                        <td className="border border-gray-300 px-3 py-2">
                          html_local_storage
                        </td>
                        <td className="border border-gray-300 px-3 py-2">
                          persistent
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50 even:bg-gray-50/50">
                        <td className="border border-gray-300 px-3 py-2">
                          tTE
                        </td>
                        <td className="border border-gray-300 px-3 py-2">
                          sovlead.com
                        </td>
                        <td className="border border-gray-300 px-3 py-2">
                          html_local_storage
                        </td>
                        <td className="border border-gray-300 px-3 py-2">
                          persistent
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50 even:bg-gray-50/50">
                        <td className="border border-gray-300 px-3 py-2">
                          tnsApp
                        </td>
                        <td className="border border-gray-300 px-3 py-2">
                          sovlead.com
                        </td>
                        <td className="border border-gray-300 px-3 py-2">
                          html_local_storage
                        </td>
                        <td className="border border-gray-300 px-3 py-2">
                          persistent
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50 even:bg-gray-50/50">
                        <td className="border border-gray-300 px-3 py-2">
                          tTDe
                        </td>
                        <td className="border border-gray-300 px-3 py-2">
                          sovlead.com
                        </td>
                        <td className="border border-gray-300 px-3 py-2">
                          html_local_storage
                        </td>
                        <td className="border border-gray-300 px-3 py-2">
                          persistent
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50 even:bg-gray-50/50">
                        <td className="border border-gray-300 px-3 py-2">
                          tAE
                        </td>
                        <td className="border border-gray-300 px-3 py-2">
                          sovlead.com
                        </td>
                        <td className="border border-gray-300 px-3 py-2">
                          html_local_storage
                        </td>
                        <td className="border border-gray-300 px-3 py-2">
                          persistent
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50 even:bg-gray-50/50">
                        <td className="border border-gray-300 px-3 py-2">
                          ar_debug
                        </td>
                        <td className="border border-gray-300 px-3 py-2">
                          .www.google-analytics.com
                        </td>
                        <td className="border border-gray-300 px-3 py-2">
                          server_cookie
                        </td>
                        <td className="border border-gray-300 px-3 py-2">
                          2 months 29 days
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50 even:bg-gray-50/50">
                        <td className="border border-gray-300 px-3 py-2">
                          tTf
                        </td>
                        <td className="border border-gray-300 px-3 py-2">
                          sovlead.com
                        </td>
                        <td className="border border-gray-300 px-3 py-2">
                          html_local_storage
                        </td>
                        <td className="border border-gray-300 px-3 py-2">
                          persistent
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50 even:bg-gray-50/50">
                        <td className="border border-gray-300 px-3 py-2">
                          tADe
                        </td>
                        <td className="border border-gray-300 px-3 py-2">
                          sovlead.com
                        </td>
                        <td className="border border-gray-300 px-3 py-2">
                          html_local_storage
                        </td>
                        <td className="border border-gray-300 px-3 py-2">
                          persistent
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50 even:bg-gray-50/50">
                        <td className="border border-gray-300 px-3 py-2">
                          tADu
                        </td>
                        <td className="border border-gray-300 px-3 py-2">
                          sovlead.com
                        </td>
                        <td className="border border-gray-300 px-3 py-2">
                          html_local_storage
                        </td>
                        <td className="border border-gray-300 px-3 py-2">
                          persistent
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50 even:bg-gray-50/50">
                        <td className="border border-gray-300 px-3 py-2">tC</td>
                        <td className="border border-gray-300 px-3 py-2">
                          sovlead.com
                        </td>
                        <td className="border border-gray-300 px-3 py-2">
                          html_local_storage
                        </td>
                        <td className="border border-gray-300 px-3 py-2">
                          persistent
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50 even:bg-gray-50/50">
                        <td className="border border-gray-300 px-3 py-2">
                          t3D
                        </td>
                        <td className="border border-gray-300 px-3 py-2">
                          sovlead.com
                        </td>
                        <td className="border border-gray-300 px-3 py-2">
                          html_local_storage
                        </td>
                        <td className="border border-gray-300 px-3 py-2">
                          persistent
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>

          {/* --- Control Cookies on Browser --- */}
          <section className="mb-12">
            <h3 className="text-2xl font-bold mb-4">
              How can I control cookies on my browser?
            </h3>
            <p className="mb-4">
              As the means by which you can refuse cookies through your web
              browser controls vary from browser to browser, you should visit
              your browser's help menu for more information. The following is
              information about how to manage cookies on the most popular
              browsers:
            </p>
            <ul className="mb-4 list-disc list-inside space-y-1">
              <li>
                <a
                  href="https://support.google.com/chrome/answer/95647"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Chrome
                </a>
              </li>
              <li>
                <a
                  href="https://support.microsoft.com/en-us/windows/delete-and-manage-cookies-168dab11-0753-043d-7c16-ede5947fc64d"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Internet Explorer
                </a>
              </li>
              <li>
                <a
                  href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Firefox
                </a>
              </li>
              <li>
                <a
                  href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Safari
                </a>
              </li>
              <li>
                <a
                  href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Edge
                </a>
              </li>
              <li>
                <a
                  href="https://help.opera.com/en/latest/web-preferences/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Opera
                </a>
              </li>
            </ul>
            <p className="mb-4">
              In addition, most advertising networks offer you a way to opt out
              of targeted advertising. If you would like to find out more
              information, please visit:
            </p>
            <ul className="mb-4 list-disc list-inside space-y-1">
              <li>
                <a
                  href="https://youradchoices.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Digital Advertising Alliance
                </a>
              </li>
              <li>
                <a
                  href="https://youradchoices.ca/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Digital Advertising Alliance of Canada
                </a>
              </li>
              <li>
                <a
                  href="https://www.edaa.eu/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  European Interactive Digital Advertising Alliance
                </a>
              </li>
            </ul>
          </section>

          {/* --- Other Technologies --- */}
          <section className="mb-12">
            <h3 className="text-2xl font-bold mb-4">
              What about other tracking technologies, like web beacons?
            </h3>
            <p className="mb-4">
              Cookies are not the only way to recognize or track visitors to a
              website. We may use other, similar technologies from time to time,
              like web beacons (sometimes called "tracking pixels" or "clear
              gifs"). These are tiny graphics files that contain a unique
              identifier that enables us to recognize when someone has visited
              our Website or opened an email including them. This allows us, for
              example, to monitor the traffic patterns of users from one page
              within a website to another, to deliver or communicate with
              cookies, to understand whether you have come to the website from
              an online advertisement displayed on a third-party website, to
              improve site performance, and to measure the success of email
              marketing campaigns. In many instances, these technologies are
              reliant on cookies to function properly, and so declining cookies
              will impair their functioning.
            </p>
          </section>

          {/* --- Flash Cookies --- */}
          <section className="mb-12">
            <h3 className="text-2xl font-bold mb-4">
              Do you use Flash cookies or Local Shared Objects?
            </h3>
            <p className="mb-4">
              Websites may also use so-called "Flash Cookies" (also known as
              Local Shared Objects or "LSOs") to, among other things, collect
              and store information about your use of our services, fraud
              prevention, and for other site operations.
            </p>
            <p className="mb-4">
              If you do not want Flash Cookies stored on your computer, you can
              adjust the settings of your Flash player to block Flash Cookies
              storage using the tools contained in the{" "}
              <a
                href="http://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager07.html"
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 hover:underline"
              >
                Website Storage Settings Panel
              </a>
              . You can also control Flash Cookies by going to the{" "}
              <a
                href="http://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager03.html"
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 hover:underline"
              >
                Global Storage Settings Panel
              </a>{" "}
              and following the instructions (which may include instructions
              that explain, for example, how to delete existing Flash Cookies
              (referred to "information" on the Macromedia site), how to prevent
              Flash LSOs from being placed on your computer without your being
              asked, and (for Flash Player 8 and later) how to block Flash
              Cookies that are not being delivered by the operator of the page
              you are on at the time).
            </p>
            <p className="mb-4">
              Please note that setting the Flash Player to restrict or limit
              acceptance of Flash Cookies may reduce or impede the functionality
              of some Flash applications, including, potentially, Flash
              applications used in connection with our services or online
              content.
            </p>
          </section>

          {/* --- Targeted Advertising --- */}
          <section className="mb-12">
            <h3 className="text-2xl font-bold mb-4">
              Do you serve targeted advertising?
            </h3>
            <p className="mb-4">
              Third parties may serve cookies on your computer or mobile device
              to serve advertising through our Website. These companies may use
              information about your visits to this and other websites in order
              to provide relevant advertisements about goods and services that
              you may be interested in. They may also employ technology that is
              used to measure the effectiveness of advertisements. They can
              accomplish this by using cookies or web beacons to collect
              information about your visits to this and other sites in order to
              provide relevant advertisements about goods and services of
              potential interest to you. The information collected through this
              process does not enable us or them to identify your name, contact
              details, or other details that directly identify you unless you
              choose to provide these.
            </p>
          </section>

          {/* --- Updates --- */}
          <section className="mb-12">
            <h3 className="text-2xl font-bold mb-4">
              How often will you update this Cookie Policy?
            </h3>
            <p className="mb-4">
              We may update this Cookie Policy from time to time in order to
              reflect, for example, changes to the cookies we use or for other
              operational, legal, or regulatory reasons. Please therefore
              revisit this Cookie Policy regularly to stay informed about our
              use of cookies and related technologies.
            </p>
            <p className="mb-4">
              The date at the top of this Cookie Policy indicates when it was
              last updated.
            </p>
          </section>

          {/* --- Contact Info --- */}
          <section className="mb-12">
            <h3 className="text-2xl font-bold mb-4">
              Where can I get further information?
            </h3>
            <p className="mb-4">
              If you have any questions about our use of cookies or other
              technologies, please email us at{" "}
              <a
                href="mailto:dave@sovlead.com"
                className="text-blue-600 hover:underline"
              >
                dave@sovlead.com
              </a>{" "}
              or by post to:
            </p>
            <address className="pl-4 border-l-4 border-blue-900 not-italic">
              <strong>Sovereign Leadership LLC</strong>
              <br />
              1201 6th Ave W.
              <br />
              Bradenton, FL 34205
              <br />
              United States
            </address>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;
