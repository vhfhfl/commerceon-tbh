import CheckBox1 from '@/components/form/CheckBox1';
import { Util } from '@/scripts/util';

function FormTable19(props) {
  const { className = '', idx } = props;
  return (
    <>
      <div className={`FormTable19 ${className}`}>
        <table className={`Table3 NoBorder`}>
          <colgroup>
            <col className={`w-[80px]`} />
            <col />
          </colgroup>
          <tbody>
            <tr>
              <td>배송지명</td>
              <td>
                <article className={`grid grid-cols-[1fr_auto] items-center justify-center gap-[10px]`}>
                  <div className={`InputUi InputSm`} data-form-hei={`Md`}>
                    <input type={`text`} />
                  </div>
                  <CheckBox1 size={`Sm`}>기본 배송지 설정</CheckBox1>
                </article>
              </td>
            </tr>
            <tr>
              <td>받는분</td>
              <td>
                <div className={`InputUi InputSm`} data-form-hei={`Md`}>
                  <input type={`text`} />
                </div>
              </td>
            </tr>
            <tr>
              <td>배송지 정보</td>
              <td>
                <article className={`grid grid-cols-[1fr_76px] items-center justify-center gap-[6px]`}>
                  <div className={`InputUi InputSm`} data-form-hei={`Md`}>
                    <input type={`text`} placeholder={`12345`} />
                  </div>
                  <button className={`ButtonMd ButtonStyle4 Round`}>우편번호</button>
                </article>
                <div className={`mt-[6px]`}>
                  <div className={`InputUi InputSm w-full`} data-form-hei={`Md`}>
                    <input type={`text`} defaultValue={`서울특별시 강남구 삼성동`} />
                  </div>
                  <div className={`InputUi InputSm mt-[6px] w-full`} data-form-hei={`Md`}>
                    <input type={`text`} defaultValue={`1225호`} />
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>연락처</td>
              <td>
                <article className={`flex flex-row items-center gap-[5px]`}>
                  <div className={`InputUi InputSm w-[70px]`} data-form-hei={`Md`}>
                    <input type={`text`} placeholder={`010`} />
                  </div>
                  <span>-</span>
                  <div className={`InputUi InputSm w-[70px]`} data-form-hei={`Md`}>
                    <input type={`text`} />
                  </div>
                  <span>-</span>
                  <div className={`InputUi InputSm w-[70px]`} data-form-hei={`Md`}>
                    <input type={`text`} />
                  </div>
                </article>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default FormTable19;
