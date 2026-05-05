"use client"

import type React from "react"

import { Phone, MapPin } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import { PhoneModal } from "./phone-modal"

export function Footer() {
  const [isPhoneModalOpen, setIsPhoneModalOpen] = useState(false)

  const handlePhoneClick = (e: React.MouseEvent) => {
    if (window.innerWidth >= 768) {
      e.preventDefault()
      setIsPhoneModalOpen(true)
    }
  }

  return (
    <>
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 items-start">
              {/* Left: Tagline with Logo */}
              <div className="space-y-3 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-3">
                  <Image src="/logo.png" alt="あすみ学院ロゴ" width={120} height={120} className="h-10 w-auto" />
                  <h3 className="text-xl font-bold text-white">あすみ学院</h3>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed">
                  千葉市緑区・土気・あすみが丘の自立型学習塾
                </p>
              </div>

              {/* Center: Phone Number */}
              <div className="flex flex-col items-center gap-2 text-center">
                <Phone className="w-5 h-5 text-primary" />
                <div>
                  <div className="text-xs text-slate-400 mb-1">お電話でのお問い合わせ</div>
                  <a
                    href="tel:043-308-9643"
                    onClick={handlePhoneClick}
                    className="text-xl font-bold text-white hover:text-primary transition-colors cursor-pointer"
                  >
                    043-308-9643
                  </a>
                </div>
              </div>

              {/* Right: Address */}
              <div className="flex flex-col items-center md:items-end gap-2 text-center md:text-right">
                <MapPin className="w-5 h-5 text-primary" />
                <div>
                  <div className="text-xs text-slate-400 mb-1">所在地</div>
                  <div className="text-sm text-white leading-relaxed">
                    〒267-0067
                    <br />
                    千葉県千葉市緑区あすみが丘東1-20-1-202
                    <br />
                    <span className="text-slate-400 text-xs">JR外房線「土気駅」より徒歩15分</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Border and Copyright */}
            <div className="mt-10 pt-6 border-t border-slate-700">
              <p className="text-center text-xs text-slate-500">&copy; 2025 あすみ学院. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>

      <PhoneModal open={isPhoneModalOpen} onOpenChange={setIsPhoneModalOpen} />
    </>
  )
}
