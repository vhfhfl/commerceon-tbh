import ItemFlag3 from '@/components/common/ItemFlag3';
import { useRef } from 'react';

function TableItem5(props) {
  const { className = '', idx = 0 } = props;
  const ref_this = useRef();
  return (
    <>
      <div ref={ref_this} className={`TableItem5 ${className} grid grid-flow-col grid-cols-[90px_1fr_auto] gap-[24px]`}>
        <div className={`relative h-[120px]`}>
          <img src={`https://picsum.photos/90/120.jpg?random=1`} alt={``} />
          <div className={`absolute top-[0] right-[0] z-10`}>
            <ItemFlag3>Set</ItemFlag3>
          </div>
        </div>
        <div>
          <div className={`text-[16px] font-[600] leading-[34px] text-[var(--color1)]`}>MIND BRIDGE</div>
          <div className={`text-[16px] font-[400] leading-[24px] text-[var(--color1)] line-clamp-2`}>
            [1&1 교차가능]그래픽티셔츠 2종 여름 라운드 반팔티셔츠 교차상품 / 최대 2줄 [1&1 교차가능]그래픽티셔츠 2종
            여름 라운드 반팔티셔츠 교차상품 / 최대 2줄
          </div>
          <div className={`mt-[4px] flex flex-row items-center gap-[15px]`}>
            <div className={`Montserrat text-[14px] font-[400] leading-[28px] text-[var(--color5)]`}>
              옵션 : ICE BLUE / 095
            </div>
          </div>
        </div>
        <div>
          <button>
            <img src='/icons/zco_56.svg' alt='상품 삭제' />
          </button>
        </div>
      </div>
    </>
  );
}

export default TableItem5;
