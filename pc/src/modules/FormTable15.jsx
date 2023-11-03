import FileDetail_1 from '@/modules/FileDetail_1';

function FormTable15(props) {
  const { className = '' } = props;
  return (
    <>
      <div className={`FormTable15 ${className}`}>
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
              <td className={`Gray`}>작성자</td>
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
              <td colSpan={3}>제목입니다.</td>
            </tr>
            <tr>
              <td>주문내역</td>
              <td colSpan={3}>
                <div
                  className={`inline-flex flex-row items-center gap-[0] bg-[#f5f5f5] p-[10px_15px] text-[12px] font-[400] text-[#888]`}>
                  <div>2023/05/18</div>
                  <div className={`ml-[37px]`}>2305181545000344</div>
                  <div className={`ml-[111px] text-[var(--color2)]`}>배송중</div>
                </div>
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
                    <div
                      className={`Montserrat mt-[3px] flex flex-row items-center gap-[0] text-[14px] font-[400] leading-[28px] text-[#888]`}>
                      <div>옵션 : ICE BLUE / 095</div>
                      {/*<div className={`ml-[7px] text-[var(--color2)]`}>외 9개</div>*/}
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
            <tr>
              <td>답변</td>
              <td colSpan={3}>
                <div className={`leading-[26px] text-[#888]`}>
                  관리자 답변입니다.
                  <br />
                  안녕하세요 관리자 답변입니다.
                  <br />
                  관리자 답변
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
                <div>관리자</div>
              </td>
            </tr>
            <tr>
              <td>내용</td>
              <td colSpan={3}>
                <div className={`leading-[26px] text-[#888]`}>
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

export default FormTable15;
