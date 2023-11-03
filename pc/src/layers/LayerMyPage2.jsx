import ProductTable16 from '@/modules/ProductTable16';
import InfoTable5 from '@/modules/InfoTable5';

function LayerMyPage2() {
  return (
    <div className={`LayerMyPage2 w-[1038px] bg-white`}>
      <div className={`p-[30px]`}>
        <div>
          <div className={`text-[28px] font-[600] text-[var(--color1)]`}>취소/환불 처리가 완료되었습니다.</div>
          <div className={`mt-[20px] text-[18px] font-[400] leading-[25px] text-[var(--color1)]`}>
            취소/환불 처리후에는 취소/환불 철회가 불가합니다.
            <br />
            다시 구매를 원하시면 재구매를 진행해주세요.
          </div>
          <div className={`mt-[45px]`}>
            <div className={`text-[18px] font-[700] text-[var(--color1)]`}>취소/환불 상세 정보</div>
            <div className={`mt-[20px]`}>
              <ProductTable16 />
            </div>
          </div>
          <div className={`mt-[60px]`}>
            <div className={`text-[18px] font-[700] text-[var(--color1)]`}>신청 사유</div>
            <div className={`mt-[20px]`}>
              <InfoTable5 />
            </div>
          </div>
        </div>
        <article className={`mt-[60px] flex flex-row items-center justify-center gap-[16px]`}>
          <button className={`PopupButton2 w-[230px]`}>확인</button>
        </article>
      </div>
    </div>
  );
}

export default LayerMyPage2;
