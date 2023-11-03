import FormTable32 from '@/modules/FormTable32';

function LayerProductInquiry2() {
  return (
    <div className={`LayerProductInquiry2 w-[1208px] bg-white`}>
      <div className={`p-[30px]`}>
        <div>
          <div className={`text-[28px] font-[600] leading-[34px] text-[var(--color1)]`}>상품 문의하기</div>
          <div className={`mt-[20px]`}>
            <FormTable32 />
          </div>
        </div>
        <article className={`mt-[60px] flex flex-row items-center justify-center gap-[16px]`}>
          <button className={`PopupButton3 w-[230px]`}>목록으로</button>
          <button className={`PopupButton2 w-[230px]`}>수정</button>
          <button className={`PopupButton1 w-[230px]`}>삭제</button>
        </article>
      </div>
    </div>
  );
}

export default LayerProductInquiry2;
