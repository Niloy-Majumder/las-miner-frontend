import React, { useState, useRef, useEffect } from "react";
import { FiPlus } from "react-icons/fi";

const FaqItem = ({ data }) => {
  const [active, setActive] = useState(false);

  const contentRef = useRef(null);

  useEffect(() => {
    contentRef.current.style.maxHeight = active
      ? `${contentRef.current.scrollHeight}px`
      : "0px";
  }, [contentRef, active]);

  const toggleAccordion = () => {
    setActive(!active);
  };

  return (
    <div className="App">
      <div>
        <button
          className={`question-section ${active}`}
          onClick={toggleAccordion}
        >
          <div>
            <div className="question-align">
              <h4 className="question-style">{data.question}</h4>
              <FiPlus
                className={active ? `question-icon rotate` : `question-icon`}
              />
            </div>
            <div
              ref={contentRef}
              className={active ? `answer answer-divider` : `answer`}
            >
              <p className="home-content">{data.answer}</p>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default FaqItem;
