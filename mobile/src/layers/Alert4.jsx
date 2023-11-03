function Alert4() {
  return (
    <div className={`Alert4 w-[320px] bg-white`}>
      <div className={`px-[15px] pt-[20px] pb-[40px]`}>
        <div className={`text-[18px] font-[600] leading-[18px] text-[var(--color1)]`}>등급 혜택 안내</div>
        <table className={`Table2 mt-[28px]`}>
          <tbody>
            <tr>
              <th className={`w-[80px]`}>회원등급</th>
              <td>TBH글로벌 임직원회원</td>
            </tr>
            <tr>
              <th className={`w-[80px]`}>추가할인</th>
              <td className={`leading-[18px]`}>5,000원 이상 구매시 상품판매 금액의 20.0% 추가할인</td>
            </tr>
            <tr>
              <th className={`w-[80px]`}>중복할인</th>
              <td className={`leading-[18px]`}>
                0원 이상 구매시 상품판매 금액의
                <br />
                0.0% 추가할인
              </td>
            </tr>
            <tr>
              <th className={`w-[80px]`}>추가적립</th>
              <td className={`leading-[18px]`}>
                0원 이상 구매시 상품판매 금액의
                <br />
                0.0% 추가할인
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <article className={`grid grid-cols-[repeat(auto-fit,minmax(0,1fr))] items-center justify-center gap-[0]`}>
        <button className={`PopupButton2`}>닫기</button>
      </article>
    </div>
  );
}

export default Alert4;
