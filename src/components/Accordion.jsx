import AccordionItem from "./AccordionItem";
import { faqs } from "../data/faqs";

export default function Accordion() {
  return (
    <div className="accordion" id="accordionFAQ">
      {faqs.map((item, index) => (
        <AccordionItem
          key={index}
          question={item.question}
          answer={item.answer}
        />
      ))}
    </div>
  );
}
