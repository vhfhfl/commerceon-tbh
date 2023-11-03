import InfoBox1 from '@/components/common/InfoBox1';
import TabBtnBox from '@/components/common/TabBtnBox';
import TabChildBox from '@/components/common/TabChildBox';
import Btn from '@/components/form/Btn';
import TextInputBox from '@/components/form/TextInputBox';
import LayoutBasic from '@/layouts/LayoutBasic';

function PageDormantMember() {
  return (
    <div className={`PageDormantMember`}>
      <div className={`SubPageTitle`}>TBH SHOP 휴면회원 안내</div>
      <section data-seq={`20230522180448`} className={`mt-[27px]`}>
        <div className={`SubPageContBox1`}>
          <div className={`mx-auto text-center text-[14px] font-[400] leading-[20px] text-[var(--color1)]`}>
            안녕하세요.
            <br />
            고객님께서
            <span className={`font-[600]`}>1년 이상 로그인을 하지 않아 관련 법령에 따라 휴면상태로 전환</span>
            되었습니다.
            <br />
            서비스를 계속 이용하시려면 &nbsp;
            <span className={`font-[600] text-[var(--color2)]`}>&#91;휴면회원 해제&#93;</span>를 진행해주세요.
          </div>
          <div className={`mt-[25px]`}>
            <InfoBox1>
              <div>마지막 접속일</div>
              <div>2022-04-10 12:00:00</div>
            </InfoBox1>
            <InfoBox1>
              <div>휴면회원 전환일</div>
              <div>2022-04-10 12:00:00</div>
            </InfoBox1>
          </div>
        </div>
      </section>
      <section data-seq={`20230525213749697`} className={`mt-[35px]`}>
        <div className={`SubPageContBox1`}>
          <div className={`text-[18px] font-[500] text-[var(--color1)]`}>해제 방법</div>
          <div className={`mt-[15px]`}>
            <TabBtnBox theme={`5`} uuid={`a9544032`}>
              <button>
                <div className={`Icon`}>
                  <img src={`/icons/zco_41_1.svg`} alt='' />
                </div>
                <div className={`Label`}>이메일 인증</div>
              </button>
              <button className={`On`}>
                <div className={`Icon`}>
                  <img src={`/icons/zco_41_2.svg`} alt='' />
                </div>
                <div className={`Label`}>휴대폰 인증</div>
              </button>
              <button>
                <div className={`Icon`}>
                  <img src={`/icons/zco_41_3.svg`} alt='' />
                </div>
                <div className={`Label`}>본인인증</div>
              </button>
            </TabBtnBox>
            <TabChildBox uuid='a9544032'>
              {/* 2023-05-25 :: START :: KSM : 이메일 인증 */}
              <div className={`mt-[40px]`}>
                <div className={`text-[18px] font-[500] text-[var(--color1)]`}>이메일주소</div>
                <div className={`grid grid-cols-[1fr_auto] items-end justify-center gap-[5px]`}>
                  <TextInputBox>
                    <input type={`text`} className={`TextInput1 w-full`} placeholder={`가입시 등록한 이메일 주소`} />
                  </TextInputBox>
                  <Btn className={`w-[70px]`} size={'Sm'}>
                    재발송
                  </Btn>
                </div>
                <div className={`grid grid-cols-[1fr_auto] items-end justify-center gap-[5px]`}>
                  <TextInputBox>
                    <input type={`text`} className={`TextInput1 w-full`} placeholder={`인증번호`} />
                  </TextInputBox>
                  <Btn className={`w-[70px]`} size={'Sm'}>
                    인증하기
                  </Btn>
                </div>
                <div className={`WarnTxt1`}>
                  <div className={`text-[var(--color13)]`}>남은시간: 5분 00초</div>
                  <div className={`text-[var(--color13)]`}>인증시간이 초과됐습니다. 재전송을 해주시기 바랍니다</div>
                  <div className={`text-[var(--color13)]`}>인증번호를 확인하고, 정확하게 입력해주시기 바랍니다.</div>
                </div>
              </div>
              {/* // 2023-05-25 :: END :: KSM : 이메일 인증 */}

              {/* 2023-05-25 :: START :: KSM : 휴대폰 인증 */}
              <div className={`On mt-[40px]`}>
                <div className={`text-[18px] font-[500] text-[var(--color1)]`}>휴대폰번호</div>
                <div className={`grid grid-cols-[1fr_auto] items-end justify-center gap-[5px]`}>
                  <TextInputBox>
                    <input type={`text`} className={`TextInput1 w-full`} placeholder={`-없이 숫자만 입력해주세요.`} />
                  </TextInputBox>
                  <Btn className={`w-[70px]`} size={'Sm'}>
                    재발송
                  </Btn>
                </div>
                <div className={`grid grid-cols-[1fr_auto] items-end justify-center gap-[5px]`}>
                  <TextInputBox>
                    <input type={`text`} className={`TextInput1 w-full`} placeholder={`인증번호`} defaultValue={1234} />
                  </TextInputBox>
                  <Btn className={`w-[70px]`} theme={'Dark'} size={'Sm'}>
                    인증완료
                  </Btn>
                </div>
                <div className={`WarnTxt1`}>
                  <div className={`text-[var(--color13)]`}>남은시간: 5분 00초</div>
                  <div className={`text-[var(--color13)]`}>인증시간이 초과됐습니다. 재전송을 해주시기 바랍니다</div>
                  <div className={`text-[var(--color13)]`}>인증번호를 확인하고, 정확하게 입력해주시기 바랍니다.</div>
                </div>
              </div>
              {/* // 2023-05-25 :: END :: KSM : 휴대폰 인증 */}

              <div className={`mt-[40px]`}>
                <TabBtnBox theme={`5`}>
                  <button>
                    <div className={`Icon`}>
                      <img src={`/icons/zco_41_1.svg`} alt='' />
                    </div>
                    <div className={`Label`}>이메일 인증</div>
                  </button>
                  <button>
                    <div className={`Icon`}>
                      <img src={`/icons/zco_41_2.svg`} alt='' />
                    </div>
                    <div className={`Label`}>휴대폰 인증</div>
                  </button>
                  <button className={`rounded-[10px] bg-black before:!hidden`}>
                    <div className={`Icon`}>
                      <img src={`/icons/zco_41_4.svg`} alt='' />
                    </div>
                    <div className={`Label !text-white`}>본인인증 완료</div>
                  </button>
                </TabBtnBox>
              </div>
            </TabChildBox>
          </div>
        </div>
      </section>
      <section data-seq={`20230525213722492`} className={``}>
        <div className={`SubPageContBox1`}>
          <div className={`mt-[30px]`}>
            <Btn theme={1} className={`w-full`}>
              휴면회원 해제
            </Btn>
          </div>
        </div>
      </section>
    </div>
  );
}

PageDormantMember.Layout = LayoutBasic;
export default PageDormantMember;
