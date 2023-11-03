import CheckBox1 from '@/components/form/CheckBox1';
import FormTable25 from '@/modules/FormTable25';

function LayerRestock() {
  return (
    <div className={`LayerRestock w-[420px] bg-white`}>
      <div className={`p-[30px]`}>
        <div className={`text-[28px] font-[600] text-[var(--color1)]`}>재입고 알림 신청</div>
        <div className={`mt-[20px]`}>
          <FormTable25 />
        </div>
        <div className={`mt-[20px] text-center`}>
          <CheckBox1>
            <div>재입고 시 SMS 수신에 동의합니다.</div>
          </CheckBox1>
        </div>
      </div>
      <article className={`grid w-full grid-cols-2 items-center justify-between`}>
        <button className={`PopupButton1`}>취소</button>
        <button className={`PopupButton2`}>신청하기</button>
      </article>
    </div>
  );
}

export default LayerRestock;
