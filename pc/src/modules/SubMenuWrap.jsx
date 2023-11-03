import BenefitSubMenu from '@/modules/BenefitSubMenu';
import BrandSubMenu from '@/modules/BrandSubMenu';
import Depth23Menu from '@/modules/Depth23Menu';
import {Util} from '@/scripts/util';
import _ from 'lodash';
import {Fragment, useEffect, useRef, useState} from 'react';

function SubMenuWrap(props) {
  const { className = '' } = props;
  const ref_this = useRef();

  const menu_data = [
    {
      name: 'ALL',
      menu_key: '8cb0c016',
    },
    {
      name: 'BRAND',
      menu_key: 'a135282c',
    },
    {
      name: 'BENEFITS',
      menu_key: '3d6ab8a3',
    },
  ];

  const [is_fixed, setIsFixed] = useState(false);
  const [select_menu_key, setSelectMenuKey] = useState('8cb0c016');

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
        onSubMenuWrap();
      } else {
        offSubMenuWrap();
      }
    }

    Util.on(window, 'submenu_key_change', onSubmenuKeyChange);

    return () => {
      // unmount
      Util.off(window, 'scroll', callbackScroll);
      Util.off(window, 'submenu_key_change', onSubmenuKeyChange);
    };
  }, []);

  function onSubMenuWrap() {
    const el_submenuwrap = ref_this.current;
    el_submenuwrap.classList.add('On');
  }

  function offSubMenuWrap() {
    const el_submenuwrap = ref_this.current;
    el_submenuwrap.classList.remove('On');
  }

  return (
    <>
      <div
        ref={ref_this}
        {...props}
        className={`SubMenuWrap hidden [&.On]:block ${className} relative`}
        onMouseEnter={(evt) => {
          onSubMenuWrap();
        }}
        onMouseLeave={(evt) => {
          const target = evt.target.closest('.SubMenuWrap');
          offSubMenuWrap();
        }}>
        <div
          className={`${
            is_fixed ? `fixed` : `absolute`
          } left-[0] z-10 w-full border-t-[1px] border-t-[var(--color6)] bg-white [&.fixed]:top-[var(--fixed-header-hei)]`}>
          <div className={`H-Box`}>
            <div className={`Inner`}>
              <div className={`grid grid-cols-[14.44%_1fr] gap-[1.66%]`}>
                <div>
                  {/*LEFT*/}
                  <ul>
                    {menu_data.map((obj, idx) => {
                      const { name, menu_key } = obj;

                      return (
                        <Fragment key={idx}>
                          <li className={`block w-full`}>
                            <button
                              className={`${
                                select_menu_key == menu_key && `On`
                              } block h-[64px] w-full border-b-[2px] border-solid border-b-[var(--color6)] pr-[20px] text-right text-[18px] font-[700] text-[var(--color1)] [&.On]:border-b-[var(--color1)]`}
                              onMouseEnter={(evt) => {
                                const target = evt.target;
                                setSelectMenuKey(menu_key);
                              }}>
                              {name}
                            </button>
                          </li>
                        </Fragment>
                      );
                    })}
                  </ul>
                </div>
                <div className={`w-full`}>
                  {/*RIGHT*/}
                  {(() => {
                    switch (select_menu_key) {
                      case '8cb0c016':
                        return <Depth23Menu />;
                      case 'a135282c':
                        return <BrandSubMenu />;
                      case '3d6ab8a3':
                        return <BenefitSubMenu />;
                      default:
                        return 'NULL';
                    }
                  })()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SubMenuWrap;
