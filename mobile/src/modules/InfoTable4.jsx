function InfoTable4(props) {
  const { className = '' } = props;
  return (
    <>
      <div className={`InfoTable4 ${className}`}>
        <table className={`Table3 NoBorder`}>
          <colgroup>
            <col className={`w-[80px]`} />
            <col />
          </colgroup>
          <tbody>
            <tr>
              <td>상품주문번호</td>
              <td>2305181545000344</td>
            </tr>
            <tr>
              <td>상품명</td>
              <td>[쿨]테이퍼드밴딩팬츠</td>
            </tr>
            <tr>
              <td>주문수량</td>
              <td>1개</td>
            </tr>
            <tr>
              <td>진행상태</td>
              <td>주문취소</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default InfoTable4;
