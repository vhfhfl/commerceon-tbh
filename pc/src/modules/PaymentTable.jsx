import CheckBox1 from '@/components/form/CheckBox1';

import { Fragment } from 'react';

function PaymentTable(props) {
  const { className = '' } = props;
  return (
    <>
      <div
        className={`PaymentTable ${className} border-[var(--color6] border border-t-[3px] border-t-[var(--color1)]`}>
        <article
          className={`text-[var(--color1) flex flex-row items-center justify-between p-[30px] text-[18px] font-[700]`}>
          <div>총 10개의 상품 금액</div>
          <div className={`Montserrat`}>231,670원</div>
        </article>
        <div
          className={`BTop1 space-y-[7px] px-[30px] py-[16px] text-[18px] font-[400] leading-[30px] text-[var(--color1)]`}>
          {['이벤트', '할인 코드', '유입 경로'].map((obj, idx) => {
            return (
              <Fragment key={idx}>
                <article className={`flex flex-row items-center justify-between gap-[0]`}>
                  <div>{obj}</div>
                  <div className={`Montserrat text-[var(--color2)]`}>(-) 0원</div>
                </article>
              </Fragment>
            );
          })}
        </div>
        <article
          className={`BTop1 text-[var(--color1) flex flex-row items-center justify-between p-[30px] text-[18px] font-[400]`}>
          <div>배송비</div>
          <div className={`Montserrat`}>(+) 2,500원</div>
        </article>
        <div
          className={`BTop1 space-y-[7px] px-[30px] py-[16px] text-[18px] font-[400] leading-[30px] text-[var(--color1)]`}>
          <article className={`flex flex-row items-center justify-between gap-[0] text-[20px] font-[700]`}>
            <div>결제 예정 금액</div>
            <div className={`Montserrat`}>231,670원</div>
          </article>
          <article
            className={`flex flex-row items-center justify-between gap-[0] text-[14px] font-[400] text-[var(--color1)]`}>
            <div>적립 예상 마일리지</div>
            <div className={`Montserrat`}>2,040원</div>
          </article>
          <article className={`flex flex-row items-center justify-between gap-[0] text-[14px] text-[var(--color5)]`}>
            <div>상품</div>
            <div className={`Montserrat`}>700원</div>
          </article>
          <article className={`flex flex-row items-center justify-between gap-[0] text-[14px] text-[var(--color5)]`}>
            <div>회원 등급 추가</div>
            <div className={`Montserrat`}>1,340원</div>
          </article>
        </div>
        <div className={`BTop1 text-[var(--color1) space-y-[10px] px-[30px] py-[16px] text-[14px] leading-[20px]`}>
          <div className={`flex flex-row items-start gap-[0]`}>
            <CheckBox1>
              <div className={`translate-y-[10px]`}>
                (필수) 구매하실 상품의 결제정보를 확인하였으며, 구매 진행에
                <br />
                동의합니다.
              </div>
            </CheckBox1>
          </div>
          <div className={`flex flex-row items-center gap-[0]`}>
            <CheckBox1>전체 약관 동의</CheckBox1>
          </div>
          <div className={`flex flex-row items-center gap-[10px]`}>
            <CheckBox1>(필수) 비회원 개인정보 수집 이용 동의</CheckBox1>
            <a
              className={`border-b-[1px] border-solid border-b-[var(--color1)] font-[600]`}
              href={`https://www.google.com`}
              target={`_blank`}>
              약관보기
            </a>
          </div>
          <div className={`flex flex-row items-center gap-[10px]`}>
            <CheckBox1>(필수) 이용약관 동의</CheckBox1>
            <a
              className={`border-b-[1px] border-solid border-b-[var(--color1)] font-[600]`}
              href={`https://www.google.com`}
              target={`_blank`}>
              약관보기
            </a>
          </div>
        </div>
      </div>
      <button className={`Btn_4 w-full border border-[var(--color1)]`}>231,670원 결제하기</button>
    </>
  );
}

export default PaymentTable;
