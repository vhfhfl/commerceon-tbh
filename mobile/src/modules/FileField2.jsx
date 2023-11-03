function FileField1() {
  return (
    <>
      <div className={`FileField1`}>
        <article className={`grid grid-cols-[1fr_79px] items-center gap-[7px]`}>
          <div className={`InputUi InputSm`} data-form-hei={`Md`}>
            <input type={`text`} />
          </div>
          <button className={`ButtonStyle1 ButtonMd Round`}>파일선택</button>
        </article>
        <div className={`mt-[10px] text-[12px] font-[400] text-[var(--color5)]`}>* 20MB 미만까지 첨부 가능</div>
      </div>
    </>
  );
}

export default FileField1;
