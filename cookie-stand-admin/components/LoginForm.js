import React from "react";
import { useAuth } from '../contexts/auth'


export default function LoginForm() {
  const { user, login, logout } = useAuth();

  return (
    <div>
      <main className="p-4 space-y-8 text-center">
        <h1 className="text-4xl">Fetching Data from Authenticated API</h1>

        {user ? (
          <>
            <h2>Welcome {user.username}</h2>
            <button onClick={logout} className="p-2 text-white bg-gray-500 rounded">Logout</button>

          </>
        ) : (
          <>
            <h2>Need to log in</h2>
            <button onClick={() => login(process.env.NEXT_PUBLIC_USERNAME, process.env.NEXT_PUBLIC_PASSWORD)} className="p-2 text-white bg-gray-500 rounded">Login</button>
          </>
        )}


      </main>

    </div>
  )
}


