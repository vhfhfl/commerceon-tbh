import Image from 'next/image';
import {Fragment, useRef} from 'react';

function BestRankingList(props) {
  const { className = '' } = props;
  const ref_this = useRef();
  return (
    <>
      <div ref={ref_this} {...props} className={`BestRankingList ${className}`}>
        <div className={`relative w-full pr-[60px]`}>
          <div className={`grid grid-cols-[auto_1fr] items-stretch justify-center`}>
            <div>
              <Image
                className={`aspect-[1156/800] object-cover h-[800px]`}
                src={`https://picsum.photos/1156/800.jpg`}
                width={1156}
                height={800}
                alt=''
              />
            </div>
            <div className={`h-fulll bg-white`}>
              <div className={`text-right text-[14px] font-[400] text-[var(--color5)]`}>10.24 업데이트</div>
            </div>
          </div>
          <div className={`absolute top-0 right-0 z-10 h-full w-full pt-[80px] pr-[60px]`}>
            <div className={`flex flex-row items-center justify-end gap-[50px]`}>
              {Array.from(Array(3)).map((obj, idx) => {
                const title_color = idx < 2 ? 'text-white' : 'text-[var(--color1)]';

                return (
                  <Fragment key={idx}>
                    <div className={`w-[440px]`}>
                      <div className={`Montserrat text-[30px] font-[700] tracking-[2px] ${title_color}`}>
                        {idx + 1}st
                      </div>
                      <a
                        href={`https://www.google.com`}
                        target={`_blank`}
                        className={`mt-[10px] block shadow-[0_3px_6px_rgba(0_0_0/0.08)]`}>
                        <div className={`overflow-hidden`}>
                          <Image
                            className={`aspect-[440/480] w-full object-cover duration-300 ease-out will-change-auto hover:scale-150`}
                            src={`https://picsum.photos/440/480.jpg?random=${idx}`}
                            width={440}
                            height={480}
                            priority
                            alt=''
                          />
                        </div>
                        <div className={`flex flex-col items-start bg-white px-[20px] pt-[20px] pb-[16px]`}>
                          <div className={`Montserrat text-[14px] font-[500] text-[var(--color1)]`}>JUCY JUDY</div>
                          <div className={`mt-[12px] text-[22px] font-[500] text-[var(--color1)]`}>
                            스트라이프 빅카라 오버핏 반팔티
                          </div>
                          <div className={`mt-[6px] flex w-full flex-row items-center justify-end`}>
                            <button>
                              <Image
                                className={`Icon`}
                                src={`/icons/icon_21.svg`}
                                width={41}
                                height={40}
                                priority
                                alt='더보기'
                              />
                            </button>
                          </div>
                        </div>
                      </a>
                    </div>
                  </Fragment>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BestRankingList;
