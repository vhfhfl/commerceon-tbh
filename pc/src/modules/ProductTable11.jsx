import CheckBox1 from '@/components/form/CheckBox1';
import TableItem4 from '@/modules/TableItem4';
import {Fragment} from 'react';

function ProductTable11(props) {
  return (
    <>
      <table className={`ProductTable11 Table1`}>
        <thead>
          <tr>
            <th className={`w-[70px]`}>
              <CheckBox1 />
            </th>
            <th className={``}></th>
            <th className={`w-[70px]`}></th>
            <th className={``}></th>
          </tr>
        </thead>
        <tbody>
          {Array.from(Array(3)).map((obj, idx) => {
            return (
              <Fragment key={idx}>
                <tr>
                  <td>
                    <CheckBox1 />
                  </td>
                  <td className={`!text-left`}>
                    <TableItem4 />
                  </td>
                </tr>
              </Fragment>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default ProductTable11;
