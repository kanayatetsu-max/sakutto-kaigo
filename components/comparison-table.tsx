"use client"

import { useState } from "react"
import { Star, ExternalLink, Check, X as XIcon, Trophy } from "lucide-react"
import { Button } from "@/components/ui/button"

type Product = {
  rank: number
  name: string
  brand: string
  price: string
  rating: number
  reviews: number
  features: Record<string, boolean | string>
  pros: string[]
  cons: string[]
}

const comparisons: {
  category: string
  id: string
  specs: string[]
  products: [Product, Product]
}[] = [
  {
    category: "見守りカメラ",
    id: "monitoring",
    specs: ["暗視機能", "双方向通話", "スマホ対応", "動体検知", "価格帯"],
    products: [
      {
        rank: 1,
        name: "パナソニック 屋内HDカメラ KX-HRC100",
        brand: "Panasonic",
        price: "¥12,800",
        rating: 4.6,
        reviews: 1842,
        features: {
          暗視機能: true,
          双方向通話: true,
          スマホ対応: true,
          動体検知: true,
          価格帯: "中価格帯",
        },
        pros: ["画質が良い", "設定が簡単", "動体検知の精度が高い"],
        cons: ["SDカード別売り", "月額プランあり"],
      },
      {
        rank: 2,
        name: "TP-Link Tapo C210",
        brand: "TP-Link",
        price: "¥4,190",
        rating: 4.3,
        reviews: 3256,
        features: {
          暗視機能: true,
          双方向通話: true,
          スマホ対応: true,
          動体検知: true,
          価格帯: "低価格帯",
        },
        pros: ["コスパ最強", "設定がアプリで完結", "首振り対応"],
        cons: ["音質がやや低い", "クラウド保存は有料"],
      },
    ],
  },
  {
    category: "転倒防止マット",
    id: "safety",
    specs: ["滑り止め加工", "洗濯可能", "防水", "クッション性", "価格帯"],
    products: [
      {
        rank: 1,
        name: "サンコー おくだけ吸着マット",
        brand: "サンコー",
        price: "¥3,480",
        rating: 4.5,
        reviews: 2103,
        features: {
          滑り止め加工: true,
          洗濯可能: true,
          防水: false,
          クッション性: true,
          価格帯: "低価格帯",
        },
        pros: ["置くだけで吸着", "洗える", "カットして使える"],
        cons: ["厚みが薄い", "色の選択肢が少ない"],
      },
      {
        rank: 2,
        name: "アイリスオーヤマ 吸着タイルマット",
        brand: "アイリスオーヤマ",
        price: "¥2,980",
        rating: 4.2,
        reviews: 1576,
        features: {
          滑り止め加工: true,
          洗濯可能: true,
          防水: true,
          クッション性: false,
          価格帯: "低価格帯",
        },
        pros: ["防水仕様", "組み合わせ自由", "安い"],
        cons: ["吸着力がやや弱い", "継ぎ目が目立つ"],
      },
    ],
  },
]

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1" aria-label={`評価 ${rating} / 5`}>
      {[1, 2, 3, 4, 5].map((s) => (
        <Star
          key={s}
          className={`h-4 w-4 ${s <= Math.round(rating) ? "fill-warm-orange text-warm-orange" : "text-border"}`}
          aria-hidden="true"
        />
      ))}
      <span className="ml-1 text-sm font-bold text-foreground">{rating}</span>
    </div>
  )
}

export function ComparisonTable() {
  const [activeTab, setActiveTab] = useState(0)
  const data = comparisons[activeTab]

  return (
    <section id="comparison" className="bg-muted py-16 lg:py-24" aria-labelledby="comparison-heading">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <div className="mb-10 text-center">
          <p className="mb-2 text-sm font-medium tracking-wide text-primary uppercase">
            徹底比較
          </p>
          <h2 id="comparison-heading" className="text-2xl font-bold text-foreground text-balance md:text-3xl">
            {"楽天ランキング 1位 vs 2位"}
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            人気商品を項目ごとにわかりやすく比較します
          </p>
        </div>

        {/* Tabs */}
        <div className="mb-8 flex flex-wrap justify-center gap-2" role="tablist" aria-label="比較カテゴリー">
          {comparisons.map((comp, idx) => (
            <button
              key={comp.category}
              role="tab"
              aria-selected={activeTab === idx}
              onClick={() => setActiveTab(idx)}
              className={`rounded-full px-5 py-2.5 text-sm font-bold transition-colors ${
                activeTab === idx
                  ? "bg-primary text-primary-foreground shadow"
                  : "bg-card text-foreground border border-border hover:bg-secondary"
              }`}
            >
              {comp.category}
            </button>
          ))}
        </div>

        {/* Comparison Cards - Mobile: stacked, Desktop: side by side */}
        <div className="grid gap-6 md:grid-cols-2" role="tabpanel">
          {data.products.map((product) => (
            <div
              key={product.name}
              className={`relative rounded-2xl border-2 bg-card p-6 shadow-sm ${
                product.rank === 1 ? "border-primary" : "border-border"
              }`}
            >
              {product.rank === 1 && (
                <div className="absolute -top-3 left-6 flex items-center gap-1 rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">
                  <Trophy className="h-3.5 w-3.5" aria-hidden="true" />
                  {"楽天1位"}
                </div>
              )}
              {product.rank === 2 && (
                <div className="absolute -top-3 left-6 rounded-full bg-muted-foreground px-3 py-1 text-xs font-bold text-primary-foreground">
                  {"楽天2位"}
                </div>
              )}

              <div className="mb-4 mt-2">
                <p className="text-xs font-medium text-muted-foreground">{product.brand}</p>
                <h3 className="mt-1 text-base font-bold text-card-foreground leading-snug">
                  {product.name}
                </h3>
                <div className="mt-2 flex items-center gap-3">
                  <Stars rating={product.rating} />
                  <span className="text-xs text-muted-foreground">
                    ({product.reviews.toLocaleString()}件)
                  </span>
                </div>
                <p className="mt-2 text-2xl font-bold text-primary">{product.price}</p>
              </div>

              {/* Features */}
              <div className="mb-4 space-y-2">
                <h4 className="text-sm font-bold text-card-foreground">スペック比較</h4>
                {data.specs.map((spec) => {
                  const val = product.features[spec]
                  return (
                    <div key={spec} className="flex items-center justify-between rounded-lg bg-muted px-3 py-2 text-sm">
                      <span className="text-muted-foreground">{spec}</span>
                      {typeof val === "boolean" ? (
                        val ? (
                          <Check className="h-5 w-5 text-green-600" aria-label="対応" />
                        ) : (
                          <XIcon className="h-5 w-5 text-red-400" aria-label="非対応" />
                        )
                      ) : (
                        <span className="font-medium text-card-foreground">{val}</span>
                      )}
                    </div>
                  )
                })}
              </div>

              {/* Pros / Cons */}
              <div className="mb-5 grid grid-cols-2 gap-3">
                <div>
                  <h4 className="mb-1.5 text-xs font-bold text-green-700">良い点</h4>
                  <ul className="space-y-1">
                    {product.pros.map((p) => (
                      <li key={p} className="flex items-start gap-1.5 text-xs text-card-foreground leading-relaxed">
                        <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-green-600" aria-hidden="true" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="mb-1.5 text-xs font-bold text-red-600">気になる点</h4>
                  <ul className="space-y-1">
                    {product.cons.map((c) => (
                      <li key={c} className="flex items-start gap-1.5 text-xs text-card-foreground leading-relaxed">
                        <XIcon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-red-400" aria-hidden="true" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <Button
                asChild
                className="w-full rounded-xl bg-rakuten-red py-3 text-base font-bold text-destructive-foreground hover:bg-rakuten-red/90 transition-colors"
              >
                <a href="#" target="_blank" rel="noopener noreferrer">
                  {"楽天で最安値をチェック"}
                  <ExternalLink className="ml-2 h-4 w-4" aria-hidden="true" />
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
