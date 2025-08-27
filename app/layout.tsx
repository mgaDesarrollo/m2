import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const systemFont = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-system",
})

export const metadata: Metadata = {
  title: "Metro Cuadrado - Cálculo de Materiales",
  description: "Sistema profesional para cálculo de materiales de construcción",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={systemFont.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
