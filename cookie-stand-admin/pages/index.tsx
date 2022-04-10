import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Cookie stand Admin App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="p-4 bg-green-500 text-black-50 text-3xl">
        <h1>Cookie Stand Admin</h1>

      </header>
      <main className="flex flex-col items-center justify-center flex-1 w-full px-20 text-center bg-green-100 mt-8">
        <form className="bg-green-300 w-9/12 h-52 justify-center">
          <legend className="object-top py-4">Cookie Stand Admin</legend>
          <label className="object-left pr-4">Location</label>
          <input className="w-11/12 "></input>
          <div className="px-4.5">
            <label>Minimun Customer per Hour</label>
            <label>Maximum Customer per Hour</label>
            <label>Average Cookie per Sale</label>
          </div>
          <input className="mr-50"></input>
          <input></input>
          <input className="ml-50"></input>
          <button className="bg-green-500 ml-100">Create</button>
        </form>
      </main>



      <footer className="p-4 bg-green-500 text-black-50 mt-10">
        <h3>@2021</h3>
      </footer>
    </div >
  )
}

export default Home
