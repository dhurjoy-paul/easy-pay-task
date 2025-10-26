import Footer from "@/components/footer/Footer";
import { Outfit, Urbanist } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: '--font-outfit',
  subsets: ['latin'],
  display: 'swap',
});

const urbanist = Urbanist({
  variable: '--font-urbanist',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: "Easy Pay",
  description: "Pay for everything, You can imagine",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${urbanist.variable}`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
