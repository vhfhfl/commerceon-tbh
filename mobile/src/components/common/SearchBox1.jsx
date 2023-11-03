import Image from 'next/image';
import {Children, useRef} from 'react';

function SearchBox1(props) {
  const { children, className = '' } = props;
  const children_cnt = Children.count(children);

  const ref_this = useRef();
  const ref_search_input = useRef();
  const ref_search_btn = useRef();
  const ref_reset_btn = useRef();

  return (
    <>
      <div
        ref={ref_this}
        className={`SearchBox1 ${className} grid h-[44px] grid-cols-[1fr_auto] items-center justify-center gap-[0] rounded-[22px] bg-[var(--color7)]`}>
        <div className={`h-full`}>
          <input
            ref={ref_search_input}
            className={`h-full w-full bg-transparent px-[20px] text-[16px] font-[600] text-[var(--color1)] outline-0`}
            type={`text`}
            placeholder={`검색어를 입력하세요`}
            onKeyUp={(evt) => {
              const target = evt.target;
              const len = parseInt(target.value.length);
              const el_reset_btn = ref_reset_btn.current;
              if (len > 0) {
                el_reset_btn.classList.add('On');
              } else {
                el_reset_btn.classList.remove('On');
              }
            }}
          />
        </div>
        <div className={`flex flex-row items-center justify-center pr-[10px]`}>
          <button
            ref={ref_reset_btn}
            className={`hidden h-[30px] w-[30px] [&.On]:block`}
            onClick={(evt) => {
              const target = evt.target.closest('button');
              target.classList.remove('On');

              const input = ref_search_input.current;
              input.value = '';
            }}>
            <Image src={`/icons/zco_24.svg`} width={24} height={24} alt='' />
          </button>
          <button
            ref={ref_search_btn}
            className={`block h-[30px] w-[30px]`}
            onClick={(evt) => {
              // const target = evt.target.closest('button');
              // console.log(target);
              console.log('Search Click');
            }}>
            <Image src={`/icons/zco_23.svg`} width={30} height={30} alt='' />
          </button>
        </div>
      </div>
    </>
  );
}

export default SearchBox1;
