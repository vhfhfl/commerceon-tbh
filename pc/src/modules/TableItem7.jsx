import ItemFlag3 from '@/components/common/ItemFlag3';
import { useRef } from 'react';

function TableItem7(props) {
  const { className = '', idx = 0 } = props;
  const ref_this = useRef();
  return (
    <>
      <div ref={ref_this} className={`TableItem7 ${className} grid grid-flow-col grid-cols-[90px_1fr] gap-[24px]`}>
        <div className={`relative`}>
          <img src={`https://picsum.photos/90/120.jpg?random=${idx}`} alt={``} />
          <div className={`absolute top-[0] right-[0] z-10`}>
            <ItemFlag3>Set</ItemFlag3>
          </div>
        </div>
        <div>
          <div className={`Montserrat text-[16px] font-[600] leading-[34px] text-[var(--color1)]`}>MIND BRIDGE</div>
          <div className={`text-[16px] font-[400] leading-[24px] text-[var(--color1)] line-clamp-2`}>
            [1&1 교차가능]그래픽티셔츠 2종 여름 라운드 반팔티셔츠 교차상품 그래픽티셔츠 2종 여름 라운드 반팔티셔츠
            교차상품 / 최대 2줄 [1&1 교차가능]그래픽티셔츠 2종 여름 라운드 반팔티셔츠 교차상품 그래픽티셔츠 2종 여름
            라운드 반팔티셔츠 교차상품 / 최대 2줄
          </div>
        </div>
      </div>
    </>
  );
}

export default TableItem7;
