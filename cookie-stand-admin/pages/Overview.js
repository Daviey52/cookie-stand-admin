import Link from "next/link";

export default function Overview() {
  return (
    <div>
      <Link href="/">
        <a className=" item-center p-4 m-4 text-2xl bg-gray-300 rounded-lg my-4">Back to Home</a>
      </Link>
    </div>

  )
}
