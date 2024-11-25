import FB from "~/svg/fb";
import LinkedIn from "~/svg/linkedin";
import Logo from "~/svg/logo";
import Twitter from "~/svg/twitter";

export default function Footer() {
  return (
    <div className="flex flex-col gap-[50px] rounded-t-[45px] bg-[#191A23] px-[60px] py-[55px]">
      <div className="flex justify-between">
        <Logo className="h-[29px] fill-white" />

        <ul className="flex gap-10">
          <li className="text-lg text-white underline">About us</li>
          <li className="text-lg text-white underline">Services</li>
          <li className="text-lg text-white underline">Use Cases</li>
          <li className="text-lg text-white underline">Pricing</li>
          <li className="text-lg text-white underline">Blog</li>
        </ul>

        <div className="flex gap-5">
          <LinkedIn />
          <FB />
          <Twitter />
        </div>
      </div>

      <div className="flex justify-between">
        <div className="flex flex-col gap-[27px]">
          <h4 className="w-min whitespace-nowrap rounded-[7px] bg-[#B9FF66] px-[7px] text-xl">
            Contact us:
          </h4>

          <ul className="flex flex-col gap-5 text-lg text-white">
            <li>Email: info@positivus.com</li>
            <li>Phone: 555-567-8901</li>
            <li>
              Address: 1234 Main St <br /> Moonstone City, Stardust State 12345
            </li>
          </ul>
        </div>

        <div className="flex gap-5 rounded-[14px] bg-[#292A32] px-10 py-[58px]">
          <input
            type="text"
            placeholder="Email"
            className="rounded-[14px] border border-white bg-transparent px-[35px] py-[22px] text-white"
          />
          <button className="rounded-[14px] bg-[#B9FF66] px-[35px] py-5 text-xl text-black">
            Subscribe to news
          </button>
        </div>
      </div>

      <ul className="flex gap-10 border-t border-white pt-[50px] text-lg text-white">
        <li>© 2023 Positivus. All Rights Reserved.</li>
        <li>Privacy Policy</li>
      </ul>
    </div>
  );
}
