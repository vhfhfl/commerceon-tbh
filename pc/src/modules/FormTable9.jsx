function FormTable9(props) {
  const { className = '' } = props;
  return (
    <>
      <div className={`FormTable9 ${className}`}>
        <table className={`Table1 Form`}>
          <tbody>
            <tr>
              <td>신청자명</td>
              <td>
                <input className={`TextInput2 w-[185px]`} type={`text`} defaultValue={`티비에이치`} />
              </td>
            </tr>
            <tr>
              <td>연락처1</td>
              <td>
                <article className={`flex flex-row items-center gap-[5px]`}>
                  <input className={`TextInput2 w-[68px]`} type={`text`} />
                  <span>-</span>
                  <input className={`TextInput2 w-[68px]`} type={`text`} />
                  <span>-</span>
                  <input className={`TextInput2 w-[68px]`} type={`text`} />
                </article>
              </td>
            </tr>
            <tr>
              <td>연락처2</td>
              <td>
                <article className={`flex flex-row items-center gap-[5px]`}>
                  <input className={`TextInput2 w-[68px]`} type={`text`} />
                  <span>-</span>
                  <input className={`TextInput2 w-[68px]`} type={`text`} />
                  <span>-</span>
                  <input className={`TextInput2 w-[68px]`} type={`text`} />
                </article>
              </td>
            </tr>
            <tr>
              <td>배송지 정보</td>
              <td>
                <article className={`flex flex-row items-center gap-[5px]`}>
                  <input className={`TextInput2 w-[270px]`} type={`text`} />
                  <button className={`ButtonMd ButtonStyle3 Round`}>우편번호 찾기</button>
                </article>
                <article className={`mt-[12px] flex flex-row items-center gap-[5px]`}>
                  <input className={`TextInput2 w-[388px]`} type={`text`} />
                  <input className={`TextInput2 w-[185px]`} type={`text`} />
                </article>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default FormTable9;
