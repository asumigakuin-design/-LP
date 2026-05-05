"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Phone, ArrowRight } from "lucide-react"
import { useState } from "react"
import { PhoneModal } from "./phone-modal"

export function FinalCtaSection() {
  const [isPhoneModalOpen, setIsPhoneModalOpen] = useState(false)

  const handleTrialClick = () => {
    const contactForm = document.getElementById("contact-form")
    contactForm?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  const handlePhoneClick = (e: React.MouseEvent) => {
    const isMobile = window.innerWidth < 768
    if (!isMobile) {
      e.preventDefault()
      setIsPhoneModalOpen(true)
    }
  }

  return (
    <>
      <section className="py-16 md:py-24 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-relaxed mb-6">
              「勉強が楽しくなった」
            </h2>
            <p className="text-slate-300 text-lg mb-10 leading-relaxed">
              その瞬間から未来は変わります。
              <br />
              まずは、教室見学、学習相談からお気軽に。
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-primary text-white hover:bg-primary/90 text-lg px-8 py-6 font-bold shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 rounded-lg"
                onClick={handleTrialClick}
              >
                無料体験・学習相談はこちら
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto bg-transparent text-white hover:bg-white/10 border-2 border-white/50 text-lg px-8 py-6 font-bold transition-all duration-200 rounded-lg"
                asChild
              >
                <a href="tel:043-308-9643" onClick={handlePhoneClick}>
                  <Phone className="mr-2 h-5 w-5" />
                  お電話：043-308-9643
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <PhoneModal open={isPhoneModalOpen} onOpenChange={setIsPhoneModalOpen} />
    </>
  )
}
