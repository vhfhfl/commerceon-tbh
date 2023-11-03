import { Util } from '@/scripts/util';

function FormTable9(props) {
  const { className = '' } = props;
  
  return (
    <>
      <div className={`FormTable9 ${className}`}>
        <table className={`Table3 NoBorder`}>
          <colgroup>
            <col className={`w-[80px]`} />
            <col />
          </colgroup>
          <tbody>
            <tr>
              <td>은행</td>
              <td>
                <div
                  className={`SelectBox1 w-full`}
                  onClick={(evt) => {
                    const target = evt.target.closest('.SelectBox1');
                    Util.toggleClass(target, 'On');
                  }}>
                  <button>
                    <div>은행 선택</div>
                  </button>
                  <div className={`Options`}>
                    <button>은행 선택</button>
                    <button>은행 선택</button>
                    <button>은행 선택</button>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>계좌번호</td>
              <td>
                <div className={`InputUi InputSm w-full`} data-form-hei={`Md`}>
                  <input type={`text`} />
                </div>
              </td>
            </tr>
            <tr>
              <td>예금주</td>
              <td>
                <div className={`InputUi InputSm w-full`} data-form-hei={`Md`}>
                  <input type={`text`} />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default FormTable9;
