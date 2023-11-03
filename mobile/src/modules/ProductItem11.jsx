import { Fragment } from 'react';

function ProductItem11(props) {
  const { className = '' } = props;

  return (
    <>
      <div className={`ProductItem11 ${className}`}>
        <div className={`space-y-[40px]`}>
          {Array.from(Array(3)).map((obj, idx) => {
            return (
              <Fragment key={idx}>
                <div>
                  <div className={`aspect-[320/477] w-full`}>
                    <img
                      className={`h-full w-full object-cover`}
                      src={`https://picsum.photos/320/477.jpg?random=${idx}`}
                      alt={``}
                    />
                  </div>
                  <div className={`mt-[20px]`}>
                    <article
                      className={`Montserrat inline-flex flex-row items-center justify-center gap-0 bg-[var(--color1)] py-[8px] px-[12px] text-[10px] font-[500] text-white`}>
                      MIND BRIDGE WOMEN
                    </article>
                    <div className={`mt-[18px]`}>
                      <div className={`truncate text-[16px] font-[700] text-[var(--color1)]`}>
                        마인드 브릿지 BRAND WEEK
                      </div>
                      <div className={`Montserrat mt-[10px] truncate text-[14px] font-[500] text-[var(--color5)]`}>
                        단 7일간, UP TO 83% OFF3만원 쿠폰팩 증정 단 7일간, UP TO 83% OFF3만원 쿠폰팩 증정
                      </div>
                    </div>
                  </div>
                </div>
              </Fragment>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ProductItem11;
