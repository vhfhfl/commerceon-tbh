import { Util } from '@/scripts/util';
import { Fragment } from 'react';

function FormTable26(props) {
  const { className = '' } = props;
  return (
    <>
      <div className={`FormTable26 ${className}`}>
        <table className={`Table1 Form NoTop`}>
          <tbody>
            <tr>
              <td>카테고리</td>
              <td className={`!pl-[35px]`}>
                <article className={`CenterLeft !gap-[10px]`}>
                  {Array.from(Array(4)).map((obj, idx) => {
                    return (
                      <Fragment key={idx}>
                        <div
                          className={`SelectBox1 w-[136px]`}
                          onClick={(evt) => {
                            const target = evt.target.closest('.SelectBox1');
                            Util.toggleClass(target, 'On');
                          }}>
                          <button>
                            <div>-카테고리 선택-</div>
                          </button>
                          <div className={`Options`}>
                            <button>-카테고리 선택-</button>
                            <button>-카테고리 선택-</button>
                            <button>-카테고리 선택-</button>
                          </div>
                        </div>
                      </Fragment>
                    );
                  })}
                </article>
              </td>
            </tr>
            <tr>
              <td>검색어</td>
              <td className={`!pl-[35px]`}>
                <div
                  className={`SelectBox1 w-[136px]`}
                  onClick={(evt) => {
                    const target = evt.target.closest('.SelectBox1');
                    Util.toggleClass(target, 'On');
                  }}>
                  <button>
                    <div>상품명</div>
                  </button>
                  <div className={`Options`}>
                    <button>상품명</button>
                    <button>상품명</button>
                    <button>상품명</button>
                  </div>
                </div>
                <input className={`TextInput2 ml-[10px] w-[270px]`} type={`text`} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default FormTable26;
