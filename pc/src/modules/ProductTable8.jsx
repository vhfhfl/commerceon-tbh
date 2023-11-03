import TableItem6 from '@/modules/TableItem6';
import {Fragment} from 'react';

function ProductTable8(props) {
  return (
    <>
      <table className={`ProductTable8 Table1`}>
        <thead>
          <tr>
            <th>상품정보</th>
            <th className={`w-[160px]`}>수량</th>
            <th className={`w-[260px]`}>합계금액</th>
          </tr>
        </thead>
        <tbody>
          {Array.from(Array(2)).map((obj, idx) => {
            return (
              <Fragment key={idx}>
                <tr>
                  <td className={`!text-left`}>
                    <TableItem6 />
                  </td>
                  <td>
                    <div className={`Montserrat text-[16px] font-[500] text-[var(--color1)]`}>1개</div>
                  </td>
                  <td>
                    <div className={`Montserrat text-[18px] font-[700] text-[var(--color1)]`}>39,900원</div>
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

export default ProductTable8;
