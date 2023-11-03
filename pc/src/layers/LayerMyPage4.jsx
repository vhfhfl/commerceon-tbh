import InfoTable7 from '@/modules/InfoTable7';

function LayerMyPage4() {
  return (
    <div className={`LayerMyPage4 w-[456px] bg-white`}>
      <div className={`p-[30px]`}>
        <InfoTable7 />
      </div>
      <article className={`grid grid-cols-[repeat(auto-fit,minmax(0,1fr))] items-center justify-center gap-[0]`}>
        <button className={`PopupButton2 w-full`}>닫기</button>
      </article>
    </div>
  );
}

export default LayerMyPage4;
