import RadioBtn from '@/components/form/RadioBtn';

function FormTable17(props) {
  const { className = '', idx } = props;
  return (
    <>
      <div className={`FormTable17 ${className}`}>
        <table className={`Table3 NoBorder`}>
          <colgroup>
            <col className={`w-[80px]`} />
            <col />
          </colgroup>
          <tbody>
            <tr>
              <td>성별</td>
              <td>
                <article className={`flex flex-row items-start gap-[16px]`}>
                  <RadioBtn size={`Sm`}>남성</RadioBtn>
                  <RadioBtn size={`Sm`}>여성</RadioBtn>
                </article>
              </td>
            </tr>
            <tr>
              <td>생일</td>
              <td>
                <div className={`InputUi InputSm w-full`} data-form-hei={`Md`}>
                  <input type={`text`} />
                  <button>
                    <img className={`Icon !w-[18px]`} src={`/icons/icon_82.svg`} alt={``} />
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td>결혼여부</td>
              <td>
                <article className={`flex flex-row items-start gap-[16px]`}>
                  <RadioBtn size={`Sm`}>미혼</RadioBtn>
                  <RadioBtn size={`Sm`}>기혼</RadioBtn>
                </article>
              </td>
            </tr>
            <tr>
              <td>추천인 아이디</td>
              <td>
                <div>
                  <div className={`InputUi InputSm w-full`} data-form-hei={`Md`}>
                    <input type={`text`} />
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className={`leading-[18px]`}>
                  휴면회원
                  <br />
                  방지기간
                </div>
              </td>
              <td>
                <article className={`flex flex-row items-start gap-[16px]`}>
                  <RadioBtn size={`Sm`}>1년</RadioBtn>
                  <RadioBtn size={`Sm`}>3년</RadioBtn>
                  <RadioBtn size={`Sm`}>5년</RadioBtn>
                  <RadioBtn size={`Sm`}>탈퇴시</RadioBtn>
                </article>
              </td>
            </tr>
            <tr>
              <td>추천매장코드</td>
              <td>삼성동 직역점 TBH001</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default FormTable17;
