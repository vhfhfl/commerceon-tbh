import LayoutSub from '@/layouts/LayoutSub';
import { Util } from '@/scripts/util';
import { Fragment } from 'react';

function PageMyPage17() {
  return (
    <div className={`PageMyPage17`}>
      <section data-seq={`20230811172144`} className={`mt-[40px]`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <article className={`CenterBetween`}>
              <div className={`Title-3`}>
                <div className={`Txt1`}>사용 가능한 마일리지</div>
              </div>
              <div className={`text-[14px] font-[700] text-[var(--color2)]`}>10,000원</div>
            </article>
            <div className={`border-t-2 border-solid border-t-[var(--color1)] pt-[8px]`}>
              <div className={`text-[12px] font-[600] text-[var(--color1)]`}>마일리지 내역</div>
              <div className={`mt-[24px]`}>
                <div
                  className={`SelectBox1 w-full`}
                  onClick={(evt) => {
                    const target = evt.target.closest('.SelectBox1');
                    Util.toggleClass(target, 'On');
                  }}>
                  <button>
                    <div>최근 15일</div>
                  </button>
                  <div className={`Options`}>
                    <button>오늘</button>
                    <button>최근 7일</button>
                    <button>최근 15일</button>
                    <button>1개월</button>
                    <button>3개월</button>
                    <button>6개월</button>
                    <button>1년</button>
                  </div>
                </div>
              </div>
              <div className={`mt-[20px]`}>
                <div className={`text-center text-[12px] text-[var(--color1)]`}>
                  <article
                    className={`grid h-[28px] grid-cols-[69px_1fr_69px] items-center gap-0 font-[600] leading-[28px]`}>
                    <div>일자</div>
                    <div>내용</div>
                    <div>적립/사용</div>
                  </article>
                  <div>
                    <ul
                      className={`divide-y-[1px] divide-solid divide-[var(--color6)] border-y-[1px] border-solid border-y-[var(--color6)]`}>
                      {Array.from(Array(5)).map((obj, idx) => {
                        return (
                          <Fragment key={idx}>
                            <li className={`py-[14px]`}>
                              <article className={`grid grid-cols-[69px_1fr_69px] items-start gap-0 font-[400] leading-[18px]`}>
                                <div>2023-05-17</div>
                                <div className={`font-[600]`}>
                                  상품 구매시 마일리지 지급
                                  <br />
                                  2024-05-15 23:59까지
                                </div>
                                <div>+190원</div>
                              </article>
                            </li>
                          </Fragment>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
              <div className={`mt-[30px]`}>
                <button className={`ButtonStyle1 ButtonLg Round w-full`}>내역 더보기</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

PageMyPage17.Layout = LayoutSub;
export default PageMyPage17;
