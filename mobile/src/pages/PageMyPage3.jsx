import LayoutSub from '@/layouts/LayoutSub';
import TabBtnBox from '@/components/common/TabBtnBox';
import ProductItem13 from '@/modules/ProductItem13';
import PaymentInfo from '@/modules/PaymentInfo';
import { Fragment } from 'react';

function PageMyPage3() {
  return (
    <div className={`PageMyPage3`}>
      <section data-seq={`20230807130726`} className={`mt-[40px]`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <div>
              <TabBtnBox theme={`7`} uuid={`3a66b811-00b2-4c2f-bff8-d1ee84ae40d3`}>
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
      <section data-seq={`20230807124557`} className={`mt-[40px]`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <PaymentInfo />
          </div>
        </div>
      </section>
      <section data-seq={`20230807131711`} className={`mt-[40px]`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <div className={`border-t-2 border-t-[var(--color1)]`}>
              <div
                className={`border-b-[1px] border-b-[var(--color6)] py-[60px] text-center text-[14px] font-[400] text-[var(--color1)]`}>
                조회 내역이 없습니다.
              </div>
              <div className={`mt-[14px] text-[12px] font-[400] leading-[20px] text-[var(--color1)]`}>
                <div>
                  1) 교환/반품 요청은 배송완료일 기준으로 1주일내에만 가능합니다. 취소/교환/반품에 대한 자세한 문의는
                  고객센터 '1:1' 문의하시면 정성껏 답변해 드리겠습니다.
                </div>
                <div className={`mt-[9px]`}>
                  2) 교환,반품 시 상품은 1개의 포장으로 부탁드리며, 개별 반품시 비용이 발생할 수 있습니다.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section data-seq={`20230807124553`} className={`mt-[40px]`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <div className={`Title-3`}>
              <div className={`Txt1`}>2023-06-05 (총 7건)</div>
            </div>
            <div className={`space-y-[52px] border-t-2 border-solid border-t-[var(--color1)] pt-[30px]`}>
              {Array.from(Array(2)).map((obj, idx) => {
                return (
                  <Fragment key={idx}>
                    <div>
                      <article className={`CenterBetween text-[14px] font-[600] text-[var(--color1)]`}>
                        <div>주문번호 230401920301</div>
                        <a className={`CenterCenter`} href={`https://www.google.com`} target={`_blank`}>
                          <span>주문 상세보기</span>
                          <img className={`Icon ml-[7px]`} src={`/icons/icon_71.svg`} alt={``} />
                        </a>
                      </article>
                      <div className={`mt-[12px]`}>
                        <ProductItem13 />
                      </div>
                    </div>
                  </Fragment>
                );
              })}
            </div>
            <div className={`mt-[30px]`}>
              <button className={`ButtonStyle1 ButtonLg w-full`}>더보기</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

PageMyPage3.Layout = LayoutSub;
export default PageMyPage3;
