"use client"

import { useState, useMemo } from "react"
import { Search, ChevronDown, ChevronUp } from "lucide-react"

const schoolData = [
  { name: "渋谷幕張", deviation: "74", kyutei: 124, chiba: 36, otherNational: 66, sokeijori: 534, gmarch: 169, shikou: 0, seiseimeigaku: 0, josidai: 0, nittokoma: 0, daitoakotei: 0 },
  { name: "千葉", deviation: "73", kyutei: 82, chiba: 33, otherNational: 37, sokeijori: 466, gmarch: 291, shikou: 24, seiseimeigaku: 19, josidai: 6, nittokoma: 39, daitoakotei: 1 },
  { name: "昭和学院秀英", deviation: "72", kyutei: 36, chiba: 27, otherNational: 20, sokeijori: 273, gmarch: 269, shikou: 0, seiseimeigaku: 0, josidai: 16, nittokoma: 0, daitoakotei: 0 },
  { name: "千葉東", deviation: "70", kyutei: 25, chiba: 43, otherNational: 43, sokeijori: 170, gmarch: 350, shikou: 0, seiseimeigaku: 0, josidai: 0, nittokoma: 0, daitoakotei: 0 },
  { name: "市立千葉", deviation: "68", kyutei: 6, chiba: 39, otherNational: 34, sokeijori: 101, gmarch: 295, shikou: 61, seiseimeigaku: 75, josidai: 19, nittokoma: 257, daitoakotei: 0 },
  { name: "長生", deviation: "67-68", kyutei: 2, chiba: 19, otherNational: 30, sokeijori: 40, gmarch: 121, shikou: 29, seiseimeigaku: 44, josidai: 11, nittokoma: 181, daitoakotei: 22 },
  { name: "市立稲毛", deviation: "66-67", kyutei: 10, chiba: 17, otherNational: 13, sokeijori: 91, gmarch: 324, shikou: 32, seiseimeigaku: 85, josidai: 33, nittokoma: 228, daitoakotei: 9 },
  { name: "幕張総合", deviation: "58-64", kyutei: 0, chiba: 10, otherNational: 8, sokeijori: 42, gmarch: 256, shikou: 0, seiseimeigaku: 0, josidai: 0, nittokoma: 424, daitoakotei: 0 },
  { name: "成東", deviation: "61-63", kyutei: 2, chiba: 6, otherNational: 48, sokeijori: 13, gmarch: 45, shikou: 13, seiseimeigaku: 25, josidai: 3, nittokoma: 11, daitoakotei: 122 },
  { name: "市原中央", deviation: "55-62", kyutei: 1, chiba: 6, otherNational: 19, sokeijori: 23, gmarch: 49, shikou: 19, seiseimeigaku: 17, josidai: 11, nittokoma: 105, daitoakotei: 17 },
  { name: "千葉西", deviation: "61", kyutei: 0, chiba: 3, otherNational: 8, sokeijori: 13, gmarch: 107, shikou: 21, seiseimeigaku: 59, josidai: 10, nittokoma: 257, daitoakotei: 32 },
  { name: "検見川", deviation: "59", kyutei: 0, chiba: 4, otherNational: 5, sokeijori: 11, gmarch: 88, shikou: 26, seiseimeigaku: 61, josidai: 2, nittokoma: 237, daitoakotei: 39 },
  { name: "敬愛学園", deviation: "50-59", kyutei: 0, chiba: 2, otherNational: 9, sokeijori: 2, gmarch: 30, shikou: 4, seiseimeigaku: 19, josidai: 13, nittokoma: 87, daitoakotei: 27 },
  { name: "千葉女子", deviation: "57-58", kyutei: 0, chiba: 2, otherNational: 4, sokeijori: 5, gmarch: 27, shikou: 2, seiseimeigaku: 13, josidai: 19, nittokoma: 16, daitoakotei: 5 },
  { name: "東海大市原望洋", deviation: "50-58", kyutei: 0, chiba: 0, otherNational: 0, sokeijori: 0, gmarch: 2, shikou: 0, seiseimeigaku: 1, josidai: 0, nittokoma: 5, daitoakotei: 248 },
  { name: "千葉明徳", deviation: "41-57", kyutei: 2, chiba: 1, otherNational: 5, sokeijori: 23, gmarch: 80, shikou: 10, seiseimeigaku: 46, josidai: 10, nittokoma: 118, daitoakotei: 41 },
  { name: "千葉南", deviation: "56", kyutei: 0, chiba: 3, otherNational: 11, sokeijori: 2, gmarch: 43, shikou: 13, seiseimeigaku: 26, josidai: 6, nittokoma: 136, daitoakotei: 20 },
  { name: "千葉北", deviation: "56", kyutei: 0, chiba: 0, otherNational: 5, sokeijori: 2, gmarch: 19, shikou: 6, seiseimeigaku: 9, josidai: 1, nittokoma: 77, daitoakotei: 31 },
  { name: "磯辺", deviation: "55", kyutei: 0, chiba: 0, otherNational: 3, sokeijori: 2, gmarch: 18, shikou: 3, seiseimeigaku: 12, josidai: 1, nittokoma: 92, daitoakotei: 19 },
  { name: "東金", deviation: "52-55", kyutei: 0, chiba: 0, otherNational: 0, sokeijori: 0, gmarch: 5, shikou: 2, seiseimeigaku: 2, josidai: 0, nittokoma: 13, daitoakotei: 7 },
  { name: "千葉商業", deviation: "51", kyutei: 0, chiba: 0, otherNational: 0, sokeijori: 0, gmarch: 13, shikou: 2, seiseimeigaku: 2, josidai: 0, nittokoma: 13, daitoakotei: 8 },
  { name: "茂原", deviation: "51", kyutei: 0, chiba: 0, otherNational: 0, sokeijori: 0, gmarch: 3, shikou: 0, seiseimeigaku: 1, josidai: 0, nittokoma: 24, daitoakotei: 9 },
  { name: "千城台", deviation: "50", kyutei: 0, chiba: 0, otherNational: 1, sokeijori: 2, gmarch: 3, shikou: 2, seiseimeigaku: 13, josidai: 2, nittokoma: 6, daitoakotei: 20 },
  { name: "若松", deviation: "48", kyutei: 0, chiba: 0, otherNational: 0, sokeijori: 0, gmarch: 0, shikou: 0, seiseimeigaku: 0, josidai: 0, nittokoma: 6, daitoakotei: 4 },
  { name: "土気", deviation: "48", kyutei: 0, chiba: 0, otherNational: 0, sokeijori: 0, gmarch: 0, shikou: 0, seiseimeigaku: 0, josidai: 0, nittokoma: 8, daitoakotei: 4 },
  { name: "千葉工業", deviation: "44-47", kyutei: 0, chiba: 0, otherNational: 0, sokeijori: 0, gmarch: 0, shikou: 1, seiseimeigaku: 0, josidai: 0, nittokoma: 6, daitoakotei: 1 },
  { name: "京葉工業", deviation: "44-45", kyutei: 0, chiba: 0, otherNational: 0, sokeijori: 0, gmarch: 0, shikou: 0, seiseimeigaku: 0, josidai: 0, nittokoma: 7, daitoakotei: 0 },
  { name: "東金商業", deviation: "45", kyutei: 0, chiba: 0, otherNational: 0, sokeijori: 0, gmarch: 0, shikou: 0, seiseimeigaku: 0, josidai: 0, nittokoma: 3, daitoakotei: 0 },
  { name: "犢橋", deviation: "43", kyutei: 0, chiba: 0, otherNational: 0, sokeijori: 0, gmarch: 6, shikou: 0, seiseimeigaku: 0, josidai: 0, nittokoma: 3, daitoakotei: 1 },
  { name: "大網", deviation: "36-41", kyutei: 0, chiba: 0, otherNational: 0, sokeijori: 0, gmarch: 2, shikou: 0, seiseimeigaku: 0, josidai: 0, nittokoma: 0, daitoakotei: 0 },
]

export function RegionalDataSection() {
  const [searchTerm, setSearchTerm] = useState("")
  const [sortConfig, setSortConfig] = useState<{ key: string; direction: "asc" | "desc" } | null>(null)
  const [showAllData, setShowAllData] = useState(false)

  const filteredAndSortedData = useMemo(() => {
    let data = [...schoolData]

    if (searchTerm) {
      data = data.filter((school) => school.name.toLowerCase().includes(searchTerm.toLowerCase()))
    }

    if (sortConfig) {
      data.sort((a, b) => {
        const aVal = a[sortConfig.key as keyof typeof a]
        const bVal = b[sortConfig.key as keyof typeof b]
        if (typeof aVal === "number" && typeof bVal === "number") {
          return sortConfig.direction === "asc" ? aVal - bVal : bVal - aVal
        }
        return 0
      })
    }

    return data
  }, [searchTerm, sortConfig])

  const displayData = showAllData ? filteredAndSortedData : filteredAndSortedData.slice(0, 10)

  const handleSort = (key: string) => {
    setSortConfig((current) => {
      if (current?.key === key) {
        return { key, direction: current.direction === "asc" ? "desc" : "asc" }
      }
      return { key, direction: "desc" }
    })
  }

  const SortIcon = ({ columnKey }: { columnKey: string }) => {
    if (sortConfig?.key !== columnKey) return null
    return sortConfig.direction === "asc" ? (
      <ChevronUp className="w-3 h-3 inline ml-1" />
    ) : (
      <ChevronDown className="w-3 h-3 inline ml-1" />
    )
  }

  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <p className="text-primary font-semibold text-sm mb-4">地域データ</p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 leading-relaxed mb-4">
              小・中学時代から見据える将来の可能性
            </h2>
          </div>

          {/* Lead Text */}
          <div className="bg-white rounded-xl p-6 mb-8 shadow-md border border-slate-100 max-w-3xl mx-auto">
            <p className="text-slate-700 leading-relaxed text-center">
              土気からの生徒が多い高校の大学合格実績。今の学習が、数年後の選択肢を決めます。
            </p>
          </div>

          {/* Legend */}
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-blue-600" />
              <span className="text-sm text-slate-700">国公立大学</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-rose-600" />
              <span className="text-sm text-slate-700">私立大学</span>
            </div>
          </div>

          {/* Search */}
          <div className="mb-6 max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="高校名で検索..."
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {/* Data Table */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-100">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-800 text-white">
                    <th className="px-2 py-3 text-left font-semibold sticky left-0 bg-slate-800 z-10 min-w-[90px] text-xs">
                      高校名
                    </th>
                    <th className="px-2 py-3 text-center font-semibold min-w-[55px] text-xs">偏差値</th>
                    {/* National/Public Universities - Blue */}
                    <th
                      className="px-2 py-3 text-center font-semibold cursor-pointer hover:bg-blue-700 min-w-[55px] text-xs bg-blue-600"
                      onClick={() => handleSort("kyutei")}
                    >
                      旧帝一工
                      <SortIcon columnKey="kyutei" />
                    </th>
                    <th
                      className="px-2 py-3 text-center font-semibold cursor-pointer hover:bg-blue-700 min-w-[50px] text-xs bg-blue-600"
                      onClick={() => handleSort("chiba")}
                    >
                      千葉大
                      <SortIcon columnKey="chiba" />
                    </th>
                    <th
                      className="px-2 py-3 text-center font-semibold cursor-pointer hover:bg-blue-700 min-w-[65px] text-xs bg-blue-600"
                      onClick={() => handleSort("otherNational")}
                    >
                      その他国公立
                      <SortIcon columnKey="otherNational" />
                    </th>
                    {/* Private Universities - Red/Rose */}
                    <th
                      className="px-2 py-3 text-center font-semibold cursor-pointer hover:bg-rose-700 min-w-[60px] text-xs bg-rose-600"
                      onClick={() => handleSort("sokeijori")}
                    >
                      早慶上理
                      <SortIcon columnKey="sokeijori" />
                    </th>
                    <th
                      className="px-2 py-3 text-center font-semibold cursor-pointer hover:bg-rose-700 min-w-[60px] text-xs bg-rose-600"
                      onClick={() => handleSort("gmarch")}
                    >
                      GMARCH
                      <SortIcon columnKey="gmarch" />
                    </th>
                    <th
                      className="px-2 py-3 text-center font-semibold cursor-pointer hover:bg-rose-700 min-w-[50px] text-xs bg-rose-600"
                      onClick={() => handleSort("shikou")}
                    >
                      四工大
                      <SortIcon columnKey="shikou" />
                    </th>
                    <th
                      className="px-2 py-3 text-center font-semibold cursor-pointer hover:bg-rose-700 min-w-[70px] text-xs bg-rose-600"
                      onClick={() => handleSort("seiseimeigaku")}
                    >
                      成成明学獨國武
                      <SortIcon columnKey="seiseimeigaku" />
                    </th>
                    <th
                      className="px-2 py-3 text-center font-semibold cursor-pointer hover:bg-rose-700 min-w-[70px] text-xs bg-rose-600"
                      onClick={() => handleSort("josidai")}
                    >
                      女子大御三家
                      <SortIcon columnKey="josidai" />
                    </th>
                    <th
                      className="px-2 py-3 text-center font-semibold cursor-pointer hover:bg-rose-700 min-w-[60px] text-xs bg-rose-600"
                      onClick={() => handleSort("nittokoma")}
                    >
                      日東駒専
                      <SortIcon columnKey="nittokoma" />
                    </th>
                    <th
                      className="px-2 py-3 text-center font-semibold cursor-pointer hover:bg-rose-700 min-w-[70px] text-xs bg-rose-600"
                      onClick={() => handleSort("daitoakotei")}
                    >
                      大東亜帝国
                      <SortIcon columnKey="daitoakotei" />
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {displayData.map((school) => (
                    <tr
                      key={school.name}
                      className={`hover:bg-slate-50 transition-colors ${school.name === "土気" ? "bg-primary/5 font-semibold" : ""}`}
                    >
                      <td className="px-2 py-2.5 font-medium text-slate-900 sticky left-0 bg-white z-10 text-xs">
                        {school.name === "土気" && <span className="text-primary mr-1">●</span>}
                        {school.name}
                      </td>
                      <td className="px-2 py-2.5 text-center text-slate-600 text-xs">{school.deviation}</td>
                      {/* National - light blue background */}
                      <td className="px-2 py-2.5 text-center text-xs bg-blue-50">{school.kyutei || "-"}</td>
                      <td className="px-2 py-2.5 text-center text-xs bg-blue-50">{school.chiba || "-"}</td>
                      <td className="px-2 py-2.5 text-center text-xs bg-blue-50">{school.otherNational || "-"}</td>
                      {/* Private - light rose background */}
                      <td className="px-2 py-2.5 text-center text-xs bg-rose-50">{school.sokeijori || "-"}</td>
                      <td className="px-2 py-2.5 text-center text-xs bg-rose-50">{school.gmarch || "-"}</td>
                      <td className="px-2 py-2.5 text-center text-xs bg-rose-50">{school.shikou || "-"}</td>
                      <td className="px-2 py-2.5 text-center text-xs bg-rose-50">{school.seiseimeigaku || "-"}</td>
                      <td className="px-2 py-2.5 text-center text-xs bg-rose-50">{school.josidai || "-"}</td>
                      <td className="px-2 py-2.5 text-center text-xs bg-rose-50">{school.nittokoma || "-"}</td>
                      <td className="px-2 py-2.5 text-center text-xs bg-rose-50">{school.daitoakotei || "-"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Show More Button */}
            {filteredAndSortedData.length > 10 && (
              <div className="p-4 border-t border-slate-100 text-center">
                <button
                  type="button"
                  className="text-primary hover:text-primary/80 font-semibold text-sm flex items-center gap-2 mx-auto"
                  onClick={() => setShowAllData(!showAllData)}
                >
                  {showAllData ? (
                    <>
                      <ChevronUp className="w-4 h-4" />
                      閉じる
                    </>
                  ) : (
                    <>
                      <ChevronDown className="w-4 h-4" />
                      全{filteredAndSortedData.length}校を表示
                    </>
                  )}
                </button>
              </div>
            )}
          </div>

          {/* Disclaimer */}
          <div className="mt-6 text-left">
            <p className="text-slate-500 text-xs leading-relaxed">
              ※ データは2024〜年度実績に基づく参考値です。
              <br />
              ※ 私立大学は一人で複数合格を出せるため、実入学数は表の数値より少ないことが予想されます。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
