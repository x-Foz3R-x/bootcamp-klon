import { cn } from "~/lib/utils";

type Props = {
  heading: { text: [string, string]; className: string };
  arrow: { bg: string; color: string; textColor?: string };
  className?: string;
  children?: React.ReactNode;
};

export default function ServiceCard({ heading, arrow, className, children }: Props) {
  return (
    <div
      className={cn(
        "flex h-[310px] w-[600px] items-center justify-between whitespace-nowrap rounded-[45px] border border-[#191A23] bg-[#F3F3F3] p-[50px] shadow-[0_5px_0_0_#191A23]",
        className,
      )}
    >
      <div className="flex w-min flex-col gap-[93px]">
        <div>
          <h3
            className={cn(
              "w-min rounded-[7px] px-[7px] text-[30px] font-medium",
              heading.className,
            )}
          >
            {heading.text[0]}
          </h3>
          <h3
            className={cn(
              "w-min rounded-[7px] px-[7px] text-[30px] font-medium",
              heading.className,
            )}
          >
            {heading.text[1]}
          </h3>
        </div>

        <button className="flex items-center gap-[15px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 41 41"
            className="size-[41px] flex-shrink-0"
          >
            <circle cx="20.5" cy="20.5" r="20.5" fill={arrow.bg} />
            <path
              fill={arrow.color}
              d="M11.25 24.701c-.7174.4142-.9633 1.3316-.549 2.049.4142.7174 1.3316.9633 2.049.549l-1.5-2.598Zm19.5194-8.3128c.2144-.8002-.2605-1.6227-1.0607-1.8371l-13.04-3.494c-.8002-.2145-1.6227.2604-1.8371 1.0606-.2144.8002.2605 1.6227 1.0607 1.8371l11.5911 3.1059-3.1058 11.5911c-.2145.8002.2604 1.6227 1.0606 1.8371.8002.2144 1.6227-.2605 1.8371-1.0607l3.4941-13.04ZM12.75 27.299l17.3205-10-1.5-2.598-17.3205 10 1.5 2.598Z"
            />
          </svg>

          <p style={{ color: arrow.textColor }} className="whitespace-nowrap text-xl">
            Learn more
          </p>
        </button>
      </div>

      {children}
    </div>
  );
}
