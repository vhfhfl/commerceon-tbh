import {Data} from '@/scripts/data_manager';
import {Fragment, useRef} from 'react';

function BrandSubMenu(props) {
  const { className = '' } = props;
  const ref_this = useRef();

  return (
    <>
      <div ref={ref_this} {...props} className={`BrandSubMenu ${className} h-full bg-[var(--color7)] py-[100px]`}>
        <ul className={`flex flex-row items-center justify-center gap-[30px]`}>
          {Data.brandList.map((obj, idx) => {
            const { name_kr, sub_menu_img } = obj;

            return (
              <Fragment key={idx}>
                <li className={`w-[116px] text-center`}>
                  <a href='https://www.google.com' target={`_blank`} className={``}>
                    <div
                      className={`block flex aspect-square flex-row items-center justify-center rounded-full bg-white`}>
                      <img src={`${sub_menu_img}`} alt='' />
                    </div>
                    <div className={`mt-[15px]`}>
                      <div className={`text-[14px] font-[600] text-[var(--color1)]`}>{name_kr}</div>
                    </div>
                  </a>
                </li>
              </Fragment>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default BrandSubMenu;
