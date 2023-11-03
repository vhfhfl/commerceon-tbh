import {Fragment} from 'react';

function BoardTable_2() {
  return (
    <>
      <div className={`BoardTable_2`}>
        <table className={`Table1`}>
          <thead>
            <tr>
              <th className={`w-[130px]`}>작성일시</th>
              <th className={`w-[120px]`}>문의 유형</th>
              <th className={`w-[254px]`}>상품명</th>
              <th className={``}>제목</th>
              <th className={`w-[102px]`}>상태</th>
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
                      <div className={`text-[16px] font-[400] text-[var(--color1)]`}>사이즈문의</div>
                    </td>
                    <td>
                      <article className={`flex flex-row gap-[11px]`}>
                        <div>
                          <img src={`https://gifpng.com/54x72/`} alt={``} />
                        </div>
                        <div className={`text-left`}>
                          <div className={`Montserrat text-[12px] font-[600] text-[#161616]`}>MIND BRIDGE</div>
                          <div className={`mt-[7px] text-[12px] font-[400] text-[#161616] leading-[18px]`}>
                            [1+1할인]이지케어 솔리드 드레스
                            <br />
                            셔츠_레귤러
                          </div>
                        </div>
                      </article>
                    </td>
                    <td>
                      <article className={`flex flex-row items-center justify-center gap-[0]`}>
                        <img className={`mr-[9px]`} src={`/icons/zco_80.svg`} alt={``} />
                        <div
                          className={`flex flex-row items-center justify-center gap-[3px] text-[16px] font-[400] text-[#161616]`}>
                          <div>제목입니다.</div>
                          <div className={`text-[var(--color2)]`}>(2)</div>
                        </div>
                      </article>
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

export default BoardTable_2;
