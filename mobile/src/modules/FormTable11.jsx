import RadioBtn from '@/components/form/RadioBtn';

function FormTable11(props) {
  const { className = '' } = props;
  
  return (
    <>
      <div className={`FormTable11 ${className}`}>
        <table className={`Table3 NoBorder`}>
          <colgroup>
            <col className={`w-[80px]`} />
            <col />
          </colgroup>
          <tbody>
            <tr>
              <td>
                <div className={`leading-[18px] text-[var(--color1)]`}>
                  <div>반품배송비</div>
                  <div className={`font-[400] text-[var(--color5)]`}>(3,000원)</div>
                </div>
              </td>
              <td>
                <article className={`flex flex-col items-start gap-[10px]`}>
                  <RadioBtn size={`Sm`}>주문 금액에서 차감</RadioBtn>
                  <RadioBtn size={`Sm`}>배송비 별도 결제 (카드)</RadioBtn>
                </article>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default FormTable11;
