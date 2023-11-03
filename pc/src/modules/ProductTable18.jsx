import TableItem7 from '@/modules/TableItem7';
import { Fragment, useRef } from 'react';

function ProductTable18(props) {
  const { className = '' } = props;
  const ref_this = useRef();
  return (
    <>
      <table ref={ref_this} className={`ProductTable18 ${className} Table1 text-center`}>
        <thead>
          <tr>
            <th className={``}>상품정보</th>
            <th className={`w-[256px]`}>상품금액/수량</th>
            <th className={`w-[160px]`}>주문상태</th>
            <th className={`w-[204px]`}></th>
          </tr>
        </thead>

        {Array.from(Array(2)).map((obj, idx) => {
          return (
            <Fragment key={idx}>
              <tbody>
                <tr>
                  <td colSpan={6} className={`h-[48px] !border-t-[var(--color1)] !p-[0]`}>
                    <article className={`CenterBetween px-[20px] py-[18px]`}>
                      <article className={`CenterLeft`}>
                        <div className={`text-[16px] font-[700] text-[var(--color1)]`}>날짜/주문번호</div>
                        <div className={`Montserrat ml-[26px] text-[14px] font-[500] text-[var(--color5)]`}>
                          2023/05/18
                        </div>
                        <div className={`Montserrat ml-[22px] text-[14px] font-[500] text-[var(--color5)]`}>
                          2305181545000344
                        </div>
                      </article>
                      <div>
                        <button className={`ButtonStyle2 ButtonLg`}>주문번호로 선택</button>
                      </div>
                    </article>
                  </td>
                </tr>
                {Array.from(Array(3)).map((obj, idx) => {
                  return (
                    <Fragment key={idx}>
                      <tr>
                        <td className={`!text-left`}>
                          <TableItem7 idx={idx} />
                        </td>
                        <td>
                          <div className={`Montserrat text-[16px] font-[500] leading-[26px] text-[var(--color1)]`}>
                            39,900원 / 1개
                          </div>
                        </td>
                        <td>
                          <div className={`text-[16px] font-[500] text-[var(--color1)]`}>배송준비중</div>
                        </td>
                        <td>
                          <div>
                            <button className={`ButtonStyle3 ButtonLg`}>상품으로 선택</button>
                          </div>
                        </td>
                      </tr>
                    </Fragment>
                  );
                })}
              </tbody>
            </Fragment>
          );
        })}
      </table>
    </>
  );
}

export default ProductTable18;