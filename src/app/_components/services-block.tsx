import ServiceCard from "~/components/service-card";
import CardIllustration1 from "~/svg/card-illustration1";
import CardIllustration2 from "~/svg/card-illustration2";
import CardIllustration3 from "~/svg/card-illustration3";
import CardIllustration4 from "~/svg/card-illustration4";
import CardIllustration5 from "~/svg/card-illustration5";
import CardIllustration6 from "~/svg/card-illustration6";

export default function ServicesBlock() {
  return (
    <div className="grid w-full grid-cols-1 justify-items-center gap-10 xl:grid-cols-2">
      <ServiceCard
        heading={{ text: ["Search engine", "optimization"], className: "bg-[#B9FF66]" }}
        arrow={{ bg: "#191A23", color: "#B9FF66" }}
      >
        <CardIllustration1 />
      </ServiceCard>
      <ServiceCard
        heading={{ text: ["Pay-per-click", "advertising"], className: "bg-white" }}
        arrow={{ bg: "#191A23", color: "#B9FF66" }}
        className="bg-[#B9FF66]"
      >
        <CardIllustration2 />
      </ServiceCard>
      <ServiceCard
        heading={{ text: ["Social Media", "Marketing"], className: "bg-white" }}
        arrow={{ bg: "#fff", color: "#191A23", textColor: "#fff" }}
        className="bg-[#191A23]"
      >
        <CardIllustration3 />
      </ServiceCard>
      <ServiceCard
        heading={{ text: ["Email", "Marketing"], className: "bg-[#B9FF66]" }}
        arrow={{ bg: "#191A23", color: "#B9FF66" }}
      >
        <CardIllustration4 />
      </ServiceCard>
      <ServiceCard
        heading={{ text: ["Content", "Creation"], className: "bg-white" }}
        arrow={{ bg: "#191A23", color: "#B9FF66" }}
        className="bg-[#B9FF66]"
      >
        <CardIllustration5 />
      </ServiceCard>
      <ServiceCard
        heading={{ text: ["Analytics and", "Tracking"], className: "bg-[#B9FF66]" }}
        arrow={{ bg: "#fff", color: "#191A23", textColor: "#fff" }}
        className="bg-[#191A23]"
      >
        <CardIllustration6 />
      </ServiceCard>
    </div>
  );
}
