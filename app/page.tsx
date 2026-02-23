"use client"

import React from 'react'
import { Menu, Heart, ShoppingCart } from "lucide-react"

// --- コンポーネント定義 ---

const SiteHeader = () => (
  <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur">
    <div className="container flex h-16 items-center justify-between px-4 mx-auto">
      <div className="flex items-center gap-2 font-bold text-xl text-blue-600">
        <Heart className="h-6 w-6" />
        <span>サクっと介護</span>
      </div>
      <nav className="hidden md:flex gap-6 text-sm font-medium">
        <a href="#comparison">人気商品比較</a>
      </nav>
      <button className="md:hidden"><Menu /></button>
    </div>
  </header>
)

const HeroSection = () => (
  <section className="bg-blue-50 py-12 md:py-20 text-center px-4">
    <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
      親の「困った」を、<br />楽天の「便利」で解決する。
    </h1>
    <p className="text-gray-500 md:text-xl mb-8">
      見守りカメラから介護用品まで、楽天で本当におすすめできるものだけ。
    </p>
  </section>
)

const ComparisonTable = () => (
  <section id="comparison" className="py-12 bg-white px-4">
    <div className="container mx-auto max-w-4xl border rounded-xl overflow-hidden">
      <table className="w-full text-left border-collapse">
        <thead className="bg-gray-50">
          <tr>
            <th className="p-4 border-b">比較項目</th>
            <th className="p-4 border-b text-blue-600">TP-Link Tapo</th>
            <th className="p-4 border-b text-orange-600">Panasonic</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="p-4 border-b">価格</td><td className="p-4 border-b">約5,000円</td><td className="p-4 border-b">約15,000円</td></tr>
          <tr><td className="p-4 border-b">画質</td><td className="p-4 border-b">2K (高画質)</td><td className="p-4 border-b">フルHD</td></tr>
          <tr>
            <td className="p-4 border-b">リンク</td>
            <td className="p-4 border-b">
              <a href="★ここに楽天リンク★" target="_blank" className="bg-red-600 text-white px-4 py-2 rounded text-xs font-bold block text-center">
                最安値をチェック
              </a>
            </td>
            <td className="p-4 border-b">
              <a href="★ここに楽天リンク★" target="_blank" className="bg-red-600 text-white px-4 py-2 rounded text-xs font-bold block text-center">
                最安値をチェック
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
)

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main>
        <HeroSection />
        <ComparisonTable />
        <section className="py-12 bg-gray-50 text-center">
          <p className="text-gray-600">楽天お買い物マラソン中に買うのが一番お得です！</p>
        </section>
      </main>
      <footer className="bg-gray-900 text-white py-8 text-center">
        <p>© 2026 サクっと介護</p>
      </footer>
    </div>
  )
}
