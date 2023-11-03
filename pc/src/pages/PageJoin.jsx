import Btn from '@/components/form/Btn';
import CheckBox1 from '@/components/form/CheckBox1';
import RadioBtn from '@/components/form/RadioBtn';
import TextInputBox from '@/components/form/TextInputBox';
import LayoutBasic from '@/layouts/LayoutBasic';
import TermsBox from '@/modules/TermsBox';
import Image from 'next/image';

function PageJoin() {
  return (
    <div className={`PageJoin`}>
      <section data-seq={`20230526082056022`}>
        <div className={`SubPageTitle`}>회원가입</div>
        <div className={`SubPageContBox1`}>
          <div className={`FormTitle1`}>
            <div className={`text1`}>기본정보</div>
            <div className={`text2`}>* 필수 입력 항목입니다.</div>
          </div>
          <div>
            <TextInputBox>
              <input type={`text`} className={`TextInput1 w-full`} placeholder={`아이디 *`} />
            </TextInputBox>
            <div className={`WarnTxt1`}>
              <div className={`text-[var(--color13)]`}>이미 사용중인 아이디 입니다.</div>
            </div>
            <TextInputBox>
              <div slot={'Left'}>
                <input type='password' className={`TextInput1 w-full`} placeholder={`비밀번호 *`} />
              </div>
              <div slot={'Right'}>
                <button className={`flex h-full flex-row items-center justify-center`}>
                  <Image src={`/icons/zco_40_1.svg`} width={26} height={24} alt='' />
                </button>
              </div>
            </TextInputBox>
            <div className={`WarnTxt1`}>
              <div className={`text-[var(--color13)]`}>
                영문(소문자,대문자), 숫자, 특수문자 중 3종류 이상을 조합하여
                <br />
                최소 10자리이상으로 설정해주세요.
              </div>
            </div>
            <TextInputBox>
              <div slot={'Left'}>
                <input type='password' className={`TextInput1 w-full`} placeholder={`비밀번호 재입력 *`} />
              </div>
              <div slot={'Right'}>
                <button className={`flex h-full flex-row items-center justify-center`}>
                  <Image src={`/icons/zco_40_1.svg`} width={26} height={24} alt='' />
                </button>
              </div>
            </TextInputBox>
            <div className={`WarnTxt1`}>
              <div className={`text-[var(--color13)]`}>비밀번호가 일치하지 않습니다.</div>
            </div>
            <TextInputBox>
              <div slot={'Left'}>
                <input type={`text`} className={`TextInput1 w-full`} placeholder={`이름 *`} />
              </div>
              <div slot={'Right'}>
                <Image src={`/icons/zco_44.svg`} width={24} height={24} alt='' />
              </div>
            </TextInputBox>
            <TextInputBox>
              <input type={`text`} className={`TextInput1 w-full`} placeholder={`닉네임`} />
            </TextInputBox>
            <div className={`WarnTxt1`}>
              <div className={`text-[var(--color13)]`}>이미 사용중인 닉네임 입니다.</div>
            </div>
            <TextInputBox>
              <input type={`text`} className={`TextInput1 w-full`} placeholder={`이메일 *`} />
            </TextInputBox>
            <div className={`WarnTxt1`}>
              <div className={`text-[var(--color13)]`}>이미 사용중인 이메일 입니다.</div>
            </div>
            <div className={`mt-[9px]`}>
              <CheckBox1>정보/이벤트 메일 수신에 동의합니다.</CheckBox1>
            </div>
            <TextInputBox>
              <div slot={'Left'}>
                <input type={`text`} className={`TextInput1 w-full`} placeholder={`휴대폰번호 *`} />
              </div>
              <div slot={'Right'}>
                <Image src={`/icons/zco_44.svg`} width={24} height={24} alt='' />
              </div>
            </TextInputBox>
            <div className={`mt-[9px]`}>
              <CheckBox1>정보/이벤트 SMS 수신에 동의합니다.</CheckBox1>
            </div>
            <TextInputBox>
              <input type={`text`} className={`TextInput1 w-full`} placeholder={`전화번호`} />
            </TextInputBox>
            <div className={`grid grid-cols-[1fr_auto] items-end justify-center gap-[5px]`}>
              <TextInputBox>
                <input type={`text`} className={`TextInput1 w-full`} placeholder={`주소 *`} />
              </TextInputBox>
              <Btn size={'Sm'}>우편번호 검색</Btn>
            </div>
            <TextInputBox>
              <input type={`text`} className={`TextInput1 w-full`} placeholder={`상세주소 *`} />
            </TextInputBox>
            <TextInputBox>
              <input type={`text`} className={`TextInput1 w-full`} placeholder={`추천인 아이디`} />
            </TextInputBox>
            <div className={`WarnTxt1`}>
              <div className={`text-[var(--color13)]`}>가입된 아이디가 아닙니다.</div>
            </div>
            <div className={`mt-[44px] flex flex-row items-center justify-between`}>
              <div className={`text-[18px] font-[600] text-[var(--color1)]`}>휴면회원 방지기간</div>
              <div className={`ml-[10px] flex flex-row items-center justify-center gap-[25px]`}>
                <RadioBtn name={`83ac7dba`}>1년</RadioBtn>
                <RadioBtn name={`83ac7dba`}>3년</RadioBtn>
                <RadioBtn name={`83ac7dba`}>5년</RadioBtn>
                <RadioBtn name={`83ac7dba`}>탈퇴시</RadioBtn>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section data-seq={`20230526082056022`} className={`mt-[74px]`}>
        <div className={`SubPageContBox1`}>
          <div className={`FormTitle1`}>
            <div className={`text1`}>부가정보</div>
          </div>
          <div className={`mt-[48px] flex flex-row items-center justify-between`}>
            <div className={`text-[18px] font-[500] text-[var(--color1)]`}>결혼 여부</div>
            <div className={`ml-[10px] flex flex-row items-center justify-center gap-[25px]`}>
              <RadioBtn name={`83ac7dba`}>미혼</RadioBtn>
              <RadioBtn name={`83ac7dba`}>기혼</RadioBtn>
            </div>
          </div>
          <TextInputBox>
            <input type={`text`} className={`TextInput1 w-full`} placeholder={`결혼기념일`} />
          </TextInputBox>
          <TextInputBox>
            <input type={`text`} className={`TextInput1 w-full`} placeholder={`추천매장코드`} />
          </TextInputBox>
          <div className={`WarnTxt1`}>
            <div className={`text-[var(--color13)]`}>매장코드를 다시 확인해주세요.</div>
          </div>
        </div>
      </section>
      <section data-seq={`20230526082056022`} className={`mt-[84px]`}>
        <div className={`SubPageContBox1`}>
          <div className={`FormTitle2`}>
            <div className={`text1`}>약관동의</div>
          </div>
          <div data-seq='20230526091345135' className={`mt-[8px]`}>
            <div>
              <CheckBox1>
                <span className={`text-[var(--color13)]`}>(필수)</span> 만 14세 이상입니다.
              </CheckBox1>
              <div className={`mt-[7px]`}>
                <CheckBox1>TBH SHOP의 모든 약관을 확인하고 전체 동의합니다. (전체동의, 선택항목도 포함됩니다.)</CheckBox1>
              </div>
            </div>
            <div className={`mt-[30px]`}>
              <CheckBox1>
                <span className={`text-[var(--color13)]`}>(필수)</span> 이용약관
              </CheckBox1>
              <div className={`mt-[5px]`}>
                <TermsBox className={`h-[258px]`} />
              </div>
            </div>
            <div className={`mt-[25px]`}>
              <CheckBox1>
                <span className={`text-[var(--color13)]`}>(필수)</span> 개인정보 수집 및 이용
              </CheckBox1>
              <div className={`mt-[5px]`}>
                <TermsBox className={`h-[258px]`} />
              </div>
            </div>
            <div className={`mt-[25px]`}>
              <CheckBox1>
                <span className={`text-[var(--color5)]`}>(선택)</span> 개인정보 수집 및 이용
              </CheckBox1>
              <div className={`mt-[5px]`}>
                <TermsBox className={`h-[258px]`} />
              </div>
            </div>
            <div className={`mt-[30px]`}>
              <Btn theme={'Dark'} className={`w-full`}>가입완료</Btn>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

PageJoin.Layout = LayoutBasic;
export default PageJoin;
