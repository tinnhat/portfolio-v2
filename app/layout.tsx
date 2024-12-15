import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ui/theme-provider'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL("https://nhattin.netlify.app/"),
  alternates: {
    canonical: "https://nhattin.netlify.app",
  },
  title: "Nguyen Nhat Tin - Frontend Developer",
  description:
    "Nguyen Nhat Tin - Frontend Developer",
  keywords:
    "Nguyen Nhat Tin, Frontend Developer, Frontend Development",
  openGraph: {
    locale: "vi_VN",
    siteName: "Nguyen Nhat Tin",
    type: "website",
    title: "Nguyen Nhat Tin",
    description:
      "Nguyen Nhat Tin - Frontend Developer",
    url: "https://nhattin.netlify.app",
    images: [
      {
        url: "./nt.jpg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nguyen Nhat Tin",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en"  suppressHydrationWarning className="scroll-smooth">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>

      </body>
    </html>
  )
}
