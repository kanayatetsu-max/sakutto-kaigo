import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "介護保険でレンタルできるものと、自費で購入した方がいいものの違いは？",
    answer:
      "介護保険では車いすや特殊寝台などの「福祉用具貸与」が対象ですが、手すりの取付けや段差解消は「住宅改修」として最大20万円まで支給されます。一方、センサーライトや見守りカメラなどのガジェット類は保険対象外のため、楽天など通販での購入がお得です。当サイトでは自費購入向きのアイテムを中心にご紹介しています。",
  },
  {
    question: "親が機械に弱いのですが、見守りカメラは使えますか？",
    answer:
      "最近の見守りカメラは、親御さん側は何もしなくてOK。電源を挿してWi-Fiに繋ぐだけで、お子さんのスマホから映像を確認できます。パナソニックのKX-HRC100やTP-Link Tapo C210は特に設定が簡単と評判です。",
  },
  {
    question: "楽天で購入するメリットは？",
    answer:
      "楽天はポイント還元率が高く、お買い物マラソンやスーパーSALEの時期に購入すれば実質10〜20%以上のポイントバックが可能です。また、レビュー件数が多いため購入前の情報収集がしやすいのも大きなメリットです。当サイトのリンクから購入いただくと、追加費用なしで運営をサポートいただけます。",
  },
  {
    question: "転倒防止マットは本当に効果がありますか？",
    answer:
      "厚生労働省のデータによると、高齢者の室内事故の約半数が「転倒」です。吸着タイプの転倒防止マットは、工事不要で即日導入でき、特にフローリングの廊下やお風呂の出入り口に効果的。楽天のレビューでも「置いた翌日から安心感が違う」という声が多数あります。",
  },
  {
    question: "消臭ガジェットでおすすめのタイプは？",
    answer:
      "ポータブルトイレ周辺には「オゾン脱臭機」が効果的です。楽天ではマクセルの「オゾネオ」シリーズが人気で、コンパクトで電源不要のタイプもあります。介護臭に特化した製品を選ぶのがポイントです。",
  },
  {
    question: "このサイトの情報は信頼できますか？",
    answer:
      "当サイトでは、楽天の実際の販売ランキングとレビューデータをもとに情報を提供しています。AIによるレビュー分析も活用し、できるだけ客観的で偏りのない比較を心がけています。ただし、個人の体調や住環境によって最適な商品は異なりますので、必要に応じて専門家にもご相談ください。",
  },
]

export function FAQSection() {
  return (
    <section id="faq" className="bg-muted py-16 lg:py-24" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-3xl px-4 lg:px-8">
        <div className="mb-10 text-center">
          <p className="mb-2 text-sm font-medium tracking-wide text-primary uppercase">
            よくある質問
          </p>
          <h2 id="faq-heading" className="text-2xl font-bold text-foreground text-balance md:text-3xl">
            介護用品えらびのギモンを解決
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, idx) => (
            <AccordionItem
              key={idx}
              value={`faq-${idx}`}
              className="rounded-xl border border-border bg-card px-5 shadow-sm data-[state=open]:shadow-md"
            >
              <AccordionTrigger className="py-5 text-left text-base font-bold text-card-foreground leading-relaxed hover:no-underline [&[data-state=open]>svg]:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-base leading-relaxed text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
