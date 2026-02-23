import { Clock, ArrowRight, Shield, Droplets, Utensils, Eye } from "lucide-react"
import type { LucideIcon } from "lucide-react"

type Article = {
  title: string
  excerpt: string
  category: string
  categoryIcon: LucideIcon
  categoryColor: string
  date: string
  readTime: string
}

const articles: Article[] = [
  {
    title: "【2026年版】見守りカメラおすすめ5選｜離れて暮らす親に安心を",
    excerpt:
      "楽天ランキング上位の見守りカメラを徹底比較。画質・価格・設定の簡単さで選ぶならこの5台。",
    category: "見守り・防犯",
    categoryIcon: Eye,
    categoryColor: "bg-purple-100 text-purple-700",
    date: "2026.02.15",
    readTime: "8分",
  },
  {
    title: "親の転倒を防ぐ！フローリング滑り止めマットの選び方ガイド",
    excerpt:
      "工事不要で即日設置OK。吸着マットの素材・厚み・価格を比較して最適な一枚を見つけましょう。",
    category: "家の中の安全",
    categoryIcon: Shield,
    categoryColor: "bg-blue-100 text-blue-700",
    date: "2026.02.10",
    readTime: "6分",
  },
  {
    title: "介護の消臭問題を解決！オゾン脱臭機の効果と選び方",
    excerpt:
      "ポータブルトイレ・おむつ周りの臭い対策に。マクセル「オゾネオ」など人気機種を比較レビュー。",
    category: "排泄・衛生の悩み",
    categoryIcon: Droplets,
    categoryColor: "bg-green-100 text-green-700",
    date: "2026.02.05",
    readTime: "7分",
  },
  {
    title: "あゆみシューズ完全ガイド｜サイズの選び方から人気モデルまで",
    excerpt:
      "リハビリ・室内履きに最適な「あゆみ」シリーズ。足のむくみに対応した選び方を解説します。",
    category: "食事・リハビリ",
    categoryIcon: Utensils,
    categoryColor: "bg-orange-100 text-orange-700",
    date: "2026.01.28",
    readTime: "5分",
  },
]

export function ArticleList() {
  return (
    <section className="bg-background py-16 lg:py-24" aria-labelledby="articles-heading">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <div className="mb-10 text-center">
          <p className="mb-2 text-sm font-medium tracking-wide text-primary uppercase">
            最新記事
          </p>
          <h2 id="articles-heading" className="text-2xl font-bold text-foreground text-balance md:text-3xl">
            お役立ち比較レビュー
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {articles.map((article) => (
            <a
              key={article.title}
              href="#"
              className="group flex flex-col rounded-2xl border border-border bg-card p-5 shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              <div className="mb-3 flex items-center gap-2">
                <span className={`inline-flex items-center gap-1 rounded-md px-2.5 py-1 text-xs font-bold ${article.categoryColor}`}>
                  <article.categoryIcon className="h-3.5 w-3.5" aria-hidden="true" />
                  {article.category}
                </span>
                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock className="h-3 w-3" aria-hidden="true" />
                  {article.readTime}
                </span>
              </div>
              <h3 className="mb-2 text-base font-bold text-card-foreground leading-snug group-hover:text-primary transition-colors">
                {article.title}
              </h3>
              <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                {article.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <time className="text-xs text-muted-foreground">{article.date}</time>
                <span className="inline-flex items-center gap-1 text-sm font-bold text-primary transition-transform group-hover:translate-x-1">
                  {"続きを読む"}
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
