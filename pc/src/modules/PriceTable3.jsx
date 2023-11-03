import {Fragment} from 'react';

function PriceTable3() {
  return (
    <>
      <div className={`PriceTable3 BTop3 BBottom1`}>
        <article className={`grid grid-cols-3 gap-[0] divide-x-[1px] divide-solid divide-[#ececec]`}>
          <div>
            <article className={`flex h-[96px] flex-row items-center justify-between gap-[0] px-[30px]`}>
              <div className={`text-[16px] font-[700] text-[#161616] leading-[22px]`}>
                취소/환불 상품 <br /> 총 금액 합계
              </div>
              <div className={`text-[28px] font-[600] text-[#68F]`}>71,910원</div>
            </article>
            <div
              className={`BTop1 space-y-[7px] px-[30px] py-[16px] text-[16px] font-[400] leading-[30px] text-[#161616]`}>
              {['환불상품합계', '환불배송비합계', '주문할인 취소금액', '환불 마일리지', '환불 예치금'].map((obj, idx) => {
                return (
                  <Fragment key={idx}>
                    <article className={`flex flex-row items-center justify-between gap-[0]`}>
                      <div>{obj}</div>
                      <div>5,000원</div>
                    </article>
                  </Fragment>
                );
              })}
            </div>
          </div>
          <div>
            <article className={`flex h-[96px] flex-row items-center justify-between gap-[0] px-[30px]`}>
              <div className={`text-[16px] font-[700] text-[#161616] leading-[22px]`}>취소/환불 금액 <br/> 차감 내역</div>
              <div className={`text-[28px] font-[600] text-[#68F]`}>0원</div>
            </article>
            <div
              className={`BTop1 space-y-[7px] px-[30px] py-[16px] text-[16px] font-[400] leading-[30px] text-[#161616]`}>
              {['배송비 추가금액', '할인변동 금액'].map((obj, idx) => {
                return (
                  <Fragment key={idx}>
                    <article className={`flex flex-row items-center justify-between gap-[0]`}>
                      <div>{obj}</div>
                      <div>5,000원</div>
                    </article>
                  </Fragment>
                );
              })}
            </div>
          </div>
          <div>
            <article className={`flex h-[96px] flex-row items-center justify-between gap-[0] px-[30px]`}>
              <div className={`text-[16px] font-[700] text-[#161616] leading-[22px]`}>취소/환불 <br/> 예정 금액</div>
              <div className={`text-[28px] font-[600] text-[#68F]`}>71,910원</div>
            </article>
            <div
              className={`BTop1 space-y-[7px] px-[30px] py-[16px] text-[16px] font-[400] leading-[30px] text-[#161616]`}>
              {['신용카드 환불 금액'].map((obj, idx) => {
                return (
                  <Fragment key={idx}>
                    <article className={`flex flex-row items-center justify-between gap-[0]`}>
                      <div>{obj}</div>
                      <div>5,000원</div>
                    </article>
                  </Fragment>
                );
              })}
            </div>
          </div>
        </article>
      </div>
    </>
  );
}

export default PriceTable3;
