import CheckBox from "@/components/form/CheckBox";
import Image from 'next/image';
import {Fragment} from 'react';

function LayerFilter2() {
  return (
    <div className={`LayerFilter2 h-full w-full bg-white`}>
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
              카테고리
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
                        <div className={`${obj == '카테고리' && `font-[600]`}`}>{obj}</div>
                      </button>
                    </Fragment>
                  );
                })}
              </div>
            </div>
            <div className={`border-l-[1px] border-solid border-l-[var(--color6)]`}>
              <ul className={`px-[20px] py-[25px]`}>
                <li>
                  <button className={`On flex h-[20px] w-full flex-row items-center justify-between gap-[0]`}>
                    <div className={`text-[16px] font-[400] text-[var(--color1)]`}>남성 (1000)</div>
                    <Image
                      className={`[button.On_>_&]:rotate-180`}
                      src={`/icons/zco_31.svg`}
                      width={10}
                      height={6}
                      alt=''
                    />
                  </button>
                  <ul className={`py-[20px] pl-[16px]`}>
                    <li>
                      <button className={`On flex w-full flex-row items-center justify-between gap-[0]`}>
                        <CheckBox size={'Sm'}>아우터</CheckBox>
                        <Image
                          className={`[button.On_>_&]:rotate-180`}
                          src={`/icons/zco_31.svg`}
                          width={10}
                          height={6}
                          alt=''
                        />
                      </button>
                      <ul className={`space-y-[9px] py-[9px] pl-[20px]`}>
                        <li>
                          <button className={`On flex w-full flex-row items-center justify-between gap-[0]`}>
                            <CheckBox size={'Sm'}>다운/패딩 (12)</CheckBox>
                          </button>
                        </li>
                        <li>
                          <button className={`On flex w-full flex-row items-center justify-between gap-[0]`}>
                            <CheckBox size={'Sm'}>코트 (182)</CheckBox>
                          </button>
                        </li>
                        <li>
                          <button className={`On flex w-full flex-row items-center justify-between gap-[0]`}>
                            <CheckBox size={'Sm'}>자켓 (11)</CheckBox>
                          </button>
                        </li>
                        <li>
                          <button className={`On flex w-full flex-row items-center justify-between gap-[0]`}>
                            <CheckBox size={'Sm'}>점퍼 (11)</CheckBox>
                          </button>
                        </li>
                        <li>
                          <button className={`On flex w-full flex-row items-center justify-between gap-[0]`}>
                            <CheckBox size={'Sm'}>가디건 (213)</CheckBox>
                          </button>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <button className={`On flex w-full flex-row items-center justify-between gap-[0]`}>
                        <CheckBox size={'Sm'}>아우터</CheckBox>
                        <Image
                          className={`[button.On_>_&]:rotate-180`}
                          src={`/icons/zco_31.svg`}
                          width={10}
                          height={6}
                          alt=''
                        />
                      </button>
                      <ul className={`space-y-[9px] py-[9px] pl-[40px]`}>
                        <li>
                          <button className={`On flex w-full flex-row items-center justify-between gap-[0]`}>
                            <CheckBox size={'Sm'}>다운/패딩 (12)</CheckBox>
                          </button>
                        </li>
                        <li>
                          <button className={`On flex w-full flex-row items-center justify-between gap-[0]`}>
                            <CheckBox size={'Sm'}>코트 (182)</CheckBox>
                          </button>
                        </li>
                        <li>
                          <button className={`On flex w-full flex-row items-center justify-between gap-[0]`}>
                            <CheckBox size={'Sm'}>자켓 (11)</CheckBox>
                          </button>
                        </li>
                        <li>
                          <button className={`On flex w-full flex-row items-center justify-between gap-[0]`}>
                            <CheckBox size={'Sm'}>점퍼 (11)</CheckBox>
                          </button>
                        </li>
                        <li>
                          <button className={`On flex w-full flex-row items-center justify-between gap-[0]`}>
                            <CheckBox size={'Sm'}>가디건 (213)</CheckBox>
                          </button>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <button className={`flex h-[20px] w-full flex-row items-center justify-between gap-[0]`}>
                    <div className={`text-[18px] font-[400] text-[var(--color1)]`}>여성 (1000)</div>
                    <Image
                      className={`[button.On_>_&]:rotate-180`}
                      src={`/icons/zco_31.svg`}
                      width={10}
                      height={6}
                      alt=''
                    />
                  </button>
                </li>
              </ul>
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

export default LayerFilter2;
