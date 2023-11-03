import LayoutSub from '@/layouts/LayoutSub';
import { Fragment } from 'react';

function PageCuopn1() {
  return (
    <div className={`PageCuopn1`}>
      <section data-seq={`20230731113659`} className={`mt-[40px]`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <div className={`TabUi1`}>
              {['쿠폰받기(00)', '보유쿠폰(00)'].map((obj, idx) => {
                return (
                  <Fragment key={idx}>
                    <button className={`${obj == '쿠폰받기(00)' && `On`} TabButton1`}>{obj}</button>
                  </Fragment>
                );
              })}
            </div>
            <div className={`mt-[20px]`}>
              <div>
                <img src={`https://gifpng.com/320x374`} alt={``} />
              </div>
              <div className={`mt-[20px]`}>
                <button className={`ButtonLg ButtonStyle2 w-full`}>
                  <span>
                    <img className={`Icon`} src={`/icons/icon_66.svg`} alt={``} />
                  </span>
                  <span>모든 쿠폰 한번에 받기</span>
                </button>
              </div>
              <div className={`mt-[20px] space-y-[10px]`}>
                {Array.from(Array(4)).map((obj, idx) => {
                  return (
                    <Fragment key={idx}>
                      <article className={`grid grid-cols-[1fr_50px] items-center justify-center`}>
                        <div className={`rounded-l-[6px] border border-[var(--color6)] p-[20px]`}>
                          <div className={`text-[12px] font-[400] leading-[16px] text-[var(--color1)]`}>
                            개인정보수정 감사 쿠폰
                          </div>
                          <div className={`mt-[10px] text-[18px] font-[700] leading-[34px] text-[var(--color1)]`}>
                            10,000원 할인
                            <article
                              className={`ml-[6px] inline-flex h-[33px] flex-row items-center justify-center gap-[4px] align-top`}>
                              <article
                                className={`inline-flex h-[20px] flex-row items-center justify-center gap-[1px] rounded-[20px] bg-[var(--color2)] p-[6px] text-center text-[12px] font-[600] text-white`}>
                                <img className={`Icon`} src={`/icons/icon_67.svg`} alt={``} />
                                <div>2장</div>
                              </article>
                            </article>
                          </div>
                          <article className={`CenterBetween mt-[23px] text-[10px] font-[400]`}>
                            <div className={`text-[var(--color5)]`}>2023.04.09까지 사용 가능</div>
                            <div className={`text-[var(--color2)]`}>주문쿠폰</div>
                          </article>
                        </div>
                        <button
                          className={`CenterCenter h-full w-full rounded-r-[6px] border-l-2 border-dotted border-l-white bg-[var(--color1)]`}>
                          <img className={`Icon`} src={`/icons/icon_66.svg`} alt={``} />
                        </button>
                      </article>
                    </Fragment>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

PageCuopn1.Layout = LayoutSub;
export default PageCuopn1;
