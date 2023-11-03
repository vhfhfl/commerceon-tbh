function InfoTable7(props) {
  return (
    <>
      <table className={`Table2 [&_tr_*]:text-[14px]`}>
        <colgroup>
          <col className={`w-[148px]`} />
          <col />
        </colgroup>
        <tbody>
          <tr>
            <th>사용범위</th>
            <td>PC+모바일</td>
          </tr>
          <tr>
            <th>최대 할인/적립 금액</th>
            <td>10,000원 할인/적립</td>
          </tr>
          <tr>
            <th>사용 가능 구매액</th>
            <td>구매금액이 50,000원 이상인 경우</td>
          </tr>
          <tr>
            <th>쿠폰 중복 사용 여부</th>
            <td>상품할인별 중복 사용 불가</td>
          </tr>
          <tr>
            <th>적용 제외 브랜드</th>
            <td>JUCYJUDY</td>
          </tr>
          <tr>
            <th>적용 제외 카테고리</th>
            <td>ACC</td>
          </tr>
          <tr>
            <th>적용 제외 공급사</th>
            <td>(주)커머스온</td>
          </tr>
          <tr>
            <th>적용 제외 상품</th>
            <td>
              <div className={`leading-[22px] line-clamp-3`}>
                도트컬러셔츠DJS1231도트컬러셔츠DJS1231도트컬러셔DJS1231도트컬러셔츠도트컬러셔DJS1231도트컬러셔츠DJS1231도트컬러셔DJS1231도트컬러셔츠도트컬러셔츠DJS1231도트컬러셔츠
              </div>
              <div className={`mt-[4px]`}>
                <button className={`Montserrat font-[700] text-[var(--color1)]`}>더보기</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default InfoTable7;
