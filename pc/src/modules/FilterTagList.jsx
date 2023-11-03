import Image from 'next/image';
import {Fragment, useRef} from 'react';

function FilterTagList(props) {
  const { className = '' } = props;

  const ref_tag_list = useRef();

  const tag_hei = '34px';
  const tag_gap = '10px';

  return (
    <>
      <div className={`FilterTagList ${className} `}>
        <div
          ref={ref_tag_list}
          className={`overflow-hidden [&.On]:!h-auto`}
          style={{ height: `calc(calc(34px + 10px) * 3)` }}>
          <button
            className={`mr-[10px] mb-[10px] inline-flex h-[34px] flex-row items-center justify-center gap-[0] align-top`}>
            <div className={`pl-[10px] text-[12px] font-[400] text-[var(--color1)]`}>초기화</div>
            <div className={`ml-[4px] flex flex-row items-center justify-center`}>
              <Image src={`/icons/zco_33.svg`} width={18} height={16} alt='' />
            </div>
          </button>
          {Array.from(Array(100)).map((obj, idx) => {
            return (
              <Fragment key={idx}>
                <div
                  className={`mr-[10px] mb-[10px] inline-flex h-[34px] flex-row items-center justify-center gap-[0] border-[1px] border-solid border-[var(--color6)] align-top`}>
                  <div className={`pl-[10px] text-[12px] font-[400] text-[var(--color1)]`}>니트/스웨터 ({idx + 1})</div>
                  <button className={`flex h-full w-[34px] flex-row items-center justify-center`}>
                    <Image src={`/icons/zco_34.svg`} width={14} height={13} alt='' />
                  </button>
                </div>
              </Fragment>
            );
          })}
        </div>
        <div className={`border-t-[1px] border-solid border-t-[var(--color6)]`}>
          <button
            className={`mx-auto mt-[-1px] block`}
            onClick={(evt) => {
              const el_list = ref_tag_list.current;
              el_list.classList.toggle('On');
            }}>
            <Image src={`/icons/zco_37.svg`} width={73} height={24} alt='더보기' />
          </button>
        </div>
      </div>
    </>
  );
}

export default FilterTagList;
