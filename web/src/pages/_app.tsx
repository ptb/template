import type { AppProps } from "next/app"

export default function AppLayout({
  Component,
  pageProps
}: AppProps) {
  return <Component {...pageProps} />
}
