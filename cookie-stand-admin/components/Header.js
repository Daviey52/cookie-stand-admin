import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 bg-green-500 text-black-50 text-3xl">
      <h1>Cookie Stand Admin</h1>
      <nav>
        <Link href='/Overview'>
          <a className="bg-white text-base rounded">Overview</a>
        </Link>
      </nav>
    </header>
  )
}


