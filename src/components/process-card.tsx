import PlusIcon from "~/svg/plus-icon";

type Props = {
  text: [string, string];
};

export default function ProcessCard({ text }: Props) {
  return (
    <div className="flex w-[1234px] items-center justify-between gap-[10px] whitespace-nowrap rounded-[45px] border border-[#191A23] bg-[#F3F3F3] px-[60px] py-[41px] shadow-[0_5px_0_0_#191A23]">
      <div className="flex w-[1117px] items-center justify-between">
        <label className="flex items-center gap-[25px] text-[30px] font-medium leading-[38px]">
          <span className="text-[60px] leading-[76.5px]">{text[0]}</span>
          {text[1]}
        </label>

        <PlusIcon />
      </div>
    </div>
  );
}
