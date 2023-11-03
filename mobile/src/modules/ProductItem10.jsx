import { Fragment } from 'react';

function ProductItem10(props) {
  const { className = '' } = props;
  
  return (
    <>
      <div className={`ProductItem10 ${className}`}>
        <div className={`space-y-[40px]`}>
          {Array.from(Array(3)).map((obj, idx) => {
            return (
              <Fragment key={idx}>
                <div>
                  <div className={`relative`}>
                    <div className={`aspect-[320/374] w-full`}>
                      <img
                        className={`h-full w-full object-cover`}
                        src={`https://picsum.photos/320/374.jpg?random=${idx}`}
                        alt={``}
                      />
                    </div>
                    <div
                      className={`absolute top-[0] right-[0] z-10 inline-flex h-[38px] min-w-[98px] flex-row items-center justify-center gap-0 bg-[var(--color1)] px-[16px] text-[14px] font-[500] leading-[38px] text-white`}>
                      이벤트 종료
                    </div>
                  </div>
                  <div className={`mt-[20px]`}>
                    <article
                      className={`Montserrat inline-flex flex-row items-center justify-center gap-0 bg-[var(--color8)] py-[8px] px-[12px] text-[10px] font-[500] text-white`}>
                      TBH SHOP
                    </article>
                    <div className={`mt-[18px]`}>
                      <div className={`truncate text-[16px] font-[700] text-[var(--color1)]`}>카카오톡 채널 혜택</div>
                      <div className={`Montserrat mt-[10px] text-[14px] font-[500] text-[var(--color5)]`}>
                        2023.06.01 ~ 2023.06.31
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

export default ProductItem10;
