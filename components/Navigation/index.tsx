import type { NextPage } from "next"
import Image from "next/image"
import { useRouter } from "next/router"
import { useTheme } from "next-themes"

import { useRef } from "react"
import { Disclosure } from "@headlessui/react"
import { motion, useInView, Variants } from "framer-motion"

import ExternalLinkIcon from "@heroicons/react/solid/ExternalLinkIcon"
import SunIcon from "@heroicons/react/solid/SunIcon"
import MoonIcon from "@heroicons/react/solid/MoonIcon"

import { paint } from "../../core/paint"
import { useWindowDimensions } from "../../utils"

import MobileButton from "./Mobile/Button"
import MobilePanel from "./Mobile/Panel"
import Link from "./Link"
import Dropdown from "./Dropdown"
import { signIn, useSession } from "next-auth/react"

export interface Navigation {
  name: string
  href: string
}

const navigation: Navigation[] = [
  { name: "Premium", href: "/premium" },
  { name: "Docs", href: "/docs" },
]

const variants: Variants = {
  default: ({ dark }) => ({
    padding: "0rem 0",
    backgroundColor: dark ? "#000" : "#7289DA",
    boxShadow: "rgb(51 51 51) 0 -2px 10px 0",
  }),
  full: ({ dark }) => ({
    padding: "3rem 0",
    backgroundColor: dark ? "#4752C400" : "#7289DA00",
    boxShadow: "rgb(51 51 51 / 0%) 0 -2px 10px 0",
  }),
}

export const Navigation: NextPage = () => {
  const { pathname } = useRouter()
  const { theme, setTheme } = useTheme()
  const { data: session } = useSession()

  const { width } = useWindowDimensions()

  const ref = useRef(null)
  const isInView = useInView(ref)
  const top = width > 600 && isInView && paint.includes(pathname)

  const dark = theme === "dark"

  return (
    <>
      <div ref={ref} />

      <motion.nav
        custom={{ dark }}
        initial={top ? "full" : "default"}
        animate={top ? "full" : "default"}
        transition={{ type: "tween" }}
        variants={variants}
        className="fixed w-full bg-4 dark:bg-black"
      >
        <Disclosure>
          {({ open }) => (
            <>
              <div className="max-w-[96rem] mx-auto px-2 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                  <div className="inset-y-0 left-0 flex items-center sm:hidden">
                    {/* Mobile menu button*/}
                    <MobileButton open={open} />
                  </div>

                  <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                    <div className="flex-shrink-0 flex items-center">
                      <Link href="/" disableHover>
                        <Image
                          src="/logo.svg"
                          alt="rtg logo"
                          width={32}
                          height={32}
                          className="h-8 w-auto"
                        />
                      </Link>
                    </div>

                    <div className="hidden sm:flex items-center space-x-4 sm:ml-4">
                      {navigation.map((item) => (
                        <Link key={item.name} href={item.href}>
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div className="inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    <a
                      href="https://discord.com/oauth2/authorize?client_id=693300079838101504&permissions=16862224&scope=bot%20applications.commands"
                      target="_blank"
                      rel="noreferrer"
                      className={`
                        flex items-center
                        px-3 py-1.5
                        rounded-md
                        text-sm
                        text-black
                        dark:${top ? "text-white" : "text-black"}
                        font-medium
                        bg-white
                        dark:${top ? "bg-black" : "bg-white"}
                      `}
                    >
                      Invite
                      <ExternalLinkIcon className="ml-1 h-5 w-5" />
                    </a>

                    <button
                      type="button"
                      className="ml-5 p-[.200rem] rounded-full hover:bg-primary-200 hover:dark:bg-discord-50"
                      onClick={() => setTheme(dark ? "light" : "dark")}
                    >
                      <span className="sr-only">View notifications</span>

                      {dark ? (
                        <SunIcon className="w-7 h-7" />
                      ) : (
                        <MoonIcon className="w-7 h-7 text-white" />
                      )}
                    </button>

                    {/* Profile dropdown */}
                    {session ? (
                      <Dropdown />
                    ) : (
                      <button
                        className="
                          ml-5
                          px-3 py-1.5
                          rounded-md
                          text-sm
                          text-white
                          font-semibold
                          hover:bg-primary-200
                          dark:hover:bg-discord-50
                         "
                        onClick={() => signIn("discord")}
                      >
                        Login
                      </button>
                    )}
                  </div>
                </div>
              </div>

              <MobilePanel navigation={navigation} />
            </>
          )}
        </Disclosure>
      </motion.nav>
    </>
  )
}
