"use client"

import { useCurrentUser } from "@/hooks/use-current-user"
import { useEffect, useState } from "react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export const UserNavigation = () => {
    const user = useCurrentUser();
    const router = useRouter();

    const logout = () => {
        signOut()
    }

    // Function to generate a Random Color for AvatarFallback Background
    const getRandomColor = () => {
        const letters = "0123456789ABCDEF";
        let color = "#"
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)]
        }

        return color
    }

    // State to manage the Fallback Color, retrieving from localStorage or generating a new one
    const [fallbackColor, setFallbackColor] = useState<string | null>(() => {
        const storedColor = localStorage.getItem("fallbackColor");
        return storedColor || getRandomColor();
    })

    // Effect to update localStorage with the current fallbackColor whenever it changes
    useEffect(() => {
        localStorage.setItem("fallbackColor", fallbackColor || "")
    }, [fallbackColor])

    return (
        <div className="flex items-center justify-start space-x-4">
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Avatar className="h-9 w-9">
                        {/* AvatarImage Displaying the user's Profile Image */}
                        <AvatarImage alt={`@${user?.name}'s avatar`} src={`${user?.image}`} />

                        {/* AvatarFallback as a Fallback with a Random Background Color */}
                        <AvatarFallback style={{ backgroundColor: fallbackColor || '#777' }}>
                            {user?.name ? user.name.charAt(0).toUpperCase() : ''}
                        </AvatarFallback>

                        {/* A Visually Hidden span for accessibility, indicating the purpose of the avatar. */}
                        <span className="sr-only">Toggle user menu</span>
                    </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-[#0A0A0A] w-56">
                    <DropdownMenuLabel className="px-2 py-1.5 text-sm font-semibold text-white">{user?.name}</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="text-gray-300 cursor-pointer disabled:cursor-not-allowed" onClick={() => router.push('/dashboard')}>
                        Dashboard
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-gray-300 cursor-pointer" onClick={logout}>
                        Logout
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}