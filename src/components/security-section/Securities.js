import { Fragment } from "react";
import SecurityCard from "./SecurityCard";

const securityOne = [
  { title: "Two-factor authentication", description: "Two-factor authentication ensures added protection by using verification steps.", dotColor: "#2E68FD", dotBg: "#ECF0FB" },
  { title: "Fraud detection and alerts", description: "Fraud detection safeguards your money, sending instant alerts for any activity.", dotColor: "#FC4343", dotBg: "#FEEDED" },
  { title: "Transaction notifications", description: "Instant notifications for transaction keep you informed to manage your finances.", dotColor: "#08A965", dotBg: "#E5FCF2" },
];
const securityTwo = [
  { title: "Biometric access", description: "Easily and securely log in with biometric features, and facial recognition.", dotColor: "#3B7793", dotBg: "#E1F1F9" },
  { title: "End-to-end encryption", description: "By encryption, protecting your data from unauthorized access.", dotColor: "#D77E1B", dotBg: "#FAEEE2" },
  { title: "24/7 Protection support", description: "Our dedicated team is available around the clock to help you.", dotColor: "#932EFA", dotBg: "#F4EDFC" },
]

export default function Securities() {
  return (
    <div className="relative w-full bg-cover bg-position-[left_top] bg-no-repeat px-6 py-10 rounded-2xl space-y-12"
      // <div className="flex flex-col md:flex-row justify-between items:start md:items-center relative w-full bg-cover bg-center bg-no-repeat px-6 py-10 rounded-2xl "
      // <div className="grid grid-cols-5 relative w-full bg-cover bg-center bg-no-repeat px-6 py-10 rounded-2xl "
      style={{ backgroundImage: `url(/HeroBackground.png)` }}
    >
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center ">
        {securityOne.map((card, index) => (
          <Fragment key={card.title}>
            <SecurityCard key={card.title} card={card} />

            {index < securityOne.length - 1 && (
              <svg
                width="1"
                height="181"
                viewBox="0 0 1 181"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="rotate-90 md:rotate-0 my-4 md:my-0 w-32 md:w-auto h-1 md:h-auto"
              >
                <line x1="0.5" y1="2.18557e-08" x2="0.499992" y2="181" stroke={`url(#paint0_linear_${index})`} />
                <defs>
                  <linearGradient id={`paint0_linear_${index}`} x1="-0.5" y1="-2.18557e-08" x2="-0.500008" y2="181" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#F5F5F5" />
                    <stop offset="0.453558" stopColor="#CBCBCB" />
                    <stop offset="1" stopColor="#F5F5F5" />
                  </linearGradient>
                </defs>
              </svg>
            )}
          </Fragment>
        ))}
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center ">
        {securityTwo.map((card, index) => (
          <Fragment key={card.title}>
            <SecurityCard key={card.title} card={card} />

            {index < securityTwo.length - 1 && (
              <svg
                width="1"
                height="181"
                viewBox="0 0 1 181"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="rotate-90 md:rotate-0 my-4 md:my-0 w-32 md:w-auto h-1 md:h-auto"
              >
                <line x1="0.5" y1="2.18557e-08" x2="0.499992" y2="181" stroke={`url(#paint0_linear_${index})`} />
                <defs>
                  <linearGradient id={`paint0_linear_${index}`} x1="-0.5" y1="-2.18557e-08" x2="-0.500008" y2="181" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#F5F5F5" />
                    <stop offset="0.453558" stopColor="#CBCBCB" />
                    <stop offset="1" stopColor="#F5F5F5" />
                  </linearGradient>
                </defs>
              </svg>
            )}
          </Fragment>
        ))}
      </div>
    </div>
  )
}