import FaqList2 from '@/modules/FaqList2';
import Paging1 from '@/modules/Paging1';

function LayerMyPage5() {
  return (
    <div className={`LayerMyPage5 w-[842px] bg-white`}>
      <div className={`p-[30px]`}>
        <div>
          <div className={`text-[28px] font-[600] text-[var(--color1)]`}>
            <span className={`text-[var(--color2)]`}>‘배송’</span>에 관련된 자주 묻는 질문
          </div>
          <div className={`mt-[20px]`}>
            <div>
              <FaqList2 />
            </div>
            <div className={`mt-[50px]`}>
              <Paging1 />
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

export default LayerMyPage5;
