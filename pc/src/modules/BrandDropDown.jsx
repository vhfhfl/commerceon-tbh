import {Data} from '@/scripts/data_manager';
import {Fragment, useRef} from 'react';

function BrandDropDown(props) {
  const { className = '', theme = 'Dark' } = props;
  const ref_this = useRef();
  return (
    <>
      <div ref={ref_this} {...props} className={`BrandDropDown ${className} Theme${theme}`}>
        <ul>
          {Data.brandList.map((obj, idx) => {
            const { name } = obj;

            return (
              <Fragment key={idx}>
                <li>
                  <a
                    href='#'
                    target={`_blank`}
                    className={`flex h-[36px] flex-row items-center justify-start px-[20px] text-[14px] font-[400] text-[white] bg-[#333] hover:bg-black [.BrandDropDown.ThemeWhite_&]:bg-[var(--color7)] [.BrandDropDown.ThemeWhite_&]:text-[14px] [.BrandDropDown.ThemeWhite_&]:text-[var(--color1)] [.BrandDropDown.ThemeWhite_&]:hover:bg-[var(--color6)]`}>
                    <div>{name}</div>
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

export default BrandDropDown;
