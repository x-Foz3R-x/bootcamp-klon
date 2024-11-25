import Nav from "./_components/nav";
import HeadingSubheading from "~/components/heading-subheading";
import Header from "./_components/header";
import CTA from "./_components/cta";
import Logotypes from "./_components/logotypes";
import ProcessBlock from "./_components/process-block";
import ServicesBlock from "./_components/services-block";
import Contact from "./_components/contact";
import Footer from "./_components/footer";

export default function HomePage() {
  return (
    <div className="flex justify-center">
      <div className="flex w-screen max-w-[1440px] flex-col gap-[80px] px-[100px]">
        <div className="flex flex-col gap-[70px] pt-4">
          <Nav />
          <Header />
          <Logotypes />
        </div>

        <div className="flex flex-col gap-10">
          <HeadingSubheading heading="Services">
            At our digital marketing agency, we offer a range of services to <br />
            help businesses grow and succeed online. These services include:
          </HeadingSubheading>
          <ServicesBlock />
        </div>

        <CTA />

        <div className="flex flex-col gap-10">
          <HeadingSubheading heading="Our Working Process">
            Step-by-Step Guide to Achieving <br /> Your Business Goals
          </HeadingSubheading>
          <ProcessBlock />
        </div>

        <div className="flex flex-col gap-10">
          <HeadingSubheading heading="Contact Us">
            Connect with Us: Let&apos;s Discuss Your <br /> Digital Marketing Needs
          </HeadingSubheading>
          <Contact />
        </div>

        <Footer />
      </div>
    </div>
  );
}
