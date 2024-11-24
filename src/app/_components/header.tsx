import Illustration from "~/svg/illustration";

export default function Header() {
  return (
    <div className="flex w-[1440px] justify-between px-[100px]">
      <div className="flex flex-col items-start gap-[35px]">
        <h1 className="text-[60px] font-medium">
          Navigating the <br /> digital landscape <br />
          for success
        </h1>
        <p className="text-xl">
          Our digital marketing agency helps businesses <br /> grow and succeed online through a
          range of <br /> services including SEO, PPC, social media marketing,
          <br /> and content creation.
        </p>
        <button className="rounded-[14px] bg-[#191A23] px-[35px] py-5 text-xl text-white">
          Book a consultation
        </button>
      </div>
      <Illustration className="h-[515px]" />
    </div>
  );
}
