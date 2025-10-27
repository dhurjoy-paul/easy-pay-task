import BodyText from "../fonts/BodyText";
import Title from "../fonts/Title";

export default function TestimonialCard({ card }) {
  const { name, role, comment, img } = card || {};
  const starRating = Array.from({ length: 5 }, (_, i) => <Star key={i} />);

  return (
    <div className="bg-white px-6 sm:px-8 py-8 rounded-2xl max-w-[360px] sm:max-w-[420px] shadow-md">
      <p className="flex items-center gap-1">{starRating}</p>
      <BodyText className="mt-4 mb-8 text-sm sm:text-base leading-relaxed text-[#4D525F]">
        {comment}
      </BodyText>

      <div className="flex items-center gap-3">
        <div className="overflow-hidden size-12 sm:size-14 rounded-full flex-shrink-0">
          <img
            src={img}
            alt={name}
            className="object-cover object-top scale-125 mt-2"
          />
        </div>
        <div>
          <Title className="text-base sm:text-lg text-[#01081B]" weight={600}>
            {name}
          </Title>
          <BodyText className="text-xs sm:text-sm text-[#4D525F]">{role}</BodyText>
        </div>
      </div>
    </div>
  );
}

function Star() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.81929 0.955L8.99262 3.30167C9.15262 3.62833 9.57929 3.94167 9.93929 4.00167L12.066 4.355C13.426 4.58167 13.746 5.56833 12.766 6.54167L11.1126 8.195C10.8326 8.475 10.6793 9.015 10.766 9.40167L11.2393 11.4483C11.6126 13.0683 10.7526 13.695 9.31929 12.8483L7.32595 11.6683C6.96595 11.455 6.37262 11.455 6.00596 11.6683L4.01262 12.8483C2.58595 13.695 1.71929 13.0617 2.09262 11.4483L2.56595 9.40167C2.65262 9.015 2.49929 8.475 2.21929 8.195L0.565955 6.54167C-0.407378 5.56833 -0.0940448 4.58167 1.26596 4.355L3.39262 4.00167C3.74595 3.94167 4.17262 3.62833 4.33262 3.30167L5.50596 0.955C6.14596 -0.318333 7.18595 -0.318333 7.81929 0.955Z"
        fill="#FCBE1D"
      />
    </svg>
  );
}
