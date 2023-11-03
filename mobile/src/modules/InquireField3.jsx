import FileField2 from '@/modules/FileField2';

function InquireField3() {
  return (
    <>
      <div className={`InquireField3 border-b-[1px] border-solid border-b-[var(--color6)] pb-[14px]`}>
        <div className={`InputUi InputSm`} data-form-hei={`Md`}>
          <input type={`text`} placeholder={`제목`} />
        </div>
        <div className={`mt-[14px]`}>
          <textarea className={`TAREA-1`}></textarea>
        </div>
        <div className={`mt-[14px] border-t-[1px] border-solid border-t-[var(--color6)] pt-[14px]`}>
          <FileField2 />
        </div>
      </div>
    </>
  );
}

export default InquireField3;
