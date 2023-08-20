import React, { useEffect, useState } from "react";
import { useTable, usePagination } from "react-table";
import { getAllData } from "../../api/Main";

function Listing() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getAllData();
        setData(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  const columns = React.useMemo(
    () => [
      { Header: "Count", accessor: (_, index) => index + 1 },
      { Header: "Full Name", accessor: "fullName" },
      { Header: "Email", accessor: "email" },
      { Header: "Contact No.", accessor: "phoneNumber" },
      { Header: "Message", accessor: "message" },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    canPreviousPage,
    canNextPage,
    nextPage,
    previousPage,
  } = useTable({ columns, data }, usePagination);

  return (
    <div className="flex justify-center bg-[#FFF6DB] h-screen">
      <div className="w-[1197px]">
        <div className="h-[94px] bg-[#E75553] flex justify-center items-center text-2xl">
          <h1>Waitlist Database</h1>
        </div>
        <div className="overflow-x-auto">
          <table
            {...getTableProps()}
            className="min-w-full divide-y divide-gray-200"
          >
            <thead className="bg-gray-50">
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th
                      {...column.getHeaderProps()}
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      {column.render("Header")}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody
              {...getTableBodyProps()}
              className="bg-white divide-y divide-gray-200"
            >
              {rows.map((row) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map((cell) => {
                      return (
                        <td
                          {...cell.getCellProps()}
                          className="px-6 py-4 whitespace-nowrap"
                        >
                          {cell.render("Cell")}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="flex justify-between my-4">
            <button onClick={previousPage} disabled={!canPreviousPage}>
              Previous
            </button>
            <button onClick={nextPage} disabled={!canNextPage}>
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Listing;
