import CheckBox1 from '@/components/form/CheckBox1';

function ItemList1(props) {
  const { className = '' } = props;
  return (
    <>
      <div className={`ItemList1 ${className}`}>
        <table className={`Table1 TopSmGray NoBottom`}>
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
              <td colSpan={4}>
                <div className={`py-[100px] text-center text-[14px] font-[400] text-[var(--color1)]`}>
                  등록된 상품이 없습니다.
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default ItemList1;
