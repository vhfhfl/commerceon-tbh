import Image from 'next/image';

function BestRankingItem1(props) {
  const { className = '', idx } = props;

  return (
    <>
      <div {...props} className={`BestRankingItem1 ${className}`}>
        <div className={`Montserrat text-left text-[20px] font-[700] tracking-[2px] text-white`}>{idx + 1}st</div>
        <div className={`mt-[6px]`}>
          <Image
            className={`aspect-[240/262] w-full object-contain`}
            src={`https://picsum.photos/240/262.jpg?random=${idx}`}
            width={240}
            height={262}
            alt=''
          />
          <div className={`bg-white px-[12px] pt-[10px] pb-[14px]`}>
            <div className={`flex flex-col items-start gap-[8px]`}>
              <div className={`Montserrat text-[10px] font-[400] text-[var(--color1)]`}>JUCY JUDY</div>
              <div className={`text-[14px] font-[500] text-[var(--color1)]`}>스트라이프 빅카라 오버핏 반팔티</div>
            </div>
            <div className={`mt-[3px] flex flex-row items-center justify-end`}>
              <button>
                <Image className={`Icon`} src={`/icons/icon_18.svg`} width={21} height={8} priority alt='VIEW ALL' />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BestRankingItem1;
