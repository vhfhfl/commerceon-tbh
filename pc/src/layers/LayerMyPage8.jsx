import CheckBox1 from '@/components/form/CheckBox1';
import TableItem3 from '@/modules/TableItem3';

function LayerMyPage8() {
  return (
    <div className={`relative`}>
      <div className={`LayerMyPage8 w-[620px] bg-white`}>
        <div className={`p-[30px] pb-[60px] text-center text-[18px] font-[400] leading-[25px] text-[var(--color1)]`}>
          <div>
            <div className={`text-[22px] font-[600] leading-[30px] text-[var(--color1)]`}>
              [이름]님
              <br />
              소중한 리뷰 작성 감사합니다.
            </div>
            <div className={`mt-[20px]`}>
              2개 상품에 대한 리뷰를 작성하고 <span className={`text-[var(--color2)]`}>15,000원</span>의 (포인트)를
              받았어요!
            </div>
            <div className={`mt-[27px]`}>
              <div className={`mx-auto w-[540px] bg-[var(--color7)] py-[23px]`}>
                리뷰를 기다리는 상품이 있어요.
                <br />
                지금 리뷰를 작성하시면 최대 <span className={`text-[var(--color2)]`}>15,000원</span>의(포인트)를 받을 수
                있어요!
              </div>
            </div>
            <div className={`mt-[32px]`}>
              <div className={`mx-auto w-[426px] text-left`}>
                <TableItem3 />
              </div>
            </div>
            <div className={`mt-[32px]`}>
              <div
                className={`mx-auto w-[426px] border-y-[1px] border-solid border-y-[var(--color6)] py-[28px] text-left`}>
                <TableItem3 />
              </div>
              <div className={`mt-[16px] text-[var(--color2)]`}>외 +2개</div>
            </div>
          </div>
        </div>
        <div className={`grid grid-cols-[repeat(auto-fit,minmax(0,1fr))] items-center justify-center gap-[0]`}>
          <button className={`PopupButton1`}>닫기</button>
          <button className={`PopupButton2`}>리뷰 작성하고 (포인트) 받기</button>
        </div>
      </div>
      <div className={`mt-[10px]`}>
        <article className={`flex flex-row items-center justify-end gap-0`}>
          <CheckBox1>
            <div className={`text-white`}>오늘 하루 열지 않기</div>
          </CheckBox1>
        </article>
      </div>
    </div>
  );
}

export default LayerMyPage8;
