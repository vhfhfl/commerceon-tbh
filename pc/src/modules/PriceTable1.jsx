import {Fragment} from 'react';

function PriceTable1() {
  return (
    <>
      <div className={`PriceTable1 BTop3 BBottom1`}>
        <article className={`grid grid-cols-3 gap-[0] divide-x-[1px] divide-solid divide-[#ececec]`}>
          <div>
            <article className={`flex h-[96px] flex-row items-center justify-between gap-[0] px-[30px]`}>
              <div className={`text-[16px] font-[700] text-[#161616]`}>구매가 합계</div>
              <div className={`text-[28px] font-[600] text-[#68F]`}>975,000</div>
            </article>
            <div
              className={`BTop1 space-y-[7px] px-[30px] py-[16px] text-[16px] font-[400] leading-[30px] text-[#161616]`}></div>
          </div>
          <div>
            <article className={`flex h-[96px] flex-row items-center justify-between gap-[0] px-[30px]`}>
              <div className={`text-[16px] font-[700] text-[#161616]`}>총 할인금액</div>
              <div className={`text-[28px] font-[600] text-[#68F]`}>-10,500</div>
            </article>
            <div
              className={`BTop1 space-y-[7px] px-[30px] py-[16px] text-[16px] font-[400] leading-[30px] text-[#161616]`}>
              {['회원 할인', '쿠폰 할인', '이벤트', '할인코드', '유입경로'].map((obj, idx) => {
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
              <div className={`text-[16px] font-[700] text-[#161616]`}>총 결제금액</div>
              <div className={`text-[28px] font-[600] text-[#68F]`}>970,000</div>
            </article>
            <div
              className={`BTop1 space-y-[7px] px-[30px] py-[16px] text-[16px] font-[400] leading-[30px] text-[#161616]`}>
              {Array.from(Array(2)).map((obj, idx) => {
                return (
                  <Fragment key={idx}>
                    <article className={`flex flex-row items-center justify-between gap-[0]`}>
                      <div>사용 마일리지</div>
                      <div>5,000원</div>
                    </article>
                    <article className={`flex flex-row items-center justify-between gap-[0]`}>
                      <div>사용 마일리지</div>
                      <div>5,000원</div>
                    </article>
                    <div className={`text-right leading-[26px] text-[#888]`}>
                      <div>(주)티비에이치글로벌 : 2,500원</div>
                      <div>(주)커머스온 : 2,500원</div>
                      <div>입금은행 : NH농협</div>
                      <div>가상계좌 : 79004859756986</div>
                      <div>예금자명 : 티비에이치글로벌</div>
                      <div>송금일자 : 2023-06-24까지</div>
                      <div>입금금액 : 69,000원</div>
                    </div>
                  </Fragment>
                );
              })}
              <div className={`!mt-[16px]`}>
                <button
                  className={`h-[36px] w-full border-[1px] border-solid border-[#d4d4d4] text-[12px] font-[400] text-[#161616]`}>
                  결제영수증 조회
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>
    </>
  );
}

export default PriceTable1;
