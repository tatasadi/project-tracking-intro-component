import type { Metadata } from "next"
import { Barlow_Condensed } from "next/font/google"
import "./globals.css"

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "700"],
})

export const metadata: Metadata = {
  title: "News Homepage",
  description: "A Challenge from Frontend Mentor!",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/favicon-32x32.png"
          type="image/png"
          sizes="32x32"
        />
      </head>
      <body
        className={`${barlowCondensed.className} relative mx-auto flex min-h-screen max-w-[90rem] flex-col text-very-dark-blue`}
      >
        {children}
      </body>
    </html>
  )
}
