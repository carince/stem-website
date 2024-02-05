import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { AnimatePresence } from 'framer-motion'
import { Bitter as balls } from "next/font/google"

const font = balls({subsets: ["latin"]})

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <div className={`${font.className}`}>
      <AnimatePresence mode="wait">
        <Component key={router.route} {...pageProps} />
      </AnimatePresence>
    </div>
  );
}