function DeliveryList(props) {
  const { className = '' } = props;

  return (
    <>
      <div className={`DeliveryList ${className}`}>
        <div className={`border-t-2 border-solid border-t-[var(--color1)] pt-[23px]`}>
          <ul className={`space-y-[30px]`}>
            <li>
              <div className={`text-[14px] font-[700] text-[var(--color1)]`}>자택</div>
              <div className={`mt-[13px]`}>
                <div className={`border-[1px] border-solid border-[var(--color6)] px-[22px] pt-[29px] pb-[22px]`}>
                  <span
                    className={`inline-flex h-[28px] flex-row items-center justify-center gap-0 bg-[var(--color2)] px-[1.25em] text-[12px] font-[400] text-white`}>
                    기본배송지
                  </span>
                  <div className={`mt-[18px] text-[14px] font-[400] text-[var(--color1)]`}>
                    (02075)서울특별시 중랑구 봉화산로120
                  </div>
                  <div className={`mt-[17px] text-[14px] font-[400] text-[var(--color1)]`}>
                    <article className={`grid grid-cols-[70px_1fr] items-center justify-center gap-0`}>
                      <div>받으실 분</div>
                      <div className={`font-[600]`}>홍길동</div>
                    </article>
                    <div className={`mt-[7px]`}>
                      <article className={`grid grid-cols-[70px_1fr] items-center justify-center gap-0`}>
                        <div>연락처</div>
                        <div className={`font-[600]`}>010-0000-0000</div>
                      </article>
                    </div>
                  </div>
                  <div className={`mt-[35px]`}>
                    <button className={`ButtonStyle4 ButtonMd`}>수정</button>
                    <button className={`ButtonStyle4 ButtonMd ml-[5px]`}>삭제</button>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className={`text-[14px] font-[700] text-[var(--color1)]`}>회사</div>
              <div className={`mt-[13px]`}>
                <div className={`border-[1px] border-solid border-[var(--color6)] px-[22px] pt-[29px] pb-[22px]`}>
                  <button className={`ButtonStyle3 ButtonSm`}>기본배송지로 설정</button>
                  <div className={`mt-[18px] text-[14px] font-[400] text-[var(--color1)]`}>
                    (02075)서울특별시 중랑구 봉화산로120
                  </div>
                  <div className={`mt-[17px] text-[14px] font-[400] text-[var(--color1)]`}>
                    <article className={`grid grid-cols-[70px_1fr] items-center justify-center gap-0`}>
                      <div>받으실 분</div>
                      <div className={`font-[600]`}>홍길동</div>
                    </article>
                    <div className={`mt-[7px]`}>
                      <article className={`grid grid-cols-[70px_1fr] items-center justify-center gap-0`}>
                        <div>연락처</div>
                        <div className={`font-[600]`}>010-0000-0000</div>
                      </article>
                    </div>
                  </div>
                  <div className={`mt-[35px]`}>
                    <button className={`ButtonStyle4 ButtonMd`}>수정</button>
                    <button className={`ButtonStyle4 ButtonMd ml-[5px]`}>삭제</button>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default DeliveryList;
