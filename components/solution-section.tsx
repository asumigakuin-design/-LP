import { BookOpen, Target, Clock } from "lucide-react"

export function SolutionSection() {
  const solutions = [
    {
      icon: BookOpen,
      number: "01",
      title: "何をやるかを迷わせない",
      description:
        "一人ひとりの現在地から、必要な「最適教材」を設計します。ICT対応テキストで弱点を可視化し、無駄のない学習計画を立てます。",
    },
    {
      icon: Target,
      number: "02",
      title: "どうやるかを徹底指導",
      description:
        "アウトプット型のプレゼン学習を取り入れ、理解の「質」を根本から変えます。毎回の小テストで定着を確認し、できるまで付き合います。",
    },
    {
      icon: Clock,
      number: "03",
      title: "圧倒的な時間を当たり前に",
      description:
        "「家」＋「塾」が理想ですが、家で勉強できない子は「通い放題」で学習習慣を劇的に変えます。プロフェッショナルな学習スペースを第二の勉強部屋にします。",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <p className="text-primary font-semibold text-sm mb-4">解決策</p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 leading-relaxed mb-4">
              やる気に頼らない「仕組み」
            </h2>
            <p className="text-slate-600 text-lg">
              モチベーションは波があります。
              <br />
              だから、仕組みで成績を上げます。
            </p>
          </div>

          {/* Solutions */}
          <div className="space-y-6">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-slate-100 hover:shadow-xl transition-shadow flex flex-col md:flex-row gap-6"
              >
                <div className="flex-shrink-0 flex md:flex-col items-center gap-4">
                  <div className="w-16 h-16 bg-slate-900 rounded-xl flex items-center justify-center shadow-lg">
                    <solution.icon className="w-8 h-8 text-white" />
                  </div>
                  <span className="text-3xl md:text-4xl font-bold text-slate-200">{solution.number}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">{solution.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-base md:text-lg">{solution.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
