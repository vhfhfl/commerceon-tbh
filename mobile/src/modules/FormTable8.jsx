import CheckBox1 from '@/components/form/CheckBox1';
import TermsBox from '@/modules/TermsBox';

function FormTable8(props) {
  const { className = '' } = props;

  return (
    <>
      <div className={`FormTable8 ${className}`}>
        <table className={`Table3 NoBorder`}>
          <colgroup>
            <col className={`w-[80px]`} />
            <col />
          </colgroup>
          <tbody>
            <tr>
              <td>
                <span className={`text-[var(--color2)]`}>*</span>
                문의자명
              </td>
              <td>
                <div className={`InputUi InputSm w-full`} data-form-hei={`Md`}>
                  <input type={`text`} placeholder={`문의자명`} />
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <span className={`text-[var(--color2)]`}>*</span>
                비밀번호
              </td>
              <td>
                <article className={`flex flex-row items-center justify-between gap-[8px]`}>
                  <div className={`InputUi InputSm grow`} data-form-hei={`Md`}>
                    <input type={`text`} placeholder={`비밀번호 입력`} />
                  </div>
                  <div className={`InputUi InputSm grow`} data-form-hei={`Md`}>
                    <input type={`text`} placeholder={`비밀번호 확인`} />
                  </div>
                </article>
              </td>
            </tr>
            <tr>
              <td>
                <span className={`text-[var(--color2)]`}>*</span>
                기업명
              </td>
              <td>
                <div className={`InputUi InputSm w-full`} data-form-hei={`Md`}>
                  <input type={`text`} placeholder={`기업명`} />
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <span className={`text-[var(--color2)]`}>*</span>
                부서/직책
              </td>
              <td>
                <div className={`InputUi InputSm w-full`} data-form-hei={`Md`}>
                  <input type={`text`} placeholder={`부서/직책`} />
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <span className={`text-[var(--color2)]`}>*</span>
                임직원수
              </td>
              <td>
                <div className={`InputUi InputSm w-full`} data-form-hei={`Md`}>
                  <input type={`text`} placeholder={`임직원수`} />
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <span className={`text-[var(--color2)]`}>*</span>
                연락처
              </td>
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
                <div className={`mt-[12px]`}>
                  <CheckBox1 size={`Sm`}>답변등록여부 알림톡 수신, SMS 수신 동의</CheckBox1>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className={`flex flex-row items-start gap-0 leading-[18px]`}>
                  <div className={`text-[var(--color2)]`}>*</div>
                  <div>
                    담당자
                    <br />
                    이메일주소
                  </div>
                </div>
              </td>
              <td>
                <div className={`InputUi InputSm w-full`} data-form-hei={`Md`}>
                  <input type={`text`} placeholder={`이메일주소`} />
                </div>
              </td>
            </tr>
            <tr>
              <td>추가 문의 내용</td>
              <td>
                <textarea className={`TAREA-1`} placeholder={`추가 문의 내용 (비밀글로 등록됩니다.)`}></textarea>
                <div className={`InputUi InputSm mt-[10px] w-[115px]`} data-form-hei={`Md`}>
                  <input type={`text`} placeholder={`비밀번호 입력`} />
                </div>
              </td>
            </tr>
            <tr>
              <td>자동등록방지</td>
              <td>
                <img src={`https://gifpng.com/238x55/`} alt={``} />
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                <div>비회원 개인정보 수집 동의</div>
                <div className={`mt-[14px]`}>
                  <TermsBox className={`h-[244px]`} />
                </div>
                <div className={`mt-[14px] grid grid-cols-[1fr_62px] items-start justify-between gap-0`}>
                  <CheckBox1 size={'Sm'} className={`!items-start`}>
                    <div>
                      <span className={`text-[var(--color13)]`}>(필수)</span>
                      &nbsp;
                      <span>
                        비회원 글 작성에 대한 개인정보 수집 및
                        <br />
                        이용동의
                      </span>
                    </div>
                  </CheckBox1>
                  <a className={`Btn_2`} href={`https://www.google.com`} target={`_blank`}>
                    전체보기
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
