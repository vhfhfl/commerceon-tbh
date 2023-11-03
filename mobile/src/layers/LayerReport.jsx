import RadioBtn from '@/components/form/RadioBtn';
import InfoTable8 from '@/modules/InfoTable8';

function LayerReport() {
  return (
    <div className={`LayerReport w-[330px] bg-white`}>
      <div className={`p-[15px]`}>
        <div className={`text-[22px] font-[600] text-[var(--color1)]`}>신고하기</div>
        <section data-seq={`20230726173931`} className={`mt-[15px]`}>
          <div className={`Title-fc63826d`}>신고사항</div>
          <div>
            <InfoTable8 />
          </div>
        </section>
        <section data-seq={`20230726174532`} className={`mt-[20px] pb-[80px]`}>
          <div className={`Title-fc63826d`}>신고사유</div>
          <div className={`border-t-[2px] border-solid border-t-[var(--color1)] pt-[20px]`}>
            <article className={`flex flex-col gap-[20px]`}>
              <RadioBtn size={`Sm`}>상품과 간련 없는 사진과 내용이 등록되었습니다.</RadioBtn>
              <RadioBtn size={`Sm`}>저작권, 초상권이 무단으로 도용되었습니다.</RadioBtn>
              <RadioBtn size={`Sm`}>욕설(비방), 차별, 혐오, 음란한 표현이 포함되었습니다.</RadioBtn>
              <RadioBtn size={`Sm`}>광고, 상업적 홍보, 불법 정보를 포함하고 있습니다.</RadioBtn>
              <RadioBtn size={`Sm`}>개인정보가 노출되었습니다.</RadioBtn>
              <RadioBtn size={`Sm`}>기타</RadioBtn>
            </article>
            <div className={`mt-[20px]`}>
              <textarea className={`TAREA-1`} placeholder={`기타 신고 사유를 작성해주세요. (100자 이내)`}></textarea>
              <div className={`mt-[18px]`}>
                <article className={`flex flex-row items-start gap-0`}>
                  <div>
                    <img className={`Icon`} src={`/icons/icon_51.svg`} alt={``} />
                  </div>
                  <div className={`ml-[6px] w-0 grow text-[12px] font-[400] leading-[22px] text-[var(--color5)]`}>
                    신고가 접수된 내용은 내부 정책에 의거하여, 정책에 위반으로 판단 될 경우 정해진 절차대로 처리됩니다.
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>
      </div>
      <article className={`grid w-full grid-cols-2 items-center justify-between`}>
        <button className={`PopupButton1`}>닫기</button>
        <button className={`PopupButton2`}>신고하기</button>
      </article>
    </div>
  );
}

export default LayerReport;
