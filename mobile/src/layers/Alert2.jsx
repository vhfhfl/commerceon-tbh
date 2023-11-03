import {Layer} from '@/scripts/util';

function Alert2() {
  return (
    <div className={`Alert2 w-[270px] bg-white`}>
      <div className={`py-[30px] text-center text-[14px] font-[400] leading-[20px] text-[var(--color1)]`}>
        <div>{`{`}이름{`}`}고객님, 휴면해제 감사합니다.</div>
        <div className={`text-[var(--color5)]`}>좋은 상품과 더 나은 서비스를</div>
        <div className={`text-[var(--color5)]`}>제공해드릴 수 있도록 노력하겠습니다.</div>
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

export default Alert2;
