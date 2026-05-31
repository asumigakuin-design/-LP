"use client"

import Image from "next/image"
import { useState } from "react"

export function MathRoadmapSection() {
  const [modal, setModal] = useState<string | null>(null)
  return (
  <>
   <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white py-20">
      
      {/* 背景エフェクト */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-400/20 rounded-full blur-3xl"></div>

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl"></div>
      
      <div className="absolute top-0 left-0 w-72 h-72 bg-yellow-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-300/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">

        {/* 見出し */}
        <div className="text-center max-w-4xl mx-auto mb-14">
          <p className="text-blue-600 font-bold mb-3 tracking-wider">
            先取り学習ロードマップ
          </p>

          <h2 className="text-3xl md:text-5xl font-bold leading-tight text-white">
            小学生時代の「勉強の貯金」が、

            <br />
            <span className="text-red-500">
              将来の選択肢を広げます
            </span>
          </h2>

          <p className="mt-6 text-white text-lg leading-relaxed">
            理解した子から、学年を超えてどんどん進む。
            <br />
            高校数学を早く終えることで、
            高3を「受験対策」に集中できるようになります。
          </p>
        </div>

        {/* 上段 */}
        <div className="grid lg:grid-cols-2 gap-10 items-center mb-16">

          {/* 左説明 */}
          <div className="space-y-6">

            <div className="bg-white rounded-3xl shadow-lg p-8 border border-blue-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                医学部を目指すM君の場合
              </h3>

              <p className="text-gray-700 leading-relaxed mb-4">
                 M君は特別な天才ではありません。
              </p>

              <p className="text-gray-700 leading-relaxed">
                 ですが、小4から先取りを始め、
            「理解した単元からどんどん進める」
            という学習を継続しています。
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                小学生のうちに積み重ねた学習量が、
            中学・高校で大きな差になります。
              </p>

            </div>

            {/* ポイント */}
            <div className="grid sm:grid-cols-2 gap-4">

              <div className="bg-blue-600 text-white rounded-2xl p-5 shadow-md">
                <p className="font-bold">
                  理解した単元から
                  <br />
                  どんどん進める
                </p>
              </div>

              <div className="bg-red-500 text-white rounded-2xl p-5 shadow-md">
                <p className="font-bold">
                  無学年方式で
                  <br />
                  先取り学習
                </p>
              </div>

              <div className="bg-yellow-400 rounded-2xl p-5 shadow-md">
                <p className="font-bold text-gray-900">
                  高3を受験演習に
                  <br />
                  集中できる
                </p>
              </div>

              <div className="bg-gray-900 text-white rounded-2xl p-5 shadow-md">
                <p className="font-bold">
                  早く始めるほど
                  <br />
                  差がつく
                </p>
              </div>

            </div>

          </div>

          {/* 右画像 */}
          <div className="relative flex justify-center">

            <div className="absolute inset-0 bg-blue-400/20 blur-3xl rounded-full"></div>

            <div className="relative">
              <Image
                src="/images/math-hero-roadmap.png"
                alt="数学強者"
                width={500}
                height={500}
                className="drop-shadow-2xl"
              />

              <div className="absolute -top-4 -left-4 bg-white rounded-2xl px-5 py-3 shadow-xl border border-yellow-300">
                <p className="font-bold text-lg text-gray-900">
                  これで
                  <br />
                  <span className="text-red-500 text-2xl">
                    数学強者
                  </span>
                  になる！
                </p>
              </div>

            </div>

          </div>

        </div>

{/* カリキュラム */}
<div className="mt-20">
  <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">
    数学カリキュラム例
  </h3>

  <div className="grid md:grid-cols-3 gap-8">

    {/* 小学生 */}
    <div 
      onClick={() => setModal("elementary")}
      className="rounded-3xl p-8 bg-gradient-to-br from-blue-500 to-cyan-400 text-white shadow-2xl hover:scale-105 transition duration-300">
      <div className="text-center mb-6">
        <p className="text-sm tracking-widest opacity-80">
          ELEMENTARY
        </p>

        <h4 className="text-3xl font-bold mt-2">
          小学生
        </h4>
<p className="text-center text-sm font-bold mt-3 text-white animate-pulse">
  ▼ クリックで詳細を見る
</p>
      </div>

      <div className="space-y-4">
        <div className="bg-white/20 rounded-2xl p-4">
          <p className="font-bold text-xl">小4</p>
          <p className="text-sm mt-1">
            小5算数終了予定
          </p>
        </div>

        <div className="bg-white/20 rounded-2xl p-4">
          <p className="font-bold text-xl">小5</p>
          <p className="text-sm mt-1">
            小学校算数終了予定
          </p>
        </div>

        <div className="bg-white/20 rounded-2xl p-4">
          <p className="font-bold text-xl">小6</p>
          <p className="text-sm mt-1">
            中1数学終了予定
          </p>
        </div>
      </div>

    </div>

    {/* 中学生 */}
    <div 
      onClick={() => setModal("junior")}
      className="rounded-3xl p-8 bg-gradient-to-br from-green-500 to-emerald-400 text-white shadow-2xl hover:scale-105 transition duration-300">
      <div className="text-center mb-6">
        <p className="text-sm tracking-widest opacity-80">
          JUNIOR HIGH
        </p>

        <h4 className="text-3xl font-bold mt-2">
          中学生
        </h4>
<p className="text-center text-sm font-bold mt-3 text-white animate-pulse">
  ▼ クリックで詳細を見る
</p>
      </div>

      <div className="space-y-4">
        <div className="bg-white/20 rounded-2xl p-4">
          <p className="font-bold text-xl">中1</p>
          <p className="text-sm mt-1">
            中2数学終了予定
          </p>
        </div>

        <div className="bg-white/20 rounded-2xl p-4">
          <p className="font-bold text-xl">中2</p>
          <p className="text-sm mt-1">
            中学数学終了予定
          </p>
        </div>

        <div className="bg-white/20 rounded-2xl p-4">
          <p className="font-bold text-xl">中3</p>
          <p className="text-sm mt-1">
            数ⅠA終了予定
          </p>
        </div>
      </div>

    </div>

    {/* 高校生 */}
    <div 
      onClick={() => setModal("high")}
      className="rounded-3xl p-8 bg-gradient-to-br from-purple-600 to-pink-500 text-white shadow-2xl hover:scale-105 transition duration-300">
      <div className="text-center mb-6">
        <p className="text-sm tracking-widest opacity-80">
          HIGH SCHOOL
        </p>

        <h4 className="text-3xl font-bold mt-2">
          高校生
        </h4>
<p className="text-center text-sm font-bold mt-3 text-white animate-pulse">
  ▼ クリックで詳細を見る
</p>
      </div>

      <div className="space-y-4">
        <div className="bg-white/20 rounded-2xl p-4">
          <p className="font-bold text-xl">高1</p>
          <p className="text-sm mt-1">
            数ⅡB終了予定
          </p>
        </div>

        <div className="bg-white/20 rounded-2xl p-4">
          <p className="font-bold text-xl">高2</p>
          <p className="text-sm mt-1">
            数ⅢC終了予定
          </p>
        </div>

        <div className="bg-yellow-300 text-black rounded-2xl p-5 mt-6 text-center">
          <p className="font-bold text-2xl">
            高3を
          </p>

          <p className="font-bold text-2xl">
            受験演習へ
          </p>
        </div>
      </div>
    </div>

  </div>

</div>

        {/* 下部メッセージ */}
        <div className="mt-14 bg-gradient-to-r from-red-500 to-blue-600 text-white rounded-3xl p-10 text-center shadow-2xl">

          <h3 className="text-2xl md:text-4xl font-bold leading-relaxed">
            高校数学を早く終えることで、
            <br />
            高3を「受験対策」に使える時間が大きく増えます。
          </h3>

          <p className="mt-6 text-lg md:text-xl text-white/90">
            「いつ始めるか」が、
            将来の選択肢を大きく変えます。
          </p>

        </div>

      </div>
    </section>
 {modal && (
  <div
    className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
    onClick={() => setModal(null)}
  >
    <div
      className="bg-slate-900 text-white rounded-3xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        className="float-right text-2xl"
        onClick={() => setModal(null)}
      >
        ×
      </button>

      {modal === "elementary" && (
        <>
          <h3 className="text-3xl font-bold mb-6 text-cyan-400">
            小学生
          </h3>

          <p className="font-bold mb-4">
            当たり前の基準を上げる
          </p>

          <ul className="space-y-3 mb-6">
            <li>✓ ミスゼロの計算力</li>
            <li>✓ 120分集中できる勉強体力</li>
            <li>✓ 15分考え抜く粘り強さ</li>
          </ul>

          <hr className="my-6 border-slate-700" />

          <p>
            「解ける」ではなく
            「呼吸するように正解する」
            レベル（無意識的有能）
            を目指します。
          </p>
        </>
      )}

      {modal === "junior" && (
        <>
          <h3 className="text-3xl font-bold mb-6 text-green-400">
            中学時代
          </h3>

          <p className="font-bold mb-4">
            トップ校合格と先取戦略のバランス
          </p>

          <ul className="space-y-3 mb-6">
            <li>✓ 学習習慣の確立（長時間勉強開始）</li>
            <li>✓ 中学範囲を完璧に仕上げる</li>
            <li>✓ 高校の範囲の導入は必須</li>
          </ul>

          <hr className="my-6 border-slate-700" />

          <p>
            中学範囲と高校範囲の両立が鍵
          </p>
        </>
      )}

      {modal === "high" && (
        <>
          <h3 className="text-3xl font-bold mb-6 text-purple-400">
            高校時代
          </h3>

          <p className="font-bold mb-4">
            勉強を楽しむ心の余裕が必要
          </p>

          <ul className="space-y-3 mb-6">
            <li>✓ 学習習慣の確立（隙間時間まで勉強）</li>
            <li>✓ 高1・高2が最大の勝負</li>
            <li>✓ 受け身ではなく攻めの勉強が確立</li>
          </ul>

          <hr className="my-6 border-slate-700" />

          <p>
            受験時は、圧倒的な力で
            ねじ伏せるくらいの自信がつく、
            勉強量をこなします。
          </p>
        </>
      )}
    </div>
  </div>
)}
</>
)
}