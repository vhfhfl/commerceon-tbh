import CheckBox1 from '@/components/form/CheckBox1';
import TermsBox from '@/modules/TermsBox';

function FormTable7(props) {
  const { className = '' } = props;
  return (
    <>
      <div className={`FormTable7 ${className}`}>
        <table className={`Table1 Form NoTop`}>
          <tbody>
            <tr>
              <td>추가 문의 내용</td>
              <td>
                <textarea className={`TAREA-1`} placeholder={`추가 문의 내용 (비밀글로 등록됩니다.)`}></textarea>
              </td>
            </tr>
            <tr>
              <td>자동등록방지</td>
              <td>
                <img src={`https://gifpng.com/327x120/`} alt={``} />
              </td>
            </tr>
            <tr>
              <td className={`!text-left`} colSpan={2}>
                <div className={`text-[16px] font-[700] text-[var(--color1)]`}>비회원 개인정보 수집 동의</div>
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

export default FormTable7;
