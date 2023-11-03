import ProductSwiper9 from '@/swipers/ProductSwiper9';
import { Fragment, useRef } from 'react';

function LayerCodyItem(props) {
  const { className = '' } = props;
  const ref_this = useRef();

  return (
    <>
      <div ref={ref_this} {...props} className={`LayerCodyItem ${className}`}>
        <div className={`w-[700px]`}>
          <article className={`flex flex-row items-center justify-end`}>
            <button
              onClick={(evt) => {
                const el_this = ref_this.current;
                el_this.classList.add('hidden');
              }}>
              <img className={`Icon`} src={`/icons/icon_40.svg`} alt={`닫기 아이콘`} />
            </button>
          </article>
          <div className={`mt-[13px] bg-white`}>
            <article className={`grid-cols-[1fr_auto] grid items-start p-[30px]`}>
              <div className={`text-[28px] font-[600] leading-[34px] text-[var(--color1)]`}>
                같이 코디된 상품
                <br />한 번에 구매하기
              </div>
              <div className={`w-[386px]`}>
                <ProductSwiper9 />
              </div>
            </article>
            <div className={`w-[700px]`}>
              <div className={`border-t-[1px] border-t-[var(--color3)] border-solid p-[30px]`}>
                <article className={`grid-cols-[225px_1fr] gap-[30px] grid items-start text-[var(--color1)]`}>
                  <div>
                    <img
                      className={`aspect-[225/300] w-full object-cover`}
                      src={`https://picsum.photos/225/300.jpg`}
                      alt={``}
                    />
                  </div>
                  <div>
                    <div className={`Montserrat text-[14px] font-[600] text-[var(--color1)]`}>BRAND NAME</div>
                    <div className={`mt-[10px]`}>
                      <div className={`text-[14px] font-[400] leading-[20px] text-[var(--color1)]`}>
                        아쿠아스큐텀 여성 피마코튼스판 스트라이프 셔츠 아쿠아스큐텀 여성 피마코튼스판 스트라이프 셔츠
                      </div>
                    </div>
                    <article className={`Montserrat mt-[18px] gap-[6px] flex flex-row items-center text-[16px]`}>
                      <div className={`font-[600] text-[var(--color1)]`}>64,000</div>
                      <div className={`font-[300] text-[var(--color5)] line-through`}>129,000</div>
                      <div className={`font-[600] text-[var(--color2)]`}>50%</div>
                    </article>
                    <article
                      className={`mt-[18px] grid-cols-[auto_1fr] border-[var(--color3)] pt-[16px] grid items-start border-t`}>
                      <div className={`w-[75px] text-[12px]`}>
                        <div className={`font-[600] text-[var(--color1)]`}>컬러</div>
                        <div className={`Montserrat mt-[8px] font-[500] text-[var(--color5)]`}>WHITE</div>
                      </div>
                      <article className={`flex flex-row items-center`}>
                        <article className={`grid-cols-[repeat(8,minmax(0,auto))] gap-[8px] grid items-center`}>
                          {Array.from(Array(29)).map((obj, idx) => {
                            return (
                              <Fragment key={idx}>
                                <button className={`ColorButton30`}>
                                  <img className={`Icon`} src={`/icons/zco_48_1.svg`} alt={``} />
                                </button>
                              </Fragment>
                            );
                          })}
                        </article>
                      </article>
                    </article>
                    <article className={`mt-[18px] flex flex-row items-start gap-[0]`}>
                      <div className={`w-[75px]`}>
                        <div className={`text-[12px] font-[600] text-[var(--color1)]`}>사이즈</div>
                        <button
                          className={`mt-[8px] border-[var(--color5)] text-[12px] border-b border-solid font-[400] text-[var(--color5)]`}>
                          실측사이즈
                        </button>
                      </div>
                      <article className={`inline-grid grid-cols-5 gap-[5px]`}>
                        {Array.from(Array(2)).map((obj, idx) => {
                          return (
                            <Fragment key={idx}>
                              <button className={`SizeButton32`}>030</button>
                              <button className={`SizeButton32 On`}>030</button>
                              <button className={`SizeButton32 Disabled`}>030</button>
                            </Fragment>
                          );
                        })}
                      </article>
                    </article>
                    <div className={`mt-[18px] border-[var(--color3)] pt-[18px] border-t`}>
                      <article className={`flex flex-row items-center`}>
                        <button className={`w-[58px]`}>
                          <img className={`Icon aspect-square w-full`} src={`/icons/icon_42.svg`} alt={`좋아요`} />
                        </button>
                        <button className={`PopupButton3 grow`}>장바구니</button>
                        <button className={`PopupButton2 grow`}>바로구매</button>
                      </article>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LayerCodyItem;
