import React from "react"
import { TrendingUp } from "lucide-react"

export function HabitSection() {
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 tracking-tight text-slate-900">
            「早めの習慣化」が可能性を広げます
          </h2>
          <p className="text-slate-600 mb-12 md:mb-16 text-sm md:text-base">
            学びの余裕が、自身の差につながります。
          </p>

          <div className="bg-white p-5 md:p-6 rounded-2xl shadow-sm border border-slate-200">
            <div className="grid grid-cols-[72px_1fr] items-center gap-4 mb-3">
              <div />
              <div className="grid grid-cols-4 gap-2 text-[11px] md:text-xs font-bold text-slate-500">
                <div className="text-center">小学生</div>
                <div className="text-center">中学1・2年生</div>
                <div className="text-center">中学3年生</div>
                <div className="text-center">将来の選択肢</div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-[72px_1fr] items-center gap-4">
                <div className="w-16 h-16 rounded-full flex items-center justify-center shrink-0 bg-amber-100 text-amber-800">
                  <span className="font-bold">Aさん</span>
                </div>
                <div className="grid grid-cols-4 gap-2 border border-slate-200 rounded-xl p-2 bg-slate-50">
                  <div className="col-span-3 h-14 rounded-lg bg-gradient-to-r from-[#b07a44] via-[#9a6033] to-[#7a4b27] flex items-center justify-center px-2">
                    <span className="text-[10px] md:text-xs font-bold text-white whitespace-nowrap">学びの土台×探求心</span>
                  </div>
                  <div className="h-14 rounded-lg bg-[#f0e4d4] border border-[#dfc7a8] flex items-center justify-center">
                    <div className="flex items-center gap-1 text-[#7a4b27]">
                      <TrendingUp className="w-4 h-4" />
                      <span className="text-[11px] md:text-xs font-bold">理想の未来</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-[72px_1fr] items-center gap-4">
                <div className="w-16 h-16 rounded-full flex items-center justify-center shrink-0 bg-slate-100 text-slate-500">
                  <span className="font-bold">Bさん</span>
                </div>
                <div className="grid grid-cols-4 gap-2 border border-slate-200 rounded-xl p-2 bg-slate-50">
                  <div className="col-span-2" />
                  <div className="h-14 rounded-lg bg-gradient-to-r from-[#b8a38f] to-[#8f7459] flex items-center justify-center px-2">
                    <span className="text-[10px] md:text-xs font-bold text-white whitespace-nowrap">長時間勉強で挽回</span>
                  </div>
                  <div className="h-14 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center">
                    <span className="text-[11px] md:text-xs font-bold text-slate-500">限定された選択</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
