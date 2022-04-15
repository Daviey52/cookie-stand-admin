import React from "react";
export default function CreateForm(props) {
  return (
    <div className="flex items-center justify-center flex-1 w-full px-15 text-center bg-green-100">
      <form className="w-8/12 h-40 bg-green-300 " onSubmit={props.formHandle}>
        <legend>Cookie Stand Admin</legend>
        <label className="object-left pr-4">Location</label>
        <input className="w-10/12 " name="loc" type="text"></input>
        <div className="flex justify-center py-5 text-xs ">
          <div className="grid justify-items-start">
            <label className="pr-10">Min. Customer per hour</label>
            <input className="w-36" name="min" type="number"></input>
          </div>
          <div className="grid justify-items-start">
            <label className="pr-10">Max. Customer per hour</label>
            <input className="w-36" name="max" type="number"></input>
          </div>
          <div className="grid justify-items-start">
            <label className="pr-10">Average Cookie per Sale</label>
            <input className="w-36" name="avg" type="number" step="0.1"></input>
          </div>
          <button className="w-2/12 bg-green-500 h-14" type="submit">
            Create
          </button>
        </div>
      </form>
    </div>
  );
}
