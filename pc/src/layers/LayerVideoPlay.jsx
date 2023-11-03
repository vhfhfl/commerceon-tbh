import Image from 'next/image';
import {useEffect, useRef, useState} from 'react';

function LayerVideoPlay() {
  const ref_video = useRef();
  const ref_play_btn = useRef();

  const [is_paused, setIsPaused] = useState(true);

  useEffect(() => {
    // mount
    const el_video = ref_video.current;
    setIsPaused(el_video.paused);

    const changePausedState = (evt) => {
      setIsPaused(el_video.paused);
    };
    el_video.addEventListener('play', changePausedState);
    el_video.addEventListener('pause', changePausedState);

    return () => {
      // unmount
    };
  }, []);

  return (
    <div className={`LayerVideoPlay relative`}>
      <div className={`absolute top-[-60px] right-[0] z-10`}>
        <button
          >
          <Image src={`/icons/ico_2.svg`} width={50} height={50} alt='' />
        </button>
      </div>
      <div className={`relative`}>
        <video
          ref={ref_video}
          className={`Video aspect-video rounded-[10px]`}
          // poster="https://picsum.photos/560/315.jpg?random=1"
          width={1050}
          autoPlay
          muted
          // controls
          preload='auto'
          controlsList='nodownload'
          loop=' loop'
          playsInline>
          <source src='/mp4/1.mp4' type='video/mp4' />
          <div>
            인터넷익스플로러8 이하는 비디오가 나오지 않습니다. 인터넷익스플로러 버전을 업데이트 하시길 바랍니다.
          </div>
        </video>

        <button
          ref={ref_play_btn}
          className={`${
            is_paused && `IsPaused`
          } absolute top-[0] left-[0] z-10 flex h-full w-full flex-row items-center justify-center bg-[rgba(0,0,0,.5)] opacity-0 [&.IsPaused]:opacity-100`}
          onClick={(evt) => {
            const el_video = ref_video.current;
            if (el_video.paused) {
              el_video.play();
            } else {
              el_video.pause();
            }
          }}>
          <Image src={`/icons/icon_13.svg`} width={104} height={104} priority alt='재생 버튼 아이콘' />
        </button>
      </div>
      <div className={`mt-[30px] text-center`}>
        <div className={`Montserrat text-[14px] font-[500] text-[white]`}>JUCY JUDY</div>
        <div className={`Montserrat mt-[20px] text-[20px] font-[600] leading-[130%] text-[white]`}>
          2023 MIND BRIDGE Season Video
        </div>
        <div className={`text-[20px] font-[400] leading-[130%] text-[white]`}>마인드 브릿지 뉴시즌</div>
      </div>
    </div>
  );

  function stopVideo() {
    const el_video = ref_video.current;
    el_video.pause();
    el_video.currentTime = 0;
  }

  function reset() {
    const el_play_btn = ref_play_btn.current;
    el_play_btn.classList.add('On');

    stopVideo();
  }
}

export default LayerVideoPlay;
