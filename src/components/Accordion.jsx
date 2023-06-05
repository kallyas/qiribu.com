import AccordionItem from "./AccordionItem";

export default function Accordion() {
  const questions = [
    {
      question: "What is Qiribu?",
      answer:
        "Qiribu is a financial wellness platform that enables employees to access a portion of their earned wages before payday. Employers can offer this benefit at no cost to them, while employees pay a minimal fee for fund transfers. Qiribu is a win-win for both employers and employees.",
    },
    {
      question: "How does Qiribu work?",
      answer:
        "Qiribu is a financial wellness platform that enables employees to access a portion of their earned wages before payday. Employers can offer this benefit at no cost to them, while employees pay a minimal fee for fund transfers. Qiribu is a win-win for both employers and employees.",
    },
    {
      question: "How much does Qiribu cost?",
      answer:
        "Qiribu is a financial wellness platform that enables employees to access a portion of their earned wages before payday. Employers can offer this benefit at no cost to them, while employees pay a minimal fee for fund transfers. Qiribu is a win-win for both employers and employees.",
    },
  ];
  return (
    <div className="accordion" id="accordionFAQ">
      {questions.map((item, index) => (
        <AccordionItem
          key={index}
          question={item.question}
          answer={item.answer}
        />
      ))}
    </div>
  );
}
