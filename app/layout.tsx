import type { Metadata, Viewport } from 'next'
import { Noto_Sans_JP } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  variable: '--font-noto-sans-jp',
})

export const metadata: Metadata = {
  title: 'サクっと介護：40代からの親孝行ガジェット比較',
  description:
    '40代・50代の方へ。親の暮らしを楽天の便利グッズで安全・快適にする介護用品比較サイト。転倒防止、見守りカメラ、介護食器など厳選アイテムをランキング形式でご紹介。',
  keywords: [
    '介護用品',
    '親孝行',
    'シニア',
    '楽天',
    '比較',
    '転倒防止',
    '見守りカメラ',
    '介護食器',
  ],
  openGraph: {
    title: 'サクっと介護：40代からの親孝行ガジェット比較',
    description:
      '親の「困った」を楽天の「便利」で解決する。介護用品比較サイト。',
    type: 'website',
    locale: 'ja_JP',
  },
}

export const viewport: Viewport = {
  themeColor: '#1976d2',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body className={`${notoSansJP.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
