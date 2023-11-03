import LayoutSub3 from '@/layouts/LayoutSub3';
import CustomSelect3 from '@/components/form/CustomSelect3';
import { Data } from '@/scripts/data_manager';
import { Util } from '@/scripts/util';
import { Fragment } from 'react';

function PageBrandSearch3() {
  return (
    <div className={`PageBrandSearch3`}>
      <section data-seq={`20230728184450`} className={`mt-[40px]`}>
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
      <section data-seq={`20230728184456`} className={`mt-[5px]`}>
        <CustomSelect3 optionsdata={Data.exhibitionList}></CustomSelect3>
      </section>
      <section data-seq={`20230728184459`} className={`mt-[54px]`}>
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
                className={`absolute top-full left-0 z-20 hidden w-full bg-white [&.On]:block`}>
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
              <div className={`relative bg-[var(--color7)] py-[30px] px-[20px]`}>
                <div className={`space-y-[30px]`}>
                  {['ㄱ', 'ㄴ', 'ㄷ', 'ㄹ', 'ㅁ', 'ㅂ'].map((obj, idx) => {
                    return (
                      <Fragment key={idx}>
                        <div className={`Montserrat text-[24px] font-[500] text-[var(--color3)]`}>{obj}</div>
                        <div className={`mt-[30px]`}>
                          <ul className={`space-y-[40px]`}>
                            {Array.from(Array(7)).map((obj, idx) => {
                              return (
                                <Fragment key={idx}>
                                  <li>
                                    <div>
                                      <div className={`Montserrat text-[18px] font-[600] text-[var(--color1)]`}>
                                        브랜드 이름
                                      </div>
                                      <div className={`mt-[12px] text-[14px] font-[600] text-[var(--color5)]`}>
                                        BRAND NAME
                                      </div>
                                    </div>
                                  </li>
                                </Fragment>
                              );
                            })}
                          </ul>
                        </div>
                      </Fragment>
                    );
                  })}
                </div>
                <div className={`absolute top-[30px] right-0 z-10`}>
                  <ul>
                    <li>
                      {['ㄱ', 'ㄴ', 'ㄷ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅅ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'].map(
                        (obj, idx) => {
                          return (
                            <Fragment key={idx}>
                              <button
                                className={`${
                                  idx == 0 && `On`
                                } relative flex h-[25px] w-[47px] flex-row items-center justify-center gap-0`}>
                                <div
                                  className={`text-[12px] font-[500] text-[var(--color3)] [.On_>_&]:text-[var(--color1)]`}>
                                  {obj}
                                </div>
                              </button>
                            </Fragment>
                          );
                        },
                      )}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

PageBrandSearch3.Layout = LayoutSub3;
export default PageBrandSearch3;
