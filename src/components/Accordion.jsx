import { useState } from "react";
import AccordionItem from "./AccordionItem";

function Accordion({ data }) {
  const [curOpen, setIsOpen] = useState(null);
  return (
    <div className="lg:w-[700px] my-[100px] mx-auto flex flex-col gap-[24px] w-[350px]">
      {data.map((faq, index) => (
        <AccordionItem
          key={index}
          number={index + 1}
          curOpen={curOpen}
          onOpen={setIsOpen}
          question={faq.question}
          answer={faq.answer}
        />
      ))}
    </div>
  );
}

export default Accordion;
