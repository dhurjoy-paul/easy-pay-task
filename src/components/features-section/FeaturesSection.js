import Container from "../Container";
import Features from "./Features";
import LogoMarquee from "./LogoMarquee";

export default function FeaturesSection() {
  return (
    <section className="py-30 space-y-18">
      <Container>
        <Features />
      </Container>
      <LogoMarquee />
    </section>
  )
}