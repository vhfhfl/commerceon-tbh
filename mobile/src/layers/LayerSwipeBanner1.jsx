import {Layer} from '@/scripts/util';
import Banner2 from "@/swipers/Banner2";

function LayerSwipeBanner1() {
  return (
    <div className={`LayerSwipeBanner1 w-[320px]`}>
      <div className='Body'>
        <Banner2 />
      </div>
      <div
        className={`grid grid-cols-2 items-center justify-center gap-[0]
        text-[14px] font-[500] text-[var(--color1)]
        `}>
        <button className={`PopupButton1`}>오늘 하루 보지 않기</button>
        <button
          className={`PopupButton2`}
          >
          닫기
        </button>
      </div>
    </div>
  );
}

export default LayerSwipeBanner1;
