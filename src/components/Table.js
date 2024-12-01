import React from "react";

const Table = ({ data }) => {
  if (data.length === 0) {
    return (
      <div className="h-screen mt-10 text-white text-2xl">
        No data available
      </div>
    ); 
  }
  return (
    <div className="h-screen mt-10">
      <table className="text-white border-2 border-gray-500 w-3/4 m-auto">
        <tbody>
          <tr>
            <th className="border border-gray-500 text-2xl p-2">Review</th>
            <th className="border border-gray-500 text-2xl p-2">Email</th>
          </tr>
          {data.map((e) => (
            <tr key={e.id}>
              <td className="border border-gray-500 text-xl p-2 w-3/4">
                {e.review}
              </td>
              <td className="border border-gray-500 text-xl p-2">{e.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Table;
