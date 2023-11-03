function InfoTable9(props) {
  const { className = '' } = props;
  return (
    <>
      <div className={`InfoTable9 ${className}`}>
        <table className={`Table3 NoBorder`}>
          <colgroup>
            <col className={`w-[80px]`} />
            <col />
          </colgroup>
          <tbody>
            <tr>
              <td>신청사유</td>
              <td>사이즈 교환</td>
            </tr>
            <tr>
              <td>상세사유</td>
              <td>사이즈가 안 맞아요.</td>
            </tr>
            <tr>
              <td>
                <div className={`leading-[18px]`}>
                  반품(교환)
                  <br />
                  배송비
                </div>
              </td>
              <td>3,000원 (신용카드)</td>
            </tr>
            <tr>
              <td>
                <div className={`leading-[18px]`}>
                  반품(교환)
                  <br />
                  수거지
                </div>
              </td>
              <td>
                <div className={`leading-[18px]`}>
                  (07251)서울시 마포구 양화로 111
                  <br /> 00아파트 403-201
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default InfoTable9;
