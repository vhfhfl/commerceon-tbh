import CheckBox1 from '@/components/form/CheckBox1';
import TermsBox from '@/modules/TermsBox';

function FormTable8(props) {
  const { className = '' } = props;
  return (
    <>
      <div className={`FormTable8 ${className}`}>
        <table className={`Table1 Form`}>
          <tbody>
            <tr>
              <td>
                <span className={`text-[var(--color2)]`}>*</span>
                문의자명
              </td>
              <td>
                <input className={`TextInput2 w-[270px]`} type={`text`} placeholder={`문의자명`} />
              </td>
            </tr>
            <tr>
              <td>
                <span className={`text-[var(--color2)]`}>*</span>
                비밀번호
              </td>
              <td>
                <article className={`flex flex-row items-center gap-[10px]`}>
                  <input className={`TextInput2 w-[185px]`} type={`text`} placeholder={`비밀번호 입력`} />
                  <input className={`TextInput2 w-[185px]`} type={`text`} placeholder={`비밀번호 확인`} />
                </article>
              </td>
            </tr>
            <tr>
              <td>
                <span className={`text-[var(--color2)]`}>*</span>
                기업명
              </td>
              <td>
                <input className={`TextInput2 w-[270px]`} type={`text`} placeholder={`기업명`} />
              </td>
            </tr>
            <tr>
              <td>
                <span className={`text-[var(--color2)]`}>*</span>
                부서/직책
              </td>
              <td>
                <input className={`TextInput2 w-[270px]`} type={`text`} placeholder={``} />
              </td>
            </tr>
            <tr>
              <td>
                <span className={`text-[var(--color2)]`}>*</span>
                임직원수
              </td>
              <td>
                <input className={`TextInput2 w-[270px]`} type={`text`} placeholder={``} />
              </td>
            </tr>
            <tr>
              <td>
                <span className={`text-[var(--color2)]`}>*</span>
                기업도메인
              </td>
              <td>
                <input
                  className={`TextInput2 w-[460px]`}
                  type={`text`}
                  placeholder={`제휴회원 인증시 사용할, 이메일 주소를 입력하세요. @tbhshop.co.kr`}
                />
              </td>
            </tr>
            <tr>
              <td>
                <span className={`text-[var(--color2)]`}>*</span>
                연락처
              </td>
              <td>
                <article className={`flex flex-row items-center gap-[5px]`}>
                  <input className={`TextInput2 w-[68px]`} type={`text`} placeholder={`010`} />
                  <span>-</span>
                  <input className={`TextInput2 w-[68px]`} type={`text`} />
                  <span>-</span>
                  <input className={`TextInput2 w-[68px]`} type={`text`} />
                </article>
              </td>
            </tr>
            <tr>
              <td>
                <span className={`text-[var(--color2)]`}>*</span>
                담당자 이메일주소
              </td>
              <td>
                <input className={`TextInput2 w-[270px]`} type={`text`} placeholder={`이메일주소`} />
              </td>
            </tr>
            <tr>
              <td>추가 문의 내용</td>
              <td>
                <textarea className={`TAREA-1`} placeholder={`추가 문의 내용 (비밀글로 등록됩니다.)`}></textarea>
              </td>
            </tr>
            <tr>
              <td>자동등록방지</td>
              <td>
                <img src={`https://gifpng.com/327x120/`} alt={``} />
              </td>
            </tr>
            <tr>
              <td className={`!text-left`} colSpan={2}>
                <div className={`text-[16px] font-[700] text-[var(--color1)]`}>비회원 개인정보 수집 동의</div>
                <div className={`mt-[19px]`}>
                  <TermsBox className={`h-[258px]`} />
                </div>
                <div className={`mt-[14px] flex flex-row items-center gap-[0]`}>
                  <CheckBox1>
                    <span className={`text-[var(--color13)]`}>(필수)</span>
                    &nbsp;
                    <span>비회원 개인정보 수집 및 이용동의</span>
                  </CheckBox1>
                  <a
                    href='https://www.google.com'
                    target='_blank'
                    className={`ml-[9px] inline-flex flex-row items-center justify-center gap-[0] text-[14px] font-[400] text-[var(--color5)]`}>
                    전체보기
                    <img src={`/icons/zco_72.svg`} alt={``} />
                  </a>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default FormTable8;
