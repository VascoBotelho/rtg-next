import type { NextPage } from "next"
import NextLink from "next/link"
import Image from "next/image"
import { useSession, signOut } from "next-auth/react"
import { Menu, Transition } from "@headlessui/react"
import { forwardRef, Fragment, ReactNode } from "react"
import { MdAccountCircle, MdDashboard, MdLogout } from "react-icons/md"

interface Props {
  href: string
  children: ReactNode
  className?: string
}

const Link = forwardRef<any, Props>(({ href, children, ...rest }, ref) => (
  <NextLink href={href}>
    <a ref={ref} {...rest}>
      {children}
    </a>
  </NextLink>
))
Link.displayName = "Link"

const Auth: NextPage = () => {
  const { data: session } = useSession()

  return (
    <Menu as="div" className="relative">
      <Menu.Button className="flex items-center">
        <Image
          src={session?.user?.image!}
          alt={session?.user?.name!}
          width={56}
          height={56}
          className="rounded-full w-[56px] h-[56px] cursor-pointer"
        />
      </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-1 py-1 ">
            <Menu.Item>
              {({ active }) => (
                <Link
                  href="/account"
                  className={`${
                    active ? "bg-primary-50 text-white" : "text-gray-900"
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                >
                  <MdAccountCircle />
                  {session?.user?.name}
                </Link>
              )}
            </Menu.Item>

            <Menu.Item>
              {({ active }) => (
                <Link
                  href="/dashboard"
                  className={`${
                    active ? "bg-primary-50 text-white" : "text-gray-900"
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                >
                  <MdDashboard />
                  Dashboard
                </Link>
              )}
            </Menu.Item>

            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={() => signOut()}
                  className={`${
                    active ? "bg-primary-50 text-white" : "text-gray-900"
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                >
                  <MdLogout />
                  Logout
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default Auth
