import LayoutSub3 from '@/layouts/LayoutSub3';
import CustomSelect3 from '@/components/form/CustomSelect3';
import { Data } from '@/scripts/data_manager';
import { Util } from '@/scripts/util';
import { Fragment } from 'react';

function PageBrandSearch1() {
  return (
    <div className={`PageBrandSearch1`}>
      <section data-seq={`20230727133635`} className={`mt-[40px]`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <div className={`InputUi InputLg w-full`} data-form-hei={`Lg`}>
              <input type={`text`} placeholder={`브랜드명을 입력해주세요`} />
              <button>
                <img className={`Icon !w-[24px]`} src={`/icons/icon_59.svg`} alt={``} />
              </button>
            </div>
            <div className={`mt-[20px]`}>
              <div className={`Title-1`}>
                <div className={`Txt1`}>
                  <span className={`text-[var(--color2)] underline underline-offset-4`}>로그인</span> 후 관심 브랜드를
                  등록해보세요.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section data-seq={`20230727134457`} className={`mt-[5px]`}>
        <CustomSelect3 optionsdata={Data.exhibitionList}></CustomSelect3>
      </section>
      <section data-seq={`20230727134517`} className={`mt-[54px]`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <div className={`relative`}>
              <div className={`border-b-[3px] border-[var(--color1)] pb-[16px]`}>
                <button
                  className={`Montserrat flex w-full flex-row items-center justify-center gap-[6px] text-[14px] font-[600] text-[var(--color1)]`}
                  onClick={(evt) => {
                    const target = evt.target.closest('button');
                    Util.toggleClass(target, 'On');

                    const el = document.querySelector(`#SelectBox-ba2f4f009363`);
                    el.classList.toggle('On');
                  }}>
                  <div>추천</div>
                  <div>
                    <img
                      className={`Icon duration-300 ease-out will-change-auto [button.On_&]:rotate-180`}
                      src={`/icons/icon_65.svg`}
                      alt={``}
                    />
                  </div>
                </button>
              </div>
              <div
                id={`SelectBox-ba2f4f009363`}
                className={`absolute top-full left-0 z-10 hidden w-full bg-white [&.On]:block`}>
                <ul>
                  <li>
                    <button
                      className={`flex w-full flex-row items-center justify-center gap-0 text-[14px] font-[600] leading-[45px] text-[var(--color1)]`}>
                      추천
                    </button>
                  </li>
                  <li>
                    <button
                      className={`flex w-full flex-row items-center justify-center gap-0 text-[14px] font-[600] leading-[45px] text-[var(--color1)]`}>
                      A-Z
                    </button>
                  </li>
                  <li>
                    <button
                      className={`flex w-full flex-row items-center justify-center gap-0 text-[14px] font-[600] leading-[45px] text-[var(--color1)]`}>
                      ㄱ-ㅎ
                    </button>
                  </li>
                  <li>
                    <button
                      className={`flex w-full flex-row items-center justify-center gap-0 text-[14px] font-[600] leading-[45px] text-[var(--color1)]`}>
                      럭셔리
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <div className={`mt-[20px]`}>
              <div className={`space-y-[40px] bg-[var(--color7)] py-[30px] px-[20px]`}>
                {Array.from(Array(5)).map((obj, idx) => {
                  return (
                    <Fragment key={idx}>
                      <div>
                        <div className={`Montserrat text-[18px] font-[600] text-[var(--color1)]`}>BRAND NAME</div>
                        <div className={`mt-[12px] text-[14px] font-[600] text-[var(--color5)]`}>브랜드 이름</div>
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

PageBrandSearch1.Layout = LayoutSub3;
export default PageBrandSearch1;
