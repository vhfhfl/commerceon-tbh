import Image from 'next/image';
import {useRef} from 'react';

function NewInItem(props) {
  const { className = '', idx } = props;
  const ref_this = useRef();
  return (
    <>
      <div ref={ref_this} {...props} className={`NewInItem ${className}`}>
        <div
          className={`Thumb`}
          onTransitionEnd={(evt) => {
            // 트랜지션 끝나면 스와이퍼 컨테이너 높이 갱신
            // const target = evt.target;
            // const el_sw = ref_swiper.current;
            // const sw_hei = el_sw.clientHeight;
            // el_sw.style.minHeight = `${sw_hei}px`;
          }}>
          <Image
            className={`aspect-[560/816] h-full w-full object-cover`}
            src={`https://picsum.photos/560/816.jpg?random=${idx}`}
            width={560}
            height={816}
            alt=''
          />
        </div>
        <div className={`Info mt-[10px] text-center`}>
          <div className={`Montserrat text-[11px] font-[600] text-[black]`}>MIND BRIDGE</div>
          <div className={`mt-[8px] text-[12px] font-[400] text-[var(--color1)]`}>
            [1+1]이지케어 솔리드 드레스셔츠 레귤러
          </div>
          <div></div>
          <div className={`RR mt-[20px] text-[0px]`}>
            <div className={`PriceBox`}>
              <div className={`text-[var(--color1)]`}>64,000</div>
              <div className={`text-[var(--color2)]`}>50%</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewInItem;
