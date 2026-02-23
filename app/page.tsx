"use client"

import React, { useState } from 'react'
import { Search, Menu, Camera, Shield, Utensils, Activity, ChevronDown, ChevronUp, ExternalLink, Heart, Star, ShoppingCart } from "lucide-react"

// --- 簡易版コンポーネント定義 (エラー回避のため1枚にまとめます) ---

const SiteHeader = () => (
  <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur">
    <div className="container flex h-16 items-center justify-between px-4 mx-auto">
      <div className="flex items-center gap-2 font-bold text-xl text-blue-600">
        <Heart className="h-6 w-6" />
        <span>サクっと介護</span>
      </div>
      <nav className="hidden md:flex gap-6 text-sm font-medium">
        <a href="#safety">家の中の安全</a>
        <a href="#hygiene">清拭・衛生</a>
        <a href="#rehab">食事・リハビリ</a>
        <a href="#monitoring">見守り・防犯</a>
      </nav>
      <button className="md:hidden"><Menu /></button>
    </div>
  </header>
)

const HeroSection = () => (
  <section className="bg-blue-50 py-12 md:py-20">
    <div className="container px-4 mx-auto text-center">
      <h1 className="text-3xl md:text-5xl font-bold tracking-tighter text-gray-900 mb-6">
        親の「困った」を、<br />楽天の「便利」で解決する。
      </h1>
      <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl mb-8">
        転倒防止から見守りカメラまで、楽天ランキング上位の介護用品を徹底比較。
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <a href="#comparison" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition">人気商品を比較する</a>
      </div>
    </div>
  </section>
)

const ComparisonTable = () => (
  <section id="comparison" className="py-12 bg-white">
    <div className="container px-4 mx-auto">
      <h2 className="text-2xl font-bold text-center mb-8">【2026年最新】見守りカメラ徹底比較</h2>
      <div className="overflow-x-auto border rounded-xl">
        <table className="w-full text-left border-collapse">
          <thead className="bg-gray-50">
            <tr>
              <th className="p-4 border-b">比較項目</th>
              <th className="p-4 border-b text-blue-600">TP-Link Tapo C210</th>
              <th className="p-4 border-b text-orange-600">Panasonic 見守り</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="p-4 border-b font-medium">価格</td><td className="p-4 border-b">約5,000円〜</td><td className="p-4 border-b">約15,000円〜</td></tr>
            <tr><td className="p-4 border-b font-medium">画質</td><td className="p-4 border-b">2K (高画質)</td><td className="p-4 border-b">フルHD</td></tr>
            <tr><td className="p-4 border-b font-medium">楽天評価</td><td className="p-4 border-b">★4.6</td><td className="p-4 border-b">★4.4</td></tr>
            <tr>
              <td className="p-4 border-b"></td>
              <td className="p-4 border-b">
                <a href="★ここに楽天Tapoのリンクを貼る★" target="_blank" className="inline-flex items-center justify-center bg-red-600 text-white px-4 py-2 rounded text-sm font-bold">
                  <ShoppingCart className="w-4 h-4 mr-2"/>最安値をチェック
                </a>
              </td>
