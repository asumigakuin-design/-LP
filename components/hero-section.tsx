import Image from "next/image"

export function HeroSection() {
  return (
    <section className="w-full">
      <Image
        src="/images/hero.png"
        alt="あすみ学院"
        width={1920}
        height={1080}
        priority
        className="w-full h-auto"
      />
    </section>
  )
}