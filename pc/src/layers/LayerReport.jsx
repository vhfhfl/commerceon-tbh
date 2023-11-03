import FormTable27 from '@/modules/FormTable27';
import RadioBtn from '@/components/form/RadioBtn';

function LayerReport() {
  return (
    <div className={`LayerReport w-[808px] bg-white`}>
      <div className={`p-[30px]`}>
        <div className={`text-[28px] font-[600] text-[var(--color1)]`}>신고하기</div>
        <div className={`mt-[50px]`}>
          <div className={`text-[18px] font-[700] text-[var(--color1)]`}>신고사항</div>
          <div className={`mt-[20px]`}>
            <FormTable27 />
          </div>
        </div>
        <div className={`mt-[50px]`}>
          <div className={`text-[18px] font-[700] text-[var(--color1)]`}>신고사유</div>
          <div className={`mt-[20px]`}>
            <div className={`border-t-[3px] border-solid border-t-[var(--color1)]`}>
              <article className={`flex flex-col gap-[24px] p-[30px]`}>
                <RadioBtn>상품과 간련 없는 사진과 내용이 등록되었습니다.</RadioBtn>
                <RadioBtn>저작권, 초상권이 무단으로 도용되었습니다.</RadioBtn>
                <RadioBtn>욕설(비방), 차별, 혐오, 음란한 표현이 포함되었습니다.</RadioBtn>
                <RadioBtn>광고, 상업적 홍보, 불법 정보를 포함하고 있습니다.</RadioBtn>
                <RadioBtn>개인정보가 노출되었습니다.</RadioBtn>
                <RadioBtn>기타</RadioBtn>
              </article>
              <div>
                <textarea className={`TAREA-1`} placeholder={`기타 신고 사유를 작성해주세요. (100자 이내)`}></textarea>
                <div className={`mt-[18px]`}>
                  <article className={`flex flex-row items-center gap-[0]`}>
                    <div>
                      <img className={`Icon`} src={`/icons/icon_48.svg`} alt={``} />
                    </div>
                    <div className={`ml-[4px] text-[14px] font-[400] text-[var(--color5)]`}>
                      신고가 접수된 내용은 내부 정책에 의거하여, 정책에 위반으로 판단 될 경우 정해진 절차대로
                      처리됩니다.
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
        <article className={`mt-[60px] flex flex-row items-center justify-center gap-[16px]`}>
          <button className={`PopupButton3 w-[230px]`}>닫기</button>
          <button className={`PopupButton2 w-[230px]`}>신고하기</button>
        </article>
      </div>
    </div>
  );
}

export default LayerReport;
