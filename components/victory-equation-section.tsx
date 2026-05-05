export function VictoryEquationSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10 md:mb-14">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 leading-relaxed">
              お子様の成長を支える黄金律
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-5 lg:gap-7 bg-white p-7 md:p-10 rounded-[32px] md:rounded-[40px] border border-[#e6dccb] shadow-[0_14px_36px_rgba(55,37,17,0.14)]">
            <div className="text-center shrink-0">
              <p className="text-[10px] font-black text-[#7a5a36] uppercase tracking-[0.2em] mb-2">Future Potential</p>
              <p className="text-2xl md:text-4xl font-black text-slate-900">未来の学力</p>
            </div>

            <div className="text-4xl text-slate-300 font-light hidden lg:block">＝</div>
            <div className="text-2xl text-slate-300 font-light lg:hidden">▼</div>

            <div className="text-center shrink-0">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2">Base</p>
              <p className="text-2xl md:text-4xl font-black text-slate-900">今の学力</p>
            </div>

            <div className="text-4xl text-slate-300 font-light hidden lg:block">＋</div>
            <div className="text-2xl text-slate-300 font-light lg:hidden">＋</div>

            <div className="bg-[#fff4cf] p-5 md:p-8 rounded-full shadow-sm flex items-center gap-5 md:gap-8 border border-[#efddb0] shrink-0">
              <div className="text-center">
                <p className="text-[10px] font-black text-[#7a5a36] uppercase tracking-[0.2em] mb-2">Quality</p>
                <p className="text-2xl md:text-4xl font-black text-slate-900">質</p>
              </div>
              <div className="text-2xl text-slate-300 font-light">×</div>
              <div className="text-center">
                <p className="text-[10px] font-black text-[#7a5a36] uppercase tracking-[0.2em] mb-2">Time</p>
                <p className="text-2xl md:text-4xl font-black text-slate-900">時間</p>
              </div>
            </div>
          </div>

          <p className="mt-10 text-slate-600 italic text-sm md:text-base leading-loose text-center">
            「質」は一人ひとりのレベルに合わせた学習設計で、
            <br className="hidden md:block" />
            「時間」は自分から通いたくなる心地よい環境で、将来のどんな壁も乗り越える力になります。
          </p>
        </div>
      </div>
    </section>
  )
}
