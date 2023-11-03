import Image from 'next/image';
import {useRouter} from 'next/router';
import {useRef} from 'react';

function FooterCollapse() {
  const ref_collapse_btn = useRef();
  const ref_accordion = useRef();

  const router = useRouter();

  return (
    <div className={`FooterCollapse`}>
      {/* prettier-ignore */}
      <style jsx global>{`
        /* 전역 선언 */
        /* .FootMenuList{ outline:1px dashed red; } */
        .FootMenuList{--gap:28px;--gap-half:calc(-28px / 2);}
        .FootMenuList{display:flex;align-items:center;justify-content:center;gap:28px;}
        .FootMenuList > li{position:relative;}
        /* .FootMenuList > li{ outline:1px dashed red; } */
        .FootMenuList > li + li:before{border-left:1px solid var(--color3);width:1px;height:10px;top:50%;transform:translateY(-50%);left:var(--gap-half);display:inline-block;content:'';position:absolute;z-index:3;background-position:center;background-repeat:no-repeat;}
        .FootMenuList > li > a{display:flex;align-items:center;justify-content:center;}
        .FootMenuList > li > a{font-weight:400;font-size:12px;color:var(--color1);line-height:100%;}
        .FootMenuList > li > a{height:42px;}
        .FootMenuList > li.Bold > a{font-weight:700;}
        /**/
        .FootTit1{font-family:'Montserrat', Pretendard, sans-serif;}
        .FootTit1{font-weight:700;font-size:12px;color:var(--color1);line-height:100%;}
        .FootTit1{padding-bottom:18px;border-bottom:3px solid var(--color1);}
        /**/
        .FootBtn1{font-family:'Montserrat', Pretendard, sans-serif;}
        .FootBtn1{font-weight:600;font-size:10px;color:white;line-height:12px;height:30px;background-color:var(--color1);}
      `}</style>
      <div className={`H-Box`}>
        <div className={`Inner`}>
          <div className={`pb-[54px]`}>
            {/* 2023-05-07 :: START :: KSM : 아코디언 컨트롤 버튼 */}
            <button
              ref={ref_collapse_btn}
              className={`RR CollapseBtn flex w-full flex-row items-center justify-center py-[4px]`}
              onClick={(evt) => {
                // const target = evt.target.closest('div');
                // console.log(target);
                const el_collapse_btn = ref_collapse_btn.current;
                el_collapse_btn.classList.toggle('On');

                const el_accordion = ref_accordion.current;
                el_accordion.classList.toggle('On');
              }}>
              <div>
                <Image src={`/logos/brand_logo_black.svg`} width={105} height={13} alt='로고' />
              </div>
              <div className={`ml-[6px] h-[18px] w-[18px]`}>
                <Image
                  className={`Icon duration-300 ease-out will-change-auto [.CollapseBtn.On_&]:rotate-180`}
                  src={`/icons/icon_6.svg`}
                  width={18}
                  height={18}
                  priority
                  alt='아래 화살표'
                />
              </div>
            </button>
            {/* // 2023-05-07 :: END :: KSM : 아코디언 컨트롤 버튼 */}
            <div className={`mt-[16px]`}>
              <ul className={`FootMenuList`}>
                <li>
                  <a href={`#`} target={`_blank`}>
                    로그인
                  </a>
                </li>
                <li>
                  <a href={`#`} target={`_blank`}>
                    이용약관
                  </a>
                </li>
                <li>
                  <a href={`#`} target={`_blank`} className={`!font-[700]`}>
                    개인정보처리방침
                  </a>
                </li>
                <li>
                  <a href={`#`} target={`_blank`}>
                    고객센터
                  </a>
                </li>
              </ul>
            </div>

            {/* accordion :: START*/}
            <div ref={ref_accordion} className={`AccordionWrap mt-[17px]`}>
              <div className={`pt-[20px] pb-[20px]`}>
                <div className={`CSCenter`}>
                  <div className={`Head`}>
                    <div className={`FootTit1`}>고객센터</div>
                  </div>
                  <div className={`Body`}>
                    <div className={`mt-[20px]`}>
                      <div className={`grid grid-cols-[1fr_auto] items-end`}>
                        <div>
                          <div className={`Montserrat text-[18px] font-[700]`}>1666-7963</div>
                          <div
                            className={`mt-[20px] space-y-[4px] text-[12px] font-[400] leading-[24px] text-[var(--color1)]`}>
                            평일 10:00 ~ 17:00
                            <br />
                            금요일 10:00 ~ 16:00
                            <br />
                            점심시간 12:00 ~ 13:00
                            <br />
                          </div>
                        </div>
                        <div className={`flex flex-col items-end gap-[10px]`}>
                          <button className={`FootBtn1 block w-[84px]`}>FAQ</button>
                          <button className={`FootBtn1 block w-[84px]`}>1:1 문의</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={`mt-[31px]`}>
                  <div className={`text-[12px] font-[400] text-[var(--color1)] opacity-80`}>
                    고객님께서 현금으로 결제하신 금액에 대해 안전거래를 보장합니다.
                  </div>
                  <a
                    className={`mt-[8px] block text-[12px] font-[700] text-[var(--color1)] opacity-80`}
                    href={`#`}
                    target={`_blank`}>
                    &#91;서비스가입사실 확인&#93;
                  </a>
                </div>

                <div className={`mt-[40px]`}>
                  <div className={`Head`}>
                    <div className={`FootTit1`}>COMPANY INFO</div>
                  </div>
                  <div className={`Body`}>
                    <div className={`mt-[20px]`}>
                      <ul className={`flex flex-wrap gap-[8px_16px] text-[12px] font-[400] text-[var(--color1)]`}>
                        <li>상호명 : &#40;주&#41;티비에이치글로벌</li>
                        <li>대표 : 우종완</li>
                        <li>전화 : 1666-7963</li>
                        <li>팩스 : 02-2140-0998</li>
                        <li>주소 : 서울특별시 강남구 봉은사로 456 &#40;티비에이치빌딩&#41;</li>
                        <li>
                          <span>개인정보관리자 : 장윤석</span>
                          <a href={`mailto:shopping@basichouse.co.kr`} className={`Link1 ml-[8px]`}>
                            shopping@basichouse.co.kr
                          </a>
                        </li>
                        <li>
                          <span>사업자등록번호 : 606-81-64892</span>
                          <a href={`#`} target={`_blank`} className={`Link1 ml-[8px]`}>
                            사업자정보확인
                          </a>
                        </li>
                        <li>통신판매업신고번호 : 제 2014-서울강남-01369호</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className={`mt-[31px]`}>
                  <div>
                    <a href={`#`} target={`_blank`} className={`inline-block text-[0px]`}>
                      <Image className={`block`} src={`/imgs/APP.png`} width={233} height={70} alt='' />
                    </a>
                    <a href={`#`} target={`_blank`} className={`ml-[20px] inline-block`}>
                      <Image src={`/imgs/cacao.png`} width={55} height={55} alt='' />
                      <div className={`mt-[8px] text-[12px] font-[400] text-[var(--color1)]`}>카카오 채널</div>
                    </a>
                  </div>
                </div>

                <div className={`mt-[40px]`}>
                  <ul className={`FootMenuList`}>
                    <li>
                      <a href={`#`} target={`_blank`}>
                        회사소개
                      </a>
                    </li>
                    <li>
                      <a href={`#`} target={`_blank`}>
                        매장안내
                      </a>
                    </li>
                    <li>
                      <a href={`#`} target={`_blank`}>
                        단체구매
                      </a>
                    </li>
                    <li>
                      <a href={`#`} target={`_blank`}>
                        고객센터
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* accordion :: END*/}

            <div className={`mt-[20px] text-center text-[11px] font-[400] text-[var(--color1)]`}>
              COPYRIGHTⓒ2023 COMMERCEON.ALL RIGHTS RESERVED
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterCollapse;
