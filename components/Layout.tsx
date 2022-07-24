import type { NextPage } from "next"
import { useTheme } from "next-themes"
import { useRouter } from "next/router"
import { ReactNode } from "react"
import { motion } from "framer-motion"

import { paint } from "../core/paint"

import { Navigation } from "./Navigation"

const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
  exit: { opacity: 0 },
}

interface Props {
  children?: ReactNode
}

export const Layout: NextPage<Props> = ({ children }) => {
  const { pathname } = useRouter()
  const { theme } = useTheme()
  const path = paint.includes(pathname)

  const dark = theme === "dark"
  const painted = dark ? "#4752C4" : "#7289DA"
  const defaultPaint = dark ? "#4752C4" : "#FFF"

  return (
    <motion.div
      initial={{ backgroundColor: path ? painted : defaultPaint }}
      animate={{ backgroundColor: path ? painted : defaultPaint }}
    >
      <Navigation />

      <motion.main
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ type: "tween" }}
        className="px-36 pt-36 min-h-screen"
      >
        {children}
      </motion.main>
    </motion.div>
  )
}
