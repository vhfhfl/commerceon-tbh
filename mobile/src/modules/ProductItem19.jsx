import ItemFlag1 from '@/components/common/ItemFlag1';

function ProductItem19(props) {
  const { className = '', idx } = props;

  return (
    <>
      <div className={`ProductItem19 ${className} border-[1px] border-solid border-[var(--color6)]`}>
        <div className={`p-[14px]`}>
          <article className={`grid grid-cols-[1fr_90px] gap-[10px]`}>
            <div className={`min-w-[0]`}>
              <div>
                <div className={`Montserrat text-[12px] font-[600] text-[var(--color1)]`}>MIND BRIDGE</div>
                <div className={`mt-[8px] truncate text-[12px] font-[400] text-[var(--color1)]`}>
                  [1&1 교차가능]그래픽티셔츠 2종 여름 라운드 반팔티셔츠 교차상품
                </div>
                <div className={`Montserrat mt-[10px] text-[12px] font-[400] leading-[15px] text-[var(--color5)]`}>
                  옵션 : ICE BLUE / 095
                  <span className={`ml-[4px] text-[var(--color2)]`}>외 9개</span>
                </div>
              </div>
              <div className={`mt-[28px]`}>
                <div className={`text-[12px] font-[600] text-[var(--color2)]`}>배송중</div>
                <div className={`mt-[4px] text-[12px] font-[400] text-[var(--color5)]`}>
                  <span>2023/05/18</span>
                  <span className={`ml-[9px]`}>2305181545000344</span>
                </div>
              </div>
            </div>
            <div className={`relative h-[120px]`}>
              <img src={`https://picsum.photos/90/120.jpg?random=${idx}`} alt={``} />
              <div className={`absolute top-[0] right-[0] z-10`}>
                <ItemFlag1 theme={idx}>1+1</ItemFlag1>
              </div>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}

export default ProductItem19;
