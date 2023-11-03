import LayoutBasic from '@/layouts/LayoutBasic';
import BrandList3 from '@/modules/BrandList3';
import { Fragment } from 'react';

function PageBrandSearch3() {
  return (
    <div className={`PageBrandSearch3`}>
      <div className={`H-Box`}>
        <div className={`Inner`}>
          <section data-seq={`20230727131556`} className={`mt-[104px]`}>
            <div className={`Montserrat text-center text-[36px] font-[700] text-[var(--color1)]`}>BRAND</div>
            <article className={`CenterCenter mt-[52px]`}>
              <div className={`InputUi w-[555px]`} data-form-hei='Xl'>
                <input placeholder='브랜드명을 입력해주세요.' />
                <button>
                  <img src={`/icons/zco_89.svg`} alt={``} />
                </button>
              </div>
            </article>
          </section>
        </div>
      </div>
      <div className={`SubContainer`}>
        <section data-seq={`20230727131600`} className={`mt-[90px]`}>
          <div className={`Title-1`}>
          <div className={`Txt1`}>홍길동님의 관심 브랜드</div>
          </div>
          <ul className={`mt-[50px] grid grid-cols-7 items-center justify-center gap-[48px]`}>
            {Array.from(Array(7)).map((obj, idx) => {
              return (
                <Fragment key={idx}>
                  <li>
                    <div className={`CenterCenter h-[160px] w-[160px] rounded-full bg-[var(--color7)]`}>
                      <img src='/logos/brand_logo_black.svg' alt='' />
                    </div>
                    <div className={`mt-[24px]`}>
                      <div className={`text-center text-[18px] font-[700] text-[var(--color1)]`}>BRAND NAME</div>
                    </div>
                  </li>
                </Fragment>
              );
            })}
          </ul>
        </section>
      </div>
      <div className={`H-Box`}>
        <div className={`Inner`}>
          <div className={`mt-[46px] h-[1px] bg-[var(--color6)]`}></div>
          <div className={`mt-[100px]`}>
            <div className={`TabUi4`}>
              {['추천', 'A-Z', 'ㄱ-ㅎ', '럭셔리'].map((obj, idx) => {
                return (
                  <Fragment key={idx}>
                    <button className={`${idx == 2 && `On`}`}>{obj}</button>
                  </Fragment>
                );
              })}
            </div>
          </div>
          <div className={`mt-[50px]`}>
            <div className={`relative overflow-auto`}>
              <article className={`relative z-10 flex w-full flex-row items-center gap-[0] whitespace-nowrap`}>
                {[ 'ㄱ', 'ㄴ', 'ㄷ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅅ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ', ].map((obj, idx) => {
                  return (
                    <Fragment key={idx}>
                      <a
                        href={`https://www.google.com`}
                        target={`_blank`}
                        className={`${
                          idx == 0 && `On`
                        } relative flex h-[78px] grow flex-row items-center justify-center gap-[0]`}>
                        <div className={`text-[10px] font-[600] text-[var(--color1)]`}>{obj}</div>
                        <div
                          className={`absolute bottom-[0px] left-[0] z-10 hidden h-[2px] w-full bg-[var(--color1)] text-[0px] [.On_>_&]:block`}>
                          Bar
                        </div>
                      </a>
                    </Fragment>
                  );
                })}
              </article>
              <div className={`absolute bottom-[0px] left-[0] z-0 h-[1px] w-full bg-[var(--color6)] text-[0px]`}>
                BottomLine
              </div>
            </div>
          </div>
          <div className={`mt-[52px]`}>
            <BrandList3 />
          </div>
        </div>
      </div>
    </div>
  );
}

PageBrandSearch3.Layout = LayoutBasic;
export default PageBrandSearch3;
