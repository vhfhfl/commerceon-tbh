import FormTable28 from '@/modules/FormTable28';

function LayerProductInquiry3() {
  return (
    <div className={`LayerProductInquiry3 w-[1208px] bg-white`}>
      <div className={`p-[30px]`}>
        <div>
          <div className={`text-[28px] font-[600] leading-[34px] text-[var(--color1)]`}>상품 문의</div>
          <div className={`mt-[20px]`}>
            <article className={`flex flex-row items-end justify-between gap-0 bg-[var(--color7)] p-[18px_22px]`}>
              <div className={`Montserrat text-[14px] font-[400] leading-[20px] text-[var(--color5)]`}>
                상품, 주문, CS등 궁금하신 사항에 대해서 문의하시면 관리자가 순차적으로 답변해 드립니다.
                <br />이 게시판은 단순 문의 게시판으로 교환/환불/취소 신청은 [마이페이지 &gt; 주문내역]에서 신청하셔야
                합니다.
              </div>
              <a
                href={`https://www.google.com`}
                target={`_blank`}
                className={`CenterCenter text-[14px] font-[400] text-[var(--color2)]`}>
                주문내역 바로가기
                <img className={`Icon`} src={`/icons/zco_82.svg`} alt={``} />
              </a>
            </article>
          </div>
          <div className={`mt-[20px]`}>
            <FormTable28 />
          </div>
        </div>
        <article className={`mt-[60px] flex flex-row items-center justify-center gap-[16px]`}>
          <button className={`PopupButton3 w-[230px]`}>목록으로</button>
          <button className={`PopupButton2 w-[230px]`}>수정</button>
          <button className={`PopupButton1 w-[230px]`}>삭제</button>
        </article>
      </div>
    </div>
  );
}

export default LayerProductInquiry3;
