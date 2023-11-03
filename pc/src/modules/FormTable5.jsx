function FormTable5(props) {
  const { className = '' } = props;
  return (
    <>
      <div className={`FormTable5 ${className}`}>
        <table className={`Table1 Form`}>
          <tbody>
            <tr>
              <td>주문번호</td>
              <td>
                <div className={`Montserrat text-[14px] font-[500] leading-[36px] text-[var(--color1)]`}>
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
              <td>결제실패 사유</td>
              <td>
                <div className={`text-[var(--color13)] text-[14px] font-[400]`}>고객님의 결제 중단에 의해서 주문이 취소 되었습니다.</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default FormTable5;
