import { Util } from '@/scripts/util';

function FormTable6(props) {
  const { className = '' } = props;
  return (
    <>
      <div className={`FormTable6 ${className}`}>
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
                업체명
              </td>
              <td>
                <input className={`TextInput2 w-[270px]`} type={`text`} placeholder={`업체명`} />
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
                이메일주소
              </td>
              <td>
                <input className={`TextInput2 w-[270px]`} type={`text`} placeholder={`이메일주소`} />
              </td>
            </tr>
            <tr>
              <td>
                <span className={`text-[var(--color2)]`}>*</span>
                상품선택
              </td>
              <td>
                <div className={`flex flex-row items-center gap-[16px]`}>
                  <div
                    className={`SelectBox1 w-[205px]`}
                    onClick={(evt) => {
                      const target = evt.target.closest('.SelectBox1');
                      Util.toggleClass(target, 'On');
                    }}>
                    <button>
                      <div>
                        <span className={`text-[var(--color2)]`}>*</span>브랜드 선택
                      </div>
                    </button>
                    <div className={`Options`}>
                      <button>브랜드 선택</button>
                      <button>브랜드 선택</button>
                      <button>브랜드 선택</button>
                    </div>
                  </div>
                  <button className={`ButtonMd ButtonStyle2 Round w-[205px]`}>
                    <span className={`text-[var(--color2)]`}>*</span>
                    상품선택
                  </button>
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
