import '@/app/globals.css'
import { cn } from '@/lib/utils'
import { Header } from '@/components/header'
import React from "react";
interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex flex-col flex-1 bg-muted/50">{children}</main>
        </div>
      </body>
    </html>
  )
}
