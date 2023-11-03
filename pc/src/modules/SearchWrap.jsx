import Image from 'next/image';
import {Fragment, useRef} from 'react';

function SearchWrap(props) {
  const { className = '' } = props;

  const ref_this = useRef();

  return (
    <>
      <div
        id={`SearchWrap`}
        ref={ref_this}
        {...props}
        className={`SearchWrap ${className} relative [[data-fixed-gnb='true']_&]:fixed [[data-fixed-gnb='true']_&]:left-[0] [[data-fixed-gnb='true']_&]:z-10 [[data-fixed-gnb='true']_&]:w-full [[data-fixed-gnb='true']_&]:top-[var(--fixed-header-hei)]`}>
        <div className={`Shell AccordionWrap absolute top-[0] left-[0] z-0 w-full bg-[white]`}>
          <div data-seq='20230512162605654' className={`border-t-[1px] border-t-[var(--color6)]`}>
            <div className={`mx-auto w-[1125px] pt-[40px]`}>
              <div
                data-seq='20230512162100786'
                className={`mx-auto grid w-[700px] grid-cols-[1fr_30px] items-center justify-center gap-[0] rounded-[50px] bg-[var(--color7)] px-[12px]`}>
                <input
                  className={`h-[52px] bg-transparent pl-[18px] text-[20px] font-[300] outline-0 placeholder:text-[var(--color5)]`}
                  placeholder={`검색어를 입력해 주세요`}
                />
                <button>
                  <Image src={`/icons/zco_10_1.svg`} width={30} height={30} alt='' />
                </button>
              </div>
              <div
                data-seq='20230512162847787'
                className={`mt-[38px] grid grid-cols-[repeat(auto-fit,minmax(0,1fr))] items-start justify-center gap-[30px]`}>
                <div>
                  <div
                    className={`relative flex flex-row items-center justify-between border-b-[2px] border-b-[black] pb-[10px]`}>
                    <div className={`text-[16px] font-[500] text-[var(--color1)]`}>최근 검색어</div>
                    <button className={`text-[14px] font-[400] leading-[26px] text-[var(--color5)]`}>전체 삭제</button>
                  </div>
                  <div className={`space-y-[14px] px-[6px] pt-[18px]`}>
                    <div className={`text-[14px] font-[400] leading-[16px] text-[var(--color5)]`}>
                      최근 검색어가 없습니다
                    </div>
                    <div className={`grid grid-cols-[1fr_16px] items-center justify-center gap-[0]`}>
                      <div>반팔셔츠</div>
                      <button>
                        <Image src={`/icons/zco_14.svg`} width={16} height={16} alt='' />
                      </button>
                    </div>
                  </div>
                </div>
                <div>
                  <div
                    className={`relative flex flex-row items-center justify-between border-b-[2px] border-b-[black] pb-[10px]`}>
                    <div className={`text-[16px] font-[500] text-[var(--color1)]`}>추천 검색어</div>
                    <div className={`text-[14px] font-[400] leading-[26px] text-[var(--color5)]`}>12:00 업데이트</div>
                  </div>
                  <div className={`px-[6px] pt-[18px]`}>
                    <ul className={`space-y-[14px]`}>
                      {Array.from(Array(10)).map((obj, idx) => {
                        return (
                          <Fragment key={idx}>
                            <li className={`grid grid-cols-[33px_1fr_16px] items-center justify-center gap-[0]`}>
                              <div className={`whitespace-nowrap text-[14px] font-[400] text-[var(--color2)]`}>
                                {idx + 1}
                              </div>
                              <div className={`text-[14px] font-[400] leading-[16px] text-[var(--color1)]`}>
                                여름 슬랙스
                              </div>
                              <div>
                                <div className={`flex h-[16px] w-[16px] flex-row items-center justify-center`}>
                                  <Image src={`/icons/zco_13_1.svg`} width={16} height={16} alt='' />
                                </div>
                              </div>
                            </li>
                          </Fragment>
                        );
                      })}
                    </ul>
                  </div>
                </div>
                <div>
                  <div
                    className={`relative flex flex-row items-center justify-between border-b-[2px] border-b-[black] pb-[10px]`}>
                    <div className={`text-[16px] font-[500] text-[var(--color1)]`}>인기 검색어</div>
                    <div className={`text-[14px] font-[400] leading-[26px] text-[var(--color5)]`}>12:00 업데이트</div>
                  </div>
                  <div className={`px-[6px] pt-[18px]`}>
                    <ul className={`space-y-[14px]`}>
                      {Array.from(Array(10)).map((obj, idx) => {
                        return (
                          <Fragment key={idx}>
                            <li className={`grid grid-cols-[33px_1fr_16px] items-center justify-center gap-[0]`}>
                              <div className={`whitespace-nowrap text-[14px] font-[400] text-[var(--color1)]`}>
                                {idx + 1}
                              </div>
                              <div className={`text-[14px] font-[400] leading-[16px] text-[var(--color1)]`}>
                                윈드브레이커
                              </div>
                              <div>
                                <div className={`flex h-[16px] w-[16px] flex-row items-center justify-center`}>
                                  {idx > 3 ? (
                                    <Image src={`/icons/zco_13_2.svg`} width={16} height={16} alt='' />
                                  ) : (
                                    <Image src={`/icons/zco_13_3.svg`} width={16} height={16} alt='' />
                                  )}
                                </div>
                              </div>
                            </li>
                          </Fragment>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className={`mt-[44px] border-t-[1px] border-t-[#d4d4d4]`}>
              <button
                className={`flex h-[48px] w-full flex-row items-center justify-center`}
                onClick={(evt) => {
                  // const target = evt.target.closest('button');
                  // console.log(target);
                  const el_this = ref_this.current;
                  const el_shell = el_this.querySelector(`:scope > .Shell`);
                  el_shell.classList.remove('On');
                }}>
                <Image src={`/icons/zco_12.svg`} width={16} height={16} alt='' />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchWrap;
