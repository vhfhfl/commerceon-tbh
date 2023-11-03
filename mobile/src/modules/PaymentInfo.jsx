import { Fragment } from 'react';

function PaymentInfo(props) {
  const { className = '' } = props;

  return (
    <>
      <div className={`PaymentInfo ${className}`}>
        <div className={`relative h-[75px] pt-[25px]`}>
          <ul className={`flex flex-row items-center justify-center gap-[4px]`}>
            {['입금대기', '결제완료', '상품준비중', '배송중', '배송완료'].map((obj, idx) => {
              return (
                <Fragment key={idx}>
                  <li className={`relative`}>
                    <div className={`absolute top-[-25px] left-1/2 -translate-x-1/2 whitespace-nowrap`}>
                      <div className={`relative inline-block text-[12px] font-[600] text-[var(--color1)]`}>{obj}</div>
                    </div>
                    <div
                      className={`flex aspect-square w-[50px] flex-row items-center justify-center gap-0 rounded-full bg-[var(--color2)] text-[12px] font-[600] text-[var(--color1)]`}>
                      0
                    </div>
                  </li>
                  <li className={`last-of-type:hidden`}>
                    <svg xmlns='http://www.w3.org/2000/svg' width='7' height='9' viewBox='0 0 7 9' fill='none'>
                      <path d='M7 4.5L0.25 8.39711L0.25 0.602885L7 4.5Z' fill='#ECECEC' />
                    </svg>
                  </li>
                </Fragment>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default PaymentInfo;
