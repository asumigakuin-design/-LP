"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Phone, FileText } from "lucide-react"
import { useState } from "react"
import { PhoneModal } from "./phone-modal"

export function FixedFooterCta() {
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
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-slate-200 shadow-2xl">
        <div className="container mx-auto px-4 py-3">
          <div className="flex gap-3 max-w-md mx-auto">
            <Button
              className="flex-1 text-base py-6 font-bold bg-slate-900 hover:bg-slate-800 text-white hover:-translate-y-0.5 active:translate-y-0 active:scale-95 transition-all duration-200 rounded-lg"
              size="lg"
              onClick={handleTrialClick}
            >
              <FileText className="mr-2 h-5 w-5" />
              無料体験
            </Button>
            <Button
              className="flex-1 text-base py-6 font-bold bg-primary hover:bg-primary/90 text-white hover:-translate-y-0.5 active:translate-y-0 active:scale-95 transition-all duration-200 rounded-lg"
              size="lg"
              asChild
            >
              <a href="tel:043-308-9643" onClick={handlePhoneClick}>
                <Phone className="mr-2 h-5 w-5" />
                電話
              </a>
            </Button>
          </div>
        </div>
      </div>

      <PhoneModal open={isPhoneModalOpen} onOpenChange={setIsPhoneModalOpen} />
    </>
  )
}
