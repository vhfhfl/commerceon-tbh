import CheckBox1 from '@/components/form/CheckBox1';
import {useRef} from 'react';

function ProductTable3(props) {
  const { className = '' } = props;
  const ref_this = useRef();
  return (
    <>
      <table ref={ref_this} className={`ProductTable3 ${className} Table1`}>
        <colgroup>
          <col data-title={`체크박스`} className={`w-[70px]`} />
          <col data-title={`상품정보`} className={``} />
          <col data-title={`수량`} className={`w-[160px]`} />
          <col data-title={`상품금액`} className={`w-[160px]`} />
          <col data-title={`할인 적립`} className={`w-[180px]`} />
          <col data-title={`합계금액`} className={`w-[160px]`} />
          <col data-title={`배송비`} className={`w-[160px]`} />
        </colgroup>
        <thead>
          <tr>
            <th>
              <CheckBox1 />
            </th>
            <th>상품정보</th>
            <th>수량</th>
            <th>상품금액</th>
            <th>할인 적립</th>
            <th>합계금액</th>
            <th>배송비</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan={7}>
              <div className={`py-[35px] text-[16px] font-[600] text-[var(--color1)]`}>
                장바구니에 담겨있는 상품이 없습니다.
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default ProductTable3;
