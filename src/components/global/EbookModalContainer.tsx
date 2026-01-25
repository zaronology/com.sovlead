"use client";

import React, { useState } from "react";
import EbookModal from "./EbookModal";

interface EbookModalContainerProps {
  btn_text: string;
  btn_href: string;
}

const EbookModalContainer: React.FC<EbookModalContainerProps> = ({
  btn_text,
  btn_href,
}) => {
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <>
      <a
        href={btn_href}
        className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg shadow-md hover:shadow-lg transition-all focus:ring-4 focus:ring-blue-500/50 outline-none"
        onClick={(e) => {
          e.preventDefault();
          setShowModal(true);
        }}
      >
        <span>{btn_text}</span>
      </a>

      <EbookModal show={showModal} handleClose={() => setShowModal(false)} />
    </>
  );
};

export default EbookModalContainer;
