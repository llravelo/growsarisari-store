import PropTypes from 'prop-types';

export type editCell = {
  payload: any;
  text: string | number;
};

export type tableData = Array<Array<string | number | editCell>>;

export const editHeader = 'EDIT';

interface TableProps {
  headers: string[];
  data: tableData;
  hasEdit?: boolean;
  editFn?: (...args: any[]) => void;
}

function Table({ headers, data, hasEdit, editFn = () => {} }: TableProps) {
  const editIndex = headers.findIndex((header) => header === editHeader);

  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  {headers.map((header, i) => {
                    if (i === editIndex && !hasEdit) return null;

                    return (
                      <th
                        key={header}
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        {header}
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {data.map((columns) => (
                  <tr>
                    {columns.map((cell, i) => {
                      if (i === editIndex && !hasEdit) return null;

                      return (
                        <td className="px-6 py-4 whitespace-nowrap">
                          {i !== editIndex && (
                            <div
                              title={cell.toString()}
                              className="text-sm font-medium text-gray-900 max-w-sm overflow-hidden text-ellipsis"
                            >
                              {cell}
                            </div>
                          )}
                          {i === editIndex && (
                            <button
                              type="button"
                              onClick={() => editFn((cell as editCell)?.payload)}
                              className="text-indigo-600 hover:text-indigo-900 select-none"
                            >
                              {(cell as editCell)?.text}
                            </button>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

Table.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.string).isRequired,
  data: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.any)).isRequired,
  hasEdit: PropTypes.bool,
  editFn: PropTypes.func
};

Table.defaultProps = {
  hasEdit: false,
  editFn: () => {}
};

export default Table;
