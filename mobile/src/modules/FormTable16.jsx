import { Fragment } from 'react';
import CheckBox1 from '@/components/form/CheckBox1';

function FormTable16(props) {
  const { className = '', idx } = props;
  return (
    <>
      <div className={`FormTable16 ${className}`}>
        <table className={`Table3 NoBorder`}>
          <colgroup>
            <col className={`w-[80px]`} />
            <col />
          </colgroup>
          <tbody>
            <tr>
              <td>통합회원 여부</td>
              <td>통합완료</td>
            </tr>
            <tr>
              <td>일반아이디</td>
              <td>
                <span>thecustomer</span>
                <span className={`ml-[6px] text-[var(--color2)]`}>제휴회원 (주식회사커머스온)</span>
              </td>
            </tr>
            <tr>
              <td>
                <div className={`leading-[18px]`}>
                  SNS
                  <br />
                  연결 아이디
                </div>
              </td>
              <td>
                <ul className={`space-y-[12px]`}>
                  {['abc@naver.com', 'abc@kakao.com', 'abc@payco.com', 'abc@apple.com'].map((obj, idx) => {
                    return (
                      <Fragment key={idx}>
                        <li>
                          <article className={`CenterBetween`}>
                            <div className={`CenterLeft`}>
                              <div>
                                <img className={`Icon`} src={`/icons/icon_81_${idx + 1}.svg`} alt={``} />
                              </div>
                              <div className={`ml-[11px]`}>{obj}</div>
                            </div>
                            <div className={`ButtonStyle2 ButtonSm`}>연결완료</div>
                          </article>
                        </li>
                      </Fragment>
                    );
                  })}
                </ul>
              </td>
            </tr>
            <tr>
              <td>
                <span className={`text-[var(--color2)]`}>*</span>
                비밀번호
              </td>
              <td>
                <div>
                  <article className={`CenterBetween`}>
                    <button className={`ButtonStyle1 ButtonMd Round w-[110px]`}>비밀번호 변경</button>
                    <button className={`ButtonStyle3 ButtonMd Round ml-[7px] w-[123px]`}>비밀번호 도움말</button>
                  </article>
                  <div className={`InputUi InputSm mt-[7px] w-full`} data-form-hei={`Md`}>
                    <input type={`text`} />
                  </div>
                  <div className={`InputUi InputSm mt-[7px] w-full`} data-form-hei={`Md`}>
                    <input type={`text`} />
                  </div>
                  <div className={`mt-[10px] text-[var(--color13)]`}>비밀번호를 동일하게 입력해주세요.</div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <span className={`text-[var(--color2)]`}>*</span>
                이름
              </td>
              <td>홍길동</td>
            </tr>
            <tr>
              <td>
                <span className={`text-[var(--color2)]`}>*</span>
                닉네임
              </td>
              <td>
                <div className={`InputUi InputSm w-full`} data-form-hei={`Md`}>
                  <input type={`text`} />
                </div>
                <div className={`mt-[10px] text-[var(--color13)]`}>사용 가능한 닉네임 입니다.</div>
              </td>
            </tr>
            <tr>
              <td>이메일</td>
              <td>
                <div className={`InputUi InputSm w-full`} data-form-hei={`Md`}>
                  <input type={`text`} />
                </div>
                <div className={`mt-[12px]`}>
                  <CheckBox1 size={`Sm`}>정보/이벤트 메일 수신에 동의합니다.</CheckBox1>
                  <div className={`mt-[12px] ml-[26px] leading-[18px] text-[var(--color13)]`}>
                    ※ 이메일 주소는 아이디 비밀번호 찾기에
                    <br />
                    활용되므로 정확하게 입력해주세요.
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>휴대폰번호</td>
              <td>
                <div>
                  <article className={`grid grid-cols-[1fr_69px] items-center justify-center gap-[6px]`}>
                    <div className={`InputUi InputSm`} data-form-hei={`Md`}>
                      <input type={`text`} />
                    </div>
                    <button className={`ButtonStyle4 ButtonMd Round`}>번호변경</button>
                  </article>
                  <div className={`mt-[12px]`}>
                    <CheckBox1 size={`Sm`}>정보/이벤트 SMS 수신에 동의합니다.</CheckBox1>
                  </div>
                  <div className={`mt-[18px]`}>
                    <article className={`grid grid-cols-[1fr_101px] items-center justify-center gap-[6px]`}>
                      <div className={`InputUi InputSm`} data-form-hei={`Md`}>
                        <input type={`text`} />
                      </div>
                      <button className={`ButtonStyle4 ButtonMd Round`}>인증번호신청</button>
                    </article>
                    <div className={`mt-[7px]`}>
                      <article className={`grid grid-cols-[1fr_101px] items-center justify-center gap-[6px]`}>
                        <div className={`InputUi InputSm`} data-form-hei={`Md`}>
                          <input type={`text`} />
                        </div>
                        <button className={`ButtonStyle4 ButtonMd Round`}>인증번호등록</button>
                      </article>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>연락처</td>
              <td>
                <article className={`flex flex-row items-center gap-[5px]`}>
                  <div className={`InputUi InputSm w-[70px]`} data-form-hei={`Md`}>
                    <input type={`text`} placeholder={`010`} />
                  </div>
                  <span>-</span>
                  <div className={`InputUi InputSm w-[70px]`} data-form-hei={`Md`}>
                    <input type={`text`} />
                  </div>
                  <span>-</span>
                  <div className={`InputUi InputSm w-[70px]`} data-form-hei={`Md`}>
                    <input type={`text`} />
                  </div>
                </article>
              </td>
            </tr>
            <tr>
              <td>주소</td>
              <td>
                <div>
                  <div>
                    <article className={`grid grid-cols-[1fr_76px] items-center justify-center gap-[6px]`}>
                      <div className={`InputUi InputSm`} data-form-hei={`Md`}>
                        <input type={`text`} />
                      </div>
                      <button className={`ButtonStyle4 ButtonMd Round`}>우편번호</button>
                    </article>
                    <div className={`mt-[6px]`}>
                      <div className={`InputUi InputSm w-full`} data-form-hei={`Md`}>
                        <input type={`text`} defaultValue={`서울특별시 강남구 삼성동`} />
                      </div>
                      <div className={`InputUi InputSm mt-[6px] w-full`} data-form-hei={`Md`}>
                        <input type={`text`} defaultValue={`1225호`} />
                      </div>
                    </div>
                  </div>
                  <div className={`mt-[12px]`}>
                    <CheckBox1 size={`Sm`}>기본 배송지 설정</CheckBox1>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default FormTable16;
