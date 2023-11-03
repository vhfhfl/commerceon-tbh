import LayoutSub from '@/layouts/LayoutSub';
import { Fragment } from 'react';

function PageCuopn2() {
  return (
    <div className={`PageCuopn2`}>
      <section data-seq={`20230731122123`} className={`mt-[40px]`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <div className={`TabUi1`}>
              {['쿠폰받기(00)', '보유쿠폰(00)'].map((obj, idx) => {
                return (
                  <Fragment key={idx}>
                    <button className={`${obj == '보유쿠폰(00)' && `On`} TabButton1`}>{obj}</button>
                  </Fragment>
                );
              })}
            </div>
            <div className={`mt-[20px]`}>
              <div>
                <img src={`https://gifpng.com/320x374`} alt={``} />
              </div>
              <div className={`mt-[20px] space-y-[15px]`}>
                {Array.from(Array(4)).map((obj, idx) => {
                  return (
                    <Fragment key={idx}>
                      <div>
                        <div className={`rounded-t-[6px] border border-[var(--color6)] p-[20px]`}>
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
                        <div className={`border-t-[2px] border-dotted border-t-[var(--color6)]`}>
                          <button
                            className={`CenterCenter h-[50px] w-full rounded-b-[6px] bg-[var(--color6)] px-[44px]`}>
                            <div className={`text-[12px] font-[400] text-[var(--color3)]`}>발급완료</div>
                          </button>
                        </div>
                      </div>
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

PageCuopn2.Layout = LayoutSub;
export default PageCuopn2;
