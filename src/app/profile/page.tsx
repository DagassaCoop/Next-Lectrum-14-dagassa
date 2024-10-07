'use client'

import { useState, useEffect } from "react"
import { supabase } from "@/utils/supabase/client"
import { User } from "@supabase/supabase-js"

export default function Profile() {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const fetchUser = async () => {
      const user = await supabase.auth.getUser()
      if (!user) return
      setUser(user.data.user)
    }

    fetchUser()
  }, [])

  return (
    <div className="container w-full min-h-full">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm flex flex-wrap">
        <h2 className="text-center text-2xl">User Info</h2>
        {user && <div className="w-full flex">
          <div>
            <p>Id: {user.id}</p>
            <p>Email: {user.email}</p>
            <p>Created at: {user.created_at}</p>
          </div>
        </div>}
      </div>
    </div>
  )
}