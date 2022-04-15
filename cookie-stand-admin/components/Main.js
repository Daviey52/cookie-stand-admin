import React from "react";
import CreateForm from "./CreateForm";
import { useState } from 'react'
import ReportTable from "./ReportTable";
import Footer from "./Footer";


export default function Main() {

  const [report, setReport] = useState([]);
  function formHandle(event) {
    event.preventDefault();
    const addedLocation = [
      report.city = event.target.loc.value,
      report.minCookie = event.target.min.value,
      report.maxCookie = event.target.max.value,
      report.avgCookie = event.target.avg.value,
      report.randomHourlysales = Math.floor(Math.random() * report.avgCookie),
      report.total = report.randomHourlysales * 40
    ]
    setReport([...report, addedLocation])
  }
  return (
    <div className="min-h-screen my-10">
      <main className="flex flex-col items-center justify-center flex-1 w-full px-20 text-center bg-green-100">
        <CreateForm formHandle={formHandle} />
        {report.length ? <ReportTable report={report} /> : "No Cookie Stands Available"}
      </main>
      <Footer report={report.length} />
    </div>
  );
}
