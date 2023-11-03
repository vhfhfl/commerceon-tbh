import {Fragment} from 'react';

function FilterBox1(props) {
  const { className = '' } = props;
  return (
    <>
      <div
        className={`FilterBox1 ${className} border-t-[2px] border-b-[1px] border-t-[var(--color1)] border-b-[var(--color6)] py-[30px]`}>
        <div className={`grid grid-cols-[repeat(auto-fit,minmax(0,1fr))] items-center justify-center gap-[28px]`}>
          {['회원가입/정보', '주문/결제/배송', '교환/반품/환불', '마일리지', '기타'].map((obj, idx) => {
            return (
              <Fragment key={idx}>
                <button
                  className={`FilterButton1 ${
                    idx == 1 && `On`
                  } rounded-[20px] bg-[var(--color7)] pt-[28px] pb-[31px] [&.On]:bg-[var(--color1)]`}>
                  <div className={``}>
                    <img
                      className={`mx-auto [.FilterButton1.On_&]:hidden`}
                      src={`/icons/zco_69_${idx + 1}.svg`}
                      alt={``}
                    />
                    <img
                      className={`mx-auto hidden [.FilterButton1.On_&]:block`}
                      src={`/icons/zco_69_${idx + 1}_on.svg`}
                      alt={``}
                    />
                  </div>
                  <div
                    className={`mt-[19px] text-[18px] font-[600] text-[var(--color1)] [.FilterButton1.On_&]:text-[white]`}>
                    {obj}
                  </div>
                </button>
              </Fragment>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default FilterBox1;
