import ProductTable17 from '@/modules/ProductTable17';
import InfoTable5 from '@/modules/InfoTable5';

function LayerMyPage3() {
  return (
    <div className={`LayerMyPage3 w-[1038px] bg-white`}>
      <div className={`p-[30px]`}>
        <div>
          <div>
            <div className={`text-[18px] font-[700] text-[var(--color1)]`}>교환 신청하기</div>
            <div className={`mt-[20px]`}>
              <ProductTable17 />
            </div>
          </div>
          <div className={`mt-[60px]`}>
            <div className={`text-[18px] font-[700] text-[var(--color1)]`}>신청 사유</div>
            <div className={`mt-[20px]`}>
              <InfoTable5 />
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

export default LayerMyPage3;
