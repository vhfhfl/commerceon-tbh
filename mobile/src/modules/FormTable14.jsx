import CheckBox1 from '@/components/form/CheckBox1';
import ProductItem19 from '@/modules/ProductItem19';
import InquireField2 from '@/modules/InquireField2';

function FormTable14(props) {
  const { className = '' } = props;

  return (
    <>
      <div className={`FormTable14 ${className}`}>
        <table className={`Table3 NoTop NoBorder`}>
          <colgroup>
            <col className={`w-[80px]`} />
            <col />
          </colgroup>
          <tbody>
            <tr>
              <td colSpan={2}>
                <div className={`mt-[16px]`}>
                  <div>답변시 알림받기</div>
                  <div className={`mt-[14px] border-t-[1px] border-solid border-t-[var(--color6)]`}>
                    <div className={`mt-[14px]`}>
                      <article className={`flex flex-row items-center gap-[8px]`}>
                        <div className={`InputUi InputSm w-[92px]`} data-form-hei={`Md`}>
                          <input type={`text`} placeholder={`010`} />
                        </div>
                        <span>-</span>
                        <div className={`InputUi InputSm w-[92px]`} data-form-hei={`Md`}>
                          <input type={`text`} />
                        </div>
                        <span>-</span>
                        <div className={`InputUi InputSm w-[92px]`} data-form-hei={`Md`}>
                          <input type={`text`} />
                        </div>
                      </article>
                      <div className={`mt-[2px]`}>
                        <CheckBox1 size={'Sm'}>
                          <div className={`translate-y-[9px]`}>
                            <div>SMS/카카오 알림톡 알림 받기</div>
                            <div className={`text-[10px] font-[400] text-[var(--color5)]`}>
                              체크하실 경우 답변 완료시 SMS 또는 카카오 알림톡으로 알려드립니다.
                            </div>
                          </div>
                        </CheckBox1>
                      </div>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                <div className={`InputUi InputSm w-full`} data-form-hei={`Md`}>
                  <input type={`text`} placeholder={`이메일 주소`} />
                </div>
                <div className={`mt-[2px]`}>
                  <CheckBox1 size={'Sm'}>
                    <div className={`translate-y-[9px]`}>
                      <div>메일 알림 받기</div>
                      <div className={`text-[10px] font-[400] text-[var(--color5)]`}>
                        체크하실 경우 답변 완료시 이메일로 알려드립니다.
                      </div>
                    </div>
                  </CheckBox1>
                </div>
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                <div>주문내역</div>
                <div className={`mt-[14px]`}>
                  <ProductItem19 />
                </div>
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                <InquireField2 />
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

export default FormTable14;
