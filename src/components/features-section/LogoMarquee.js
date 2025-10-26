"use client";

import { logos } from "./logos";

export default function Marquee() {
  return (
    <div className="bg-white w-full overflow-hidden">
      <div className="relative flex">

        <div className="flex gap-23 pr-23 animate-marquee">
          {logos.map((logo, index) => (
            <div key={index} className="flex justify-center items-center min-w-fit">
              {logo.svg}
            </div>
          ))}
        </div>

        <div className="flex gap-23 pr-23 animate-marquee" aria-hidden="true">
          {logos.map((logo, index) => (
            <div key={index} className="flex justify-center items-center min-w-fit">
              {logo.svg}
            </div>
          ))}
        </div>

        <div className="flex gap-23 pr-23 animate-marquee" aria-hidden="true">
          {logos.map((logo, index) => (
            <div key={index} className="flex justify-center items-center min-w-fit">
              {logo.svg}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}