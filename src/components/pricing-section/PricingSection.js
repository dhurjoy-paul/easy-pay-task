import Container from "../Container";
import SmallTitle from "../fonts/SmallTitle";
import Title from "../fonts/Title";
import Pricings from "./Pricings";

export default function PricingSection() {
  return (
    <section className="pb-30 pricing-gradient">
      <Container className="space-y-12">
        {/* section head */}
        <div className="text-center">
          <SmallTitle className="text-base text-[#932EFA]">
            PRICING
          </SmallTitle>
          <Title className="text-[1.8rem] md:text-[2.5rem] text-[#01081B] max-w-lg mx-auto mt-1">
            Simple transparent pricing no hidden fees
          </Title>
        </div>

        <Pricings />
      </Container>
    </section>
  )
}