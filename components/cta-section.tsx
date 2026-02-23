import { ExternalLink, ShieldCheck } from "lucide-react"

export function CTASection() {
  return (
    <section className="bg-primary py-16 lg:py-20" aria-labelledby="cta-heading">
      <div className="mx-auto max-w-3xl px-4 text-center lg:px-8">
        <ShieldCheck className="mx-auto mb-4 h-12 w-12 text-primary-foreground/80" aria-hidden="true" />
        <h2
          id="cta-heading"
          className="text-2xl font-bold text-primary-foreground text-balance md:text-3xl"
        >
          {"親の安心は、今日からはじめられる。"}
        </h2>
        <p className="mt-4 text-base leading-relaxed text-primary-foreground/80">
          楽天なら送料無料・ポイント還元でお得に購入。
          <br className="hidden sm:block" />
          まずは気になるカテゴリーの人気商品をチェックしてみましょう。
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <a
            href="#categories"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-rakuten-red px-10 py-4 text-lg font-bold text-destructive-foreground shadow-lg transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-foreground"
          >
            {"楽天で人気商品を見る"}
            <ExternalLink className="h-5 w-5" aria-hidden="true" />
          </a>
        </div>
        <p className="mt-6 text-xs text-primary-foreground/60">
          {"※ 当サイトはアフィリエイトプログラムを利用しています。リンクから購入いただいても追加費用は発生しません。"}
        </p>
      </div>
    </section>
  )
}
