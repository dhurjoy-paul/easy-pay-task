import Container from "../Container";
import SmallTitle from "../fonts/SmallTitle";
import Title from "../fonts/Title";
import Button from "../shared/Button";
import Steps from "./Steps";
import WorkImage from "./WorkImage";

export default function HowItWorksSection() {
  return (
    <section className="bg-[#F6F6F6] py-30">
      <Container>
        {/* section head */}
        <div className="flex flex-col lg:flex-row items-center lg:items-end justify-between">
          <div className="text-center lg:text-left">
            <SmallTitle className="text-base text-[#932EFA]">
              HOW IT WORKS
            </SmallTitle>
            <Title className="text-[1.8rem] md:text-[2.5rem] text-[#01081B] max-w-xl mt-1">
              Make payments, transfers, and more in 3 simple steps
            </Title>
          </div>
          <div className="mt-6 lg:mt-0">
            <Button>Get Started Now</Button>
          </div>
        </div>

        <Steps />

        <WorkImage />
      </Container>
    </section>
  )
}