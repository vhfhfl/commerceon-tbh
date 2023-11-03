function InfoTable8(props) {
  const { className = '' } = props;
  return (
    <>
      <div className={`InfoTable8 ${className}`}>
        <table className={`Table3 NoBorder`}>
          <colgroup>
            <col className={`w-[80px]`} />
            <col />
          </colgroup>
          <tbody>
            <tr>
              <td>작성자</td>
              <td>김**</td>
            </tr>
            <tr>
              <td>내용</td>
              <td>
                <div className={`leading-[22px] text-[var(--color5)]`}>
                  평소 너무 좋아하는 브랜드입니다.
                  <br />
                  평소 너무 좋아하는 브랜드입니다.
                  <br />
                  3줄 고정 입니다.
                </div>
                <div className={`mt-[20px] inline-flex flex-row items-center`}>
                  <button className={`font-[600] text-[var(--color1)]`}>댓글 더보기</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default InfoTable8;
