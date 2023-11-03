import CheckBox1 from '@/components/form/CheckBox1';
import FormTable5 from '@/modules/FormTable5';

function LayerRestock() {
  return (
    <div className={`LayerRestock w-[330px] bg-white`}>
      <div className={`p-[15px]`}>
        <div className={`text-[22px] font-[600] text-[var(--color1)]`}>재입고 알림 신청</div>
        <div className={`mt-[15px]`}>
          <div className={`border-t-[1px] border-solid border-t-[var(--color1)]`}>
            <FormTable5 />
          </div>
        </div>
        <div className={`my-[20px] text-center text-[12px] font-[400] text-[var(--color13)]`}>
          <CheckBox1>
            <div>재입고 시 SMS 수신에 동의합니다.</div>
          </CheckBox1>
        </div>
      </div>
      <div className={`grid w-full grid-cols-2 items-center justify-between`}>
        <button className={`PopupButton1`}>취소</button>
        <button className={`PopupButton2`}>신청하기</button>
      </div>
    </div>
  );
}

export default LayerRestock;
