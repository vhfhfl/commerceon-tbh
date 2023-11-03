function FormTable18(props) {
  const { className = '' } = props;
  return (
    <>
      <div className={`FormTable18 ${className}`}>
        <table className={`Table1 Form`}>
          <colgroup>
            <col className={`w-[17.11%]`} />
            <col className={`w-[31.08%]`} />
            <col className={`w-[17.11%]`} />
          </colgroup>
          <tbody>
            <tr>
              <td className={`Gray`}>문의유형</td>
              <td>
                <div>기타문의</div>
              </td>
              <td className={`Gray`}>작성자</td>
              <td>
                <div>홍** / 골드 (106.241.28.3)</div>
              </td>
            </tr>
            <tr>
              <td className={`Gray`}>이메일</td>
              <td>
                <div className={`leading-[26px]`}>
                  <div>test@naver.com</div>
                  <div className={`text-[#888]`}>(답변시 메일 알림 미희망)</div>
                </div>
              </td>
              <td className={`Gray`}>휴대전화번호</td>
              <td>
                <div className={`leading-[26px]`}>
                  <div>010-2222-2222</div>
                  <div className={`text-[#888]`}>(답변시 SMS 또는 카카오 알림톡 알림 희망)</div>
                </div>
              </td>
            </tr>
            <tr>
              <td className={`Gray`}>작성일시</td>
              <td>
                <div>2022-11-28 13:23</div>
              </td>
              <td className={`Gray`}>상태</td>
              <td>
                <div>답변전</div>
              </td>
            </tr>
            <tr>
              <td className={`Gray`}>제목</td>
              <td colSpan={3}>
                <div>제목입니다.</div>
              </td>
            </tr>
            <tr>
              <td>선택상품</td>
              <td colSpan={3}>
                <article className={`mt-[8px] flex flex-row gap-[24px]`}>
                  <div>
                    <img src='https://gifpng.com/90x120/' alt='' />
                  </div>
                  <div>
                    <div className={`Montserrat text-[16px] font-[600] leading-[34px] text-[#161616]`}>MIND BRIDGE</div>
                    <div className={`text-[16px] font-[400] leading-[24px] text-[#161616]`}>
                      [1&1 교차가능]그래픽티셔츠 2종
                      <br />
                      여름 라운드 반팔티셔츠 교차상품
                    </div>
                  </div>
                </article>
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

export default FormTable18;
