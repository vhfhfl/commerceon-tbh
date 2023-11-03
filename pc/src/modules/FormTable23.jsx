import CheckBox1 from '@/components/form/CheckBox1';

function FormTable23(props) {
  const { className = '' } = props;
  return (
    <>
      <div className={`FormTable23 ${className}`}>
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
                    <div className={`mt-[14px] text-[12px] font-[400] leading-[15px] text-[var(--color5)]`}>
                      별빛이 이름자 추억과 오는 쉬이 새겨지는 멀리 봅니다. 그리고 아름다운 별 어머님, 아직 소녀들의 나의
                      가을 까닭입니다. 파란 속의 하나에 나의 아스라히 너무나 청춘이 이름자를 다 있습니다. 노루, 무덤
                      이름을 까닭입니다. 경, 자랑처럼 추억과 강아지, 내일 하나 하나에 밤이 봅니다. 슬퍼하는 시와 별
                      멀듯이, 걱정도 오면 파란 별 다하지 있습니다. 까닭이요, 그러나 것은 파란 소녀들의 둘 까닭입니다.
                      위에도 없이 하나에 까닭입니다. 하나에 딴은 이웃 듯합니다. 것은 계집애들의 무엇인지 이네들은 멀리
                      잔디가 나는 무덤 까닭입니다. 하나 릴케 다 새겨지는 어머니, 말 내린 별에도 쉬이 있습니다.
                    </div>
                  </div>
                </article>
              </td>
            </tr>
            <tr>
              <td>문의유형</td>
              <td>
                <div className={`relative inline-block w-[270px]`}>
                  <input className={`TextInput2 On w-full`} type={`text`} defaultValue={`유형을 선택해주세요.`} />
                </div>
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
                <input type={`text`} className={`TextInput2 w-[270px]`} placeholder={`-없이 숫자만 입력해주세요.`} />
                <div className={`mt-[15px]`}>
                  <CheckBox1 className={`!items-start`}>
                    <div className={`leading-[22px]`}>
                      <div>SMS/카카오 알림톡 알림 받기</div>
                      <div className={`text-[12px] font-[400] text-[var(--color5)]`}>
                        체크하실 경우 답변 완료시 SMS 또는 카카오 알림톡으로 알려드립니다.
                      </div>
                    </div>
                  </CheckBox1>
                </div>
              </td>
            </tr>
            <tr>
              <td>메일 알림 받기</td>
              <td>
                <input type={`text`} className={`TextInput2 w-[270px]`} placeholder={`이메일 주소를 입력하세요.`} />
                <div className={`mt-[15px]`}>
                  <CheckBox1 className={`!items-start`}>
                    <div className={`leading-[22px]`}>
                      <div>메일 알림 받기</div>
                      <div className={`text-[12px] font-[400] text-[var(--color5)]`}>
                        체크하실 경우 답변 완료시 메일로 알려드립니다.
                      </div>
                    </div>
                  </CheckBox1>
                </div>
              </td>
            </tr>
            <tr>
              <td>제목</td>
              <td>
                <article className={`flex flex-row items-center`}>
                  <input type={`text`} className={`TextInput2 w-[270px]`} placeholder={`제목을 입력하세요.`} />
                  <CheckBox1 className={`ml-[10px]`}>
                    <div>비밀글</div>
                  </CheckBox1>
                </article>
                <div className={`mt-[15px]`}>
                  <input type='password' className={`TextInput2 w-[185px]`} placeholder={`비밀번호 입력`} />
                  <input type='password' className={`TextInput2 ml-[10px] w-[185px]`} placeholder={`비밀번호 입력`} />
                </div>
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
                <article className={`grid grid-cols-[auto_1fr] items-start text-[12px]`}>
                  <article className={`flex h-[36px] flex-row items-center justify-center`}>첨부파일 1</article>
                  <div className={`ml-[10px]`}>
                    <div>
                      <input className={`TextInput2 w-[270px]`} type={`text`} />
                      <button className={`ButtonMd ButtonStyle4 Round ml-[10px]`}>파일첨부</button>
                    </div>
                    <div className={`mt-[8px] text-[12px] font-[400] text-[var(--color5)]`}>
                      * &#40;jpeg, gif, png, avi, mp4&#41; 확장자를 사용하는 경우에만 등록 가능합니다.
                    </div>
                  </div>
                </article>
                <article className={`mt-[20px] grid grid-cols-[auto_1fr] items-start text-[12px]`}>
                  <article className={`flex h-[36px] flex-row items-center justify-center`}>첨부파일 2</article>
                  <div className={`ml-[10px]`}>
                    <div>
                      <input className={`TextInput2 w-[270px]`} type={`text`} />
                      <button className={`ButtonMd ButtonStyle4 Round ml-[10px]`}>파일첨부</button>
                      <button className={`ButtonMd ButtonStyle2 Round ml-[10px]`}>삭제</button>
                    </div>
                    <div className={`mt-[8px] text-[12px] font-[400] text-[var(--color5)]`}>
                      * &#40;jpeg, gif, png, avi, mp4&#41; 확장자를 사용하는 경우에만 등록 가능합니다.
                    </div>
                  </div>
                </article>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default FormTable23;
