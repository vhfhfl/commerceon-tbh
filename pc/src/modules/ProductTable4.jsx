import CheckBox1 from '@/components/form/CheckBox1';
import TableItem2 from '@/modules/TableItem2';

function ProductTable4(props) {
  return (
    <>
      <table className={`ProductTable4 Table1`}>
        <colgroup>
          <col data-title={`체크박스`} className={`w-[70px]`} />
          <col data-title={`상품정보`} />
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
            <td>
              <CheckBox1 />
            </td>
            <td className={` !text-left`}>
              <TableItem2 />
            </td>
            <td></td>
            <td></td>
            <td rowSpan={3}>
              <div className={`mx-auto text-left`}>
                <div>
                  <div className={`text-[16px] font-[400] leading-[30px] text-[var(--color1)]`}>상품 할인</div>
                  <div className={`mt-[4px] flex flex-row items-center gap-[0]`}>
                    <img src='/icons/zco_58.svg' alt='' />
                    <div className={`ml-[6px] text-[16px] font-[500] text-[var(--color1)]`}>39,900원</div>
                  </div>
                </div>
                <div className={`mt-[16px]`}>
                  <div className={`text-[16px] font-[400] leading-[30px] text-[var(--color1)]`}>상품 적립</div>
                  <div className={`mt-[4px] flex flex-row items-center gap-[0]`}>
                    <img src='/icons/zco_59.svg' alt='' />
                    <div className={`ml-[6px] text-[16px] font-[500] text-[var(--color1)]`}>580원</div>
                  </div>
                </div>
                <div className={`mt-[16px]`}>
                  <div className={`text-[16px] font-[400] leading-[30px] text-[var(--color1)]`}>회원등급 추가적립</div>
                  <div className={`mt-[4px] flex flex-row items-center gap-[0]`}>
                    <img src='/icons/zco_59.svg' alt='' />
                    <div className={`ml-[6px] text-[16px] font-[500] text-[var(--color1)]`}>580원</div>
                  </div>
                </div>
                <div className={`mt-[26px] text-[16px] font-[400] leading-[24px] text-[var(--color2)] line-clamp-3`}>
                  마인드브릿지 교차 2장이상 구매시 50% (최대 3줄) 마인드브릿지 교차 2장이상 구매시 50% (최대 3줄)
                </div>
              </div>
            </td>
            <td rowSpan={3}>
              <div className={`Montserrat text-[18px] font-[700] text-[var(--color1)]`}>39,900원</div>
            </td>
            <td rowSpan={3}>
              <div className={`text-[16px] font-[500] text-[var(--color1)]`}>0원</div>
            </td>
          </tr>
          <tr>
            <td className={`py-[24px]`}>
              <CheckBox1 />
            </td>
            <td className={`py-[24px] px-[20px] !text-left`}>
              <TableItem2 />
            </td>
            <td className={`py-[24px] px-[20px]`}>
              <div className={`flex flex-row items-center justify-center gap-[0]`}>
                <button className={`Button5`}>
                  <img src={`/icons/zco_57_2.svg`} alt={`마이너스`} />
                </button>
                <div className={`Montserrat min-w-[38px] text-[14px] font-[500] text-[var(--color1)]`}>99</div>
                <button className={`Button5`}>
                  <img src={`/icons/zco_57_1.svg`} alt={`플러스`} />
                </button>
              </div>
            </td>
            <td className={`py-[24px]`}>
              <div className={`Montserrat text-[16px] font-[500] text-[var(--color1)]`}>39,900원</div>
              <div className={`mt-[20px] text-[14px] font-[400] text-[var(--color13)]`}>구매 가능 수량초과</div>
            </td>
          </tr>
          <tr>
            <td className={`py-[24px]`}>
              <CheckBox1 />
            </td>
            <td className={`py-[24px] px-[20px] !text-left`}>
              <TableItem2 />
            </td>
            <td className={`py-[24px] px-[20px]`}>
              <div className={`flex flex-row items-center justify-center gap-[0]`}>
                <button className={`Button5`}>
                  <img src={`/icons/zco_57_2.svg`} alt={`마이너스`} />
                </button>
                <div className={`Montserrat min-w-[38px] text-[14px] font-[500] text-[var(--color1)]`}>99</div>
                <button className={`Button5`}>
                  <img src={`/icons/zco_57_1.svg`} alt={`플러스`} />
                </button>
              </div>
            </td>
            <td className={`py-[24px]`}>
              <div className={`Montserrat text-[16px] font-[500] text-[var(--color1)]`}>39,900원</div>
              <div className={`mt-[20px] text-[14px] font-[400] text-[var(--color13)]`}>구매 가능 수량초과</div>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default ProductTable4;
