import FaqList1 from '@/modules/FaqList1';
import Paging1 from '@/modules/Paging1';

function LayerDeliveryFaq() {
  return (
    <div className={`LayerDeliveryFaq w-[320px] bg-white`}>
      <div className={`p-[15px] pb-[40px]`}>
        <div>
          <div className={`text-[18px] font-[600] text-[var(--color1)]`}>
            <span className={`text-[var(--color2)]`}>‘배송’</span>에 관련된 자주 묻는 질문
          </div>
          <div className={`mt-[15px]`}>
            <FaqList1 />
          </div>
          <div className={`mt-[30px]`}>
            <Paging1 />
          </div>
        </div>
      </div>
      <article className={`grid grid-cols-[repeat(auto-fit,minmax(0,1fr))] items-center justify-center gap-[0]`}>
        <button className={`PopupButton2`}>닫기</button>
      </article>
    </div>
  );
}

export default LayerDeliveryFaq;
