function InfoTable6(props) {
  return (
    <>
      <table className={`Table2 [&_tr_th]:text-left`}>
        <colgroup>
          <col className={`w-[80px]`} />
          <col />
        </colgroup>
        <tbody>
          <tr>
            <th>회원등급</th>
            <td>TBH글로벌 임직원회원</td>
          </tr>
          <tr>
            <th>추가할인</th>
            <td className={`leading-[18px]`}>5,000원 이상 구매시 상품판매 금액의 20.0% 추가할인</td>
          </tr>
          <tr>
            <th>중복할인</th>
            <td className={`leading-[18px]`}>0원 이상 구매시 상품판매 금액의 0.0% 추가할인</td>
          </tr>
          <tr>
            <th>추가적립</th>
            <td className={`leading-[18px]`}>0원 이상 구매시 상품판매 금액의 0.0% 추가할인</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default InfoTable6;
