import CheckBox1 from '@/components/form/CheckBox1';
import TableItem4 from '@/modules/TableItem4';
import {Fragment} from "react";

function ProductTable10(props) {
  return (
    <>
      <table className={`ProductTable10 Table1`}>
        <thead>
          <tr>
            <th className={`w-[70px]`}>
              <CheckBox1 />
            </th>
            <th className={``}>상품정보</th>
            <th className={`w-[256px]`}>상품금액</th>
            <th className={`w-[270px]`}></th>
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
                    <TableItem4 />
                  </td>
                  <td>
                    <div className={`Montserrat text-[16px] font-[500] text-[#161616]`}>39,900원</div>
                  </td>
                  <td>
                    <article className={`space-y-[10px]`}>
                      <div>
                        <button className={`ButtonLg ButtonStyle2 w-[134px]`}>바로구매</button>
                      </div>
                      <div>
                        <button className={`ButtonLg ButtonStyle1 w-[134px]`}>장바구니</button>
                      </div>
                      <div>
                        <button className={`ButtonLg ButtonStyle2 w-[134px]`} disabled={true}>
                          바로구매
                        </button>
                      </div>
                    </article>
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

export default ProductTable10;
