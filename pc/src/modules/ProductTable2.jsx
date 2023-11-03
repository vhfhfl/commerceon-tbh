import {useRef} from 'react';

function ProductTable2(props) {
  const { className = '' } = props;
  const ref_this = useRef();
  return (
    <>
      <table ref={ref_this} className={`ProductTable2 ${className} Table1`}>
        <thead>
          <tr>
            <th className={``}>상품명/옵션</th>
            <th className={`w-[160px]`}>상품금액/수량</th>
            <th className={`w-[150px]`}>주문상태</th>
            <th className={`w-[140px]`}>판매자</th>
            <th className={`w-[140px]`}>배송조회</th>
            <th className={`w-[140px]`}>리뷰</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan={6}>
              <div className={`py-[100px] text-[14px] font-[400] text-[var(--color1)]`}>주문/배송 내역이 없습니다.</div>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default ProductTable2;
