import Image from "next/image"

export default function WorkImage() {
  return (
    <div className="w-full max-w-full h-[400px] md:h-[600px] lg:h-[660px] relative overflow-hidden rounded-xl">
      <Image
        src="/HowItWorksImage.jpg"
        alt="How it works illustration"
        fill
        className="object-cover object-center"
        sizes="100vw"
        priority
        quality={90}
      />
    </div>
  )
}