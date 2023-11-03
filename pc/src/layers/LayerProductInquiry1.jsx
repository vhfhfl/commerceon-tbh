import FormTable23 from '@/modules/FormTable23';

function LayerProductInquiry1() {
  return (
    <div className={`LayerProductInquiry1 w-[1038px] bg-white`}>
      <div className={`p-[30px]`}>
        <div className={`text-[28px] font-[600] text-[var(--color1)]`}>상품 문의하기</div>
        <div className={`mt-[20px]`}>
          <FormTable23 />
        </div>
        <article className={`mt-[60px] flex flex-row items-center justify-center gap-[16px]`}>
          <button className={`PopupButton3 w-[230px]`}>목록으로</button>
          <button className={`PopupButton2 w-[230px]`}>저장</button>
        </article>
      </div>
    </div>
  );
}

export default LayerProductInquiry1;
