"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ href, children }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href}
      className={`relative font-urbanist font-semibold text-[1.125rem] leading-[0.5] group px-2.5 py-2 h-fit hover:text-black transition-all duration-200 ease-in-out
  ${isActive ? "text-black" : "text-[#4D525F]"}`}
    >
      {children}
      <span
        className={`absolute left-0 -bottom-1 h-0.5 bg-[#4D525FA0] transition-all duration-500 ease-in-out
        ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
      />
    </Link>
  );
}
