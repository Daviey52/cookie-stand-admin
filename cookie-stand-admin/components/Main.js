export default function Main(props) {
  return (
    <main className="flex flex-col items-center justify-center flex-1 w-full px-20 text-center bg-green-100 mt-8">
      <form onSubmit={props.addDataHander} className="bg-green-300 w-9/12 h-52 justify-center">
        <legend className="object-top py-4">Cookie Stand Admin</legend>
        <label className="object-left pr-4">Location</label>
        <input name="location" className="w-11/12 "></input>
        <div className="px-4.5">
          <label>Minimun Customer per Hour</label>
          <label>Maximum Customer per Hour</label>
          <label>Average Cookie per Sale</label>
        </div>
        <input name="min" className=""></input>
        <input name="max"></input>
        <input name="avg" className=""></input>
        <button className="bg-green-500 ml-100">Create</button>
      </form>
      <p className="my-4">Report table Coming soon.....</p>
      <p>{`{"Location":"${props.location}","minCustomers":"${props.minimum}","maxCustomers":"${props.maximum}","avgCookies":"${props.average}" }`}</p>
    </main>

  )
}
