import FormTable30 from '@/modules/FormTable30';

function LayerMyPage7() {
  return (
    <div className={`LayerMyPage7 w-[1038px] bg-white`}>
      <div className={`p-[30px]`}>
        <div>
          <div className={`text-[28px] font-[600] leading-[34px] text-[var(--color1)]`}>
            [이름]님
            <br />
            구매하신 상품은 만족하셨나요?
          </div>
          <div className={`mt-[80px]`}>
            <div className={`text-[18px] font-[700] text-[var(--color1)]`}>
              지금 후기를 작성하시면 최대 <span className={`text-[var(--color2)]`}>15,000원</span>의 (포인트)를 받을 수
              있어요!
            </div>
            <div className={`mt-[20px]`}>
              <FormTable30 />
            </div>
          </div>
        </div>
        <article className={`mt-[60px] flex flex-row items-center justify-center gap-0`}>
          <button className={`PopupButton2 w-[230px]`}>리뷰 작성하고 적립금 받기</button>
        </article>
      </div>
    </div>
  );
}

export default LayerMyPage7;
