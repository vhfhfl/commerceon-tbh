function FormTable4(props) {
  const { className = '' } = props;
  return (
    <>
      <div className={`FormTable4 ${className}`}>
        <table className={`Table1 Form`}>
          <tbody>
            <tr>
              <td>주문번호</td>
              <td>
                <div className={`Montserrat text-[14px] font-[500] leading-[36px] text-[var(--color2)]`}>
                  2305181429000296
                </div>
              </td>
            </tr>
            <tr>
              <td>결제금액</td>
              <td>
                <div className={`Montserrat text-[14px] font-[500] leading-[36px] text-[var(--color1)]`}>39,900원</div>
              </td>
            </tr>
            <tr>
              <td>결제수단</td>
              <td>
                <div className={`text-[14px] leading-[36px] text-[var(--color1)]`}>
                  무통장 입금 계좌 : 국민은행 0000000-0000000 티비에이치
                </div>
              </td>
            </tr>
            <tr>
              <td>배송정보</td>
              <td>
                <div className={`text-[14px] font-[500] leading-[24px] text-[var(--color1)]`}>
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

export default FormTable4;
