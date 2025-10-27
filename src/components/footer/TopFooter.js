import BodyText from "../fonts/BodyText";
import Title from "../fonts/Title";
import Button from "../shared/Button";

export default function TopFooter() {
  return (
    <div className="relative w-full bg-cover bg-center bg-no-repeat py-22 rounded-2xl "
      style={{ backgroundImage: `url(/TopFooterImage.png)` }}
    >
      <div className="absolute inset-0 bg-black/70 rounded-2xl" />
      <div className="relative flex flex-col items-center text-center text-white max-w-[580] mx-auto">
        <Title className="text-[1.8rem] md:text-[2.5rem] px-6 sm:px-0">
          Ready to experience seamless secure payments globally
        </Title>


        <BodyText className="text-sm sm:text-base max-w-2xl mt-4 sm:mt-3 mb-10 px-4 sm:px-0">
          Ready for hassle-free, secure payments anywhere in the world? Start using Monks Pay today — it&apos;s fast, free, and on keeping your transactions secure!
        </BodyText>

        <div className="flex flex-wrap justify-center items-center gap-3">
          <Button>Download the App</Button>
          <Button variant="outline">Get Started Now</Button>
        </div>
      </div>
    </div>
  );
}
