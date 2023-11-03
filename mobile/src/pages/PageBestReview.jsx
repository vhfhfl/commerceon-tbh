import LayoutSub from '@/layouts/LayoutSub';
import { Util } from '@/scripts/util';
import { Fragment } from 'react';

function PageBestReview() {
  return (
    <div className={`PageBestReview`}>
      <section
        data-seq={`20230620153919915`}
        className={`mt-[40px] border-t-[1px] border-solid border-[var(--color6)]`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <article className={`flex flex-row items-center justify-between py-[16px]`}>
              <div
                className={`SelectBox1 !border-none`}
                onClick={(evt) => {
                  const target = evt.target.closest('.SelectBox1');
                  Util.toggleClass(target, 'On');
                }}>
                <button>
                  <div>최신순</div>
                </button>
                <div className={`Options`}>
                  <button>추천순</button>
                  <button>평점순</button>
                </div>
              </div>
              <div>
                <button className={`CenterLeft`}>
                  <img className={`Icon`} src={`/icons/icon_72.svg`} alt={``} />
                  <span className={`text-[12px] font-[400] text-[var(--color5)]`}>검색</span>
                </button>
              </div>
            </article>
          </div>
        </div>
      </section>
      <section data-seq={`20230808161740`} className={`border-t-[1px] border-solid border-[var(--color6)]`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <article className={`flex flex-row items-center gap-[8px] overflow-auto py-[16px]`}>
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
              <select className={`SelectUI1`}>
                <option>사이즈</option>
              </select>
            </article>
          </div>
        </div>
      </section>
      <section
        data-seq={`20230808161817`}
        className={`divide-y-[1px] divide-[var(--color6)] border-t-[1px] border-solid border-t-[var(--color6)]`}>
        {Array.from(Array(2)).map((obj, idx) => {
          return (
            <Fragment key={idx}>
              <div className={`H-Box`}>
                <div className={`Inner`}>
                  <div className={`py-[18px]`}>
                    <article className={`CenterBetween`}>
                      <div className={`flex flex-row items-center gap-[9px]`}>
                        <div className={`inline-flex flex-row items-center`}>
                          {Array.from(Array(5)).map((obj, idx) => {
                            let src;
                            if (idx == 4) {
                              src = '/icons/icon_30_2.svg';
                            } else {
                              src = '/icons/icon_30_1.svg';
                            }
                            return (
                              <Fragment key={idx}>
                                <img className={`Icon`} src={src} alt={`별`} />
                              </Fragment>
                            );
                          })}
                        </div>
                        <div className={`text-[12px] font-[400] text-[var(--color1)]`}>맘에 들어요</div>
                      </div>
                      <div className={`Montserrat text-[11px] font-[400] text-[var(--color1)]`}>2021.03.02</div>
                    </article>
                    <div className={`mt-[18px]`}>
                      <a className={`block`} href={`https://www.google.com`} target={`_blank`}>
                        <article className={`grid grid-cols-[70px_1fr] items-start gap-0`}>
                          <div>
                            <img src={`https://picsum.photos/70/70.jpg?random=1`} alt={``} />
                          </div>
                          <div className={`ml-[12px]`}>
                            <div className={`text-[12px] font-[600] text-[var(--color1)]`}>와이드쿨맥스 밴딩슬랙스</div>
                          </div>
                        </article>
                      </a>
                      <div className={`mt-[10px]`}>
                        <div className={`bg-[var(--color7)] p-[13px]`}>
                          <div className={`text-[10px] font-[400] text-[var(--color1)]`}>
                            <span className={`font-[600]`}>asd******</span> 님의 리뷰입니다.
                          </div>
                          <div className={`mt-[17px]`}>
                            <ul
                              className={`flex flex-row flex-wrap items-center gap-x-[20px] gap-y-[12px] text-[10px] font-[400] text-[var(--color5)]`}>
                              <li>
                                <span className={`font-[700]`}>키</span>
                                <span className={`ml-[4px]`}>158cm</span>
                              </li>
                              <li>
                                <span className={`font-[700]`}>몸무게</span>
                                <span className={`ml-[4px]`}>57~59kg</span>
                              </li>
                              <li>
                                <span className={`font-[700]`}>평소사이즈-상의</span>
                                <span className={`ml-[4px]`}>L</span>
                              </li>
                              <li>
                                <span className={`font-[700]`}>평소사이즈-하의</span>
                                <span className={`ml-[4px]`}>29</span>
                              </li>
                              <li>
                                <span className={`font-[700]`}>색상</span>
                                <span className={`ml-[4px]`}>White</span>
                              </li>
                              <li>
                                <span className={`font-[700]`}>사이즈</span>
                                <span className={`ml-[4px]`}>105</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className={`mt-[18px]`}>
                          <div className={`text-[12px] font-[600]`}>
                            <span className={`text-[#D73948]`}>BEST</span>
                            <span className={`ml-[4px] text-[var(--color1)]`}>이 상품 너무 좋습니다.</span>
                          </div>
                          <div className={`mt-[20px]`}>
                            <div className={`text-[12px] font-[400] leading-[21px] text-[var(--color5)] line-clamp-2`}>
                              별빛이 이름자 추억과 오는 쉬이 새겨지는 멀리 봅니다. 그리고 아름다운 별 어머님, 아직
                              소녀들의 나의 가을 까닭입니다. 파란 속의 하나에 나의 아스라히 너무나 청춘이 이름자를 다
                              있습니다. 노루, 무덤 이름을 까닭입니다. 경, 자랑처럼 추억과 강아지, 내일 하나 하나에 밤이
                              봅니다. 슬퍼하는 시와 별 멀듯이, 걱정도 오면 파란 별 다하지 있습니다. 까닭이요, 그러나
                              것은 파란 소녀들의 둘 까닭입니다. 위에도 없이 하나에 까닭입니다. 하나에 딴은 이웃
                              듯합니다. 것은 계집애들의 무엇인지 이네들은 멀리 잔디가 나는 무덤 까닭입니다. 하나 릴케 다
                              새겨지는 어머니, 말 내린 별에도 쉬이 있습니다.
                            </div>
                            <div className={`mt-[4px]`}>
                              <button className={`text-[12px] font-[500] text-[var(--color1)]`}>더보기</button>
                            </div>
                            <div className={`mt-[34px]`}>
                              <div>
                                <ul className={`flex flex-row items-center gap-[20px] text-[0]`}>
                                  <li className={`On`}>
                                    <button
                                      className={`text-[12px] font-[400] text-[var(--color5)] [.On_>_&]:text-[var(--color1)]`}>
                                      댓글 1
                                    </button>
                                  </li>
                                  <li>
                                    <a className={`text-[12px] font-[400] text-[var(--color5)]`} href={`https://www.google.com`} target={`_blank`}>리뷰 : 341개</a>
                                  </li>
                                </ul>
                                <div className={`mt-[14px]`}>
                                  <div className={`bg-[var(--color7)] p-[20px] leading-[21px]`}>
                                    <div className={`Montserrat text-[10px] font-[600] text-[var(--color1)]`}>
                                      TBH SHOP
                                    </div>
                                    <div className={`mt-[4px]`}>
                                      <div className={`text-[12px] font-[400] text-[var(--color5)]`}>
                                        안녕하세요. asd****** 고객님.
                                        <br />
                                        저희 TBH SHOP을 이용해 주셔서 감사합니다.
                                        <br />
                                        소중한 시간을 내어 정성스러운 포토리뷰를 남겨주셔서 감사합니다.
                                        <br /> 앞으로도 TBH SHOP에서 즐거운 쇼핑하시기 바랍니다.
                                        <br />
                                        감사합니다.
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className={`mt-[14px]`}>
                                <div className={`border-t-[1px] border-solid border-t-[var(--color6)] pt-[6px]`}>
                                  <ul className={`CenterBetween`}>
                                    <li>
                                      <div className={`CenterLeft`}>
                                        <button className={`CenterLeft`}>
                                          <span>
                                            <img className={`Icon`} src={`/icons/icon_73_1.svg`} alt={``} />
                                          </span>
                                          <span className={`text-[12px] font-[400] text-[var(--color5)]`}>
                                            도움돼요 0
                                          </span>
                                        </button>
                                        <button className={`CenterLeft ml-[16px]`}>
                                          <span>
                                            <img className={`Icon`} src={`/icons/icon_73_2.svg`} alt={``} />
                                          </span>
                                          <span className={`text-[12px] font-[400] text-[var(--color5)]`}>
                                            도움안돼요 0
                                          </span>
                                        </button>
                                      </div>
                                    </li>
                                    <li>
                                      <div>
                                        <button className={`CenterLeft text-[12px] font-[400] text-[var(--color5)]`}>
                                          <span>
                                            <img className={`Icon`} src={`/icons/icon_73_3.svg`} alt={``} />
                                          </span>
                                          <span>숨김 · 신고</span>
                                        </button>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Fragment>
          );
        })}
      </section>
    </div>
  );
}

PageBestReview.Layout = LayoutSub;
export default PageBestReview;
