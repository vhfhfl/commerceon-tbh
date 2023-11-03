function InfoTable3(props) {
  const { className = '' } = props;
  return (
    <>
      <div className={`InfoTable3 ${className}`}>
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
          </tbody>
        </table>
      </div>
    </>
  );
}

export default InfoTable3;
