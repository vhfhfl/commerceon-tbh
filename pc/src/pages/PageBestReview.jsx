import CheckBox1 from '@/components/form/CheckBox1';
import LayoutBasic from '@/layouts/LayoutBasic';
import Paging1 from '@/modules/Paging1';
import ReviewItem1 from '@/modules/ReviewItem1';
import { Fragment } from 'react';

function PageBestReview() {
  return (
    <div className={`PageBestReview`}>
      <div className={`H-Box`}>
        <div className={`Inner`}>
          <section data-seq={`20230712140819294`} className={`mt-[104px]`}>
            <div className={`Montserrat text-center text-[36px] font-[700] text-[var(--color1)]`}>베스트 리뷰</div>
            <div className={`mt-[130px]`}>
              <div className={`mx-auto mt-[28px] w-[1400px]`}>
                <article
                  className={`grid grid-cols-[auto_1fr] items-center justify-center border-y-[1px] border-solid border-[var(--color6)] py-[30px]`}>
                  <div className={`pl-[70px] pr-[84px]`}>
                    <article className={`grid grid-cols-[1fr_auto] items-center`}>
                      <div>
                        <div className={`flex flex-row items-center gap-[5px]`}>
                          <div>
                            <img className={`Icon`} src={`/icons/icon_37.svg`} alt='' />
                          </div>
                          <div className={`Montserrat text-[50px] font-[600] text-[var(--color2)]`}>3.5</div>
                        </div>
                        <div className={`mt-[17px] text-[12px] font-[400] text-[var(--color1)]`}>
                          93%의 구매자가 이 상품을 좋아합니다.
                        </div>
                      </div>
                      <button className={`ButtonLg ButtonStyle2 Round ml-[70px]`}>상품리뷰 작성하기</button>
                    </article>
                  </div>
                  <div className={`border-l-[1px] border-solid border-[var(--color6)] pl-[82px]`}>
                    <ul className={`flex flex-row flex-wrap items-center gap-[7px]`}>
                      <li>
                        <article
                          className={`On grid grid-cols-[auto_1fr_auto] items-center gap-[15px] text-[12px] font-[400] text-[var(--color3)] [&.On]:font-[600] [&.On]:text-[var(--color1)]`}>
                          <div className={`w-[55px]`}>아주 좋아요</div>
                          <div className={`inline-block h-[16px] w-[575px] overflow-hidden bg-[var(--color7)]`}>
                            <div className={`relative h-full w-[70%] bg-[var(--color2)]`}></div>
                          </div>
                          <div className={`Montserrat`}>177</div>
                        </article>
                      </li>
                      <li>
                        <article
                          className={`grid grid-cols-[auto_1fr_auto] items-center gap-[15px] text-[12px] font-[400] text-[var(--color3)]`}>
                          <div className={`w-[55px]`}>맘에 들어요</div>
                          <div className={`inline-block h-[16px] w-[575px] overflow-hidden bg-[var(--color7)]`}>
                            <div className={`relative h-full w-[35%] bg-[var(--color2)]`}></div>
                          </div>
                          <div className={`Montserrat`}>100</div>
                        </article>
                      </li>
                      <li>
                        <article
                          className={`grid grid-cols-[auto_1fr_auto] items-center gap-[15px] text-[12px] font-[400] text-[var(--color3)]`}>
                          <div className={`w-[55px]`}>보통이에요</div>
                          <div className={`inline-block h-[16px] w-[575px] overflow-hidden bg-[var(--color7)]`}>
                            <div className={`relative h-full w-[20%] bg-[var(--color2)]`}></div>
                          </div>
                          <div className={`Montserrat`}>40</div>
                        </article>
                      </li>
                      <li>
                        <article
                          className={`grid grid-cols-[auto_1fr_auto] items-center gap-[15px] text-[12px] font-[400] text-[var(--color3)]`}>
                          <div className={`w-[55px]`}>그냥 그래요</div>
                          <div className={`inline-block h-[16px] w-[575px] overflow-hidden bg-[var(--color7)]`}>
                            <div className={`relative h-full w-[5%] bg-[var(--color2)]`}></div>
                          </div>
                          <div className={`Montserrat`}>10</div>
                        </article>
                      </li>
                      <li>
                        <article
                          className={`grid grid-cols-[auto_1fr_auto] items-center gap-[15px] text-[12px] font-[400] text-[var(--color3)]`}>
                          <div className={`w-[55px]`}>별로에요</div>
                          <div className={`inline-block h-[16px] w-[575px] overflow-hidden bg-[var(--color7)]`}>
                            <div className={`relative h-full w-[0%] bg-[var(--color2)]`}></div>
                          </div>
                          <div className={`Montserrat`}>0</div>
                        </article>
                      </li>
                    </ul>
                  </div>
                </article>
                <div className={`mt-[16px]`}>
                  <div className={`flex flex-row items-center justify-between`}>
                    <div className={`text-[14px] font-[500] text-[var(--color1)]`}>포토 & 동영상 (65)</div>
                    <a href={`https://www.google.com`} target={`_blank`} className={`flex flex-row items-center`}>
                      <div className={`text-[12px] font-[400] text-[var(--color5)]`}>전체보기</div>
                      <div>
                        <img className={`Icon`} src={`/icons/icon_38.svg`} alt='' />
                      </div>
                    </a>
                  </div>
                  <article className={`mt-[16px] grid grid-cols-9 items-center justify-between gap-[10px]`}>
                    {Array.from(Array(9)).map((obj, idx) => {
                      return (
                        <Fragment key={idx}>
                          <img
                            className={`aspect-square h-full w-full object-cover`}
                            src={`https://picsum.photos/145/145.jpg?random=${idx}`}
                            alt=''
                          />
                        </Fragment>
                      );
                    })}
                  </article>
                </div>
                <div className={`mt-[16px] border-t-[1px] border-solid border-t-[var(--color6)] pt-[16px]`}>
                  <article className={`grid grid-flow-col items-center justify-between gap-[0]`}>
                    <div className={`flex flex-row items-center gap-[20px]`}>
                      {['최신순', '추천순', '평점순'].map((obj, idx) => {
                        return (
                          <Fragment key={idx}>
                            <button
                              className={`${
                                idx == 0 && `On`
                              } text-[14px] font-[600] text-[var(--color3)] [&.On]:text-[var(--color1)]`}>
                              {obj}
                            </button>
                          </Fragment>
                        );
                      })}
                    </div>
                    <div>
                      <div className={`flex flex-row items-center`}>
                        <div>
                          <CheckBox1 size={`Sm`}>
                            <span className={`text-[var(--color5)]`}>포토/동영상 먼저보기</span>
                          </CheckBox1>
                        </div>
                        <div className={`ml-[20px]`}>
                          <div className={`TextInput3 w-[270px]`}>
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
                              placeholder={`리뷰 키워드 검색`}
                            />
                            <button className={`w-[24px]`}>
                              <img src={`/icons/zco_89.svg`} alt={``} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
                <div className={`mt-[16px] border-t-[1px] border-solid border-t-[var(--color6)] pt-[16px]`}>
                  <div className={`flex flex-row items-center gap-[8px]`}>
                    <select className={`SelectUI1`}>
                      <option>별점</option>
                    </select>
                    <select className={`SelectUI1`}>
                      <option>키</option>
                    </select>
                    <select className={`SelectUI1`}>
                      <option>몸무게</option>
                    </select>
                    <select className={`SelectUI1`}>
                      <option>평소사이즈-상의</option>
                    </select>
                    <select className={`SelectUI1`}>
                      <option>평소사이즈-하의</option>
                    </select>
                  </div>
                </div>
                <div className={`mt-[16px]`}>
                  <ReviewItem1 />
                </div>
                <div className={`mt-[50px]`}>
                  <Paging1 />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

PageBestReview.Layout = LayoutBasic;
export default PageBestReview;
