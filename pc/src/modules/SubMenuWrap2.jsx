import {Data} from '@/scripts/data_manager';
import {Util} from '@/scripts/util';
import _ from 'lodash';
import {Fragment, useEffect, useRef, useState} from 'react';

function SubMenuWrap2(props) {
  const { className = '' } = props;
  const ref_this = useRef();

  const menu_data = [
    {
      name: 'MEN',
      menu_key: '62d19cdc',
    },
    {
      name: 'WOMEN',
      menu_key: 'c09bf232',
    },
  ];
  menu_data.forEach((obj, idx) => {
    const { menu_key } = obj;
    const result = _.find(Data.submenu, function (o) {
      return o.menu_key == menu_key;
    });
    _.merge(obj, result);
  });

  const [is_fixed, setIsFixed] = useState(false);
  const [select_menu_key, setSelectMenuKey] = useState('62d19cdc');

  const callbackScroll = (evt) => {
    const st = window.pageYOffset || document.documentElement.scrollTop;
    const el_gnb = document.querySelector(`#Gnb`);
    if(!el_gnb) return;
    const rect = el_gnb.getBoundingClientRect();
    const top = rect.top;

    if (top < 0) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
  };

  useEffect(() => {
    // mount
    callbackScroll();

    Util.on(window, 'scroll', callbackScroll);

    function onSubmenuKeyChange(evt) {
      const submenu_key = evt.submenu_key;

      const result = _.findKey(menu_data, function (o) {
        return o.menu_key == submenu_key;
      });

      if (result) {
        setSelectMenuKey(submenu_key);
        onSubMenuWrap2();
      } else {
        offSubMenuWrap2();
      }
    }

    Util.on(window, 'submenu_key_change', onSubmenuKeyChange);

    return () => {
      // unmount
      Util.off(window, 'scroll', callbackScroll);
      Util.off(window, 'submenu_key_change', onSubmenuKeyChange);
    };
  }, []);

  function onSubMenuWrap2() {
    const el_submenuwrap = ref_this.current;
    el_submenuwrap.classList.add('On');
  }

  function offSubMenuWrap2() {
    const el_submenuwrap = ref_this.current;
    el_submenuwrap.classList.remove('On');
  }

  return (
    <>
      <div
        ref={ref_this}
        {...props}
        className={`SubMenuWrap2 hidden [&.On]:block ${className} relative`}
        onMouseEnter={(evt) => {
          onSubMenuWrap2();
        }}
        onMouseLeave={(evt) => {
          const target = evt.target.closest('.SubMenuWrap2');
          offSubMenuWrap2();
        }}>
        <div
          className={`${
            is_fixed ? `fixed` : `absolute`
          } left-[0] z-10 w-full border-t-[1px] border-t-[var(--color6)] bg-white [&.fixed]:top-[var(--fixed-header-hei)]`}>
          <div className={`H-Box`}>
            <div className={`Inner`}>
              <div data-seq='20230516095710994'>
                {menu_data.map((obj, idx) => {
                  const { child_list, menu_key } = obj;
                  
                  return (
                    <Fragment key={idx}>
                      <ul className={`${select_menu_key != menu_key && `hidden`} flex flex-row`}>
                        {child_list.map(({ name, child_list }, idx2) => {
                          return (
                            <Fragment key={idx2}>
                              <li className={`w-[185px] pt-[20px] pb-[100px] border-solid border-r-[1px] border-r-[var(--color6)]`}>
                                <div
                                  className={`Montserrat flex h-[34px] flex-row items-center px-[30px] text-[14px] font-[600] text-[var(--color1)]`}>
                                  {name}
                                </div>
                                <ul>
                                  {child_list.map(({ name }, idx3) => {
                                    return (
                                      <Fragment key={idx3}>
                                        <li>
                                          <a
                                            href='https://www.google.com'
                                            className={`flex h-[34px] flex-row items-center px-[30px]`}>
                                            {name}
                                          </a>
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
          </div>
        </div>
      </div>
    </>
  );
}

export default SubMenuWrap2;
