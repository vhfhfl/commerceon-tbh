import RadioBtn from '@/components/form/RadioBtn';

function FormTable21(props) {
  const { className = '' } = props;
  return (
    <>
      <div className={`FormTable21 ${className}`}>
        <table className={`Table1 Form`}>
          <tbody>
            <tr>
              <td>성별</td>
              <td>
                <article className={`CenterLeft !gap-[21px]`}>
                  <RadioBtn>여성</RadioBtn>
                  <RadioBtn>남성</RadioBtn>
                </article>
              </td>
            </tr>
            <tr>
              <td>생일</td>
              <td>
                <div className={`TextInput3 w-[270px]`}>
                  <input
                    className={`w-0 grow`}
                    type={`text`}
                    onFocus={(evt) => {
                      const el_parent = evt.target.parentElement;
                      el_parent.classList.add('focus');
                    }}
                    onBlur={(evt) => {
                      const el_parent = evt.target.parentElement;
                      el_parent.classList.remove('focus');
                    }}
                  />
                  <button className={`w-[20px]`}>
                    <img src={`/icons/zco_63.svg`} alt={``} />
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td>결혼여부</td>
              <td>
                <article className={`CenterLeft !gap-[21px]`}>
                  <RadioBtn>미혼</RadioBtn>
                  <RadioBtn>기혼</RadioBtn>
                </article>
              </td>
            </tr>
            <tr>
              <td>추천인아이디</td>
              <td>
                <input className={`TextInput2 w-[270px]`} type={`text`} placeholder={`추천인 아이디`} />
              </td>
            </tr>
            <tr>
              <td>휴면회원 방지기간</td>
              <td>
                <article className={`CenterLeft !gap-[21px]`}>
                  <RadioBtn>1년</RadioBtn>
                  <RadioBtn>3년</RadioBtn>
                  <RadioBtn>5년</RadioBtn>
                  <RadioBtn>탈퇴 시</RadioBtn>
                </article>
              </td>
            </tr>
            <tr>
              <td>추천매장코드</td>
              <td>
                <div className={`text-[16px] font-[400] text-[#161616]`}>삼성동 직역점 TBH0001</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default FormTable21;
