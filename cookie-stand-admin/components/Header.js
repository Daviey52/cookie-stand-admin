import Link from "next/link";
import { useAuth } from '../contexts/auth'

export default function Header() {
  const { logout, user } = useAuth();
  return (
    <header className="flex items-center justify-between p-4 bg-green-500 text-black-50 text-3xl">
      <h1>Cookie Stand Admin</h1>
      <nav>
        <Link href='/Overview'>
          <a className="bg-white text-base rounded ">Overview</a>
        </Link>
      </nav>
      <button className="text-base text-white bg-green-500 rounded">{user.username}</button>
      <button onClick={logout} className="text-base text-white bg-green-500 rounded">signout</button>

    </header>
  )
}


