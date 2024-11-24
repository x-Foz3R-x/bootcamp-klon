import ProcessCard from "~/components/process-card";
import MinusIcon from "~/svg/minus-icon";

export default function ProcessBlock() {
  return (
    <div className="flex w-[1440px] flex-col gap-[30px] px-[100px]">
      <div className="flex w-[1234px] flex-col items-center justify-between gap-[30px] whitespace-nowrap rounded-[45px] border border-[#191A23] bg-[#B9FF66] px-[60px] py-[41px] shadow-[0_5px_0_0_#191A23]">
        <div className="flex w-[1117px] items-center justify-between">
          <label className="flex items-center gap-[25px] text-[30px] font-medium leading-[38px]">
            <span className="text-[60px] leading-[76.5px]">01</span>
            Consultation
          </label>

          <MinusIcon />
        </div>

        <div className="h-px w-full bg-black" />

        <p className="w-full text-lg leading-[23px]">
          During the initial consultation, we will discuss your business goals and objectives,
          target audience, and current marketing <br /> efforts. This will allow us to understand
          your needs and tailor our services to best fit your requirements.
        </p>
      </div>

      <ProcessCard text={["02", "Research and Strategy Development"]} />
      <ProcessCard text={["03", "Implementation"]} />
      <ProcessCard text={["04", "Monitoring and Optimization"]} />
      <ProcessCard text={["05", "Reporting and Communication"]} />
      <ProcessCard text={["06", "Continual Improvement"]} />
    </div>
  );
}
