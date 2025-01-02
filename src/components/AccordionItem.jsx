export default function AccordionItem({ number, question, answer }) {
  return (
    <div className="py-[20px] px-[24px] pr-[48px] cursor-pointer border-t-[4px] border-solid border-[#fff] border-b-[4px] grid items-center accordion-item">
      <p className="text-[24px] font-medium text-[#ced4da]">{number}</p>
      <p className="text-[24px] font-medium">{question}</p>
      <p className="text-[24px] font-medium">+</p>
      <div className="pb-[16px] leading-[1.6] answer">{answer}</div>
    </div>
  );
}
