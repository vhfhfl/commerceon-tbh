import CheckBox1 from '@/components/form/CheckBox1';
import LayoutSub from '@/layouts/LayoutSub';
import { Fragment } from 'react';

function PageMyPage12() {
  return (
    <div className={`PageMyPage12`}>
      <section data-seq={`20230810163531`} className={`mt-[40px] `}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <div>
              <article className={`CenterBetween`}>
                <CheckBox1 />
                <button className={`ButtonStyle4 ButtonSm`}>선택 브랜드 삭제</button>
              </article>
              <div className={`mt-[10px]`}>
                <ul className={`space-y-[40px] border-t-[1px] border-solid border-t-[var(--color6)] pt-[30px]`}>
                  {Array.from(Array(3)).map((obj, idx) => {
                    return (
                      <Fragment key={idx}>
                        <li>
                          <div className={`relative`}>
                            <div>
                              <img src={`https://picsum.photos/320/175.jpg?random=${idx}`} alt={``} />
                            </div>
                            <input type='checkbox' className={`ChkUi-1 absolute top-[0] left-[0] z-10 h-full w-full`} />

                            {/* <div className={`absolute top-0 left-0 z-10 h-full w-full pt-[14px] pl-[12px]`}>
                              <CheckBox1 />
                            </div> */}
                          </div>
                          <div className={`mt-[16px]`}>
                            <article className={`flex flex-row items-start justify-between gap-0`}>
                              <div>
                                <div className={`Montserrat text-[16px] font-[600] text-[var(--color1)]`}>
                                  BRAND NAME
                                </div>
                                <div className={`Montserrat mt-[8px] text-[14px] font-[400] text-[var(--color5)]`}>
                                  상품수 : 1,000
                                </div>
                              </div>
                              <div>
                                <article className={`CenterLeft`}>
                                  <img className={`Icon`} src={`/icons/icon_78.svg`} alt={``} />
                                  <div className={`text-[16px] font-[500] text-[var(--color1)]`}>10</div>
                                </article>
                              </div>
                            </article>
                          </div>
                        </li>
                      </Fragment>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

PageMyPage12.Layout = LayoutSub;
export default PageMyPage12;
