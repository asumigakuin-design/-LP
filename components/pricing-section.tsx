import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Check, Star } from "lucide-react"

export function PricingSection() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-primary font-semibold text-sm mb-4">料金案内</p>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
              シンプルな料金体系
            </h2>
            <p className="text-slate-600">すべて税込表示</p>
          </div>

          {/* Basic Fees */}
          <div className="bg-slate-50 rounded-xl p-6 mb-8">
            <div className="grid sm:grid-cols-3 gap-6 text-center">
              <div>
                <p className="text-sm text-slate-500 mb-1">入会金</p>
                <p className="text-2xl font-bold text-slate-900">¥11,000</p>
              </div>
              <div>
                <p className="text-sm text-slate-500 mb-1">諸経費</p>
                <p className="text-2xl font-bold text-slate-900">¥2,200<span className="text-base">/月</span></p>
              </div>
              <div>
                <p className="text-sm text-slate-500 mb-1">教材費</p>
                <p className="text-2xl font-bold text-slate-900">実費</p>
              </div>
            </div>
          </div>

          {/* Monthly Fees */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Elementary School */}
            <Card className="border border-slate-200 shadow-lg rounded-xl overflow-hidden">
              <CardHeader className="bg-slate-900 p-5">
                <CardTitle className="text-xl text-center font-bold text-white">
                  小学生 月謝
                </CardTitle>
              </CardHeader>
              <CardContent className="p-5 space-y-3">
                <div className="flex justify-between items-center p-4 bg-slate-50 rounded-lg">
                  <span className="font-medium text-slate-700">週1コマ</span>
                  <span className="text-xl font-bold text-slate-900">¥4,400</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-slate-50 rounded-lg">
                  <span className="font-medium text-slate-700">週2コマ</span>
                  <span className="text-xl font-bold text-slate-900">¥8,250</span>
                </div>
                <div className="relative flex justify-between items-center p-4 bg-amber-50 rounded-lg border-2 border-amber-300">
                  <div className="absolute -top-2 -right-2 bg-amber-500 text-white text-xs font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                    <Star className="w-3 h-3 fill-white" />
                    人気
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-amber-600" />
                    <span className="font-bold text-slate-900">通い放題</span>
                  </div>
                  <span className="text-xl font-bold text-slate-900">¥18,150</span>
                </div>
              </CardContent>
            </Card>

            {/* Junior/Senior High School */}
            <Card className="border border-slate-200 shadow-lg rounded-xl overflow-hidden">
              <CardHeader className="bg-slate-900 p-5">
                <CardTitle className="text-xl text-center font-bold text-white">
                  中高生 月謝
                </CardTitle>
              </CardHeader>
              <CardContent className="p-5 space-y-3">
                <div className="flex justify-between items-center p-4 bg-slate-50 rounded-lg">
                  <span className="font-medium text-slate-700">週1コマ</span>
                  <span className="text-xl font-bold text-slate-900">¥6,600</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-slate-50 rounded-lg">
                  <span className="font-medium text-slate-700">週2コマ</span>
                  <span className="text-xl font-bold text-slate-900">¥11,000</span>
                </div>
                <div className="relative flex justify-between items-center p-4 bg-amber-50 rounded-lg border-2 border-amber-300">
                  <div className="absolute -top-2 -right-2 bg-amber-500 text-white text-xs font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                    <Star className="w-3 h-3 fill-white" />
                    人気
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-amber-600" />
                    <span className="font-bold text-slate-900">通い放題</span>
                  </div>
                  <span className="text-xl font-bold text-slate-900">¥27,500</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Note */}
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 text-center">
            <p className="text-slate-700 font-medium">
              週2コマとの差はわずか1万円。<span className="text-primary font-bold">毎日通えるのが一番お得</span>です。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
