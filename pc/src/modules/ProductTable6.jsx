import TableItem3 from '@/modules/TableItem3';
import {Util} from '@/scripts/util';
import {Fragment} from 'react';

function ProductTable6(props) {
  return (
    <>
      <table className={`ProductTable6 Table1`}>
        <thead>
          <tr>
            <th>상품정보</th>
            <th className={`w-[120px]`}>수량</th>
            <th className={`w-[190px]`}>상품금액</th>
            <th className={`w-[180px]`}>할인 적립</th>
            <th className={`w-[140px]`}>판매자</th>
            <th className={`w-[150px]`}>합계금액</th>
            <th className={`w-[160px]`}>배송비</th>
          </tr>
        </thead>
        <tbody>
          {Array.from(Array(3)).map((obj, idx) => {
            return (
              <Fragment key={idx}>
                <tr>
                  <td className={`!text-left`}>
                    <TableItem3 />
                  </td>
                  <td>
                    <div className={`Montserrat text-[16px] font-[500] text-[var(--color1)]`}>1개</div>
                  </td>
                  <td>
                    <div className={`Montserrat text-[16px] font-[500] text-[var(--color1)]`}>39,900원</div>
                    <div
                      className={`SelectBox1 mt-[30px] w-[172px]`}
                      onClick={(evt) => {
                        const target = evt.target.closest('.SelectBox1');
                        Util.toggleClass(target, 'On');
                      }}>
                      <button>
                        <div>신상품 10%</div>
                      </button>
                      <div className={`Options`}>
                        <button>신상품 10%</button>
                        <button>신상품 10%</button>
                        <button>신상품 10%</button>
                      </div>
                    </div>
                    <div
                      className={`mt-[9px] SelectBox1 w-[172px]`}
                      onClick={(evt) => {
                        const target = evt.target.closest('.SelectBox1');
                        Util.toggleClass(target, 'On');
                      }}>
                      <button>
                        <div>주말특가 중복할인 50%</div>
                      </button>
                      <div className={`Options`}>
                        <button>주말특가 중복할인 50%</button>
                        <button>주말특가 중복할인 50%</button>
                        <button>주말특가 중복할인 50%</button>
                      </div>
                    </div>
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
                    <div className={`text-left text-[16px] leading-[24px] text-[var(--color1)]`}>
                      (주)티비에이치 글로벌
                    </div>
                  </td>
                  <td>
                    <div className={`Montserrat text-[18px] font-[700] text-[var(--color1)]`}>39,900원</div>
                  </td>
                  <td>
                    <div className={`text-[16px] font-[500] text-[var(--color1)]`}>0원</div>
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

export default ProductTable6;
