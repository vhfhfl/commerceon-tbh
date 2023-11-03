import CheckBox from '@/components/form/CheckBox';
import {Layer} from '@/scripts/util';
import Image from 'next/image';
import {Fragment} from 'react';

function LayerFilter() {
  return (
    <div className={`LayerFilter h-full w-full bg-white`}>
      <div className={`flex h-full flex-col`}>
        <div className={`border-b-[1px] border-solid border-b-[var(--color6)] pt-[13px]`}>
          <div className={`relative h-[46px]`}>
            <div
              className={`flex h-full flex-row items-center justify-center gap-[0] text-center text-[16px] font-[500] leading-[20px] text-[var(--color1)]`}>
              필터
            </div>
            <div className={`absolute top-1/2 right-[4px] z-10 -translate-y-1/2`}>
              <button
                className={`flex aspect-square w-[40px] flex-row items-center justify-center gap-[0]`}
                >
                <Image src={`/icons/zco_28.svg`} width={40} height={40} alt='' />
              </button>
            </div>
          </div>
        </div>
        <div className={`min-h-0 flex-1 overflow-auto`}>
          <div className={`space-y-[22px] px-[20px] pt-[26px] pb-[32px]`}>
            {['브랜드', '카테고리', '사이즈', '가격', '상태', '프로모션', '컬러', '시즌','브랜드', '카테고리', '사이즈', '가격', '상태', '프로모션', '컬러', '시즌'].map((obj, idx) => {
              return (
                <Fragment key={idx}>
                  <button className={`flex h-[24px] w-full flex-row items-center justify-between`}>
                    <div>{obj}</div>
                    <div className={`flex aspect-square w-[24px] flex-row items-center justify-center`}>
                      <Image src={`/icons/zco_29.svg`} width={8} height={13} alt='' />
                    </div>
                  </button>
                </Fragment>
              );
            })}
          </div>
          <div className={`border-t-[1px] border-solid border-t-[var(--color6)] p-[17px_20px] pr-[0] text-[0px]`}>
            {Array.from(Array(3)).map((obj, idx) => {
              return (
                <Fragment key={idx}>
                  <CheckBox className={`mb-[7px] mr-[10px]`} size={'Sm'}>
                    마인드브릿지
                  </CheckBox>
                  <CheckBox className={`mb-[7px] mr-[10px]`} size={'Sm'}>
                    다운/패딩
                  </CheckBox>
                  <CheckBox className={`mb-[7px] mr-[10px]`} size={'Sm'}>
                    이너
                  </CheckBox>
                </Fragment>
              );
            })}
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

export default LayerFilter;
