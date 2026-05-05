import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp } from "lucide-react"
import Image from "next/image"

export function SuccessStories() {
  const stories = [
    {
      grade: "小学6年生",
      name: "Yちゃん",
      plan: "週1コマ",
      achievement: "文章問題は的確なイメージ図を書いて解法をつかむきっかけを作れるようになりました。",
      detail: "遅刻せず学習ルールを守り、宿題も毎回しっかり取り組んでいます。",
      highlight: "計算スピードUP",
      image: "/s5.png",
    },
    {
      grade: "中学1年生",
      name: "K君",
      plan: "通い放題",
      achievement: "通い放題で月50時間以上学習、算数は半年で小4～小6までやり遂げました。",
      detail: "社会の勉強が大好きになり、自分でどんどん進めています。",
      highlight: "50時間以上/月",
      image: "/s6.png",
    },
    {
      grade: "中学2年生",
      name: "S君",
      plan: "通い放題",
      achievement: "英語20点UP、理科・社会それぞれ10点UPを達成。学年順位も20位以上アップしました。",
      detail: "普段は1〜3時間学習。定期テスト1週間前は合計20時間以上学習。",
      highlight: "20位以上UP",
      image: "/ch1.png",
    },
  ]

  const fourthStory = {
    grade: "中学2年生",
    name: "Sちゃん",
    plan: "週4コマ＋定期テスト前は通い放題",
    highlights: ["テスト前だけ通い放題", "5教科 学年順位UP", "国語80点突破！"],
    achievement:
      "普段は週4コマでコツコツ学習し、定期テストがある月は通い放題に切り替えています。その結果、定期テストのたびに5教科の学年順位が約10位ずつ上昇。今回の国語では10点アップし、ついに80点を突破しました。",
    detail: "「毎日通わなくても、必要な時にしっかり学べる」そんな学び方で、着実に成果を出しています。",
    image: "/ch1g.png",
  }

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-primary font-semibold text-sm mb-4">成長事例</p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-2">
              あすみ学院で伸びた生徒たち
            </h2>
            <p className="text-slate-500 text-sm">※ 効果には個人差があります</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {stories.map((story, index) => (
              <Card key={index} className="hover:shadow-xl transition-all bg-white rounded-xl shadow-lg border border-slate-100">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center gap-4">
                    <div className="w-24 h-24 flex items-center justify-center">
                      <Image
                        src={story.image || "/placeholder.svg"}
                        alt={`${story.grade} ${story.name}`}
                        width={96}
                        height={96}
                        className="rounded-full object-cover"
                      />
                    </div>

                    <div className="text-center">
                      <h3 className="font-bold text-base text-slate-900">
                        {story.grade} {story.name}
                      </h3>
                      <p className="text-xs text-slate-500">（{story.plan}）</p>
                    </div>

                    {story.highlight && (
                      <div className="flex items-center gap-2 bg-primary/10 px-3 py-1.5 rounded-full">
                        <TrendingUp className="h-3 w-3 text-primary flex-shrink-0" />
                        <p className="font-bold text-xs text-primary">{story.highlight}</p>
                      </div>
                    )}

                    <div className="space-y-2 text-left w-full">
                      <p className="text-sm text-slate-700 leading-relaxed">{story.achievement}</p>
                      <p className="text-xs text-slate-500 leading-relaxed">{story.detail}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-center">
            <Card className="hover:shadow-xl transition-all bg-white rounded-xl shadow-lg border border-slate-100 w-full md:w-2/3">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="w-24 h-24 flex-shrink-0 flex items-center justify-center">
                    <Image
                      src={fourthStory.image || "/placeholder.svg"}
                      alt={`${fourthStory.grade} ${fourthStory.name}`}
                      width={96}
                      height={96}
                      className="rounded-full object-cover"
                    />
                  </div>

                  <div className="flex-1 text-center md:text-left">
                    <div className="mb-3">
                      <h3 className="font-bold text-base text-slate-900">
                        {fourthStory.grade} {fourthStory.name}
                      </h3>
                      <p className="text-xs text-slate-500">（{fourthStory.plan}）</p>
                    </div>

                    <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-3">
                      {fourthStory.highlights.map((highlight, i) => (
                        <div key={i} className="flex items-center gap-1 bg-primary/10 px-2 py-1 rounded-full">
                          <TrendingUp className="h-3 w-3 text-primary flex-shrink-0" />
                          <p className="font-bold text-xs text-primary">{highlight}</p>
                        </div>
                      ))}
                    </div>

                    <p className="text-sm text-slate-700 leading-relaxed mb-2">{fourthStory.achievement}</p>
                    <p className="text-xs text-slate-500 leading-relaxed">{fourthStory.detail}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
