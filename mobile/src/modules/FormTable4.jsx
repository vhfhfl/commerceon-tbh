import RadioBtn from '@/components/form/RadioBtn';
import { Util } from '@/scripts/util';
import { Fragment } from 'react';

function FormTable4(props) {
  const { className = '' } = props;
  
  return (
    <>
      <div className={`FormTable4 ${className}`}>
        <table className={`Table3 NoBorder`}>
          <colgroup>
            <col className={`w-[80px]`} />
            <col />
          </colgroup>
          <tbody>
            <tr>
              <td colSpan={2}>
                <div>간편결제</div>
                <article className={`mt-[12px] flex flex-row flex-wrap items-center gap-[10px] text-[0]`}>
                  {Array.from(Array(5)).map((obj, idx) => {
                    return (
                      <Fragment key={idx}>
                        <button className={`${idx == 0 && `On`} PayButton1`}>
                          <img className={`Method [.On_>_&]:hidden`} src={`/imgs/pay_${idx + 1}.svg`} alt={``} />
                          <img
                            className={`Method hidden [.On_>_&]:block`}
                            src={`/imgs/pay_${idx + 1}_on.svg`}
                            alt={``}
                          />
                        </button>
                      </Fragment>
                    );
                  })}
                </article>
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                <div>일반결제</div>
                <article className={`mt-[12px] flex flex-row items-center gap-[10px]`}>
                  <RadioBtn size={`Sm`}>신용카드</RadioBtn>
                  <RadioBtn size={`Sm`}>계좌이체</RadioBtn>
                  <RadioBtn size={`Sm`}>가상계좌</RadioBtn>
                  <RadioBtn size={`Sm`}>휴대폰결제</RadioBtn>
                </article>
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                <div>에스크로결제</div>
                <article className={`mt-[12px] flex flex-row items-center gap-[10px]`}>
                  <RadioBtn size={`Sm`}>신용카드</RadioBtn>
                  <RadioBtn size={`Sm`}>계좌이체</RadioBtn>
                  <RadioBtn size={`Sm`}>가상계좌</RadioBtn>
                </article>
              </td>
            </tr>
            <tr>
              <td>카드 종류</td>
              <td>
                <div
                  className={`SelectBox1 w-full`}
                  onClick={(evt) => {
                    const target = evt.target.closest('.SelectBox1');
                    Util.toggleClass(target, 'On');
                  }}>
                  <button>
                    <div>카드 선택</div>
                  </button>
                  <div className={`Options`}>
                    <button>A</button>
                    <button>B</button>
                    <button>C</button>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>할부 선택</td>
              <td>
                <div
                  className={`SelectBox1 w-full`}
                  onClick={(evt) => {
                    const target = evt.target.closest('.SelectBox1');
                    Util.toggleClass(target, 'On');
                  }}>
                  <button>
                    <div>일시불</div>
                  </button>
                  <div className={`Options`}>
                    <button>A</button>
                    <button>B</button>
                    <button>C</button>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>카드사 선택</td>
              <td>
                <button className={`ButtonMd ButtonStyle4 Round`}>카드사 혜택 안내</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default FormTable4;
