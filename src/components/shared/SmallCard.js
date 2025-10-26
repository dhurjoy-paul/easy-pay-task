import BodyText from "../fonts/BodyText";
import Title from "../fonts/Title";

export default function SmallCard({ title, description, svg, number, color }) {
  return (
    <div className={`flex flex-col gap-13 ${color ? "rounded-2xl py-9 px-5" : ""}`}
      style={color ? { backgroundColor: color } : {}}
    >
      <div className="relative">
        {
          number ? (
            <>
              <Title className="text-[5rem] text-[#F3F3F3] -ml-1">{number}</Title>
              <div className="absolute bottom-0 left-2 flex items-center h-fit">
                {svg}
              </div>
            </>
          ) : (
            <div className="flex items-center h-12 justify-center">
              {svg}
            </div>
          )
        }
      </div>

      <div>
        <Title className={`text-xl text-[#01081B] mb-2 ${number ? "text-start" : "text-center"}`}>{title}</Title>
        <BodyText className={`text-base text-[#4D525F] ${number ? "text-start" : "text-center"}`}>{description}</BodyText>
      </div>
    </div>
  )
}