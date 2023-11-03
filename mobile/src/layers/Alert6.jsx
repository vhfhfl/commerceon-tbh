function Alert6() {
  return (
    <div className={`Alert6 w-[320px] bg-white`}>
      <div className={`py-[35px] text-center`}>
        <div className={`text-[#161616] text-[18px] font-[600]`}>리뷰 작성 오류</div>
        <div className={`mt-[14px] leading-[20px] text-[#161616] text-[14px] font-[400]`}>
          5분내 10분개 이상의 게시글을 작성하였습니다.
          <br/>
          게시글, 문의, 리뷰등의 작성이 운영 정책에 따라
          <br/>
          <span className={`Color2`}>10분간</span> 제한됩니다.
        </div>
        <article className={`mt-[14px] CenterCenter`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
            <circle cx="9" cy="9" r="8.5" stroke="#F20042"/>
            <path d="M8.57031 5.14258V9.87942H12.5177" stroke="#F20042"/>
          </svg>
          <div className={`Montserrat ml-[7px] text-[#f20042] text-[12px] font-[400]`}>00:09:40</div>
        </article>
      </div>
      <div className={`grid grid-cols-[repeat(auto-fit,minmax(0,1fr))] items-center justify-center gap-[0]`}>
        <button className={`PopupButton1`}>닫기</button>
        <button className={`PopupButton2`}>확인</button>
      </div>
    </div>
  );
}

export default Alert6;
