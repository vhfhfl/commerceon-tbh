import { Fragment } from 'react';

function MyPageMenu(props) {
  const { className = '' } = props;
  return (
    <>
      <div className={`MyPageMenu ${className} border-t-[2px] border-t-[var(--color1)]`}>
        {[
          '주문목록/배송조회',
          '취소/반품/교환 내역',
          '상품 위시리스트',
          '브랜드 위시리스트',
          '재입고 알림신청 리스트',
        ].map((obj, idx) => {
          return (
            <Fragment key={idx}>
              <button
                className={`flex h-[50px] w-full flex-row items-center justify-between border-b-[1px] border-solid border-b-[var(--color6)] text-[12px] font-[400] text-[var(--color1)]`}>
                {obj}
              </button>
            </Fragment>
          );
        })}
      </div>
    </>
  );
}

export default MyPageMenu;
