import {Layer} from '@/scripts/util';

function Alert3() {
  return (
    <div className={`Alert3 w-[270px] bg-white`}>
      <div className={`py-[30px] text-center text-[14px] font-[400] leading-[20px] text-[var(--color1)]`}>
        <div>
          <span className={`text-[var(--color5)]`}>휴면해제 처리 과정에서 예기치 못한</span>
        </div>
        <div>
          <span className={`text-[var(--color5)]`}>오류가 발생하였습니다.</span> TBH SHOP
        </div>
        <div>
          고객센터에 문의<span className={`text-[var(--color5)]`}>해주시기 바랍니다.</span>
        </div>
      </div>
      <div className={`grid grid-cols-[repeat(auto-fit,minmax(0,1fr))] items-center justify-center gap-[0]`}>
        <button
          className={`PopupButton2`}
          >
          고객센터
        </button>
      </div>
    </div>
  );
}

export default Alert3;
