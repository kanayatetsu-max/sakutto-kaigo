import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { CategoryCards } from "@/components/category-cards"
import { ComparisonTable } from "@/components/comparison-table"
import { ReviewCards } from "@/components/review-cards"
import { ArticleList } from "@/components/article-list"
import { FAQSection } from "@/components/faq-section"
import { CTASection } from "@/components/cta-section"
import { SiteFooter } from "@/components/site-footer"

// SEO用のFAQデータ
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "介護保険でレンタルできるものと、自費で購入した方がいいものの違いは？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "介護保険では車いすや特殊寝台などの「福祉用具貸与」が対象ですが、ガジェット類は保険対象外のため、楽天など通販での購入がお得です。",
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
      {/* 1. ヘッダー（ロゴやメニュー） */}
      <SiteHeader />
      
      <main>
        {/* 2. ヒーロー（「親の困ったを〜」のメイン部分） */}
        <HeroSection />
        
        {/* 3. カテゴリーカード（4つの柱） */}
        <CategoryCards />
        
        {/* 4. 比較テーブル（リハビリシューズの比較） */}
        <ComparisonTable />
        
        {/* 5. レビューカード（利用者の声） */}
        <ReviewCards />
        
        {/* 6. 記事リスト */}
        <ArticleList />
        
        {/* 7. よくある質問 */}
        <FAQSection />
        
        {/* 8. 下部ボタンエリア */}
        <CTASection />
      </main>

      {/* 9. フッター */}
      <SiteFooter />
    </div>
  )
}
