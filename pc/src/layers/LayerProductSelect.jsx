import FormTable26 from '@/modules/FormTable26';
import ItemList5 from '@/modules/ItemList5';
import ItemList6 from '@/modules/ItemList6';
import Paging1 from '@/modules/Paging1';

function LayerProductSelect() {
  return (
    <div className={`LayerProductSelect w-[808px] bg-white`}>
      <div className={`p-[30px]`}>
        <div className={`text-[28px] font-[600] text-[var(--color1)]`}>상품 선택</div>
        <div className={`mt-[20px]`}>
          <div>
            <FormTable26 />
          </div>
          <article className={`CenterCenter mt-[30px]`}>
            <button className={`ButtonLg ButtonStyle4 w-[120px]`}>조회</button>
          </article>
        </div>
        <div className={`mt-[40px]`}>
          <div className={`text-[16px] font-[400] text-[var(--color1)]`}>상품 10건</div>
          <div className={`mt-[14px]`}>
            <div>
              <ItemList6 />
            </div>
            <div>
              <div>
                <ItemList5 />
              </div>
              <div className={`mt-[50px]`}>
                <Paging1 />
              </div>
            </div>
          </div>
        </div>
        <article className={`mt-[60px] flex flex-row items-center justify-center gap-[16px]`}>
          <button className={`PopupButton3 w-[230px]`}>닫기</button>
          <button className={`PopupButton2 w-[230px]`}>상품 추가</button>
        </article>
      </div>
    </div>
  );
}

export default LayerProductSelect;
