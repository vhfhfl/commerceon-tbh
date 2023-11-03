import { Fragment } from 'react';

function PaymentTable4(props) {
  const { className = '' } = props;
  
  return (
    <>
      <div
        className={`PaymentTable4 ${className} border-[var(--color6] border border-t-[3px] border-t-[var(--color1)]`}>
        <article className={`CenterBetween text-[var(--color1) p-[20px] text-[14px]`}>
          <div className={`font-[700]`}>취소/환불 상품 총 금액 합계</div>
          <div className={`Montserrat font-[600]`}>71,910원</div>
        </article>
        <div className={`BTop1 px-[20px] py-[16px] text-[14px] leading-[20px] text-[var(--color1)]`}>
          <div className={`space-y-[7px]`}>
            {['환불상품합계', '환불배송비합계', '주문할인 취소금액', '환불 마일리지', '환불 예치금'].map((obj, idx) => {
              return (
                <Fragment key={idx}>
                  <article className={`CenterBetween font-[400]`}>
                    <div>{obj}</div>
                    <div className={`Montserrat`}>(+) 0원</div>
                  </article>
                </Fragment>
              );
            })}
          </div>
        </div>
        <div className={`BTop1 px-[20px] py-[16px] text-[14px] leading-[20px] text-[var(--color1)]`}>
          <div className={`space-y-[7px]`}>
            {['취소/환불 금액 차감 내역', '배송비 추가금액', '할인변동 금액'].map((obj, idx) => {
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
                      <div className={`Montserrat`}>(+) 0원</div>
                    </article>
                  )}
                </Fragment>
              );
            })}
          </div>
        </div>
        <div className={`BTop1 space-y-[7px] px-[20px] py-[16px] leading-[20px] text-[var(--color1)]`}>
          <article className={`CenterBetween text-[16px]`}>
            <div className={`font-[700]`}>취소/환불 예정금액</div>
            <div className={`Montserrat font-[600]`}>71,910원</div>
          </article>
          <article className={`CenterBetween text-[14px] font-[400] text-[var(--color1)]`}>
            <div>신용카드 환불 금액</div>
            <div className={`Montserrat`}>(+) 0원</div>
          </article>
        </div>
      </div>
    </>
  );
}

export default PaymentTable4;
