import {Fragment} from 'react';

function FileField_1() {
  return (
    <>
      <div className={`FileField_1`}>
        <article className={`flex flex-row items-center gap-[10px]`}>
          <input className={`TextInput2 w-[270px]`} type={`text`} placeholder={``} />
          <button className={`ButtonMd ButtonStyle4 Round w-[103px]`}>파일선택</button>
          <div className={`text-[12px] font-[400] text-[#888]`}>* 20MB 미만까지 첨부 가능</div>
        </article>
        <ul className={`mt-[30px] flex flex-row items-center gap-[20px]`}>
          {Array.from(Array(5)).map((obj, idx) => {
            return (
              <Fragment key={idx}>
                <li className={`relative`}>
                  <div>
                    <img src={`https://gifpng.com/76x104/`} alt={``} />
                  </div>
                  <button className={`z-10 absolute top-[-12px] right-[-12px]`}>
                    <img src={`/icons/zco_81.svg`} alt={``} />
                  </button>
                </li>
              </Fragment>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default FileField_1;
