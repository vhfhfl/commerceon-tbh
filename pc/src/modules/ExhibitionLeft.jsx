import {Data} from '@/scripts/data_manager';
import Image from 'next/image';
import {Fragment, useState} from 'react';

function ExhibitionLeft(props) {
  const { className = '' } = props;

  const [select_idx, setSelectIdx] = useState(0);

  return (
    <>
      <div
        {...props}
        className={`ExhibitionLeft ${className} flex h-full items-center justify-end py-[20px] pr-[20px]`}>
        <div className={`flex w-[364px] flex-col items-center justify-between gap-[14px]`}>
          {Data.exhibitionList.map((obj, idx) => {
            const { name } = obj;

            return (
              <Fragment key={idx}>
                <button
                  className={`${
                    select_idx == idx && `On`
                  } flex w-full flex-row items-center justify-between gap-[4px] border border-solid border-transparent py-[10px] px-[20px] text-left [&.On]:border-[var(--color1)]`}
                  onClick={(evt) => {
                    // const target = evt.target.closest('button');
                    // console.log(target);
                    setSelectIdx(idx);
                  }}>
                  <div className={`grid grid-cols-[auto_1fr] items-center justify-between gap-[14px]`}>
                    <div className={`h-[46px] w-[46px] overflow-hidden rounded-full`}>
                      <Image
                        className={`aspect-square w-full object-cover`}
                        src={`https://picsum.photos/46/46.jpg?random=${idx}`}
                        width={46}
                        height={46}
                        priority
                        alt=''
                      />
                    </div>
                    <div>
                      <div className={`Montserrat text-[14px] font-[600] text-[var(--color1)]`}>{name}</div>
                      <div className={`mt-[10px]`}>
                        <span className={`Montserrat text-[14px] font-[500] text-[var(--color1)]`}>03</span>
                        <span className={`Montserrat ml-[4px] text-[14px] font-[300] text-[var(--color1)]`}>/ 10</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <Image
                      className={`Icon`}
                      src={`/icons/icon_1.svg`}
                      width={24}
                      height={24}
                      priority
                      alt='우측 화살표'
                    />
                  </div>
                </button>
              </Fragment>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ExhibitionLeft;
