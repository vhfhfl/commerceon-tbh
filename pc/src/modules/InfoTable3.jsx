import RadioBtn from '@/components/form/RadioBtn';

function InfoTable3(props) {
  return (
    <>
      <table className={`InfoTable3 Table1 Left Form`}>
        <tbody>
          <tr>
            <td className={`w-[190px]`}>
              <article className={`flex flex-row items-center gap-[0]`}>
                <div>반품교환배송비</div>
                <div className={`ml-[2px] text-[12px] font-[400] text-[#888]`}>(3,000원)</div>
              </article>
            </td>
            <td>
              <article className={`flex flex-row items-center gap-[16px]`}>
                <RadioBtn>주문 금액에서 차감</RadioBtn>
                <RadioBtn>배송비 별도 결제 (카드)</RadioBtn>
              </article>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default InfoTable3;
