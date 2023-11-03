import ItemFlag1 from '@/components/common/ItemFlag1';
import CheckBox1 from '@/components/form/CheckBox1';
import { Fragment } from 'react';

function ProductItem14(props) {
  const { className = '', idx } = props;

  return (
    <>
      <div
        className={`ProductItem14 ${className} border-y-[1px] border-solid border-t-[var(--color1)] border-b-[var(--color6)]`}>
        <div className={`divide-y-[1px] divide-solid divide-[var(--color6)]`}>
          {Array.from(Array(2)).map((obj, idx) => {
            return (
              <Fragment key={idx}>
                <div className={`py-[18px]`}>
                  <div className={`CenterBetween`}>
                    <CheckBox1 />
                    <div className={`text-[12px] font-[400] text-[var(--color1)]`}>배송완료</div>
                  </div>
                  <div className={`mt-[18px]`}>
                    <article className={`grid grid-cols-[1fr_90px] gap-[10px]`}>
                      <div className={`min-w-[0]`}>
                        <div>
                          <div className={`Montserrat text-[12px] font-[600] text-[var(--color1)]`}>MIND BRIDGE</div>
                          <div className={`mt-[8px] truncate text-[12px] font-[400] text-[var(--color1)]`}>
                            [1&1 교차가능]그래픽티셔츠 2종 여름 라운드 반팔티셔츠 교차상품
                          </div>
                          <div
                            className={`Montserrat mt-[10px] text-[12px] font-[400] leading-[15px] text-[var(--color5)]`}>
                            옵션 : ICE BLUE / 095 / 1개
                          </div>
                        </div>
                        <div className={`Montserrat mt-[16px] text-[14px] font-[600] text-[var(--color1)]`}>19,950</div>
                      </div>
                      <div className={`relative h-[120px]`}>
                        <img src={`https://picsum.photos/90/120.jpg?random=${idx}`} alt={``} />
                        <div className={`absolute top-[0] right-[0] z-10`}>
                          <ItemFlag1 theme={idx}>1+1</ItemFlag1>
                        </div>
                      </div>
                    </article>
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

export default ProductItem14;
