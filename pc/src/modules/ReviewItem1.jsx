import { Fragment, useRef } from 'react';

function ReviewItem1(props) {
  const { className = '', idx } = props;
  const ref_this = useRef();
  return (
    <>
      <ul
        ref={ref_this}
        className={`ReviewItem1 ${className} divide-y-[1px] divide-solid divide-[var(--color6)] border-y-[1px] border-solid border-[var(--color6)] `}>
        {Array.from(Array(2)).map((obj, idx) => {
          return (
            <Fragment key={idx}>
              <li className={`py-[26px]`}>
                <div>
                  <article className={`grid grid-cols-[1fr_auto] items-start justify-between gap-[10px]`}>
                    <div>
                      <article className={`CenterLeft`}>
                        <img className={`Icon`} src={`/icons/icon_39_1.svg`} alt={``} />
                        <img className={`Icon`} src={`/icons/icon_39_1.svg`} alt={``} />
                        <img className={`Icon`} src={`/icons/icon_39_1.svg`} alt={``} />
                        <img className={`Icon`} src={`/icons/icon_39_2.svg`} alt={``} />
                        <img className={`Icon`} src={`/icons/icon_39_3.svg`} alt={``} />
                        <div className={`ml-[9px] text-[12px] font-[600] text-[var(--color1)]`}>3.5</div>
                      </article>
                      <div className={`mt-[25px]`}>
                        <article className={`grid grid-cols-[120px_1fr] items-start gap-0`}>
                          <div>
                            <img
                              className={`aspect-square w-full object-cover`}
                              src={`https://picsum.photos/120/120.jpg?random=1`}
                              alt={``}
                            />
                          </div>
                          <div className={`ml-[15px] text-[12px]`}>
                            <div className={`font-[600]`}>
                              <span className={`text-[var(--color2)]`}>BEST</span>
                              <span className={`ml-[4px] text-[var(--color1)]`}>이 상품 너무 좋습니다.</span>
                            </div>
                            <div className={`mt-[8px]`}>
                              <a
                                className={`font-[400] leading-[14px] text-[var(--color1)]`}
                                href={`https://www.google.com`}
                                target={`_blank`}>
                                와이드쿨맥스 밴딩슬랙스
                              </a>
                            </div>
                            <div className={`mt-[10px]`}>
                              <div className={`w-[690px] font-[400] leading-[21px] text-[var(--color5)] line-clamp-2`}>
                                별빛이 이름자 추억과 오는 쉬이 새겨지는 멀리 봅니다. 그리고 아름다운 별 어머님, 아직
                                소녀들의 나의 가을 까닭입니다. 파란 속의 하나에 나의 아스라히 너무나 청춘이 이름자를 다
                                있습니다. 노루, 무덤 이름을 까닭입니다. 경, 자랑처럼 추억과 강아지, 내일 하나 하나에
                                밤이 봅니다. 슬퍼하는 시와 별 멀듯이, 걱정도 오면 파란 별 다하지 있습니다. 까닭이요,
                                그러나 것은 파란 소녀들의 둘 까닭입니다. 위에도 없이 하나에 까닭입니다. 하나에 딴은 이웃
                                듯합니다. 것은 계집애들의 무엇인지 이네들은 멀리 잔디가 나는 무덤 까닭입니다. 하나 릴케
                                다 새겨지는 어머니, 말 내린 별에도 쉬이 있습니다.
                              </div>
                            </div>
                            <div className={`mt-[10px]`}>
                              <button className={`font-[500] text-[var(--color1)]`}>더보기</button>
                            </div>
                          </div>
                        </article>
                      </div>
                    </div>
                    <div className={`w-[160px]`}>
                      <div className={`text-[12px] font-[400] text-[var(--color5)]`}>작성자</div>
                      <div className={`Montserrat mt-[6px] text-[11px] font-[400] text-[var(--color1)]`}>asd******</div>
                      <div className={`mt-[16px]`}>
                        <div className={`text-[12px] text-[var(--color1)]`}>
                          <span className={`font-[700]`}>키</span>
                          <span className={`ml-[4px] font-[400]`}>158cm</span>
                        </div>
                        <div className={`mt-[8px] text-[12px] text-[var(--color1)]`}>
                          <span className={`font-[700]`}>몸무게</span>
                          <span className={`ml-[4px] font-[400]`}>57~59kg</span>
                        </div>
                        <div className={`mt-[8px] text-[12px] text-[var(--color1)]`}>
                          <span className={`font-[700]`}>평소사이즈-상의</span>
                          <span className={`ml-[4px] font-[400]`}>L</span>
                        </div>
                        <div className={`mt-[8px] text-[12px] text-[var(--color1)]`}>
                          <span className={`font-[700]`}>평소사이즈-하의</span>
                          <span className={`ml-[4px] font-[400]`}>29</span>
                        </div>
                        <div className={`mt-[8px] text-[12px] text-[var(--color1)]`}>
                          <span className={`font-[700]`}>색상</span>
                          <span className={`ml-[4px] font-[400]`}>White</span>
                        </div>
                        <div className={`mt-[8px] text-[12px] text-[var(--color1)]`}>
                          <span className={`font-[700]`}>사이즈</span>
                          <span className={`ml-[4px] font-[400]`}>105</span>
                        </div>
                      </div>
                      <div className={`Montserrat mt-[16px] text-[11px] font-[400] text-[var(--color1)]`}>
                        2021.03.02
                      </div>
                    </div>
                  </article>
                  <div>
                    <article className={`mt-[16px] grid grid-cols-8 items-center justify-between gap-[15px]`}>
                      {Array.from(Array(3)).map((obj, idx) => {
                        return (
                          <Fragment key={idx}>
                            <img
                              className={`aspect-square h-full w-full object-cover`}
                              src={`https://picsum.photos/120/120.jpg?random=${idx}`}
                              alt={``}
                            />
                          </Fragment>
                        );
                      })}
                    </article>
                  </div>
                  <div className={`mt-[30px]`}>
                    <article className={`CenterBetween pr-[100px]`}>
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
                          <li>
                            <div className={`h-[12px] w-[1px] bg-[var(--color3)] text-[0]`}>Line</div>
                          </li>
                          <li>
                            <a
                              className={`text-[12px] font-[400] text-[var(--color5)]`}
                              href={`https://www.google.com`}
                              target={`_blank`}>
                              리뷰 : 341개
                            </a>
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
                    <div className={`w-[770px] bg-[var(--color7)] py-[18px] px-[24px] leading-[21px]`}>
                      <div className={`Montserrat text-[10px] font-[600] text-[var(--color1)]`}>TBH SHOP</div>
                      <div className={`mt-[4px]`}>
                        <div className={`text-[12px] font-[400] text-[var(--color5)]`}>
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
              </li>
            </Fragment>
          );
        })}
      </ul>
    </>
  );
}

export default ReviewItem1;
