import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { CategoryCards } from "@/components/category-cards"
import { ComparisonTable } from "@/components/comparison-table"
import { ReviewCards } from "@/components/review-cards"
import { ArticleList } from "@/components/article-list"
import { FAQSection } from "@/components/faq-section"
import { CTASection } from "@/components/cta-section"
import { SiteFooter } from "@/components/site-footer"

// SEO用の構造化データ（FAQ）
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "リハビリシューズは楽天で買うのがお得ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい。楽天は種類が豊富で、お買い物マラソンやスーパーSALEを活用することで高いポイント還元を受けられるため、実店舗よりお得に購入できることが多いです。",
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
      
      {/* 1. 本物のヘッダー（画像上部のナビ） */}
      <SiteHeader />
      
      <main>
        {/* 2. 復活のヒーローエリア（家族の写真とメインコピー） */}
        <HeroSection />
        
        {/* 3. 4つのカテゴリーカード（家の中の安全など） */}
        <CategoryCards />
        
        {/* 4. リハビリシューズ比較表 */}
        <ComparisonTable />
        
        {/* 5. 利用者の声（レビュー） */}
        <ReviewCards />
        
        {/* 6. お役立ち記事リスト */}
        <ArticleList />
        
        {/* 7. よくある質問 */}
        <FAQSection />
        
        {/* 8. 最終案内（CTA） */}
        <CTASection />
      </main>

      {/* 9. フッター */}
      <SiteFooter />
    </div>
  )
}
