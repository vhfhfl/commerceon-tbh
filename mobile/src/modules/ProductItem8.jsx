import { Fragment } from 'react';

function ProductItem8(props) {
  const { className = '' } = props;

  return (
    <>
      <div className={`ProductItem8 ${className}`}>
        <div className={`space-y-[14px]`}>
          {Array.from(Array(3)).map((obj, idx) => {
            return (
              <Fragment key={idx}>
                <article className={`grid grid-cols-[70px_1fr] gap-[10px]`}>
                  <div>
                    <img className={`aspect-[70/92]`} src={`https://picsum.photos/70/92.jpg?random=${idx}`} alt={``} />
                  </div>
                  <div className={`min-w-[0]`}>
                    <div className={`Montserrat text-[12px] font-[600] text-[var(--color1)]`}>MIND BRIDGE</div>
                    <div className={`mt-[8px] truncate text-[12px] font-[400] text-[var(--color1)]`}>
                      JJ로고 배색 양말 SKY BLUE JJ로고 배색 양말 SKY BLUE
                    </div>
                    <div className={`mt-[10px] text-[12px] font-[400] leading-[15px] text-[var(--color5)]`}>
                      옵션 : SKY BLUE / 1개
                    </div>
                    <article
                      className={`Montserrat mt-[10px] flex flex-row items-center gap-[6px] text-[14px] font-[600] text-[var(--color1)]`}>
                      10,000원
                    </article>
                  </div>
                </article>
              </Fragment>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ProductItem8;
