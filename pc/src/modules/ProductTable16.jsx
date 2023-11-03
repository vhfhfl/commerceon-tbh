import { useRef } from 'react';

function ProductTable16(props) {
  const { className = '' } = props;
  const ref_this = useRef();
  return (
    <>
      <table ref={ref_this} className={`ProductTable16 NoBorder ${className} Table1 text-center`}>
        <colgroup>
          <col data-title={`상품정보`} className={`w-[180px]`} />
          <col data-title={`상품명`} className={``} />
          <col data-title={`주문수량`} className={`w-[170px]`} />
          <col data-title={`진행상태`} className={`w-[170px]`} />
        </colgroup>
        <thead>
          <tr>
            <th>상품정보</th>
            <th>상품명</th>
            <th>주문수량</th>
            <th>진행상태</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2305181545000344</td>
            <td>[쿨]테이퍼드밴딩팬츠</td>
            <td>1개</td>
            <td>주문취소</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default ProductTable16;
