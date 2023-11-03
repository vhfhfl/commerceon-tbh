import DateFilter1 from '@/modules/DateFilter1';
import ProductTable18 from '@/modules/ProductTable18';

function LayerMyPage6() {
  return (
    <div className={`LayerMyPage6 w-[1210px] bg-white`}>
      <div className={`p-[30px]`}>
        <div>
          <div className={`text-[28px] font-[600] text-[var(--color1)]`}>주문내역</div>
          <div>
            <DateFilter1 />
          </div>
          <div className={`mt-[60px]`}>
            <div className={`text-[18px] font-[700] text-[var(--color1)]`}>주문 4건</div>
            <div className={`mt-[20px]`}>
              <ProductTable18 />
            </div>
          </div>
        </div>
        <article className={`mt-[60px] flex flex-row items-center justify-center gap-0`}>
          <button className={`PopupButton2 w-[230px]`}>닫기</button>
        </article>
      </div>
    </div>
  );
}

export default LayerMyPage6;
