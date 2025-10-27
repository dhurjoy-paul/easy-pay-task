"use client";

import Container from "../Container";
import BottomFooter from "./BottomFooter";
import TopFooter from "./TopFooter";

export default function Footer() {
  return (
    <div className="footer-gradient overflow-hidden">
      <Container>
        <div className="z-10 py-30">
          <TopFooter />
        </div>
        <BottomFooter />
      </Container>
    </div>
  );
}
