import CheckBox from "@/components/form/CheckBox";
import Image from 'next/image';
import {Fragment} from 'react';

function LayerFilter4() {
  return (
    <div className={`LayerFilter4 h-full w-full bg-white`}>
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
              가격
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
                        <div className={`${obj == '가격' && `font-[600]`}`}>{obj}</div>
                      </button>
                    </Fragment>
                  );
                })}
              </div>
            </div>
            <div className={`border-l-[1px] border-solid border-l-[var(--color6)] px-[20px] py-[25px]`}>
              <div className={`space-y-[20px]`}>
                <div>
                  <CheckBox>10만원 미만</CheckBox>
                </div>
                <div>
                  <CheckBox>10만원~20만원 미만</CheckBox>
                </div>
                <div>
                  <CheckBox>20만원~30만원 미만</CheckBox>
                </div>
                <div>
                  <CheckBox>30만원~40만원 미만</CheckBox>
                </div>
                <div>
                  <CheckBox>40만원~50만원 미만</CheckBox>
                </div>
                <div>
                  <CheckBox>50만원 이상</CheckBox>
                </div>
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

export default LayerFilter4;
