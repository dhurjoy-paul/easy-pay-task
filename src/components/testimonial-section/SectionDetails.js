import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import BodyText from "../fonts/BodyText";
import SmallTitle from "../fonts/SmallTitle";
import Title from "../fonts/Title";

export default function SectionDetails({ onPrev, onNext }) {
  return (
    <div className="text-left">
      <SmallTitle className="text-base text-[#932EFA]">
        TESTIMONIAL
      </SmallTitle>
      <Title className="text-[1.8rem] md:text-[2.5rem] text-[#01081B] max-w-lg mt-1 mb-3">
        We&apos;ve build trust with reviews from real users
      </Title>
      <BodyText className="text-base md:w-120 mb-10">
        Boost your credibility by featuring genuine testimonials from real users, showcasing their positive experiences and satisfaction with Monks Pay services.
      </BodyText>
      <div className="flex items-center gap-3">
        <CircularBtn icon={IoIosArrowBack} onClick={onPrev} />
        <CircularBtn icon={IoIosArrowForward} onClick={onNext} />
      </div>
    </div>
  );
}

function CircularBtn({ icon: Icon, onClick }) {
  return (
    <button
      onClick={onClick}
      className="size-14 rounded-full border border-[#CFC0D1] flex items-center justify-center text-xl text-[#4D525F] hover:bg-[#01081B] hover:text-white hover:border-[#01081B] transition"
    >
      <Icon />
    </button>
  );
}
