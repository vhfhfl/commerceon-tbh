import CheckBox1 from '@/components/form/CheckBox1';
import LayoutSub2 from '@/layouts/LayoutSub2';
import LayoutSub8 from "@/layouts/LayoutSub8";
import Paging1 from '@/modules/Paging1';
import { Data } from '@/scripts/data_manager';
import { Util } from '@/scripts/util';
import Banner4 from '@/swipers/Banner4';
import ProductSwiper6 from '@/swipers/ProductSwiper6';
import ProductSwiper7 from '@/swipers/ProductSwiper7';
import ProductSwiper8 from '@/swipers/ProductSwiper8';
import Image from 'next/image';
import { Fragment } from 'react';

function PageItemDetail() {
  return (
    <div className={`PageItemDetail`}>
      <section data-seq={`20230620084807561`} className={`relative`}>
        <div>
          <ProductSwiper7 />
        </div>
        <article
          className={`absolute bottom-[20px] left-[20px] z-10 flex w-[80px] flex-col items-center justify-center rounded-[7px] bg-white pb-[8px] text-center text-[0px]`}>
          <button
            data-title={`선택 가능 사은품 버튼`}
            className={`flex aspect-square w-[35px] flex-row items-center justify-center gap-0`}>
            <Image
              className={`Icon duration-300 ease-out will-change-auto [button.On_&]:rotate-180`}
              src={`/icons/icon_33.svg`}
              width={24}
              height={24}
              priority
              alt={``}
              onClick={(evt) => {
                const target = evt.target.closest('button');
                Util.toggleClass(target, 'On');

                const el = document.querySelector(`#GiftLayer-ec42ee74`);
                el.classList.toggle('On');
              }}
            />
          </button>
          <div className={`mt-[3px] text-[10px] font-[400] leading-[12px] text-[var(--color1)]`}>
            선택 가능
            <br />
            사은품
          </div>
          <div
            id={`GiftLayer-ec42ee74`}
            data-title={`선택 가능 사은품 레이어`}
            className={`mt-[8px] space-y-[6px] duration-300 ease-out [&.On]:hidden`}>
            {Array.from(Array(3)).map((obj, idx) => {
              return (
                <Fragment key={idx}>
                  <div className={`mx-auto w-[60px] overflow-hidden rounded-[7px]`}>
                    <Image
                      className={`aspect-square w-full object-cover`}
                      src={`https://picsum.photos/60/60.jpg?random=${idx}`}
                      width={60}
                      height={60}
                      priority
                      alt={``}
                    />
                  </div>
                </Fragment>
              );
            })}
          </div>
        </article>
      </section>
      <section data-seq={`20230620092614217`} className={`mt-[27px]`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <div data-title={`상품 정보`} className={`relative`}>
              <div className={`flex flex-row items-center`}>
                <div className={`Montserrat text-[11px] font-[700] text-[var(--color1)]`}>ACUASCUTUM</div>
                <a href={`https://www.google.com`} target={`_blank`}>
                  <Image
                    className={`Icon aspect-square w-full object-cover`}
                    src={`/icons/icon_34.svg`}
                    width={24}
                    height={24}
                    priority
                    alt={``}
                  />
                </a>
              </div>
              <div className={`absolute top-[0] right-[0] z-10`}>
                <div className={`flex flex-row items-start`}>
                  <div
                    id={`SNSLayer-ec42ee73`}
                    data-title={`SNS 레이어`}
                    className={`mt-[-7px] hidden rounded-[100px] border border-[var(--color6)] bg-white [&.On]:block`}
                    style={{ filter: 'drop-shadow(0px 4px 20px rgba(0, 0, 0, 0.10))' }}>
                    <ul className={`flex flex-row items-center gap-[10px] p-[10px_14px] text-[0px]`}>
                      <li>
                        <button>
                          <Image
                            className={`Icon`}
                            src={`/icons/icon_36_1.svg`}
                            width={29}
                            height={29}
                            priority
                            alt={``}
                          />
                        </button>
                      </li>
                      <li>
                        <button>
                          <Image
                            className={`Icon`}
                            src={`/icons/icon_36_2.svg`}
                            width={29}
                            height={29}
                            priority
                            alt={``}
                          />
                        </button>
                      </li>
                      <li>
                        <button>
                          <Image
                            className={`Icon`}
                            src={`/icons/icon_36_3.svg`}
                            width={29}
                            height={29}
                            priority
                            alt={``}
                          />
                        </button>
                      </li>
                      <li>
                        <button>
                          <Image
                            className={`Icon`}
                            src={`/icons/icon_36_4.svg`}
                            width={29}
                            height={29}
                            priority
                            alt={``}
                          />
                        </button>
                      </li>
                      <li>
                        <button>
                          <Image
                            className={`Icon`}
                            src={`/icons/icon_36_5.svg`}
                            width={29}
                            height={29}
                            priority
                            alt={``}
                          />
                        </button>
                      </li>
                    </ul>
                  </div>
                  <button data-title={`공유하기 버튼`} className={`aspect-square w-[35px]`}>
                    <Image
                      className={`Icon`}
                      src={`/icons/icon_35.svg`}
                      width={35}
                      height={35}
                      alt={``}
                      onClick={(evt) => {
                        const el = document.querySelector(`#SNSLayer-ec42ee73`);
                        el.classList.toggle('On');
                      }}
                    />
                  </button>
                </div>
              </div>
              <div className={`mt-[10px] text-[14px] font-[400] text-[var(--color1)]`}>
                아쿠아스큐텀 여성 피마코튼스판 스트라이프 셔츠
              </div>
              <div className={`mt-[16px] text-[12px] font-[400] text-[var(--color5)]`}>상품정보 : MXDS0180</div>
            </div>
            <div data-title={`리뷰`} className={`mt-[35px] flex flex-row items-center`}>
              <div className={`flex flex-row items-center gap-0`}>
                <Image className={`Icon`} src={`/icons/icon_30_1.svg`} width={14} height={14} priority alt={``} />
                <Image className={`Icon`} src={`/icons/icon_30_1.svg`} width={14} height={14} priority alt={``} />
                <Image className={`Icon`} src={`/icons/icon_30_1.svg`} width={14} height={14} priority alt={``} />
                <Image className={`Icon`} src={`/icons/icon_30_2.svg`} width={14} height={14} priority alt={``} />
                <Image className={`Icon`} src={`/icons/icon_30_3.svg`} width={14} height={14} priority alt={``} />
              </div>
              <div className={`ml-[8px]`}>
                <a
                  href={`https://www.google.com`}
                  target={`_blank`}
                  className={`flex flex-row items-center gap-0 border-b border-b-[var(--color5)] text-[12px]`}>
                  <div className={`font-[400] text-[var(--color1)]`}>리뷰</div>
                  <div className={`Montserrat ml-[2px] font-[500] text-[var(--color5)]`}>432</div>
                </a>
              </div>
            </div>
            <article
              data-title={`가격`}
              className={`mt-[30px] grid grid-cols-[1fr_auto] items-center justify-between gap-0`}>
              <div className={`flex flex-row items-center`}>
                <div className={`Montserrat text-[22px] font-[600] text-[var(--color3)] line-through`}>39,000</div>
                <div className={`ml-[4px] flex flex-row items-center font-[700] text-[var(--color1)]`}>
                  <div className={`Montserrat text-[22px]`}>14,900</div>
                  <div className={`ml-[1px] text-[18px]`}>원</div>
                </div>
              </div>
              <button className={`ButtonSm ButtonStyle4`}>재입고알림</button>
            </article>
            <div className={`mt-[12px] flex flex-row items-center`}>
              <div className={`text-[12px] font-[600] text-[var(--color1)]`}>카드사혜택안내</div>
              <div className={`ml-[4px]`}>
                <Image className={`Icon`} src={`/icons/icon_37.svg`} width={16} height={16} alt={``} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section data-seq={`20230620145522877`} className={`mt-[13px]`}>
        <div data-title={`상세 가격`} className={`border-y border-[var(--color6)]`}>
          {/* 2023-06-15 :: START :: KSM : 가격 버튼 */}
          <article
            data-seq={`20230615122558538`}
            className={`grid h-[47px] grid-cols-[repeat(2,auto)] items-center justify-between gap-0`}>
            <div className={`flex flex-row items-center pl-[20px] text-[12px]`}>
              <div className={`font-[600] text-[var(--color1)]`}>회원 혜택가</div>
              {/* <div className={`ml-[10px] font-[400] text-[var(--color5)]`}>회원등급혜택 적립 마일리지 : 140원</div> */}
            </div>
            <button className={`On Montserrat flex flex-row items-center pr-[15px] text-[18px]`}>
              <div className={`font-[600] text-[var(--color2)]`}>66%</div>
              <div className={`ml-[5px] font-[600] text-[var(--color1)]`}>13,340원</div>
              <Image
                className={`Icon ml-[8px] [.On_>_&]:rotate-180`}
                src={`/icons/icon_28.svg`}
                width={20}
                height={20}
                alt={``}
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
                              <td className={`pl-[20px]`}>
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
                              <td className={`pr-[20px] text-right`}>
                                <div className={`Montserrat font-[600] text-[${text3?.color}]`}>{text3?.value}</div>
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
      </section>
      <section data-seq={`20230620145538778`} className={`mt-[20px]`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <div className={`flex flex-row items-center text-[12px]`}>
              <div className={`font-[600] text-[var(--color1)]`}>컬러</div>
              <div className={`Montserrat ml-[6px] font-[400] text-[var(--color5)]`}>WHITE</div>
            </div>
            <div className={`relative mt-[17px] min-w-0`}>
              <div className={`flex flex-row items-center gap-[6px] overflow-auto`}>
                {Array.from(Array(2)).map((obj, idx) => {
                  return (
                    <Fragment key={idx}>
                      <button className={`ColorButton30`}>
                        <img className={`Icon`} src={`/icons/zco_33.svg`} alt={``} />
                      </button>
                      <button className={`ColorButton30 !bg-[#888]`}></button>
                      <button className={`ColorButton30 !bg-[#D9D9D9]`}></button>
                      <button className={`ColorButton30 !bg-[#161616]`}></button>
                      <button className={`ColorButton30 !bg-[#6688FF]`}></button>
                      <button className={`ColorButton30 !bg-[#F1B8B8]`}></button>
                      <button className={`ColorButton30 !bg-[#05A185]`}></button>
                      <button className={`ColorButton30 !bg-[#E26D6D]`}></button>
                      <button className={`ColorButton30 !bg-[#E26D6D]`}></button>
                    </Fragment>
                  );
                })}
              </div>
              <div className={`pointer-events-none absolute top-0 left-0 right-0 z-10 h-full w-full`}>
                <div className={`flex flex-row items-center justify-between`}>
                  <div>
                    <Image className={`Icon`} src={`/imgs/icon_1.png`} width={30} height={30} priority alt={``} />
                  </div>
                  <div>
                    <Image className={`Icon`} src={`/imgs/icon_2.png`} width={30} height={30} priority alt={``} />
                  </div>
                </div>
              </div>
            </div>
            <div className={`mt-[23px]`}>
              <div className={`flex flex-row items-center text-[12px]`}>
                <div className={`font-[600] text-[var(--color1)]`}>사이즈</div>
                <button
                  className={`ml-[7px] border-b border-solid border-[var(--color5)] font-[400] text-[var(--color5)]`}>
                  실측사이즈
                </button>
              </div>
              <div className={`mt-[17px]`}>
                <article className={`grid grid-cols-5 gap-[5px]`}>
                  {Array.from(Array(4)).map((obj, idx) => {
                    return (
                      <Fragment key={idx}>
                        <button className='SizeButton34'>030</button>
                        <button className='SizeButton34 On'>030</button>
                        <button className='SizeButton34 Disabled'>030</button>
                      </Fragment>
                    );
                  })}
                </article>
              </div>
            </div>
            <div className={`mt-[24px] text-[12px] font-[400] leading-[15px] text-[var(--color2)]`}>
              ★구매혜택★ 2장 이상 구매 시 50% 자동 할인되는 상품입니다.
              <br />
              &#40;중복 쿠폰 사용 불가&#41;
            </div>
            <div
              className={`mt-[24px] flex h-[34px] flex-row items-center justify-center border-[1px] border-solid border-[var(--color6)] text-[12px] font-[400] text-[var(--color1)]`}>
              XXX님 사이즈를 찾아보세요.
            </div>
            <div data-title={`한 번에 구매`} className={`border-[border-[var(--color6)] mt-[15px] border`}>
              <div
                className={`flex h-[42px] flex-row items-center justify-between bg-[var(--color7)] pl-[21px] pr-[9px]`}>
                <div className={`text-[12px] font-[600] text-[var(--color5)]`}>같이 코디 된 상품 한 번에 구매하기</div>
                <button className={`On`}>
                  <Image
                    className={`Icon [.On_>_&]:rotate-180`}
                    src={`/icons/icon_38.svg`}
                    width={24}
                    height={24}
                    alt={``}
                  />
                </button>
              </div>
              <div>
                {Array.from(Array(2)).map((obj, idx) => {
                  return (
                    <Fragment key={idx}>
                      <article
                        className={`grid grid-cols-[75px_1fr] items-start gap-[16px] border-t border-[var(--color6)] p-[16px]`}>
                        <div>
                          <Image
                            className={`aspect-[75/103] w-full object-cover`}
                            src={`https://picsum.photos/75/103.jpg?random=${idx}`}
                            width={75}
                            height={103}
                            priority
                            alt={``}
                          />
                        </div>
                        <div className={`min-w-0`}>
                          <div className={`truncate text-[12px] font-[600] text-[var(--color1)]`}>
                            아쿠아스큐텀 여성 피마코튼스판 스트라이프 셔츠
                          </div>
                          <div className={`mt-[5px]`}>
                            <div className={`Montserrat flex flex-row items-center text-[14px] font-[600]`}>
                              <div className={`text-[var(--color3)] line-through`}>39,000</div>
                              <div className={`ml-[4px] flex flex-row items-center text-[var(--color1)]`}>14,900원</div>
                            </div>
                            <div className={`relative mt-[12px] min-w-0`}>
                              <div className={`flex flex-row items-center gap-[5px] overflow-auto`}>
                                {Array.from(Array(2)).map((obj, idx) => {
                                  return (
                                    <Fragment key={idx}>
                                      <button className={`ColorButton20`}>
                                        <img className={`Icon`} src={`/icons/zco_33.svg`} alt={``} />
                                      </button>
                                      <button className={`ColorButton20 !bg-[#888]`}></button>
                                      <button className={`ColorButton20 !bg-[#D9D9D9]`}></button>
                                      <button className={`ColorButton20 !bg-[#161616]`}></button>
                                      <button className={`ColorButton20 !bg-[#6688FF]`}></button>
                                      <button className={`ColorButton20 !bg-[#F1B8B8]`}></button>
                                      <button className={`ColorButton20 !bg-[#05A185]`}></button>
                                      <button className={`ColorButton20 !bg-[#E26D6D]`}></button>
                                      <button className={`ColorButton20 !bg-[#E26D6D]`}></button>
                                    </Fragment>
                                  );
                                })}
                              </div>
                              <div className={`pointer-events-none absolute top-0 left-0 right-0 z-10 h-full w-full`}>
                                <div className={`flex flex-row items-center justify-between`}>
                                  <div>
                                    <Image
                                      className={`Icon`}
                                      src={`/imgs/icon_1.png`}
                                      width={20}
                                      height={20}
                                      priority
                                      alt={``}
                                    />
                                  </div>
                                  <div>
                                    <Image
                                      className={`Icon`}
                                      src={`/imgs/icon_2.png`}
                                      width={20}
                                      height={20}
                                      priority
                                      alt={``}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className={`Montserrat mt-[7px] text-[10px] font-[500] leading-[14px] text-[var(--color1)]`}>
                              WHITE
                            </div>
                            <div className={`mt-[10px]`}>
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
            <div
              className={`mt-[15px] divide-y-[1px] divide-solid divide-[var(--color6)] border border-[var(--color6)]`}>
              {Array.from(Array(2)).map((obj, idx) => {
                return (
                  <Fragment key={idx}>
                    <article className={`grid grid-cols-[75px_1fr] items-start gap-[16px] p-[16px]`}>
                      <div>
                        <Image
                          className={`aspect-[75/103] w-full object-cover`}
                          src={`https://picsum.photos/75/103.jpg?random=${idx}`}
                          width={75}
                          height={103}
                          priority
                          alt={``}
                        />
                        <button className={`Button7 mt-[7px] w-full`}>실측사이즈</button>
                      </div>
                      <div className={`min-w-0`}>
                        <div className={`truncate text-[12px] font-[600] text-[var(--color1)]`}>
                          아쿠아스큐텀 여성 피마코튼스판 스트라이프 셔츠
                        </div>
                        <div className={`mt-[5px]`}>
                          <div className={`Montserrat flex flex-row items-center text-[14px] font-[600]`}>
                            <div className={`text-[var(--color3)] line-through`}>39,000</div>
                            <div className={`ml-[4px] flex flex-row items-center text-[var(--color1)]`}>14,900원</div>
                          </div>
                          <div className={`relative mt-[12px] min-w-0`}>
                            <div className={`flex flex-row items-center gap-[5px] overflow-auto`}>
                              {Array.from(Array(2)).map((obj, idx) => {
                                return (
                                  <Fragment key={idx}>
                                    <button className={`ColorButton20`}>
                                      <img className={`Icon`} src={`/icons/zco_33.svg`} alt={``} />
                                    </button>
                                    <button className={`ColorButton20 !bg-[#888]`}></button>
                                    <button className={`ColorButton20 !bg-[#D9D9D9]`}></button>
                                    <button className={`ColorButton20 !bg-[#161616]`}></button>
                                    <button className={`ColorButton20 !bg-[#6688FF]`}></button>
                                    <button className={`ColorButton20 !bg-[#F1B8B8]`}></button>
                                    <button className={`ColorButton20 !bg-[#05A185]`}></button>
                                    <button className={`ColorButton20 !bg-[#E26D6D]`}></button>
                                    <button className={`ColorButton20 !bg-[#E26D6D]`}></button>
                                  </Fragment>
                                );
                              })}
                            </div>
                            <div className={`pointer-events-none absolute top-0 left-0 right-0 z-10 h-full w-full`}>
                              <div className={`flex flex-row items-center justify-between`}>
                                <div>
                                  <Image
                                    className={`Icon`}
                                    src={`/imgs/icon_1.png`}
                                    width={20}
                                    height={20}
                                    priority
                                    alt={``}
                                  />
                                </div>
                                <div>
                                  <Image
                                    className={`Icon`}
                                    src={`/imgs/icon_2.png`}
                                    width={20}
                                    height={20}
                                    priority
                                    alt={``}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className={`Montserrat mt-[7px] text-[10px] font-[500] leading-[14px] text-[var(--color1)]`}>
                            WHITE
                          </div>
                          <article className={`mt-[10px] grid grid-cols-4 gap-[6px]`}>
                            {Array.from(Array(2)).map((obj, idx) => {
                              return (
                                <Fragment key={idx}>
                                  <button className='SizeButton28'>030</button>
                                  <button className='SizeButton28 On'>030</button>
                                  <button className='SizeButton28 Disabled'>030</button>
                                </Fragment>
                              );
                            })}
                          </article>
                        </div>
                      </div>
                    </article>
                  </Fragment>
                );
              })}
            </div>
            <div
              data-title={`선택 상품 수량`}
              className={`mt-[14px] divide-y-[1px] divide-[var(--color6)] border-y border-[var(--color6)]`}>
              {Array.from(Array(2)).map((obj, idx) => {
                return (
                  <Fragment key={idx}>
                    <div className={`relative pt-[17px] pb-[21px] pl-[11px]`}>
                      <div
                        className={`w-[215px] text-[12px] font-[400] leading-[16px] text-[var(--color1)] line-clamp-2`}>
                        [1+1]20수 남성포켓 + 여성 기본 반팔 티셔츠 GRAY/095
                      </div>
                      <button
                        className={`absolute top-0 right-0 z-10 flex flex-row items-center justify-center bg-[var(--color7)]`}>
                        <Image className={`Icon`} src={`/icons/icon_39.svg`} width={24} height={24} priority alt={``} />
                      </button>
                      <div className={`mt-[20px] flex flex-row items-center justify-between`}>
                        <div className={`flex flex-row items-center justify-center gap-0`}>
                          <button>
                            <img className={`Icon`} src={`/icons/icon_40_1.svg`} alt={`마이너스`} />
                          </button>
                          <div
                            className={`Montserrat min-w-[38px] text-center text-[12px] font-[500] text-[var(--color1)]`}>
                            99
                          </div>
                          <button>
                            <img className={`Icon`} src={`/icons/icon_40_2.svg`} alt={`플러스`} />
                          </button>
                        </div>
                        <div className={`Montserrat text-[16px] font-[600] text-[var(--color1)]`}>14,900원</div>
                      </div>
                    </div>
                  </Fragment>
                );
              })}
            </div>
            <div className={`mt-[35px]`}>
              <div className={`border-t-[2px] border-[var(--color1)]`}>
                <div className={`py-[16px] pl-[10px]`}>
                  <div className={`flex flex-row items-center justify-between font-[600] text-[var(--color1)]`}>
                    <div className={`text-[14px]`}>총 상품금액</div>
                    <div className={`Montserrat text-[18px]`}>29,800원</div>
                  </div>
                  <div
                    className={`mt-[21px] flex flex-row items-center justify-between font-[600] text-[var(--color1)]`}>
                    <div className={`text-[14px]`}>총 할인금액</div>
                    <div className={`Montserrat text-[18px] `}>-0원</div>
                  </div>
                </div>
              </div>
              <div
                className={`flex flex-row items-center justify-between border-t-[1px] border-t-[var(--color1)] pt-[14px] pl-[10px] font-[600]`}>
                <div className={`text-[16px] text-[var(--color1)]`}>총 합계금액</div>
                <div className={`Montserrat text-[28px] text-[var(--color2)]`}>29,800원</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section data-seq={`20230620105936587`} className={`mt-[35px] border-t-[1px] border-t-[var(--color6)] pt-[20px]`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <div className={`space-y-[2px]`}>
              <a className={`block`} href='https://www.google.com' target='_blank'>
                <Image
                  className={`aspect-[320/58] w-full`}
                  src={`https://picsum.photos/320/58.jpg?random=1`}
                  width={320}
                  height={58}
                  priority
                  alt={``}
                />
              </a>
              <a className={`block`} href='https://www.google.com' target='_blank'>
                <Image
                  className={`aspect-[320/58] w-full`}
                  src={`https://picsum.photos/320/58.jpg?random=2`}
                  width={320}
                  height={58}
                  priority
                  alt={``}
                />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section data-seq={`20230620144441236`} className={`mt-[50px]`}>
        <div className={`overflow-auto`}>
          <div className={`inline-flex flex-row items-center gap-[20px] whitespace-nowrap px-[20px]`}>
            {['AI 추천상품', '이 상품과 함께 구매가 많이 되는 상품', '최근 인기가 많은 제품'].map((obj, idx) => {
              return (
                <Fragment key={idx}>
                  <button
                    className={`${
                      idx == 0 && `On`
                    } block border-b-[1px] border-solid border-b-transparent pb-[5px] text-[12px] font-[600] text-[var(--color3)] [&.On]:border-b-[var(--color1)] [&.On]:text-[var(--color1)]`}>
                    <div>{obj}</div>
                  </button>
                </Fragment>
              );
            })}
          </div>
        </div>
      </section>
      <section data-seq={`20230620153240961`} className={`mt-[20px]`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <div className={`flex flex-row items-center gap-[12px]`}>
              <div className={`text-[12px] font-[400] text-[var(--color5)]`}>컬러</div>
              <div className={`flex flex-row items-center gap-[6px]`}>
                <button className={`ColorButton30`}>
                  <img className={`Icon`} src={`/icons/zco_33.svg`} alt={``} />
                </button>
                <button className={`ColorButton30 !bg-[#888]`}></button>
                <button className={`ColorButton30 !bg-[#D9D9D9]`}></button>
                <button className={`ColorButton30 !bg-[#161616]`}></button>
              </div>
            </div>
          </div>
        </div>
        <div className={`mt-[20px]`}>
          <ProductSwiper6 />
        </div>
      </section>
      <section data-seq={`20230620153919915`} className={`sticky top-[60px] z-[100] mt-[40px] bg-white`}>
        <div className={`TabUi1`}>
          {['상세정보', '기본정보', '후기(000)', '문의'].map((obj, idx) => {
            return (
              <Fragment key={idx}>
                <button className={`${obj == '상세정보' && `On`} TabButton1`}>{obj}</button>
              </Fragment>
            );
          })}
        </div>
      </section>
      <section data-seq={`20230620153919915`} className={`mt-[40px]`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <article className={`grid grid-cols-[auto_1fr] items-center justify-between gap-[20px]`}>
              <div className={`text-center`}>
                <div className={`flex flex-row items-center justify-center gap-[3px]`}>
                  <div>
                    <Image className={`Icon`} src={`/icons/icon_41.svg`} width={18} height={18} priority alt={``} />
                  </div>
                  <div className={`Montserrat text-[28px] font-[600] text-[var(--color2)]`}>4.0</div>
                </div>
                <div className={`mt-[5px] text-[10px] font-[400] leading-[15px] text-[var(--color1)]`}>
                  93%의 구매자가
                  <br />이 상품을 좋아합니다.
                </div>
              </div>
              <div>
                <ul className={`grid grid-cols-1 items-center justify-center gap-[7px]`}>
                  <li>
                    <article
                      className={`On grid grid-cols-[50px_1fr_30px] items-center gap-[6px] text-[10px] font-[400] text-[var(--color3)] [&.On]:font-[600] [&.On]:text-[var(--color1)]`}>
                      <div>아주 좋아요</div>
                      <div className={`h-[8px] w-full overflow-hidden bg-[var(--color7)]`}>
                        <div className={`relative h-full w-[70%] bg-[var(--color2)]`}></div>
                      </div>
                      <div className={`Montserrat text-right`}>177</div>
                    </article>
                  </li>
                  <li>
                    <article
                      className={`grid grid-cols-[50px_1fr_30px] items-center gap-[6px] text-[10px] font-[400] text-[var(--color3)]`}>
                      <div>맘에 들어요</div>
                      <div className={`h-[8px] w-full overflow-hidden bg-[var(--color7)]`}>
                        <div className={`relative h-full w-[35%] bg-[var(--color2)]`}></div>
                      </div>
                      <div className={`Montserrat text-right`}>100</div>
                    </article>
                  </li>
                  <li>
                    <article
                      className={`grid grid-cols-[50px_1fr_30px] items-center gap-[6px] text-[10px] font-[400] text-[var(--color3)]`}>
                      <div>보통이에요</div>
                      <div className={`h-[8px] w-full overflow-hidden bg-[var(--color7)]`}>
                        <div className={`relative h-full w-[20%] bg-[var(--color2)]`}></div>
                      </div>
                      <div className={`Montserrat text-right`}>40</div>
                    </article>
                  </li>
                  <li>
                    <article
                      className={`grid grid-cols-[50px_1fr_30px] items-center gap-[6px] text-[10px] font-[400] text-[var(--color3)]`}>
                      <div>그냥 그래요</div>
                      <div className={`h-[8px] w-full overflow-hidden bg-[var(--color7)]`}>
                        <div className={`relative h-full w-[5%] bg-[var(--color2)]`}></div>
                      </div>
                      <div className={`Montserrat text-right`}>10</div>
                    </article>
                  </li>
                  <li>
                    <article
                      className={`grid grid-cols-[50px_1fr_30px] items-center gap-[6px] text-[10px] font-[400] text-[var(--color3)]`}>
                      <div>별로에요</div>
                      <div className={`h-[8px] w-full overflow-hidden bg-[var(--color7)]`}>
                        <div className={`relative h-full w-[0%] bg-[var(--color2)]`}></div>
                      </div>
                      <div className={`Montserrat text-right`}>0</div>
                    </article>
                  </li>
                </ul>
              </div>
            </article>
            <button className={`ButtonMd ButtonStyle2 Round mt-[20px] block w-full`}>상품리뷰 작성하기</button>
          </div>
        </div>
        <div className={`mt-[20px] border-t border-[var(--color6)] pt-[20px]`}>
          <article className={`grid grid-cols-[1fr_auto] items-center justify-between px-[20px]`}>
            <div className={`text-[14px] font-[500] text-[var(--color1)]`}>포토 & 동영상 (65)</div>
            <button className={`flex flex-row items-center text-[12px] font-[400] text-[var(--color5)]`}>
              <div>전체보기</div>
              <div>
                <Image className={`Icon`} src={`/icons/icon_42.svg`} width={20} height={20} priority alt={``} />
              </div>
            </button>
          </article>
          <div className={`mt-[15px] flex flex-row items-center gap-[6px] overflow-auto px-[20px]`}>
            {Array.from(Array(10)).map((obj, idx) => {
              return (
                <Fragment key={idx}>
                  <div className={`w-[84px]`}>
                    <Image
                      className={`aspect-square w-full object-cover`}
                      src={`https://picsum.photos/84/84.jpg?random=${idx}`}
                      width={84}
                      height={84}
                      priority
                      alt={``}
                    />
                  </div>
                </Fragment>
              );
            })}
          </div>
        </div>
        <div className={`mt-[20px] border-t border-[var(--color6)] pt-[20px]`}>
          <div className={`H-Box`}>
            <div className={`Inner`}>
              <div className={`flex flex-row items-center justify-between`}>
                <div
                  className={`SelectBox1`}
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
                <CheckBox1>
                  <span className={`text-[var(--color5)]`}>포토/동영상 먼저보기</span>
                </CheckBox1>
              </div>
            </div>
          </div>
        </div>
        <div className={`mt-[20px] border-t border-[var(--color6)] pt-[20px]`}>
          <div className={`H-Box`}>
            <div className={`Inner`}>
              <div className={`flex flex-row items-center gap-[8px] overflow-auto`}>
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
          </div>
        </div>
        <div className={`mt-[20px] divide-y-[1px] divide-[var(--color6)] border-y border-[var(--color6)]`}>
          <div className={`py-[20px]`}>
            <article className={`mx-[20px] grid grid-cols-[1fr_auto] items-center justify-center`}>
              <div className={`flex flex-row items-center gap-[9px]`}>
                <div className={`inline-flex flex-row items-center`}>
                  {Array.from(Array(5)).map((obj, idx) => {
                    let src;
                    if (idx == 4) {
                      src = '/icons/icon_25_2.svg';
                    } else {
                      src = '/icons/icon_25_1.svg';
                    }
                    return (
                      <Fragment key={idx}>
                        <Image className={`Icon`} src={src} width={14} height={14} priority alt={`별`} />
                      </Fragment>
                    );
                  })}
                </div>
                <div className={`text-[12px] font-[400] text-[var(--color1)]`}>맘에 들어요</div>
              </div>
              <div className={`Montserrat text-[11px] font-[400] text-[var(--color1)]`}>2021.03.02</div>
            </article>
            <div className={`mx-[20px] mt-[25px] rounded-[5px] border border-[var(--color6)] p-[10px]`}>
              <div className={`flex flex-row items-center text-[10px]`}>
                <div className={`font-[400] text-[var(--color5)]`}>작성자</div>
                <div className={`Montserrat ml-[6px] font-[600] text-[var(--color1)]`}>asd******</div>
              </div>
              <div className={`mt-[15px]`}>
                <ul className={`flex flex-row flex-wrap items-center gap-[8px] text-[10px] text-[var(--color1)]`}>
                  <li>
                    <span className={`font-[700]`}>키</span>
                    <span className={`ml-[4px] font-[400]`}>158cm</span>
                  </li>
                  <li>
                    <span className={`font-[700]`}>몸무게</span>
                    <span className={`ml-[4px] font-[400]`}>57~59kg</span>
                  </li>
                  <li>
                    <span className={`font-[700]`}>평소사이즈-상의</span>
                    <span className={`ml-[4px] font-[400]`}>L</span>
                  </li>
                  <li>
                    <span className={`font-[700]`}>평소사이즈-하의</span>
                    <span className={`ml-[4px] font-[400]`}>29</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className={`mx-[20px] mt-[25px] text-[12px] font-[400]`}>
              <div className={`flex flex-row items-center font-[600]`}>
                <div className={`text-[#d73948]`}>NEW</div>
                <div className={`ml-[4px] text-[var(--color1)]`}>브랜드명 / 제목</div>
              </div>
              <div className={`mt-[8px] leading-[14px] text-[var(--color1)]`}>상품명</div>
              <div className={`mt-[10px] leading-[20px] text-[var(--color5)] line-clamp-2`}>
                별빛이 이름자 추억과 오는 쉬이 새겨지는 멀리 봅니다. 그리고 아름다운 별 어머님, 아직 소녀들의 나의 가을
                까닭입니다. 파란 속의 하나에 나의 아스라히 너무나 청춘이 이름자를 다 있습니다. 노루, 무덤 이름을
                까닭입니다. 경, 자랑처럼 추억과 강아지, 내일 하나 하나에 밤이 봅니다. 슬퍼하는 시와 별 멀듯이, 걱정도
                오면 파란 별 다하지 있습니다. 까닭이요, 그러나 것은 파란 소녀들의 둘 까닭입니다. 위에도 없이 하나에
                까닭입니다. 하나에 딴은 이웃 듯합니다. 것은 계집애들의 무엇인지 이네들은 멀리 잔디가 나는 무덤
                까닭입니다. 하나 릴케 다 새겨지는 어머니, 말 내린 별에도 쉬이 있습니다.
              </div>
              <button className={`mt-[10px] text-[var(--color1)]`}>더보기</button>
            </div>
            <div className={`mt-[15px] flex flex-row items-center gap-[6px] overflow-auto px-[20px]`}>
              {Array.from(Array(10)).map((obj, idx) => {
                return (
                  <Fragment key={idx}>
                    <div className={`w-[120px]`}>
                      <Image
                        className={`aspect-square w-full object-cover`}
                        src={`https://picsum.photos/120/120.jpg?random=${idx}`}
                        width={120}
                        height={120}
                        priority
                        alt={``}
                      />
                    </div>
                  </Fragment>
                );
              })}
            </div>
          </div>
          <div className={`py-[20px]`}>
            <div className={`H-Box`}>
              <div className={`Inner`}>
                <article className={`grid grid-cols-[1fr_auto] items-center justify-center`}>
                  <div className={`flex flex-row items-center gap-[9px]`}>
                    <div className={`inline-flex flex-row items-center`}>
                      {Array.from(Array(5)).map((obj, idx) => {
                        let src;
                        if (idx == 4) {
                          src = '/icons/icon_25_2.svg';
                        } else {
                          src = '/icons/icon_25_1.svg';
                        }
                        return (
                          <Fragment key={idx}>
                            <Image className={`Icon`} src={src} width={14} height={14} priority alt={`별`} />
                          </Fragment>
                        );
                      })}
                    </div>
                    <div className={`text-[12px] font-[400] text-[var(--color1)]`}>맘에 들어요</div>
                  </div>
                  <div className={`Montserrat text-[11px] font-[400] text-[var(--color1)]`}>2021.03.02</div>
                </article>
                <div className={`mt-[25px] rounded-[5px] border border-[var(--color6)] p-[10px]`}>
                  <div className={`flex flex-row items-center text-[10px]`}>
                    <div className={`font-[400] text-[var(--color5)]`}>작성자</div>
                    <div className={`Montserrat ml-[6px] font-[600] text-[var(--color1)]`}>asd******</div>
                  </div>
                  <div
                    className={`mt-[15px] flex flex-row flex-wrap items-center gap-[8px] text-[10px] text-[var(--color1)]`}>
                    <div>
                      <span className={`font-[700]`}>키</span>
                      <span className={`ml-[4px] font-[400]`}>158cm</span>
                    </div>
                    <div>
                      <span className={`font-[700]`}>몸무게</span>
                      <span className={`ml-[4px] font-[400]`}>57~59kg</span>
                    </div>
                    <div>
                      <span className={`font-[700]`}>평소사이즈-상의</span>
                      <span className={`ml-[4px] font-[400]`}>L</span>
                    </div>
                    <div>
                      <span className={`font-[700]`}>평소사이즈-하의</span>
                      <span className={`ml-[4px] font-[400]`}>29</span>
                    </div>
                  </div>
                </div>
                <div className={`mt-[25px] text-[12px] font-[400]`}>
                  <div className={`flex flex-row items-center font-[600]`}>
                    <div className={`text-[#d73948]`}>NEW</div>
                    <div className={`ml-[4px] text-[var(--color1)]`}>브랜드명 / 제목</div>
                  </div>
                  <div className={`mt-[8px] leading-[14px] text-[var(--color1)]`}>상품명</div>
                  <div className={`mt-[10px] leading-[20px] text-[var(--color5)] line-clamp-2`}>
                    별빛이 이름자 추억과 오는 쉬이 새겨지는 멀리 봅니다. 그리고 아름다운 별 어머님, 아직 소녀들의 나의
                    가을 까닭입니다. 파란 속의 하나에 나의 아스라히 너무나 청춘이 이름자를 다 있습니다. 노루, 무덤
                    이름을 까닭입니다. 경, 자랑처럼 추억과 강아지, 내일 하나 하나에 밤이 봅니다. 슬퍼하는 시와 별
                    멀듯이, 걱정도 오면 파란 별 다하지 있습니다. 까닭이요, 그러나 것은 파란 소녀들의 둘 까닭입니다.
                    위에도 없이 하나에 까닭입니다. 하나에 딴은 이웃 듯합니다. 것은 계집애들의 무엇인지 이네들은 멀리
                    잔디가 나는 무덤 까닭입니다. 하나 릴케 다 새겨지는 어머니, 말 내린 별에도 쉬이 있습니다.
                  </div>
                  <button className={`mt-[10px] text-[var(--color1)]`}>더보기</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`mt-[25px]`}>
          <Paging1 />
        </div>
      </section>
      <section data-seq={`20230620153919915`} className={`mt-[40px]`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <button className={`ButtonMd ButtonStyle2 Round mt-[20px] block w-full`}>문의하기</button>
            <div className={`mt-[20px] divide-y-[1px] divide-[var(--color6)] border-y border-[var(--color6)]`}>
              {Array.from(Array(2)).map((obj, idx) => {
                return (
                  <Fragment key={idx}>
                    <div className={`py-[15px]`}>
                      <div
                        className={`Montserrat flex flex-row items-center gap-[10px] text-[11px] font-[400] text-[var(--color5)]`}>
                        <div>blac****</div>
                        <div>2020.11.30</div>
                      </div>
                      <article className={`mt-[20px] grid grid-cols-[1fr_auto] items-center`}>
                        <div className={`flex flex-row items-center gap-[4px]`}>
                          <div>
                            <Image
                              className={`Icon`}
                              src={`/icons/icon_44.svg`}
                              width={24}
                              height={25}
                              priority
                              alt={``}
                            />
                          </div>
                          <div
                            className={`flex min-w-0 flex-row items-center text-[12px] font-[400] leading-[20px] text-[var(--color1)]`}>
                            상품문의합니다.
                            <div
                              className={`Montserrat ml-[6px] inline-flex h-[18px] min-w-[37px] flex-row items-center justify-center border border-[var(--color1)] bg-[var(--color1)] px-[4px] text-center align-top text-[10px] font-[500] text-white`}>
                              NEW
                            </div>
                          </div>
                        </div>
                        <div className={`text-[10px] font-[400] text-[var(--color5)]`}>답변대기</div>
                      </article>
                      <div className={`mt-[20px] text-[12px] font-[400] leading-[16px]`}>
                        <div className={`text-[var(--color5)]`}>
                          별빛이 이름자 추억과 오는 쉬이 새겨지는 멀리 봅니다. 그리고 아름다운 별 어머님, 아직 소녀들의
                          나의 가을 까닭입니다. 파란 속의 하나에 나의 아스라히 너무나 청춘이 이름자를 다 있습니다. 노루,
                          무덤 이름을 까닭입니다. 경, 자랑처럼 추억과 강아지, 내일 하나 하나에 밤이 봅니다. 슬퍼하는
                          시와 별 멀듯이, 걱정도 오면 파란 별 다하지 있습니다. 까닭이요, 그러나 것은 파란 소녀들의 둘
                          까닭입니다. 위에도 없이 하나에 까닭입니다. 하나에 딴은 이웃 듯합니다. 것은 계집애들의 무엇인지
                          이네들은 멀리 잔디가 나는 무덤 까닭입니다. 하나 릴케 다 새겨지는 어머니, 말 내린 별에도 쉬이
                          있습니다.
                        </div>
                        <div
                          className={`mt-[15px] border border-[var(--color6)] bg-[var(--color7)] p-[10px] text-[var(--color1)]`}>
                          별빛이 이름자 추억과 오는 쉬이 새겨지는 멀리 봅니다. 그리고 아름다운 별 어머님, 아직 소녀들의
                          나의 가을 까닭입니다. 파란 속의 하나에 나의 아스라히 너무나 청춘이 이름자를 다 있습니다. 노루,
                          무덤 이름을 까닭입니다. 경, 자랑처럼 추억과 강아지, 내일 하나 하나에 밤이 봅니다. 슬퍼하는
                          시와 별 멀듯이, 걱정도 오면 파란 별 다하지 있습니다. 까닭이요, 그러나 것은 파란 소녀들의 둘
                          까닭입니다. 위에도 없이 하나에 까닭입니다. 하나에 딴은 이웃 듯합니다. 것은 계집애들의 무엇인지
                          이네들은 멀리 잔디가 나는 무덤 까닭입니다. 하나 릴케 다 새겨지는 어머니, 말 내린 별에도 쉬이
                          있습니다.
                        </div>
                      </div>
                    </div>
                  </Fragment>
                );
              })}
            </div>
            <div className={`mt-[25px]`}>
              <Paging1 />
            </div>
          </div>
        </div>
      </section>
      <section data-seq={`20230620154326836`} className={`mt-[152px]`}>
        <div className={`text-[var(--color 1)] mx-[20px] text-[12px] font-[600]`}>연관기획전</div>
        <div className={`mt-[15px] ml-[20px]`}>
          <ProductSwiper8 />
        </div>
      </section>
      <section data-seq={`20230629150541324`} className={`mt-[50px]`}>
        <Banner4 />
      </section>
      <div className={`fixed bottom-0 left-0 z-[999] w-full`}>
        <div className={`flex flex-row items-center`}>
          <button
            className={`flex h-[58px] w-[58px] flex-row items-center justify-center border-r-[1px] border-solid border-[#2b2b2b] bg-[var(--color1)]`}>
            <Image
              className={`Icon [.On_>_&]:hidden`}
              src={`/icons/icon_50_1.svg`}
              width={36}
              height={36}
              alt='좋아요'
              onClick={(evt) => {
                const target = evt.target.closest('button');
                Util.toggleClass(target, 'On');
              }}
            />
            <Image
              className={`Icon hidden [.On_>_&]:block`}
              src={`/icons/icon_50_2.svg`}
              width={36}
              height={36}
              alt='좋아요'
              onClick={(evt) => {
                const target = evt.target.closest('button');
                Util.toggleClass(target, 'On');
              }}
            />
          </button>
          <button className={`PopupButton2 grow`}>구매하기</button>
        </div>
      </div>
    </div>
  );
}

PageItemDetail.Layout = LayoutSub8;
export default PageItemDetail;
