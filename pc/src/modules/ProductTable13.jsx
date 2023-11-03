import {Fragment} from 'react';

function ProductTable13(props) {
  return (
    <>
      <table className={`ProductTable13 Table1 BTop1`}>
        <thead>
          <tr>
            <th>쿠폰명</th>
            <th>혜택</th>
            <th>사용조건</th>
            <th>유효기간</th>
            <th>발급일</th>
          </tr>
        </thead>
        <tbody>
          {Array.from(Array(2)).map((obj, idx) => {
            return (
              <Fragment key={idx}>
                <tr>
                  <td>
                    <div className={`text-[16px] font-[400] text-[var(--color1)]`}>
                      마인드브릿지 X 7드라이브인 1만원 쿠폰
                    </div>
                  </td>
                  <td>
                    <div className={`text-[14px] font-[400] leading-[20px] text-[var(--color2)]`}>
                      정가 기준
                      <br />
                      34% 상품할인
                      <br />
                      (상품쿠폰)
                    </div>
                  </td>
                  <td>
                    <button className={`ButtonMd ButtonStyle4 Round`}>자세히보기</button>
                  </td>
                  <td>
                    <div className={`Montserrat text-[16px] font-[500] text-[#161616]`}>
                      <div>2023.05.01 15:14</div>
                      <div>~</div>
                      <div>2023.05.19 15:14</div>
                    </div>
                  </td>
                  <td>
                    <div className={`Montserrat text-[16px] font-[500] text-[#161616]`}>2023.05.01</div>
                  </td>
                </tr>
              </Fragment>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default ProductTable13;
