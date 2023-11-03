import Image from 'next/image';
import Link from 'next/link';
import {useRef} from 'react';

function HeaderRightUtil(props) {
  const { className = '', theme = 'White' } = props;
  const ref_this = useRef();
  return (
    <>
      <div
        ref={ref_this}
        {...props}
        className={`HeaderRightUtil Theme${theme} ${className} flex flex-row items-center justify-center gap-[10px]`}>
        <button
          onClick={(evt) => {
            const el_search_wrap = document.querySelector(`#SearchWrap > .Shell`);
            el_search_wrap.classList.toggle('On');
          }}>
          {theme == 'White' ? (
            <Image src={`/icons/zco_10_1.svg`} width={30} height={30} alt='검색' />
          ) : (
            <Image src={`/icons/zco_10_1.svg`} width={30} height={30} alt='' />
          )}
        </button>
        <Link href={`#`} className={`max-3xl:hidden`}>
          {theme == 'White' ? (
            <Image src={`/icons/zco_10_2.svg`} width={30} height={30} alt='즐겨찾기' />
          ) : (
            <Image src={`/icons/zco_10_2.svg`} width={30} height={30} alt='' />
          )}
        </Link>
        <Link href={`#`}>
          {theme == 'White' ? (
            <Image src={`/icons/zco_10_3.svg`} width={30} height={30} alt='장바구니' />
          ) : (
            <Image src={`/icons/zco_10_3.svg`} width={30} height={30} alt='' />
          )}
        </Link>
        <Link href={`#`}>
          {theme == 'White' ? (
            <Image src={`/icons/zco_10_4.svg`} width={30} height={30} alt='마이페이지' />
          ) : (
            <Image src={`/icons/zco_10_4.svg`} width={30} height={30} alt='' />
          )}
        </Link>
      </div>
    </>
  );
}

export default HeaderRightUtil;
