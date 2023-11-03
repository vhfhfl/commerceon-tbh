import CheckBox1 from '@/components/form/CheckBox1';
import FileField_1 from '@/modules/FileField_1';

function FormTable28(props) {
  const { className = '' } = props;
  return (
    <>
      <div className={`FormTable28 ${className}`}>
        <table className={`Table1 Form`}>
          <tbody>
            <tr>
              <td>문의유형</td>
              <td>
                <article className={`flex flex-row items-center gap-[12px]`}>
                  <div className={`SelectUi w-[270px]`} data-form-hei='Md'>
                    <button>
                      <div>유형을 선택해주세요</div>
                    </button>
                    <div className={`Options`}>
                      <button>A</button>
                      <button>B</button>
                      <button>C</button>
                    </div>
                  </div>
                  <button className={`ButtonMd ButtonStyle2 Round w-[140px]`}>상품 선택</button>
                </article>
              </td>
            </tr>
            <tr>
              <td>
                <div className={`leading-[24px]`}>
                  답변 시 휴대폰
                  <br /> 알림받기
                </div>
              </td>
              <td>
                <article className={`flex flex-row items-center gap-[5px]`}>
                  <input className={`TextInput2 w-[270px]`} type={`text`} placeholder={`-없이 숫자만 입력해주세요.`} />
                </article>
                <div className={`mt-[14px]`}>
                  <CheckBox1>SMS/카카오 알림톡 알림받기</CheckBox1>
                  <div className={`ml-[30px] mt-[7px] text-[12px] font-[400] text-[#888]`}>
                    체크하실 경우 답변 완료시 SMS 또는 카카오 알림톡으로 알려드립니다.
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>메일 알림받기</td>
              <td>
                <input className={`TextInput2 w-[270px]`} type={`text`} placeholder={`이메일 주소를 입력하세요.`} />
                <div className={`mt-[14px]`}>
                  <CheckBox1>메일 알림 받기</CheckBox1>
                  <div className={`ml-[30px] mt-[7px] text-[12px] font-[400] text-[#888]`}>
                    체크하실 경우 이메일로 알려드립니다.
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>선택상품</td>
              <td>
                <article className={`mt-[8px] flex flex-row gap-[24px]`}>
                  <div>
                    <img src='https://gifpng.com/90x120/' alt='' />
                  </div>
                  <div>
                    <div className={`Montserrat text-[16px] font-[600] leading-[34px] text-[var(--color1)]`}>MIND BRIDGE</div>
                    <div className={`text-[16px] font-[400] leading-[24px] text-[var(--color1)]`}>
                      [1&1 교차가능]그래픽티셔츠 2종
                      <br />
                      여름 라운드 반팔티셔츠 교차상품
                    </div>
                  </div>
                </article>
              </td>
            </tr>
            <tr>
              <td>
                <span className={`text-[var(--color2)]`}>*</span>
                제목
              </td>
              <td>
                <article className={`flex flex-row items-center gap-[15px]`}>
                  <input className={`TextInput2 w-[270px]`} type={`text`} placeholder={`제목을 입력해주세요.`} />
                  <CheckBox1>비밀글</CheckBox1>
                </article>
              </td>
            </tr>
            <tr>
              <td>내용</td>
              <td>
                <textarea className={`TAREA-1`} placeholder={`내용을 입력하세요.`}></textarea>
              </td>
            </tr>
            <tr>
              <td>첨부파일</td>
              <td>
                <FileField_1 />
              </td>
            </tr>
            <tr>
              <td>자동등록방지</td>
              <td>
                <img src={`https://gifpng.com/360x200/`} alt={``} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default FormTable28;
