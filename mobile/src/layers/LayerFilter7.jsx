import Image from 'next/image';
import {Fragment} from 'react';

function LayerFilter7() {
  return (
    <div className={`LayerFilter7 h-full w-full bg-white`}>
      <div className={`flex h-[100vh] flex-col`}>
        <div className={`border-b-[1px] border-solid border-b-[var(--color6)] pt-[13px]`}>
          <div className={`relative h-[46px]`}>
            <div className={`absolute top-1/2 left-[4px] z-10 -translate-y-1/2`}>
              <button className={`flex h-[40px] w-[40px] flex-row items-center justify-center text-[0px]`}>
                <Image src={`/icons/zco_3.svg`} width={17} height={17} alt='' />
              </button>
            </div>
            <div
              className={`flex h-full flex-row items-center justify-center gap-[0] text-center text-[16px] font-[500] leading-[20px] text-[var(--color1)]`}>
              컬러
            </div>
          </div>
        </div>
        <div className={`min-h-0 flex-1 overflow-auto`}>
          <div className={`grid h-full grid-cols-[106px_1fr]`}>
            <div>
              <div className={`space-y-[22px] py-[26px] px-[20px]`}>
                {['브랜드','카테고리', '사이즈', '가격', '상태', '프로모션', '컬러', '시즌'].map((obj, idx) => {
                  return (
                    <Fragment key={idx}>
                      <button className={`flex h-[24px] w-full flex-row items-center justify-between`}>
                        <div className={`${obj =='컬러' && `font-[600]`}`}>{obj}</div>
                      </button>
                    </Fragment>
                  );
                })}
              </div>
            </div>
            <div className={`border-l-[1px] border-solid border-l-[var(--color6)] px-[20px] py-[25px]`}>
              <div className={`grid grid-cols-5 items-center justify-start gap-[10px]`}>
                <button
                  className={`flex aspect-square w-[28px] flex-row items-center justify-center gap-[0] rounded-full border-[1px] border-solid border-[#d4d4d4] bg-[#fff]`}>
                  <Image src={`/icons/zco_33.svg`} width={12} height={10} alt='' />
                </button>
                <button
                  className={`flex aspect-square w-[28px] flex-row items-center justify-center gap-[0] rounded-full bg-[#888]`}></button>
                <button
                  className={`flex aspect-square w-[28px] flex-row items-center justify-center gap-[0] rounded-full bg-[#d9d9d9]`}>
                  <Image src={`/icons/zco_32.svg`} width={12} height={10} alt='' />
                </button>
                <button
                  className={`flex aspect-square w-[28px] flex-row items-center justify-center gap-[0] rounded-full bg-[#161616]`}></button>
                <button
                  className={`flex aspect-square w-[28px] flex-row items-center justify-center gap-[0] rounded-full bg-[linear-gradient(135deg,#d4d4d4_0%,#ffffff_50%,#d4d4d4_100%)]`}></button>
                <button
                  className={`flex aspect-square w-[28px] flex-row items-center justify-center gap-[0] rounded-full bg-[#E60012]`}></button>
                <button
                  className={`flex aspect-square w-[28px] flex-row items-center justify-center gap-[0] rounded-full bg-[#FF66FA]`}></button>
                <button
                  className={`flex aspect-square w-[28px] flex-row items-center justify-center gap-[0] rounded-full bg-[#FF5C00]`}></button>
                <button
                  className={`flex aspect-square w-[28px] flex-row items-center justify-center gap-[0] rounded-full bg-[#FFF000]`}></button>
                <button
                  className={`flex aspect-square w-[28px] flex-row items-center justify-center gap-[0] rounded-full bg-[#06CE56]`}></button>
                <button
                  className={`flex aspect-square w-[28px] flex-row items-center justify-center gap-[0] rounded-full bg-[#3DB3FF]`}></button>
                <button
                  className={`flex aspect-square w-[28px] flex-row items-center justify-center gap-[0] rounded-full bg-[#2C3A94]`}></button>
                <button
                  className={`flex aspect-square w-[28px] flex-row items-center justify-center gap-[0] rounded-full bg-[#7706CE]`}></button>
                <button
                  className={`flex aspect-square w-[28px] flex-row items-center justify-center gap-[0] rounded-full bg-[#C1733B]`}></button>
              </div>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-[repeat(auto-fit,minmax(0,1fr))] items-center justify-center gap-[0]'>
          <button className='PopupButton1'>초기화</button>
          <button className='PopupButton2'>적용 (1,024개 상품)</button>
        </div>
      </div>
    </div>
  );
}

export default LayerFilter7;
