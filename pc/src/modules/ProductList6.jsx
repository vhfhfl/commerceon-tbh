import { Fragment } from 'react';

function ProductList6(props) {
  const { className = '' } = props;
  return (
    <>
      <div className={`ProductList6 ${className}`}>
        <div className={`divide-y-[1px] divide-solid divide-[var(--color6)] border-y-[1px] border-solid border-y-[var(--color6)]`}>
          {Array.from(Array(3)).map((obj, idx) => {
            return (
              <Fragment key={idx}>
                <article className={`flex flex-row items-center justify-between py-[10px]`}>
                  <article className={`flex flex-row items-center gap-[20px]`}>
                    <div>
                      <img src={`https://picsum.photos/70/92.jpg?random=1`} alt={``} />
                    </div>
                    <div>
                      <div className={`Montserrat text-[14px] font-[600] leading-[20px] text-[var(--color1)]`}>
                        BRAND NAME
                      </div>
                      <div className={`text-[16px] font-[400] leading-[24px] text-[var(--color1)]`}>
                        J로고배색양먈 SKY BLUE
                      </div>
                      <div className={`text-[14px] font-[400] leading-[32px] text-[var(--color5)]`}>
                        옵션 : SKY BLUE / 1개
                      </div>
                    </div>
                  </article>
                  <div>
                    <button className={`ButtonMd ButtonStyle4 w-[110px]`}>사은품 삭제</button>
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

export default ProductList6;
