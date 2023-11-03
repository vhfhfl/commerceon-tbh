import { Fragment } from 'react';

function FilterBox1(props) {
  const { className = '' } = props;
  return (
    <>
      <div className={`FilterBox1 ${className} border-t-[2px] border-t-[var(--color1)] pt-[14px]`}>
        <div className={`space-y-[4px]`}>
          {['회원가입/정보', '주문/결제/배송', '교환/반품/환불', '마일리지', '기타'].map((obj, idx) => {
            return (
              <Fragment key={idx}>
                <button
                  className={`FilterButton1 CenterBetween w-full ${
                    idx == 1 && `On`
                  } bg-[var(--color7)] py-[3px] pl-[15px] [&.On]:bg-[var(--color1)]`}>
                  <div>
                    <article className={`CenterLeft`}>
                      <img
                        className={`mx-auto [.FilterButton1.On_&]:hidden`}
                        src={`/icons/icon_60_${idx + 1}.svg`}
                        alt={``}
                      />
                      <img
                        className={`mx-auto hidden [.FilterButton1.On_&]:block`}
                        src={`/icons/icon_60_${idx + 1}_on.svg`}
                        alt={``}
                      />
                      <div
                        className={`ml-[10px] text-[14px] font-[600] text-[var(--color1)] [.FilterButton1.On_&]:text-white`}>
                        {obj}
                      </div>
                    </article>
                  </div>
                  <div>
                    <img className={`mx-auto [.FilterButton1.On_&]:hidden`} src={`/icons/icon_61.svg`} alt={``} />
                    <img
                      className={`mx-auto hidden [.FilterButton1.On_&]:block`}
                      src={`/icons/icon_61_on.svg`}
                      alt={``}
                    />
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
