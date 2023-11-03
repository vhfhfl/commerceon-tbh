import Image from 'next/image';
import {Fragment} from 'react';

function BestRankingList(props) {
  const { className = '' } = props;

  return (
    <>
      <div {...props} className={`BestRankingList ${className}`}>
        <div
          className={`bg-[url('https://picsum.photos/768/500.jpg?random=9e96896c-f')] bg-cover bg-center bg-no-repeat pt-[50px] pb-[50px]`}>
          <div className={`absolute top-[0] left-[0] z-0 h-full w-full bg-[rgba(0,0,0,.7)] text-[0px]`}>Dim</div>
          <div data-seq={`20230519094127272`} className={`mt-[6px] px-[20px]`}>
            <div className={`w-full overflow-auto text-right`}>
              <ul className={`inline-block space-x-[8px] whitespace-nowrap`}>
                {Array.from(Array(3)).map((obj, idx) => {
                  return (
                    <Fragment key={idx}>
                      <li className={`relative inline-block`}>
                        <a href='https://www.google.com' target={`_blank`}>
                          <div className={`Montserrat text-left text-[20px] font-[700] tracking-[2px] text-white`}>
                            {idx + 1}st
                          </div>
                          <div className={`relative mt-[6px]`}>
                            <Image
                              className={`aspect-[240/262] w-full object-contain`}
                              src={`https://picsum.photos/240/262.jpg?random=${idx}`}
                              width={240}
                              height={262}
                              alt=''
                            />
                          </div>
                          <div className={`bg-white px-[12px] pt-[10px] pb-[14px]`}>
                            <div className={`flex flex-col items-start gap-[8px]`}>
                              <div className={`Montserrat text-[10px] font-[400] text-[var(--color1)]`}>JUCY JUDY</div>
                              <div className={`text-[14px] font-[500] text-[var(--color1)]`}>
                                스트라이프 빅카라 오버핏 반팔티
                              </div>
                            </div>
                            <div className={`mt-[3px] flex flex-row items-center justify-end`}>
                              <button>
                                <Image
                                  className={`Icon`}
                                  src={`/icons/icon_18.svg`}
                                  width={21}
                                  height={8}
                                  priority
                                  alt='VIEW ALL'
                                />
                              </button>
                            </div>
                          </div>
                        </a>
                      </li>
                    </Fragment>
                  );
                })}
              </ul>
            </div>
            <div className={`relative z-10 mt-[20px] text-[12px] font-[400] text-[var(--color5)]`}>10.24 업데이트</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BestRankingList;
