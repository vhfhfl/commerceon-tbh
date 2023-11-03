import CheckBox1 from '@/components/form/CheckBox1';
import {Fragment} from 'react';

function FormTable20(props) {
  const { className = '' } = props;
  return (
    <>
      <div className={`FormTable20 ${className}`}>
        <table className={`Table1 Form`}>
          <tbody>
            <tr>
              <td>통합회원여부</td>
              <td>
                <div>통합완료</div>
              </td>
            </tr>
            <tr>
              <td>일반아이디</td>
              <td>
                <article className={`CenterLeft`}>
                  <div className={`text-[16px] font-[400] text-[#161616]`}>tbhcustomer</div>
                  <div className={`ml-[12px] text-[14px] font-[400] text-[#68f]`}>제휴회원 (주식회사커머스온)</div>
                </article>
                <ul className={`mt-[20px] space-y-[10px]`}>
                  {Array.from(Array(4)).map((obj, idx) => {
                    return (
                      <Fragment key={idx}>
                        <li className={`CenterLeft`}>
                          <div>
                            <img src={`/icons/zco_83_${idx + 1}.svg`} alt={``} />
                          </div>
                          <div className={`ml-[23px] text-[16px] font-[400] text-[#161616]`}>tbhcustomer@naver.com</div>
                          <button className={`ButtonMd ButtonStyle2 ml-[51px]`}>연결완료</button>
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
                <div className={`relative`}>
                  <article className={`CenterLeft !gap-[8px]`}>
                    <button className={`ButtonMd ButtonStyle1 Round`}>비밀번호 변경</button>
                    <button className={`ButtonMd ButtonStyle3 Round`}>비밀번호 도움말</button>
                  </article>
                  <div className='InputUi mt-[11px] w-[270px]' data-form-hei='Md'>
                    <input placeholder='비밀번호' />
                  </div>
                  <article className={`CenterLeft mt-[11px]`}>
                    <div className='InputUi w-[270px]' data-form-hei='Md'>
                      <input placeholder='비밀번호 변경' />
                    </div>
                    <div className={`ml-[14px] text-[12px] font-[400] text-[#F20042]`}>
                      비밀번호가 일치하지 않습니다.
                    </div>
                  </article>
                  <div
                    className={`absolute top-[0] left-[260px] z-10 w-[550px] bg-white px-[54px] pt-[60px] pb-[64px] text-center`}
                    style={{ filter: 'drop-shadow(0px 4px 20px rgba(0, 0, 0, 0.10))' }}>
                    <button className={`absolute top-[6px] right-[6px] z-10`}>
                      <img src={`/icons/zco_84.svg`} alt={``} />
                    </button>
                    <div className={`text-[22px] font-[600] text-[#161616]`}>비밀번호 도움말</div>
                    <div className={`mt-[32px] text-[18px] font-[400] text-[#161616]`}>
                      영대소문자는 구분이 되며, 한가지 문자로만 입력은 위험합니다.
                    </div>
                    <div className={`mt-[32px] text-[18px] font-[700] text-[#161616]`}>사용가능 특수문자:</div>
                    <div className={`mt-[34px] text-[18px] font-[400] leading-[25px] text-[#161616]`}>
                      ID/주민번호/생일/전화번호 등의 개인정보와
                      <br />
                      통상 사용 순서대로 3가지 이상 연속 사용은 피해주세요.
                      <br />
                      비밀번호는 주기적으로 바꾸어 사용하시는 것이 안전합니다.
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <span className={`text-[var(--color2)]`}>*</span>
                이름
              </td>
              <td>
                <div className='InputUi w-[270px]' data-form-hei='Md'>
                  <input placeholder='이름' />
                </div>
              </td>
            </tr>
            <tr>
              <td>닉네임</td>
              <td>
                <article className={`CenterLeft mt-[11px]`}>
                  <div className='InputUi w-[270px]' data-form-hei='Md'>
                    <input placeholder='닉네임' />
                  </div>
                  <div className={`ml-[14px] text-[12px] font-[400] text-[#F20042]`}>이미 등록된 닉네임입니다.</div>
                  <div className={`ml-[14px] text-[12px] font-[400] text-[#68f]`}>사용 가능한 닉네입니다.</div>
                </article>
              </td>
            </tr>
            <tr>
              <td>
                <span className={`text-[var(--color2)]`}>*</span>
                이메일
              </td>
              <td>
                <article className={`CenterLeft mt-[11px]`}>
                  <div className='InputUi w-[270px]' data-form-hei='Md'>
                    <input placeholder='이메일' />
                  </div>
                  <div className={`ml-[14px] text-[12px] font-[400] text-[#888]`}>
                    이메일 주소는 아이디 비밀찾기에 활용되므로 정확하게 입력해주세요.
                  </div>
                </article>
                <div className={`mt-[10px]`}>
                  <CheckBox1>정보/이벤트 메일 수신에 동의합니다.</CheckBox1>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <span className={`text-[var(--color2)]`}>*</span>
                휴대폰번호
              </td>
              <td>
                <article className={`flex flex-row items-center gap-[5px]`}>
                  <input className={`TextInput2 w-[237px]`} type={`text`} placeholder={`-없이 숫자만 입력해주세요.`} />
                  <button className={`ButtonMd ButtonStyle1 Round`}>번호 변경</button>
                </article>
                <div className={`mt-[10px]`}>
                  <CheckBox1>정보/이벤트 SMS 수신에 동의합니다.</CheckBox1>
                </div>
                <article className={`CenterLeft mt-[14px] !gap-[8px]`}>
                  <input className={`TextInput2 w-[237px]`} type={`text`} />
                  <button className={`ButtonMd ButtonStyle1 Round`}>인증번호 신청</button>
                </article>
                <article className={`CenterLeft mt-[10px] !gap-[8px]`}>
                  <input className={`TextInput2 w-[237px]`} type={`text`} />
                  <button className={`ButtonMd ButtonStyle1 Round`}>인증번호 등록</button>
                </article>
              </td>
            </tr>
            <tr>
              <td>전화번호</td>
              <td>
                <article className={`flex flex-row items-center gap-[5px]`}>
                  <input className={`TextInput2 w-[68px]`} type={`text`} />
                  <span>-</span>
                  <input className={`TextInput2 w-[68px]`} type={`text`} />
                  <span>-</span>
                  <input className={`TextInput2 w-[68px]`} type={`text`} />
                </article>
              </td>
            </tr>
            <tr>
              <td>배송지 정보</td>
              <td>
                <article className={`flex flex-row items-center gap-[5px]`}>
                  <input className={`TextInput2 w-[270px]`} type={`text`} placeholder={`12345`} />
                  <button className={`ButtonMd ButtonStyle3 Round`}>우편번호 찾기</button>
                </article>
                <article className={`mt-[12px] flex flex-row items-center gap-[5px]`}>
                  <input className={`TextInput2 w-[388px]`} type={`text`} defaultValue={`서울특별시 강남구 삼선동`} />
                  <input className={`TextInput2 w-[185px]`} type={`text`} defaultValue={`1225호`} />
                </article>
                <article className={`mt-[12px] flex flex-row items-center gap-[30px]`}>
                  <CheckBox1>배송지 목록에 추가</CheckBox1>
                  <CheckBox1>기본 배송지 설정</CheckBox1>
                </article>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default FormTable20;
