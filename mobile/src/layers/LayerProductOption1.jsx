import Image from 'next/image';
import { Fragment, useRef } from 'react';

function LayerProductOption1(props) {
  const { className = '' } = props;
  const ref_this = useRef();

  return (
    <>
      <div ref={ref_this} {...props} className={`LayerProductOption1 ${className}`}>
        <div className={`w-[360px] rounded-t-[30px] bg-white shadow-[0_-10px_20px_0px_rgba(0_0_0/0.1)]`}>
          <div className={`p-[20px]`}>
            <div>
              <div className={`flex flex-row items-center text-[12px]`}>
                <div className={`font-[600] text-[var(--color1)]`}>컬러</div>
                <div className={`Montserrat ml-[6px] font-[400] text-[var(--color5)]`}>WHITE</div>
              </div>
              <div className={`relative mt-[15px] min-w-0`}>
                <div className={`flex flex-row items-center gap-[8px] overflow-auto`}>
                  {Array.from(Array(2)).map((obj, idx) => {
                    return (
                      <Fragment key={idx}>
                        <button className={`ColorButton30`}>
                          <img className={`Icon`} src={`/icons/zco_33.svg`} alt={``} />
                        </button>
                        <button className={`ColorButton30 !bg-[#888]`}></button>
                        <button className={`ColorButton30 !bg-[#D9D9D9]`}></button>
                        <button className={`ColorButton30 !bg-[#161616]`}></button>
                        <button className={`ColorButton30 !bg-[#6688FF]`}></button>
                        <button className={`ColorButton30 !bg-[#F1B8B8]`}></button>
                        <button className={`ColorButton30 !bg-[#05A185]`}></button>
                        <button className={`ColorButton30 !bg-[#E26D6D]`}></button>
                        <button className={`ColorButton30 !bg-[#E26D6D]`}></button>
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
              <div className={`mt-[15px] grid grid-cols-5 gap-[5px]`}>
                {Array.from(Array(4)).map((obj, idx) => {
                  return (
                    <Fragment key={idx}>
                      <button className={`SizeButton34`}>030</button>
                      <button className={`SizeButton34 On`}>030</button>
                      <button className={`SizeButton34 Disabled`}>030</button>
                    </Fragment>
                  );
                })}
              </div>
            </div>
            <div
              data-title={`선택 상품 수량`}
              className={`mt-[20px] divide-y-[1px] divide-[var(--color6)] border-y border-[var(--color6)]`}>
              {Array.from(Array(2)).map((obj, idx) => {
                return (
                  <Fragment key={idx}>
                    <div className={`relative pt-[17px] pb-[21px] pl-[11px]`}>
                      <div
                        className={`w-[215px] text-[12px] font-[400] leading-[16px] text-[var(--color1)] line-clamp-2`}>
                        WHITE/026
                      </div>
                      <button
                        className={`absolute top-0 right-0 z-10 flex flex-row items-center justify-center bg-[var(--color7)]`}>
                        <img className={`Icon`} src={`/icons/icon_39.svg`} alt={``} />
                      </button>
                      <div className={`mt-[20px] flex flex-row items-center justify-between`}>
                        <div className={`flex flex-row items-center justify-center gap-0`}>
                          <button>
                            <img className={`Icon`} src={`/icons/icon_40_1.svg`} alt={`마이너스`} />
                          </button>
                          <div
                            className={`Montserrat min-w-[38px] text-center text-[12px] font-[500] text-[var(--color1)]`}>
                            99
                          </div>
                          <button>
                            <img className={`Icon`} src={`/icons/icon_40_2.svg`} alt={`플러스`} />
                          </button>
                        </div>
                        <div className={`Montserrat text-[16px] font-[600] text-[var(--color1)]`}>14,900원</div>
                      </div>
                    </div>
                  </Fragment>
                );
              })}
            </div>
            <div className={`mt-[20px]`}>
              <div className={`border-t-[2px] border-[var(--color1)]`}>
                <div className={`py-[16px] pl-[10px]`}>
                  <div className={`flex flex-row items-center justify-between font-[600] text-[var(--color1)]`}>
                    <div className={`text-[14px]`}>총 상품금액</div>
                    <div className={`Montserrat text-[18px]`}>29,800원</div>
                  </div>
                  <div
                    className={`mt-[21px] flex flex-row items-center justify-between font-[600] text-[var(--color1)]`}>
                    <div className={`text-[14px]`}>총 할인금액</div>
                    <div className={`Montserrat text-[18px] `}>-0원</div>
                  </div>
                </div>
              </div>
              <div
                className={`flex flex-row items-center justify-between border-t-[1px] border-t-[var(--color1)] pt-[14px] pl-[10px] font-[600]`}>
                <div className={`text-[16px] text-[var(--color1)]`}>총 합계금액</div>
                <div className={`Montserrat text-[28px] text-[var(--color2)]`}>29,800원</div>
              </div>
            </div>
          </div>
          <div className={`mt-[20px] flex flex-row items-center`}>
            <button className={`h-[58px] w-[58px]`}>
              <img className={`Icon`} src={`/imgs/naverpay_2.jpg`} alt={`네이버페이`} />
            </button>
            <button className={`PopupButton3 grow`}>장바구니</button>
            <button className={`PopupButton2 grow`}>바로구매</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default LayerProductOption1;
