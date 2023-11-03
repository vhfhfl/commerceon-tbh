function FormTable27(props) {
  const { className = '' } = props;
  return (
    <>
      <div className={`FormTable27 ${className}`}>
        <table className={`Table1 Left`}>
          <tbody>
            <tr>
              <td>작성자</td>
              <td>김**</td>
            </tr>
            <tr>
              <td>내용</td>
              <td>
                <div className={`text-[14px] font-[400] leading-[22px] text-[var(--color5)]`}>
                  평소 너무 좋아하는 브랜드입니다. 이벤트 응모합니다.
                  <br />
                  평소 너무 좋아하는 브랜드입니다. 이벤트 응모합니다.
                  <br />
                  3줄 고정 입니다.
                </div>
                <div className={`mt-[30px] inline-flex flex-row items-center`}>
                  <button className={`text-[12px] font-[600] text-[var(--color1)]`}>댓글 더보기</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default FormTable27;
