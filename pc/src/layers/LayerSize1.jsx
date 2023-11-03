import InfoTable8 from '@/modules/InfoTable8';

function LayerSize1() {
  return (
    <div className={`LayerSize1 w-[800px] bg-white`}>
      <div className={`pt-[50px] px-[50px] pb-[90px]`}>
        <div className={`text-[28px] font-[600] text-[var(--color1)]`}>
          실측사이즈
        </div>
        <div className={`mt-[15px]`}>
          <article className={`CenterCenter p-[20px] bg-[var(--color7)] border-[1px] border-solid border-[var(--color6)]`}>
            <img className={`w-full aspect-1/1`} src={`/imgs/size.jpg`} alt={``} />
          </article>
        </div>
        <div className={`mt-[20px]`}>
          <InfoTable8 />
        </div>
        <div className={`mt-[24px] text-center`}>
          <div className={`text-[var(--color1)] text-[16px] font-[600] leading-[24px]`}>
            본 사이즈는 상품의  실제 측정사이즈이며 ±1-2cm의
            <br />
            오차가 있을 수 있습니다.
          </div>
          <article className={`mt-[10px] inline-flex items-center justify-center gap-0 py-[6px] px-[10px] text-[var(--color1)] text-[14px] font-[400] bg-[var(--color6)] rounded-[20px]`}>
            단위 : cm
          </article>
        </div>
        <article className={`CenterCenter mt-[40px]`}>
          <button className={`ButtonXl ButtonStyle2 w-[230px]`}>닫기</button>
        </article>
      </div>
    </div>
  );
}

export default LayerSize1;