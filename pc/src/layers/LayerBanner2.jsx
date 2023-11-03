import {Layer} from '@/scripts/util';
import Image from 'next/image';
import {useRef} from 'react';

function LayerBanner2(props) {
  const { className = '' } = props;

  const ref_this = useRef();
  const ref_video = useRef();

  return (
    <>
      <div ref={ref_this} {...props} className={`LayerBanner2 w-[460px] ${className}`}>
        <div className={`relative mx-auto h-[283px] overflow-hidden rounded-t-[30px]`}>
          <div className={`h-full`}>
            <video
              ref={ref_video}
              className={`h-full w-full object-cover`}
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
          </div>
          <button
            className={`absolute top-[20px] right-[18px] z-20`}
            onClick={(evt) => {
              const el_this = ref_this.current;
              el_this.classList.add('hidden');
            }}>
            <Image className={`Icon`} src={`/icons/icon_3_1.svg`} width={47} height={47} priority alt='닫기 아이콘' />
          </button>
          <div
            className={`justi absolute top-0 left-0 z-10 flex h-full w-full flex-col items-start justify-end pl-[30px] pr-[65px] pb-[30px]`}>
            <button>
              <Image className={`Icon`} src={`/icons/zco_9.svg`} width={60} height={60} priority alt='재생 아이콘' />
            </button>
            <div className={`mt-[23px]`}>
              <div className={`Montserrat text-[26px] font-[600] leading-[28px] text-[var(--color6)]`}>
                2023 MIND BRIDGE
                <br />
                SEASON VIDEO
              </div>
              <div className={`mt-[10px] text-[20px] font-[400] text-white`}>마인드 브릿지 뉴 시즌</div>
            </div>
          </div>
        </div>
        <article className={`flex flex-row items-center justify-between gap-[0] bg-white p-[6px_11px]`}>
          <button className={`Btn_2 w-[159px]`}>오늘 하루 보지 않기</button>
          <button className={`Btn_3 w-[88px]`}>닫기</button>
        </article>
      </div>
    </>
  );
}

export default LayerBanner2;
