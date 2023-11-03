import ItemFlag2 from '@/components/common/ItemFlag2';
import Image from 'next/image';
import { Fragment } from 'react';

function ProductItem2(props) {
  const { className = '', idx } = props;

  return (
    <>
      <div className={`ProductItem2 ${className} w-full`}>
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
          <div className={`absolute top-[0] right-[0] z-10`}>
            <ItemFlag2 theme={idx}>Big</ItemFlag2>
          </div>
        </div>
        <div className={`px-[10px] pt-[15px] pb-[8px]`}>
          <div className={`mr-[11px] grid grid-cols-[repeat(2,auto)] items-center justify-between`}>
            <div className={`Montserrat text-[12px] font-[600] text-[var(--color1)]`}>BRAND NAME</div>
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
              까닭입니다. 경, 자랑처럼 추억과 강아지, 내일 하나 하나에 밤이 봅니다. 슬퍼하는 시와 별 멀듯이, 걱정도 오면
              파란 별 다하지 있습니다. 까닭이요, 그러나 것은 파란 소녀들의 둘 까닭입니다. 위에도 없이 하나에 까닭입니다.
              하나에 딴은 이웃 듯합니다. 것은 계집애들의 무엇인지 이네들은 멀리 잔디가 나는 무덤 까닭입니다. 하나 릴케
              다 새겨지는 어머니, 말 내린 별에도 쉬이 있습니다.
            </div>
          </div>
          <div className={`mt-[16px] space-y-[8px]`}>
            <div className={`flex flex-row items-center gap-0`}>
              <div className={`flex flex-row flex-wrap items-center gap-[5px]`}>
                {[
                  '#6C6960',
                  '#E4A010',
                  '#CB3234',
                  '#008F39',
                  '#C93C20',
                  '#A18594',
                  '#9C9C9C',
                  '#025669',
                  '#2C5545',
                  '#2F353B',
                  '#6C6960',
                  '#E4A010',
                ].map((obj, idx) => {
                  return (
                    <Fragment key={idx}>
                      <div className={`aspect-square w-[16px] rounded-full`} style={{ backgroundColor: obj }}></div>
                    </Fragment>
                  );
                })}
              </div>
            </div>
            <div className={`flex flex-row items-center gap-0`}>
              <div className={`flex flex-row flex-wrap items-center gap-[5px]`}>
                {[
                  '#2F353B',
                  '#6C6960',
                  '#E4A010',
                  '#CB3234',
                  '#008F39',
                  '#C93C20',
                  '#A18594',
                  '#9C9C9C',
                  '#025669',
                  '#2C5545',
                  '#2F353B',
                ].map((obj, idx) => {
                  return (
                    <Fragment key={idx}>
                      <div className={`aspect-square w-[16px] rounded-full`} style={{ backgroundColor: obj }}></div>
                    </Fragment>
                  );
                })}
              </div>
              <button className={`Montserrat ml-[5px] flex w-[16px] flex-row items-center justify-center text-[0px]`}>
                <Image
                  className={`Icon w-[11px]`}
                  src={`/icons/icon_32.svg`}
                  width={11}
                  height={11}
                  priority
                  alt='더보기 아이콘'
                />
              </button>
            </div>
          </div>
          <div className={`mt-[7px] text-[10px] font-[400] text-[var(--color5)]`}>SIZE : 95~115</div>
          <div className={`mt-[14px] text-[0px]`}>
            <div className={`PriceBox`}>
              <div className={`text-[var(--color1)]`}>64,000</div>
              <div className={`Sale text-[var(--color1)]`}>129,000</div>
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
    </>
  );
}

export default ProductItem2;
