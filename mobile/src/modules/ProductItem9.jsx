import ItemFlag1 from '@/components/common/ItemFlag1';
import { Fragment } from 'react';
import RadioBtn from '@/components/form/RadioBtn';

function ProductItem9(props) {
  const { className = '' } = props;

  return (
    <>
      <div className={`ProductItem5 ${className}`}>
        <div className={`divide-y-[1px] divide-solid divide-[var(--color6)] border-b-[1px] border-b-[var(--color6)]`}>
          {Array.from(Array(3)).map((obj, idx) => {
            return (
              <Fragment key={idx}>
                <div className={`py-[12px]`}>
                  <article className={`grid grid-cols-[1fr_90px] gap-[10px]`}>
                    <div className={`min-w-[0]`}>
                      <RadioBtn />
                      <div className={`mt-[10px]`}>
                        <div className={`Montserrat text-[12px] font-[600] text-[var(--color1)]`}>MIND BRIDGE</div>
                        <div
                          className={`mt-[8px] text-[12px] font-[400] leading-[18px] text-[var(--color1)] line-clamp-2`}>
                          [1&1 교차가능]
                          <br />
                          그래픽티셔츠 2종 여름 라운드 반팔티셔츠 교차상품
                        </div>
                        <div className={`Montserrat mt-[16px] text-[14px] font-[600] text-[var(--color1)]`}>
                          19,950원
                        </div>
                      </div>
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
      </div>
    </>
  );
}

export default ProductItem9;
