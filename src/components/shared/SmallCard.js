import BodyText from "../fonts/BodyText";
import Title from "../fonts/Title";

export default function SmallCard({ title, description, svg, number, color }) {
  return (
    <div className={`flex flex-col gap-13 
      ${color ? "rounded-2xl py-9 px-5" : ""}
      ${number ? "pb-3 59rem:pb-6 px-3 59rem:px-6" : ""}`}
      style={color ? { backgroundColor: color } : {}}
    >
      {
        number ? (
          <div className="relative flex justify-center md:justify-start">
            <div className="relative">
              <Title className="text-[5rem] text-[#F3F3F3] -ml-1">{number}</Title>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 md:left-2.5 md:translate-x-0 flex items-center h-fit">
                {svg}
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center h-12 justify-center">
            {svg}
          </div>
        )
      }

      <div>
        <Title className={`text-xl text-[#01081B] mb-2 ${number ? "text-center md:text-start whitespace-nowrap" : "text-center"}`}>{title}</Title>
        <BodyText className={`text-base text-[#4D525F] ${number ? "mx-auto text-center md:text-start lar:w-60" : "text-center"}`}>{description}</BodyText>
      </div>
    </div>
  )
}