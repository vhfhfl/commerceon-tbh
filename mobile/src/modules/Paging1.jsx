import { Fragment } from 'react';

function Paging1(props) {
  const { className = '' } = props;

  return (
    <>
      <div className={`Paging1 ${className}`}>
        <article className={`flex flex-row items-center justify-center gap-0`}>
          <a href={`https://www.google.com`} target={`_blank`}>
            <img className={`Icon`} src={`/icons/icon_43_1.svg`} alt={``} />
          </a>
          <a className={`ml-[10px]`} href={`https://www.google.com`} target={`_blank`}>
            <img className={`Icon`} src={`/icons/icon_43_2.svg`} alt={``} />
          </a>
          <div className={`mx-[20px] flex flex-row items-center justify-center gap-[7px]`}>
            {Array.from(Array(5)).map((obj, idx) => {
              return (
                <Fragment key={idx}>
                  <a
                    href={`https://www.google.com`}
                    target={`_blank`}
                    className={`${
                      idx == 0 && `On`
                    } Montserrat flex aspect-square w-[24px] flex-row items-center justify-center rounded-full border-[1px] border-solid border-[var(--color6)] text-[9px] font-[400] text-[black] [&.On]:bg-black [&.On]:text-white`}>
                    {idx + 1}
                  </a>
                </Fragment>
              );
            })}
          </div>
          <a href={`https://www.google.com`} target={`_blank`}>
            <img className={`Icon rotate-180`} src={`/icons/icon_43_2.svg`} alt={``} />
          </a>
          <a className={`ml-[10px]`} href={`https://www.google.com`} target={`_blank`}>
            <img className={`Icon rotate-180`} src={`/icons/icon_43_1.svg`} alt={``} />
          </a>
        </article>
      </div>
    </>
  );
}

export default Paging1;
