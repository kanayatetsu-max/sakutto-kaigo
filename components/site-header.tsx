"use client"

import { useState } from "react"
import { Menu, X, Shield, Heart, Utensils, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
  { label: "家の中の安全", icon: Shield, href: "#safety" },
  { label: "排泄・衛生の悩み", icon: Heart, href: "#hygiene" },
  { label: "食事・リハビリ", icon: Utensils, href: "#meals" },
  { label: "見守り・防犯", icon: Eye, href: "#monitoring" },
]

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur-sm" role="banner">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 lg:px-8">
        <a href="/" className="flex items-center gap-2" aria-label="サクっと介護 トップページへ">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground text-lg font-bold">
            介
          </span>
          <span className="text-lg font-bold text-foreground leading-tight">
            サクっと介護
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1" aria-label="メインナビゲーション">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary hover:text-primary"
            >
              <item.icon className="h-4 w-4" aria-hidden="true" />
              {item.label}
            </a>
          ))}
          <a
            href="#faq"
            className="ml-2 rounded-lg px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary hover:text-primary"
          >
            よくある質問
          </a>
        </nav>

        {/* Mobile Toggle */}
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-label="メニューを開閉"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav className="border-t border-border bg-card px-4 py-4 lg:hidden" aria-label="モバイルナビゲーション">
          <ul className="flex flex-col gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-3 rounded-lg px-4 py-3 text-base font-medium text-foreground transition-colors hover:bg-secondary"
                >
                  <item.icon className="h-5 w-5 text-primary" aria-hidden="true" />
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#faq"
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-3 rounded-lg px-4 py-3 text-base font-medium text-foreground transition-colors hover:bg-secondary"
              >
                よくある質問
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
