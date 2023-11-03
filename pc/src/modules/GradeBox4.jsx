function GradeBox4() {
  return (
    <>
      <div className={`GradeBox4`}>
        <article className={`flex flex-row items-stretch gap-[14px]`}>
          <div className={`grid w-full grid-flow-col grid-cols-3 items-center justify-center gap-[22px]`}>
            <a className={`Button10`} href='https://www.google.com' target='_blank'>
              <div className={`Text1`}>쿠폰</div>
              <div className={`Box1`}>
                <div className={`Text2`}>2</div>
                <div className={`Text3`}>장</div>
              </div>
            </a>
            <a className={`Button10`} href='https://www.google.com' target='_blank'>
              <div className={`Text1`}>마일리지</div>
              <div className={`Box1`}>
                <div className={`Text2`}>0</div>
                <div className={`Text3`}>원</div>
              </div>
            </a>
            <a className={`Button10`} href='https://www.google.com' target='_blank'>
              <div className={`Text1`}>구매중인 상품</div>
              <div className={`Box1`}>
                <div className={`Text2`}>0</div>
                <div className={`Text3`}>건</div>
              </div>
            </a>
          </div>
        </article>
      </div>
    </>
  );
}

export default GradeBox4;
