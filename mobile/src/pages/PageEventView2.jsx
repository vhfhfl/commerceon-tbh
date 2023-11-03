import LayoutSub4 from '@/layouts/LayoutSub4';
import ProductItem3 from '@/modules/ProductItem3';
import { Fragment } from 'react';
import { Util } from '@/scripts/util';

function PageEventView2() {
  return (
    <div className={`PageEventView2`}>
      <section data-seq={`20230726185910`} className={`mt-[20px]`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <article className={`relative flex flex-row items-center justify-between gap-0`}>
              <div>
                <article
                  className={`Montserrat inline-flex flex-row items-center justify-center gap-0 bg-[var(--color8)] px-[12px] py-[8px] text-[10px] font-[500] text-white`}>
                  TBH SHOP
                </article>
                <div className={`mt-[8px] text-[16px] font-[600] text-[var(--color1)]`}>TBH SHOP 신규회원 혜택</div>
              </div>
              <button data-title={`공유하기 버튼`} className={`aspect-square w-[35px]`}>
                <img
                  className={`Icon`}
                  src={`/icons/icon_35.svg`}
                  alt={``}
                  onClick={(evt) => {
                    const el = document.querySelector(`#SNSLayer-6978dd937187`);
                    el.classList.toggle('On');
                  }}
                />
              </button>
              <div
                id={`SNSLayer-6978dd937187`}
                data-title={`SNS 레이어`}
                className={`absolute top-0 right-[35px] z-10 hidden rounded-[100px] border-solid border-[var(--color6)] bg-white [&.On]:block`}
                style={{ filter: 'drop-shadow(0px 4px 20px rgba(0, 0, 0, 0.10))' }}>
                <ul className={`flex flex-row items-center gap-[10px] p-[10px_14px] text-[0px]`}>
                  <li>
                    <button>
                      <img className={`Icon`} src={`/icons/icon_36_1.svg`} alt={``} />
                    </button>
                  </li>
                  <li>
                    <button>
                      <img className={`Icon`} src={`/icons/icon_36_2.svg`} alt={``} />
                    </button>
                  </li>
                  <li>
                    <button>
                      <img className={`Icon`} src={`/icons/icon_36_3.svg`} alt={``} />
                    </button>
                  </li>
                  <li>
                    <button>
                      <img className={`Icon`} src={`/icons/icon_36_4.svg`} alt={``} />
                    </button>
                  </li>
                  <li>
                    <button>
                      <img className={`Icon`} src={`/icons/icon_36_5.svg`} alt={``} />
                    </button>
                  </li>
                </ul>
              </div>
            </article>
            <div className={`mt-[12px]`}>
              <article
                className={`Montserrat flex flex-row items-center justify-between gap-0 border-t-[1px] border-solid border-t-[var(--color6)] text-[12px] leading-[38px] text-[var(--color5)]`}>
                <div className={`font-[500]`}>2023.06.01 ~ 2023.06.31</div>
                <div className={`font-[400]`}>조회수 : 12,584</div>
              </article>
              <div>
                <img
                  className={`aspect-[320/400] w-full object-cover`}
                  src={`https://gifpng.com/320x400`}
                  alt={``}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section data-seq={`20230726193046`} className={`sticky top-[60px] left-0 z-20 mt-[80px]`}>
        <div className={`bg-white pt-[10px]`}>
          <div className={`overflow-auto`}>
            <div className={`inline-flex flex-row items-center gap-[8px] whitespace-nowrap px-[20px]`}>
              {['MEN', 'WOMEN', 'TAB1', 'TAB2', 'TAB3', 'TAB4', 'TAB5', 'TAB6'].map((obj, idx) => {
                return (
                  <Fragment key={idx}>
                    <a href={`https://www.google.com`} target={`_blank`} className={`${idx == 0 && `On`} `}>
                      <div
                        className={`flex h-[26px] flex-row items-center justify-center gap-0 overflow-hidden rounded-[4px] border-[1px] border-solid border-[var(--color6)] bg-white px-[10px] text-[12px] font-[600] leading-[26px] text-[var(--color1)] [.On_>_&]:border-[var(--color1)] [.On_>_&]:bg-[var(--color1)] [.On_>_&]:text-white`}>
                        {obj}
                      </div>
                    </a>
                  </Fragment>
                );
              })}
            </div>
          </div>
          <div className={`mt-[10px] overflow-auto`}>
            <div className={`inline-flex flex-row items-center gap-[15px] whitespace-nowrap px-[20px]`}>
              {['아우터', '가디건', '티셔츠', '카테고리1', '카테고리2', '카테고리3', '카테고리4', '카테고리5'].map(
                (obj, idx) => {
                  return (
                    <Fragment key={idx}>
                      <a
                        href={`https://www.google.com`}
                        target={`_blank`}
                        className={`${
                          idx == 0 && `On`
                        } relative flex h-[30px] flex-row items-center justify-center gap-0`}>
                        <div className={`text-[14px] font-[600] text-[var(--color3)] [.On_>_&]:text-[var(--color1)]`}>
                          {obj}
                        </div>
                      </a>
                    </Fragment>
                  );
                },
              )}
            </div>
          </div>
        </div>
      </section>
      <section data-seq={`20230726191033`} className={`mt-[40px]`}>
        <div className={`text-center text-[20px] font-[600] text-[var(--color1)]`}>아우터</div>
        <div className={`mt-[20px]`}>
          <article className={`grid grid-cols-2 items-center justify-center gap-x-[4px] gap-y-[24px]`}>
            {Array.from(Array(4)).map((obj, idx) => {
              return (
                <Fragment key={idx}>
                  <ProductItem3 idx={idx} />
                </Fragment>
              );
            })}
          </article>
          <div className={`mt-[82px]`}>
            <button
              className={`Montserrat flex w-full flex-row items-center justify-center gap-[6px] py-[4px] text-[14px] font-[600] text-[var(--color1)]`}
              onClick={(evt) => {
                const target = evt.target.closest('button');
                Util.toggleClass(target, 'On');
              }}>
              <div>MORE</div>
              <div>
                <img
                  className={`Icon duration-300 ease-out will-change-auto [button.On_&]:rotate-180`}
                  src={`/icons/icon_63.svg`}
                  alt={``}
                />
              </div>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

PageEventView2.Layout = LayoutSub4;
export default PageEventView2;
