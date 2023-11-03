import ItemFlag1 from '@/components/common/ItemFlag1';
import { Fragment } from 'react';

function ProductItem7(props) {
  const { className = '' } = props;
  
  return (
    <>
      <div className={`ProductItem7 ${className}`}>
        {Array.from(Array(3)).map((obj, idx) => {
          return (
            <Fragment key={idx}>
              <div className={`border-b-[1px] border-b-[var(--color6)] py-[12px]`}>
                <article className={`grid grid-cols-[1fr_90px] gap-[10px]`}>
                  <div className={`min-w-[0]`}>
                    <div className={`Montserrat text-[12px] font-[600] text-[var(--color1)]`}>MIND BRIDGE</div>
                    <div className={`mt-[8px] truncate text-[12px] font-[400] text-[var(--color1)]`}>
                      [1&1 교차가능]그래픽티셔츠 2종 여름 라운드 반팔티셔츠 교차상품
                    </div>
                    <div className={`Montserrat mt-[10px] text-[12px] font-[400] leading-[15px] text-[var(--color5)]`}>
                      옵션 : ICE BLUE / 095 / 1개
                    </div>
                    <article className={`Montserrat mt-[10px] flex flex-row items-center gap-[6px] text-[14px]`}>
                      <div className={`font-[600] text-[var(--color1)]`}>19,950</div>
                      <div className={`font-[300] text-[var(--color5)] line-through`}>39,900</div>
                    </article>
                  </div>
                  <div className={`relative h-[120px]`}>
                    <img src={`https://picsum.photos/90/120.jpg?random=${idx}`} alt={``} />
                    <div className={`absolute top-[0] right-[0] z-10`}>
                      <ItemFlag1 theme={idx}>1+1</ItemFlag1>
                    </div>
                  </div>
                </article>
              </div>
            </Fragment>
          );
        })}
      </div>
    </>
  );
}

export default ProductItem7;
