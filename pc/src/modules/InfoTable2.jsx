function InfoTable2(props) {
  return (
    <>
      <table className={`InfoTable2 Table1 Left Form`}>
        <tbody>
          <tr>
            <td className={`w-[190px]`}>
              <div>신청사유</div>
            </td>
            <td>
              <div>사이즈 교환</div>
            </td>
          </tr>
          <tr>
            <td className={``}>
              <div>상세사유</div>
            </td>
            <td>
              <div>사이즈가 안 맞아요.</div>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default InfoTable2;
