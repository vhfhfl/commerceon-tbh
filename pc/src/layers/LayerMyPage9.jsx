import FormTable31 from '@/modules/FormTable31';

function LayerMyPage9() {
  return (
    <div className={`relative`}>
      <div className={`LayerMyPage9 w-[808px] bg-white`}>
        <div className={`p-[30px]`}>
          <div>
            <div className={`text-[28px] font-[600] text-[var(--color1)]`}>배송지 등록/수정</div>
            <div className={`mt-[20px]`}>
              <FormTable31 />
            </div>
          </div>
          <article className={`mt-[60px] flex flex-row items-center justify-center gap-[16px]`}>
            <button className={`PopupButton3 w-[230px]`}>취소</button>
            <button className={`PopupButton2 w-[230px]`}>확인</button>
          </article>
        </div>
      </div>
    </div>
  );
}

export default LayerMyPage9;
