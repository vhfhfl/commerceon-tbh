function FormTable10(props) {
  const { className = '' } = props;
  return (
    <>
      <div className={`FormTable10 ${className}`}>
        <table className={`Table1 Form`}>
          <tbody>
            <tr>
              <td>받으시는 분</td>
              <td>
                <article className={`flex flex-row items-center gap-[0]`}>
                  <div className={`SelectBox1 w-[240px]`}>
                    <button>
                      <div>반품신청 사유를 선택해주세요.</div>
                    </button>
                    <div className={`Options`}>
                      <button>A</button>
                      <button>B</button>
                      <button>C</button>
                    </div>
                  </div>
                  <div className={`ml-[14px] text-[14px] font-[400] text-[#161616]`}>
                    반품 비용 발생 시 고객 부담 - (주)티비에이치글로벌 3,000원
                  </div>
                </article>
              </td>
            </tr>
            <tr>
              <td>계좌번호</td>
              <td>
                <input className={`TextInput2 w-[240px]`} type={`text`} />
              </td>
            </tr>
            <tr>
              <td>예금주</td>
              <td>
                <input className={`TextInput2 w-[240px]`} type={`text`} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default FormTable10;
