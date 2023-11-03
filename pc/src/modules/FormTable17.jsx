import FileField_1 from '@/modules/FileField_1';

function FormTable17(props) {
  const { className = '' } = props;
  return (
    <>
      <div className={`FormTable17 ${className}`}>
        <table className={`Table1 Form`}>
          <tbody>
            <tr>
              <td>
                <span className={`text-[var(--color2)]`}>*</span>
                제목
              </td>
              <td>
                <input className={`TextInput2 w-[270px]`} type={`text`} placeholder={`제목을 입력해주세요.`} />
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
          </tbody>
        </table>
      </div>
    </>
  );
}

export default FormTable17;
