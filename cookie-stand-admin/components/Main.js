import React from "react";
import CreateForm from "./CreateForm";
import { useState } from 'react'
import ReportTable from "./ReportTable";
import Footer from "./Footer";
import useResource from '../hooks/useResource'


export default function Main() {
  const { resources, loading, createResource, deleteResource } = useResource();
  const stands = resources



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
        <StandCreateForm onCreate={createResource} />
        <StandList stands={resources} loading={loading} onDelete={deleteResource} />
        {report.length ? <ReportTable report={report} stands={stands} loading={loading} StandList={StandList} onDelete={deleteResource} /> : "No Cookie Stands add"}
      </main>
      <Footer report={report.length} />
    </div>
  );
}
function StandList({ stands, loading, onDelete }) {

  if (loading) return (<p>Loading...</p>)

  return (
    <ul>
      {stands.map(stand => (
        <li key={stand.id}>
          <span>{stand.name}</span>
          <span onClick={() => onDelete(stand.id)}>[X] </span>
        </li>
      ))}
    </ul>
  )
}

function StandCreateForm({ onCreate }) {
  function formHandle(event) {
    event.preventDefault();
    const standInfo = {
      name: event.target.loc.value,
      minimum_customers_per_hour: parseInt(event.target.min.value),
      maximum_customers_per_hour: parseInt(event.target.max.value),
      average_cookies_per_sale: parseFloat(event.target.avg.value),
    }
    onCreate(standInfo);
    event.target.reset();
  }
  return (
    <>

    </>
  )

}
