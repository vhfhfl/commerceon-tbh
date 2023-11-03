function FormTable10(props) {
  const { className = '' } = props;

  return (
    <>
      <div className={`FormTable10 ${className}`}>
        <table className={`Table3 NoBorder`}>
          <colgroup>
            <col className={`w-[80px]`} />
            <col />
          </colgroup>
          <tbody>
            <tr>
              <td>신청자명</td>
              <td>
                <article className={`grid grid-cols-[1fr_101px] items-center justify-center gap-[6px]`}>
                  <div className={`InputUi InputSm`} data-form-hei={`Md`}>
                    <input type={`text`} />
                  </div>
                  <button className={`ButtonStyle2 ButtonMd Round`}>배송지목록</button>
                </article>
              </td>
            </tr>
            <tr>
              <td>연락처1</td>
              <td>
                <div className={`InputUi InputSm w-full`} data-form-hei={`Md`}>
                  <input type={`text`} />
                </div>
              </td>
            </tr>
            <tr>
              <td>연락처2</td>
              <td>
                <div className={`InputUi InputSm w-full`} data-form-hei={`Md`}>
                  <input type={`text`} />
                </div>
              </td>
            </tr>
            <tr>
              <td>주소</td>
              <td>
                <div>
                  <article className={`grid grid-cols-[1fr_76px] items-center justify-center gap-[6px]`}>
                    <div className={`InputUi InputSm`} data-form-hei={`Md`}>
                      <input type={`text`} />
                    </div>
                    <button className={`ButtonStyle4 ButtonMd Round`}>우편번호</button>
                  </article>
                  <div className={`mt-[6px]`}>
                    <div className={`InputUi InputSm w-full`} data-form-hei={`Md`}>
                      <input type={`text`} defaultValue={`서울특별시 강남구 삼성동`} />
                    </div>
                    <div className={`InputUi InputSm mt-[6px] w-full`} data-form-hei={`Md`}>
                      <input type={`text`} defaultValue={`1225호`} />
                    </div>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default FormTable10;
