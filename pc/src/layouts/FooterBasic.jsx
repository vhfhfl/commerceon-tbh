import BrandDropDown from '@/modules/BrandDropDown';
import Image from 'next/image';
import {Fragment, useRef} from 'react';

function FooterBasic() {
  const ref_family_btn = useRef();
  const ref_brand_menu = useRef();

  return (
    <footer className={`pb-[100px]`}>
      <div className={'Shell'}>
        <section data-seq={`20230517072422048`} className={`border-y border-[var(--color6)]`}>
          <div className={`H-Box`}>
            <div className={`Inner`}>
              <ul className={`flex h-[60px] flex-row items-center justify-start gap-[60px]`}>
                {['회사소개', '서비스이용약관', '개인정보처리방침', '고객센터', '매장안내', '단체구매', '제휴회원'].map(
                  (obj, idx) => {
                    return (
                      <Fragment key={idx}>
                        <li>
                          <a
                            href={`#`}
                            target={`_blank`}
                            className={`${
                              obj == '개인정보처리방침' && `Strong`
                            } block text-[14px] font-[400] leading-[20px] text-[var(--color1)] [&.Strong]:font-[600] [&.Strong]:underline `}>
                            {obj}
                          </a>
                        </li>
                      </Fragment>
                    );
                  },
                )}
              </ul>
            </div>
          </div>
        </section>
        <section data-seq={`20230517072418799`} className={`mt-[36px]`}>
          <div className={`H-Box`}>
            <div className={`Inner`}>
              <div
                data-seq='20230517072339244'
                className={`grid grid-cols-[29.44%_1fr] items-start justify-center gap-[2.77%]`}>
                <div>
                  {/*LEFT*/}
                  <div
                    className={`Montserrat border-b-[3px] border-[var(--color1)] pb-[16px] text-[14px] font-[700] text-[var(--color1)]`}>
                    고객센터
                  </div>
                  <div className={`mt-[20px]`}>
                    <div className={`text-[12px] font-[500] leading-[20px] text-[var(--color1)]`}>
                      운영시간 : 평일 10:00 ~ 17:00 / 금요일 10:00 ~ 16:00 / 점심시간 12:00 ~ 13:00
                      <br />
                      메일 :{' '}
                      <a className={'underline'} href={`mailto:shopping@basichouse.co.kr`}>
                        shopping@basichouse.co.kr
                      </a>
                    </div>
                    <div className={`mt-[29px] text-[12px] font-[400] text-[var(--color1)]`}>
                      <span>고객님께서 현금으로 결제하신 금액에 대해 안전거래를 보장합니다.</span>
                      <a
                        href={`https://admin.kcp.co.kr/Modules/escrow/kcp_pop.jsp?site_cd=GKIB0`}
                        target={`_blank`}
                        className={`ml-[4px]`}>
                        &#91;서비스가입사실 확인&#93;
                      </a>
                    </div>
                    <div className={`mt-[63px]`}>
                      <div className={`flex flex-row items-center justify-between`}>
                        <div className={`Montserrat text-[26px] font-[600] leading-[28px] text-[var(--color1)]`}>
                          1666-7963
                        </div>
                        <div>
                          <div className={`flex flex-row items-center gap-[10px]`}>
                            <a
                              href={`https://www.google.com`}
                              className={`Montserrat block h-[30px] min-w-[84px] bg-[var(--color1)] px-[29px] text-center text-[12px] font-[500] leading-[30px] text-white`}>
                              FAQ
                            </a>
                            <a
                              href={`https://www.google.com`}
                              className={`Montserrat block h-[30px] min-w-[84px] bg-[var(--color1)] px-[22px] text-center text-[12px] font-[500] leading-[30px] text-white`}>
                              1:1 문의
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  {/*RIGHT*/}
                  <div
                    className={`Montserrat border-b-[3px] border-[var(--color1)] pb-[16px] text-[14px] font-[700] text-[var(--color1)]`}>
                    COMPANY INFO
                  </div>
                  <div className={`mt-[20px]`}>
                    <div className={`grid grid-cols-[1fr_auto] items-start justify-center`}>
                      <div>
                        <ul>
                          <li className={`inline-block text-[12px] font-[400] leading-[20px] text-[var(--color1)]`}>
                            상호명 : (주)티비에이치글로벌
                          </li>
                          <li
                            className={`mx-[14px] inline-block h-[10px] w-[1px] bg-[var(--color1)] text-[12px] font-[400] leading-[20px] text-[var(--color1)]`}></li>
                          <li className={`inline-block text-[12px] font-[400] leading-[20px] text-[var(--color1)]`}>
                            대표 : 우종완
                          </li>
                          <li
                            className={`mx-[14px] inline-block h-[10px] w-[1px] bg-[var(--color1)] text-[12px] font-[400] leading-[20px] text-[var(--color1)]`}></li>
                          <li className={`inline-block text-[12px] font-[400] leading-[20px] text-[var(--color1)]`}>
                            전화 : 1666-7963
                          </li>
                          <li
                            className={`mx-[14px] inline-block h-[10px] w-[1px] bg-[var(--color1)] text-[12px] font-[400] leading-[20px] text-[var(--color1)]`}></li>
                          <li className={`inline-block text-[12px] font-[400] leading-[20px] text-[var(--color1)]`}>
                            팩스 : 02-2140-0998
                          </li>
                          <li
                            className={`mx-[14px] inline-block h-[10px] w-[1px] bg-[var(--color1)] text-[12px] font-[400] leading-[20px] text-[var(--color1)]`}></li>
                          <li className={`inline-block text-[12px] font-[400] leading-[20px] text-[var(--color1)]`}>
                            주소 : 서울특별시 강남구 봉은사로 456(티비에이치빌딩)
                          </li>
                        </ul>
                        <ul>
                          <li className={`inline-block text-[12px] font-[400] leading-[20px] text-[var(--color1)]`}>
                            개인정보관리자 : 장윤석{' '}
                            <a className={`underline`} href={`mailto:shopping@basichouse.co.kr`}>
                              shopping@basichouse.co.kr
                            </a>
                          </li>
                          <li
                            className={`mx-[14px] inline-block h-[10px] w-[1px] bg-[var(--color1)] text-[12px] font-[400] leading-[20px] text-[var(--color1)]`}></li>
                          <li className={`inline-block text-[12px] font-[400] leading-[20px] text-[var(--color1)]`}>
                            사업자등록번호 : 606-81-64892{' '}
                            <a
                              href={`#`}
                              target={`_blank`}
                              className={`ml-[6px] border-b border-[var(--color1)] font-[700]`}>
                              사업자정보확인
                            </a>
                          </li>
                          <li
                            className={`mx-[14px] inline-block h-[10px] w-[1px] bg-[var(--color1)] text-[12px] font-[400] leading-[20px] text-[var(--color1)]`}></li>
                          <li className={`inline-block text-[12px] font-[400] leading-[20px] text-[var(--color1)]`}>
                            통신판매업신고번호 : 제 2014-서울강남-01369호
                          </li>
                        </ul>
                      </div>
                      <div
                        className={`relative w-[200px]`}
                        onMouseLeave={(evt) => {
                          const el_family_btn = ref_family_btn.current;
                          el_family_btn.classList.remove('On');

                          const el_brand_menu = ref_brand_menu.current;
                          el_brand_menu.classList.remove('On');
                        }}>
                        <button
                          ref={ref_family_btn}
                          className={`FamilyBtn Montserrat h-[50px] w-full bg-[var(--color1)] pl-[30px] text-left text-[14px] font-[600] leading-[50px] text-white`}
                          onClick={(evt) => {
                            const el_family_btn = ref_family_btn.current;
                            el_family_btn.classList.toggle('On');

                            const el_brand_menu = ref_brand_menu.current;
                            el_brand_menu.classList.toggle('On');
                          }}>
                          <div>Family Site</div>
                          <div
                            className={`absolute top-[13px] right-[20px] z-10 flex h-[24px] w-[24px] flex-row items-center justify-center`}>
                            <Image
                              className={`Icon rotate-180 duration-300 ease-out will-change-auto [.FamilyBtn.On_&]:rotate-0`}
                              src={`/icons/icon_16.svg`}
                              width={15}
                              height={9}
                              priority
                              alt='열기 아이콘'
                            />
                          </div>
                        </button>
                        <div
                          ref={ref_brand_menu}
                          data-seq='20230517074043435'
                          className={`absolute bottom-[50px] right-[0] z-[100] hidden w-full bg-[#333] [&.On]:block`}>
                          <BrandDropDown size={'Small'} />
                        </div>
                      </div>
                    </div>
                    <div className={`mt-[18px] text-[12px] font-[400] text-[var(--color1)]`}>
                      COPYRIGHT ⓒ 2023 COMMERCEON . ALL RIGHTS RESERVED
                    </div>
                    <div className={`mt-[43px]`}>
                      <div className={`flex flex-row items-center justify-start`}>
                        <div>
                          <a href={`#`} target={`_blank`} className={`group`}>
                            <Image
                              className={`aspect-[233/70] object-contain group-hover:hidden`}
                              src={`/imgs/APP.png`}
                              width={233}
                              height={70}
                              alt=''
                            />
                            <Image
                              className={`hidden aspect-[233/70] object-contain group-hover:inline-block`}
                              src={`/imgs/APP_hover.png`}
                              width={233}
                              height={70}
                              alt=''
                            />
                          </a>
                        </div>
                        <div className={`ml-[26px]`}>
                          <a href={`#`} target={`_blank`} className={`group`}>
                            <Image
                              className={`aspect-square object-contain group-hover:hidden`}
                              src={`/imgs/cacao.png`}
                              width={55}
                              height={55}
                              alt=''
                            />
                            <Image
                              className={`hidden aspect-square object-contain group-hover:inline-block`}
                              src={`/imgs/cacao_hover.png`}
                              width={55}
                              height={55}
                              alt=''
                            />
                          </a>
                          <div className={`mt-[8px] text-[12px] font-[400] text-[car(--color1)]`}>카카오 채널</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
}

export default FooterBasic;
