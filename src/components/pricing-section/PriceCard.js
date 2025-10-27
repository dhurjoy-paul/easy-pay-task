import { FaCheck } from "react-icons/fa6";
import BodyText from "../fonts/BodyText";
import Title from "../fonts/Title";
import Button from "../shared/Button";

export default function PriceCard({ card }) {
  const { title, description, price, advantages, btnText, btnType, BgColor } = card || {}

  const isDark = BgColor === 'dark';
  const gradientId = isDark ? "divider-dark" : "divider-light";
  const titleClr = `${isDark ? 'text-white' : 'text-[#01081B]'}`;
  const iconClasses = `size-3.5 ${isDark ? 'text-white' : 'text-[#2E68FD]'}`;

  return (
    <div className={`flex flex-col rounded-2xl px-6 py-10 border border-[#E7E7E8]
    ${isDark ? 'bg-[#01081B] text-[#B1B2B2]' : 'bg-white text-[#4D525F]'}
    ${isDark ? 'z-10' : ''}
  `}>
      <Title className={`text-2xl mb-1 ${titleClr}`}>{title}</Title>
      <BodyText className="text-base">{description}</BodyText>

      <div className="flex flex-col gap-6">
        <div className="flex items-end mt-6">
          <Title className={`text-[3.5rem] ${titleClr}`}>{price}</Title>
          <BodyText className="text-base self-end mb-2">/month</BodyText>
        </div>

        {/* divider */}
        {/* <svg width="" height="1" viewBox="0 0 322 1" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line y1="0.5" x2="322" y2="0.5" stroke="url(#paint0_linear_1_454)" />
          <defs>
            {
              isDark ? (
                <linearGradient id="paint0_linear_1_454" x1="0" y1="1" x2="322" y2="1.5" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#272727" stopOpacity="0.7" />
                  <stop offset="0.453558" stopColor="#505050" />
                  <stop offset="1" stopColor="#272727" stopOpacity="0.7" />
                </linearGradient>
              ) : (
                <linearGradient id="paint0_linear_1_454" x1="0" y1="1" x2="322" y2="1.5" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#F5F5F5" stopOpacity="0.7" />
                  <stop offset="0.453558" stopColor="#CBCBCB" />
                  <stop offset="1" stopColor="#F5F5F5" stopOpacity="0.7" />
                </linearGradient>
              )
            }
          </defs>
        </svg> */}
        <svg width="100%" height="1" viewBox="0 0 322 1" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line y1="0.5" x2="322" y2="0.5" stroke={`url(#${gradientId})`} />
          <defs>
            {isDark ? (
              <linearGradient id="divider-dark" x1="0" y1="1" x2="322" y2="1.5" gradientUnits="userSpaceOnUse">
                <stop stopColor="#272727" stopOpacity="0.7" />
                <stop offset="0.453558" stopColor="#505050" />
                <stop offset="1" stopColor="#272727" stopOpacity="0.7" />
              </linearGradient>
            ) : (
              <linearGradient id="divider-light" x1="0" y1="1" x2="322" y2="1.5" gradientUnits="userSpaceOnUse">
                <stop stopColor="#F5F5F5" stopOpacity="0.7" />
                <stop offset="0.453558" stopColor="#CBCBCB" />
                <stop offset="1" stopColor="#F5F5F5" stopOpacity="0.7" />
              </linearGradient>
            )}
          </defs>
        </svg>

        {/* divider */}
        {/* <svg width="100%" height="1" viewBox="0 0 322 1" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line y1="0.5" x2="322" y2="0.5" stroke={`url(#${isDark ? "divider-dark" : "divider-light"})`} />
          <defs>
            {isDark ? (
              <linearGradient id="divider-dark" x1="0" y1="1" x2="322" y2="1.5" gradientUnits="userSpaceOnUse">
                <stop stopColor="#272727" stopOpacity="0.7" />
                <stop offset="0.453558" stopColor="#505050" />
                <stop offset="1" stopColor="#272727" stopOpacity="0.7" />
              </linearGradient>
            ) : (
              <linearGradient id="divider-light" x1="0" y1="1" x2="322" y2="1.5" gradientUnits="userSpaceOnUse">
                <stop stopColor="#F5F5F5" stopOpacity="0.7" />
                <stop offset="0.453558" stopColor="#CBCBCB" />
                <stop offset="1" stopColor="#F5F5F5" stopOpacity="0.7" />
              </linearGradient>
            )}
          </defs>
        </svg> */}

        <ul className="space-y-2 grow mb-8">
          {advantages.map((advantage) => (

            <li key={advantage} className="flex items-center">
              {/* checkIcon */}
              <p className={`size-7 flex items-center justify-center rounded-full 
                ${isDark ? "bg-[#26272C]" : "bg-[#ECF0FB]"}
                ${advantage ? "" : "invisible"}`}>
                <FaCheck className={iconClasses} strokeWidth={10} />
              </p>
              <BodyText className="ml-2 text-base">{advantage}</BodyText>
            </li>
          ))}
        </ul>
      </div>

      {
        (btnType === "outline")
          ? <Button variant={btnType} outlineColor="#000" textColor="#000">{btnText}</Button>
          : <Button variant={btnType} >{btnText}</Button>
      }
    </div>
  );
};
