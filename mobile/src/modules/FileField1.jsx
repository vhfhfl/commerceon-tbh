import { Fragment } from 'react';

function FileField1() {
  return (
    <>
      <div className={`FileField1`}>
        <article className={`grid grid-cols-[1fr_79px] items-center gap-[7px]`}>
          <div className={`InputUi InputSm`} data-form-hei={`Md`}>
            <input type={`text`} />
          </div>
          <button className={`ButtonStyle1 ButtonMd Round`}>파일선택</button>
        </article>
        <div className={`mt-[10px] text-[12px] font-[400] text-[var(--color5)]`}>* 20MB 미만까지 첨부 가능</div>
        <div className={`mt-[12px] overflow-auto pt-[12px]`}>
          <ul className={`flex flex-row items-center gap-[22px]`}>
            {Array.from(Array(5)).map((obj, idx) => {
              return (
                <Fragment key={idx}>
                  <li className={`relative`}>
                    <div>
                      <img src={`https://picsum.photos/56/77.jpg?random=${idx}`} alt={``} />
                    </div>
                    <button className={`absolute top-[-12px] right-[-12px] z-10`}>
                      <img className={`Icon`} src={`/icons/icon_80.svg`} alt={``} />
                    </button>
                  </li>
                </Fragment>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default FileField1;
