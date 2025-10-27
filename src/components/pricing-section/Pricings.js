import PriceCard from "./PriceCard";

const pricings = [
  {
    title: "Free Plan",
    description: "Free for personal payments.",
    price: "$0",
    advantages: [
      "Up to 100 transactions per month",
      "Basic fraud protection",
      "Email support",
      ""
    ],
    btnText: "Get Free Plan",
    btnType: "outline",
    BgColor: "light"
  },
  {
    title: "Advanced",
    description: "Minimal fees for advanced transactions",
    price: "$19",
    advantages: [
      "Up to 1000 transactions per month",
      "Advanced fraud protection",
      "Detailed transaction reports",
      "Priority email & chat support"
    ],
    btnText: "Get Advanced Plan",
    btnType: "fill",
    BgColor: "dark"
  },
  {
    title: "Business",
    description: "Premium business transactions",
    price: "$29",
    advantages: [
      "Unlimited transactions per month",
      "Premium fraud protection",
      "Detailed transaction reports",
      "Priority email & chat support"
    ],
    btnText: "Get Business Plan",
    btnType: "outline",
    BgColor: "light"
  }
];

export default function Pricings() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3 lg:gap-6 items-center">
      {pricings.map((card) => (
        <PriceCard key={card.title} card={card} />
      ))}
    </div>
  );
}
