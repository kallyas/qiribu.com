import React from "react";
import AccordionItem from "./AccordionItem";
import { faqs } from "../data/faqs";

export default function Accordion({ activeTab }) {
  return (
    <div className="accordion" id="accordionFAQ">
      {faqs.map((item, index) => {
        return (
          <AccordionItem
            key={`${item.type}-${index}`} // Use a unique key combining item type and index
            question={item.question}
            answer={item.answer}
          />
        );
      })}
    </div>
  );
}
