import {Layer} from '@/scripts/util';

function LayerSample() {
  return (
    <div className={`LayerSample w-[320px] bg-white`}>
      <div className='RR relative h-[50px] bg-red-600 text-white'>
        <button
          className={`absolute top-1/2 right-[10px] z-10 -translate-y-1/2 bg-black`}
          >
          닫기
        </button>
      </div>
      <div className='p-[10px]'>
        <div className={`h-[200px] overflow-auto`}>
          동해 물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세. 무궁화 삼천리 화려 강산 대한 사람, 대한으로
          길이 보전하세. 남산 위에 저 소나무, 철갑을 두른 듯 바람 서리 불변함은 우리 기상일세. 무궁화 삼천리 화려 강산
          대한 사람, 대한으로 길이 보전하세. 가을 하늘 공활한데 높고 구름 없이 밝은 달은 우리 가슴 일편단심일세. 무궁화
          삼천리 화려 강산 대한 사람, 대한으로 길이 보전하세. 이 기상과 이 맘으로 충성을 다하여 괴로우나 즐거우나 나라
          사랑하세. 무궁화 삼천리 화려 강산 대한 사람, 대한으로 길이 보전하세. 동해 물과 백두산이 마르고 닳도록 하느님이
          보우하사 우리나라 만세. 무궁화 삼천리 화려 강산 대한 사람, 대한으로 길이 보전하세. 남산 위에 저 소나무, 철갑을
          두른 듯 바람 서리 불변함은 우리 기상일세. 무궁화 삼천리 화려 강산 대한 사람, 대한으로 길이 보전하세. 가을 하늘
          공활한데 높고 구름 없이 밝은 달은 우리 가슴 일편단심일세. 무궁화 삼천리 화려 강산 대한 사람, 대한으로 길이
          보전하세. 이 기상과 이 맘으로 충성을 다하여 괴로우나 즐거우나 나라 사랑하세. 무궁화 삼천리 화려 강산 대한
          사람, 대한으로 길이 보전하세.
        </div>
      </div>
      <div className='relative flex h-[50px] flex-row items-center justify-center bg-cyan-400 text-white'>
        <button className={`h-[40px] w-[150px] bg-black`}>
          닫기
        </button>
      </div>
    </div>
  );
}

export default LayerSample;
