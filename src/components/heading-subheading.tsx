export default function HeadingSubheading(props: { heading: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-10">
      <h2 className="rounded-[7px] bg-[#B9FF66] px-[7px] text-[40px] font-medium">
        {props.heading}
      </h2>
      <p className="text-lg leading-[23px]">{props.children}</p>
    </div>
  );
}
