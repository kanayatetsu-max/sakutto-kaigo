import { Shield, Heart, Utensils, Eye } from "lucide-react"

const footerCategories = [
  { label: "家の中の安全", href: "#safety", icon: Shield },
  { label: "排泄・衛生の悩み", href: "#hygiene", icon: Heart },
  { label: "食事・リハビリ", href: "#meals", icon: Utensils },
  { label: "見守り・防犯", href: "#monitoring", icon: Eye },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card" role="contentinfo">
      <div className="mx-auto max-w-6xl px-4 py-12 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground text-sm font-bold">
                介
              </span>
              <span className="text-base font-bold text-foreground">サクっと介護</span>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              40代からの親孝行ガジェット比較。
              <br />
              楽天ランキングの人気商品を中心に、
              <br />
              わかりやすい比較情報をお届けします。
            </p>
          </div>

          {/* Categories */}
          <div>
            <h3 className="mb-3 text-sm font-bold text-foreground">カテゴリー</h3>
            <ul className="space-y-2">
              {footerCategories.map((cat) => (
                <li key={cat.href}>
                  <a
                    href={cat.href}
                    className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    <cat.icon className="h-4 w-4" aria-hidden="true" />
                    {cat.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h3 className="mb-3 text-sm font-bold text-foreground">サイト情報</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="transition-colors hover:text-primary">
                  運営者情報
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-primary">
                  プライバシーポリシー
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-primary">
                  お問い合わせ
                </a>
              </li>
              <li>
                <a href="#faq" className="transition-colors hover:text-primary">
                  よくある質問
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          <p>
            {"※ 当サイトは楽天アフィリエイトプログラムを利用しています。"}
          </p>
          <p className="mt-1">
            {"© 2026 サクっと介護 All rights reserved."}
          </p>
        </div>
      </div>
    </footer>
  )
}
