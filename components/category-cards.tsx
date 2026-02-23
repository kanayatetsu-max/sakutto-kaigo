import { Shield, Droplets, Utensils, Eye, ArrowRight } from "lucide-react"

const categories = [
  {
    id: "safety",
    title: "家の中の安全",
    description: "転倒防止グッズ・手すり・センサーライトなど、室内の安全対策アイテムを比較。",
    icon: Shield,
    color: "bg-blue-100 text-blue-700",
    items: ["転倒防止マット", "後付け手すり", "センサーライト"],
    badge: "人気No.1",
  },
  {
    id: "hygiene",
    title: "排泄・衛生の悩み",
    description: "おむつ・ポータブルトイレ・消臭グッズなど、デリケートな悩みを解決。",
    icon: Droplets,
    color: "bg-green-100 text-green-700",
    items: ["大人用おむつ", "ポータブルトイレ", "消臭ガジェット"],
    badge: "定番",
  },
  {
    id: "meals",
    title: "食事・リハビリ",
    description: "介護食器・あゆみシューズ・便利な杖など、日常の動作をサポート。",
    icon: Utensils,
    color: "bg-orange-100 text-orange-700",
    items: ["介護食器セット", "あゆみシューズ", "折りたたみ杖"],
    badge: "注目",
  },
  {
    id: "monitoring",
    title: "見守り・防犯",
    description: "見守りカメラ・スマートロック・GPS端末で離れて暮らす親を見守る。",
    icon: Eye,
    color: "bg-purple-100 text-purple-700",
    items: ["見守りカメラ", "スマートロック", "GPS端末"],
    badge: "新着",
  },
]

export function CategoryCards() {
  return (
    <section id="categories" className="bg-background py-16 lg:py-24" aria-labelledby="categories-heading">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-medium tracking-wide text-primary uppercase">
            4つの柱
          </p>
          <h2
            id="categories-heading"
            className="text-2xl font-bold text-foreground text-balance md:text-3xl"
          >
            お悩みのカテゴリーから探す
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            それぞれのカテゴリーで楽天ランキング上位の商品を厳選しました
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat) => (
            <a
              key={cat.id}
              href={`#${cat.id}`}
              className="group relative flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:shadow-lg hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              {/* Badge */}
              <span className="absolute -top-2.5 right-4 rounded-full bg-warm-orange px-3 py-0.5 text-xs font-bold text-accent-foreground">
                {cat.badge}
              </span>

              <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${cat.color}`}>
                <cat.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-card-foreground">{cat.title}</h3>
              <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                {cat.description}
              </p>
              <ul className="mb-4 flex flex-wrap gap-2" aria-label={`${cat.title}の主な商品`}>
                {cat.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <span className="inline-flex items-center gap-1 text-sm font-bold text-primary transition-transform group-hover:translate-x-1">
                {"詳しく見る"}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
