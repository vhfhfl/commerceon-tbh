import TableItem3 from '@/modules/TableItem3';
import { Fragment, useRef } from 'react';

function ProductTable17(props) {
  const { className = '' } = props;
  const ref_this = useRef();
  return (
    <>
      <table ref={ref_this} className={`ProductTable17 ${className} Table1 text-center`}>
        <thead>
          <tr>
            <th className={`w-[200px]`}>상품주문번호</th>
            <th className={``}>상품명</th>
            <th className={`w-[170px]`}>주문수량</th>
            <th className={`w-[170px]`}>진행상태</th>
          </tr>
        </thead>
        <tbody>
          {Array.from(Array(3)).map((obj, idx) => {
            return (
              <Fragment key={idx}>
                <tr>
                  <td>
                    <div className={`Montserrat`}>2305181545000344</div>
                  </td>
                  <td className={`!text-left`}>
                    <TableItem3 idx={idx} />
                  </td>
                  <td>1개</td>
                  <td>교환신청</td>
                </tr>
              </Fragment>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default ProductTable17;
