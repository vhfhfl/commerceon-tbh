import Btn from '@/components/form/Btn';
import TextInputBox from '@/components/form/TextInputBox';
import LayoutBasic from '@/layouts/LayoutBasic';
import Image from 'next/image';

function PageResetPw() {
  return (
    <div className={`PageResetPw`}>
      <div className={`SubPageTitle`}>비밀번호 재설정</div>
      <section data-seq={`20230526140603456`} className={`pb-[30vh]`}>
        <div className={`SubPageContBox1`}>
          <div>
            <div className={`WarnTxt1`}>
              <div className={`text-[var(--color2)]`}>
                ※ 새로운 비밀번호 변경시, 00일 내 사용된 비밀번호는 사용이 불가능합니다.
              </div>
            </div>
            <TextInputBox>
              <div slot={'Left'}>
                <input type='password' className={`TextInput1 w-full`} placeholder={`새로운 비밀번호`} />
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
              <div className={`text-[var(--color13)]`}>
                영문(소문자,대문자), 숫자, 특수문자 중 3종류 이상을 조합하여 최소 10자리 이상으로 설정해주세요.
              </div>
            </div>
          </div>
          <div className={`mt-[30px]`}>
            <Btn theme={`Dark`} className={`w-full`}>
              비밀번호 재설정
            </Btn>
          </div>
        </div>
      </section>
    </div>
  );
}

PageResetPw.Layout = LayoutBasic;
export default PageResetPw;
