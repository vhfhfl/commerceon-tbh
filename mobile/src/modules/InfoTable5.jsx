function InfoTable5(props) {
  const { className = '' } = props;
  return (
    <>
      <div className={`InfoTable5 ${className}`}>
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
              <td>
                <div className={`leading-[22px]`}>
                  무통장 입금 계좌 :<br />
                  국민은행 0000000-0000000 티비에이치
                </div>
              </td>
            </tr>
            <tr>
              <td>배송정보</td>
              <td>
                <div className={`leading-[22px]`}>
                  받는사람 : <br />
                  소비자 주소 : 서울특별시 마포구 0000 00000 <br />
                  연락처 : 010-0000-0000 <br />
                  배송 메모 : 부재시 경비실에 맡겨주세요. <br />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default InfoTable5;
