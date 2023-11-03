function InfoTable2(props) {
  const { className = '' } = props;
  return (
    <>
      <div className={`InfoTable2 ${className}`}>
        <table className={`Table3 NoBorder`}>
          <colgroup>
            <col className={`w-[80px]`} />
            <col />
          </colgroup>
          <tbody>
            <tr>
              <td>수령인</td>
              <td>홍길동</td>
            </tr>
            <tr>
              <td>주소</td>
              <td>
                <div className={`leading-[18px]`}>
                  (07251)서울시 마포구 양화로 111
                  <br /> 00아파트 403-201
                </div>
              </td>
            </tr>
            <tr>
              <td>전화번호</td>
              <td>00-0000-0000</td>
            </tr>
            <tr>
              <td>휴대폰번호</td>
              <td>010-0000-0000</td>
            </tr>
            <tr>
              <td>남기실 말씀</td>
              <td>부재시 경비실에 맡겨주세요.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default InfoTable2;
