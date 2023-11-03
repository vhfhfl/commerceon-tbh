import Image from 'next/image';
import { Fragment, useRef } from 'react';
import { Util } from '@/scripts/util';

function LayerProductOption2(props) {
  const { className = '' } = props;
  const ref_this = useRef();

  return (
    <>
      <div ref={ref_this} {...props} className={`LayerProductOption2 ${className}`}>
        <div className={`w-[360px] rounded-t-[30px] bg-white shadow-[0_-10px_20px_0px_rgba(0_0_0/0.1)]`}>
          <div className={`p-[20px]`}>
            <div className={`text-[12px] font-[400] leading-[15px] text-[var(--color2)]`}>
              ★구매혜택★ 2장 이상 구매 시 50% 자동 할인되는 상품입니다.
              <br />
              &#40;중복 쿠폰 사용 불가&#41;
            </div>
            <div
              className={`mt-[20px] divide-y-[1px] divide-solid divide-[var(--color6)] border border-[var(--color6)]`}>
              {Array.from(Array(2)).map((obj, idx) => {
                return (
                  <Fragment key={idx}>
                    <article className={`grid grid-cols-[75px_1fr] items-start gap-[16px] p-[16px]`}>
                      <div>
                        <Image
                          className={`aspect-[75/103] w-full object-cover`}
                          src={`https://picsum.photos/75/103.jpg?random=${idx}`}
                          width={75}
                          height={103}
                          priority
                          alt={``}
                        />
                        <button className={`Button7 mt-[7px] w-full`}>실측사이즈</button>
                      </div>
                      <div className={`min-w-0`}>
                        <div className={`truncate text-[12px] font-[600] text-[var(--color1)]`}>
                          아쿠아스큐텀 여성 피마코튼스판 스트라이프 셔츠
                        </div>
                        <div className={`mt-[5px]`}>
                          <div className={`Montserrat flex flex-row items-center text-[14px] font-[600]`}>
                            <div className={`text-[var(--color3)] line-through`}>39,000</div>
                            <div className={`ml-[4px] flex flex-row items-center text-[var(--color1)]`}>14,900원</div>
                          </div>
                          <div className={`relative mt-[12px] min-w-0`}>
                            <div className={`flex flex-row items-center gap-[5px] overflow-auto`}>
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
                                  <Image
                                    className={`Icon`}
                                    src={`/imgs/icon_1.png`}
                                    width={20}
                                    height={20}
                                    priority
                                    alt={``}
                                  />
                                </div>
                                <div>
                                  <Image
                                    className={`Icon`}
                                    src={`/imgs/icon_2.png`}
                                    width={20}
                                    height={20}
                                    priority
                                    alt={``}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className={`Montserrat mt-[7px] text-[10px] font-[500] leading-[14px] text-[var(--color1)]`}>
                            GRAY
                          </div>
                          <article className={`mt-[10px] grid grid-cols-4 gap-[6px]`}>
                            {Array.from(Array(2)).map((obj, idx) => {
                              return (
                                <Fragment key={idx}>
                                  <button className='SizeButton28'>030</button>
                                  <button className='SizeButton28 On'>030</button>
                                  <button className='SizeButton28 Disabled'>030</button>
                                </Fragment>
                              );
                            })}
                          </article>
                        </div>
                      </div>
                    </article>
                  </Fragment>
                );
              })}
            </div>
            <div
              data-title={`선택 상품 수량`}
              className={`mt-[20px] divide-y-[1px] divide-solid divide-[var(--color6)] border-y border-[var(--color6)]`}>
              {Array.from(Array(2)).map((obj, idx) => {
                return (
                  <Fragment key={idx}>
                    <div className={`relative pt-[17px] pb-[21px] pl-[11px]`}>
                      <div
                        className={`w-[215px] text-[12px] font-[400] leading-[16px] text-[var(--color1)] line-clamp-2`}>
                        [1+1]20수 남성포켓 + 여성 기본 반팔 티셔츠 GRAY/095
                      </div>
                      <button
                        className={`absolute top-0 right-0 z-10 flex flex-row items-center justify-center bg-[var(--color7)]`}>
                        <Image className={`Icon`} src={`/icons/icon_39.svg`} width={24} height={24} priority alt={``} />
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
            <button
              className={`flex h-[58px] w-[58px] flex-row items-center justify-center border-r-[1px] border-solid border-[#2b2b2b] bg-[var(--color1)]`}>
              <Image
                className={`Icon [.On_>_&]:hidden`}
                src={`/icons/icon_50_1.svg`}
                width={36}
                height={36}
                alt='좋아요'
                onClick={(evt) => {
                  const target = evt.target.closest('button');
                  Util.toggleClass(target, 'On');
                }}
              />
              <Image
                className={`Icon hidden [.On_>_&]:block`}
                src={`/icons/icon_50_2.svg`}
                width={36}
                height={36}
                alt='좋아요'
                onClick={(evt) => {
                  const target = evt.target.closest('button');
                  Util.toggleClass(target, 'On');
                }}
              />
            </button>
            <button className={`PopupButton2 grow`}>구매하기</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default LayerProductOption2;
