import CheckBox1 from '@/components/form/CheckBox1';

function FormTable6(props) {
  const { className = '' } = props;

  return (
    <>
      <div className={`FormTable6 ${className}`}>
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
                <article className={`CenterBetween !gap-[8px]`}>
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
                업체명
              </td>
              <td>
                <div className={`InputUi InputSm w-full`} data-form-hei={`Md`}>
                  <input type={`text`} placeholder={`업체명`} />
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
                <span className={`text-[var(--color2)]`}>*</span>
                이메일주소
              </td>
              <td>
                <div className={`InputUi InputSm w-full`} data-form-hei={`Md`}>
                  <input type={`text`} placeholder={`이메일주소`} />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default FormTable6;
