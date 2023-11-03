import { Util } from '@/scripts/util';
import TableItem7 from './TableItem7';
import CheckBox1 from '@/components/form/CheckBox1';
import FileField_1 from './FileField_1';
import TermsBox from './TermsBox';

function FormTable32(props) {
  const { className = '' } = props;
  return (
    <>
      <div className={`FormTable32 ${className}`}>
        <table className={`Table1 Form`}>
          <tbody>
            <tr>
              <td>문의유형</td>
              <td>
                <div
                  className={`SelectBox1 w-[270px]`}
                  onClick={(evt) => {
                    const target = evt.target.closest('.SelectBox1');
                    Util.toggleClass(target, 'On');
                  }}>
                  <button>
                    <div>유형을 선택해주세요.</div>
                  </button>
                  <div className={`Options`}>
                    <button>A</button>
                    <button>B</button>
                    <button>C</button>
                  </div>
                </div>
                <button className={`ButtonStyle2 ButtonMd Round ml-[16px] w-[140px]`}>상품선택</button>
              </td>
            </tr>
            <tr>
              <td>작성자</td>
              <td>
                <input className={`TextInput2 w-[270px]`} type={`text`} placeholder={`작성자`} />
              </td>
            </tr>
            <tr>
              <td>비밀번호</td>
              <td>
                <input className={`TextInput2 w-[185px]`} type={`text`} placeholder={`비밀번호 입력`} />
                <input className={`TextInput2 ml-[10px] w-[185px]`} type={`text`} placeholder={`비밀번호 확인`} />
              </td>
            </tr>
            <tr>
              <td>상품선택</td>
              <td>
                <TableItem7 />
              </td>
            </tr>
            <tr>
              <td>
                <span className={`text-[var(--color2)]`}>*</span>
                제목
              </td>
              <td>
                <article className={`CenterLeft`}>
                  <input className={`TextInput2 w-[270px]`} type={`text`} placeholder={`제목을 입력해주세요.`} />
                  <CheckBox1 className={`ml-[15px]`}>비밀글</CheckBox1>
                </article>
              </td>
            </tr>
            <tr>
              <td>내용</td>
              <td>
                <textarea className={`TAREA-1`} placeholder={`내용을 입력하세요.`}></textarea>
              </td>
            </tr>
            <tr>
              <td>첨부파일</td>
              <td>
                <FileField_1 />
              </td>
            </tr>
            <tr>
              <td>자동등록방지</td>
              <td>
                <img src={`https://gifpng.com/327x120/`} alt={``} />
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                <div className={`mt-[41px] text-[16px] font-[700] text-[var(--color1)]`}>비회원 개인정보 수집 동의</div>
                <div className={`mt-[19px]`}>
                  <TermsBox className={`h-[258px]`} />
                </div>
                <div className={`mt-[14px] flex flex-row items-center gap-[0]`}>
                  <CheckBox1>
                    <span className={`text-[var(--color13)]`}>(필수)</span>
                    &nbsp;
                    <span>비회원 글 작성에 대한 개인정보 수집 및 이용동의</span>
                  </CheckBox1>
                  <a
                    href='https://www.google.com'
                    target='_blank'
                    className={`ml-[9px] inline-flex flex-row items-center justify-center gap-[0] text-[14px] font-[400] text-[var(--color5)]`}>
                    전체보기
                    <img src={`/icons/zco_72.svg`} alt={``} />
                  </a>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default FormTable32;
