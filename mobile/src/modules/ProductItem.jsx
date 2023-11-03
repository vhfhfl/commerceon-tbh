import ItemFlag1 from '@/components/common/ItemFlag1';
import Image from 'next/image';

function ProductItem(props) {
  const { className = '', idx } = props;

  return (
    <>
      <div className={`ProductItem ${className}`}>
        <div className={`w-full`}>
          <div className={`relative w-full`}>
            <div className={`aspect-[178/262] w-full`}>
              <Image
                className={`h-full w-full object-cover`}
                src={`https://picsum.photos/750/750.jpg?random=${idx}`}
                width={750}
                height={750}
                priority
                alt='썸네일'
              />
            </div>
            <button
              className={`RR absolute top-[0px] left-[0px] z-10 flex h-[26px] w-[26px] flex-row items-start justify-start`}
              onClick={(evt) => {
                evt.preventDefault();
                const target = evt.target.closest('div');
                console.log(target);
              }}>
              <Image
                className={`Icon block aspect-square w-[22px]`}
                src={`/icons/icon_15_on.svg`}
                width={22}
                height={22}
                priority
                alt='하트'
              />
            </button>
            <div className={`absolute top-[0] right-[0] z-10`}>
              <ItemFlag1 theme={idx}>Big</ItemFlag1>
            </div>
          </div>
          <div className={`mt-[10px] ml-[11px]`}>
            <div className={`mr-[11px] grid grid-cols-[repeat(2,auto)] items-center justify-between`}>
              <div className={`Montserrat text-[12px] font-[600] text-[var(--color1)]`}>BRAND NAME ({idx + 1})</div>
              <div>
                <div className={`flex flex-row items-center justify-center`}>
                  <div className={`Montserrat text-[10px] font-[400] text-[var(--color1)]`}>리뷰</div>
                  <div className={`Montserrat ml-[2px] text-[10px] font-[500] text-[var(--color5)]`}>432</div>
                </div>
              </div>
            </div>
            <div className={`mt-[8px]`}>
              <div className={`truncate text-[12px] font-[400] text-[var(--color1)]`}>
                별빛이 이름자 추억과 오는 쉬이 새겨지는 멀리 봅니다. 그리고 아름다운 별 어머님, 아직 소녀들의 나의 가을
                까닭입니다. 파란 속의 하나에 나의 아스라히 너무나 청춘이 이름자를 다 있습니다. 노루, 무덤 이름을
                까닭입니다. 경, 자랑처럼 추억과 강아지, 내일 하나 하나에 밤이 봅니다. 슬퍼하는 시와 별 멀듯이, 걱정도
                오면 파란 별 다하지 있습니다. 까닭이요, 그러나 것은 파란 소녀들의 둘 까닭입니다. 위에도 없이 하나에
                까닭입니다. 하나에 딴은 이웃 듯합니다. 것은 계집애들의 무엇인지 이네들은 멀리 잔디가 나는 무덤
                까닭입니다. 하나 릴케 다 새겨지는 어머니, 말 내린 별에도 쉬이 있습니다.
              </div>
            </div>
            <div className={`mt-[20px] text-[0px]`}>
              <div className={`PriceBox`}>
                <div className={`text-[var(--color1)]`}>64,000</div>
                <div className={`text-[var(--color2)]`}>50%</div>
              </div>
            </div>
            <div className={`FlagBltBox mt-[13px]`}>
              <div className={`FlagBlt Type2`}>주문폭주</div>
              <div className={`FlagBlt`}>뉴시즌</div>
            </div>
            <div className={`mt-[8px] border-t-[1px] border-t-[var(--color3)] pt-[8px]`}>
              <div className={`space-y-[4px] text-[11px] font-[400] text-[var(--color1)]`}>
                <div className={`text-[var(--color2)]`}>&#91;12/20까지 기간한정특가&#93;</div>
                <div>2장 구매시 추가할인</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductItem;
