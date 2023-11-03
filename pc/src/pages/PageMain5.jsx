import MainTit5 from "@/components/common/MainTit5";
import LayoutBasic3 from '@/layouts/LayoutBasic3';
import SearchWrapper from '@/modules/SearchWrapper';
import ProductSwiper6 from '@/swipers/ProductSwiper6';
import Image from 'next/image';

function PageMain5() {
  return (
    <div className={`PageMain5`}>
      <section data-seq='20230428144746264' className={`relative`}>
        <div className={`grid grid-cols-[735px_1fr] gap-[0] border-b-[1px] border-solid border-b-[var(--color6)]`}>
          <div>
            <Image
              className={`aspect-[735/760] h-full w-full object-cover`}
              src={`https://picsum.photos/735/760.jpg?random=1`}
              width={735}
              height={760}
              alt=''
            />
          </div>
          <div className={`flex flex-col justify-between pl-[122px]`}>
            <div className={`pt-[172px]`}>
              <div className={`text-[64px] font-[700] text-[var(--color1)]`}>ACUASCUTUM</div>
              <div className={`mt-[55px] text-[36px] font-[400] leading-[42px] text-[var(--color1)]`}>
                170여년의 역사와기술력으로 <br />
                탄생한 영국의클래식과 가치를 담은 <br />
                British Heritage 브랜드
              </div>
            </div>
            <div>
              <div className={`flex flex-row items-center justify-end pb-[47px] pr-[56px]`}>
                <button className={`flex flex-row items-center justify-center`}>
                  <Image className={`block`} src={`/icons/icon_15_on.svg`} width={30} height={30} priority alt='하트' />
                  <div className={`ml-[2px] text-[16px] font-[500] text-[var(--color1)]`}>10</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section data-seq='20230429070838464' className={`mt-[95px]`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <MainTit5 href={`https://www.google.com`}>NEW ARRIVALS</MainTit5>
            <div className={`mt-[55px]`}>
              <ProductSwiper6 />
            </div>
          </div>
        </div>
      </section>
      <section data-seq={`20230522161255553`} className={`mt-[120px]`}>
        <SearchWrapper />
      </section>
    </div>
  );
}

PageMain5.Layout = LayoutBasic3;
export default PageMain5;
