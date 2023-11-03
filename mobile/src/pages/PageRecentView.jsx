import LayoutSub2 from '@/layouts/LayoutSub2';
import Image from 'next/image';
import {Fragment} from 'react';

function PageRecentView() {
  return (
    <div className={`PageRecentView`}>
      <div>
        <ul className={`space-y-[12px] px-[20px] pt-[26px]`}>
          {Array.from(Array(10)).map((obj, idx) => {
            return (
              <Fragment key={idx}>
                <li className={`relative grid grid-cols-[72px_1fr] items-center justify-center gap-[10px]`}>
                  <div>
                    <Image
                      className={`aspect-[144/144] h-full w-full object-cover`}
                      src={`https://picsum.photos/144/144.jpg?random=${idx}`}
                      width={144}
                      height={144}
                      alt=''
                    />
                  </div>
                  <div className={`min-w-[0]`}>
                    <div className={`Montserrat text-[12px] font-[600] text-[var(--color1)]`}>BRAND NAME</div>
                    <div className={`mt-[6px] truncate text-[12px] font-[400] text-[var(--color1)]`}>
                      봄이 벌써 불러 가을로 까닭입니다. 걱정도 불러 계절이 이국 패, 없이 듯합니다. 하나에 별이 써
                      피어나듯이 마디씩 밤을 너무나 그리고 계십니다.
                    </div>
                    <div className={`PriceBox mt-[14px]`}>
                      <div className={`text-[var(--color1)]`}>64,000</div>
                      <div className={`text-[var(--color1)] line-through opacity-40`}>129,000</div>
                      <div className={`text-[var(--color2)]`}>50%</div>
                    </div>
                  </div>
                  <button className={`RR absolute top-[0] right-[0] z-10`}>
                    <Image
                      className={`aspect-[16/16] h-full w-full object-cover`}
                      src={`/icons/zco_21.svg`}
                      width={16}
                      height={16}
                      alt=''
                    />
                  </button>
                </li>
              </Fragment>
            );
          })}
        </ul>
        <div className={`mt-[40px]`}>
          <button
            className={`Montserrat mx-auto flex flex-row items-center justify-center text-[14px] font-[600] text-[var(--color1)]`}
            onClick={(evt) => {
              const target = evt.target.closest('button');
              target.classList.toggle('On');
            }}>
            MORE
            <Image
              className={`ml-[6px] duration-300 ease-out will-change-auto [.On_>_&]:rotate-180`}
              src={`/icons/zco_22.svg`}
              width={18}
              height={18}
              alt=''
            />
          </button>
        </div>
      </div>
      <div className={`flex h-[50vh] flex-row items-center justify-center text-[14px] font-[400] text-[var(--color1)]`}>
        최근 본 상품이 없습니다.
      </div>
    </div>
  );
}

PageRecentView.Layout = LayoutSub2;
export default PageRecentView;
