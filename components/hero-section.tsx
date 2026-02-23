import Image from "next/image"
import { ArrowDown } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-secondary" aria-labelledby="hero-heading">
      <div className="mx-auto flex max-w-6xl flex-col-reverse items-center gap-8 px-4 py-12 lg:flex-row lg:gap-12 lg:px-8 lg:py-20">
        {/* Copy */}
        <div className="flex flex-1 flex-col items-center text-center lg:items-start lg:text-left">
          <p className="mb-3 text-sm font-medium tracking-wide text-primary uppercase">
            40代からの親孝行ガイド
          </p>
          <h1
            id="hero-heading"
            className="text-3xl font-bold leading-tight text-foreground text-balance md:text-4xl lg:text-5xl"
          >
            {"親の「困った」を、"}
            <br />
            <span className="text-primary">{"楽天の「便利」で解決する。"}</span>
          </h1>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-muted-foreground">
            転倒防止から見守りカメラまで、楽天ランキング上位の介護用品を
            徹底比較。あなたの親御さんに本当に合うアイテムが見つかります。
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#categories"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-4 text-base font-bold text-primary-foreground shadow-lg transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              カテゴリーから探す
              <ArrowDown className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="#comparison"
              className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-primary bg-card px-8 py-4 text-base font-bold text-primary transition-colors hover:bg-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              人気商品を比較する
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="relative flex-1">
          <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-2xl shadow-2xl lg:max-w-lg">
            <Image
              src="/images/hero-family.jpg"
              alt="笑顔で手を取り合う親子の様子"
              width={600}
              height={450}
              className="h-auto w-full object-cover"
              priority
            />
          </div>
          {/* Trust Badge */}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-xl bg-card px-5 py-2.5 shadow-lg border border-border">
            <p className="text-sm font-bold text-foreground whitespace-nowrap">
              <span className="text-warm-orange">★ 4.5</span>
              {" "}楽天レビュー平均（掲載商品）
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
