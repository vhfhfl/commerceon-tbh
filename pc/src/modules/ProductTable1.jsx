import TableItem1 from '@/modules/TableItem1';
import { Fragment, useRef } from 'react';

function ProductTable1(props) {
  const { className = '' } = props;
  const ref_this = useRef();
  return (
    <>
      <table ref={ref_this} className={`ProductTable1 ${className} Table1`}>
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
            <td colSpan={6} className={`!p-[0]`}>
              <article className={`flex h-[48px] flex-row items-center justify-between gap-[0] bg-[#F5F5F5] px-[20px]`}>
                <div>
                  <div className={`text-[16px] font-[700] text-[var(--color1)]`}>날짜/주문번호</div>
                </div>
                <article className={`flex flex-row items-center justify-center gap-[0]`}>
                  <div className={`Montserrat text-[14px] font-[500] text-[var(--color5)]`}>2023/05/18</div>
                  <a
                    className={`ml-[32px] flex flex-row items-center justify-center gap-[0] text-[14px] font-[500] text-[var(--color5)]`}
                    href='https://www.google.com'
                    target='_blank'>
                    <div className={`text-[#161616]`}>2305181545000344</div>
                    <img className={`ml-[8px]`} src={`/icons/zco_67.svg`} alt={``} />
                  </a>
                </article>
              </article>
            </td>
          </tr>
          {Array.from(Array(3)).map((obj, idx) => {
            return (
              <Fragment key={idx}>
                <tr>
                  <td className={`!text-left`}>
                    <TableItem1 idx={idx} />
                  </td>
                  <td>
                    <div className={`Montserrat text-[16px] font-[500] leading-[26px] text-[var(--color1)]`}>
                      39,900원 <br /> / 1개
                    </div>
                  </td>
                  <td>
                    <div className={`text-[16px] font-[500] text-[var(--color1)]`}>배송준비중</div>
                    <div className={`mt-[10px] text-[12px] font-[400] leading-[16px] text-[var(--color5)]`}>
                      분할 배송
                    </div>
                    <div className={`mt-[18px]`}>
                      <button className={`ButtonMd ButtonStyle4`}>주문취소</button>
                    </div>
                  </td>
                  <td className={`!p-[0]`}>
                    <div className={`text-[12px] font-[400] text-[var(--color1)]`}>(주)티비에이치글로벌</div>
                  </td>
                  <td>
                    <div className={`space-y-[10px]`}>
                      <button className={`ButtonMd ButtonStyle4`}>배송조회</button>
                      <button className={`ButtonMd ButtonStyle4`}>회수조회</button>
                    </div>
                  </td>
                  <td>
                    <div>
                      <button className={`ButtonMd ButtonStyle4`}>리뷰쓰기</button>
                    </div>
                  </td>
                </tr>
              </Fragment>
            );
          })}
        </tbody>
        <tbody>
          <tr>
            <td colSpan={6} className={`!p-[0]`}>
              <article className={`flex h-[48px] flex-row items-center justify-between gap-[0] bg-[#F5F5F5] px-[20px]`}>
                <div>
                  <div className={`text-[16px] font-[700] text-[var(--color1)]`}>날짜/주문번호</div>
                </div>
                <article className={`flex flex-row items-center justify-center gap-[0]`}>
                  <div className={`Montserrat text-[14px] font-[500] text-[var(--color5)]`}>2023/05/18</div>
                  <a
                    className={`ml-[32px] flex flex-row items-center justify-center gap-[0] text-[14px] font-[500] text-[var(--color5)]`}
                    href='https://www.google.com'
                    target='_blank'>
                    <div className={`text-[#161616]`}>2305181545000344</div>
                    <img className={`ml-[8px]`} src={`/icons/zco_67.svg`} alt={``} />
                  </a>
                </article>
              </article>
            </td>
          </tr>
          {Array.from(Array(3)).map((obj, idx) => {
            return (
              <Fragment key={idx}>
                <tr>
                  <td className={`!text-left`}>
                    <TableItem1 idx={idx} />
                  </td>
                  <td>
                    <div className={`Montserrat text-[16px] font-[500] leading-[26px] text-[var(--color1)]`}>
                      39,900원 <br /> / 1개
                    </div>
                  </td>
                  <td>
                    <div className={`text-[16px] font-[500] text-[var(--color1)]`}>입금확인</div>
                    <div className={`mt-[18px] space-y-[10px]`}>
                      <button className={`ButtonMd ButtonStyle4`}>환불신청</button>
                      <button className={`ButtonMd ButtonStyle4`}>반품철회</button>
                    </div>
                  </td>
                  <td className={`!p-[0]`}>
                    <div className={`text-[12px] font-[400] text-[var(--color1)]`}>(주)티비에이치글로벌</div>
                  </td>
                  <td>
                    <div className={`space-y-[10px]`}>
                      <button className={`ButtonMd ButtonStyle4`}>배송조회</button>
                      <button className={`ButtonMd ButtonStyle4`}>회수조회</button>
                    </div>
                  </td>
                  <td>
                    <div>
                      <button className={`ButtonMd ButtonStyle4`}>리뷰쓰기</button>
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

export default ProductTable1;
