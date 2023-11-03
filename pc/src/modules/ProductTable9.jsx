import CheckBox1 from '@/components/form/CheckBox1';
import TableItem1 from '@/modules/TableItem1';
import { Fragment, useRef } from 'react';

function ProductTable9(props) {
  const { className = '' } = props;
  const ref_this = useRef();
  return (
    <>
      <table ref={ref_this} className={`ProductTable9 ${className} Table1`}>
        <thead>
          <tr>
            <th className={`w-[62px]`}>
              <CheckBox1 />
            </th>
            <th className={``}>상품정보</th>
            <th className={`w-[142px]`}>상품금액</th>
            <th className={`w-[142px]`}>배송비</th>
            <th className={`w-[160px]`}>결제금액</th>
            <th className={`w-[142px]`}>주문상태</th>
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
                    <TableItem1 idx={idx} />
                  </td>
                  <td>
                    <div className={`Montserrat text-[16px] font-[500] text-[var(--color1)]`}>39,900원 / 1개</div>
                  </td>
                  <td>
                    <div className={`Montserrat text-[16px] font-[500] text-[var(--color1)]`}>0원</div>
                  </td>
                  <td>
                    <div className={`Montserrat text-[16px] font-[700] text-[var(--color1)]`}>39,900원</div>
                  </td>
                  <td>
                    <div className={`text-[16px] font-[700] text-[var(--color1)]`}>입금대기</div>
                  </td>
                </tr>
                <tr>
                  <td colSpan={6} className={`!p-0`}>
                    <article className={`grid grid-cols-[228px_1fr] items-center gap-[0] text-left`}>
                      <div className={`py-[15px] pl-[80px]`}>
                        <div className={`text-[16px] font-[400] text-[#161616]`}>
                          <span className={`text-[var(--color2)]`}>*</span>사유선택
                        </div>
                        <div className={`mt-[30px] text-[16px] font-[400] leading-[26px] text-[#161616]`}>
                          사유입력 <br /> (0/100)
                        </div>
                      </div>
                      <div className={`border-l-[1px] border-l-[#ececec] py-[15px] pl-[40px]`}>
                        <article className={`flex flex-row items-center gap-[0]`}>
                          <div className={`SelectBox1 w-[240px]`}>
                            <button>
                              <div>신상품 10%</div>
                            </button>
                            <div className={`Options`}>
                              <button>A</button>
                              <button>B</button>
                              <button>C</button>
                            </div>
                          </div>
                          <article
                            className={`ml-[13px] flex flex-row items-center gap-[10px] text-[14px] font-[400] text-[#161616]`}>
                            <div>(주)티비에이치글로벌 3,000원</div>
                            <div className={`text-[#FE3839]`}>반품택배비 발생 시 고객 부담</div>
                          </article>
                        </article>
                        <div className={`mt-[17px]`}>
                          <textarea className={`TAREA-1`} placeholder={`사유입력 (0/100)`}></textarea>
                        </div>
                      </div>
                    </article>
                    <article className={`BTop1 grid grid-cols-[228px_1fr] items-center gap-[0] text-left`}>
                      <div className={`py-[15px] pl-[80px]`}>
                        <div className={`text-[16px] font-[400] text-[#161616]`}>
                          <span className={`text-[var(--color2)]`}>*</span>교환 옵션 선택
                        </div>
                      </div>
                      <div className={`border-l-[1px] border-l-[#ececec] py-[15px] pl-[40px]`}>
                        <article className={`flex flex-row items-center gap-[0]`}>
                          <button className={`ButtonMd ButtonStyle4 Round`}>옵션선택</button>
                          <div className={`Montserrat ml-[14px] text-[14px] font-[400] text-[#888]`}>
                            옵션 : BLUE / 095
                          </div>
                        </article>
                      </div>
                    </article>
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

export default ProductTable9;
