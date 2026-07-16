export function SummerSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-orange-50 to-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* タイトル */}
        <div className="text-center">

          <span className="inline-block bg-orange-500 text-white px-5 py-2 rounded-full font-bold">
            SUMMER EVENT
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            夏休みは
            <span className="text-orange-500">一番差がつく</span>
            40日間。
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-8 max-w-3xl mx-auto">
            夏休みは勉強時間の差がそのまま成績の差になります。
            <br />
            あすみ学院では、
            <span className="font-bold text-orange-600">
              「やるときはやる。遊ぶときは遊ぶ。」
            </span>
            を大切にしながら、
            <br />
            メリハリのある夏休みをサポートします。
          </p>

        </div>

        {/* メインカード */}
        <div className="mt-16 bg-white rounded-3xl shadow-xl overflow-hidden">

          <div className="grid md:grid-cols-2">

            {/* 左 */}
            <div className="bg-orange-500 text-white p-10 flex flex-col justify-center">

              <div className="text-sm tracking-widest opacity-80">
                SPECIAL EVENT
              </div>

              <h3 className="mt-3 text-4xl font-bold">
                夏の缶詰学習会
              </h3>

              <div className="mt-8 space-y-2">

                <div className="text-3xl font-extrabold">
                  8:00〜17:00
                </div>

                <div className="text-xl font-bold">
                  参加費：1日3,000円（税込）
                </div>

                <div className="text-lg">
                  🍱 昼食・おやつ付き
                </div>

              </div>

              <div className="mt-8 space-y-3 text-lg">

                <p>✅ 夏休みの宿題がどんどん進む</p>

                <p>✅ 分からない問題はその場で質問OK</p>

                <p>✅ 家ではできない集中力が身につく</p>

              </div>

            </div>

            {/* 右 */}
            <div className="p-10">

              <h4 className="text-2xl font-bold mb-6">
                開催日
              </h4>

              <div className="space-y-5">

                <div className="rounded-xl border-2 border-orange-300 p-5 hover:shadow-lg transition">

                  <div className="text-orange-500 font-bold">
                    第1回
                  </div>

                  <div className="text-3xl font-bold">
                    7月23日（木）
                  </div>

                </div>

                <div className="rounded-xl border-2 border-orange-300 p-5 hover:shadow-lg transition">

                  <div className="text-orange-500 font-bold">
                    第2回
                  </div>

                  <div className="text-3xl font-bold">
                    7月30日（木）
                  </div>

                </div>

              </div>

              <div className="mt-8 bg-orange-50 rounded-xl p-5">

                <h5 className="font-bold text-lg text-orange-600">
                  初めての方も大歓迎！
                </h5>

                <ul className="mt-3 space-y-2 text-gray-700">
                  <li>✔ 小学生・中学生対象</li>
                  <li>✔ 1日だけの参加もOK</li>
                  <li>✔ 先生が一人ひとりをサポート</li>
                </ul>

              </div>

              <p className="mt-6 text-gray-500 text-sm">
                ※8月開催日は決まり次第ホームページでお知らせします。
              </p>

            </div>

          </div>

        </div>

        {/* 特徴 */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">

          <div className="bg-white rounded-2xl shadow p-8">

            <div className="text-5xl mb-4">
              📚
            </div>

            <h3 className="font-bold text-xl">
              家ではできない集中力
            </h3>

            <p className="mt-3 text-gray-600 leading-7">
              周りのみんなも勉強しているから、
              長時間でも集中して取り組めます。
            </p>

          </div>

          <div className="bg-white rounded-2xl shadow p-8">

            <div className="text-5xl mb-4">
              ✏️
            </div>

            <h3 className="font-bold text-xl">
              分からないをその場で解決
            </h3>

            <p className="mt-3 text-gray-600 leading-7">
              分からない問題はすぐ質問。
              「分からないまま帰る」をなくします。
            </p>

          </div>

          <div className="bg-white rounded-2xl shadow p-8">

            <div className="text-5xl mb-4">
              🎯
            </div>

            <h3 className="font-bold text-xl">
              宿題も受験勉強も進む
            </h3>

            <p className="mt-3 text-gray-600 leading-7">
              学校の宿題から受験対策まで、
              一人ひとりに合わせてサポートします。
            </p>

          </div>

        </div>

        {/* CTA */}
        <div className="mt-20 text-center">

          <h3 className="text-3xl font-bold">
            この夏を変える第一歩を踏み出そう！
          </h3>

          <p className="mt-4 text-lg text-gray-600">
            お席には限りがあります。<br />
            ご希望の方はお早めにお申し込みください。
          </p>

          <a
            href="#contact-form"
            className="inline-block mt-8 bg-orange-500 hover:bg-orange-600 transition text-white font-bold text-xl px-12 py-5 rounded-full shadow-lg"
          >
            缶詰学習会に申し込む
          </a>

        </div>

      </div>
    </section>
  )
}