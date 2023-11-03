import {useRef} from 'react';

function PriceBox1(props) {
  const { className = '' } = props;
  const ref_this = useRef();
  return (
    <>
      <div ref={ref_this} className={`PriceBox1 ${className} bg-[var(--color7)] py-[44px]`}>
        <div className={`flex flex-row items-center justify-center gap-[30px]`}>
          <div>
            <div className={`text-[16px] font-[400] leading-[26px] text-[var(--color1)]`}>총 2개의 상품금액</div>
            <div className={`Montserrat mt-[5px] text-[20px] font-[700] leading-[26px] text-[var(--color1)]`}>
              115,600원
            </div>
          </div>
          <div>
            <div
              className={`flex aspect-square w-[32px] flex-row items-center justify-center gap-[0] rounded-full bg-[var(--color6)]`}>
              <img src={`/icons/zco_57_2.svg`} alt={``} />
            </div>
          </div>
          <div>
            <div className={`text-[16px] font-[400] leading-[26px] text-[var(--color1)]`}>상품 할인</div>
            <div className={`Montserrat mt-[5px] text-[20px] font-[700] leading-[26px] text-[var(--color1)]`}>
              57,800원
            </div>
          </div>
          <div>
            <div
              className={`flex aspect-square w-[32px] flex-row items-center justify-center gap-[0] rounded-full bg-[var(--color6)]`}>
              <img src={`/icons/zco_57_1.svg`} alt={``} />
            </div>
          </div>
          <div>
            <div className={`text-[16px] font-[400] leading-[26px] text-[var(--color1)]`}>배송비</div>
            <div className={`Montserrat mt-[5px] text-[20px] font-[700] leading-[26px] text-[var(--color1)]`}>0원</div>
          </div>
          <div>
            <div
              className={`flex aspect-square w-[32px] flex-row items-center justify-center gap-[0] rounded-full bg-[var(--color1)]`}>
              <img src={`/icons/zco_57_3.svg`} alt={``} />
            </div>
          </div>
          <div>
            <div className={`text-[16px] font-[400] leading-[26px] text-[var(--color1)]`}>결제 예정금액</div>
            <div className={`mt-[5px] flex flex-row items-center justify-center`}>
              <div className={`Montserrat text-[20px] font-[700] leading-[26px] text-[var(--color1)]`}>57,800원</div>
              <div className={`ml-[20px] text-[16px] font-[400] leading-[26px] text-[var(--color1)]`}>
                (적립예정 마일리지 580원)
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PriceBox1;
