function InfoTable6(props) {
  const { className = '' } = props;
  return (
    <>
      <div className={`InfoTable6 ${className}`}>
        <table className={`Table3 NoBorder`}>
          <colgroup>
            <col className={`w-[80px]`} />
            <col />
          </colgroup>
          <tbody>
            <tr>
              <td>주문번호</td>
              <td>
                <div className={`Montserrat text-[var(--color2)]`}>2305181429000296</div>
              </td>
            </tr>
            <tr>
              <td>결제금액</td>
              <td>
                <div className={`Montserrat`}>39,900원</div>
              </td>
            </tr>
            <tr>
              <td>결제수단</td>
              <td>신용카드</td>
            </tr>
            <tr>
              <td>결제수단</td>
              <td>
                <div className={`break-keep leading-[22px] text-[var(--color13)]`}>
                  고객님의 결제 중단에 의해서 주문이 취소 되었습니다.
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default InfoTable6;
