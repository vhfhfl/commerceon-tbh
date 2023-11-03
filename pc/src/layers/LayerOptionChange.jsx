import FormTable24 from '@/modules/FormTable24';

function LayerOptionChange() {
  return (
    <div className={`LayerOptionChange w-[420px] bg-white`}>
      <div className={`p-[30px]`}>
        <div className={`text-[28px] font-[600] text-[var(--color1)]`}>옵션 변경</div>
        <div className={`mt-[20px]`}>
          <FormTable24 />
        </div>
        <div className={`mt-[20px] text-center text-[14px] font-[400] text-[var(--color13)]`}>
          선택 가능 수량을 초과하였습니다.
        </div>
      </div>
      <article className={`grid w-full grid-cols-2 items-center justify-between`}>
        <button className={`PopupButton1`}>취소</button>
        <button className={`PopupButton2`}>옵션 변경</button>
      </article>
    </div>
  );
}

export default LayerOptionChange;
