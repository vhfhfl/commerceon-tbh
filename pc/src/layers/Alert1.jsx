function Alert1() {
  return (
    <div className={`Alert1 w-[370px] bg-white`}>
      <div className={`px-[10px] py-[55px] text-center text-[18px] font-[400] leading-[25px] text-[var(--color1)]`}>
        <div>
          <div>얼럿창 또는 컨펌창은 <br/> 이 팝업을 복제하여 커스텀 하여 <br/> 사용하시면 됩니다.</div>
          <span>#161616</span>
          <span className={`text-[#6688FF]`}>#6688FF</span>
          <span className={`text-[#FF0D0D]`}>#FF0D0D</span>
          <span className={`text-[#888888]`}>#888888</span>
        </div>
      </div>
      <div className={`grid grid-cols-[repeat(auto-fit,minmax(0,1fr))] items-center justify-center gap-[0]`}>
        <button className={`PopupButton1`}>Cancel</button>
        <button className={`PopupButton2`}>Ok</button>
      </div>
    </div>
  );
}

export default Alert1;
