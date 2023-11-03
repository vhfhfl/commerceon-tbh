import CheckBox1 from '@/components/form/CheckBox1';
import { Fragment } from 'react';

function FormTable11(props) {
  const { className = '' } = props;
  return (
    <>
      <div className={`FormTable11 ${className}`}>
        <table className={`Table1 Form`}>
          <tbody>
            <tr>
              <td>주문자</td>
              <td>
                <input className={`TextInput2 w-[270px]`} type={`text`} placeholder={`주문하실 분의 이름을 입력해주세요.`} />
              </td>
            </tr>
            <tr>
              <td>연락처1</td>
              <td>
                <article className={`flex flex-row items-center gap-[5px]`}>
                  <input className={`TextInput2 w-[68px]`} type={`text`} placeholder={`010`} />
                  <span>-</span>
                  <input className={`TextInput2 w-[68px]`} type={`text`} />
                  <span>-</span>
                  <input className={`TextInput2 w-[68px]`} type={`text`} />
                </article>
              </td>
            </tr>
            <tr>
              <td>연락처2</td>
              <td>
                <article className={`flex flex-row items-center gap-[5px]`}>
                  <input className={`TextInput2 w-[68px]`} type={`text`} placeholder={`010`} />
                  <span>-</span>
                  <input className={`TextInput2 w-[68px]`} type={`text`} />
                  <span>-</span>
                  <input className={`TextInput2 w-[68px]`} type={`text`} />
                </article>
              </td>
            </tr>
            <tr>
              <td>이메일</td>
              <td>
                <input className={`TextInput2 w-[270px]`} type={`text`} placeholder={`example@gmail.com`} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default FormTable11;
