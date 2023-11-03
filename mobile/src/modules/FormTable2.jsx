import CheckBox1 from '@/components/form/CheckBox1';

function FormTable2(props) {
  const { className = '' } = props;
  
  return (
    <>
      <div className={`FormTable2 ${className}`}>
        <table className={`Table3 NoBorder`}>
          <colgroup>
            <col className={`w-[80px]`} />
            <col />
          </colgroup>
          <tbody>
            <tr>
              <td colSpan={2}>
                <div className={`flex flex-row items-center gap-[8px]`}>
                  <button className={`ButtonSm ButtonStyle2 Round`}>배송지목록</button>
                  <button className={`ButtonSm ButtonStyle4 Round`}>주문고객 정보와 동일</button>
                </div>
              </td>
            </tr>
            <tr>
              <td>받으시는 분</td>
              <td>
                <div className={`InputUi InputSm w-full`} data-form-hei={`Md`}>
                  <input type={`text`} placeholder={`받으시는 분의 이름을 입력해주세요.`} />
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className={`flex flex-row items-center gap-0`}>
                  <div>연락처1</div>
                  <button className={`ml-[4px]`}>
                    <img
                      className={`Icon duration-300 ease-out [.On_>_&]:rotate-180`}
                      src={`/icons/icon_53_1.svg`}
                      alt={``}
                    />
                  </button>
                </div>
              </td>
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
            <tr>
              <td>
                <div className={`flex flex-row items-center gap-0`}>
                  <div>연락처2</div>
                  <button className={`ml-[4px]`}>
                    <img
                      className={`Icon duration-300 ease-out [.On_>_&]:rotate-180`}
                      src={`/icons/icon_53_2.svg`}
                      alt={``}
                    />
                  </button>
                </div>
              </td>
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
            <tr>
              <td>주소</td>
              <td>
                <article className={`flex flex-row items-center gap-[6px]`}>
                  <div className={`InputUi InputSm w-[159px]`} data-form-hei={`Md`}>
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
                <div className={`mt-[12px]`}>
                  <div>
                    <CheckBox1 size={`Sm`}>배송지 목록에 추가</CheckBox1>
                  </div>
                  <div className={`mt-[12px]`}>
                    <CheckBox1 size={`Sm`}>기본 배송지로 선택</CheckBox1>
                  </div>
                </div>
                <div className={`mt-[12px]`}>
                  <div className={`InputUi InputSm w-full`} data-form-hei={`Md`}>
                    <input type={`text`} placeholder={`배송 메세지를 입력해주세요.`} />
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default FormTable2;
