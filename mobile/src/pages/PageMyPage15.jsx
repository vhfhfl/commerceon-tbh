import TabBtnBox from '@/components/common/TabBtnBox';
import TabChildBox from '@/components/common/TabChildBox';
import LayoutSub from '@/layouts/LayoutSub';

function PageMyPage15() {
  return (
    <div className={`PageMyPage15`}>
      <section data-seq={`20230811161609`} className={`mt-[40px]`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <div className={`Title-3`}>
              <div className={`Txt1`}>쿠폰내역</div>
              <div className={`text-[14px] font-[700] text-[var(--color2)]`}>(사용 가능한 쿠폰 3장)</div>
            </div>
            <div className={`mt-[14px]`}>
              <TabBtnBox theme={`6`} uuid={`3b77ca12-4705-416e-bc2d-388483746ed5`}>
                <button>사용가능</button>
                <button>사용불가</button>
                <button className={`On`}>쿠폰등록</button>
              </TabBtnBox>
              <TabChildBox uuid={`3b77ca12-4705-416e-bc2d-388483746ed5`}>
                <div className={`On`}>
                  <div className={`pt-[26px] text-[14px] font-[400] leading-[18px] text-[var(--color1)]`}>
                    발급 받으신 쿠폰 인증 번호를 아래에 입력해주세요.
                    <br />
                    (5자리~최대 12자리)
                  </div>
                  <div className={`mt-[32px]`}>
                    <div className={`InputUi InputSm error w-full`} data-form-hei={`Md`}>
                      <input defaultValue={`123-456FGXAA`} />
                    </div>
                    <div className={`Montserrat mt-[10px] text-[12px] font-[400] text-[var(--color13)]`}>
                      사용할 수 없는 쿠폰 번호입니다.
                    </div>
                  </div>
                </div>
              </TabChildBox>
              <div className={`mt-[30px]`}>
                <button className={`ButtonStyle2 ButtonLg w-full`}>쿠폰 등록</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

PageMyPage15.Layout = LayoutSub;
export default PageMyPage15;
