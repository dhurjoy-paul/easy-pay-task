"use client";

import Container from "../Container";
import BottomFooter from "./BottomFooter";
import TopFooter from "./TopFooter";

export default function Footer() {
  return (
    <div className="relative overflow-hidden">

      <div className="absolute left-1/2 -bottom-80 -translate-x-1/2 w-[472px] h-[351px] rounded-full bg-[#CD9BFF] blur-[140px]  pointer-events-none z-0" />

      {/* Footer content */}
      <Container>
        <div className="relative z-10 py-30">
          <TopFooter />
        </div>
        <BottomFooter />
      </Container>
    </div>
  );
}
