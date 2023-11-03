import TabBtnBox from '@/components/common/TabBtnBox';
import TabChildBox from '@/components/common/TabChildBox';
import Btn from '@/components/form/Btn';
import TextInputBox from '@/components/form/TextInputBox';
import LayoutSub2 from '@/layouts/LayoutSub2';
import Image from 'next/image';

function PageFindId() {
  return (
    <div className={`PageFindId`}>
      <section data-seq={`20230526140603456`} className={`mt-[27px]`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <TabBtnBox theme={`4`} uuid={`43897c49`}>
              <button className={`On`}>아이디 찾기</button>
              <button>비밀번호 재설정</button>
            </TabBtnBox>
            <TabChildBox uuid='43897c49'>
              <div className={`On mt-[30px]`}>
                <Btn theme={`Dark`} className={`w-full`}>
                  본인인증으로 아이디 찾기
                </Btn>
              </div>
              <div>
                <div className={`grid grid-cols-[1fr_auto] items-end justify-center gap-[5px]`}>
                  <TextInputBox>
                    <div slot={'Left'}>
                      <input type={`text`} className={`TextInput1 w-full`} placeholder={`아이디 *`} />
                    </div>
                    <div slot={'Right'}>
                      <Image src={`/icons/zco_13.svg`} width={24} height={24} alt='' />
                    </div>
                  </TextInputBox>
                  <Btn size={'Sm'} className={`w-[70px]`}>
                    확인
                  </Btn>
                </div>
                <div className={`mt-[15px]`}>
                  <TabBtnBox theme={`5`} uuid={`fa87a9e8`}>
                    <button className={`On`}>
                      <div className={`Icon`}>
                        <img src={`/icons/zco_27_1.svg`} alt='' />
                      </div>
                      <div className={`Label`}>이메일 인증</div>
                    </button>
                    <button>
                      <div className={`Icon`}>
                        <img src={`/icons/zco_27_2.svg`} alt='' />
                      </div>
                      <div className={`Label`}>휴대폰 인증</div>
                    </button>
                  </TabBtnBox>
                  <TabChildBox uuid='fa87a9e8'>
                    {/* 2023-05-25 :: START :: KSM : 이메일 인증 */}
                    <div className={`On mt-[40px]`}>
                      <div className={`text-[18px] font-[500] text-[var(--color1)]`}>이메일주소</div>
                      <div className={`grid grid-cols-[1fr_auto] items-end justify-center gap-[5px]`}>
                        <TextInputBox>
                          <input
                            type={`text`}
                            className={`TextInput1 w-full`}
                            placeholder={`가입시 등록한 이메일 주소`}
                          />
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
                        <div className={`text-[var(--color13)]`}>
                          인증시간이 초과됐습니다. 재전송을 해주시기 바랍니다
                        </div>
                        <div className={`text-[var(--color13)]`}>
                          인증번호를 확인하고, 정확하게 입력해주시기 바랍니다.
                        </div>
                      </div>
                    </div>
                    {/* // 2023-05-25 :: END :: KSM : 이메일 인증 */}

                    {/* 2023-05-25 :: START :: KSM : 휴대폰 인증 */}
                    <div className={`mt-[40px]`}>
                      <div className={`text-[18px] font-[500] text-[var(--color1)]`}>휴대폰번호</div>
                      <div className={`grid grid-cols-[1fr_auto] items-end justify-center gap-[5px]`}>
                        <TextInputBox>
                          <input
                            type={`text`}
                            className={`TextInput1 w-full`}
                            placeholder={`-없이 숫자만 입력해주세요.`}
                          />
                        </TextInputBox>
                        <Btn className={`w-[70px]`} size={'Sm'}>
                          재발송
                        </Btn>
                      </div>
                      <div className={`grid grid-cols-[1fr_auto] items-end justify-center gap-[5px]`}>
                        <TextInputBox>
                          <input
                            type={`text`}
                            className={`TextInput1 w-full`}
                            placeholder={`인증번호`}
                            defaultValue={1234}
                          />
                        </TextInputBox>
                        <Btn className={`w-[70px]`} theme={'Dark'} size={'Sm'}>
                          인증완료
                        </Btn>
                      </div>
                      <div className={`WarnTxt1`}>
                        <div className={`text-[var(--color13)]`}>남은시간: 5분 00초</div>
                        <div className={`text-[var(--color13)]`}>
                          인증시간이 초과됐습니다. 재전송을 해주시기 바랍니다
                        </div>
                        <div className={`text-[var(--color13)]`}>
                          인증번호를 확인하고, 정확하게 입력해주시기 바랍니다.
                        </div>
                      </div>
                    </div>
                    {/* // 2023-05-25 :: END :: KSM : 휴대폰 인증 */}
                  </TabChildBox>
                </div>
                <div className={`WarnTxt1`}>
                  <div className={`text-[var(--color13)]`}>일치하는 정보가 없습니다.</div>
                </div>
                <div className={`mt-[30px]`}>
                  <Btn theme={`Dark`} className={`w-full`}>
                    비밀번호 재설정
                  </Btn>
                </div>
                <div className={`relative my-[20px] border-t-[1px] border-solid border-t-[var(--color6)] text-center`}>
                  <div
                    className={`Montserrat absolute left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 bg-white px-[26px] text-[12px] font-[500] text-[var(--color3)]`}>
                    OR
                  </div>
                </div>
                <div>
                  <Btn theme={2} className={`w-full`}>
                    본인인증으로 비밀번호 재설정
                  </Btn>
                </div>
              </div>
            </TabChildBox>
          </div>
        </div>
      </section>
    </div>
  );
}

PageFindId.Layout = LayoutSub2;
export default PageFindId;
