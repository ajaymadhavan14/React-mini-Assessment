import React, { useEffect, useState } from "react";
import { useTable, usePagination } from "react-table";
import { getAllData } from "../../api/Main";

function Listing() {
  const [data, setData] = useState([]);
  const [pageSize, setPageSize] = useState(10);
  const [pageIndex, setPageIndex] = useState(0);

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
  } = useTable(
    { columns, data, initialState: { pageIndex, pageSize } },
    usePagination
  );

  return (
    <div className="flex justify-center bg-[#FFF6DB] min-h-screen">
    <div className="w-full md:w-[80%] lg:w-[70%] mt-10">
      <div className="h-[94px] bg-[#E75553] rounded-t-[35px] text-white text-lg md:text-2xl lg:text-3xl font-bold flex justify-center items-center">
        <h1>Waitlist Database</h1>
      </div>
      <div className="overflow-x-auto">
        <table
          {...getTableProps()}
          className="min-w-full divide-y divide-gray-200"
        >
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th
                    {...column.getHeaderProps()}
                    className="px-4 md:px-6 py-3 text-center text-sm md:text-base lg:text-lg font-semibold border border-black text-black uppercase tracking-wider"
                  >
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody
            {...getTableBodyProps()}
            className=" divide-y divide-gray-200"
          >
            {rows
              .slice(pageIndex * pageSize, pageIndex * pageSize + pageSize)
              .map((row) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map((cell) => {
                      return (
                        <td
                          {...cell.getCellProps()}
                          className="px-4 md:px-6 py-3 md:py-4 lg:py-5 whitespace-nowrap border border-black"
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
        <div className="flex flex-col md:flex-row justify-between border border-black px-4 md:px-10 py-5">
          <div className="flex items-center mb-3 md:mb-0">
            <span className="mr-2 md:mr-4">Rows per page:</span>
            <select
              value={pageSize}
              onChange={(e) => {
                setPageSize(Number(e.target.value));
                setPageIndex(0);
              }}
              className="text-sm md:text-base lg:text-lg"
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={20}>20</option>
            </select>
          </div>
          <div className="flex space-x-2">
            <button
              className="px-2 md:px-3"
              onClick={() => {
                previousPage();
                setPageIndex(pageIndex - 1);
              }}
              disabled={!canPreviousPage}
            >
              Previous
            </button>
            <button
              className="px-2 md:px-3"
              onClick={() => {
                nextPage();
                setPageIndex(pageIndex + 1);
              }}
              disabled={!canNextPage}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  );
}

export default Listing;
