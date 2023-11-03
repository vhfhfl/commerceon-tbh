function Alert2() {
  return (
    <div className={`Alert2 w-[370px] bg-white`}>
      <div className={`px-[10px] py-[34px] text-center text-[18px] font-[400] leading-[25px] text-[var(--color1)]`}>
        <div>
          <div className={`text-[22px] font-[600] leading-[30px] text-[var(--color1)]`}>
            [이름]님
            <br />
            소중한 리뷰 작성 감사합니다.
          </div>
          <div className={`mt-[10px]`}>
            2개 상품에 대한 리뷰를 작성하고
            <br />
            <span className={`text-[var(--color2)]`}>15,000원</span>의 (포인트)를 받았어요!
          </div>
          <article
            className={`mt-[22px] Montserrat flex flex-row items-center justify-center gap-[0] text-[12px] font-[400] text-[var(--color13)]`}>
            <img src={`/icons/zco_73.svg`} alt={``} />
            <div className={`ml-[6px]`}>00:09:40</div>
          </article>
          <div className={`mt-[20px]`}>
            <input className={`TextInput2 w-[290px]`} type={`text`} placeholder={`placeholder`} />
          </div>
        </div>
      </div>
      <div className={`grid grid-cols-[repeat(auto-fit,minmax(0,1fr))] items-center justify-center gap-[0]`}>
        <button className={`PopupButton1`}>Cancel</button>
        <button className={`PopupButton2`}>Ok</button>
      </div>
    </div>
  );
}

export default Alert2;
