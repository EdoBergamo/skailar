"use client"

import { useCurrentUser } from "@/hooks/use-current-user";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { HomeIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { Fragment, useState } from "react";

import { cn } from "@/lib/utils";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";

export const Sidebar = () => {
    const currentRoute = usePathname();
    const user = useCurrentUser()
    const [sidebarOpen, setSidebarOpen] = useState<boolean>(false)

    const navigation = [
        { name: 'Dashboard', href: '/dashboard', icon: HomeIcon },
    ]

    return (
        <>
            <Transition.Root show={sidebarOpen} as={Fragment}>
                <Dialog
                    as="div"
                    className="relative z-50 lg:hidden"
                    onClose={() => setSidebarOpen(false)}
                >
                    <Transition.Child
                        as={Fragment}
                        enter="transition-opacity ease-linear duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity ease-linear duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-900/80" />
                    </Transition.Child>

                    <div className="fixed inset-0 flex">
                        <Transition.Child
                            as={Fragment}
                            enter="transition ease-in-out duration-300 transform"
                            enterFrom="-translate-x-full"
                            enterTo="translate-x-0"
                            leave="transition ease-in-out duration-300 transform"
                            leaveFrom="translate-x-0"
                            leaveTo="-translate-x-full"
                        >
                            <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-in-out duration-300"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="ease-in-out duration-300"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                                        <button
                                            type="button"
                                            className="-m-2.5 p-2.5"
                                            onClick={() => setSidebarOpen(false)}
                                        >
                                            <span className="sr-only">Close sidebar</span>
                                            <XMarkIcon
                                                className="h-6 w-6 text-white"
                                                aria-hidden="true"
                                            />
                                        </button>
                                    </div>
                                </Transition.Child>

                                <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-2 ring-1 ring-white/10">
                                    <a href="/" className="flex h-16 shrink-0 items-center">
                                        <Image
                                            className="h-8 w-auto"
                                            src="/logo.png"
                                            alt="RedEye"
                                            width='32'
                                            height='32'
                                        />
                                    </a>
                                    <nav className="flex flex-1 flex-col">
                                        <ul role="list" className="flex flex-1 flex-col gap-y-7">
                                            <li>
                                                <ul role="list" className="-mx-2 space-y-1">
                                                    {navigation.map(item => (
                                                        <li key={item.href}>
                                                            <Link href={item.href} className={cn(
                                                                currentRoute === item.href
                                                                    ? "bg-gray-800 text-white"
                                                                    : "text-gray-400 hover:text-white hover:bg-gray-800",
                                                                "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                                                            )}>
                                                                {item.name}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>

            <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
                <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6">
                    <a href="/" className="flex h-16 shrink-0 items-center">
                        <Image
                            className="h-8 w-auto"
                            src="/logo.png"
                            alt="RedEye"
                            width='32'
                            height='32'
                        />
                        <p className="ml-2 font-bold text-gray-300">RedEye</p>
                    </a>
                    <nav className="flex flex-1 flex-col">
                        <ul role="list" className="flex flex-1 flex-col gap-y-7">
                            <li>
                                <ul role="list" className="-mx-2 space-y-1">
                                    {navigation.map(item => (
                                        <li key={item.href}>
                                            <Link href={item.href} className={cn(
                                                currentRoute === item.href
                                                    ? "bg-gray-800 text-white"
                                                    : "text-gray-400 hover:text-white hover:bg-gray-800",
                                                "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                                            )}>
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                            <li className="-mx-6 mt-auto">
                                <a
                                    href="#"
                                    className="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-white hover:bg-gray-800"
                                >
                                    <Image
                                        className="h-8 w-8 rounded-full bg-gray-800"
                                        // @ts-ignore
                                        src={user?.image}
                                        alt={`${user?.name}`}
                                        width='32'
                                        height='32'
                                    />
                                    <span className="sr-only">Your profile</span>
                                    <span aria-hidden="true">{user?.name}</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>

            <div className="sticky top-0 z-40 flex items-center gap-x-6 bg-gray-900 px-4 py-4 shadow-sm sm:px-6 lg:hidden">
                <button
                    type="button"
                    className="-m-2.5 p-2.5 text-gray-400 lg:hidden"
                    onClick={() => setSidebarOpen(true)}
                >
                    <span className="sr-only">Open sidebar</span>
                    <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </button>
                <div className="flex-1 text-sm font-semibold leading-6 text-white">
                    Dashboard
                </div>
                <a href="#">
                    <span className="sr-only">Your profile</span>
                    <Image
                        className="h-8 w-8 rounded-full bg-gray-800"
                        // @ts-ignore
                        src={user?.image}
                        alt={`${user?.name}`}
                        width='32'
                        height='32'
                    />
                </a>
            </div>
        </>
    )
}