import CheckBox1 from '@/components/form/CheckBox1';
import TableItem7 from '@/modules/TableItem7';
import { Fragment, useRef } from 'react';

function ProductTable15(props) {
  const { className = '' } = props;
  const ref_this = useRef();
  return (
    <>
      <table ref={ref_this} className={`ProductTable15 ${className} Table1 text-center`}>
        <thead>
          <tr>
            <th className={`w-[62px]`}>
              <CheckBox1 />
            </th>
            <th className={``}>상품정보</th>
            <th className={`w-[142px]`}>상품금액</th>
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
                    <TableItem7 idx={idx} />
                  </td>
                  <td>
                    <div className={`Montserrat text-[16px] font-[500] leading-[26px] text-[var(--color1)]`}>
                      39,900원 <br /> / 1개
                    </div>
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

export default ProductTable15;
