import { Fragment, useRef } from 'react';

function LayerCouponBox(props) {
  const ref_this = useRef();

  return (
    <>
      <div ref={ref_this} {...props} className={`LayerCouponBox w-[738px] bg-white`}>
        <div className={`p-[30px]`}>
          <div className={`relative`}>
            <div className={`text-[28px] font-[600] text-[var(--color1)]`}>쿠폰함</div>
            <div className={`mt-[15px] text-[16px] font-[700] text-[var(--color1)]`}>다운로드 가능 쿠폰</div>
            <button
              className={`absolute top-0 right-0 z-10 text-[0]`}
              onClick={(evt) => {
                const el_this = ref_this.current;
                el_this.classList.add('hidden');
              }}>
              <img className={`Icon`} src={`/icons/icon_43.svg`} alt={``} />
              닫기
            </button>
          </div>
          <div className={`mt-[20px] border-t-[1px] border-solid border-t-[var(--color1)] pt-[20px]`}>
            <div className={`CenterRight`}>
              <button className={`ButtonXl ButtonStyle2 Round`}>
                <img className={`Icon`} src={`/icons/icon_44.svg`} alt={``} />
                <div className={`ml-[6px]`}>모든 쿠폰 한번에 받기</div>
              </button>
            </div>
            <article className={`mt-[20px] grid grid-cols-2 gap-[48px]`}>
              {Array.from(Array(4)).map((obj, idx) => {
                return (
                  <Fragment key={idx}>
                    <div className={`w-[314px]`}>
                      <div className={`rounded-t-[6px] border border-[var(--color6)] p-[20px]`}>
                        <div className={`text-[14px] font-[400] text-[var(--color1)]`}>개인정보수정 감사 쿠폰</div>
                        <div className={`mt-[10px] text-[28px] font-[700] leading-[34px] text-[var(--color1)]`}>
                          10,000원 할인
                          <article
                            className={`ml-[6px] inline-flex h-[35px] flex-row items-center justify-center gap-[4px] align-top`}>
                            <article
                              className={`inline-flex h-[26px] flex-row items-center justify-center gap-[1px] rounded-[20px] bg-[var(--color2)] p-[6px] text-center text-[12px] font-[600] text-white`}>
                              <img className={`Icon`} src={`/icons/icon_45.svg`} alt={``} />
                              <div>2장</div>
                            </article>
                          </article>
                        </div>
                        <article
                          className={`mt-[30px] flex flex-row items-center justify-between text-[10px] font-[400]`}>
                          <div className={`text-[var(--color5)]`}>2023.04.09까지 사용 가능</div>
                          <div className={`text-[var(--color2)]`}>주문쿠폰</div>
                        </article>
                      </div>
                      <button
                        className={`flex h-[58px] w-full flex-row items-center justify-center rounded-b-[6px] border-t-2 border-dotted border-t-white bg-[var(--color1)]`}>
                        <img className={`Icon`} src={`/icons/icon_44.svg`} alt={``} />
                      </button>
                    </div>
                  </Fragment>
                );
              })}
            </article>
          </div>
        </div>
        <article
          className={`BTop1 flex flex-row items-center gap-[4px] bg-[var(--color7)] p-[30px] text-[14px] font-[400] text-[var(--color5)]`}>
          <article className={`flex aspect-square w-[24px] flex-row items-center justify-center gap-[0]`}>
            <img className={`Icon`} src={`/icons/zco_60.svg`} alt={``} />
          </article>
          <article className={`flex flex-row items-center gap-[4px]`}>
            <div>쿠폰별 사용 기간 및 조건은 쿠폰받기 후 마이페이지</div>
            <div>
              <img className={`Icon`} src={`/icons/icon_46.svg`} alt={``} />
            </div>
            <div>쿠폰에서 확인하실 수 있습니다.</div>
          </article>
        </article>
      </div>
    </>
  );
}

export default LayerCouponBox;
