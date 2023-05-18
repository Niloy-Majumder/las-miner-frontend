import React, { useState, useRef, useEffect } from "react";
import FaqItem from "./FaqItem";

const faqItems = [
  {
    id: 0,
    question: "Why do you love Programming",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 1,
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
      <FaqItem data={faqItems[0]} />
      <FaqItem data={faqItems[1]} />
      <FaqItem data={faqItems[0]} />
    </div>
  );
}

export default Faq;
