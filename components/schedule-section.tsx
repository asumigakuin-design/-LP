import { Clock } from "lucide-react"

export function ScheduleSection() {
  const timeSlots = [
    { time: "16:30～17:20", label: "小学生優先", type: "elementary" },
    { time: "17:30～18:20", label: "小学生優先", type: "elementary" },
    { time: "18:30～19:20", label: "中高生優先", type: "junior-senior" },
    { time: "19:30～20:20", label: "中高生優先", type: "junior-senior" },
    { time: "20:30～21:20", label: "中高生優先", type: "junior-senior" },
  ]

  return (
    <section className="py-12 md:py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Clock className="w-5 h-5 text-slate-600" />
              <h2 className="text-xl md:text-2xl font-bold text-slate-900">時間割</h2>
            </div>
            <p className="text-sm text-slate-600">1コマ50分 | 月曜〜金曜</p>
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="grid grid-cols-2 md:grid-cols-5 divide-x divide-y md:divide-y-0 divide-slate-100">
              {timeSlots.map((slot, index) => (
                <div key={index} className="p-4 text-center">
                  <p className="font-bold text-slate-900 text-sm mb-1">{slot.time}</p>
                  <span
                    className={`inline-block text-xs px-2 py-0.5 rounded font-medium ${
                      slot.type === "elementary"
                        ? "bg-amber-50 text-amber-700"
                        : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    {slot.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <p className="text-center text-xs text-slate-500 mt-4">
            ※ 空きがあれば学年問わず利用可 / 土日祝休み
          </p>
        </div>
      </div>
    </section>
  )
}
