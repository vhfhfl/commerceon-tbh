import InfoTable12 from '@/modules/InfoTable12';

function LayerSize1() {
  return (
    <div className={`LayerSize1 w-[320px] bg-white`}>
      <div className={`pt-[26px] px-[20px] pb-[50px]`}>
        <div className={`text-[22px] font-[600] text-[var(--color1)]`}>
          실측사이즈
        </div>
        <div className={`mt-[14px]`}>
          <article className={`CenterCenter p-[10px] bg-[var(--color7)] border-[1px] border-solid border-[var(--color6)]`}>
            <img className={`w-full aspect-1/1`} src={`/imgs/size.jpg`} alt={``} />
          </article>
          <div className={`mt-[14px]`}>
            <div className={`text-[var(--color5)] text-[12px] font-[600] text-right`}>
              우측으로 스와이프 하여 전체 표를 확인하세요!
            </div>
            <div className={`mt-[10px] overflow-x-auto`}>
              <InfoTable12 />
            </div>
          </div>
          <div className={`mt-[30px] text-center`}>
            <div className={`text-[var(--color1)] text-[14px] font-[600] leading-[20px]`}>
              본 사이즈는 상품의  실제 측정사이즈이며
              <br />
              ±1-2cm의 오차가 있을 수 있습니다.
            </div>
            <article className={`mt-[12px] inline-flex items-center justify-center gap-0 py-[6px] px-[10px] text-[var(--color1)] text-[12px] font-[400] bg-[var(--color6)] rounded-[20px]`}>
              단위 : cm
            </article>
          </div>
        </div>
        <article className={`CenterCenter mt-[30px]`}>
          <button className={`ButtonXl ButtonStyle2 w-full`}>닫기</button>
        </article>
      </div>
    </div>
  );
}

export default LayerSize1;