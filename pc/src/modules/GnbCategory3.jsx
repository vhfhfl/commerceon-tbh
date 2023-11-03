import {Data} from '@/scripts/data_manager';
import Link from 'next/link';
import {Fragment, useRef} from 'react';

function GnbCategory3(props) {
  const { className = '' } = props;
  const ref_this = useRef();
  return (
    <>
      <div ref={ref_this} {...props} className={`GnbCategory3 ${className} h-[var(--fixed-header-hei)]`}>
        <ul className={`flex h-full flex-row items-start gap-[0]`}>
          {Data.gnb.map((obj1, idx1) => {
            const { title, bold, red_dot, link, menu_key } = obj1;

            return (
              <Fragment key={idx1}>
                <li className={`h-full [&:first-child_>_a]:pl-0 [&:last-child_>_a]:pr-0`}>
                  <Link
                    href={`#`}
                    className={`relative block h-full px-[13px] text-[0px] 3xl:px-[15px] flex flex-row items-center justify-center gap-[0]`}
                    onMouseEnter={(evt) => {
                      const event = new Event('submenu_key_change');
                      event.submenu_key = menu_key;
                      window.dispatchEvent(event);
                    }}
                    onMouseLeave={(evt) => {
                      const event = new Event('submenu_key_change');
                      event.submenu_key = null;
                      window.dispatchEvent(event);
                    }}>
                    <div
                      className={`${
                        bold && `Bold`
                      } Montserrat relative text-[16px] font-[500] text-[var(--color1)] hover:underline [&.Bold]:font-[700]`}>
                      {title}
                      {red_dot && (
                        <div
                          className={`absolute top-[-2px] right-[-6px] z-10 h-[6px] w-[6px] rounded-full bg-[var(--color13)] text-[0px]`}>
                          RedDot
                        </div>
                      )}
                    </div>
                  </Link>
                </li>
              </Fragment>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default GnbCategory3;
