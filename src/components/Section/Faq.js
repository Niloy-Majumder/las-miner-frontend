import React, { useState, useRef, useEffect } from "react";
import FaqItem from "./FaqItem";

const faqItems = [
  {
    id: 0,
    question: "What is a land registration system using blockchain?",
    answer:
      "A land registration system using blockchain is a digital platform that utilizes blockchain technology to record, verify, and manage land ownership records and related transactions. It aims to create a transparent, secure, and efficient framework for land registration.",
  },
  {
    id: 1,
    question:
      "How does blockchain technology improve land registration systems?",
    answer:
      "Blockchain technology improves land registration systems by providing transparency, security, and efficiency. It offers a decentralized and tamper-proof ledger that records all land transactions, reduces fraud, increases trust, and automates processes, leading to streamlined and reliable land registration procedures.",
  },
  {
    id: 2,
    question:
      "What are the advantages of a land registration system using blockchain?",
    answer:
      "The advantages of a land registration system using blockchain include enhanced transparency, reduced fraud and disputes, improved security, increased efficiency, streamlined processes, inclusivity, and trust in land ownership records.",
  },
  {
    id: 3,
    question:
      "Can blockchain guarantee the accuracy of land ownership records?",
    answer:
      "While blockchain provides an immutable and transparent record of land ownership transactions, it does not guarantee the accuracy of the underlying data. The system relies on the accuracy of the information provided during the registration process. However, by reducing fraud and providing a trustworthy source of information, blockchain can improve the overall accuracy and integrity of land ownership records.",
  },
  {
    id: 4,
    question:
      "How does the land registration system handle disputes or conflicting claims?",
    answer:
      "A land registration system using blockchain can help resolve disputes by providing a transparent and auditable record of all land transactions. The transaction history on the blockchain can be used as evidence to verify ownership and resolve conflicts. Additionally, the system can incorporate mechanisms for dispute resolution, such as arbitration or mediation, to address conflicting claims.",
  },
  {
    id: 5,
    question: "Why do you hate Programming",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];

function Faq() {
  return (
    <div className="faq-wrapper">
      <FaqItem data={faqItems[0]} />
      <FaqItem data={faqItems[1]} />
      <FaqItem data={faqItems[2]} />
      <FaqItem data={faqItems[3]} />
      <FaqItem data={faqItems[4]} />
    </div>
  );
}

export default Faq;
