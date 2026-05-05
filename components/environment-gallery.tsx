import { Card } from "@/components/ui/card"

export function EnvironmentGallery() {
  const environments = [
    {
      title: "時には少人数制集団授業も",
      description: "一人ひとりに目が届く環境で、質問しやすい雰囲気を大切にしています。",
      imageUrl: "/images/img-2607.jpeg",
    },
    {
      title: "囲まれた集中ブース",
      description: "周りを気にせず学習に没頭できる個別ブースをご用意しています。",
      imageUrl: "/images/img-2618.jpeg",
    },
    {
      title: "明るく静かな教室",
      description: "落ち着いた照明と静かな空間で、集中力を最大限に発揮できます。",
      imageUrl: "/images/img-2614.jpeg",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-primary font-semibold text-sm mb-4">学習環境</p>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              集中できる学習空間
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {environments.map((env, index) => (
              <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow border-0 rounded-xl">
                <div className="aspect-[4/3] bg-slate-100 relative overflow-hidden">
                  <img
                    src={env.imageUrl || "/placeholder.svg"}
                    alt={env.title}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-5 bg-white">
                  <h3 className="font-bold text-base text-slate-900 mb-1">{env.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{env.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
