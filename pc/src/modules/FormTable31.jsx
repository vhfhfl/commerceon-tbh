import CheckBox1 from '@/components/form/CheckBox1';

function FormTable31(props) {
  const { className = '' } = props;
  return (
    <>
      <div className={`FormTable31 ${className}`}>
        <table className={`Table1 Form NoTop`}>
          <tbody>
            <tr>
              <td colSpan={2}>
                <div className={`text-center font-[400]`}>자주 쓰는 배송지를 최대 30개까지 등록할 수 있습니다.</div>
              </td>
            </tr>
            <tr>
              <td>배송지명</td>
              <td>
                <article className={`CenterLeft`}>
                  <input className={`TextInput2 w-[185px]`} type={`text`} />
                  <div className={`ml-[14px]`}>
                    <CheckBox1>기본 배송지로 선택</CheckBox1>
                  </div>
                </article>
              </td>
            </tr>
            <tr>
              <td>받는분</td>
              <td>
                <input className={`TextInput2 w-[185px]`} type={`text`} />
              </td>
            </tr>
            <tr>
              <td>주소</td>
              <td>
                <article className={`flex flex-row items-center gap-[5px]`}>
                  <input className={`TextInput2 w-[185px]`} type={`text`} placeholder={`12345`} />
                  <button className={`ButtonMd ButtonStyle3 Round`}>우편번호 찾기</button>
                </article>
                <article className={`mt-[12px] flex flex-row items-center gap-[5px]`}>
                  <input className={`TextInput2 w-[305px]`} type={`text`} defaultValue={`서울특별시 강남구 삼선동`} />
                  <input className={`TextInput2 w-[157px]`} type={`text`} defaultValue={`1225호`} />
                </article>
              </td>
            </tr>
            <tr>
              <td>연락처</td>
              <td>
                <article className={`flex flex-row items-center gap-[5px]`}>
                  <input className={`TextInput2 w-[305px]`} type={`text`} placeholder={`-없이 숫자만 입력해주세요.`} />
                </article>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default FormTable31;
