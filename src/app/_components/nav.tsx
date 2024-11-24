import Logo from "~/svg/logo";

export default function Nav() {
  return (
    <nav className="flex h-[68px] w-[1440px] items-center justify-between gap-3 bg-white/80 px-[100px] backdrop:blur-xl">
      <Logo className="h-9 flex-shrink-0" />

      <ul className="flex items-center gap-10 whitespace-nowrap text-xl">
        <li>About us</li>
        <li>Services</li>
        <li>Use Cases</li>
        <li>Pricing</li>
        <li>Blog</li>

        <button className="rounded-[14px] border border-[#191A23] px-[35px] py-5">
          Request a quote
        </button>
      </ul>
    </nav>
  );
}
