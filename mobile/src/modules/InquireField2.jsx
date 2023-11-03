import FileField1 from '@/modules/FileField1';

function InquireField2() {
  return (
    <>
      <div className={`InquireField2`}>
        <div className={`InputUi InputSm`} data-form-hei={`Md`}>
          <input type={`text`} placeholder={`제목`} />
        </div>
        <div className={`mt-[14px]`}>
          <textarea className={`TAREA-1`}></textarea>
        </div>
        <div className={`mt-[14px] border-t-[1px] border-solid border-t-[var(--color6)] pt-[14px]`}>
          <FileField1 />
        </div>
      </div>
    </>
  );
}

export default InquireField2;
