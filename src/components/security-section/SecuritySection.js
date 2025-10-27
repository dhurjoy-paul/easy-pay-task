import Container from "../Container";
import BodyText from "../fonts/BodyText";
import SmallTitle from "../fonts/SmallTitle";
import Title from "../fonts/Title";
import Securities from "./Securities";

export default function SecuritySection() {
  return (
    <section className="py-30">
      <Container className="space-y-12">
        {/* section head */}
        <div>
          <SmallTitle className="text-base text-[#932EFA] text-center lg:text-left">
            SECURITY
          </SmallTitle>
          <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between">
            <Title className="text-[1.8rem] md:text-[2.5rem] text-[#01081B] max-w-xl my-1 text-center lg:text-left">
              We protect your money at every step with Easy Pay
            </Title>
            <BodyText className="text-base text-[#4D525F] w-[380px] text-center lg:text-left">
              Easy Pay ensures your money is protected at every step with advanced encryption, real-time monitoring, and multi-factor authentication.
            </BodyText>
          </div>
        </div>

        <Securities />
      </Container>
    </section>
  )
}