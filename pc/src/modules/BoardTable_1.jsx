import {Fragment} from "react";

function BoardTable_1() {
  return (
    <>
      <div className={`BoardTable_1`}>
        <table className={`Table1`}>
          <thead>
            <tr>
              <th className={`w-[140px]`}>작성일시</th>
              <th className={`w-[150px]`}>문의 유형</th>
              <th className={``}>제목</th>
              <th className={`w-[140px]`}>작성자</th>
              <th className={`w-[140px]`}>상태</th>
            </tr>
          </thead>
          <tbody>
            {Array.from(Array(2)).map((obj, idx) => {
              return (
                <Fragment key={idx}>
                  <tr>
                    <td>
                      <div className={`Montserrat text-[16px] font-[500] leading-[36px] text-[var(--color1)]`}>
                        2023.05.01
                      </div>
                    </td>
                    <td>
                      <div className={`text-[16px] font-[400] text-[var(--color1)]`}>기타문의</div>
                    </td>
                    <td>
                      <article className={`flex flex-row items-center justify-center gap-[0]`}>
                        <img className={`mr-[9px]`} src={`/icons/zco_80.svg`} alt={``} />
                        <div
                          className={`flex flex-row items-center justify-center gap-[3px] text-[16px] font-[400] text-[#161616]`}>
                          <div>제*입*다.</div>
                          <div className={`text-[var(--color2)]`}>(2)</div>
                        </div>
                      </article>
                    </td>
                    <td>
                      <div className={`text-[16px] font-[400] text-[var(--color1)]`}>이*재</div>
                    </td>
                    <td>
                      <div className={`text-[16px] font-[400] text-[var(--color1)]`}>답변대기</div>
                    </td>
                  </tr>
                </Fragment>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default BoardTable_1;
