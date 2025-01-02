export default function AccordionItem({ number, question, answer }) {
  return (
    <div
      className="py-[20px] px-[24px] pr-[48px] cursor-pointer border-t-[4px] border-t-solid border-t-[#fff] 
    border-b-[4px] border-b-solid border-b-[#fff] grid grid-cols-[auto_1fr_auto] items-center gap-x-[24px] 
    gap-y-[32px] shadow-[0_0_30px_rgba(0,0,0,0.1)]"
    >
      <p className="lg:text-[24px] text-[18px] font-medium text-[#ced4da]">
        {number}
      </p>
      <p className="lg:text-[24px] text-[18px] font-medium leading-[1.5]">
        {question}
      </p>
      <p className="lg:text-[24px] text-[18px] font-medium">+</p>
      <div className="pb-[16px] leading-[1.6] answer">{answer}</div>
    </div>
  );
}
