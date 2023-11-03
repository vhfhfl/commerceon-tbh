import {Fragment} from 'react';

function BoardTable_3() {
  return (
    <>
      <div className={`BoardTable_3`}>
        <table className={`Table1`}>
          <thead>
            <tr>
              <th className={`w-[160px]`}>배송지</th>
              <th className={``}>주소</th>
              <th className={`w-[230px]`}>연락처</th>
              <th className={`w-[230px]`}>수정/삭제</th>
            </tr>
          </thead>
          <tbody>
            {Array.from(Array(2)).map((obj, idx) => {
              return (
                <Fragment key={idx}>
                  <tr>
                    <td>
                      <div className={`text-[16px] font-[400] text-[var(--color1)]`}>(자택)홍길동집</div>
                      <div
                        className={`mt-[14px] inline-block rounded-[8px] bg-[var(--color2)] p-[7px_20px_7px_18px] text-[12px] font-[400] text-white`}>
                        기본배송지
                      </div>
                      <div className={`mt-[14px]`}>
                        <button className={`ButtonSm ButtonStyle3`}>기본배송지로 설정</button>
                      </div>
                    </td>
                    <td>
                      <div className={`text-[16px] font-[400] text-[var(--color1)] text-left`}>
                        (02075)서울특별시 중랑구 봉화산로120
                      </div>
                    </td>
                    <td>
                      <div className={`text-[16px] font-[400] text-[var(--color1)] Montserrat`}>000-0000-0000</div>
                    </td>
                    <td>
                      <article className={`space-y-[10px]`}>
                        <button className={`ButtonMd ButtonStyle3 w-[105px]`}>수정</button>
                        <button className={`ButtonMd ButtonStyle4 w-[105px]`}>삭제</button>
                      </article>
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

export default BoardTable_3;
