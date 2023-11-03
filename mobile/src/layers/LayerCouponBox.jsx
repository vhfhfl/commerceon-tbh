import { Fragment, useRef } from 'react';

function LayerCouponBox(props) {
  const ref_this = useRef();

  return (
    <>
      <div ref={ref_this} {...props} className={`LayerCouponBox w-[330px] bg-white`}>
        <div className={`p-[15px]`}>
          <div className={`relative`}>
            <div className={`text-[22px] font-[600] text-[var(--color1)] leading-[40px]`}>쿠폰함</div>
            <div className={`mt-[10px] text-[14px] font-[700] text-[var(--color1)]`}>다운로드 가능 쿠폰</div>
            <button
              className={`absolute top-0 right-0 z-10 text-[0]`}
              onClick={(evt) => {
                const el_this = ref_this.current;
                el_this.classList.add('hidden');
              }}>
              <img className={`Icon`} src={`/icons/zco_28.svg`} alt={``} />
              닫기
            </button>
          </div>
          <div
            className={`mt-[10px] border-t-[1px] border-solid border-t-[var(--color1)] px-[10px] pt-[30px] pb-[10px]`}>
            <div>
              <button className={`ButtonXl ButtonStyle2 w-full`}>
                <img className={`Icon`} src={`/icons/icon_55.svg`} alt={``} />
                <div className={`ml-[6px]`}>모든 쿠폰 한번에 받기</div>
              </button>
            </div>
            <article className={`mt-[30px] grid grid-cols-1 gap-[10px]`}>
              {Array.from(Array(4)).map((obj, idx) => {
                return (
                  <Fragment key={idx}>
                    <article className={`grid grid-cols-[1fr_auto] items-center justify-center`}>
                      <div className={`rounded-l-[6px] border border-[var(--color6)] p-[20px]`}>
                        <div className={`text-[12px] font-[400] text-[var(--color1)]`}>개인정보수정 감사 쿠폰</div>
                        <div className={`mt-[10px] text-[18px] font-[700] leading-[22px] text-[var(--color1)]`}>
                          10,000원 할인
                          <article
                            className={`ml-[4px] inline-flex flex-row items-center justify-center gap-[4px] align-top`}>
                            <article
                              className={`inline-flex h-[20px] flex-row items-center justify-center gap-[1px] rounded-[20px] bg-[var(--color2)] p-[6px] text-center text-[12px] font-[600] text-white`}>
                              <img className={`Icon`} src={`/icons/icon_56.svg`} alt={``} />
                              <div>2장</div>
                            </article>
                          </article>
                        </div>
                        <article
                          className={`mt-[24px] flex flex-row items-center justify-between text-[10px] font-[400]`}>
                          <div className={`text-[var(--color5)]`}>2023.04.09까지 사용 가능</div>
                          <div className={`text-[var(--color2)]`}>주문쿠폰</div>
                        </article>
                      </div>
                      <div
                        className={`flex h-full flex-row items-center justify-center rounded-r-[6px] border-l-2 border-dotted border-l-white bg-[var(--color1)]`}>
                        <button className={`h-full w-full px-[13px]`}>
                          <img className={`Icon`} src={`/icons/icon_55.svg`} alt={``} />
                        </button>
                      </div>
                    </article>
                  </Fragment>
                );
              })}
            </article>
          </div>
        </div>
        <article
          className={`BTop1 flex flex-row items-start gap-[0] bg-[var(--color7)] p-[20px] text-[14px] font-[400] text-[var(--color5)] leading-[23px]`}>
          <img className={`Icon`} src={`/icons/icon_51.svg`} alt={``} />
          <article className={`ml-[4px]`}>
            <div>쿠폰별 사용 기간 및 조건은 쿠폰받기 후</div>
            <div className={`flex flex-row items-center gap-[0]`}>
              마이페이지 <img className={`Icon`} src={`/icons/icon_57.svg`} alt={``} /> 쿠폰에서 확인하실 수 있습니다.
            </div>
          </article>
        </article>
      </div>
    </>
  );
}

export default LayerCouponBox;
