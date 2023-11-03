import LayoutSub5 from '@/layouts/LayoutSub5';

function PageShopInfo2() {
  return (
    <div className={`PageShopInfo2`}>
      <section data-seq={`20230720121051`}>
        <div className={`h-[406px] w-full bg-[var(--color7)]`}></div>
      </section>
      <div className={`H-Box`}>
        <div className={`Inner`}>
          <section data-seq={`20230720122205`}>
            <div className={`mt-[20px]`}>
              <article className={`flex flex-row justify-between gap-[10px]`}>
                <div className={`w-[215px]`}>
                  <div className={`pt-[3px] text-[14px] font-[600] text-[var(--color1)]`}>
                    마인드브릿지 롯데아울렛 서울역점
                  </div>
                  <div className={`mt-[8px] text-[14px] font-[400] leading-[20px] text-[var(--color1)]`}>
                    서울 중구 한강대로 405
                  </div>
                </div>
                <div>
                  <div
                    className={`min-w-[52px] rounded-[2px] bg-[var(--color7)] px-[8px] text-[10px] font-[400] leading-[26px] text-[var(--color1)]`}>
                    서울지역
                  </div>
                </div>
              </article>
            </div>
            <article className={`mt-[20px] flex flex-row items-center justify-between gap-[8px]`}>
              <button className={`ButtonLg ButtonStyle4 w-full`}>
                <div className={`CenterCenter w-[24px] aspect-square`}>
                  <img className={`Icon`} src={`icons/icon_62_1.svg`} width={`16`} height={`16`} alt={``} />
                </div>
                <div>전화걸기</div>
              </button>
            </article>
          </section>
        </div>
      </div>
    </div>
  );
}

PageShopInfo2.Layout = LayoutSub5;
export default PageShopInfo2;
