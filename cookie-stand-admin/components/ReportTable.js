import React from "react";


export default function ReportTable(props) {

  console.log(props.stands, 'new')
  return (

    <div>

      <table className="w-1/2 mx-auto my-4">
        <thead>
          <tr>
            <th className="border border-gray-700">Location</th>
            <th className="border border-gray-700">6am</th>
            <th className="border border-gray-700">7am</th>
            <th className="border border-gray-700">8am</th>
            <th className="border border-gray-700">9am</th>
            <th className="border border-gray-700">10am</th>
            <th className="border border-gray-700">11am</th>
            <th className="border border-gray-700">12pm</th>
            <th className="border border-gray-700">1pm</th>
            <th className="border border-gray-700">2pm</th>
            <th className="border border-gray-700">3pm</th>
            <th className="border border-gray-700">4pm</th>
            <th className="border border-gray-700">5pm</th>
            <th className="border border-gray-700">6pm</th>
            <th className="border border-gray-700">7pm</th>
            <th className="border border-gray-700">Total</th>
          </tr>
        </thead>
        <tbody>
          {props.report.map(item => {
            console.log(item)
            return (<tr className="odd:bg-green-300">
              <td className="pl-2 border border-gray-700"> {item[0]}</td>
              <td className="pl-2 border border-gray-700">{item[4] * 2}</td>
              <td className="pl-2 border border-gray-700">{item[4] * 3}</td>
              <td className="pl-2 border border-gray-700">{item[4] * 1}</td>
              <td className="pl-2 border border-gray-700">{item[4] * 1}</td>
              <td className="pl-2 border border-gray-700">{item[4] * 6}</td>
              <td className="pl-2 border border-gray-700">{item[4] * 1}</td>
              <td className="pl-2 border border-gray-700">{item[4] * 5}</td>
              <td className="pl-2 border border-gray-700">{item[4] * 3}</td>
              <td className="pl-2 border border-gray-700">{item[4] * 10}</td>
              <td className="pl-2 border border-gray-700">{item[4] * 2}</td>
              <td className="pl-2 border border-gray-700">{item[4] * 1}</td>
              <td className="pl-2 border border-gray-700">{item[4] * 1}</td>
              <td className="pl-2 border border-gray-700">{item[4] * 6}</td>
              <td className="pl-2 border border-gray-700">{item[4] * 7}</td>
              <td className="pl-2 border border-gray-700">{item[5] * 1}</td>
            </tr>

            );

          })}

          {props.stands.map(item => {
            console.log(item)
            return (<tr className="odd:bg-green-300" onClick={() => props.StandList(onDelete(item.id))}>
              <td className="pl-2 border border-gray-700"> {item.name}</td>
              <td className="pl-2 border border-gray-700">{item.average_cookies_per_sale * 2}</td>
              <td className="pl-2 border border-gray-700">{item.average_cookies_per_sale * 3}</td>
              <td className="pl-2 border border-gray-700">{item.average_cookies_per_sale * 5}</td>
              <td className="pl-2 border border-gray-700">{item.average_cookies_per_sale * 8}</td>
              <td className="pl-2 border border-gray-700">{item.average_cookies_per_sale * 8}</td>
              <td className="pl-2 border border-gray-700">{item.average_cookies_per_sale * 1}</td>
              <td className="pl-2 border border-gray-700">{item.average_cookies_per_sale * 6}</td>
              <td className="pl-2 border border-gray-700">{item.average_cookies_per_sale * 4}</td>
              <td className="pl-2 border border-gray-700">{item.average_cookies_per_sale * 3}</td>
              <td className="pl-2 border border-gray-700">{item.average_cookies_per_sale * 9}</td>
              <td className="pl-2 border border-gray-700">{item.average_cookies_per_sale * 5}</td>
              <td className="pl-2 border border-gray-700">{item.average_cookies_per_sale * 2}</td>
              <td className="pl-2 border border-gray-700">{item.average_cookies_per_sale * 7}</td>
              <td className="pl-2 border border-gray-700">{item.average_cookies_per_sale * 9}</td>
              <td className="pl-2 border border-gray-700">{item.average_cookies_per_sale * 1}</td>

            </tr>
            );
          })}
        </tbody>

      </table>
    </div>
  )
}


