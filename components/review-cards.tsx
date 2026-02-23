import { ThumbsUp, ThumbsDown, MessageSquare, TrendingUp } from "lucide-react"

const reviews = [
  {
    product: "パナソニック 屋内HDカメラ",
    category: "見守り・防犯",
    satisfaction: [
      "離れて暮らす母の様子がスマホで確認でき安心",
      "暗い部屋でもくっきり映る暗視機能に感動",
      "設定がアプリだけで完結して簡単だった",
    ],
    complaints: [
      "SDカードが別売りで追加費用がかかる",
      "Wi-Fiが弱いと映像が途切れることがある",
    ],
    summary:
      "遠方の親を持つ40〜50代に圧倒的支持。設定の簡単さと画質が高評価。ネットワーク環境の整備が事前に必要。",
    totalReviews: 1842,
    positiveRate: 89,
  },
  {
    product: "サンコー おくだけ吸着マット",
    category: "家の中の安全",
    satisfaction: [
      "置くだけで本当にズレない吸着力に驚き",
      "汚れたら洗濯機で洗えるのが便利",
      "はさみで自由にカットできてサイズ調整OK",
    ],
    complaints: [
      "厚みが薄いのでクッション性は低め",
      "カラーバリエーションが少ない",
    ],
    summary:
      "手軽さが最大の武器。工事不要で高齢者宅にすぐ導入できる。厚みが欲しい方は2枚重ねも検討を。",
    totalReviews: 2103,
    positiveRate: 92,
  },
  {
    product: "TP-Link Tapo C210",
    category: "見守り・防犯",
    satisfaction: [
      "4,000円台でこの機能は驚異的なコスパ",
      "首振り機能で部屋全体をカバーできる",
      "複数台設置しても財布に優しい",
    ],
    complaints: [
      "マイクの音質がやや聞き取りにくい",
      "クラウド保存は月額料金が必要",
    ],
    summary:
      "コスパ重視ならこれ一択。まずは1台試したい方に最適。音質にこだわるなら上位機種も検討。",
    totalReviews: 3256,
    positiveRate: 86,
  },
]

export function ReviewCards() {
  return (
    <section className="bg-background py-16 lg:py-24" aria-labelledby="reviews-heading">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-medium tracking-wide text-primary uppercase">
            レビュー分析
          </p>
          <h2 id="reviews-heading" className="text-2xl font-bold text-foreground text-balance md:text-3xl">
            楽天ユーザーのリアルな声
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            {"数千件のレビューをAIが分析。「満足」と「不満」を要約しました"}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <article
              key={review.product}
              className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm"
            >
              {/* Header */}
              <div className="mb-4">
                <span className="mb-2 inline-block rounded-md bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground">
                  {review.category}
                </span>
                <h3 className="text-base font-bold text-card-foreground">{review.product}</h3>
                <div className="mt-2 flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <MessageSquare className="h-3.5 w-3.5" aria-hidden="true" />
                    {review.totalReviews.toLocaleString()}件
                  </span>
                  <span className="flex items-center gap-1">
                    <TrendingUp className="h-3.5 w-3.5 text-green-600" aria-hidden="true" />
                    {"満足度 "}{review.positiveRate}%
                  </span>
                </div>
              </div>

              {/* Satisfaction */}
              <div className="mb-4">
                <h4 className="mb-2 flex items-center gap-1.5 text-sm font-bold text-green-700">
                  <ThumbsUp className="h-4 w-4" aria-hidden="true" />
                  みんなの満足ポイント
                </h4>
                <ul className="space-y-1.5">
                  {review.satisfaction.map((s) => (
                    <li
                      key={s}
                      className="rounded-lg bg-green-50 px-3 py-2 text-sm leading-relaxed text-card-foreground"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Complaints */}
              <div className="mb-4">
                <h4 className="mb-2 flex items-center gap-1.5 text-sm font-bold text-red-600">
                  <ThumbsDown className="h-4 w-4" aria-hidden="true" />
                  {"気になる声"}
                </h4>
                <ul className="space-y-1.5">
                  {review.complaints.map((c) => (
                    <li
                      key={c}
                      className="rounded-lg bg-red-50 px-3 py-2 text-sm leading-relaxed text-card-foreground"
                    >
                      {c}
                    </li>
                  ))}
                </ul>
              </div>

              {/* AI Summary */}
              <div className="mt-auto rounded-xl bg-secondary p-4">
                <p className="text-xs font-bold text-primary mb-1">AI分析まとめ</p>
                <p className="text-sm leading-relaxed text-secondary-foreground">
                  {review.summary}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
