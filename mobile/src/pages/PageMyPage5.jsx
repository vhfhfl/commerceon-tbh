import LayoutSub from '@/layouts/LayoutSub';
import TabBtnBox from '@/components/common/TabBtnBox';
import ProductItem14 from '@/modules/ProductItem14';
import PaymentInfo from '@/modules/PaymentInfo';
import CheckBox1 from '@/components/form/CheckBox1';

function PageMyPage5() {
  return (
    <div className={`PageMyPage5`}>
      <section data-seq={`20230807165056`} className={`mt-[40px]`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <div>
              <TabBtnBox theme={`7`} uuid={`69a90d62-44d3-4709-a661-e2e2f882e125`}>
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
      <section data-seq={`20230807165101`} className={`mt-[40px]`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <PaymentInfo />
          </div>
        </div>
      </section>
      <section data-seq={`20230807165120`} className={`mt-[40px]`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <div className={`Title-3`}>
              <div className={`Txt1`}>2023-06-05 (총 7건)</div>
            </div>
            <div className={`border-t-2 border-solid border-t-[var(--color1)]`}>
              <div className={`pt-[30px]`}>
                <article className={`CenterBetween text-[14px] font-[600] text-[var(--color1)]`}>
                  <CheckBox1 />
                  <div>주문번호 230401920301</div>
                </article>
                <div className={`mt-[12px]`}>
                  <ProductItem14 />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section data-seq={`20230809151441`} className={`mt-[50px]`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <div>
              <div className={`text-center text-[14px] font-[600] text-[var(--color1)]`}>
                구매 확정 처리를 하시겠습니까?
              </div>
              <div className={`mt-[33px]`}>
                <article
                  className={`grid grid-cols-[repeat(auto-fit,minmax(0,1fr))] items-center justify-center gap-0`}>
                  <button className={`ButtonStyle1 ButtonXl`}>취소</button>
                  <button className={`ButtonStyle2 ButtonXl`}>확인</button>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

PageMyPage5.Layout = LayoutSub;
export default PageMyPage5;
