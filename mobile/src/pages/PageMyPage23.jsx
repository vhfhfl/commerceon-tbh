import LayoutSub5 from '@/layouts/LayoutSub5';
import TabBtnBox from '@/components/common/TabBtnBox';
import PaymentInfo from '@/modules/PaymentInfo';
import ProductItem20 from '@/modules/ProductItem20';
import { Fragment } from 'react';

function PageMyPage23() {
  return (
    <div className={`PageMyPage23`}>
      <section data-seq={`20230814145941`} className={`mt-[40px]`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <div>
              <TabBtnBox theme={`7`} uuid={`8975664d-deb0-4851-8195-1b67b20cb1a3`}>
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
      <section data-seq={`20230814145945`} className={`mt-[40px]`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <PaymentInfo />
          </div>
        </div>
      </section>
      <section data-seq={`20230814145951`} className={`mt-[40px]`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <div className={`Title-3`}>
              <div className={`Txt1`}>주문 4건</div>
            </div>
            <div className={`space-y-[40px] border-t-2 border-solid border-t-[var(--color1)] pt-[19px]`}>
              {Array.from(Array(2)).map((obj, idx) => {
                return (
                  <Fragment key={idx}>
                    <div>
                      <article className={`CenterBetween text-[14px] text-[var(--color1)]`}>
                        <div>
                          <div className={`font-[400]`}>2023-06-05</div>
                          <div className={`mt-[4px] font-[600]`}>주문번호 230401920301</div>
                        </div>
                        <button className={`ButtonStyle2 ButtonMd w-[121px]`}>주문번호로 선택</button>
                      </article>
                      <div className={`mt-[12px]`}>
                        <ProductItem20 />
                      </div>
                    </div>
                  </Fragment>
                );
              })}
            </div>
            <div className={`mt-[40px]`}>
              <button className={`ButtonStyle1 ButtonLg Round w-full`}>더보기</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

PageMyPage23.Layout = LayoutSub5;
export default PageMyPage23;
