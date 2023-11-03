import { Fragment } from 'react';

function PaymentTable3(props) {
  const { className = '' } = props;
  
  return (
    <>
      <div
        className={`PaymentTable3 ${className} border-[var(--color6] border border-t-[3px] border-t-[var(--color1)]`}>
        <div className={`BTop1 px-[20px] py-[16px] text-[14px] leading-[20px] text-[var(--color1)]`}>
          <div className={`space-y-[7px]`}>
            {['원 결제금액', '총 주문금액', '할인 금액'].map((obj, idx) => {
              return (
                <Fragment key={idx}>
                  {idx == 0 ? (
                    <article className={`CenterBetween`}>
                      <div className={`font-[700]`}>{obj}</div>
                      <div className={`Montserrat font-[600]`}>975,000원</div>
                    </article>
                  ) : (
                    <article className={`CenterBetween font-[400]`}>
                      <div>{obj}</div>
                      <div className={`Montserrat`}>(+) 0원</div>
                    </article>
                  )}
                </Fragment>
              );
            })}
          </div>
        </div>
        <div className={`BTop1 px-[20px] py-[16px] text-[14px] leading-[20px] text-[var(--color1)]`}>
          <div className={`space-y-[7px]`}>
            {['차감금액', '반품배송비', '할인변동 금액'].map((obj, idx) => {
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
          {['마일리지 환불', '예치금'].map((obj, idx) => {
            return (
              <Fragment key={idx}>
                <article className={`CenterBetween`}>
                  <div className={`font-[700]`}>{obj}</div>
                  <div className={`Montserrat font-[400]`}>(+) 0원</div>
                </article>
              </Fragment>
            );
          })}
        </div>
        <article className={`BTop1 CenterBetween text-[var(--color1) p-[20px] text-[16px]`}>
          <div className={`font-[700]`}>환불금액</div>
          <div className={`Montserrat font-[600]`}>39,900원</div>
        </article>
        <div className={`BTop1 px-[20px] py-[16px] text-[12px] font-[400] leading-[20px] text-[var(--color5)]`}>
          <div className={`text-[14px] font-[500]`}>환불계좌</div>
          <div className={`mt-[8px]`}>
            <div>환불계좌 입금은행</div>
            <div>KB국민계좌 번호: 79004859756986</div>
            <div>입금주: 홍길동</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PaymentTable3;
