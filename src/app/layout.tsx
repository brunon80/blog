import '../styles/index.css'

export const metadata = {
  metadataBase: new URL('https://bruno-blog.vercel.app'),
  alternates: {
    canonical: '/',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  )
}