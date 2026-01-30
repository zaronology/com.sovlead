"use client";

import { useState } from "react";
import Image from "next/image";
import FoundryApplicationForm from "./FoundryApplicationForm";
import BookingModal from "./CalendarBookingModal";
import theFoundryLogo from "@/assets/images/fd-logo-horizontial-w.png";

const FoundryApplicationPage: React.FC = () => {
  const [showBookingModal, setShowBookingModal] = useState<boolean>(false);

  // Triggered when the child form successfully submits to the API
  const handleFormSuccess = () => {
    setShowBookingModal(true);
  };

  return (
    <section className="w-full py-12">
      <div className="w-10/12 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-lg rounded-xl overflow-hidden border border-gray-100 mb-8">
          <div className="bg-slate-900 py-8 px-4 flex flex-col items-center justify-center">
            <div className="w-full max-w-lg mb-3">
              <Image
                src={theFoundryLogo}
                alt="The Foundry Logo"
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </div>

          <div className="px-6 py-8 sm:p-10">
            <h1 className="text-5xl font-extrabold text-f-rust text-center mb-8">
              The Application
            </h1>

            {/* Content Text */}
            <div className="space-y-4 text-gray-700 leading-relaxed text-base md:text-lg">
              <p>
                The Foundry is a 6-month, 1:1 engagement for CIOs, CTOs, VPs of
                Engineering, and Technical Founders who know they're capable of
                leading the next wave—but are still fighting to be heard.
              </p>
              <p>
                <strong className="text-f-rust">
                  You’re carrying the responsibility without the authority.
                </strong>{" "}
                The room listens just enough to give you the work, not the
                authority.
              </p>
              <p>
                The Foundry is where that changes. You stop living in reaction
                mode and start holding your position. You build the internal
                system that lets you read the field, own the hard calls, and
                move the business forward.
              </p>
              <p>
                I only work with a handful of leaders at a time. This form is
                how I decide who I get in the ring with.
              </p>
              <p>
                Take 5–7 minutes to answer thoughtfully. After you submit,
                you’ll be prompted to book a 15-minute fit call. If it’s clearly
                not a match, I’ll cancel the call and let you know why.
              </p>
              <p className="font-semibold text-f-rust border-l-4 border-gold pl-4 py-1 mt-6">
                For those who are done being treated like a problem-solver
                instead of a leader, this is your move.
              </p>
            </div>
          </div>
        </div>

        {/* --- Application Form --- */}
        <FoundryApplicationForm onSuccess={handleFormSuccess} />
      </div>

      {/* --- Booking Modal --- */}
      <BookingModal
        show={showBookingModal}
        handleClose={() => setShowBookingModal(false)}
      />
    </section>
  );
};

export default FoundryApplicationPage;
