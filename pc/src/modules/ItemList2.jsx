import {Fragment} from 'react';

function ItemList2(props) {
  const { className = '' } = props;
  return (
    <>
      <div className={`ItemList2 ${className}`}>
        <article className={`grid grid-cols-4 gap-[80px_20px]`}>
          {Array.from(Array(14)).map((obj, idx) => {
            return (
              <Fragment key={idx}>
                <div>
                  <div className={`relative`}>
                    <img src={`https://picsum.photos/435/506.jpg?random=${idx}`} alt={``} />
                    <div
                      className={`absolute top-[0] right-[0] z-10 flex h-[40px] flex-row items-center justify-center gap-[0] bg-[var(--color1)] px-[10px] text-[16px] font-[500] text-[white]`}>
                      이벤트 종료
                    </div>
                  </div>
                  <div className={`mt-[26px]`}>
                    <div
                      className={`Montserrat inline-block bg-[#2C3A94] p-[10px_14px] text-[12px] font-[600] text-[white]`}>
                      BRAND NAME
                    </div>
                    <div className={`mt-[22px] text-[20px] font-[600] text-[var(--color1)]`}>
                      카카오톡 채널 혜택
                    </div>
                    <div className={`Montserrat mt-[12px] text-[16px] font-[500] text-[#888]`}>
                      2023.06.01 ~ 2023.06.31
                    </div>
                  </div>
                </div>
              </Fragment>
            );
          })}
        </article>
      </div>
    </>
  );
}

export default ItemList2;
