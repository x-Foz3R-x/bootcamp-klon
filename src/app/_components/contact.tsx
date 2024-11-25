"use client";

import RadioGroup from "~/components/radio-group";
import ContactIllustration from "~/svg/contact-illustration";

export default function Contact() {
  return (
    <div className="flex flex-col gap-[30px]">
      <div className="relative flex items-center gap-[10px] rounded-[45px] bg-[#F3F3F3] px-[100px] pb-[80px] pt-[60px]">
        <form className="flex w-1/2 flex-col gap-10">
          <RadioGroup
            groupName="contact"
            options={[
              { id: "say", label: "Say Hi" },
              { id: "get", label: "Get a Quote" },
            ]}
            className="flex gap-[35px]"
          />

          <div className="flex flex-col gap-[25px]">
            <div className="flex flex-col gap-[5px]">
              <label htmlFor="name" className="text-base">
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="rounded-[14px] border border-black px-[30px] py-[18px] text-lg"
              />
            </div>

            <div className="flex flex-col gap-[5px]">
              <label htmlFor="email" className="text-base">
                Email*
              </label>
              <input
                type="text"
                name="email"
                placeholder="Email"
                className="rounded-[14px] border border-black px-[30px] py-[18px] text-lg"
              />
            </div>

            <div className="flex flex-col gap-[5px]">
              <label htmlFor="message" className="text-base">
                Message*
              </label>
              <textarea
                name="message"
                placeholder="Message"
                rows={6}
                className="resize-none rounded-[14px] border border-black px-[30px] py-[18px] text-lg"
              />
            </div>
          </div>

          <button
            onClick={(e) => e.preventDefault()}
            className="rounded-[14px] bg-[#191A23] px-[35px] py-5 text-xl text-white"
          >
            Send Message
          </button>
        </form>

        <div className="absolute right-6 aspect-auto h-[648px] translate-x-1/2">
          <ContactIllustration />
        </div>
      </div>
    </div>
  );
}
