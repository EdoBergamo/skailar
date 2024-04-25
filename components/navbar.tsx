"use client";

import { useCurrentUser } from "@/hooks/use-current-user";
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation";
import { UserNavigation } from "./user-navigation";

export const Navbar = () => {
  const currentRoute = usePathname();
  const user = useCurrentUser();

  const menu = [
    { id: 1, href: '/', text: 'Home' },
    { id: 2, href: '/products', text: 'Products' },
    { id: 3, href: '/status', text: 'Status' },
    { id: 4, href: '/reviews', text: 'Reviews' },
    { id: 5, href: '/contact', text: 'Contact' },
    { id: 6, href: `${process.env.DISCORD_INVITE_LINK}`, target: '_blank', text: 'Discord' },
  ];

  return (
    <div className="sticky z-[2] top-0 bg-black/10 p-5 border-b backdrop-blur-md border-gray-400/20">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Image
            src='/logo.png'
            width="50"
            height="50"
            alt="Skailar Logo"
          />
        </div>

        <div className="hidden md:flex space-x-10">
          {menu.map(item => (
            <Link href={item.href} target={item.target} key={item.id} className={`font-medium text-gray-300 hover:text-red-500 transition-all duration-200 ${currentRoute === item.href && 'text-red-500'}`}>
              {item.text}
            </Link>
          ))}
        </div>

        <div>
          {!user ? (
            <Link href='/login' className="bg-white text-black/90 border border-transparent font-semibold px-8 py-1 rounded-xl hover:bg-zinc-300 transition-all duration-300">
              Login
            </Link>
          ) : (
            <UserNavigation />
          )}
        </div>
      </div>
    </div>
  )
}