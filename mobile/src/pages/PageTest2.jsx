/**/
import React, { Fragment } from 'react';
import LayoutBasic from '@/layouts/LayoutBasic';
import ItemFlag1 from '@/components/common/ItemFlag1';
import Image from 'next/image';

function PageTest2() {
  return (
    <div className={`PageTest2`}>
      <br />
      <br />
      <br />

      <section data-seq={`20230602153313`}>
        <div
          className={`RR RRR mx-auto flex w-[80px] flex-col items-center justify-center overflow-hidden rounded-[8px] bg-[white] px-[10px] pb-[10px]`}>
          <div className={`mt-[3px] text-[0px]`}>
            <button>
              <Image className={`Icon`} src={`/icons/icon_28.svg`} width={24} height={24} priority alt='' />
            </button>
          </div>
          <div className={`mt-[3px] text-center text-[10px] font-[400] leading-[12px] text-[var(--color1)]`}>
            선택 가능
            <br />
            사은품
          </div>
          <div className={`mt-[8px] space-y-[6px]`}>
            {['1', '2', '3'].map((obj, idx) => {
              return (
                <Fragment key={idx}>
                  <div className={`h-[60px] w-[60px] overflow-hidden rounded-[7px]`}>
                    <Image
                      className={`aspect-square w-full object-cover`}
                      src={`https://picsum.photos/60/60.jpg`}
                      width={60}
                      height={60}
                      priority
                      alt=''
                    />
                  </div>
                </Fragment>
              );
            })}
          </div>
        </div>
      </section>

      <br />
      <br />
      <br />

      <section data-seq={`20230602161519`}>
        <div className={`RR mx-auto w-[360px]`}>
          <div className={`px-[20px] pt-[27px] pb-[13px]`}>
            <div className={`flex flex-row items-center justify-between`}>
              <div>
                <div className={`Montserrat text-[11px] font-[700] text-[var(--color1)]`}>ACUASCUTUM</div>
              </div>
              <button className={`mr-[-10px]`}>
                <Image className={`Icon`} src={`/icons/icon_29.svg`} width={35} height={35} priority alt='' />
              </button>
            </div>
            <div className={`text-[14px] font-[400] leading-[20px] text-[var(--color1)]`}>
              아쿠아스큐텀 여성 피마코튼스판 스트라이프 셔츠
              <br />
              MXDS0180
              <span
                className={`ml-[9px] inline-flex h-[18px] min-w-[44px] flex-row items-center justify-center rounded-[3px] bg-[var(--color2)] px-[4px] text-[10px] font-[400] text-white`}>
                교차할인
              </span>
            </div>
            <div className={`mt-[9px]`}>
              <div className={`flex flex-row items-center justify-start`}>
                <div className={`inline-flex flex-row items-center justify-start`}>
                  <span>
                    <Image className={`Icon`} src={`/icons/icon_30_1.svg`} width={14} height={14} priority alt='' />
                  </span>
                  <span>
                    <Image className={`Icon`} src={`/icons/icon_30_1.svg`} width={14} height={14} priority alt='' />
                  </span>
                  <span>
                    <Image className={`Icon`} src={`/icons/icon_30_1.svg`} width={14} height={14} priority alt='' />
                  </span>
                  <span>
                    <Image className={`Icon`} src={`/icons/icon_30_2.svg`} width={14} height={14} priority alt='' />
                  </span>
                  <span>
                    <Image className={`Icon`} src={`/icons/icon_30_3.svg`} width={14} height={14} priority alt='' />
                  </span>
                </div>
                <div className={`ml-[8px] border-b border-[var(--color5)]`}>
                  <span className={`text-[12px] font-[400] text-[var(--color1)]`}>리뷰</span>
                  <span className={`ml-[2px] text-[12px] font-[600] text-[var(--color5)]`}>432</span>
                </div>
              </div>
            </div>
            <div className={`mt-[30px]`}>
              <div className={`flex flex-row items-center justify-between`}>
                <div>
                  <span className={`Montserrat text-[22px] font-[700] text-[var(--color3)]`}>39,000</span>
                  <span className={`Montserrat ml-[5px] text-[22px] font-[700] text-[var(--color1)]`}>12,900</span>
                  <span className={`ml-[1px] text-[18px] font-[700] text-[var(--color1)]`}>원</span>
                </div>
                <div
                  className={`flex h-[26px] min-w-[70px] flex-row items-center justify-center border border-[var(--color3)] px-[13px] text-center text-[10px] font-[400] text-[var(--color1)]`}>
                  재입고알림
                </div>
              </div>
            </div>
            <div className={`mt-[14px]`}>
              <div className={`flex flex-row items-center justify-start`}>
                <div className={`text-[12px] font-[600] text-[var(--color1)]`}>카드사혜택안내</div>
                <div
                  className={`ml-[4px] inline-flex h-[16px] w-[16px] flex-row items-center justify-center rounded-full bg-[var(--color6)] text-[12px] font-[600] text-[var(--color1)]`}>
                  !
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className={`h-[1px] w-full bg-[var(--color6)]`}></div>
            <div className={`flex h-[54px] flex-row items-center justify-between px-[20px]`}>
              <div className={`text-[12px] font-[600] text-[var(--color1)]`}>회원 혜택가</div>
              <div className={`mr-[-10px] inline-flex flex-row items-center justify-end`}>
                <span className={`Montserrat text-[16px] font-[700] text-[var(--color2)]`}>66%</span>
                <span className={`Montserrat ml-[4px] text-[16px] font-[700] text-[var(--color1)]`}>13,340</span>
                <span className={`Montserrat ml-[1px] text-[12px] font-[600] text-[var(--color1)]`}>원</span>
                <button className={`ml-[1px]`}>
                  <Image className={`Icon`} src={`/icons/icon_31.svg`} width={34} height={34} priority alt='' />
                </button>
              </div>
            </div>
            <div className={`h-[1px] w-full bg-[var(--color6)]`}></div>
          </div>
          <div className={`px-[20px] pt-[27px]`}>
            <div className={`text-[12px] font-[600] text-[var(--color1)]`}>컬러</div>
            <div className={`mt-[12px]`}>
              <div className={`flex flex-row items-center justify-start flex-wrap gap-[7px]`}>
                <div className={`h-[30px] w-[30px] rounded-full border border-[var(--color3)] bg-white`}></div>
                <div
                  className={`h-[30px] w-[30px] rounded-full border border-[var(--color5)] bg-[var(--color5)]`}></div>
                <div
                  className={`h-[30px] w-[30px] rounded-full border border-[var(--color12)] bg-[var(--color12)]`}></div>
                <div
                  className={`h-[30px] w-[30px] rounded-full border border-[var(--color1)] bg-[var(--color1)]`}></div>
              </div>
            </div>
            <div className={`mt-[21px]`}>
              <div className={`text-[12px] font-[600] text-[var(--color1)]`}>사이즈</div>
              <div className={`mt-[12px]`}>
                <div className={`flex flex-row items-center justify-start flex-wrap gap-[5px]`}>
                  <div className={`flex flex-row flex-wrap items-center justify-start gap-[5px]`}>
                    <div
                      className={`inline-flex h-[34px] min-w-[65px] flex-row items-center justify-center border border-[var(--color1)] px-[20px] text-[12px] font-[400] text-[var(--color1)]`}>
                      026
                    </div>
                    <div
                      className={`inline-flex h-[34px] min-w-[65px] flex-row items-center justify-center border border-[var(--color6)] px-[20px] text-[12px] font-[400] text-[var(--color1)]`}>
                      028
                    </div>
                    <div
                      className={`inline-flex h-[34px] min-w-[65px] flex-row items-center justify-center border border-[var(--color6)] bg-[var(--color6)] px-[20px] text-[12px] font-[400] text-[var(--color3)]`}>
                      030
                    </div>
                    <div
                      className={`inline-flex h-[34px] min-w-[65px] flex-row items-center justify-center border border-[var(--color1)] px-[20px] text-[12px] font-[400] text-[var(--color1)]`}>
                      026
                    </div>
                    <div
                      className={`inline-flex h-[34px] min-w-[65px] flex-row items-center justify-center border border-[var(--color6)] px-[20px] text-[12px] font-[400] text-[var(--color1)]`}>
                      028
                    </div>
                    <div
                      className={`inline-flex h-[34px] min-w-[65px] flex-row items-center justify-center border border-[var(--color6)] bg-[var(--color6)] px-[20px] text-[12px] font-[400] text-[var(--color3)]`}>
                      030
                    </div>
                  </div>
                  <div className={`ml-[10px] inline-flex flex-row items-center justify-center Montserrat font-[400] text-[10px] text-[#2b2b2b] min-w-[64px] h-[25px] border border-[var(--color6)]`}>실측사이즈</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <br />
      <br />
      <br />

      <section data-seq={`20230523152130`}>
        <div className={`RR mx-auto w-[360px] px-[20px]`}>
          <div className={`mt-[27px]`}>
            <div className={`text-center text-[22px] font-[600] leading-[30px] text-[var(--color1)]`}>
              TBH SHOP에
              <br />
              오신 것을 환영합니다.
            </div>
            <div className={`mt-[9px]`}>
              <div className={`mx-auto w-[272px]`}>
                <Image
                  className={`aspect-[272/258] w-full object-cover`}
                  src={`/imgs/mmg_1.png`}
                  width={272}
                  height={258}
                  priority
                  alt=''
                />
              </div>
              <div>
                <a
                  href={`#`}
                  target={`_blank`}
                  className={`Montserrat block w-full rounded-[5px] bg-[var(--color1)] py-[18px] text-center text-[14px] font-[500] text-white`}>
                  TBH SHOP 쇼핑하러 가기
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

PageTest2.Layout = LayoutBasic;
export default PageTest2;
