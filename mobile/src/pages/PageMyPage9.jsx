import LayoutSub from '@/layouts/LayoutSub';
import TabBtnBox from '@/components/common/TabBtnBox';
import ProductItem13 from '@/modules/ProductItem13';
import { Fragment } from 'react';

function PageMyPage9() {
  return (
    <div className={`PageMyPage9`}>
      <section data-seq={`20230810154835`} className={`mt-[40px]`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <div>
              <TabBtnBox theme={`7`} uuid={`1dde2d18-6544-46e0-b930-66f405adc3a7`}>
                <button>7일</button>
                <button>1개월</button>
                <button className={`On`}>3개월</button>
              </TabBtnBox>
            </div>
            <div className={`mt-[13px]`}>
              <article
                className={`grid grid-cols-[repeat(auto-fit,minmax(0,1fr))] items-center justify-center gap-[8px]`}>
                <div
                  className={`relative flex h-[48px] flex-row items-center gap-0 bg-[var(--color7)] pl-[12px] pr-[5px]`}>
                  <input
                    type={`text`}
                    defaultValue={`2023-05-23`}
                    className={`h-full w-full bg-transparent text-[14px] font-[400] text-[var(--color1)] outline-0`}
                  />
                  <button
                    className={`absolute top-[0] right-[5px] z-10 flex aspect-square h-full w-[36px] flex-row items-center justify-center gap-0`}>
                    <img src={`/icons/icon_70.svg`} alt={``} />
                  </button>
                </div>
                <div
                  className={`relative flex h-[48px] flex-row items-center gap-0 bg-[var(--color7)] pl-[12px] pr-[5px]`}>
                  <input
                    type={`text`}
                    defaultValue={`2023-05-23`}
                    className={`h-full w-full bg-transparent text-[14px] font-[400] text-[var(--color1)] outline-0`}
                  />
                  <button
                    className={`absolute top-[0] right-[5px] z-10 flex aspect-square h-full w-[36px] flex-row items-center justify-center gap-0`}>
                    <img src={`/icons/icon_70.svg`} alt={``} />
                  </button>
                </div>
              </article>
            </div>
            <div className={`mt-[13px]`}>
              <button className={`ButtonStyle2 ButtonLg w-full`}>조회</button>
            </div>
          </div>
        </div>
      </section>
      <section data-seq={`20230810155412`} className={`mt-[40px]`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <TabBtnBox theme={`8`} uuid={`779a9335-f6a9-4297-9111-e26e85217bee`}>
              <button className={`On`}>교환(1)</button>
              <button>반품(1)</button>
              <button>취소(0)</button>
            </TabBtnBox>
          </div>
        </div>
      </section>
      <section data-seq={`20230810154849`} className={`mt-[40px]`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <div className={`Title-3`}>
              <div className={`Txt1`}>2023-06-05 (총 7건)</div>
            </div>
            <div className={`space-y-[40px] border-t-2 border-solid border-t-[var(--color1)]`}>
              {Array.from(Array(2)).map((obj, idx) => {
                return (
                  <Fragment key={idx}>
                    <div>
                      <div className={`pt-[14px]`}>
                        <article className={`flex flex-row items-start justify-between gap-0 text-[var(--color1)]`}>
                          <div>
                            <div className={`text-[14px] font-[600]`}>주문번호 230401920301</div>
                            <div className={`mt-[7px] text-[12px] font-[400]`}>판매자 : 주식회사티비에이치글로벌</div>
                          </div>
                          <a className={`CenterCenter`} href={`https://www.google.com`} target={`_blank`}>
                            <span className={`var(--color1) text-[14px]`}>주문 상세보기</span>
                            <img className={`Icon ml-[7px]`} src={`/icons/icon_71.svg`} alt={``} />
                          </a>
                        </article>
                      </div>
                      <div className={`mt-[12px]`}>
                        <ProductItem13 />
                      </div>
                    </div>
                  </Fragment>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

PageMyPage9.Layout = LayoutSub;
export default PageMyPage9;
