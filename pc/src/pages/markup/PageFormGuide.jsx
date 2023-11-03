import H1 from '@/components/common/H1';
import H2 from '@/components/common/H2';
import H3 from '@/components/common/H3';
import LayoutBasic from '@/layouts/LayoutBasic';

function PageFormGuide() {
  return (
    <div className={`PageFormGuide`}>
      {/*prettier-ignore*/}
      <style jsx global>{`
        // 전역 선언
        section{ margin-bottom:100px; }
      `}</style>
      <div className={`SubContainer`}>
        <section data-seq={`20230627060547861`} className={``}>
          <div className={`H-Box`}>
            <div className={`Inner`}>
              <H1>Form Design Guide</H1>
              <div className={`leading-[24px]`}>
                <div>Style의 종류에는 제한이 없음.</div>
                <div>단, 높이는 최소 3 가지 ~ 최대 5 가지 까지 제한 하는것을 권장. Md(middle) 을 기본 사이즈로 함.</div>
              </div>
            </div>
          </div>
        </section>
        <section data-seq={`20230627060547861`} className={``}>
          <H2>Button</H2>
          <br />
          <H3>Style1</H3>
          <table className='TableUi CenterMode'>
            <thead>
              <tr>
                <th className='w-[100px]'>높이</th>
                <th>Xl( 58px )</th>
                <th>Lg( 48px )</th>
                <th className='text-[red]'>Md( 36px )</th>
                <th>Sm( 28px )</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>default</td>
                <td>
                  <button className={`ButtonXl ButtonStyle1`}>Button</button>
                </td>
                <td>
                  <button className={`ButtonLg ButtonStyle1`}>Button</button>
                </td>
                <td>
                  <button className={`ButtonMd ButtonStyle1`}>Button</button>
                </td>
                <td>
                  <button className={`ButtonSm ButtonStyle1`}>Button</button>
                </td>
              </tr>
              <tr>
                <td>:hover</td>
                <td>X</td>
                <td>X</td>
                <td>X</td>
                <td>X</td>
              </tr>
              <tr>
                <td>:focus</td>
                <td>X</td>
                <td>X</td>
                <td>X</td>
                <td>X</td>
              </tr>
              <tr>
                <td>:active</td>
                <td>X</td>
                <td>X</td>
                <td>X</td>
                <td>X</td>
              </tr>
              <tr>
                <td>.round</td>
                <td>
                  <button className={`ButtonXl ButtonStyle1 Round`}>Button</button>
                </td>
                <td>
                  <button className={`ButtonLg ButtonStyle1 Round`}>Button</button>
                </td>
                <td>
                  <button className={`ButtonMd ButtonStyle1 Round`}>Button</button>
                </td>
                <td>
                  <button className={`ButtonSm ButtonStyle1 Round`}>Button</button>
                </td>
              </tr>
              <tr>
                <td>icon</td>
                <td>
                  <button className={`ButtonXl ButtonStyle1`}>
                    <img className={`w-[1em]`} src={`/icons/icon_2_1.svg`} alt={``} />
                    <div>Button</div>
                  </button>
                </td>
                <td>
                  <button className={`ButtonLg ButtonStyle1`}>
                    <img className={`w-[1em]`} src={`/icons/icon_2_1.svg`} alt={``} />
                    <div>Button</div>
                  </button>
                </td>
                <td>
                  <button className={`ButtonMd ButtonStyle1`}>
                    <img className={`w-[1em]`} src={`/icons/icon_2_1.svg`} alt={``} />
                    <div>Button</div>
                  </button>
                </td>
                <td>
                  <button className={`ButtonSm ButtonStyle1`}>
                    <img className={`w-[1em]`} src={`/icons/icon_2_1.svg`} alt={``} />
                    <div>Button</div>
                  </button>
                </td>
              </tr>
              <tr>
                <td>disabled</td>
                <td>
                  <button className={`ButtonXl ButtonStyle1`} disabled={true}>
                    Button
                  </button>
                </td>
                <td>
                  <button className={`ButtonLg ButtonStyle1`} disabled={true}>
                    Button
                  </button>
                </td>
                <td>
                  <button className={`ButtonMd ButtonStyle1`} disabled={true}>
                    Button
                  </button>
                </td>
                <td>
                  <button className={`ButtonSm ButtonStyle1`} disabled={true}>
                    Button
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
        <section data-seq={`20230627060547861`} className={``}>
          <H3>Style2</H3>
          <table className='TableUi CenterMode'>
            <thead>
              <tr>
                <th className='w-[100px]'>높이</th>
                <th>Xl( 58px )</th>
                <th>Lg( 48px )</th>
                <th className='text-[red]'>Md( 36px )</th>
                <th>Sm( 28px )</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>default</td>
                <td>
                  <button className={`ButtonXl ButtonStyle2`}>Button</button>
                </td>
                <td>
                  <button className={`ButtonLg ButtonStyle2`}>Button</button>
                </td>
                <td>
                  <button className={`ButtonMd ButtonStyle2`}>Button</button>
                </td>
                <td>
                  <button className={`ButtonSm ButtonStyle2`}>Button</button>
                </td>
              </tr>
              <tr>
                <td>:hover</td>
                <td>X</td>
                <td>X</td>
                <td>X</td>
                <td>X</td>
              </tr>
              <tr>
                <td>:focus</td>
                <td>X</td>
                <td>X</td>
                <td>X</td>
                <td>X</td>
              </tr>
              <tr>
                <td>:active</td>
                <td>X</td>
                <td>X</td>
                <td>X</td>
                <td>X</td>
              </tr>
              <tr>
                <td>.round</td>
                <td>
                  <button className={`ButtonXl ButtonStyle2 Round`}>Button</button>
                </td>
                <td>
                  <button className={`ButtonLg ButtonStyle2 Round`}>Button</button>
                </td>
                <td>
                  <button className={`ButtonMd ButtonStyle2 Round`}>Button</button>
                </td>
                <td>
                  <button className={`ButtonSm ButtonStyle2 Round`}>Button</button>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
        <section data-seq={`20230627060547861`} className={``}>
          <H3>Style3</H3>
          <table className='TableUi CenterMode'>
            <thead>
              <tr>
                <th className='w-[100px]'>높이</th>
                <th>Xl( 58px )</th>
                <th>Lg( 48px )</th>
                <th className='text-[red]'>Md( 36px )</th>
                <th>Sm( 28px )</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>default</td>
                <td>
                  <button className={`ButtonXl ButtonStyle3`}>Button</button>
                </td>
                <td>
                  <button className={`ButtonLg ButtonStyle3`}>Button</button>
                </td>
                <td>
                  <button className={`ButtonMd ButtonStyle3`}>Button</button>
                </td>
                <td>
                  <button className={`ButtonSm ButtonStyle3`}>Button</button>
                </td>
              </tr>
              <tr>
                <td>:hover</td>
                <td>X</td>
                <td>X</td>
                <td>X</td>
                <td>X</td>
              </tr>
              <tr>
                <td>:focus</td>
                <td>X</td>
                <td>X</td>
                <td>X</td>
                <td>X</td>
              </tr>
              <tr>
                <td>:active</td>
                <td>X</td>
                <td>X</td>
                <td>X</td>
                <td>X</td>
              </tr>
              <tr>
                <td>.round</td>
                <td>
                  <button className={`ButtonXl ButtonStyle3 Round`}>Button</button>
                </td>
                <td>
                  <button className={`ButtonLg ButtonStyle3 Round`}>Button</button>
                </td>
                <td>
                  <button className={`ButtonMd ButtonStyle3 Round`}>Button</button>
                </td>
                <td>
                  <button className={`ButtonSm ButtonStyle3 Round`}>Button</button>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
        <section data-seq={`20230627060547861`} className={``}>
          <H3>Style4</H3>
          <table className='TableUi CenterMode'>
            <thead>
              <tr>
                <th className='w-[100px]'>높이</th>
                <th>Xl( 58px )</th>
                <th>Lg( 48px )</th>
                <th className='text-[red]'>Md( 36px )</th>
                <th>Sm( 28px )</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>default</td>
                <td>
                  <button className={`ButtonXl ButtonStyle4`}>Button</button>
                </td>
                <td>
                  <button className={`ButtonLg ButtonStyle4`}>Button</button>
                </td>
                <td>
                  <button className={`ButtonMd ButtonStyle4`}>Button</button>
                </td>
                <td>
                  <button className={`ButtonSm ButtonStyle4`}>Button</button>
                </td>
              </tr>
              <tr>
                <td>:hover</td>
                <td>
                  <button className={`ButtonXl ButtonStyle4 hover`}>Button</button>
                </td>
                <td>
                  <button className={`ButtonLg ButtonStyle4 hover`}>Button</button>
                </td>
                <td>
                  <button className={`ButtonMd ButtonStyle4 hover`}>Button</button>
                </td>
                <td>
                  <button className={`ButtonSm ButtonStyle4 hover`}>Button</button>
                </td>
              </tr>
              <tr>
                <td>:focus</td>
                <td>X</td>
                <td>X</td>
                <td>X</td>
                <td>X</td>
              </tr>
              <tr>
                <td>:active</td>
                <td>X</td>
                <td>X</td>
                <td>X</td>
                <td>X</td>
              </tr>
              <tr>
                <td>.round</td>
                <td>
                  <button className={`ButtonXl ButtonStyle4 Round`}>Button</button>
                </td>
                <td>
                  <button className={`ButtonLg ButtonStyle4 Round`}>Button</button>
                </td>
                <td>
                  <button className={`ButtonMd ButtonStyle4 Round`}>Button</button>
                </td>
                <td>
                  <button className={`ButtonSm ButtonStyle4 Round`}>Button</button>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
        <section data-seq={`20230627060547861`} className={``}>
          <H2>Input</H2>
          <br />
          <table className='TableUi CenterMode'>
            <thead>
              <tr>
                <th className='w-[100px]'>높이</th>
                <th>Xl( 58px )</th>
                <th>Lg( 48px )</th>
                <th className='text-[red]'>Md( 36px )</th>
                <th>Sm( 28px )</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>default</td>
                <td>
                  <div className='InputUi w-full' data-form-hei='Xl'>
                    <input placeholder='InputUi' />
                  </div>
                </td>
                <td>
                  <div className='InputUi w-full' data-form-hei='Lg'>
                    <input placeholder='InputUi' />
                  </div>
                </td>
                <td>
                  <div className='InputUi w-full' data-form-hei='Md'>
                    <input placeholder='InputUi' />
                  </div>
                </td>
                <td>
                  <div className='InputUi w-full' data-form-hei='Sm'>
                    <input placeholder='InputUi' />
                  </div>
                </td>
              </tr>
              <tr>
                <td>.focus</td>
                <td>
                  <div className='InputUi focus w-full' data-form-hei='Xl'>
                    <input placeholder='InputUi' />
                  </div>
                </td>
                <td>
                  <div className='InputUi focus w-full' data-form-hei='Lg'>
                    <input placeholder='InputUi' />
                  </div>
                </td>
                <td>
                  <div className='InputUi focus w-full' data-form-hei='Md'>
                    <input placeholder='InputUi' />
                  </div>
                </td>
                <td>
                  <div className='InputUi focus w-full' data-form-hei='Sm'>
                    <input placeholder='InputUi' />
                  </div>
                </td>
              </tr>
              <tr>
                <td>.error</td>
                <td>
                  <div className='InputUi error w-full' data-form-hei='Xl'>
                    <input placeholder='InputUi' />
                  </div>
                </td>
                <td>
                  <div className='InputUi error w-full' data-form-hei='Lg'>
                    <input placeholder='InputUi' />
                  </div>
                </td>
                <td>
                  <div className='InputUi error w-full' data-form-hei='Md'>
                    <input placeholder='InputUi' />
                  </div>
                </td>
                <td>
                  <div className='InputUi error w-full' data-form-hei='Sm'>
                    <input placeholder='InputUi' />
                  </div>
                </td>
              </tr>
              <tr>
                <td>.readonly</td>
                <td>
                  <div className='InputUi readonly w-full' data-form-hei='Xl'>
                    <input defaultValue='TestValue' readOnly={true} />
                  </div>
                </td>
                <td>
                  <div className='InputUi readonly w-full' data-form-hei='Lg'>
                    <input defaultValue='TestValue' readOnly={true} />
                  </div>
                </td>
                <td>
                  <div className='InputUi readonly w-full' data-form-hei='Md'>
                    <input defaultValue='TestValue' readOnly={true} />
                  </div>
                </td>
                <td>
                  <div className='InputUi readonly w-full' data-form-hei='Sm'>
                    <input defaultValue='TestValue' readOnly={true} />
                  </div>
                </td>
              </tr>
              <tr>
                <td>icon</td>
                <td>
                  <div className='InputUi w-full' data-form-hei='Xl'>
                    <input placeholder='InputUi' />
                    <button>
                      <img src="/icons/basic/dropdown_arrow.svg" alt=""/>
                    </button>
                  </div>
                </td>
                <td>
                  <div className='InputUi w-full' data-form-hei='Lg'>
                    <input placeholder='InputUi' />
                    <button>
                      <img src="/icons/basic/dropdown_arrow.svg" alt=""/>
                    </button>
                  </div>
                </td>
                <td>
                  <div className='InputUi w-full' data-form-hei='Md'>
                    <input placeholder='InputUi' />
                    <button>
                      <img src="/icons/basic/dropdown_arrow.svg" alt=""/>
                    </button>
                  </div>
                </td>
                <td>
                  <div className='InputUi w-full' data-form-hei='Sm'>
                    <input placeholder='InputUi' />
                    <button>
                      <img src="/icons/basic/dropdown_arrow.svg" alt=""/>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
        <section data-seq={`20230627060547861`} className={``}>
          <H2>Select</H2>
          <br />
          <table className='TableUi CenterMode'>
            <thead>
              <tr>
                <th className='w-[100px]'>높이</th>
                <th>Xl( 58px )</th>
                <th>Lg( 48px )</th>
                <th className='text-[red]'>Md( 36px )</th>
                <th>Sm( 28px )</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>default</td>
                <td>
                  <div className={`SelectUi w-full`} data-form-hei='Xl'>
                    <button>
                      <div>신상품 10%</div>
                    </button>
                    <div className={`Options`}>
                      <button>A</button>
                      <button>B</button>
                      <button>C</button>
                    </div>
                  </div>
                </td>
                <td>
                  <div className={`SelectUi w-full`} data-form-hei='Lg'>
                    <button>
                      <div>신상품 10%</div>
                    </button>
                    <div className={`Options`}>
                      <button>A</button>
                      <button>B</button>
                      <button>C</button>
                    </div>
                  </div>
                </td>
                <td>
                  <div className={`SelectUi w-full`} data-form-hei='Md'>
                    <button>
                      <div>신상품 10%</div>
                    </button>
                    <div className={`Options`}>
                      <button>A</button>
                      <button>B</button>
                      <button>C</button>
                    </div>
                  </div>
                </td>
                <td>
                  <div className={`SelectUi w-full`} data-form-hei='Sm'>
                    <button>
                      <div>신상품 10%</div>
                    </button>
                    <div className={`Options`}>
                      <button>A</button>
                      <button>B</button>
                      <button>C</button>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>.focus</td>
                <td>
                  <div className={`SelectUi focus w-full`} data-form-hei='Xl'>
                    <button>
                      <div>신상품 10%</div>
                    </button>
                    <div className={`Options`}>
                      <button>A</button>
                      <button>B</button>
                      <button>C</button>
                    </div>
                  </div>
                </td>
                <td>
                  <div className={`SelectUi focus w-full`} data-form-hei='Lg'>
                    <button>
                      <div>신상품 10%</div>
                    </button>
                    <div className={`Options`}>
                      <button>A</button>
                      <button>B</button>
                      <button>C</button>
                    </div>
                  </div>
                </td>
                <td>
                  <div className={`SelectUi focus w-full`} data-form-hei='Md'>
                    <button>
                      <div>신상품 10%</div>
                    </button>
                    <div className={`Options`}>
                      <button>A</button>
                      <button>B</button>
                      <button>C</button>
                    </div>
                  </div>
                </td>
                <td>
                  <div className={`SelectUi focus w-full`} data-form-hei='Sm'>
                    <button>
                      <div>신상품 10%</div>
                    </button>
                    <div className={`Options`}>
                      <button>A</button>
                      <button>B</button>
                      <button>C</button>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>.On</td>
                <td>
                  <div className={`SelectUi On w-full`} data-form-hei='Xl'>
                    <button>
                      <div>신상품 10%</div>
                    </button>
                    <div className={`Options`}>
                      <button>A</button>
                      <button>B</button>
                      <button>C</button>
                    </div>
                  </div>
                </td>
                <td>
                  <div className={`SelectUi On w-full`} data-form-hei='Lg'>
                    <button>
                      <div>신상품 10%</div>
                    </button>
                    <div className={`Options`}>
                      <button>A</button>
                      <button>B</button>
                      <button>C</button>
                    </div>
                  </div>
                </td>
                <td>
                  <div className={`SelectUi On w-full`} data-form-hei='Md'>
                    <button>
                      <div>신상품 10%</div>
                    </button>
                    <div className={`Options`}>
                      <button>A</button>
                      <button>B</button>
                      <button>C</button>
                    </div>
                  </div>
                </td>
                <td>
                  <div className={`SelectUi On w-full`} data-form-hei='Sm'>
                    <button>
                      <div>신상품 10%</div>
                    </button>
                    <div className={`Options`}>
                      <button>A</button>
                      <button>B</button>
                      <button>C</button>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
}

PageFormGuide.Layout = LayoutBasic;
export default PageFormGuide;
