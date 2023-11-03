import FileField_1 from '@/modules/FileField_1';

function FormTable13(props) {
  const { className = '' } = props;
  return (
    <>
      <div className={`FormTable13 ${className}`}>
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
                  <button className={`ButtonMd ButtonStyle2 Round w-[130px]`}>상품선택</button>
                </article>
              </td>
            </tr>
            <tr>
              <td>작성자</td>
              <td>
                <input className={`TextInput2 w-[270px]`} type={`text`} placeholder={`작성자`} />
              </td>
            </tr>
            <tr>
              <td>비밀번호</td>
              <td>
                <article className={`flex flex-row items-center gap-[10px]`}>
                  <input className={`TextInput2 w-[180px]`} type={`text`} placeholder={`비밀번호 입력`} />
                  <input className={`TextInput2 w-[180px]`} type={`text`} placeholder={`비밀번호 확인`} />
                  <div className={`text-[12px] font-[400] text-[#F20042]`}>비밀번호가 일치하지 않습니다.</div>
                </article>
              </td>
            </tr>
            <tr>
              <td>상품선택</td>
              <td>
                <article className={`flex flex-row gap-[24px]`}>
                  <div>
                    <img src='https://gifpng.com/90x120/' alt='' />
                  </div>
                  <div>
                    <div className={`Montserrat text-[16px] font-[600] leading-[34px] text-[#161616]`}>MIND BRIDGE</div>
                    <div className={`text-[16px] font-[400] leading-[24px] text-[#161616]`}>
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
                <input className={`TextInput2 w-[270px]`} type={`text`} placeholder={`제목을 입력해주세요.`} />
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

export default FormTable13;
