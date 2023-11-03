import FileField_1 from '@/modules/FileField_1';

function FormTable30(props) {
  const { className = '' } = props;
  return (
    <>
      <div className={`FormTable30 ${className}`}>
        <table className={`Table1 Form`}>
          <tbody>
            <tr>
              <td colSpan={2}>
                <article className={`grid grid-cols-[58px_1fr] items-start`}>
                  <div>
                    <img src={`https://picsum.photos/58/77.jpg`} alt={``} />
                  </div>
                  <div className={`ml-[20px]`}>
                    <div className={`text-[14px] font-[400] leading-[14px] text-[var(--color1)]`}>
                      아쿠아스큐텀 여성 피마코튼스판 스트라이프 셔츠
                    </div>
                    <div className={`mt-[28px]`}>
                      <article className={`CenterLeft`}>
                        <img className={`Icon`} src={`/icons/icon_49_1.svg`} alt='' />
                        <img className={`Icon`} src={`/icons/icon_49_1.svg`} alt='' />
                        <img className={`Icon`} src={`/icons/icon_49_1.svg`} alt='' />
                        <img className={`Icon`} src={`/icons/icon_49_2.svg`} alt='' />
                        <img className={`Icon`} src={`/icons/icon_49_3.svg`} alt='' />
                        <div className={`ml-[9px] text-[12px] font-[600] text-[var(--color1)]`}>맘에 들어요</div>
                      </article>
                    </div>
                  </div>
                </article>
              </td>
            </tr>
            <tr>
              <td>후기내용 작성</td>
              <td>
                <div className={`relative`}>
                  <textarea className={`TAREA-1`} placeholder={`내용을 입력하세요.`}></textarea>
                  <div
                    className={`absolute bottom-[6px] right-[10px] z-10 text-[14px] font-[400] text-[var(--color3)]`}>
                    (45/100)
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>비밀번호</td>
              <td>
                <article className={`flex flex-row items-center gap-[10px]`}>
                  <input className={`TextInput2 w-[206px]`} type={`text`} placeholder={`비밀번호 (숫자만 입력가능)`} />
                  <input
                    className={`TextInput2 w-[206px]`}
                    type={`text`}
                    placeholder={`비밀번호 확인 (숫자만 입력가능)`}
                  />
                </article>
              </td>
            </tr>
            <tr>
              <td>포토/동영상 첨부</td>
              <td>
                <FileField_1 />
              </td>
            </tr>
            <tr>
              <td>사이즈 평가</td>
              <td>
                <article className={`ButtonSet-20230803164301`}>
                  <button className={`On`}>많이 작아요</button>
                  <button>조금 작아요</button>
                  <button>정사이즈에요</button>
                  <button>조금 커요</button>
                  <button>많이 커요</button>
                </article>
              </td>
            </tr>
            <tr>
              <td>키</td>
              <td>
                <input className={`TextInput2 w-[185px]`} type={`text`} placeholder={`168`} />
              </td>
            </tr>
            <tr>
              <td>몸무게</td>
              <td>
                <input className={`TextInput2 w-[185px]`} type={`text`} placeholder={`50`} />
              </td>
            </tr>
            <tr>
              <td>평상시 상의 사이즈</td>
              <td>
                <article className={`ButtonSet-20230803170838`}>
                  <button className={`On`}>XS 이하</button>
                  <button>XS</button>
                  <button>S</button>
                  <button>M</button>
                  <button>L</button>
                  <button>XL</button>
                  <button>XXL 이상</button>
                </article>
              </td>
            </tr>
            <tr>
              <td>평상시 하의 사이즈</td>
              <td>
                <div className={`SelectUi w-[270px]`} data-form-hei='Md'>
                  <button>
                    <div>선택하세요</div>
                  </button>
                  <div className={`Options`}>
                    <button>A</button>
                    <button>B</button>
                    <button>C</button>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>자동등록방지</td>
              <td>
                <img src={`https://gifpng.com/327x120/`} alt={``} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default FormTable30;
