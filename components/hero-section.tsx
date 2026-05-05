"use client"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* グラデーション背景 */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#f8f5ef] via-[#f3ede3] to-[#e9dcc6]" />

      {/* ぼかし（左上） */}
      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-[#e7d8c2] rounded-full blur-3xl opacity-40" />

      {/* ぼかし（右下） */}
      <div className="absolute bottom-[-120px] right-[-120px] w-[400px] h-[400px] bg-[#d9c7ab] rounded-full blur-3xl opacity-40" />

      {/* コンテンツ */}
      <div className="relative z-10 container mx-auto px-4 py-16 md:py-24 lg:py-32">
        <div className="max-w-4xl mx-auto space-y-8 text-slate-900">
          <div className="space-y-6">
            <p className="font-semibold text-sm md:text-base tracking-wider text-slate-700">
              千葉市緑区・土気・あすみが丘の自立型学習塾
            </p>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              <span className="text-red-500">「あと1年早ければ」</span>
              <br />
              と後悔する前に。
            </h1>

            <p className="text-xl md:text-2xl lg:text-3xl font-bold leading-relaxed text-slate-800">
              将来の選択肢は、
              <br className="md:hidden" />
              <span className="text-red-500">「今、動くか」</span>で決まります。
            </p>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 md:p-8 border border-slate-200 max-w-2xl">
            <p className="text-base md:text-lg leading-relaxed">
              同じ学力の生徒でも、
              <span className="font-bold">スタートの時期が違うだけ</span>で
              <br className="hidden md:block" />
              進路は劇的に変わります。
              <br />
              <span className="text-red-500 font-bold">「気づいた時」</span>
              が、逆転のチャンスです。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}