"use client"

import Image from "next/image"

export function MathRoadmapSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-blue-50 py-20">
      
      {/* 背景エフェクト */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-yellow-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-300/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">

        {/* 見出し */}
        <div className="text-center max-w-4xl mx-auto mb-14">
          <p className="text-blue-600 font-bold mb-3 tracking-wider">
            先取り学習ロードマップ
          </p>

          <h2 className="text-3xl md:text-5xl font-bold leading-tight text-gray-900">
            小学生から始める、
            <br />
            <span className="text-red-500">
              数学強者へのロードマップ
            </span>
          </h2>

          <p className="mt-6 text-gray-600 text-lg leading-relaxed">
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
                M君は現在小学4年生
              </h3>

              <p className="text-gray-700 leading-relaxed mb-4">
                小4算数を約4～5か月で終了予定です。
              </p>

              <p className="text-gray-700 leading-relaxed">
                理解した単元から先へ進むことで、
                学年にとらわれず、
                中学・高校内容へ進
                んでいきます。
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                学校の授業で、復習→定着。
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
                src="/images/math-warrior.png"
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

        {/* タイムライン */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-blue-100">

          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 text-gray-900">
            数学カリキュラム例
          </h3>

          <div className="space-y-5">

            {[
              ["小学4年", "小5算数終了予定"],
              ["小学5年", "小学算数終了予定"],
              ["小学6年", "中1数学終了予定"],
              ["中学1年", "中2数学終了予定"],
              ["中学2年", "中学数学終了予定"],
              ["中学3年", "数Ⅰ・A終了予定"],
              ["高校1年", "数Ⅱ・B"],
              ["高校2年", "数Ⅲ・C終了予定"],
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row md:items-center gap-4 bg-blue-50 rounded-2xl p-5 hover:scale-[1.01] transition"
              >
                <div className="md:w-48 font-bold text-blue-700 text-lg">
                  {item[0]}
                </div>

                <div className="hidden md:block text-2xl text-red-400">
                  →
                </div>

                <div className="font-semibold text-gray-800 text-lg">
                  {item[1]}
                </div>
              </div>
            ))}

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
  )
}