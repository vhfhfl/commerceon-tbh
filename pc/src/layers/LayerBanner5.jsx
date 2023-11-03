import Image from 'next/image';
import { useRef } from 'react';

function LayerBanner5(props) {
  const { className = '' } = props;

  const ref_this = useRef();
  const ref_video = useRef();

  return (
    <>
      <div ref={ref_this} {...props} className={`LayerBanner5 w-[360px] ${className}`}>
        <div className={`relative`}>
          <div className={`relative overflow-hidden rounded-full`}>
            <video
              ref={ref_video}
              className={`aspect-square h-full w-full object-cover`}
              width='100%'
              preload='auto'
              controlsList='nodownload'
              loop='loop'
              autoPlay
              muted
              playsInline>
              <source src='/mp4/1.mp4' type='video/mp4' />
              인터넷익스플로러8 이하는 비디오가 나오지 않습니다. 인터넷익스플로러 버전을 업데이트 하시길 바랍니다.
            </video>
            <button>
              <Image className={`Icon`} src={`/icons/zco_9.svg`} width={60} height={60} priority alt='재생 아이콘' />
            </button>
            <div
              className={`absolute bottom-[0] left-[0] z-10 flex w-full flex-row items-center justify-center bg-white`}>
              <div className={`pt-[15px] pb-[21px] text-[var(--color1)]`}>
                <div className={`Montserrat text-[20px] font-[600]`}>2023 s/s Video</div>
                <div className={`mt-[4px] text-[16px] font-[400]`}>쥬시 쥬디 봄신상 뉴시즌</div>
                <button className={`mt-[16px] w-full text-center text-[12px] font-[400] text-[#161616] underline`}>
                  오늘 하루 보지않기
                </button>
              </div>
            </div>
          </div>

          <button
            className={`absolute top-[11px] right-[16px] z-20`}
            onClick={(evt) => {
              const el_this = ref_this.current;
              el_this.classList.add('hidden');
            }}>
            <Image className={`Icon`} src={`/icons/zco_26.svg`} width={21} height={22} priority alt='닫기 아이콘' />
          </button>
        </div>
      </div>
    </>
  );
}

export default LayerBanner5;
