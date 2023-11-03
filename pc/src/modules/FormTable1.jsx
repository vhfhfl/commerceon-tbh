import CheckBox1 from '@/components/form/CheckBox1';
import { Fragment } from 'react';

function FormTable1(props) {
  const { className = '' } = props;
  return (
    <>
      <div className={`FormTable1 ${className}`}>
        <table className={`Table1 Form`}>
          <tbody>
            <tr>
              <td>받으시는 분</td>
              <td>
                <input className={`TextInput2 w-[270px]`} type={`text`} defaultValue={`티비에이치`} />
              </td>
            </tr>
            <tr>
              <td>연락처1</td>
              <td>
                <article className={`flex flex-row items-center gap-[0]`}>
                  <article className={`flex flex-row items-center gap-[5px]`}>
                    <input className={`TextInput2 w-[68px]`} type={`text`} placeholder={`010`} />
                    <span>-</span>
                    <input className={`TextInput2 w-[68px]`} type={`text`} />
                    <span>-</span>
                    <input className={`TextInput2 w-[68px]`} type={`text`} />
                  </article>
                  <button>
                    <img className={`ml-[10px]`} src={`/icons/icon_47_1.svg`} alt={`추가`} />
                  </button>
                </article>
              </td>
            </tr>
            <tr>
              <td>연락처2</td>
              <td>
                <article className={`flex flex-row items-center gap-[0]`}>
                  <article className={`flex flex-row items-center gap-[5px]`}>
                    <input className={`TextInput2 w-[68px]`} type={`text`} placeholder={`010`} />
                    <span>-</span>
                    <input className={`TextInput2 w-[68px]`} type={`text`} />
                    <span>-</span>
                    <input className={`TextInput2 w-[68px]`} type={`text`} />
                  </article>
                  <button>
                    <img className={`ml-[10px]`} src={`/icons/icon_47_2.svg`} alt={`삭제`} />
                  </button>
                </article>
              </td>
            </tr>
            <tr>
              <td>배송지 정보</td>
              <td>
                <article className={`flex flex-row items-center gap-[5px]`}>
                  <input className={`TextInput2 w-[270px]`} type={`text`} placeholder={`12345`} />
                  <button className={`ButtonMd ButtonStyle4 Round`}>우편번호 찾기</button>
                </article>
                <article className={`mt-[12px] flex flex-row items-center gap-[5px]`}>
                  <input className={`TextInput2 w-[388px]`} type={`text`} defaultValue={`서울특별시 강남구 삼선동`} />
                  <input className={`TextInput2 w-[185px]`} type={`text`} defaultValue={`1225호`} />
                </article>
                <article className={`mt-[12px] flex flex-row items-center gap-[30px]`}>
                  <CheckBox1>배송지 목록에 추가</CheckBox1>
                  <CheckBox1>기본 배송지로 선택</CheckBox1>
                </article>
              </td>
            </tr>
            <tr>
              <td>배송 메세지</td>
              <td>
                <article className={`flex flex-row items-center gap-[5px]`}>
                  <input className={`TextInput2 w-[270px]`} type={`text`} placeholder={`배송 메세지를 입력해주세요.`} />
                  <div className={`relative inline-block w-[270px]`}>
                    <input className={`TextInput2 On w-full`} type={`text`} defaultValue={`활성화 시`} />
                    <div className={`Options`}>
                      {[
                        '배송 전에 연락주세요 배송 전에 연락주세요 배송 전에 연락주세요',
                        '부재시 경비실에 맡겨주세요',
                        '부재시 문 앞에 놓아주세요',
                        '파손되지 않게 조심히 배송해 주세요',
                      ].map((obj, idx) => {
                        return (
                          <Fragment key={idx}>
                            <button>{obj}</button>
                          </Fragment>
                        );
                      })}
                    </div>
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

export default FormTable1;
