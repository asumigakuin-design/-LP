"use client"

import Image from "next/image"
import { Phone } from "lucide-react"
import { PhoneModal } from "./phone-modal"
import { useState } from "react"

export function Header() {
  const [showPhoneModal, setShowPhoneModal] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handlePhoneClick = () => {
    if (typeof window !== "undefined" && /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
      window.location.href = "tel:043-308-9643"
    } else {
      setShowPhoneModal(true)
    }
  }

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900 backdrop-blur-sm shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex justify-center md:justify-between items-center gap-4 h-16 md:h-20">
            <div className="flex items-center gap-4">
              <button
                onClick={scrollToTop}
                className="transition-transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 rounded-lg"
                aria-label="トップに戻る"
              >
                <Image
                  src="/logo.png"
                  alt="あすみ学院ロゴ"
                  width={180}
                  height={180}
                  className="h-12 md:h-16 w-auto"
                  priority
                />
              </button>
              <div className="hidden md:block">
                <p className="text-white text-sm md:text-base font-medium leading-tight">
                  千葉市緑区・土気・あすみが丘の
                  <br />
                  自立型学習塾 あすみ学院
                </p>
              </div>
            </div>

            <div className="hidden lg:flex items-center gap-2 text-white">
              <button
                onClick={handlePhoneClick}
                className="flex items-center gap-2 hover:opacity-80 transition-opacity"
              >
                <Phone className="h-5 w-5" />
                <div className="text-left">
                  <p className="text-sm font-medium">お問い合わせ：043-308-9643</p>
                  <p className="text-xs opacity-90">受付時間：16:30-21:00（月〜金）</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      <PhoneModal open={showPhoneModal} onOpenChange={setShowPhoneModal} />
    </>
  )
}
