import Image from "next/image";
import LogoImage from "../../../public/logo.png";

export default function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <div className="relative size-10">
        <Image
          src={LogoImage}
          alt="Logo of Easy Pay Inc."
          fill
          className="object-contain"
        />
      </div>

      <p className="font-urbanist font-bold text-[1.75rem] leading-normal">
        Easy Pay
      </p>
    </div>
  )
}