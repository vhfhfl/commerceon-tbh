function Alert5() {
  return (
    <div className={`Alert5 w-[320px] bg-white`}>
      <div className={`pt-[35px] pb-[34px] text-center`}>
        <div className={`text-[#161616] text-[18px] font-[600]`}>비밀번호 인증</div>
        <div className={`mt-[14px] text-[#161616] text-[14px] font-[400] leading-[25px]`}>비밀번호를 입력해주세요</div>
        <div className={`mt-[18px] CenterCenter`}>
          <div className={`InputUi InputSm w-[200px]`} data-form-hei={`Md`}>
            <input/>
          </div>
        </div>
      </div>
      <div className={`grid grid-cols-[repeat(auto-fit,minmax(0,1fr))] items-center justify-center gap-[0]`}>
        <button className={`PopupButton1`}>닫기</button>
        <button className={`PopupButton2`}>확인</button>
      </div>
    </div>
  );
}

export default Alert5;
