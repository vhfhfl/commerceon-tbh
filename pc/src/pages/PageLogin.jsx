import TabBtnBox from '@/components/common/TabBtnBox';
import TabChildBox from '@/components/common/TabChildBox';
import Btn from '@/components/form/Btn';
import CheckBox from '@/components/form/CheckBox';
import TextInputBox from '@/components/form/TextInputBox';
import LayoutBasic from '@/layouts/LayoutBasic';
import MemberBenefitInfo from '@/modules/MemberBenefitInfo';
import SnsLogin from '@/modules/SnsLogin';
import Image from 'next/image';
import {Fragment} from 'react';

function PageLogin() {
  return (
    <div className={`PageLogin`}>
      <div className={`SubPageTitle`}>로그인</div>
      <div className={`mx-auto grid w-[1310px] grid-cols-[repeat(auto-fit,minmax(0,1fr))] gap-[0]`}>
        <div data-title='Left' className={`pr-[85px]`}>
          <TabBtnBox theme={`4`} uuid={`203be7d9`}>
            <button className={`On`}>회원 (로그인)</button>
            <button>비회원 (주문조회)</button>
          </TabBtnBox>
          <TabChildBox uuid='203be7d9'>
            <div data-seq='20230523095347648' className={`On`}>
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
                      <Image src={`/icons/zco_40_1.svg`} width={26} height={24} alt='' />
                    </button>
                  </div>
                </TextInputBox>
              </div>
              <div className={`mt-[29px] grid grid-cols-[repeat(2,auto)] items-center justify-between gap-[0]`}>
                <div className={`flex flex-row items-center gap-[10px]`}>
                  <CheckBox>아이디 저장</CheckBox>
                  <CheckBox>로그인 상태 유지</CheckBox>
                </div>
                <div>
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
                              className={`text-[14px] font-[400] text-[var(--color5)]`}>
                              {obj}
                            </a>
                          </li>
                        </Fragment>
                      );
                    })}
                  </ul>
                </div>
              </div>
              <div className={`mt-[34px]`}>
                <Btn theme={'Dark'} className={`w-full`}>
                  로그인
                </Btn>
              </div>
              <div className={`mt-[20px]`}>
                <SnsLogin />
              </div>
            </div>
            <div data-seq='20230523095349490'>
              <TextInputBox>
                <input type={`text`} className={`TextInput1 w-full`} placeholder={`주문자명`} />
              </TextInputBox>
              <TextInputBox>
                <input type={`text`} className={`TextInput1 w-full`} placeholder={`주문번호`} />
              </TextInputBox>
              <div className={`mt-[30px]`}>
                <Btn theme={'Dark'} className={`w-full`}>
                  주문조회
                </Btn>
              </div>
              <div className={`mt-[18px] px-[20px] text-center`}>
                <div className={`text-center text-[12px] font-[400] leading-[16px] text-[var(--color5)]`}>
                  주문번호를 잊으신 경우, 고객센터로 문의하여 주시기 바랍니다.
                  <br />
                  고객센터: 1666-7963
                  <br />
                  상담시간 : 10:00 ~ 17:00 (금요일 : 10:00 ~ 16:00) / 토, 일, 공휴일 휴무
                </div>
              </div>
            </div>
          </TabChildBox>
        </div>
        <div data-title='Right' className={`border-l-[1px] border-solid border-l-[var(--color6)] pl-[85px]`}>
          <MemberBenefitInfo />
        </div>
      </div>
    </div>
  );
}

PageLogin.Layout = LayoutBasic;
export default PageLogin;
