import "../styles/globals.css"
import type { AppProps } from "next/app"
import { ThemeProvider } from "next-themes"
import { DefaultSeo } from "next-seo"

import { SessionProvider } from "next-auth/react"
import { AnimatePresence } from "framer-motion"
import { Toaster } from "react-hot-toast"

import { Layout } from "../components"

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
  router,
}: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <DefaultSeo
        title="Random Team Generator"
        description="A bot for communities or groups of friends that like to organize games to play and choose randomly the teams."
        additionalMetaTags={[{ name: "theme-color", content: "#7289DA" }]}
      />

      <SessionProvider session={session}>
        <Toaster
          position="bottom-center"
          toastOptions={{ className: "dark:bg-black dark:text-white" }}
        />

        <AnimatePresence
          exitBeforeEnter
          initial={false}
          onExitComplete={() => window.scrollTo(0, 0)}
        >
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </AnimatePresence>
      </SessionProvider>
    </ThemeProvider>
  )
}
