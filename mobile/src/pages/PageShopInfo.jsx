import LayoutSub from '@/layouts/LayoutSub';
import { Fragment } from 'react';
import { Util } from '@/scripts/util';

function PageShopInfo() {
  return (
    <div className={`PageShopInfo`}>
      <div className={`H-Box mt-[20px]`}>
        <div className={`Inner`}>
          <section data-seq={`20230702173649093`}>
            <article className={`TabUi-1`}>
              <button>FAQ</button>
              <button>공지사항</button>
              <button>1:1 문의하기</button>
              <button className={`On`}>매장안내</button>
            </article>
          </section>
          <section data-seq={`20230720103556`} className={`mt-[20px]`}>
            <div className={`Title-3`}>
              <div className={`Txt1`}>매장안내</div>
              <div className={`Txt2`}>오프라인 매장 안내입니다.</div>
            </div>
            <div>
              <article className={`flex flex-row items-center border-t-[2px] border-t-[var(--color1)]`}>
                {Array.from(Array(3)).map((obj, idx) => {
                  return (
                    <Fragment key={idx}>
                      <button
                        className={`Montserrat ${
                          idx == 0 && `On`
                        } flex h-[50px] grow flex-row items-center justify-center border-b-[1px] border-solid border-b-[var(--color6)] text-[12px] font-[400] text-[var(--color3)] [&.On]:border-b-[var(--color1)] [&.On]:font-[700] [&.On]:text-[var(--color1)]`}>
                        BRAND NAME
                      </button>
                    </Fragment>
                  );
                })}
              </article>
              <div className={`mt-[20px]`}>
                <article className={`flex flex-row items-center justify-center gap-[10px]`}>
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
                </article>
                <div className={`mt-[10px]`}>
                  <div className={`InputUi InputLg w-full`} data-form-hei={`Md`}>
                    <input type={`text`} />
                    <button>
                      <img className={`Icon !w-[24px]`} src={`/icons/icon_59.svg`} alt={``} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section data-seq={`20230720110150`} className={`mt-[40px]`}>
            <div className={`text-[12px] font-[400] text-[var(--color1)]`}>전체 000개 매장</div>
            <div className={`mt-[10px]`}>
              <div className={`h-[590px] overflow-auto bg-[var(--color7)] pt-[26px] pl-[24px] pr-[19px] pb-[30px]`}>
                <div className={`space-y-[30px]`}>
                  {Array.from(Array(10)).map((obj, idx) => {
                    return (
                      <Fragment key={idx}>
                        <article className={`flex flex-row justify-between gap-[10px]`}>
                          <div className={`w-[215px]`}>
                            <div className={`pt-[3px] text-[14px] font-[600] text-[var(--color1)]`}>
                              마인드브릿지 롯데아울렛 서울역점
                            </div>
                            <div className={`mt-[8px] text-[14px] font-[400] leading-[20px] text-[var(--color1)]`}>
                              서울 중구 한강대로 405
                            </div>
                          </div>
                          <div>
                            <div
                              className={`min-w-[52px] rounded-[2px] bg-white px-[8px] text-[10px] font-[400] leading-[26px] text-[var(--color1)]`}>
                              서울지역
                            </div>
                          </div>
                        </article>
                        <article className={`mt-[20px] flex flex-row items-center justify-between gap-[8px]`}>
                          <button className={`ButtonMd ButtonStyle4 grow`}>
                            <div className={`CenterCenter w-[24px] aspect-square`}>
                              <img className={`Icon`} src={`icons/icon_62_1.svg`} width={`16`} height={`16`} alt={``} />
                            </div>
                            <div>전화걸기</div>
                          </button>
                          <button className={`ButtonMd ButtonStyle4 grow`}>
                            <div>
                              <img className={`Icon`} src={`icons/icon_62_2.svg`} alt={``} />
                            </div>
                            <div>매장위치</div>
                          </button>
                        </article>
                      </Fragment>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

PageShopInfo.Layout = LayoutSub;
export default PageShopInfo;
