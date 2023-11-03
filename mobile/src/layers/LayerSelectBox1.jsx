import {Layer} from '@/scripts/util';
import Image from 'next/image';
import {Fragment} from 'react';

function LayerSelectBox1() {
  return (
    <div className={`LayerSelectBox1 w-[360px] rounded-t-[10px] bg-white px-[18px] pt-[16px]`}>
      <div className={`relative`}>
        <div className={`flex flex-row items-center justify-end`}>
          <button
            >
            <Image src={`/icons/zco_6.svg`} width={18} height={17} alt='' />
          </button>
        </div>
        <div>
          <ul className={`divide-y-[1px] divide-solid divide-[var(--color6)]`}>
            {['판매인기순', '낮은 가격순', '높은 가격순', '신상품순'].map((obj, idx) => {
              return (
                <Fragment key={idx}>
                  <li>
                    <label className={`relative block flex h-[50px] flex-row items-center justify-start`}>
                      <input
                        className={`absolute top-[0] left-[0] z-10 h-full w-full appearance-none`}
                        type='radio'
                        name={`c4b0e708`}
                        defaultChecked={idx == 0}
                      />
                      <div className={`flex flex-row items-center justify-center [input:checked_~_&]:font-[700]`}>
                        {obj}
                      </div>
                      <Image
                        className={`ml-[9px] hidden [input:checked_~_&]:block`}
                        src={`/icons/zco_7.svg`}
                        width={12}
                        height={9}
                        alt=''
                      />
                    </label>
                  </li>
                </Fragment>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default LayerSelectBox1;
