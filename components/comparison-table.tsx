"use client"

import { ShoppingCart, Star, Check, X } from "lucide-react"

const products = [
  {
    name: "あゆみ 徳武産業",
    price: "約3,000円〜",
    weight: "★★★★★ (超軽量)",
    ease: "★★★★★ (全開する)",
    grip: "★★★★☆",
    link: "https://hb.afl.rakuten.co.jp/ichiba/51442d19.174ebf28.51442d1a.c45ad92f/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fcarecle%2F100554%2F&link_type=hybrid_url&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJoeWJyaWRfdXJsIiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MSwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    tag: "一番人気"
  },
  {
    name: "アサヒ 快歩主義",
    price: "約5,000円〜",
    weight: "★★★★☆ (水に浮く)",
    ease: "★★★★☆ (面ファスナー)",
    grip: "★★★★☆",
    link: "★ここに楽天アフィリエイトURL★",
    tag: "おしゃれ"
  },
  {
    name: "ムーンスター らくらく",
    price: "約6,000円〜",
    weight: "★★★★☆",
    ease: "★★★★☆",
    grip: "★★★★★ (最高性能)",
    link: "★ここに楽天アフィリエイトURL★",
    tag: "滑り止め重視"
  }
]

export const ComparisonTable = () => {
  return (
    <section id="comparison" className="py-16 bg-white px-4">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-gray-900">
          【2026年最新】楽天で買える人気シューズ比較
        </h2>
        <div className="overflow-x-auto shadow-2xl rounded-2xl border border-gray-100">
          <table className="w-full text-left bg-white min-w-[600px]">
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="p-5">比較項目</th>
                {products.map((p, i) => (
                  <th key={i} className="p-5 text-center border-l border-blue-500">
                    <span className="text-xs bg-yellow-400 text-black px-2 py-1 rounded-full mb-2 inline-block font-bold">{p.tag}</span><br/>
                    {p.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-4 border-b font-bold bg-gray-50">軽量さ</td>
                {products.map((p, i) => <td key={i} className="p-4 border-b border-l text-center text-sm">{p.weight}</td>)}
              </tr>
              <tr>
                <td className="p-4 border-b font-bold bg-gray-50">履かせやすさ</td>
                {products.map((p, i) => <td key={i} className="p-4 border-b border-l text-center text-sm">{p.ease}</td>)}
              </tr>
              <tr>
                <td className="p-4 border-b font-bold bg-gray-50">滑り止め</td>
                {products.map((p, i) => <td key={i} className="p-4 border-b border-l text-center text-sm">{p.grip}</td>)}
              </tr>
              <tr>
                <td className="p-4 bg-gray-50 font-bold text-blue-600">最安値リンク</td>
                {products.map((p, i) => (
                  <td key={i} className="p-4 border-l text-center">
                    <a href={p.link} target="_blank" className="inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-lg transition-all text-xs">
                      <ShoppingCart className="w-4 h-4 mr-1" />
                      楽天で見る
                    </a>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
