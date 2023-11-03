import ProductItem19 from '@/modules/ProductItem19';
import InquireField1 from '@/modules/InquireField1';

function FormTable13(props) {
  const { className = '' } = props;

  return (
    <>
      <div className={`FormTable13 ${className}`}>
        <table className={`Table3 NoTop NoBorder`}>
          <colgroup>
            <col className={`w-[80px]`} />
            <col />
          </colgroup>
          <tbody>
            <tr>
              <td>작성자</td>
              <td>
                <div className={`InputUi InputSm`} data-form-hei={`Md`}>
                  <input type={`text`} />
                </div>
              </td>
            </tr>
            <tr>
              <td>비밀번호</td>
              <td>
                <div className={`InputUi InputSm error`} data-form-hei={`Md`}>
                  <input type={`text`} />
                </div>
                <div className={`InputUi InputSm error mt-[10px]`} data-form-hei={`Md`}>
                  <input type={`text`} />
                </div>
                <div className={`mt-[12px] text-[12px] font-[400] text-[var(--color13)]`}>
                  비밀번호가 일치하지 않습니다.
                </div>
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                <div>선택상품</div>
                <div className={`mt-[14px]`}>
                  <ProductItem19 />
                </div>
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                <InquireField1 />
              </td>
            </tr>
            <tr>
              <td>자동등록방지</td>
              <td>
                <img src={`https://gifpng.com/238x55`} alt={``} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default FormTable13;
