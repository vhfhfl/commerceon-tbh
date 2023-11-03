import CheckBox1 from '@/components/form/CheckBox1';
import TableItem7 from '@/modules/TableItem7';

function ItemList4(props) {
  const { className = '' } = props;
  return (
    <>
      <div className={`ItemList4 ${className}`}>
        <table className={`Table1 TopSmGray`}>
          <thead>
            <tr>
              <th className={`w-[70px]`}>
                <CheckBox1 />
              </th>
              <th>
                <span className={`text-[var(--color2)]`}>*</span>
                선택상품
              </th>
              <th className={`w-[256px]`}>
                <span className={`text-[var(--color2)]`}>*</span>
                구매 희망 수량
              </th>
              <th className={`w-[256px]`}>
                <span className={`text-[var(--color2)]`}>*</span>
                구매 희망 일자
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <CheckBox1 />
              </td>
              <td className={`!text-left`}>
                <TableItem7 />
              </td>
              <td>
                <div className={`flex flex-row items-center justify-center gap-[0]`}>
                  <button className={`Button5`}>
                    <img src={`/icons/zco_57_2.svg`} alt={`마이너스`} />
                  </button>
                  <div
                    className={`Montserrat inline-flex min-w-[38px] flex-row items-center justify-center text-[14px] font-[500] text-[var(--color1)]`}>
                    99
                  </div>
                  <button className={`Button5`}>
                    <img src={`/icons/zco_57_1.svg`} alt={`플러스`} />
                  </button>
                </div>
              </td>
              <td rowSpan={2}>
                <input className={`TextInput2 w-[169px]`} type={`text`} placeholder={`2023-07-08`} />
              </td>
            </tr>
            <tr>
              <td>
                <CheckBox1 />
              </td>
              <td className={`!text-left`}>
                <TableItem7 />
              </td>
              <td>
                <div className={`flex flex-row items-center justify-center gap-[0]`}>
                  <button className={`Button5`}>
                    <img src={`/icons/zco_57_2.svg`} alt={`마이너스`} />
                  </button>
                  <div
                    className={`Montserrat inline-flex min-w-[38px] flex-row items-center justify-center text-[14px] font-[500] text-[var(--color1)]`}>
                    99
                  </div>
                  <button className={`Button5`}>
                    <img src={`/icons/zco_57_1.svg`} alt={`플러스`} />
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default ItemList4;
