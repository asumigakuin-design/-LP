import { Calendar, Frown, Lightbulb } from "lucide-react"

export function ProblemSection() {
  const problems = [
    {
      icon: Frown,
      title: "「勉強しなさい」と言わないとやらない",
      description:
        "自分から机に向かう習慣がついていないと、学年が上がるにつれて学習意欲が低下してしまいます。",
    },
    {
      icon: Calendar,
      title: "苦手なところをそのままにしている",
      description:
        "基礎のつまずきは、将来の大きな壁になります。早いうちに「わからない」を「できる」に変えることが大切です。",
    },
    {
      icon: Lightbulb,
      title: "何のために学ぶのかわかっていない",
      description:
        "目的が見えない勉強は、ただの作業になってしまいます。学びの意味と未来とのつながりを理解したとき、はじめて「自分で進む力」が育ちます。",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 leading-relaxed text-balance">
              学習について、こんな悩みはありませんか？
            </h2>
            <p className="text-slate-600 mt-4">
              小学生・中学生の成長期、保護者様の不安に寄り添います。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
            {problems.map((problem) => {
              const Icon = problem.icon
              return (
              <div
                key={problem.title}
                className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-orange-100 hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 bg-orange-50 rounded-full flex items-center justify-center mb-5 mx-auto">
                  <Icon className="w-7 h-7 text-orange-600" />
                </div>
                <h3 className="font-bold text-lg mb-3 text-slate-900 text-center leading-snug">{problem.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{problem.description}</p>
              </div>
              )
            })}
          </div>

          <div className="bg-[#556b2f] text-white p-8 md:p-10 rounded-[28px] md:rounded-[32px] shadow-xl text-center">
            <p className="text-xl md:text-2xl font-bold leading-relaxed">
              お子様の可能性を広げるカギは
              <br />
              <span className="text-orange-300 text-2xl md:text-3xl">「学ぶ楽しさ」と「習慣の質」です。</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
