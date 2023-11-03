import CheckBox1 from '@/components/form/CheckBox1';
import TableItem5 from "@/modules/TableItem5";
import {Fragment} from 'react';

function ProductTable12(props) {
  return (
    <>
      <table className={`ProductTable12 Table1`}>
        <thead>
          <tr>
            <th className={`w-[70px]`}>
              <CheckBox1 />
            </th>
            <th className={``}>상품명/옵션</th>
            <th className={`w-[176px]`}>상품금액</th>
            <th className={`w-[176px]`}>판매상태</th>
            <th className={`w-[176px]`}>등록날짜</th>
          </tr>
        </thead>
        <tbody>
          {Array.from(Array(3)).map((obj, idx) => {
            return (
              <Fragment key={idx}>
                <tr>
                  <td>
                    <CheckBox1 />
                  </td>
                  <td className={`!text-left`}>
                    <TableItem5 />
                  </td>
                  <td>
                    <div className={`Montserrat text-[16px] font-[500] text-[#161616]`}>39,900원</div>
                  </td>
                  <td>
                    <div className={`Montserrat text-[16px] font-[500] text-[#F20042]`}>품절</div>
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

export default ProductTable12;
