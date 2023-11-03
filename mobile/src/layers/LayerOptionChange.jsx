import InfoTable7 from '@/modules/InfoTable7';

function LayerOptionChange() {
  return (
    <div className={`LayerOptionChange w-[330px] bg-white`}>
      <div className={`p-[15px]`}>
        <div className={`text-[22px] font-[600] text-[var(--color1)]`}>옵션 변경</div>
        <div className={`mt-[15px]`}>
          <div className={`border-t-[1px] border-solid border-t-[var(--color1)]`}>
            <InfoTable7 />
          </div>
        </div>
        <div className={`my-[20px] text-center text-[12px] font-[400] text-[var(--color13)]`}>
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
