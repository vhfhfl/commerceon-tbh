import LayoutBasic from '@/layouts/LayoutBasic';
import MyPageAside2 from '@/modules/MyPageAside2';
import { Fragment } from 'react';
import { Util } from '@/scripts/util';

function PageShopInfo() {
  return (
    <div className={`PageShopInfo`}>
      <div className={`SubContainer mt-[120px]`}>
        <article className={`grid grid-cols-[290px_1fr] gap-[0]`}>
          <div>
            <MyPageAside2 />
          </div>
          <div>
            <section data-seq={`20230626160608650`} className={``}>
              <div className={`Title-1`}>
                <div className={`Txt1`}>매장안내</div>
                <div className={`Txt2`}>오프라인 매장 안내입니다.</div>
              </div>
              <div className={`mt-[16px]`}>
                <article className={`flex flex-row items-center border-t-[3px] border-t-[var(--color1)]`}>
                  {Array.from(Array(3)).map((obj, idx) => {
                    return (
                      <Fragment key={idx}>
                        <button
                          className={`Montserrat ${
                            idx == 0 && `On`
                          } flex h-[62px] grow flex-row items-center justify-center border-b-[1px] border-solid border-b-[var(--color6)] text-[16px] font-[400] text-[var(--color3)] [&.On]:border-b-[var(--color1)] [&.On]:font-[700] [&.On]:text-[var(--color1)]`}>
                          BRAND NAME
                        </button>
                      </Fragment>
                    );
                  })}
                </article>
                <article className={`mt-[34px] grid grid-cols-[370px_1fr] gap-[18px]`}>
                  <div>
                    <div className={`flex flex-row items-center justify-center gap-[10px]`}>
                      <div
                        className={`SelectBox1 grow`}
                        onClick={(evt) => {
                          const target = evt.target.closest('.SelectBox1');
                          Util.toggleClass(target, 'On');
                        }}>
                        <button>
                          <div>직영점</div>
                        </button>
                        <div className={`Options`}>
                          <button>직영점</button>
                          <button>직영점</button>
                          <button>직영점</button>
                        </div>
                      </div>
                      <div
                        className={`SelectBox1 grow`}
                        onClick={(evt) => {
                          const target = evt.target.closest('.SelectBox1');
                          Util.toggleClass(target, 'On');
                        }}>
                        <button>
                          <div>서울지역</div>
                        </button>
                        <div className={`Options`}>
                          <button>서울지역</button>
                          <button>서울지역</button>
                          <button>서울지역</button>
                        </div>
                      </div>
                    </div>
                    <div className={`mt-[10px]`}>
                      <div className={`TextInput3 w-full`}>
                        <input
                          className={`w-0 grow`}
                          type={`text`}
                          onFocus={(evt) => {
                            const el_parent = evt.target.parentElement;
                            el_parent.classList.add('focus');
                          }}
                          onBlur={(evt) => {
                            const el_parent = evt.target.parentElement;
                            el_parent.classList.remove('focus');
                          }}
                        />
                        <button className={`w-[20px]`}>
                          <img src={`/icons/zco_70.svg`} alt={``} />
                        </button>
                      </div>
                    </div>
                    <div
                      className={`mt-[23px] h-[450px] overflow-auto bg-[var(--color7)] pt-[26px] pl-[24px] pr-[19px] pb-[39px]`}>
                      <div className={`space-y-[30px]`}>
                        {Array.from(Array(10)).map((obj, idx) => {
                          return (
                            <Fragment key={idx}>
                              <article className={`flex flex-row justify-between gap-[10px]`}>
                                <div className={`w-[240px]`}>
                                  <div className={`pt-[3px] text-[14px] font-[600] text-[var(--color1)]`}>
                                    마인드브릿지 롯데아울렛 서울역점
                                  </div>
                                  <div
                                    className={`mt-[17px] text-[14px] font-[400] leading-[20px] text-[var(--color1)]`}>
                                    서울 중구 한강대로 405
                                    <br />
                                    02-1234-5567
                                  </div>
                                </div>
                                <div>
                                  <div
                                    className={`rounded-[2px] bg-white px-[15px] text-[12px] font-[400] leading-[36px] text-[var(--color1)]`}>
                                    서울지역
                                  </div>
                                </div>
                              </article>
                            </Fragment>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className={`h-full bg-gray-200`}></div>
                  </div>
                </article>
              </div>
            </section>
          </div>
        </article>
      </div>
    </div>
  );
}

PageShopInfo.Layout = LayoutBasic;
export default PageShopInfo;
