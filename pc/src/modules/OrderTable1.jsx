import { Fragment } from 'react';

function OrderTable1() {
  return (
    <>
      <div className={`OrderTable1`}>
        <table className={`Table1 Left`}>
          <tbody>
            <tr>
              <td>
                <article className={`grid grid-cols-[1fr_211px] gap-[0]`}>
                  <div>
                    <article className={`flex h-full flex-row items-center justify-center gap-[12px] text-center`}>
                      {['입금대기', '결제완료', '상품준비중', '배송준비중', '배송중', '배송완료', '구매확정'].map(
                        (obj, idx) => {
                          return (
                            <Fragment key={idx}>
                              <div className={``}>
                                <div className={`text-[16px] font-[600] text-[var(--color1)]`}>{obj}</div>
                                <button className={`mt-[43px] aspect-square w-[86px] rounded-full bg-[var(--color7)]`}>
                                  0
                                </button>
                              </div>
                              <div className={`mt-[60px] flex flex-row items-end last:hidden`}>
                                <img src={`/icons/zco_65.svg`} alt={``} />
                              </div>
                            </Fragment>
                          );
                        },
                      )}
                    </article>
                  </div>
                  <div
                    className={`divide-y-[1px] divide-solid divide-[var(--color6)] border-l-[1px] border-l-[var(--color6)] pl-[20px]`}>
                    {['취소', '교환', '반품', '환불'].map((obj, idx) => {
                      return (
                        <Fragment key={idx}>
                          <article
                            className={`flex flex-row items-center justify-between py-[20px] pr-[3px] text-[16px] font-[600] text-[var(--color1)] first:pt-0 last:pb-0`}>
                            <div>{obj}</div>
                            <div>9,999,999건</div>
                          </article>
                        </Fragment>
                      );
                    })}
                  </div>
                </article>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default OrderTable1;
