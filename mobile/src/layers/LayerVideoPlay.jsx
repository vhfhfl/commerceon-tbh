import {Layer} from '@/scripts/util';
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
    <div className={`LayerVideoPlay`}>
      <div className='Body max-w-[95vw]'>
        <div className={`absolute top-[-60px] right-[0] z-10`}>
          <button
            >
            <Image src={`/icons/ico_2.svg`} width={50} height={50} alt='' />
          </button>
        </div>
        <div className={`relative`}>
          {/*
            preload : 음악을 재생하기 전에 모두 불러올지 지정한다. (value: auto, metadata, none)
            >> none : 사용자가 비디오를 필요로하지 않을 것이라고 명시, 미리 다운로드 하지 않음
            >> metadata : 사용자가 비디오를 필요로 하지 않을 것이지만, 기본정보(크기,첫프레임,오디오길이 등)는 가져온다.
            >> auto : 사용자가 비디오를 필요로 하고 미리 다운로드를 한다 (기본값) - 사용시 poster 작동안함
            controls : 기본 컨트롤러를 사용여부
            controlsList="nodownload" : 이 설정이 없으면 비디오 원본 소스를 아무나 다운로드 받을 수 있다.
            loop="loop" : 반복 재생을 지정한다. (value: loop)
            autoplay : 자동 재생을 지정한다. (value: autoplay) , 모바일에서는 보안상 이유로 자동재생이 되지 않는다.
            >> (autoplay muted="muted") 를 같이 지정하면 모바일에서도 자동재생이 지원된다.
            muted="muted" : 음소거로
            poster : 비디오 썸네일
            playsinline : 아이폰에서 영상 재생시 전체화면으로 열리는것 방지
          */}
          <video
            ref={ref_video}
            className={`aspect-video`}
            // poster="https://picsum.photos/560/315.jpg?random=1"
            width={852}
            // autoPlay muted
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
            <Image className={`Icon`} src={`/icons/icon_13.svg`} width={50} height={50} priority alt='재생 버튼 아이콘' />
          </button>
        </div>
        <div className={`mt-[28px] text-center`}>
          <div className={`Montserrat text-[14px] font-[600] text-[white]`}>2023 MIND BRIDGE Season Video</div>
          <div className={`mt-[10px] text-[14px] font-[300] text-[white]`}>마인드 브릿지 뉴시즌</div>
        </div>
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
