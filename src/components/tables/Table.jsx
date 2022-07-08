import { useTable } from 'react-table';

const Table = ({ columns, data }) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data
    });

  return (
    <div className="t-2 flex flex-col">
      <div className="-my-2 overflow-x-auto -mx-4 sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 dark:border-secondary/50 sm:rounded-lg">
            <table
              className="min-w-full divide-y divide-gray-200 dark:divide-secondary/50"
              {...getTableProps()}
              border="1"
            >
              <thead className="bg-light dark:bg-darkMono">
                {headerGroups.map(headerGroup => (
                  <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map(column => (
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-font-light2 dark:text-font-dark2 uppercase tracking-wider"
                        {...column.getHeaderProps()}
                      >
                        {column.render('Header')}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody
                className="bg-light dark:bg-darkMono text-font-light2 dark:text-font-dark2 divide-y divide-gray-200 dark:divide-secondary/50"
                {...getTableBodyProps}
              >
                {rows.map((row, i) => {
                  prepareRow(row);
                  return (
                    <tr {...row.getRowProps()}>
                      {row.cells.map(cell => {
                        return (
                          <td
                            className="px-6 text-xs py-4 "
                            {...cell.getCellProps()}
                          >
                            {cell.render('Cell')}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
