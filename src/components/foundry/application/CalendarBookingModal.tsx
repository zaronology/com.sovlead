import React, { useEffect } from "react";

interface BookingModalProps {
  show: boolean;
  handleClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ show, handleClose }) => {
  const GOOGLE_APPOINTMENT_URL =
    "https://calendar.google.com/calendar/appointments/schedules/AcZssZ3aGizNTlrqiMXj-iUyd2mOHK2ZVuyW2u1SgTsOTarmcYkbxfcBvLAfPOutLZ6EEvpgGb2_2PXY?gv=true";

  // Prevent background scrolling when the modal is open
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

  // Do not render anything if 'show' is false
  if (!show) return null;

  return (
    // Backdrop: Fixed position, full screen, semi-transparent black
    // We intentionally do NOT add an onClick here to mimic backdrop="static"
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      {/* Modal Dialog: Centered, max-width equivalent to Bootstrap "lg" */}
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-2xl flex flex-col overflow-hidden h-[700px] max-h-[90vh] animate-in zoom-in-95 duration-200">
        {/* Modal Header */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-100 bg-gray-50">
          <h3 className="text-xl font-bold text-gray-800">
            Book Your Fit Call
          </h3>
          <button
            onClick={handleClose}
            className="text-gray-400 hover:text-gray-700 hover:bg-gray-200 p-2 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Close modal"
          >
            <svg
              className="w-6 h-6"
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

        {/* Modal Body: iFrame Container */}
        <div className="flex-1 w-full h-full overflow-hidden bg-white">
          <iframe
            src={GOOGLE_APPOINTMENT_URL}
            className="w-full h-full border-0"
            title="Schedule Appointment"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
