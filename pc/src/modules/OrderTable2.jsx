import {Fragment} from 'react';

function OrderTable2() {
  return (
    <>
      <div className={`OrderTable2 BTop3 BBottom1 pt-[36px] pb-[32px]`}>
        <article className={`flex h-full flex-row items-center justify-center gap-[45px] text-center`}>
          {['입금대기', '결제완료', '상품준비중', '배송중', '배송완료'].map((obj, idx) => {
            return (
              <Fragment key={idx}>
                <div className={`text-[16px] font-[600] text-[var(--color1)]`}>
                  <div className={``}>{obj}</div>
                  <button className={`mt-[26px] aspect-square w-[120px] rounded-full bg-[#6688FF]`}>0</button>
                </div>
                <div className={`mt-[40px] flex flex-row items-end last:hidden`}>
                  <img src={`/icons/zco_65.svg`} alt={``} />
                </div>
              </Fragment>
            );
          })}
        </article>
      </div>
    </>
  );
}

export default OrderTable2;
