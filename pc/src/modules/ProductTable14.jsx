import {Fragment} from 'react';

function ProductTable14(props) {
  return (
    <>
      <table className={`ProductTable14 Table1`}>
        <thead>
          <tr>
            <th className={`w-[150px]`}>날짜</th>
            <th className={`w-[150px]`}>유형</th>
            <th className={``}>내용</th>
            <th className={`w-[320px]`}>유효기간</th>
            <th className={`w-[150px]`}>적립/사용</th>
          </tr>
        </thead>
        <tbody>
          {Array.from(Array(2)).map((obj, idx) => {
            return (
              <Fragment key={idx}>
                <tr>
                  <td>
                    <div className={`Montserrat text-[16px] font-[500] text-[#161616]`}>2023.05.01</div>
                  </td>
                  <td>
                    <div className={`Montserrat text-[16px] font-[500] text-[#161616]`}>적립</div>
                  </td>
                  <td>
                    <div className={`Montserrat text-[16px] font-[500] text-[#161616]`}>상품</div>
                  </td>
                  <td>
                    <div className={`Montserrat text-[16px] font-[500] text-[#161616]`}>2023.05.01 15:14 ~ 2023.05.19 15:14</div>
                  </td>
                  <td>
                    <div className={`Montserrat text-[16px] font-[500] text-[#161616]`}>-8,710원</div>
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

export default ProductTable14;
