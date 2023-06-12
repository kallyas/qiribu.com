import React, { useState } from "react";
import AccordionItem from "./AccordionItem";
import { faqs } from "../data/faqs";

export default function Accordion({ activeTab }) {
  const [openItem, setOpenItem] = useState(null);

  const handleToggle = (index) => {
    setOpenItem((prev) => (prev === index ? null : index));
  };

  return (
    <div className="accordion" id="accordionFAQ">
      {faqs
        .filter((item) => item.type === activeTab)
        .map((item, index) => {
          return (
            <AccordionItem
              key={`${item.type}-${index}`} // Use a unique key combining item type and index
              question={item.question}
              answer={item.answer}
              isOpen={openItem === index}
              onToggle={() => handleToggle(index)}
            />
          );
        })}
    </div>
  );
}
