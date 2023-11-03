import RadioBtn from '@/components/form/RadioBtn';
import {Util} from '@/scripts/util';
import {Fragment} from 'react';

function FormTable3(props) {
  const { className = '' } = props;
  return (
    <>
      <div className={`FormTable3 ${className}`}>
        <table className={`Table1 Form`}>
          <tbody>
            <tr>
              <td>간편결제</td>
              <td>
                <article className={`flex flex-row items-center gap-[5px]`}>
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
                          <img className={`Circle [.On_>_&]:hidden`} src={`/imgs/pay_circle.svg`} alt={``} />
                          <img className={`Circle hidden [.On_>_&]:block`} src={`/imgs/pay_circle_on.svg`} alt={``} />
                        </button>
                      </Fragment>
                    );
                  })}
                </article>
              </td>
            </tr>
            <tr>
              <td>일반결제</td>
              <td>
                <article className={`flex flex-row items-center gap-[20px]`}>
                  <RadioBtn>신용카드</RadioBtn>
                  <RadioBtn>계좌이체</RadioBtn>
                  <RadioBtn>가상계좌</RadioBtn>
                  <RadioBtn>휴대폰결제</RadioBtn>
                </article>
              </td>
            </tr>
            <tr>
              <td>에스크로결제</td>
              <td>
                <article className={`flex flex-row items-center gap-[20px]`}>
                  <RadioBtn>신용카드</RadioBtn>
                  <RadioBtn>계좌이체</RadioBtn>
                  <RadioBtn>가상계좌</RadioBtn>
                </article>
              </td>
            </tr>
            <tr>
              <td>카드 종류</td>
              <td>
                <article className={`flex flex-row items-center gap-[0]`}>
                  <div
                    className={`SelectBox1 w-[172px]`}
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
                  <div className={`ml-[40px] mr-[18px] text-[14px] font-[400] text-[var(--color1)]`}>할부 선택</div>
                  <div
                    className={`SelectBox1 w-[172px]`}
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
                </article>
              </td>
            </tr>
            <tr>
              <td>카드사 혜택</td>
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

export default FormTable3;
