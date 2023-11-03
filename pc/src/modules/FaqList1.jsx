import { Fragment } from 'react';

function FaqList1(props) {
  const { className = '' } = props;
  return (
    <>
      <div className={`FaqList1 ${className} border-t-[3px] border-t-[var(--color1)]`}>
        {Array.from(Array(10)).map((obj, idx) => {
          return (
            <Fragment key={idx}>
              <button
                className={`grid w-full grid-cols-[140px_140px_1fr] items-start gap-[0] border-b-[1px] border-solid border-b-[var(--color6)] py-[23px] text-left`}>
                <div className={`Montserrat text-center font-[700]`}>
                  <span className={`text-[var(--color2)]`}>Q</span>.{idx + 1}
                </div>
                <div className={`font-[600]`}>질문 카테고리</div>
                <div>
                  <div className={`Q`}>
                    구매하려는 제품의 색상과 사이즈 <strong className={`font-[700] text-[var(--color2)]`}>교환</strong>이 되지 않습니다.
                  </div>
                  <div className={`${idx == 0 && `On`} A mt-[36px] hidden leading-[20px] [&.On]:block`}>
                    <span className={`text-[var(--color5)]`}>배송 상황에 따라 배송 완료로 확인될 수 있습니다.</span>
                    <br />
                    <span className={`text-[var(--color5)]`}>아래 내용을 확인해주세요.</span> <br />
                    <br />
                    <span className={`font-[600] text-[var(--color1)]`}>[배송 기사가 상품을 아직 보유하고 있는 경우]</span>
                    <br />
                    <span className={`text-[var(--color5)]`}>보유 여부는 택배사 또는 배송기사분에게 확인해주세요.</span>
                    <br />
                    <br />
                    <span className={`font-[600] text-[var(--color1)]`}>
                      [경비실, 문앞, 택배 보관함 등 위탁 장소에 배송하는 경우]
                    </span>
                    <br />
                    <span className={`text-[var(--color5)]`}>다시 한 번 상품이 있는지 확인해주세요.</span> <br />
                    <br />
                    <span className={`font-[600] text-[var(--color1)]`}>[송장 번호가 잘못된 경우]</span>
                    <br />
                    <span className={`text-[var(--color5)]`}>1:1문의를 통해 주문번호, 상품에 대한 정보를 남겨주세요.</span>
                    <br />
                  </div>
                </div>
              </button>
            </Fragment>
          );
        })}
      </div>
    </>
  );
}

export default FaqList1;
