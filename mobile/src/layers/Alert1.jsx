import {Layer} from '@/scripts/util';

function Alert1() {
  return (
    <div className={`Alert1 w-[270px] bg-white`}>
      <div className={`py-[30px] text-center text-[14px] font-[400] leading-[20px] text-[var(--color1)]`}>
        비밀번호가 정상적으로
        <br />
        변경되었습니다.
      </div>
      <div className={`grid grid-cols-[repeat(auto-fit,minmax(0,1fr))] items-center justify-center gap-[0]`}>
        <button
          className={`PopupButton2`}
          >
          확인
        </button>
      </div>
    </div>
  );
}

export default Alert1;
