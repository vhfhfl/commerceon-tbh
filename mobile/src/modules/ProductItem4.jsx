import ItemFlag1 from '@/components/common/ItemFlag1';
import CheckBox1 from '@/components/form/CheckBox1';
import { Fragment } from 'react';

function ProductItem4(props) {
  const { className = '' } = props;
  
  return (
    <>
      <div className={`ProductItem4 ${className} mt-[40px]`}>
        <div className={`mx-[20px]`}>
          <div className={`flex flex-row items-center gap-[10px]`}>
            <CheckBox1 />
            <div className={`text-[14px] font-[600] text-[var(--color1)]`}>(주)티비에이치글로벌</div>
          </div>
          <div className={`mt-[12px]`}>
            <div
              className={`divide-y-[1px] divide-solid divide-[var(--color6)] border-t-[1px] border-b-[1px] border-t-[var(--color1)] border-b-[var(--color6)]`}>
              {Array.from(Array(3)).map((obj, idx) => {
                return (
                  <Fragment key={idx}>
                    <div className={`py-[12px]`}>
                      <article className={`relative mb-[10px] flex flex-row items-center gap-[10px]`}>
                        <CheckBox1 />
                        <button className={`absolute top-0 right-0 z-10`}>
                          <img className={`Icon`} src={`/icons/icon_47.svg`} alt={``} />
                        </button>
                      </article>
                      <article className={`grid grid-cols-[1fr_90px] gap-[10px]`}>
                        <div className={`min-w-[0]`}>
                          <div className={`Montserrat text-[12px] font-[600] text-[var(--color1)]`}>MIND BRIDGE</div>
                          <div className={`mt-[8px] truncate text-[12px] font-[400] text-[var(--color1)]`}>
                            [1&1 교차가능]그래픽티셔츠 2종 여름 라운드 반팔티셔츠 교차상품
                          </div>
                          <div className={`mt-[10px] text-[12px] font-[400] leading-[15px] text-[var(--color5)]`}>
                            옵션 : ICE BLUE / 095
                          </div>
                          <article className={`mt-[10px] flex flex-row items-center gap-[10px]`}>
                            <button className='ButtonSm ButtonStyle4 Round'>옵션변경</button>
                            <div className={`Montserrat text-[12px] font-[400] text-[var(--color13)]`}>품절</div>
                          </article>
                          <article className={`mt-[16px] flex flex-row items-center gap-0`}>
                            <button>
                              <img className={`Icon`} src={`/icons/icon_49_2.svg`} alt={`마이너스`} />
                            </button>
                            <div
                              className={`Montserrat min-w-[38px] text-center text-[12px] font-[500] text-[var(--color1)]`}>
                              99
                            </div>
                            <button>
                              <img className={`Icon`} src={`/icons/icon_49_1.svg`} alt={`플러스`} />
                            </button>
                          </article>
                          <div className={`Montserrat mt-[10px] text-[12px] font-[400] text-[var(--color13)]`}>
                            구매 가능 수량 초과
                          </div>
                          <article className={`Montserrat mt-[10px] flex flex-row items-center gap-[6px] text-[14px]`}>
                            <div className={`font-[600] text-[var(--color1)]`}>19,950</div>
                            <div className={`font-[300] text-[var(--color5)] line-through`}>39,900</div>
                          </article>
                          <div className={`Montserrat mt-[10px] text-[12px] font-[400] text-[var(--color2)]`}>
                            마인드브릿지 티셔츠 2장 이상 교차 할인 50%
                          </div>
                        </div>
                        <div className={`relative h-[120px]`}>
                          <img src={`https://picsum.photos/90/120.jpg?random=${idx}`} alt={``} />
                          <div className={`absolute top-[0] right-[0] z-10`}>
                            <ItemFlag1 theme={idx}>1+1</ItemFlag1>
                          </div>
                          <article
                            className={`Montserrat absolute top-0 left-0 z-10 flex h-full w-full flex-row items-center justify-center bg-[rgba(0,0,0,0.5)] text-[12px] font-[600] text-[var(--color3)]`}>
                            SOLD OUT
                          </article>
                        </div>
                      </article>
                    </div>
                  </Fragment>
                );
              })}
            </div>
          </div>
        </div>
        <div
          className={`mt-[40px] divide-y-[1px] divide-solid divide-[var(--color6)] text-[14px] text-[var(--color1)]`}>
          <article className={`flex flex-row items-center justify-between bg-[#f5f5f5] px-[20px] py-[18px]`}>
            <div className={`font-[400]`}>총 2개의 상품금액</div>
            <div className={`Montserrat font-[500]`}>79,800원</div>
          </article>
          <article className={`flex flex-row items-center justify-between bg-[#f5f5f5] px-[20px] py-[18px]`}>
            <div className={`font-[400]`}>상품 할인</div>
            <div className={`Montserrat font-[500]`}>- 39,900원</div>
          </article>
          <article className={`flex flex-row items-center justify-between bg-[#f5f5f5] px-[20px] py-[18px]`}>
            <div className={`font-[400]`}>배송비</div>
            <div className={`Montserrat font-[500]`}>2,500원</div>
          </article>
          <article className={`flex flex-row items-center justify-between bg-[#f5f5f5] px-[20px] py-[18px] font-[600]`}>
            <div>결제 예정금액</div>
            <div className={`Montserrat`}>22,850원</div>
          </article>
        </div>
      </div>
    </>
  );
}

export default ProductItem4;
