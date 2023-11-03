import Image from 'next/image';
import {Fragment} from 'react';

function FilterTagList(props) {
  const { className = '' } = props;

  return (
    <>
      <div {...props} className={`FilterTagList ${className} bg-[var(--color7)] py-[11px]`}>
        <div className={`grid grid-cols-[auto_1fr] items-center justify-center gap-[0]`}>
          <div className={`pl-[10px]`}>
            {/*LEFT*/}
            <div className={`FilterTag1 !border-none !bg-transparent`}>
              <button className={`CloseBtn flex`}>
                <Image src={`/icons/zco_10.svg`} width={18} height={16} alt='' />
              </button>
            </div>
          </div>
          <div className={`min-w-[0] overflow-auto`}>
            {/*RIGHT*/}
            <div className={`inline-block space-x-[10px] whitespace-nowrap pr-[10px]`}>
              {Array.from(Array(10)).map((obj, idx) => {
                return (
                  <Fragment key={idx}>
                    <div className={`FilterTag1`}>
                      <div className={`Label`}>니트/스웨터 ({idx + 1})</div>
                      <button className={`CloseBtn flex flex-row items-center justify-center`}>
                        <Image className={`w-[8px]`} src={`/icons/zco_8.svg`} width={14} height={13} alt='' />
                      </button>
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

export default FilterTagList;
