import {Fragment} from 'react';

function FileDetail_1() {
  return (
    <>
      <div className={`FileDetail_1`}>
        <ul className={`flex flex-row items-center gap-[20px]`}>
          {Array.from(Array(5)).map((obj, idx) => {
            return (
              <Fragment key={idx}>
                <li>
                  <img src={`https://picsum.photos/76/104.jpg?random=${idx}`} alt={``} />
                </li>
              </Fragment>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default FileDetail_1;
