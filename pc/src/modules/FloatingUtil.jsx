import Image from 'next/image';
import {Fragment, useRef} from 'react';

function FloatingUtil(props) {
  const { className = '' } = props;
  const ref_this = useRef();
  return (
    <>
      <div
        ref={ref_this}
        {...props}
        className={`pointer-events-none FloatingUtil ${className} fixed bottom-[60px] right-[60px] z-[100] translate-x-[calc(300px+66px)] duration-300 ease-out will-change-auto [&.On]:translate-x-[0px]`}>
        <div className={`grid grid-cols-[66px_1fr] items-end gap-[20px]`}>
          <div className={`pointer-events-auto`}>
            {/*LEFT*/}
            <div>
              <button className={`mx-auto flex w-[62px] flex-row items-center justify-center`}>
                <Image src={`/icons/zco_2_2.svg`} width={62} height={62} priority alt='' />
              </button>
              <div
                className={`mt-[20px] overflow-hidden rounded-[70px] border-[1px] border-solid border-[var(--color6)] p-[13px] text-[0px]`}
                style={{ backgroundColor: 'rgba(236, 236, 236, 0.26)', backdropFilter: 'blur(10px)' }}>
                <button
                  onClick={(evt) => {
                    const el_this = ref_this.current;
                    el_this.classList.toggle('On');
                  }}>
                  <Image src={`/icons/zco_20.svg`} width={38} height={38} alt='' />
                </button>
                <button
                  className={`mt-[8px] h-[38px] overflow-hidden duration-300 ease-out will-change-auto [[data-scroll-top="0"]_&]:mt-0 [[data-scroll-top="0"]_&]:h-0`}
                  onClick={(evt) => {
                    window.scrollTo({
                      top: 0,
                      behavior: 'smooth',
                    });
                  }}>
                  <Image src={`/icons/zco_21.svg`} width={38} height={38} alt='' />
                </button>
              </div>
            </div>
          </div>
          <div className={`pointer-events-auto`}>
            {/*RIGHT*/}
            <div
              className={`mx-auto w-[300px] overflow-hidden rounded-[20px] border-2 border-[var(--color6)] bg-white shadow-[0_3px_6px_rgba(0_0_0/0.08)]`}>
              <div className={`px-[24px] py-[30px]`}>
                <div className={``}>
                  <div className='flex flex-row items-start justify-between'>
                    <div>
                      <div className={`text-[16px] font-[600] text-[var(--color1)]`}>최근 본 상품</div>
                      <div className={`mt-[7px] text-[12px] font-[300] text-[var(--color5)]`}>최근 20개까지 노출</div>
                    </div>
                    <button
                      className={`w-[24px]`}
                      onClick={(evt) => {
                        const el_this = ref_this.current;
                        el_this.classList.remove('On');
                      }}>
                      <Image
                        className={`Icon`}
                        src={`/icons/icon_5_1.svg`}
                        width={24}
                        height={24}
                        priority
                        alt='닫기 아이콘'
                      />
                    </button>
                  </div>
                  <div className={`mt-[40px] h-[408px] overflow-auto overscroll-contain`}>
                    <ul className={`space-y-[12px]`}>
                      {Array.from(Array(20)).map((obj, idx) => {
                        return (
                          <Fragment key={idx}>
                            <li className='grid grid-cols-[auto_1fr] items-start justify-between gap-[10px]'>
                              <div>
                                <Image
                                  className={`aspect-[74/72] w-[74px] object-cover`}
                                  src={`https://picsum.photos/74/72.jpg?random=${idx}`}
                                  width={74}
                                  height={72}
                                  priority
                                  alt=''
                                />
                              </div>
                              <div>
                                <div className='grid grid-cols-[1fr_auto] items-start justify-between gap-[5px]'>
                                  <div className={`overflow-hidden`}>
                                    <div className={`Montserrat text-[12px] font-[600] text-[var(--color1)]`}>
                                      BRAND NAME ({idx + 1})
                                    </div>
                                    <div
                                      className={`mt-[6px] w-full truncate text-[12px] font-[400] text-[var(--color1)]`}>
                                      별빛이 이름자 추억과 오는 쉬이 새겨지는 멀리 봅니다. 그리고 아름다운 별 어머님,
                                      아직 소녀들의 나의 가을 까닭입니다. 파란 속의 하나에 나의 아스라히 너무나 청춘이
                                      이름자를 다 있습니다. 노루, 무덤 이름을 까닭입니다. 경, 자랑처럼 추억과 강아지,
                                      내일 하나 하나에 밤이 봅니다. 슬퍼하는 시와 별 멀듯이, 걱정도 오면 파란 별 다하지
                                      있습니다. 까닭이요, 그러나 것은 파란 소녀들의 둘 까닭입니다. 위에도 없이 하나에
                                      까닭입니다. 하나에 딴은 이웃 듯합니다. 것은 계집애들의 무엇인지 이네들은 멀리
                                      잔디가 나는 무덤 까닭입니다. 하나 릴케 다 새겨지는 어머니, 말 내린 별에도 쉬이
                                      있습니다.
                                    </div>
                                    <div className={`mt-[14px]`}>
                                      <div
                                        className={`Montserrat flex flex-row flex-wrap items-center justify-start gap-[4px] text-[14px]`}>
                                        <span className={`font-[500] text-[var(--color1)]`}>64,000</span>
                                        <span className={`font-[300] text-[rgba(22_22_22/0.4)] line-through`}>
                                          129,000
                                        </span>
                                        <span className={`font-[500] text-[var(--color2)]`}>50%</span>
                                      </div>
                                    </div>
                                  </div>
                                  <button className={`w-[16px]`}>
                                    <Image
                                      className={`Icon`}
                                      src={`/icons/icon_6_1.svg`}
                                      width={16}
                                      height={16}
                                      priority
                                      alt='삭제 아이콘'
                                    />
                                  </button>
                                </div>
                              </div>
                            </li>
                          </Fragment>
                        );
                      })}
                    </ul>
                    <div
                      className={`flex h-[216px] flex-row items-center justify-center text-[14px] font-[400] text-[var(--color1)]`}>
                      최근 본 상품이 없습니다.
                    </div>
                  </div>
                  <div className={`mt-[40px] text-[0]`}>
                    <button className={`text-[12px] font-[400] text-[var(--color1)]`}>전체삭제</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FloatingUtil;
