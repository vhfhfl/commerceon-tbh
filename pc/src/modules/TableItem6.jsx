import ItemFlag3 from '@/components/common/ItemFlag3';
import { useRef } from 'react';

function TableItem6(props) {
  const { className = '', idx = 0 } = props;
  const ref_this = useRef();
  return (
    <>
      <div ref={ref_this} className={`TableItem6 ${className} grid grid-flow-col grid-cols-[90px_1fr] gap-[24px]`}>
        <div className={`relative`}>
          <img src={`https://picsum.photos/90/120.jpg?random=${idx}`} alt={``} />
          <div className={`absolute top-[0] right-[0] z-10`}>
            <ItemFlag3>Set</ItemFlag3>
          </div>
        </div>
        <div>
          <div className={`Montserrat text-[16px] font-[600] leading-[34px] text-[var(--color1)]`}>MIND BRIDGE</div>
          <div className={`text-[16px] font-[400] leading-[24px] text-[var(--color1)] line-clamp-2`}>
            남성 캐주얼 벨트
          </div>
          <div className={`mt-[10px] text-[14px] font-[400] text-[var(--color5)]`}>
            옵션 : OL / 100 / 1개
          </div>
          <div className={`Montserrat mt-[10px] text-[14px] font-[600] text-[var(--color1)]`}>10,000원</div>
        </div>
      </div>
    </>
  );
}

export default TableItem6;
