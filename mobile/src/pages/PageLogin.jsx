import TabBtnBox from '@/components/common/TabBtnBox';
import TabChildBox from '@/components/common/TabChildBox';
import Btn from '@/components/form/Btn';
import CheckBox from '@/components/form/CheckBox';
import TextInputBox from '@/components/form/TextInputBox';
import LayoutSub from '@/layouts/LayoutSub';
import MemberBenefitInfo from '@/modules/MemberBenefitInfo';
import SnsLogin from '@/modules/SnsLogin';
import Image from 'next/image';
import Link from 'next/link';
import {Fragment} from 'react';

function PageLogin() {
  return (
    <div className={`PageLogin`}>
      <section data-seq={`20230523093041509`} className={`mt-[27px]`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <TabBtnBox theme={`4`} uuid={`203be7d9`}>
              <button className={`On`}>회원 (로그인)</button>
              <button>비회원 (주문조회)</button>
            </TabBtnBox>
            <TabChildBox uuid='203be7d9'>
              <div data-seq={`20230523095347648`} className={`On`}>
                <div className={`mt-[15px]`}>
                  <TextInputBox>
                    <input type={`text`} className={`TextInput1 w-full`} placeholder={`아이디`} />
                  </TextInputBox>
                  <TextInputBox>
                    <div slot={'Left'}>
                      <input type='password' className={`TextInput1 w-full`} placeholder={`비밀번호`} />
                    </div>
                    <div slot={'Right'}>
                      <button className={`flex h-full flex-row items-center justify-center`}>
                        <Image src={`/icons/zco_11_1.svg`} width={26} height={24} alt='' />
                      </button>
                    </div>
                  </TextInputBox>
                </div>
                <div className={`mt-[13px] flex flex-row items-center gap-[13px]`}>
                  <CheckBox size={'Sm'}>아이디 저장</CheckBox>
                  <CheckBox size={'Sm'}>로그인 상태 유지</CheckBox>
                </div>
                <div className={`mt-[27px]`}>
                  <Btn theme={'Dark'} className={`w-full`}>
                    로그인
                  </Btn>
                </div>
                <div className={`mt-[20px]`}>
                  <ul className={`flex flex-row items-center justify-center gap-[30px]`}>
                    {['아이디 찾기', '비밀번호 재설정', '회원가입'].map((obj, idx) => {
                      return (
                        <Fragment key={idx}>
                          <li className={`relative`}>
                            <div
                              className={`absolute top-1/2 left-[-15px] z-10 h-[10px] w-[1px] -translate-y-1/2 bg-[var(--color6)] text-[0px] [li:first-child_>_&]:hidden`}>
                              Bar
                            </div>
                            <a
                              href={`https://www.google.com`}
                              target={`_blank`}
                              className={`text-[12px] font-[400] text-[var(--color5)]`}>
                              {obj}
                            </a>
                          </li>
                        </Fragment>
                      );
                    })}
                  </ul>
                </div>
                <div className={`mt-[23px]`}>
                  <SnsLogin />
                </div>
              </div>
              <div data-seq={`20230523095349490`}>
                <TextInputBox>
                  <input type={`text`} className={`TextInput1 w-full`} placeholder={`주문자명`} />
                </TextInputBox>
                <TextInputBox>
                  <input type={`text`} className={`TextInput1 w-full`} placeholder={`주문번호`} />
                </TextInputBox>
                <div className={`mt-[27px]`}>
                  <Btn theme={'Dark'} className={`w-full`}>
                    주문조회
                  </Btn>
                </div>
                <div className={`mt-[18px] px-[20px] text-center`}>
                  <div className={`text-center text-[10px] font-[400] leading-[14px] text-[var(--color5)]`}>
                    주문번호를 잊으신 경우,
                    <br />
                    고객센터로 문의하여 주시기 바랍니다.
                    <br />
                    상담시간 : 10:00 ~ 17:00 &#40;금요일 : 10:00 ~ 16:00&#41;
                    <br />
                    토, 일, 공휴일 휴무
                  </div>
                  <div className={`mt-[17px]`}>
                    <a
                      href={`https://www.google.com`}
                      target={`_blank`}
                      className={`flex flex-row items-center justify-center`}>
                      <div
                        className={`flex h-[40px] min-w-[103px] flex-row items-center  justify-center rounded-[100px] border border-[var(--color1)] px-[22px]`}>
                        <Image className={`Icon`} src={`/icons/icon_21.svg`} width={10} height={10} alt='' />
                        <span className={`ml-[6px] text-[12px] font-[400] text-[var(--color1)]`}>고객센터</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </TabChildBox>
          </div>
        </div>
      </section>
      <section data-seq={`20230523101511355`} className={`mt-[140px]`}>
        <div className={`flex flex-row items-center justify-center`}>
          <Link
            href={`https://www.google.com`}
            target={`_blank`}
            className={`text-[12px] font-[400] text-[var(--color1)] underline underline-offset-2`}>
            앱 다운로드
          </Link>
        </div>
        <div className={`mt-[20px]`}>
          <MemberBenefitInfo />
        </div>
      </section>
    </div>
  );
}

PageLogin.Layout = LayoutSub;
export default PageLogin;
