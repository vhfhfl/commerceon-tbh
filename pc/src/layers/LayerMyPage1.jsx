import ProductTable15 from '@/modules/ProductTable15';

function LayerMyPage1() {
  return (
    <div className={`LayerMyPage1 w-[808px] bg-white`}>
      <div className={`p-[30px]`}>
        <div>
          <div className={`text-[28px] font-[600] text-[var(--color1)]`}>구매 확정</div>
          <div className={`mt-[20px]`}>
            <div>
              <ProductTable15 />
            </div>
          </div>
        </div>
        <article className={`mt-[60px] flex flex-row items-center justify-center gap-[16px]`}>
          <button className={`PopupButton3 w-[230px]`}>취소</button>
          <button className={`PopupButton2 w-[230px]`}>확인</button>
        </article>
      </div>
    </div>
  );
}

export default LayerMyPage1;
