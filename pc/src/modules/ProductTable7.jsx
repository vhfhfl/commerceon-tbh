import TableItem3 from '@/modules/TableItem3';
import {Fragment} from 'react';

function ProductTable7(props) {
  return (
    <>
      <table className={`ProductTable7 Table1`}>
        <thead>
          <tr>
            <th>상품정보</th>
            <th className={`w-[160px]`}>수량</th>
            <th className={`w-[180px]`}>할인 적립</th>
            <th className={`w-[260px]`}>합계금액</th>
          </tr>
        </thead>
        <tbody>
          {Array.from(Array(2)).map((obj, idx) => {
            return (
              <Fragment key={idx}>
                <tr>
                  <td className={` !text-left`}>
                    <TableItem3 />
                  </td>
                  <td>
                    <div className={`Montserrat text-[16px] font-[500] text-[var(--color1)]`}>1개</div>
                  </td>
                  <td>
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
                        <div className={`text-[16px] font-[400] leading-[30px] text-[var(--color1)]`}>
                          회원등급 추가적립
                        </div>
                        <div className={`mt-[4px] flex flex-row items-center gap-[0]`}>
                          <img src='/icons/zco_59.svg' alt='' />
                          <div className={`ml-[6px] text-[16px] font-[500] text-[var(--color1)]`}>580원</div>
                        </div>
                      </div>
                      <div
                        className={`mt-[26px] text-[16px] font-[400] leading-[24px] text-[var(--color2)] line-clamp-3`}>
                        마인드브릿지 교차 2장이상 구매시 50% (최대 3줄) 마인드브릿지 교차 2장이상 구매시 50% (최대 3줄)
                      </div>
                    </div>
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

export default ProductTable7;
