import { Fragment } from 'react';

function ProductItem12(props) {
  const { className = '' } = props;

  return (
    <>
      <div className={`ProductItem12 ${className}`}>
        <div className={`space-y-[40px]`}>
          {Array.from(Array(3)).map((obj, idx) => {
            return (
              <Fragment key={idx}>
                <div>
                  <div className={`aspect-[320/374] w-full`}>
                    <img
                      className={`h-full w-full object-cover`}
                      src={`https://picsum.photos/320/374.jpg?random=${idx}`}
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
                        마인드브릿지 F/W season 셔츠룩 화보
                      </div>
                      <div
                        className={`mt-[10px] flex flex-row flex-wrap items-center gap-[8px] text-[14px] font-[500] text-[var(--color5)]`}>
                        <div>#컬러별셔츠</div>
                        <div>#컬러별셔츠</div>
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

export default ProductItem12;
