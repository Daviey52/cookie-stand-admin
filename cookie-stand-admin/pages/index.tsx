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

      <main className="">

        <form className=" flex bg-green-400 my-6 w-1/2 p-2 mx-auto">
          <h2 className="mx-auto mb-8">Create Cookie Stand</h2>
          <input name="location" className="flex-auto pl-1 mt-8 mr-500"></input>
          <input name="location" className="flex-auto pl-1 mt-8 mr-500"></input>
          <input name="location" className="flex-auto pl-1 mt-8 mr-500"></input>
          <button className="text-black-50 bg-700 px-2"> Create</button>
        </form>


      </main>

      <footer className="p-4 bg-green-500 text-black-50 mt-10">
        <h3>@2021</h3>
      </footer>
    </div >
  )
}

export default Home
