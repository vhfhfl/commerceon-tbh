import RadioBtn from '@/components/form/RadioBtn';

function FormTable12(props) {
  const { className = '' } = props;

  return (
    <>
      <div className={`FormTable12 ${className}`}>
        <table className={`Table3 NoBorder`}>
          <colgroup>
            <col className={`w-[80px]`} />
            <col />
          </colgroup>
          <tbody>
            <tr>
              <td>
                <div className={`leading-[18px] text-[var(--color1)]`}>
                  <div>교환배송비</div>
                  <div>
                    <span>(왕복)</span>
                    <span className={`ml-[2px] font-[400] text-[var(--color5)]`}>6,000원</span>
                  </div>
                </div>
              </td>
              <td>
                <RadioBtn size={`Sm`}>배송비 별도 결제 (카드)</RadioBtn>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default FormTable12;
