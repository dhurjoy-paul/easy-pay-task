import BodyText from "../fonts/BodyText"
import Title from "../fonts/Title"

export default function SecurityCard({ card }) {
  const { title, description, dotColor, dotBg } = card || {}

  return (
    <div className="flex flex-col justify-start items-start gap-6 med:px-6">

      <div className={`flex items-center justify-center size-7 rounded-full`}
        style={{ backgroundColor: dotBg }}>
        <span className={`size-2.5 rounded-full`} style={{ backgroundColor: dotColor }} />
      </div>

      <div className="flex flex-col items-start md:w-50 lar:w-60 lg:w-75 flex-1 mb-2">
        <Title className="text-xl text-[#01081B]">{title}</Title>
        <BodyText className="text-base text-[#4D525F]">{description}</BodyText>
      </div>
    </div>
  )
}