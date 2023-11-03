function ItemList6(props) {
  const { className = '' } = props;
  return (
    <>
      <div className={`ItemList6 ${className}`}>
        <table className={`Table1 text-center`}>
          <thead>
            <tr>
              <th className={`w-[70px]`}></th>
              <th className={`w-[518px]`}>상품정보</th>
              <th className={`w-[160px]`}>상품금액</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={3}>
                <div className={`py-[100px] text-[14px] font-[400] text-[var(--color1)]`}>등록된 상품이 없습니다.</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default ItemList6;
