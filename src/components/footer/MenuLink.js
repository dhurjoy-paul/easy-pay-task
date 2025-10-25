"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MenuLink({ href, children }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href}
      className={`font-outfit font-normal text-base leading-normal hover:text-black transition-all duration-200 ease-in-out whitespace-nowrap ${isActive ? "text-black" : "text-[#4D525F]"}`}
    >
      {children}
    </Link>
  )
}