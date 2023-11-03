function FormTable19(props) {
  const { className = '' } = props;
  return (
    <>
      <div className={`FormTable19 ${className}`}>
        <table className={`Table1 Form`}>
          <colgroup>
            <col className={`w-[17.11%]`} />
            <col className={`w-[31.08%]`} />
            <col className={`w-[17.11%]`} />
          </colgroup>
          <tbody>
            <tr>
              <td className={`Gray`}>작성일시</td>
              <td>
                <div>2022-11-28 13:23</div>
              </td>
              <td className={`Gray`}>작성일시</td>
              <td>
                <div>2022.11.28 13:23</div>
              </td>
            </tr>
            <tr>
              <td className={`Gray`}>제목</td>
              <td colSpan={3}>
                <div>테스트 답변드립니다.</div>
              </td>
            </tr>
            <tr>
              <td>답변</td>
              <td colSpan={3}>
                <div className={`leading-[26px] text-[var(--color5)]`}>
                  관리자 답변입니다.
                  <br />
                  안녕하세요 관리자 답변입니다.
                  <br />
                  관리자 답변
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default FormTable19;
