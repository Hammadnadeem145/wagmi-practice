// import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { config } from "@/wagmi";
import { WagmiConfig } from "wagmi";



export default function App({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig config={config}>
      <Component {...pageProps} />
    </WagmiConfig>
  )
}
