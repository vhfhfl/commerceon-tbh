import ItemFlag1 from '@/components/common/ItemFlag1';
import CheckBox1 from '@/components/form/CheckBox1';
import { Fragment } from 'react';

function ProductItem17(props) {
  const { className = '' } = props;

  return (
    <>
      <div
        className={`ProductItem17 ${className} border-y-[1px] border-solid border-t-[var(--color1)] border-b-[var(--color6)]`}>
        <div className={`divide-y-[1px] divide-solid divide-[var(--color6)]`}>
          {Array.from(Array(2)).map((obj, idx) => {
            return (
              <Fragment key={idx}>
                <div className={`py-[18px]`}>
                  <div className={`CenterBetween`}>
                    <CheckBox1 />
                    <button>
                      <img className={`Icon`} src={`/icons/icon_47.svg`} alt={``} />
                    </button>
                  </div>
                  <div className={`mt-[18px]`}>
                    <article className={`grid grid-cols-[1fr_90px] gap-[10px]`}>
                      <div className={`min-w-[0]`}>
                        <div>
                          <div className={`Montserrat text-[12px] font-[600] text-[var(--color1)]`}>MIND BRIDGE</div>
                          <div className={`mt-[8px] truncate text-[12px] font-[400] text-[var(--color1)]`}>
                            [1&1 교차가능]그래픽티셔츠 2종 여름 라운드 반팔티셔츠 교차상품
                          </div>
                        </div>
                        <div className={`Montserrat mt-[16px] text-[14px] font-[600] text-[var(--color1)]`}>19,950</div>
                        <div className={`mt-[13px]`}>
                          <div
                            className={`inline-flex h-[28px] flex-row items-center justify-center gap-0 rounded-[4px] border-[1px] border-solid border-[var(--color3)] bg-[var(--color3)] px-[14px] text-[12px] font-[400] text-[var(--color5)]`}>
                            판매중지
                          </div>
                        </div>
                        <div className={`mt-[20px]`}>
                          <div className={`flex flex-row flex-wrap items-center gap-[5px]`}>
                            <button className={`ButtonStyle4 ButtonSm`}>장바구니</button>
                            <button className={`ButtonStyle2 ButtonSm`}>바로구매</button>
                            <button className={`Btn_3`}>장바구니</button>
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
                </div>
              </Fragment>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ProductItem17;
