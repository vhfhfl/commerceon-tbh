function FormTable12(props) {
  const { className = '' } = props;
  return (
    <>
      <div className={`FormTable12 ${className}`}>
        <table className={`Table1 Form`}>
          <tbody>
            <tr>
              <td>이메일주소</td>
              <td>
                <article className={`flex flex-row items-center gap-[0]`}>
                  <input className={`TextInput2 w-[270px]`} type={`text`} placeholder={`이메일을 입력해주세요`} />
                  <div className={`mx-[7px]`}>@</div>
                  <div className={`SelectUi w-[270px]`} data-form-hei='Md'>
                    <button>
                      <div>-도메인 선택-</div>
                    </button>
                    <div className={`Options`}>
                      <button>A</button>
                      <button>B</button>
                      <button>C</button>
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

export default FormTable12;
