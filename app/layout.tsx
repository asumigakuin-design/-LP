import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

// <CHANGE> Updated metadata for Asumi Gakuin landing page
export const metadata: Metadata = {
  title: "あすみ学院",
  description: "千葉市緑区・土気・あすみが丘の個別指導塾『あすみ学院』。小学生・中学生・高校生対応。自立学習×個別フォローで成績アップ。無料体験受付中。",
  generator: "v0.app",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
