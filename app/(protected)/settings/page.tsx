"use client"

import { useCurrentUser } from "@/hooks/use-current-user"
import { signOut } from "next-auth/react"

const SettingsPage = () => {
  const user = useCurrentUser()

  const onClick = () => {
    signOut()
  }

  return (
    <div>
      <button type="submit" onClick={onClick}>
        Logout
      </button>
    </div>
  )
}

export default SettingsPage