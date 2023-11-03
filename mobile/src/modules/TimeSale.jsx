import Image from 'next/image';
import {Fragment} from 'react';

function TimeSale(props) {
  const { className = '' } = props;

  return (
    <>
      <div {...props} className={`TimeSale ${className} md:grid md:grid-cols-2 md:gap-[20px]`}>
        {Array.from(Array(4)).map((obj, idx) => {
          return (
            <Fragment key={idx}>
              <div
                className={`grid grid-cols-[100px_1fr] items-center justify-center gap-[20px] border-b-[1px] border-b-[var(--color3)] py-[14px]`}>
                <div>
                  <div className={`relative w-full overflow-hidden rounded-full`}>
                    {idx == 0 && (
                      <div
                        className={`absolute top-[0] left-[0] z-10 flex h-full w-full flex-row items-center justify-center bg-[black]/60 text-[11px] font-[500] text-[white] `}>
                        12/25 OPEN
                      </div>
                    )}
                    <Image
                      className={`aspect-[100/100] h-full w-full object-cover`}
                      src={`https://picsum.photos/100/100.jpg?random=${idx}`}
                      width={100}
                      height={100}
                      alt=''
                    />
                  </div>
                </div>
                <div>
                  {idx == 0 ? (
                    <div className={`TimeBox`}>
                      <div className={`Num`}>-</div>
                      <div>:</div>
                      <div className={`Num`}>--</div>w
                      <div>:</div>
                      <div className={`Num`}>--</div>
                    </div>
                  ) : (
                    <div className={`TimeBox`}>
                      <div className={`Num`}>1</div>
                      <div>:</div>
                      <div className={`Num`}>23</div>
                      <div>:</div>
                      <div className={`Num`}>45</div>
                    </div>
                  )}
                  <div className={`Montserrat mt-[10px] text-[10px] font-[600] text-[black]`}>BRAND NAME</div>
                  <div className={`mt-[8px] text-[12px] font-[400] text-[var(--color1)]`}>
                    봄시즌 특가ㅣ 정해인 변형트러거
                  </div>
                  <div className={`mt-[16px] text-[0px]`}>
                    <div className={`PriceBox`}>
                      <div className={`text-[var(--color1)]`}>64,000</div>
                      <div className={`text-[var(--color2)]`}>50%</div>
                    </div>
                  </div>
                </div>
              </div>
            </Fragment>
          );
        })}
      </div>
    </>
  );
}

export default TimeSale;
