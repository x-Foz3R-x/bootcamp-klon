import CTAIllustration from "~/svg/cta-illustration";

export default function CTA() {
  return (
    <div className="relative flex items-center rounded-[45px] bg-[#F3F3F3] p-[60px]">
      <div className="flex w-1/2 flex-col gap-[23px]">
        <h3 className="text-[30px] font-medium leading-[38px]">Let’s make things happen</h3>
        <p className="text-pretty text-lg leading-[23px]">
          Contact us today to learn more about how our digital marketing services can help your
          business grow and succeed online.
        </p>

        <button className="w-fit rounded-[14px] bg-[#191A23] px-[35px] py-5 text-xl text-white">
          Get your free proposal
        </button>
      </div>

      <div className="absolute right-0 w-[494px]">
        <CTAIllustration />
      </div>
    </div>
  );
}
