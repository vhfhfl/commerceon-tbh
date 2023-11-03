import {Data} from '@/scripts/data_manager';
import Image from 'next/image';
import Link from 'next/link';
import {Fragment, useRef, useState} from 'react';

function Depth23Menu(props) {
  const { className = '' } = props;
  const ref_this = useRef();

  const [select_menu_key, setSelectMenuKey] = useState('62d19cdc');
  // const [select_3_d_menu_key, setSelect3DMenuKey] = useState();

  return (
    <>
      <div
        ref={ref_this}
        {...props}
        className={`Depth23Menu ${className} grid grid-cols-[14.56%_1fr] gap-[0] bg-white`}>
        <div className={`bg-[var(--color7)] pt-[20px] pb-[100px]`}>
          <ul>
            {Data.submenu.map((obj, idx) => {
              const { name, menu_key, child_list } = obj;
              let is_link = true;
              if (child_list && child_list.length > 0) {
                is_link = false;
              }

              return (
                <Fragment key={idx}>
                  <li className={`h-[34px] text-[14px] font-[600] text-[var(--color1)]`}>
                    {!is_link ? (
                      <button
                        className={`${
                          select_menu_key == menu_key && `On`
                        } flex h-full w-full flex-row items-center justify-between px-[13.63%] [&.On_.Arrow]:block`}
                        onMouseEnter={(evt) => {
                          setSelectMenuKey(menu_key);
                        }}>
                        <div>{name}</div>
                        <Image className={`Arrow hidden`} src={`/icons/zco_17.svg`} width={8} height={13} alt='' />
                      </button>
                    ) : (
                      <Link
                        className={`flex h-full w-full flex-row items-center justify-start px-[13.63%]`}
                        href={`https://www.google.com`}>
                        {name}
                      </Link>
                    )}
                  </li>
                </Fragment>
              );
            })}
          </ul>
        </div>
        <div data-seq='20230515162530963'>
          {/*RIGHT*/}
          {Data.submenu.map((obj, idx) => {
            const { menu_key, child_list } = obj;

            if (!menu_key) return null;

            return (
              <Fragment key={idx}>
                <ul
                  className={`${
                    select_menu_key != menu_key && `hidden`
                  } grid h-full grid-cols-[repeat(auto-fit,minmax(0,1fr))] gap-[0]`}>
                  {child_list.map((obj2, idx2) => {
                    const { name, child_list } = obj2;

                    return (
                      <Fragment key={idx2}>
                        <li className={`pt-[20px] pb-[100px] border-solid border-r-[1px] border-r-[var(--color6)]`}>
                          <div
                            className={`flex h-[34px] flex-row items-center px-[16.21%] text-[14px] font-[600] text-[var(--color1)]`}>
                            {name}
                          </div>
                          <ul>
                            {child_list.map((obj3, idx3) => {
                              const { name } = obj3;
                              return (
                                <Fragment key={idx3}>
                                  <li>
                                    <Link href={`#`} className={`flex h-[34px] flex-row items-center px-[16.21%]`}>
                                      {name}
                                    </Link>
                                  </li>
                                </Fragment>
                              );
                            })}
                          </ul>
                        </li>
                      </Fragment>
                    );
                  })}
                </ul>
              </Fragment>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Depth23Menu;
