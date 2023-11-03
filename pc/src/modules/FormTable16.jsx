import FileDetail_1 from '@/modules/FileDetail_1';

function FormTable16(props) {
  const { className = '' } = props;
  return (
    <>
      <div className={`FormTable16 ${className}`}>
        <table className={`Table1 Form`}>
          <colgroup>
            <col className={`w-[17.11%]`} />
            <col className={`w-[31.08%]`} />
            <col className={`w-[17.11%]`} />
          </colgroup>
          <tbody>
            <tr>
              <td className={`Gray`}>작성자</td>
              <td>
                <div>관리자</div>
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
              <td>내용</td>
              <td colSpan={3}>
                <div className={`leading-[26px] text-[#888]`}>
                  내용입니다.
                  <br />
                  문의 내용은 여기에 적습니다.
                  <br />
                  수정불가합니다.
                  <br />
                  문의사항
                </div>
              </td>
            </tr>
            <tr>
              <td>첨부파일</td>
              <td colSpan={3}>
                <FileDetail_1 />
              </td>
            </tr>
            <tr className={`[&_>_td]:!border-t-[#161616]`}>
              <td className={`Gray`}>작성자</td>
              <td>
                <div>관리자</div>
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
              <td>내용</td>
              <td colSpan={3}>
                <div className={`leading-[26px] text-[#888]`}>
                  내용입니다.
                  <br />
                  문의 내용은 여기에 적습니다.
                  <br />
                  수정불가합니다.
                  <br />
                  문의사항
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default FormTable16;
