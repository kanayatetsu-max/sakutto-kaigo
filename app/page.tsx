import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { CategoryCards } from "@/components/category-cards"
import { ComparisonTable } from "@/components/comparison-table"
import { ReviewCards } from "@/components/review-cards"
import { ArticleList } from "@/components/article-list"
import { FAQSection } from "@/components/faq-section"
import { CTASection } from "@/components/cta-section"
import { SiteFooter } from "@/components/site-footer"

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "介護保険でレンタルできるものと、自費で購入した方がいいものの違いは？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "介護保険では車いすや特殊寝台などの「福祉用具貸与」が対象ですが、手すりの取付けや段差解消は「住宅改修」として最大20万円まで支給されます。一方、センサーライトや見守りカメラなどのガジェット類は保険対象外のため、楽天など通販での購入がお得です。",
      },
    },
    {
      "@type": "Question",
      name: "親が機械に弱いのですが、見守りカメラは使えますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "最近の見守りカメラは、親御さん側は何もしなくてOK。電源を挿してWi-Fiに繋ぐだけで、お子さんのスマホから映像を確認できます。",
      },
    },
    {
      "@type": "Question",
      name: "楽天で購入するメリットは？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "楽天はポイント還元率が高く、お買い物マラソンやスーパーSALEの時期に購入すれば実質10〜20%以上のポイントバックが可能です。",
      },
    },
    {
      "@type": "Question",
      name: "転倒防止マットは本当に効果がありますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "厚生労働省のデータによると、高齢者の室内事故の約半数が「転倒」です。吸着タイプの転倒防止マットは、工事不要で即日導入でき、特にフローリングの廊下やお風呂の出入り口に効果的です。",
      },
    },
  ],
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <SiteHeader />
      <main>
        <HeroSection />
        <CategoryCards />
        <ComparisonTable />
        <ReviewCards />
        <ArticleList />
        <FAQSection />
        <CTASection />
      </main>
      <SiteFooter />
    </div>
  )
}
