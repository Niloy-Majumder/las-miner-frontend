import React from "react";
// import moment from "moment";

const Prevdata = ({ prevUser }) => {
  console.log(prevUser);
  return (
    <tbody>
      {prevUser.slice().map((row, index) => (
        <tr key={index} className="query-tr">
          {row.map((cell, i) =>
            i === 3 ? (
              <td key={i}>
                {new Intl.DateTimeFormat("en-US", {
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit",
                }).format(cell)}
                {/* {moment(cell).format("YYYY-MMM-DD")} */}
              </td>
            ) : (
              <td key={i}>{cell}</td>
            )
          )}
        </tr>
      ))}
    </tbody>
  );
};

export default Prevdata;
