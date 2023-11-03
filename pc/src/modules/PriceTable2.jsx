import {Fragment} from 'react';

function PriceTable2() {
  return (
    <>
      <div className={`PriceTable2 BTop3 BBottom1`}>
        <article className={`grid grid-cols-3 gap-[0] divide-x-[1px] divide-solid divide-[#ececec]`}>
          <div>
            <article className={`flex h-[96px] flex-row items-center justify-between gap-[0] px-[30px]`}>
              <div className={`text-[16px] font-[700] text-[#161616]`}>원 결제금액</div>
              <div className={`text-[28px] font-[600] text-[#68F]`}>975,000</div>
            </article>
            <div
              className={`BTop1 space-y-[7px] px-[30px] py-[16px] text-[16px] font-[400] leading-[30px] text-[#161616]`}>
              {['총 주문금액', '할인금액'].map((obj, idx) => {
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
              <div className={`text-[16px] font-[700] text-[#161616]`}>차감금액</div>
              <div className={`text-[28px] font-[600] text-[#68F]`}>-10,500</div>
            </article>
            <div
              className={`BTop1 space-y-[7px] px-[30px] py-[16px] text-[16px] font-[400] leading-[30px] text-[#161616]`}>
              {['반품배송비', '할인변동 금액'].map((obj, idx) => {
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
              <div className={`text-[16px] font-[700] text-[#161616]`}>환불금액</div>
              <div className={`text-[28px] font-[600] text-[#68F]`}>970,000</div>
            </article>
            <div
              className={`BTop1 space-y-[7px] px-[30px] py-[16px] text-[16px] font-[400] leading-[30px] text-[#161616]`}>
              {['마일리지 환불', '예치금'].map((obj, idx) => {
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
        <article className={`BTop1 flex h-[75px] flex-row items-center gap-[0] text-[16px] font-[400] text-[#888]`}>
          <div className={`w-[120px] text-center`}><strong>환불 계좌</strong></div>
          <div>환불 계좌 입금 은행 : KB국민계좌 번호 : 00000000000000 입금주 : 홍길동</div>
        </article>
      </div>
    </>
  );
}

export default PriceTable2;
