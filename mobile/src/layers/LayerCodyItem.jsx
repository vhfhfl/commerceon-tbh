import ProductSwiper9 from '@/swipers/ProductSwiper9';
import { Fragment, useRef } from 'react';
import { Util } from '@/scripts/util';

function LayerCodyItem(props) {
  const { className = '' } = props;
  const ref_this = useRef();

  return (
    <>
      <div ref={ref_this} {...props} className={`LayerCodyItem ${className}`}>
        <div className={`w-[330px]`}>
          <div className={`flex flex-row items-center justify-end`}>
            <button
              onClick={(evt) => {
                const el_this = ref_this.current;
                el_this.classList.add('hidden');
              }}>
              <img className={`Icon`} src={`/icons/icon_45.svg`} alt='닫기 아이콘' />
            </button>
          </div>
          <div className={`bg-white`}>
            <div className={`px-[15px] pt-[15px] text-[22px] font-[600] leading-[30px] text-[var(--color1)]`}>
              같이 코디된 상품
              <br />한 번에 구매하기
            </div>
            <div className={`mt-[20px] w-[330px] pl-[15px]`}>
              <ProductSwiper9 />
            </div>
            <div className={`mt-[20px] border-t-[1px] border-solid border-t-[var(--color3)] p-[15px]`}>
              <div className={`grid grid-cols-[60px_1fr] items-start gap-[15px] text-[var(--color1)]`}>
                <div>
                  <img
                    className={`aspect-[60/80] w-full object-cover`}
                    src={`https://picsum.photos/60/80.jpg`}
                    alt=''
                  />
                </div>
                <div className={`min-w-0`}>
                  <div className={`Montserrat text-[10px] font-[600] text-[var(--color1)]`}>ACUASCUTUM</div>
                  <div className={`mt-[6px]`}>
                    <div className={`text-[10px] font-[400] leading-[13px] text-[var(--color1)]`}>
                      아쿠아스큐텀 여성 피마코튼스판 스트라이프 셔츠 아쿠아스큐텀 여성 피마코튼스판 스트라이프 셔츠
                    </div>
                  </div>
                  <div className={`Montserrat mt-[12px] flex flex-row items-center gap-[6px] text-[14px]`}>
                    <div className={`font-[600] text-[var(--color1)]`}>64,000</div>
                    <div className={`font-[300] text-[var(--color5)] line-through`}>129,000</div>
                    <div className={`font-[600] text-[var(--color2)]`}>50%</div>
                  </div>
                </div>
              </div>
              <div className={`mt-[20px]`}>
                <div className={`flex flex-row items-center text-[12px]`}>
                  <div className={`font-[600] text-[var(--color1)]`}>컬러</div>
                  <div className={`Montserrat ml-[6px] font-[400] text-[var(--color5)]`}>WHITE</div>
                </div>
                <div className={`relative mt-[15px] min-w-0`}>
                  <div className={`flex flex-row items-center gap-[6px] overflow-auto`}>
                    {Array.from(Array(2)).map((obj, idx) => {
                      return (
                        <Fragment key={idx}>
                          <button className={`ColorButton20`}>
                            <img className={`Icon`} src={`/icons/zco_33.svg`} alt={``} />
                          </button>
                          <button className={`ColorButton20 !bg-[#888]`}></button>
                          <button className={`ColorButton20 !bg-[#D9D9D9]`}></button>
                          <button className={`ColorButton20 !bg-[#161616]`}></button>
                          <button className={`ColorButton20 !bg-[#6688FF]`}></button>
                          <button className={`ColorButton20 !bg-[#F1B8B8]`}></button>
                          <button className={`ColorButton20 !bg-[#05A185]`}></button>
                          <button className={`ColorButton20 !bg-[#E26D6D]`}></button>
                          <button className={`ColorButton20 !bg-[#E26D6D]`}></button>
                        </Fragment>
                      );
                    })}
                  </div>
                  <div className={`pointer-events-none absolute top-0 left-0 right-0 z-10 h-full w-full`}>
                    <div className={`flex flex-row items-center justify-between`}>
                      <div>
                        <img className={`Icon`} src={`/imgs/icon_1.png`} alt={``} />
                      </div>
                      <div>
                        <img className={`Icon`} src={`/imgs/icon_2.png`} alt={``} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`mt-[20px]`}>
                <div className={`flex flex-row items-center text-[12px]`}>
                  <div className={`font-[600] text-[var(--color1)]`}>사이즈</div>
                  <button
                    className={`ml-[6px] border-b border-solid border-[var(--color5)] font-[400] text-[var(--color5)]`}>
                    실측사이즈
                  </button>
                </div>
                <div className={`mt-[15px] inline-grid grid-cols-5 gap-[5px]`}>
                  {Array.from(Array(2)).map((obj, idx) => {
                    return (
                      <Fragment key={idx}>
                        <button className={`SizeButton32`}>030</button>
                        <button className={`SizeButton32 On`}>030</button>
                        <button className={`SizeButton32 Disabled`}>030</button>
                      </Fragment>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className={`mt-[15px]`}>
              <div className={`flex flex-row items-center`}>
                <button className={`w-[58px]`}>
                  <img
                    className={`Icon [.On_>_&]:hidden`}
                    src={`/icons/icon_46_1.svg`}
                    alt='좋아요'
                    onClick={(evt) => {
                      const target = evt.target.closest('button');
                      Util.toggleClass(target, 'On');
                    }}
                  />
                  <img
                    className={`Icon hidden [.On_>_&]:block`}
                    src={`/icons/icon_46_2.svg`}
                    alt='좋아요'
                    onClick={(evt) => {
                      const target = evt.target.closest('button');
                      Util.toggleClass(target, 'On');
                    }}
                  />
                </button>
                <button className={`PopupButton3 grow`}>장바구니</button>
                <button className={`PopupButton2 grow`}>바로구매</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LayerCodyItem;
