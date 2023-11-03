import ReviewSwiper2 from '@/swipers/ReviewSwiper2';
import { Fragment, useRef } from 'react';

function LayerBestReview1(props) {
  const { className = '' } = props;
  const ref_this = useRef();

  return (
    <>
      <div ref={ref_this} {...props} className={`${className} LayerBestReview1 w-[1200px]`}>
        <article className={`CenterRight`}>
          <button
            onClick={(evt) => {
              const el_this = ref_this.current;
              el_this.classList.add('hidden');
            }}>
            <img className={`Icon`} src={`/icons/icon_40.svg`} alt={`닫기 아이콘`} />
          </button>
        </article>
        <div className={`mt-[20px] bg-white`}>
          <article className={`grid grid-cols-2 items-center gap-0`}>
            <div className={`h-full bg-[var(--color1)]`}>
              <div className={`h-full`}>
                <ReviewSwiper2 />
              </div>
            </div>
            <div className={`bg-white p-[30px]`}>
              <a className={`block`} href={`https://www.google.com`} target={`_blank`}>
                <article className={`grid grid-cols-[75px_1fr] items-start gap-0`}>
                  <div>
                    <img src={`https://picsum.photos/75/75.jpg?random=1`} alt={``} />
                  </div>
                  <div className={`ml-[12px]`}>
                    <div className={`text-[16px] font-[600] text-[var(--color1)]`}>와이드쿨맥스 밴딩슬랙스</div>
                    <div className={`mt-[8px]`}>
                      <article className={`CenterLeft`}>
                        <img className={`Icon`} src={`/icons/icon_39_1.svg`} alt={``} />
                        <img className={`Icon`} src={`/icons/icon_39_1.svg`} alt={``} />
                        <img className={`Icon`} src={`/icons/icon_39_1.svg`} alt={``} />
                        <img className={`Icon`} src={`/icons/icon_39_2.svg`} alt={``} />
                        <img className={`Icon`} src={`/icons/icon_39_3.svg`} alt={``} />
                        <div className={`ml-[9px] text-[12px] font-[600] text-[var(--color1)]`}>3.5</div>
                      </article>
                    </div>
                    <div className={`mt-[20px]`}>
                      <div className={`text-[12px] font-[500] text-[var(--color1)]`}>리뷰: 341개</div>
                    </div>
                  </div>
                </article>
              </a>
              <div className={`mt-[20px]`}>
                <div className={`border-t-[1px] border-solid border-t-[var(--color6)] pt-[20px]`}>
                  <div>
                    <article className={`CenterBetween`}>
                      <div>
                        <article className={`CenterLeft`}>
                          <img className={`Icon`} src={`/icons/icon_39_1.svg`} alt={``} />
                          <img className={`Icon`} src={`/icons/icon_39_1.svg`} alt={``} />
                          <img className={`Icon`} src={`/icons/icon_39_1.svg`} alt={``} />
                          <img className={`Icon`} src={`/icons/icon_39_2.svg`} alt={``} />
                          <img className={`Icon`} src={`/icons/icon_39_3.svg`} alt={``} />
                          <div className={`ml-[9px] text-[12px] font-[600] text-[var(--color1)]`}>맘에 들어요</div>
                        </article>
                      </div>
                      <div className={`Montserrat text-[12px] font-[400] text-[var(--color5)]`}>2023-08-09</div>
                    </article>
                    <div className={`mt-[14px] text-[16px] font-[600]`}>
                      <span className={`text-[var(--color2)]`}>BEST</span>
                      <span className={`ml-[4px] text-[var(--color1)]`}>이 상품 너무 좋습니다.</span>
                    </div>
                  </div>
                  <div className={`mt-[18px]`}>
                    <div className={`bg-[var(--color7)] p-[18px]`}>
                      <div className={`text-[12px] font-[400] text-[var(--color1)]`}>
                        <span className={`font-[600]`}>asd******</span> 님의 리뷰입니다.
                      </div>
                      <div className={`mt-[17px]`}>
                        <ul
                          className={`flex flex-row flex-wrap items-center gap-x-[24px] gap-y-[16px] text-[12px] font-[400] text-[var(--color5)]`}>
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
                    <div className={`mt-[20px]`}>
                      <div className={`text-[14px] font-[400] leading-[24px] text-[var(--color5)] line-clamp-2`}>
                        별빛이 이름자 추억과 오는 쉬이 새겨지는 멀리 봅니다. 그리고 아름다운 별 어머님, 아직 소녀들의
                        나의 가을 까닭입니다. 파란 속의 하나에 나의 아스라히 너무나 청춘이 이름자를 다 있습니다. 노루,
                        무덤 이름을 까닭입니다. 경, 자랑처럼 추억과 강아지, 내일 하나 하나에 밤이 봅니다. 슬퍼하는 시와
                        별 멀듯이, 걱정도 오면 파란 별 다하지 있습니다. 까닭이요, 그러나 것은 파란 소녀들의 둘
                        까닭입니다. 위에도 없이 하나에 까닭입니다. 하나에 딴은 이웃 듯합니다. 것은 계집애들의 무엇인지
                        이네들은 멀리 잔디가 나는 무덤 까닭입니다. 하나 릴케 다 새겨지는 어머니, 말 내린 별에도 쉬이
                        있습니다.
                      </div>
                      <div className={`mt-[4px]`}>
                        <button className={`text-[12px] font-[500] text-[var(--color1)]`}>더보기</button>
                      </div>
                    </div>
                    <div className={`mt-[30px]`}>
                      <article className={`CenterBetween pr-[40px]`}>
                        <div>
                          <ul className={`flex flex-row items-center gap-[40px] text-[0]`}>
                            <li>
                              <div className={`CenterLeft`}>
                                <button className={`CenterLeft`}>
                                  <span>
                                    <img className={`Icon`} src={`/icons/icon_50_1.svg`} alt={``} />
                                  </span>
                                  <span className={`text-[12px] font-[400] text-[var(--color5)]`}>도움돼요 0</span>
                                </button>
                                <button className={`CenterLeft ml-[16px]`}>
                                  <span>
                                    <img className={`Icon`} src={`/icons/icon_50_2.svg`} alt={``} />
                                  </span>
                                  <span className={`text-[12px] font-[400] text-[var(--color5)]`}>도움안돼요 0</span>
                                </button>
                              </div>
                            </li>
                            <li>
                              <div className={`h-[12px] w-[1px] bg-[var(--color3)] text-[0]`}>Line</div>
                            </li>
                            <li className={`On`}>
                              <button
                                className={`text-[12px] font-[400] text-[var(--color5)] [.On_>_&]:text-[var(--color1)]`}>
                                댓글 1
                              </button>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <button className={`CenterLeft text-[12px] font-[400] text-[var(--color5)]`}>
                            <span>
                              <img className={`Icon`} src={`/icons/icon_50_3.svg`} alt={``} />
                            </span>
                            <span>숨김 · 신고</span>
                          </button>
                        </div>
                      </article>
                    </div>
                    <div className={`mt-[14px]`}>
                      <div className={`bg-[var(--color7)] py-[18px] px-[24px] leading-[21px]`}>
                        <div className={`Montserrat text-[10px] font-[600] text-[var(--color1)]`}>TBH SHOP</div>
                        <div className={`mt-[4px]`}>
                          <div className={`text-[14px] font-[400] text-[var(--color5)]`}>
                            안녕하세요. asd****** 고객님. 저희 TBH SHOP을 이용해 주셔서 감사합니다.
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
                </div>
              </div>
              <div className={`mt-[20px]`}>
                <div className={`border-t-[1px] border-solid border-t-[var(--color6)] pt-[58px]`}>
                  <div className={`text-[16px] font-[600] text-[var(--color1)]`}>이 상품의 다른 리뷰</div>
                  <div className={`mt-[20px]`}>
                    <article className={`grid grid-cols-5 items-center justify-center gap-[10px]`}>
                      {Array.from(Array(15)).map((obj, idx) => {
                        return (
                          <Fragment key={idx}>
                            <a href={`https://www.google.com`} target={`_blank`}>
                              <img src={`https://picsum.photos/100/100.jpg?random=${idx}`} alt={``} />
                            </a>
                          </Fragment>
                        );
                      })}
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}

export default LayerBestReview1;
