import { Users, Presentation, BookOpen } from "lucide-react"

export function StrengthsSection() {
  const strengths = [
    {
      icon: Users,
      title: "個別学習設計",
      description: "弱点を放置せず、その場で解決するサイクル。一人ひとりに最適な教材と進め方を設計します。",
    },
    {
      icon: Presentation,
      title: "プレゼン学習",
      description: "「わかったつもり」をなくし、思考力と処理速度を鍛えます。理解を言葉にすることで定着を深めます。",
    },
    {
      icon: BookOpen,
      title: "最強の学習環境",
      description:
        "ただ答えを教えるのではなく、先生がいなくても自分一人でできるようになる「学習方法」をサポートします。",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <p className="text-primary font-semibold text-sm mb-4">強み</p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 leading-relaxed">
              結果を出すための「3つの柱」
            </h2>
          </div>

          {/* Strengths Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {strengths.map((strength, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow border border-slate-100"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <strength.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{strength.title}</h3>
                <p className="text-slate-600 leading-relaxed">{strength.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
