import BodyText from "../fonts/BodyText";
import Title from "../fonts/Title";
import Logo from "../shared/Logo";
import MenuLink from "./MenuLink";

const menuOne = [
  { name: "Features", href: "#" },
  { name: "How it works", href: "#" },
  { name: "Security", href: "#" },
  { name: "Testimonial", href: "#" },
];

const menuTwo = [
  { name: "Privacy policy", href: "#" },
  { name: "Terms & conditions", href: "#" },
  { name: "404", href: "#" },
];

export default function BottomFooter() {
  return (
    <>
      <div className="flex flex-col sm:flex-row justify-between gap-10 sm:gap-10 items-center sm:items-start">
        {/* left */}
        <div className="w-fit sm:w-full flex flex-col gap-4 sm:gap-8 items-center sm:items-start">
          <Logo />
          <BodyText className="text-base text-[#4D525F] max-w-2xs text-center sm:text-left">
            Easy Pay offers secure, seamless, and fee-free payments for effortless global transactions.
          </BodyText>
        </div>

        {/* right */}
        <div className="flex gap-24 sm:gap-16 md:gap-24">
          <div className="flex flex-col items-start gap-3">
            <Title className="text-[1.25rem] mb-1 whitespace-nowrap">Short links</Title>
            {menuOne.map((m) => (
              <MenuLink key={m.name} href={m.href}>
                {m.name}
              </MenuLink>
            ))}
          </div>

          <div className="flex flex-col items-start gap-3">
            <Title className="text-[1.25rem] mb-1 whitespace-nowrap">Other pages</Title>
            {menuTwo.map((m) => (
              <MenuLink key={m.name} href={m.href}>
                {m.name}
              </MenuLink>
            ))}
          </div>
        </div>
      </div>

      <hr className="text-[#E7E7E8] my-3" />

      <BodyText weight={300} className="text-base text-[#878787] text-center pb-8">
        2025 ©Easy Pay. All rights reserved. Fintech Landing Page by MUHIB
      </BodyText>
    </>
  )
}