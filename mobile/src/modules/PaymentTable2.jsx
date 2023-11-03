import { Fragment } from 'react';

function PaymentTable2(props) {
  const { className = '' } = props;
  
  return (
    <>
      <div
        className={`PaymentTable2 ${className} border-[var(--color6] border border-t-[3px] border-t-[var(--color1)]`}>
        <article className={`CenterBetween text-[var(--color1) p-[20px] text-[14px]`}>
          <div className={`font-[700]`}>구매가 합계</div>
          <div className={`Montserrat font-[600]`}>975,000원</div>
        </article>
        <div className={`BTop1 px-[20px] py-[16px] text-[14px] leading-[20px] text-[var(--color1)]`}>
          <div className={`space-y-[7px]`}>
            {['총 할인금액', '회원 할인', '쿠폰', '이벤트', '할인 코드', '유입 경로'].map((obj, idx) => {
              return (
                <Fragment key={idx}>
                  {idx == 0 ? (
                    <article className={`CenterBetween`}>
                      <div className={`font-[700]`}>{obj}</div>
                      <div className={`Montserrat font-[600]`}>(-) 10,500원</div>
                    </article>
                  ) : (
                    <article className={`CenterBetween font-[400]`}>
                      <div>{obj}</div>
                      <div className={`Montserrat text-[var(--color2)]`}>(-) 0원</div>
                    </article>
                  )}
                </Fragment>
              );
            })}
          </div>
        </div>
        <div className={`BTop1 space-y-[7px] px-[20px] py-[16px] text-[14px] leading-[20px] text-[var(--color1)]`}>
          {['사용 마일리지', '사용 예치금'].map((obj, idx) => {
            return (
              <Fragment key={idx}>
                <article className={`CenterBetween`}>
                  <div className={`font-[700]`}>{obj}</div>
                  <div className={`Montserrat font-[400] text-[var(--color2)]`}>(-) 0원</div>
                </article>
              </Fragment>
            );
          })}
        </div>
        <div className={`BTop1 p-[20px] font-[400] leading-[30px]`}>
          <article className={`text-[var(--color1) flex flex-row items-center justify-between text-[14px]`}>
            <div>배송비</div>
            <div className={`Montserrat`}>(+) 5,000원</div>
          </article>
          <div>
            {['(주)티비에이치글로벌', '(주)베이직하우스'].map((obj, idx) => {
              return (
                <Fragment key={idx}>
                  <article className={`CenterBetween text-[12px] text-[var(--color5)]`}>
                    <div>{obj}</div>
                    <div className={`Montserrat`}> 2,500원</div>
                  </article>
                </Fragment>
              );
            })}
          </div>
        </div>
        <div className={`BTop1 space-y-[7px] px-[20px] py-[16px] leading-[20px] text-[var(--color1)]`}>
          <article className={`CenterBetween text-[16px]`}>
            <div className={`font-[700]`}>총 결제금액</div>
            <div className={`Montserrat font-[600]`}>231,670원</div>
          </article>
          <article className={`CenterBetween text-[14px] font-[400] text-[var(--color1)]`}>
            <div>적립 예상 마일리지</div>
            <div className={`Montserrat`}>2,040원</div>
          </article>
        </div>
        <div className={`BTop1 px-[20px] py-[16px] text-[12px] font-[400] leading-[20px] text-[var(--color5)]`}>
          <article className={`CenterBetween text-[14px] text-[var(--color1)]`}>
            <div className={`font-[500]`}>결제수단</div>
            <div className={`font-[400]`}>가상계좌</div>
          </article>
          <div className={`mt-[8px] space-y-[3px]`}>
            <article className={`CenterBetween`}>
              <div>입금은행</div>
              <div>NH농협</div>
            </article>
            <article className={`CenterBetween`}>
              <div>가상계좌</div>
              <div className={`Montserrat`}>79004859756986</div>
            </article>
            <article className={`CenterBetween`}>
              <div>예금자명</div>
              <div>티비에이치글로벌</div>
            </article>
            <article className={`CenterBetween`}>
              <div>송금일자</div>
              <div className={`Montserrat`}>2023-06-24까지</div>
            </article>
            <article className={`CenterBetween`}>
              <div>입금금액</div>
              <div className={`Montserrat`}>69,000원</div>
            </article>
          </div>
          <div className={`mt-[18px]`}>
            <button className={`ButtonStyle4 ButtonSm w-full`}>결제영수증 조회</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default PaymentTable2;
