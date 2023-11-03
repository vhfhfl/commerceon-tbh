import Btn from '@/components/form/Btn';
import TextInputBox from '@/components/form/TextInputBox';
import LayoutBasic from '@/layouts/LayoutBasic';
import Image from 'next/image';

function PageResetPwd() {
  return (
    <div className={`PageResetPwd`}>
      <div className={`SubPageTitle`}>TBH SHOP 비밀번호 재설정 안내</div>
      <section data-seq={`20230522180448`} className={`mt-[27px]`}>
        <div className={`SubPageContBox1`}>
          <div className={`mx-auto text-center text-[16px] font-[400] leading-[20px] text-[var(--color1)]`}>
            안녕하세요.
            <br />
            고객님께서 <strong>TBH SHOP 의 비밀번호를 변경하신지 00일이</strong> 지났습니다.
            <br />
            서비스를 안전하게 이용하실 수 있도록 주기적으로 비밀번호를 변경해주세요.
          </div>
          <div>
            <TextInputBox>
              <div slot={'Left'}>
                <input type='password' className={`TextInput1 w-full`} placeholder={`현재 비밀번호`} />
              </div>
              <div slot={'Right'}>
                <Image src={`/icons/zco_44.svg`} width={24} height={24} alt='' />
                <button className={`flex h-full flex-row items-center justify-center`}>
                  <Image src={`/icons/zco_40_2.svg`} width={26} height={24} alt='' />
                </button>
              </div>
            </TextInputBox>
            <div className={`WarnTxt1`}>
              <div className={`text-[var(--color13)]`}>비밀번호가 일치하지 않습니다.</div>
            </div>

            <TextInputBox>
              <div slot={'Left'}>
                <input type='password' className={`TextInput1 w-full`} placeholder={`새로운 비밀번호`} />
              </div>
              <div slot={'Right'}>
                <Image src={`/icons/zco_44.svg`} width={24} height={24} alt='' />
                <button className={`flex h-full flex-row items-center justify-center`}>
                  <Image src={`/icons/zco_40_1.svg`} width={26} height={24} alt='' />
                </button>
              </div>
            </TextInputBox>
            <div className={`WarnTxt1`}>
              <div className={`text-[var(--color13)]`}>
                영문(소문자,대문자), 숫자, 특수문자 중 3종류 이상을 조합하여 최소 10자리 이상으로 설정해주세요.
              </div>
            </div>

            <TextInputBox>
              <div slot={'Left'}>
                <input type='password' className={`TextInput1 w-full`} placeholder={`새로운 비밀번호 재확인`} />
              </div>
              <div slot={'Right'}>
                <Image src={`/icons/zco_44.svg`} width={24} height={24} alt='' />
                <button className={`flex h-full flex-row items-center justify-center`}>
                  <Image src={`/icons/zco_40_1.svg`} width={26} height={24} alt='' />
                </button>
              </div>
            </TextInputBox>
            <div className={`WarnTxt1`}>
              <div className={`text-[var(--color13)]`}>000내 사용된 비밀번호 입니다.</div>
              <div className={`text-[var(--color5)]`}>
                ※ 새로운 비밀번호 변경시, 00일 내 사용된 비밀번호는 사용이 불가능합니다.
              </div>
            </div>
          </div>
        </div>
      </section>
      <section data-seq={`20230525224912513`} className={`mt-[35px]`}>
        <div className={`SubPageContBox1`}>
          <Btn theme={'Dark'} className={`w-full`}>
            비밀번호 재설정
          </Btn>
          <Btn className={`mt-[10px] w-full`}>30일뒤에 변경하기</Btn>
        </div>
      </section>
    </div>
  );
}

PageResetPwd.Layout = LayoutBasic;
export default PageResetPwd;
