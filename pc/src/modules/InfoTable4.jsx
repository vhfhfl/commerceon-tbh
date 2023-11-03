function InfoTable1(props) {
  return (
    <>
      <table className={`InfoTable1 Table1 NoBorder`}>
        <thead>
          <tr>
            <th className={`w-[120px]`}>수령인 정보</th>
            <th className={``}>주소</th>
            <th className={`w-[170px]`}>전화번호</th>
            <th className={`w-[170px]`}>휴대폰번호</th>
            <th className={`w-[230px]`}>남기실 말씀</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div>홍길동</div>
            </td>
            <td>
              <div>(07251)서울시 마포구 양화로 111 00아파트 403-201</div>
            </td>
            <td>
              <div>12-345-6789</div>
            </td>
            <td>
              <div>012-345-6789</div>
            </td>
            <td>
              <div>부재시 경비실에 맡겨주세요.</div>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default InfoTable1;
