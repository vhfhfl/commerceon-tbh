import ItemFlag2 from '@/components/common/ItemFlag2';
import CheckBox1 from '@/components/form/CheckBox1';
import LayoutBasic from '@/layouts/LayoutBasic';
import Paging1 from '@/modules/Paging1';
import ProductItem5 from '@/modules/ProductItem5';
import ReviewItem1 from '@/modules/ReviewItem1';
import { Data } from '@/scripts/data_manager';
import Banner3 from '@/swipers/Banner3';
import ProductSwiper7 from '@/swipers/ProductSwiper7';
import ProductSwiper8 from '@/swipers/ProductSwiper8';
import Image from 'next/image';
import { Fragment } from 'react';

function PageItemDetail() {
  return (
    <div className={`PageItemDetail`}>
      <section data-seq='20230612143208291'>
        <article className={`SubContainer mt-[64px] grid grid-cols-[1fr_660px] gap-[80px]`}>
          <div data-seq='20230612143452584' className={`w-[660px]`}>
            <div className={`relative`}>
              <Image
                className={`aspect-[660/880] h-full w-full object-cover`}
                src={`https://picsum.photos/660/880.jpg`}
                width={660}
                height={880}
                alt=''
              />
              <div className={`absolute top-[0] right-[0] z-10`}>
                <ItemFlag2>Big</ItemFlag2>
              </div>
            </div>
            <div className={`mt-[10px]`}>
              <ProductSwiper7 />
            </div>
            <div className={`mt-[50px]`}>
              <div className={`text-[16px] font-[600] text-[var(--color1)]`}>선택 가능한 사은품</div>
              <div className={`mt-[10px]`}>
                <div className={`grid grid-cols-3 items-center gap-[20px]`}>
                  {Array.from(Array(3)).map((obj, idx) => {
                    return (
                      <Fragment key={idx}>
                        <div>
                          <div className={`overflow-hidden rounded-[7px]`}>
                            <Image
                              className={`aspect-[207/206] w-full object-cover`}
                              src={`https://picsum.photos/207/206.jpg?random=${idx}`}
                              width={207}
                              height={206}
                              priority
                              alt=''
                            />
                          </div>
                          <div
                            className={`mt-[10px] px-[30px] text-[14px] font-[400] leading-[120%] text-[var(--color1)] line-clamp-2`}>
                            패션양말 패션양말 패션양말 패션양말 패션양말 패션양말 패션양말 패션양말
                          </div>
                        </div>
                      </Fragment>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div data-seq='20230612143457351'>
            <div className={`relative`}>
              <div className={`flex flex-row items-center gap-[5px]`}>
                <div className={`Montserrat text-[18px] font-[600] text-[var(--color1)]`}>BRAND NAME</div>
                <a href={`https://www.google.com`} target={`_blank`}>
                  <Image className={`Icon`} src={`/icons/zco_50.svg`} width={24} height={24} alt='' />
                </a>
              </div>
              <div className={`absolute top-[0] right-[0] z-10`}>
                <article className={`CenterRight`}>
                  <button
                    data-title={`공유하기 버튼`}
                    className={`flex aspect-square w-[35px] flex-row items-center justify-center gap-[0]`}>
                    <Image
                      className={`Icon`}
                      src={`/icons/zco_51.svg`}
                      width={17}
                      height={19}
                      alt=''
                      onClick={(evt) => {
                        const el = document.querySelector(`#SNSLayer-ec42ee72`);
                        el.classList.toggle('On');
                      }}
                    />
                  </button>
                </article>
                <div
                  id={`SNSLayer-ec42ee72`}
                  data-title={`SNS 레이어`}
                  className={`hidden rounded-[100px] border border-[var(--color6)] bg-white [&.On]:block`}
                  style={{ filter: 'drop-shadow(0px 4px 20px rgba(0, 0, 0, 0.10))' }}>
                  <ul className={`flex flex-row items-center gap-[10px] p-[10px_14px] text-[0]`}>
                    <li>
                      <button>
                        <Image className={`Icon`} src={`/icons/icon_35_1.svg`} width={29} height={29} alt='' />
                      </button>
                    </li>
                    <li>
                      <button>
                        <Image className={`Icon`} src={`/icons/icon_35_2.svg`} width={29} height={29} alt='' />
                      </button>
                    </li>
                    <li>
                      <button>
                        <Image className={`Icon`} src={`/icons/icon_35_3.svg`} width={29} height={29} alt='' />
                      </button>
                    </li>
                    <li>
                      <button>
                        <Image className={`Icon`} src={`/icons/icon_35_4.svg`} width={29} height={29} alt='' />
                      </button>
                    </li>
                    <li>
                      <button>
                        <Image className={`Icon`} src={`/icons/icon_35_5.svg`} width={29} height={29} alt='' />
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              <div data-title={`상품명`} className={`mt-[10px]`}>
                <div className={`text-[24px] font-[400] leading-[30px] text-[var(--color1)]`}>
                  아쿠아스큐텀 여성 피마코튼스판 스트라이프 셔츠 아쿠아스큐텀 여성 피마코튼스판 스트라이프 셔츠
                  <div
                    className={`ml-[10px] inline-flex h-[30px] flex-row items-center justify-center gap-[4px] align-top`}>
                    <div
                      className={`min-w-[48px] rounded-[3px] bg-[var(--color2)] text-center text-[10px] font-[400] leading-[20px] text-[white]`}>
                      교차할인
                    </div>
                    <div
                      className={`min-w-[48px] rounded-[3px] bg-[var(--color2)] text-center text-[10px] font-[400] leading-[20px] text-[white]`}>
                      세트할인
                    </div>
                  </div>
                </div>
              </div>
              <div className={`mt-[10px] text-[12px] font-[400] text-[var(--color5)]`}>상품정보 : MXDS0180</div>
              <div data-title={`리뷰`} className={`mt-[36px] flex flex-row items-center`}>
                <div className={`flex flex-row items-center gap-[0]`}>
                  <Image className={`Icon`} src={`/icons/zco_52_1.svg`} width={18} height={18} alt='' />
                  <Image className={`Icon`} src={`/icons/zco_52_1.svg`} width={18} height={18} alt='' />
                  <Image className={`Icon`} src={`/icons/zco_52_1.svg`} width={18} height={18} alt='' />
                  <Image className={`Icon`} src={`/icons/zco_52_2.svg`} width={18} height={18} alt='' />
                  <Image className={`Icon`} src={`/icons/zco_52_3.svg`} width={18} height={18} alt='' />
                </div>
                <div className={`ml-[11px]`}>
                  <a
                    href={`https://www.google.com`}
                    target={`_blank`}
                    className={`flex flex-row items-center gap-[0] border-b border-b-[var(--color5)] text-[12px]`}>
                    <div className={`font-[400] text-[var(--color1)]`}>리뷰</div>
                    <div className={`Montserrat ml-[2px] font-[500] text-[var(--color5)]`}>432</div>
                  </a>
                </div>
              </div>
              <div data-title={`가격`} className={`mt-[40px]`}>
                <article className={`grid grid-cols-[1fr_auto] items-center justify-between`}>
                  <div className={`flex flex-row items-center`}>
                    <div className={`Montserrat text-[34px] font-[600] text-[var(--color3)] line-through`}>39,000</div>
                    <div className={`ml-[9px] flex flex-row items-center font-[700] text-[var(--color1)]`}>
                      <div className={`Montserrat text-[34px]`}>14,900</div>
                      <div className={`ml-[1px] text-[18px]`}>원</div>
                    </div>
                  </div>
                  <div className={`flex flex-row items-center justify-center`}>
                    <div className={`text-[12px] font-[600] text-[var(--color1)]`}>카드사혜택안내</div>
                    <div className={`ml-[7px]`}>
                      <Image className={`Icon`} src={`/icons/icon_27.svg`} width={16} height={16} alt='' />
                    </div>
                    <button className={`Button6 ml-[19px] w-[88px]`}>재입고알림</button>
                  </div>
                </article>
              </div>

              <div data-title={`상세 가격`} className={`mt-[13px] border-y border-[var(--color6)]`}>
                {/* 2023-06-15 :: START :: KSM : 가격 버튼 */}
                <article
                  data-seq='20230615122558538'
                  className={`grid h-[47px] grid-cols-[repeat(2,auto)] items-center justify-between gap-[0]`}>
                  <div className={`flex flex-row items-center text-[12px]`}>
                    <div className={`font-[600] text-[var(--color1)]`}>회원 혜택가</div>
                    <div className={`ml-[10px] font-[400] text-[var(--color5)]`}>
                      회원등급혜택 적립 마일리지 : 140원
                    </div>
                  </div>
                  <button className={`On Montserrat flex flex-row items-center pr-[7px] text-[18px] font-[600]`}>
                    <div className={`text-[var(--color2)]`}>66%</div>
                    <div className={`ml-[5px] text-[var(--color1)]`}>13,340원</div>₩{' '}
                    <Image
                      className={`Icon ml-[8px] [.On_>_&]:rotate-180`}
                      src={`/icons/icon_28.svg`}
                      width={20}
                      height={20}
                      alt=''
                    />
                  </button>
                </article>
                {/* // 2023-06-15 :: END :: KSM : 가격 버튼 */}

                {/* 2023-06-15 :: START :: KSM : 가격 아코디언 */}
                <div>
                  <table className={`w-full whitespace-nowrap text-[12px]`}>
                    <colgroup>
                      <col />
                      <col className={`w-[80px]`} />
                      <col className={`w-[80px]`} />
                    </colgroup>
                    {Data.PriceDummyData.map((obj1, idx1) => {
                      return (
                        <Fragment key={idx1}>
                          <tbody className={`border-t-[1px] border-[var(--color6)]`}>
                            {obj1.map((obj2, idx2) => {
                              const { text1, text2, text3 } = obj2;
                              return (
                                <Fragment key={idx2}>
                                  <tr
                                    className={`leading-[22px] [&:first-child_>_td]:pt-[10px] [&:last-child_>_td]:pb-[10px]`}>
                                    <td>
                                      <div className={`font-[500] text-[${text1?.color}]`}>{text1?.value}</div>
                                    </td>
                                    <td>
                                      <div className={`relative font-[500] text-[${text2?.color}]`}>
                                        {text2?.dot && (
                                          <div
                                            className={`absolute top-1/2 left-[-10px] z-10 h-[5px] w-[5px] -translate-y-1/2 rounded-full text-[0px] bg-[${text2?.color}]`}>
                                            Dot
                                          </div>
                                        )}

                                        {text2?.value}
                                      </div>
                                    </td>
                                    <td className={`pr-[10px] text-right`}>
                                      <div className={`Montserrat font-[600] text-[${text3?.color}]`}>
                                        {text3?.value}
                                      </div>
                                    </td>
                                  </tr>
                                </Fragment>
                              );
                            })}
                          </tbody>
                        </Fragment>
                      );
                    })}
                  </table>
                </div>
                {/* // 2023-06-15 :: END :: KSM : 가격 아코디언 */}
              </div>

              <article data-title={`컬러 선택`} className={`mt-[27px] grid grid-cols-[auto_1fr] items-start`}>
                <div className={`w-[100px] text-[12px]`}>
                  <div className={`font-[600] text-[var(--color1)]`}>컬러</div>
                  <div className={`Montserrat mt-[14px] font-[500] text-[var(--color5)]`}>WHITE</div>
                </div>
                <div className={`flex flex-row items-center`}>
                  <article className={`grid grid-cols-10 gap-[8px]`}>
                    {Array.from(Array(8)).map((obj, idx) => {
                      return (
                        <Fragment key={idx}>
                          <button className={`ColorButton34`}>
                            <img src='/icons/zco_48_1.svg' alt='' />
                            {/*<img src="/icons/zco_48_2.svg" alt=""/>*/}
                          </button>
                          <button className={`ColorButton34 !bg-[black]`}>
                            <img src='/icons/zco_48_2.svg' alt='' />
                          </button>
                        </Fragment>
                      );
                    })}
                  </article>
                </div>
              </article>

              <article data-title={`사이즈 선택`} className={`mt-[24px] grid grid-cols-[auto_1fr] items-start`}>
                <div className={`w-[100px]`}>
                  <div className={`text-[12px] font-[600] text-[var(--color1)]`}>사이즈</div>
                  <button
                    className={`mt-[14px] border-b border-solid border-[var(--color5)] text-[12px] font-[400] text-[var(--color5)]`}>
                    실측사이즈
                  </button>
                </div>
                <div className={`flex flex-row flex-wrap items-center gap-[5px]`}>
                  {Array.from(Array(4)).map((obj, idx) => {
                    return (
                      <Fragment key={idx}>
                        <button className={`SizeButton36`}>030</button>
                        <button className={`SizeButton36 On`}>030</button>
                        <button className={`SizeButton36 Disabled`}>030</button>
                      </Fragment>
                    );
                  })}
                </div>
              </article>
              <div className={`mt-[32px] text-[12px] font-[600] text-[var(--color2)]`}>
                ★구매혜택★ 2장 이상 구매 시 50% 자동 할인되는 상품입니다. &#40;중복 쿠폰 사용 불가&#41;
              </div>
              <div
                className={`mt-[12px] divide-y-[1px] divide-solid divide-[var(--color6)] border-[1px] border-solid border-[var(--color6)]`}>
                {Array.from(Array(3)).map((obj, idx) => {
                  return (
                    <Fragment key={idx}>
                      <div className={`p-[17px]`}>
                        <article className={`grid grid-flow-col grid-cols-[88px_1fr]`}>
                          <div>
                            <div>
                              <Image
                                src={`https://picsum.photos/88/120.jpg?random=${idx}`}
                                width={88}
                                height={120}
                                alt=''
                              />
                            </div>
                            <button className={`Button7 mt-[7px] w-full`}>실측사이즈</button>
                          </div>
                          <div className={`ml-[16px]`}>
                            <div className={`text-[12px] font-[600] text-[var(--color1)]`}>
                              [1+1]20수 남성포켓 + 여성 기본 반팔 티셔츠 ({idx + 1})
                            </div>
                            <div
                              className={`Montserrat mt-[5px] flex flex-row gap-[2px] text-[16px] font-[600] text-[var(--color1)]`}>
                              <div className={`text-[var(--color3)] line-through`}>39,000</div>
                              <div>14,900원</div>
                            </div>
                            <div className={`mt-[18px] space-y-[8px]`}>
                              <div className={`flex flex-row items-end gap-[0]`}>
                                <article className={`grid grid-cols-10 gap-[5px]`}>
                                  {Array.from(Array(15)).map((obj, idx) => {
                                    return (
                                      <Fragment key={idx}>
                                        <button className={`ColorButton24`}>
                                          <img src='/icons/zco_48_1.svg' alt='' />
                                        </button>
                                      </Fragment>
                                    );
                                  })}
                                </article>
                                <div
                                  className={`Montserrat ml-[13px] text-[12px] font-[500] leading-[24px] text-[var(--color1)]`}>
                                  WHITE
                                </div>
                              </div>
                            </div>
                            <article className={`mt-[18px] inline-grid grid-cols-7 gap-[6px]`}>
                              {Array.from(Array(2)).map((obj, idx) => {
                                return (
                                  <Fragment key={idx}>
                                    <button className={`SizeButton28`}>030</button>
                                    <button className={`SizeButton28 On`}>030</button>
                                    <button className={`SizeButton28 Disabled`}>030</button>
                                  </Fragment>
                                );
                              })}
                            </article>
                          </div>
                        </article>
                      </div>
                    </Fragment>
                  );
                })}
              </div>

              <div
                className={`mt-[11px] flex h-[42px] flex-row items-center justify-center border-[1px] border-solid border-[var(--color6)] text-[12px] font-[400] text-[var(--color1)]`}>
                XXX님 사이즈를 찾아보세요.
              </div>

              <div data-title={`한 번에 구매`} className={`border-[border-[var(--color6)] mt-[15px] border`}>
                <div
                  className={`flex h-[42px] flex-row items-center justify-between bg-[var(--color7)] pl-[21px] pr-[9px]`}>
                  <div className={`text-[12px] font-[600] text-[var(--color5)]`}>
                    같이 코디 된 상품 한 번에 구매하기
                  </div>
                  <button className={`On`}>
                    <Image
                      className={`Icon [.On_>_&]:rotate-180`}
                      src={`/icons/icon_29.svg`}
                      width={24}
                      height={24}
                      alt=''
                    />
                  </button>
                </div>
                <div>
                  {Array.from(Array(2)).map((obj, idx) => {
                    return (
                      <Fragment key={idx}>
                        <article
                          className={`grid grid-cols-[auto_1fr] items-start gap-[16px] border-t border-[var(--color6)] p-[16px]`}>
                          <div className={`w-[88px]`}>
                            <Image
                              className={`aspect-[88/120] w-full object-cover`}
                              src={`https://picsum.photos/88/120.jpg?random=${idx}`}
                              width={88}
                              height={120}
                              priority
                              alt=''
                            />
                          </div>
                          <div>
                            <div className={`text-[12px] font-[600] text-[var(--color1)]`}>
                              아쿠아스큐텀 여성 피마코튼스판 스트라이프 셔츠
                            </div>
                            <div className={`mt-[5px]`}>
                              <div className={`Montserrat flex flex-row items-center text-[14px] font-[600]`}>
                                <div className={`text-[var(--color3)] line-through`}>39,000</div>
                                <div className={`ml-[4px] flex flex-row items-center text-[var(--color1)]`}>
                                  14,900원
                                </div>
                              </div>
                              <div className={`mt-[17px] flex flex-row items-end gap-[0]`}>
                                <article className={`inline-grid grid-cols-10 gap-[5px]`}>
                                  {Array.from(Array(15)).map((obj, idx) => {
                                    return (
                                      <Fragment key={idx}>
                                        <button className={`ColorButton24`}>
                                          <img src='/icons/zco_48_1.svg' alt='' />
                                        </button>
                                      </Fragment>
                                    );
                                  })}
                                </article>
                                <div
                                  className={`Montserrat ml-[13px] text-[12px] font-[500] leading-[24px] text-[var(--color1)]`}>
                                  WHITE
                                </div>
                              </div>
                              <div className={`mt-[17px]`}>
                                <div className={`flex flex-row items-center`}>
                                  <button className={`ButtonSm ButtonStyle1`}>장바구니</button>
                                  <button className={`ButtonSm ButtonStyle2`}>바로구매</button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </article>
                      </Fragment>
                    );
                  })}
                </div>
              </div>

              <div data-title={`선택 상품 수량`} className={`mt-[14px]`}>
                {Array.from(Array(2)).map((obj, idx) => {
                  return (
                    <Fragment key={idx}>
                      <div className={`relative border-t border-[var(--color6)] pt-[17px] pb-[21px] pl-[11px]`}>
                        <div
                          className={`mr-[36px] w-[500px] text-[14px] font-[400] leading-[20px] text-[var(--color1)] line-clamp-2`}>
                          [1+1]20수 남성포켓 + 여성 기본 반팔 티셔츠 WHITE/055
                        </div>
                        <button
                          className={`absolute top-0 right-0 z-10 flex flex-row items-center justify-center bg-[var(--color7)]`}>
                          <Image className={`Icon`} src={`/icons/icon_31.svg`} width={32} height={32} alt='' />
                        </button>
                        <div className={`mt-[20px] flex flex-row items-center justify-between`}>
                          <div className={`flex flex-row items-center`}>
                            <button>
                              <Image className={`Icon`} src={`/icons/icon_32_1.svg`} width={36} height={32} alt='' />
                            </button>
                            <div
                              className={`Montserrat flex h-[32px] flex-row items-center justify-center px-[18px] text-[14px] font-[500] text-[var(--color1)]`}>
                              1
                            </div>
                            <button>
                              <Image className={`Icon`} src={`/icons/icon_32_2.svg`} width={36} height={32} alt='' />
                            </button>
                          </div>
                          <div className={`Montserrat text-[18px] font-[600] text-[var(--color1)]`}>14,900원</div>
                        </div>
                      </div>
                    </Fragment>
                  );
                })}
              </div>
              <div>
                <div className={`border-t-[2px] border-[var(--color1)]`}>
                  <div className={`py-[16px] pl-[10px]`}>
                    <div className={`flex flex-row items-center justify-between font-[600] text-[var(--color1)]`}>
                      <div className={`text-[14px]`}>총 상품금액</div>
                      <div className={`Montserrat text-[18px]`}>29,800원</div>
                    </div>
                    <div
                      className={`mt-[21px] flex flex-row items-center justify-between font-[600] text-[var(--color1)]`}>
                      <div className={`text-[14px]`}>총 할인금액</div>
                      <div className={`Montserrat text-[18px]`}>-0원</div>
                    </div>
                  </div>
                </div>
                <div
                  className={`flex flex-row items-center justify-between border-t-[1px] border-t-[var(--color1)] pt-[14px] pl-[10px] font-[600]`}>
                  <div className={`text-[16px] text-[var(--color1)]`}>총 합계금액</div>
                  <div className={`Montserrat text-[28px] text-[var(--color2)]`}>29,800원</div>
                </div>
                <div className={`mt-[30px] flex flex-row items-center`}>
                  <button className={`w-[58px]`}>
                    <img src='/icons/icon_33_2.svg' alt='' />
                  </button>
                  <button className={`w-[58px]`}>
                    <img src='/imgs/naver.png' alt='' />
                  </button>
                  <button className={`ButtonXl ButtonStyle1 grow`}>장바구니</button>
                  <button className={`ButtonXl ButtonStyle2 grow`}>바로구매</button>
                </div>
                <div className={`mt-[18px] border-t-[1px] border-t-[var(--color6)]`}>
                  <div className={`mt-[19px] space-y-[4px]`}>
                    {Array.from(Array(2)).map((obj, idx) => {
                      return (
                        <Fragment key={idx}>
                          <a className={`block`} href={`https://www.google.com`} target={`_blank`}>
                            <Image
                              className={`aspect-[660/120] w-full object-cover`}
                              src={`https://picsum.photos/660/120.jpg?random==${idx}`}
                              width={660}
                              height={120}
                              priority
                              alt=''
                            />
                          </a>
                        </Fragment>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </section>
      <section data-seq='20230612144047419' className={`mt-[80px]`}>
        <div className={`SubContainer`}>
          <div className={`flex flex-row items-center gap-[40px]`}>
            {['AI 추천상품', '이 상품과 함께 구매가 많이 되는 상품', '최근 인기가 많은 제품'].map((obj, idx) => {
              return (
                <Fragment key={idx}>
                  <button
                    className={`${
                      idx == 0 && `On`
                    } relative h-[36px] text-[16px] font-[600] text-[var(--color3)] [&.On]:text-[var(--color1)]`}>
                    {obj}
                    <div
                      className={`absolute bottom-[0] left-[0] z-10 hidden w-full border-[2px] border-solid border-[var(--color1)] text-[0px] [.On_>_&]:block`}>
                      Bar
                    </div>
                  </button>
                </Fragment>
              );
            })}
          </div>
        </div>
      </section>
      <section data-seq='20230612151600381' className={`mt-[20px]`}>
        <div className={`SubContainer`}>
          <div className={`flex flex-row items-center gap-[0] bg-[var(--color7)] p-[12px_24px]`}>
            <div className={`text-[12px] font-[400] text-[var(--color5)]`}>컬러</div>
            <article className={`ml-[36px] flex flex-row items-center gap-[5px]`}>
              {Array.from(Array(4)).map((obj, idx) => {
                return (
                  <Fragment key={idx}>
                    <button className={`ColorButton24`}>
                      <img src='/icons/zco_48_1.svg' alt='' />
                    </button>
                  </Fragment>
                );
              })}
            </article>
          </div>
        </div>
      </section>
      <section data-seq='20230612151606934' className={`mt-[17px]`}>
        <div className={`SubContainer`}>
          <ProductSwiper8 />
        </div>
      </section>
      <section data-seq='20230614070338957' className={`mt-[90px]`}>
        <div className={`SubContainer`}>
          <div className={`TabUi1 sticky top-[90px] z-50`}>
            {['상세정보', '기본정보', '후기(000)', '문의'].map((obj, idx) => {
              return (
                <Fragment key={idx}>
                  <button className={`${obj == '상세정보' && `On`} TabButton1`}>{obj}</button>
                </Fragment>
              );
            })}
          </div>
          <div className={`ItemDetailImageBox`}>
            <img className={`mx-auto`} src={`https://gifpng.com/1400x315/ffd4d4/ff4444?text=상세정보`} alt='' />
          </div>
          <div className={`mt-[90px]`}>
            <img className={`mx-auto`} src={`https://gifpng.com/1400x315/ffd4d4/ff4444?text=기본정보`} alt='' />
          </div>
          <div data-seq='20230614070338957' className={`mt-[90px]`}>
            <div className={`mx-auto mt-[28px] w-[1207px]`}>
              <article className={`grid grid-cols-[auto_1fr] items-center justify-center`}>
                <div className={`pl-[20px] pr-[28px]`}>
                  <article className={`grid grid-cols-[1fr_auto] items-center`}>
                    <div>
                      <div className={`flex flex-row items-center gap-[5px]`}>
                        <div className={`w-[33px]`}>
                          <Image className={`Icon`} src={`/icons/icon_37.svg`} width={33} height={33} alt='' />
                        </div>
                        <div className={`Montserrat text-[50px] font-[600] text-[var(--color2)]`}>3.5</div>
                      </div>
                      <div className={`mt-[17px] text-[12px] font-[400] text-[var(--color1)]`}>
                        93%의 구매자가 이 상품을 좋아합니다.
                      </div>
                    </div>
                    <button className={`ButtonLg ButtonStyle2 Round ml-[43px]`}>상품리뷰 작성하기</button>
                  </article>
                </div>
                <div className={`border-l border-[var(--color6)] pl-[28px]`}>
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
              <div className={`mt-[16px] border-t border-[var(--color6)] pt-[16px]`}>
                <div className={`flex flex-row items-center justify-between`}>
                  <div className={`text-[14px] font-[500] text-[var(--color1)]`}>포토 & 동영상 (65)</div>
                  <a href={`https://www.google.com`} target={`_blank`} className={`flex flex-row items-center`}>
                    <div className={`text-[12px] font-[400] text-[var(--color5)]`}>전체보기</div>
                    <div>
                      <Image className={`Icon`} src={`/icons/icon_38.svg`} width={20} height={20} alt='' />
                    </div>
                  </a>
                </div>
                <article className={`mt-[16px] grid grid-cols-8 items-center justify-between gap-[10px]`}>
                  {Array.from(Array(8)).map((obj, idx) => {
                    return (
                      <Fragment key={idx}>
                        <Image
                          className={`aspect-square h-full w-full object-cover`}
                          src={`https://picsum.photos/150/150.jpg?random=${idx}`}
                          width={150}
                          height={150}
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
                        <article
                          className={`grid h-[36px] grid-cols-[30px_1fr] items-center justify-center gap-[0] rounded-[3px] border-[1px] border-solid border-[var(--color6)]`}>
                          <div className={`flex h-full w-full flex-row items-center justify-center gap-[0]`}>
                            <Image className={`Icon`} src={`/icons/zco_53.svg`} width={19} height={19} alt='' />
                          </div>
                          <input
                            className={`h-full bg-transparent text-[12px] font-[400] text-[var(--color1)] outline-0`}
                            type={`text`}
                            placeholder={`리뷰 키워드 검색`}
                          />
                        </article>
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
          <div data-seq='20230614070338957' className={`mt-[90px]`}>
            <div className={`SubContainer`}>
              <div className={`mx-auto mt-[28px] w-[1207px]`}>
                <article
                  className={`grid grid-cols-[1fr_auto] items-center justify-between border-b border-[var(--color6)] pb-[12px] font-[600]`}>
                  <div className={`text-[22px] text-[var(--color1)]`}>문의&#40;10&#41;</div>
                  <button className={`ButtonMd ButtonStyle2 Round`}>문의하기</button>
                </article>
                <div>
                  {Array.from(Array(2)).map((obj, idx) => {
                    return (
                      <Fragment key={idx}>
                        <article className={`grid grid-cols-[auto_1fr] items-center border-b border-[var(--color6)]`}>
                          <div
                            className={`Montserrat flex h-full w-[80px] flex-row items-center justify-center text-center text-[11px] font-[400] text-[var(--color1)]`}>
                            {idx + 1}
                          </div>
                          <div className={`py-[28px]`}>
                            <div>
                              <ul
                                className={`Montserrat flex flex-row items-center gap-[16px] text-[12px] font-[400] text-[var(--color5)]`}>
                                <li>blac****</li>
                                <li className={`h-[10px] w-[1px] bg-[var(--color3)] text-[0]`}></li>
                                <li>2020.11.30</li>
                                <li className={`h-[10px] w-[1px] bg-[var(--color3)] text-[0]`}></li>
                                <li>답변대기</li>
                              </ul>
                            </div>
                            <article className={`mt-[20px] grid grid-cols-[auto_1fr] items-center`}>
                              <div>
                                <Image className={`Icon`} src={`/icons/icon_36.svg`} width={24} height={25} alt='' />
                              </div>
                              <div
                                className={`ml-[14px] flex min-w-0 flex-row items-center text-[14px] font-[400] leading-[20px] text-[var(--color1)]`}>
                                상품문의합니다.
                                <div
                                  className={`Montserrat ml-[16px] inline-flex h-[18px] min-w-[37px] flex-row items-center justify-center border border-[var(--color1)] bg-[var(--color1)] px-[4px] text-center align-top text-[10px] font-[500] text-white`}>
                                  NEW
                                </div>
                              </div>
                            </article>
                            <div className={`mt-[20px]`}>
                              <div className={`text-[12px] font-[400] leading-[18px] text-[var(--color5)]`}>
                                별빛이 이름자 추억과 오는 쉬이 새겨지는 멀리 봅니다. 그리고 아름다운 별 어머님, 아직
                                소녀들의 나의 가을 까닭입니다. 파란 속의 하나에 나의 아스라히 너무나 청춘이 이름자를 다
                                있습니다. 노루, 무덤 이름을 까닭입니다. 경, 자랑처럼 추억과 강아지, 내일 하나 하나에
                                밤이 봅니다. 슬퍼하는 시와 별 멀듯이, 걱정도 오면 파란 별 다하지 있습니다. 까닭이요,
                                그러나 것은 파란 소녀들의 둘 까닭입니다. 위에도 없이 하나에 까닭입니다. 하나에 딴은 이웃
                                듯합니다. 것은 계집애들의 무엇인지 이네들은 멀리 잔디가 나는 무덤 까닭입니다. 하나 릴케
                                다 새겨지는 어머니, 말 내린 별에도 쉬이 있습니다.
                              </div>
                              <div
                                className={`mt-[20px] w-[700px] border border-[var(--color6)] bg-[var(--color7)] p-[22px_16px] text-[12px] font-[400] leading-[18px] text-[var(--color1)]`}>
                                별빛이 이름자 추억과 오는 쉬이 새겨지는 멀리 봅니다. 그리고 아름다운 별 어머님, 아직
                                소녀들의 나의 가을 까닭입니다. 파란 속의 하나에 나의 아스라히 너무나 청춘이 이름자를 다
                                있습니다. 노루, 무덤 이름을 까닭입니다. 경, 자랑처럼 추억과 강아지, 내일 하나 하나에
                                밤이 봅니다. 슬퍼하는 시와 별 멀듯이, 걱정도 오면 파란 별 다하지 있습니다. 까닭이요,
                                그러나 것은 파란 소녀들의 둘 까닭입니다. 위에도 없이 하나에 까닭입니다. 하나에 딴은 이웃
                                듯합니다. 것은 계집애들의 무엇인지 이네들은 멀리 잔디가 나는 무덤 까닭입니다. 하나 릴케
                                다 새겨지는 어머니, 말 내린 별에도 쉬이 있습니다.
                              </div>
                            </div>
                          </div>
                        </article>
                      </Fragment>
                    );
                  })}
                </div>
              </div>
              <div className={`mt-[50px] flex flex-row items-center justify-center gap-[0]`}>
                <div className={`mx-[30px] flex flex-row items-center justify-center gap-[7px]`}>
                  {Array.from(Array(2)).map((obj, idx) => {
                    return (
                      <Fragment key={idx}>
                        <a
                          href={`https://www.google.com`}
                          target={`_blank`}
                          className={`${
                            idx == 0 && `On`
                          } flex aspect-square w-[42px] flex-row items-center justify-center rounded-full border-[1px] border-solid border-[var(--color6)] text-[12px] font-[400] text-[black] [&.On]:bg-black [&.On]:text-white`}>
                          {idx + 1}
                        </a>
                      </Fragment>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div data-seq={`20230614074139292`} className={`mt-[120px]`}>
            <div className={`SubContainer`}>
              <div className={`text-[16px] font-[600] text-[var(--color1)]`}>연관기획전</div>
              <article className={`mt-[30px] grid grid-cols-4 items-center justify-center gap-[20px]`}>
                {Array.from(Array(4)).map((obj, idx) => {
                  return (
                    <Fragment key={idx}>
                      <ProductItem5 idx={idx} />
                    </Fragment>
                  );
                })}
              </article>
            </div>
          </div>
          <div data-seq='20230429201917266' className={`mt-[140px]`}>
            <div className={`H-Box`}>
              <div className={`Inner`}>
                <Banner3 />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

PageItemDetail.Layout = LayoutBasic;
export default PageItemDetail;
