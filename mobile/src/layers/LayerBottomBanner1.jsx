import SafeAreaBottom from '@/components/core/SafeAreaBottom';
import {Layer} from '@/scripts/util';
import Banner3 from '@/swipers/Banner3';

function LayerBottomBanner1() {
  return (
    <div className={`LayerBottomBanner1 w-[360px]`}>
      <div className='Body w-full'>
        <div className={`relative aspect-[720/466] w-full overflow-hidden rounded-t-[20px] bg-red-600`}>
          <Banner3 />
        </div>
        <div className={`flex flex-row items-center justify-between bg-white px-[10px] pt-[10px] pb-[4px]`}>
          <button className={`Btn1`}>
            오늘 하루 보지않기
          </button>
          <button
            className={`Btn1 Bold`}
            >
            닫기
          </button>
        </div>
        <SafeAreaBottom />
      </div>
    </div>
  );
}

// LayerBottomBanner1.Layout = LayoutEmpty;
export default LayerBottomBanner1;
