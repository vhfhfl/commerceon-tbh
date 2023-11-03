import CheckBox from '@/components/form/CheckBox';
import Image from 'next/image';
import { Fragment, useRef } from 'react';

function ListFilter(props) {
  const { className = '' } = props;
  const ref_this = useRef();

  return (
    <>
      <div ref={ref_this} className={`ListFilter ${className}`}>
        <div className={`text-[16px] font-[500] text-[var(--color1)]`}>166 개의 상품</div>
        <div className={`mt-[34px]`}>
          <div className={`text-[24px] font-[700] text-[var(--color1)]`}>브랜드</div>
          <div className={`mt-[15px] space-y-[8px]`}>
            <div>
              <CheckBox size='Lg'>마인드브릿지</CheckBox>
            </div>
            <div>
              <CheckBox size='Lg'>베이직하우스</CheckBox>
            </div>
            <div>
              <CheckBox size='Lg'>쥬시쥬디</CheckBox>
            </div>
            <div>
              <CheckBox size='Lg'>아쿠아스큐텀</CheckBox>
            </div>
          </div>
          <ul className={`mt-[30px]`}>
            <li className={`border-t-[1px] border-solid border-t-[var(--color6)] py-[30px]`}>
              <button
                className={`On flex h-[32px] w-full flex-row items-center justify-between gap-[0] text-[24px] font-[700] text-[var(--color1)]`}>
                <div>카테고리</div>
                <Image
                  className={`[button.On_>_&]:rotate-180`}
                  src={`/icons/zco_46.svg`}
                  width={16}
                  height={9}
                  alt=''
                />
              </button>
              <ul className={`py-[15px]`}>
                <li className={``}>
                  <button className={`On flex h-[20px] w-full flex-row items-center justify-between gap-[0]`}>
                    <div className={`text-[18px] font-[400] text-[var(--color1)]`}>남성 (1000)</div>
                    <Image
                      className={`[button.On_>_&]:rotate-180`}
                      src={`/icons/zco_47.svg`}
                      width={16}
                      height={9}
                      alt=''
                    />
                  </button>
                  <ul className={`py-[20px] pl-[30px]`}>
                    <li>
                      <button className={`On flex w-full flex-row items-center justify-between gap-[0]`}>
                        <CheckBox size='Lg'>아우터</CheckBox>
                        <Image
                          className={`[button.On_>_&]:rotate-180`}
                          src={`/icons/zco_47.svg`}
                          width={16}
                          height={9}
                          alt=''
                        />
                      </button>
                      <ul className={`space-y-[9px] py-[9px] pl-[40px]`}>
                        <li>
                          <button className={`On flex w-full flex-row items-center justify-between gap-[0]`}>
                            <CheckBox size='Lg'>다운/패딩 (12)</CheckBox>
                          </button>
                        </li>
                        <li>
                          <button className={`On flex w-full flex-row items-center justify-between gap-[0]`}>
                            <CheckBox size='Lg'>코트 (182)</CheckBox>
                          </button>
                        </li>
                        <li>
                          <button className={`On flex w-full flex-row items-center justify-between gap-[0]`}>
                            <CheckBox size='Lg'>자켓 (11)</CheckBox>
                          </button>
                        </li>
                        <li>
                          <button className={`On flex w-full flex-row items-center justify-between gap-[0]`}>
                            <CheckBox size='Lg'>점퍼 (11)</CheckBox>
                          </button>
                        </li>
                        <li>
                          <button className={`On flex w-full flex-row items-center justify-between gap-[0]`}>
                            <CheckBox size='Lg'>가디건 (213)</CheckBox>
                          </button>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <button className={`On flex w-full flex-row items-center justify-between gap-[0]`}>
                        <CheckBox size='Lg'>아우터</CheckBox>
                        <Image
                          className={`[button.On_>_&]:rotate-180`}
                          src={`/icons/zco_47.svg`}
                          width={16}
                          height={9}
                          alt=''
                        />
                      </button>
                      <ul className={`space-y-[9px] py-[9px] pl-[40px]`}>
                        <li>
                          <button className={`On flex w-full flex-row items-center justify-between gap-[0]`}>
                            <CheckBox size='Lg'>다운/패딩 (12)</CheckBox>
                          </button>
                        </li>
                        <li>
                          <button className={`On flex w-full flex-row items-center justify-between gap-[0]`}>
                            <CheckBox size='Lg'>코트 (182)</CheckBox>
                          </button>
                        </li>
                        <li>
                          <button className={`On flex w-full flex-row items-center justify-between gap-[0]`}>
                            <CheckBox size='Lg'>자켓 (11)</CheckBox>
                          </button>
                        </li>
                        <li>
                          <button className={`On flex w-full flex-row items-center justify-between gap-[0]`}>
                            <CheckBox size='Lg'>점퍼 (11)</CheckBox>
                          </button>
                        </li>
                        <li>
                          <button className={`On flex w-full flex-row items-center justify-between gap-[0]`}>
                            <CheckBox size='Lg'>가디건 (213)</CheckBox>
                          </button>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className={``}>
                  <button className={`flex h-[20px] w-full flex-row items-center justify-between gap-[0]`}>
                    <div className={`text-[18px] font-[400] text-[var(--color1)]`}>여성 (1000)</div>
                    <Image
                      className={`[button.On_>_&]:rotate-180`}
                      src={`/icons/zco_47.svg`}
                      width={16}
                      height={9}
                      alt=''
                    />
                  </button>
                </li>
              </ul>
              <div className={`mt-[30px]`}>
                <button className={`w-full text-right text-[18px] font-[400] text-[var(--color5)]`}>지우기</button>
              </div>
            </li>
            <li className={`border-t-[1px] border-solid border-t-[var(--color6)] py-[30px]`}>
              <button
                className={`On flex w-full flex-row items-center justify-between gap-[0] text-[24px] font-[700] text-[var(--color1)]`}>
                <div>사이즈</div>
                <Image
                  className={`[button.On_>_&]:rotate-180`}
                  src={`/icons/zco_46.svg`}
                  width={16}
                  height={9}
                  alt=''
                />
              </button>
              <div className={`mt-[16px]`}>
                <CheckBox size='Lg'>빅사이즈 포함 상픔</CheckBox>
              </div>
              <ul className={`mt-[19px] space-y-[30px]`}>
                {['남성', '아우터', '바텀', '잡화'].map((obj, idx) => {
                  return (
                    <Fragment key={idx}>
                      <li>
                        <div>{obj}</div>
                        <div className={`mt-[7px] grid grid-cols-4 items-center justify-center gap-[12px]`}>
                          {Array.from(Array(8)).map((obj, idx) => {
                            return (
                              <Fragment key={idx}>
                                <button
                                  className={`flex h-[40px] flex-row items-center justify-center gap-[0] border-[1px] border-solid border-[var(--color3)] text-[16px] font-[400] text-[var(--color1)] first:border-[var(--color1)]`}>
                                  000
                                </button>
                              </Fragment>
                            );
                          })}
                        </div>
                      </li>
                    </Fragment>
                  );
                })}
              </ul>
              <div className={`mt-[30px]`}>
                <button className={`w-full text-right text-[18px] font-[400] text-[var(--color5)]`}>지우기</button>
              </div>
            </li>
            <li className={`border-t-[1px] border-solid border-t-[var(--color6)] py-[30px]`}>
              <button
                className={`On flex w-full flex-row items-center justify-between gap-[0] text-[24px] font-[700] text-[var(--color1)]`}>
                <div>가격</div>
                <Image
                  className={`[button.On_>_&]:rotate-180`}
                  src={`/icons/zco_46.svg`}
                  width={16}
                  height={9}
                  alt=''
                />
              </button>
              <div className={`mt-[15px] space-y-[8px]`}>
                <div>
                  <CheckBox size='Lg'>10만원 미만</CheckBox>
                </div>
                <div>
                  <CheckBox size='Lg'>10만원~20만원 미만</CheckBox>
                </div>
                <div>
                  <CheckBox size='Lg'>20만원~30만원 미만</CheckBox>
                </div>
                <div>
                  <CheckBox size='Lg'>30만원~40만원 미만</CheckBox>
                </div>
                <div>
                  <CheckBox size='Lg'>40만원~50만원 미만</CheckBox>
                </div>
                <div>
                  <CheckBox size='Lg'>50만원 이상</CheckBox>
                </div>
              </div>
              <div className={`mt-[30px]`}>
                <button className={`w-full text-right text-[18px] font-[400] text-[var(--color5)]`}>지우기</button>
              </div>
            </li>
            <li className={`border-t-[1px] border-solid border-t-[var(--color6)] py-[30px]`}>
              <button
                className={`On flex w-full flex-row items-center justify-between gap-[0] text-[24px] font-[700] text-[var(--color1)]`}>
                <div>상태</div>
                <Image
                  className={`[button.On_>_&]:rotate-180`}
                  src={`/icons/zco_46.svg`}
                  width={16}
                  height={9}
                  alt=''
                />
              </button>
              <div className={`mt-[15px] space-y-[8px]`}>
                <div>
                  <CheckBox size='Lg'>신상품만 보기</CheckBox>
                </div>
                <div>
                  <CheckBox size='Lg'>첫구매상품</CheckBox>
                </div>
                <div>
                  <CheckBox size='Lg'>품절상품제외</CheckBox>
                </div>
              </div>
              <div className={`mt-[30px]`}>
                <button className={`w-full text-right text-[18px] font-[400] text-[var(--color5)]`}>지우기</button>
              </div>
            </li>
            <li className={`border-t-[1px] border-solid border-t-[var(--color6)] py-[30px]`}>
              <button
                className={`On flex w-full flex-row items-center justify-between gap-[0] text-[24px] font-[700] text-[var(--color1)]`}>
                <div>프로모션</div>
                <Image
                  className={`[button.On_>_&]:rotate-180`}
                  src={`/icons/zco_46.svg`}
                  width={16}
                  height={9}
                  alt=''
                />
              </button>
              <div className={`mt-[15px] space-y-[8px]`}>
                <div>
                  <CheckBox size='Lg'>타임세일</CheckBox>
                </div>
                <div>
                  <CheckBox size='Lg'>첫구매 할인혜택 상품</CheckBox>
                </div>
                <div>
                  <CheckBox size='Lg'>SET 할인</CheckBox>
                </div>
                <div>
                  <CheckBox size='Lg'>1+1 할인</CheckBox>
                </div>
                <div>
                  <CheckBox size='Lg'>N+1 할인</CheckBox>
                </div>
                <div>
                  <CheckBox size='Lg'>교차 할인</CheckBox>
                </div>
                <div>
                  <CheckBox size='Lg'>특정 옵션 추가 할인</CheckBox>
                </div>
              </div>
              <div className={`mt-[30px]`}>
                <button className={`w-full text-right text-[18px] font-[400] text-[var(--color5)]`}>지우기</button>
              </div>
            </li>
            <li className={`border-t-[1px] border-solid border-t-[var(--color6)] py-[30px]`}>
              <button
                className={`On flex w-full flex-row items-center justify-between gap-[0] text-[24px] font-[700] text-[var(--color1)]`}>
                <div>컬러</div>
                <Image
                  className={`[button.On_>_&]:rotate-180`}
                  src={`/icons/zco_46.svg`}
                  width={16}
                  height={9}
                  alt=''
                />
              </button>
              <div className={`mt-[24px] grid grid-cols-7 items-center justify-start gap-[10px]`}>
                <button
                  className={`flex aspect-square w-[28px] flex-row items-center justify-center gap-[0] rounded-full border-[1px] border-solid border-[#d4d4d4] bg-[#fff]`}>
                  <Image src={`/icons/zco_48_1.svg`} width={12} height={10} alt='' />
                </button>
                <button
                  className={`flex aspect-square w-[28px] flex-row items-center justify-center gap-[0] rounded-full bg-[#888]`}></button>
                <button
                  className={`flex aspect-square w-[28px] flex-row items-center justify-center gap-[0] rounded-full bg-[#d9d9d9]`}>
                  <Image src={`/icons/zco_48_2.svg`} width={12} height={10} alt='' />
                </button>
                <button
                  className={`flex aspect-square w-[28px] flex-row items-center justify-center gap-[0] rounded-full bg-[#161616]`}></button>
                <button
                  className={`flex aspect-square w-[28px] flex-row items-center justify-center gap-[0] rounded-full bg-[linear-gradient(135deg,#d4d4d4_0%,#ffffff_50%,#d4d4d4_100%)]`}></button>
                <button
                  className={`flex aspect-square w-[28px] flex-row items-center justify-center gap-[0] rounded-full bg-[#E60012]`}></button>
                <button
                  className={`flex aspect-square w-[28px] flex-row items-center justify-center gap-[0] rounded-full bg-[#FF66FA]`}></button>
                <button
                  className={`flex aspect-square w-[28px] flex-row items-center justify-center gap-[0] rounded-full bg-[#FF5C00]`}></button>
                <button
                  className={`flex aspect-square w-[28px] flex-row items-center justify-center gap-[0] rounded-full bg-[#FFF000]`}></button>
                <button
                  className={`flex aspect-square w-[28px] flex-row items-center justify-center gap-[0] rounded-full bg-[#06CE56]`}></button>
                <button
                  className={`flex aspect-square w-[28px] flex-row items-center justify-center gap-[0] rounded-full bg-[#3DB3FF]`}></button>
                <button
                  className={`flex aspect-square w-[28px] flex-row items-center justify-center gap-[0] rounded-full bg-[#2C3A94]`}></button>
                <button
                  className={`flex aspect-square w-[28px] flex-row items-center justify-center gap-[0] rounded-full bg-[#7706CE]`}></button>
                <button
                  className={`flex aspect-square w-[28px] flex-row items-center justify-center gap-[0] rounded-full bg-[#C1733B]`}></button>
              </div>
              <div className={`mt-[30px]`}>
                <button className={`w-full text-right text-[18px] font-[400] text-[var(--color5)]`}>지우기</button>
              </div>
            </li>
            <li className={`border-t-[1px] border-solid border-t-[var(--color6)] py-[30px]`}>
              <button
                className={`On flex w-full flex-row items-center justify-between gap-[0] text-[24px] font-[700] text-[var(--color1)]`}>
                <div>시즌</div>
                <Image
                  className={`[button.On_>_&]:rotate-180`}
                  src={`/icons/zco_46.svg`}
                  width={16}
                  height={9}
                  alt=''
                />
              </button>
              <div className={`mt-[15px] space-y-[8px]`}>
                <div>
                  <CheckBox size='Lg'>봄/가을</CheckBox>
                </div>
                <div>
                  <CheckBox size='Lg'>여름</CheckBox>
                </div>
                <div>
                  <CheckBox size='Lg'>겨울</CheckBox>
                </div>
                <div>
                  <CheckBox size='Lg'>사계절</CheckBox>
                </div>
              </div>
              <div className={`mt-[30px]`}>
                <button className={`w-full text-right text-[18px] font-[400] text-[var(--color5)]`}>지우기</button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default ListFilter;
