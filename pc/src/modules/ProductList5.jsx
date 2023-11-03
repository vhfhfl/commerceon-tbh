import {Fragment} from 'react';

function ProductList5(props) {
  const { className = '' } = props;
  return (
    <>
      <div className={`ProductList5 ${className}`}>
        <article className={`TabButtonBox1`}>
          {Array.from(Array(3)).map((obj, idx) => {
            return (
              <Fragment key={idx}>
                <button className={`${idx == 0 && `On`} w-[160px]`}>TAB BUTTON ({idx + 1})</button>
              </Fragment>
            );
          })}
        </article>
        <article
          className={`grid grid-cols-6 items-center justify-center gap-[4px] border-[2px] border-[var(--color6)] px-[20px] pt-[38px] pb-[50px]`}>
          {Array.from(Array(12)).map((obj, idx) => {
            return (
              <Fragment key={idx}>
                <div className={`${idx == 0 && `On`} rounded-[4px] border-[1px] border-transparent [&.On]:border-[var(--color1)] p-[12px]`}>
                  <div>
                    <img className={`w-full`} src={`https://picsum.photos/120/160.jpg?random=1`} alt={``} />
                  </div>
                  <div className={`mt-[10px] text-[12px] text-[var(--color1)]`}>
                    <div className={`Montserrat font-[600]`}>JUCY JUDY</div>
                    <div className={`mt-[8px] font-[400]`}>J로고 배색양말</div>
                  </div>
                </div>
              </Fragment>
            );
          })}
        </article>
        <div className={`mt-[30px] flex flex-row items-center justify-center gap-[0]`}>
          <button className={`ButtonXl ButtonStyle1 Round w-[185px]`}>옵션 / 수량 선택</button>
        </div>
      </div>
    </>
  );
}

export default ProductList5;
