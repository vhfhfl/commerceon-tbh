import H1 from '@/components/common/H1';
import H2 from '@/components/common/H2';
import H3 from '@/components/common/H3';
import H4 from '@/components/common/H4';
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
        <section data-seq={`20230627060547861`}>
          <div className={`H-Box`}>
            <div className={`Inner`}>
              <H1>Form Design Guide</H1>
              <div className={`leading-[24px]`}>
                <div>Style의 종류에는 제한이 없음.</div>
                <div>단, 높이는 최소 3 가지 ~ 최대 5 가지 까지 제한하는 것을 권장. Md(middle) 을 기본 사이즈로 함.</div>
              </div>
            </div>
          </div>
        </section>

        <section data-seq={`20230711165255846`}>
          <div className={`H-Box`}>
            <div className={`Inner`}>
              <H2>Link</H2>
              <br />
              <div className={`FormLinkBox`}>
                <a className={`FormLinkMove ButtonStyle1 border border-[var(--color1)]`} href={`#ButtonStyle1`}>
                  Button Style 1
                </a>
                <a className={`FormLinkMove ButtonStyle2 border border-[var(--color1)]`} href={`#ButtonStyle2`}>
                  Button Style 2
                </a>
                <a className={`FormLinkMove ButtonStyle3 border border-[var(--color3)]`} href={`#ButtonStyle3`}>
                  Button Style 3
                </a>
                <a className={`FormLinkMove ButtonStyle4 border border-[var(--color3)]`} href={`#ButtonStyle4`}>
                  Button Style 4
                </a>
                <a className={`FormLinkMove InputUi text-[var(--form-border-color)]`} href={`#Input`}>
                  Input
                </a>
                <a className={`FormLinkMove SelectUi !text-[var(--color1)]`} href={`#Select`}>
                  Select
                </a>
              </div>
            </div>
          </div>
        </section>

        <section data-seq={`20230627060547861`} id={`ButtonStyle1`}>
          <div className={`H-Box`}>
            <div className={`Inner`}>
              <H2>Button</H2>
              <br />
              <H3>Style1</H3>
              <div>
                <div className={`FormUiBox`}>
                  <H3>Xl ( 58px )</H3>
                  <div className={`FormUiList`}>
                    <div>
                      <H4>default</H4>
                      <button className={`ButtonXl ButtonStyle1`}>Button</button>
                    </div>
                    <div>
                      <H4>:hover</H4>
                      <div>X</div>
                    </div>
                    <div>
                      <H4>:focus</H4>
                      <div>X</div>
                    </div>
                    <div>
                      <H4>:active</H4>
                      <div>X</div>
                    </div>
                    <div>
                      <H4>.round</H4>
                      <button className={`ButtonXl ButtonStyle1 Round`}>Button</button>
                    </div>
                    <div>
                      <H4>icon</H4>
                      <button className={`ButtonXl ButtonStyle1`}>
                        <img className={`w-[1em]`} src={`/icons_pc/icon_2_1.svg`} alt={``} />
                        <div>Button</div>
                      </button>
                    </div>
                    <div>
                      <H4>disabled</H4>
                      <button className={`ButtonXl ButtonStyle1`} disabled={true}>
                        Button
                      </button>
                    </div>
                  </div>
                </div>
                <div className={`FormUiBox mt-[20px]`}>
                  <H3>Lg ( 48px )</H3>
                  <div className={`FormUiList`}>
                    <div>
                      <H4>default</H4>
                      <button className={`ButtonLg ButtonStyle1`}>Button</button>
                    </div>
                    <div>
                      <H4>:hover</H4>
                      <div>X</div>
                    </div>
                    <div>
                      <H4>:focus</H4>
                      <div>X</div>
                    </div>
                    <div>
                      <H4>:active</H4>
                      <div>X</div>
                    </div>
                    <div>
                      <H4>.round</H4>
                      <button className={`ButtonLg ButtonStyle1 Round`}>Button</button>
                    </div>
                    <div>
                      <H4>icon</H4>
                      <button className={`ButtonLg ButtonStyle1`}>
                        <img className={`w-[1em]`} src={`/icons_pc/icon_2_1.svg`} alt={``} />
                        <div>Button</div>
                      </button>
                    </div>
                    <div>
                      <H4>disabled</H4>
                      <button className={`ButtonLg ButtonStyle1`} disabled={true}>
                        Button
                      </button>
                    </div>
                  </div>
                </div>
                <div className={`FormUiBox mt-[20px] text-[red]`}>
                  <H3>Md ( 36px )</H3>
                  <div className={`FormUiList`}>
                    <div>
                      <H4>default</H4>
                      <button className={`ButtonMd ButtonStyle1`}>Button</button>
                    </div>
                    <div>
                      <H4>:hover</H4>
                      <div>X</div>
                    </div>
                    <div>
                      <H4>:focus</H4>
                      <div>X</div>
                    </div>
                    <div>
                      <H4>:active</H4>
                      <div>X</div>
                    </div>
                    <div>
                      <H4>.round</H4>
                      <button className={`ButtonMd ButtonStyle1 Round`}>Button</button>
                    </div>
                    <div>
                      <H4>icon</H4>
                      <button className={`ButtonMd ButtonStyle1`}>
                        <img className={`w-[1em]`} src={`/icons_pc/icon_2_1.svg`} alt={``} />
                        <div>Button</div>
                      </button>
                    </div>
                    <div>
                      <H4>disabled</H4>
                      <button className={`ButtonMd ButtonStyle1`} disabled={true}>
                        Button
                      </button>
                    </div>
                  </div>
                </div>
                <div className={`FormUiBox mt-[20px]`}>
                  <H3>Sm ( 28px )</H3>
                  <div className={`FormUiList`}>
                    <div>
                      <H4>default</H4>
                      <button className={`ButtonSm ButtonStyle1`}>Button</button>
                    </div>
                    <div>
                      <H4>:hover</H4>
                      <div>X</div>
                    </div>
                    <div>
                      <H4>:focus</H4>
                      <div>X</div>
                    </div>
                    <div>
                      <H4>:active</H4>
                      <div>X</div>
                    </div>
                    <div>
                      <H4>.round</H4>
                      <button className={`ButtonSm ButtonStyle1 Round`}>Button</button>
                    </div>
                    <div>
                      <H4>icon</H4>
                      <button className={`ButtonSm ButtonStyle1`}>
                        <img className={`w-[1em]`} src={`/icons_pc/icon_2_1.svg`} alt={``} />
                        <div>Button</div>
                      </button>
                    </div>
                    <div>
                      <H4>disabled</H4>
                      <button className={`ButtonSm ButtonStyle1`} disabled={true}>
                        Button
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section data-seq={`20230627060547861`} id={`ButtonStyle2`}>
          <div className={`H-Box`}>
            <div className={`Inner`}>
              <H3>Style2</H3>
              <div>
                <div className={`FormUiBox`}>
                  <H3>Xl ( 58px )</H3>
                  <div className={`FormUiList`}>
                    <div>
                      <H4>default</H4>
                      <button className={`ButtonXl ButtonStyle2`}>Button</button>
                    </div>
                    <div>
                      <H4>:hover</H4>
                      <div>X</div>
                    </div>
                    <div>
                      <H4>:focus</H4>
                      <div>X</div>
                    </div>
                    <div>
                      <H4>:active</H4>
                      <div>X</div>
                    </div>
                    <div>
                      <H4>.round</H4>
                      <button className={`ButtonXl ButtonStyle2 Round`}>Button</button>
                    </div>
                  </div>
                </div>
                <div className={`FormUiBox mt-[20px]`}>
                  <H3>Lg ( 48px )</H3>
                  <div className={`FormUiList`}>
                    <div>
                      <H4>default</H4>
                      <button className={`ButtonLg ButtonStyle2`}>Button</button>
                    </div>
                    <div>
                      <H4>:hover</H4>
                      <div>X</div>
                    </div>
                    <div>
                      <H4>:focus</H4>
                      <div>X</div>
                    </div>
                    <div>
                      <H4>:active</H4>
                      <div>X</div>
                    </div>
                    <div>
                      <H4>.round</H4>
                      <button className={`ButtonLg ButtonStyle2 Round`}>Button</button>
                    </div>
                  </div>
                </div>
                <div className={`FormUiBox mt-[20px] text-[red]`}>
                  <H3>Md ( 36px )</H3>
                  <div className={`FormUiList`}>
                    <div>
                      <H4>default</H4>
                      <button className={`ButtonMd ButtonStyle2`}>Button</button>
                    </div>
                    <div>
                      <H4>:hover</H4>
                      <div>X</div>
                    </div>
                    <div>
                      <H4>:focus</H4>
                      <div>X</div>
                    </div>
                    <div>
                      <H4>:active</H4>
                      <div>X</div>
                    </div>
                    <div>
                      <H4>.round</H4>
                      <button className={`ButtonMd ButtonStyle2 Round`}>Button</button>
                    </div>
                  </div>
                </div>
                <div className={`FormUiBox mt-[20px]`}>
                  <H3>Sm ( 28px )</H3>
                  <div className={`FormUiList`}>
                    <div>
                      <H4>default</H4>
                      <button className={`ButtonSm ButtonStyle2`}>Button</button>
                    </div>
                    <div>
                      <H4>:hover</H4>
                      <div>X</div>
                    </div>
                    <div>
                      <H4>:focus</H4>
                      <div>X</div>
                    </div>
                    <div>
                      <H4>:active</H4>
                      <div>X</div>
                    </div>
                    <div>
                      <H4>.round</H4>
                      <button className={`ButtonSm ButtonStyle2 Round`}>Button</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section data-seq={`20230627060547861`} id={`ButtonStyle3`}>
          <div className={`H-Box`}>
            <div className={`Inner`}>
              <H3>Style3</H3>
              <div>
                <div className={`FormUiBox`}>
                  <H3>Xl ( 58px )</H3>
                  <div className={`FormUiList`}>
                    <div>
                      <H4>default</H4>
                      <button className={`ButtonXl ButtonStyle3`}>Button</button>
                    </div>
                    <div>
                      <H4>:hover</H4>
                      <div>X</div>
                    </div>
                    <div>
                      <H4>:focus</H4>
                      <div>X</div>
                    </div>
                    <div>
                      <H4>:active</H4>
                      <div>X</div>
                    </div>
                    <div>
                      <H4>.round</H4>
                      <button className={`ButtonXl ButtonStyle3 Round`}>Button</button>
                    </div>
                  </div>
                </div>
                <div className={`FormUiBox mt-[20px]`}>
                  <H3>Lg ( 48px )</H3>
                  <div className={`FormUiList`}>
                    <div>
                      <H4>default</H4>
                      <button className={`ButtonLg ButtonStyle3`}>Button</button>
                    </div>
                    <div>
                      <H4>:hover</H4>
                      <div>X</div>
                    </div>
                    <div>
                      <H4>:focus</H4>
                      <div>X</div>
                    </div>
                    <div>
                      <H4>:active</H4>
                      <div>X</div>
                    </div>
                    <div>
                      <H4>.round</H4>
                      <button className={`ButtonLg ButtonStyle3 Round`}>Button</button>
                    </div>
                  </div>
                </div>
                <div className={`FormUiBox mt-[20px] text-[red]`}>
                  <H3>Md ( 36px )</H3>
                  <div className={`FormUiList`}>
                    <div>
                      <H4>default</H4>
                      <button className={`ButtonMd ButtonStyle3`}>Button</button>
                    </div>
                    <div>
                      <H4>:hover</H4>
                      <div>X</div>
                    </div>
                    <div>
                      <H4>:focus</H4>
                      <div>X</div>
                    </div>
                    <div>
                      <H4>:active</H4>
                      <div>X</div>
                    </div>
                    <div>
                      <H4>.round</H4>
                      <button className={`ButtonMd ButtonStyle3 Round`}>Button</button>
                    </div>
                  </div>
                </div>
                <div className={`FormUiBox mt-[20px]`}>
                  <H3>Sm ( 28px )</H3>
                  <div className={`FormUiList`}>
                    <div>
                      <H4>default</H4>
                      <button className={`ButtonSm ButtonStyle3`}>Button</button>
                    </div>
                    <div>
                      <H4>:hover</H4>
                      <div>X</div>
                    </div>
                    <div>
                      <H4>:focus</H4>
                      <div>X</div>
                    </div>
                    <div>
                      <H4>:active</H4>
                      <div>X</div>
                    </div>
                    <div>
                      <H4>.round</H4>
                      <button className={`ButtonSm ButtonStyle3 Round`}>Button</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section data-seq={`20230627060547861`} id={`ButtonStyle4`}>
          <div className={`H-Box`}>
            <div className={`Inner`}>
              <H3>Style4</H3>
              <div>
                <div className={`FormUiBox`}>
                  <H3>Xl ( 58px )</H3>
                  <div className={`FormUiList`}>
                    <div>
                      <H4>default</H4>
                      <button className={`ButtonXl ButtonStyle4`}>Button</button>
                    </div>
                    <div>
                      <H4>:hover</H4>
                      <button className={`ButtonXl ButtonStyle4 hover`}>Button</button>
                    </div>
                    <div>
                      <H4>:focus</H4>
                      <div>X</div>
                    </div>
                    <div>
                      <H4>:active</H4>
                      <div>X</div>
                    </div>
                    <div>
                      <H4>.round</H4>
                      <button className={`ButtonXl ButtonStyle4 Round`}>Button</button>
                    </div>
                  </div>
                </div>
                <div className={`FormUiBox mt-[20px]`}>
                  <H3>Lg ( 48px )</H3>
                  <div className={`FormUiList`}>
                    <div>
                      <H4>default</H4>
                      <button className={`ButtonLg ButtonStyle4`}>Button</button>
                    </div>
                    <div>
                      <H4>:hover</H4>
                      <button className={`ButtonLg ButtonStyle4 hover`}>Button</button>
                    </div>
                    <div>
                      <H4>:focus</H4>
                      <div>X</div>
                    </div>
                    <div>
                      <H4>:active</H4>
                      <div>X</div>
                    </div>
                    <div>
                      <H4>.round</H4>
                      <button className={`ButtonLg ButtonStyle4 Round`}>Button</button>
                    </div>
                  </div>
                </div>
                <div className={`FormUiBox mt-[20px] text-[red]`}>
                  <H3>Md ( 36px )</H3>
                  <div className={`FormUiList`}>
                    <div>
                      <H4>default</H4>
                      <button className={`ButtonMd ButtonStyle4`}>Button</button>
                    </div>
                    <div>
                      <H4>:hover</H4>
                      <button className={`ButtonMd ButtonStyle4 hover`}>Button</button>
                    </div>
                    <div>
                      <H4>:focus</H4>
                      <div>X</div>
                    </div>
                    <div>
                      <H4>:active</H4>
                      <div>X</div>
                    </div>
                    <div>
                      <H4>.round</H4>
                      <button className={`ButtonMd ButtonStyle4 Round`}>Button</button>
                    </div>
                  </div>
                </div>
                <div className={`FormUiBox mt-[20px]`}>
                  <H3>Sm ( 28px )</H3>
                  <div className={`FormUiList`}>
                    <div>
                      <H4>default</H4>
                      <button className={`ButtonSm ButtonStyle4`}>Button</button>
                    </div>
                    <div>
                      <H4>:hover</H4>
                      <button className={`ButtonSm ButtonStyle4 hover`}>Button</button>
                    </div>
                    <div>
                      <H4>:focus</H4>
                      <div>X</div>
                    </div>
                    <div>
                      <H4>:active</H4>
                      <div>X</div>
                    </div>
                    <div>
                      <H4>.round</H4>
                      <button className={`ButtonSm ButtonStyle4 Round`}>Button</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section data-seq={`20230627060547861`} id={`Input`}>
          <div className={`H-Box`}>
            <div className={`Inner`}>
              <H2>Input</H2>
              <div className={`FormUiBox`}>
                <H3>Xl ( 58px )</H3>
                <div className={`FormUiList`}>
                  <div>
                    <H4>default</H4>
                    <div className={`InputUi InputXl w-full`} data-form-hei={`Xl`}>
                      <input placeholder={`InputUi`} />
                    </div>
                  </div>
                  <div>
                    <H4>.focus</H4>
                    <div className={`InputUi InputXl focus w-full`} data-form-hei={`Xl`}>
                      <input placeholder={`InputUi`} />
                    </div>
                  </div>
                  <div>
                    <H4>.error</H4>
                    <div className={`InputUi InputXl error w-full`} data-form-hei={`Xl`}>
                      <input placeholder={`InputUi`} />
                    </div>
                  </div>
                  <div>
                    <H4>.readonly</H4>
                    <div className={`InputUi InputXl readonly w-full`} data-form-hei={`Xl`}>
                      <input defaultValue={`TestValue`} readOnly={true} />
                    </div>
                  </div>
                  <div>
                    <H4>icon</H4>
                    <div className={`InputUi InputXl w-full`} data-form-hei={`Xl`}>
                      <input placeholder={`InputUi`} />
                      <button>
                        <img src={`/icons/basic/dropdown_arrow.svg`} alt={``} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`FormUiBox mt-[20px]`}>
                <H3>Lg ( 48px )</H3>
                <div className={`FormUiList`}>
                  <div>
                    <H4>default</H4>
                    <div className={`InputUi InputLg w-full`} data-form-hei={`Lg`}>
                      <input placeholder={`InputUi`} />
                    </div>
                  </div>
                  <div>
                    <H4>.focus</H4>
                    <div className={`InputUi InputLg focus w-full`} data-form-hei={`Lg`}>
                      <input placeholder={`InputUi`} />
                    </div>
                  </div>
                  <div>
                    <H4>.error</H4>
                    <div className={`InputUi InputLg error w-full`} data-form-hei={`Lg`}>
                      <input placeholder={`InputUi`} />
                    </div>
                  </div>
                  <div>
                    <H4>.readonly</H4>
                    <div className={`InputUi InputLg readonly w-full`} data-form-hei={`Lg`}>
                      <input defaultValue={`TestValue`} readOnly={true} />
                    </div>
                  </div>
                  <div>
                    <H4>icon</H4>
                    <div className={`InputUi InputLg w-full`} data-form-hei={`Lg`}>
                      <input placeholder={`InputUi`} />
                      <button>
                        <img src={`/icons/basic/dropdown_arrow.svg`} alt={``} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`FormUiBox mt-[20px] text-[red]`}>
                <H3>Md ( 36px )</H3>
                <div className={`FormUiList`}>
                  <div>
                    <H4>default</H4>
                    <div className={`InputUi InputMd w-full`} data-form-hei={`Md`}>
                      <input placeholder={`InputUi`} />
                    </div>
                  </div>
                  <div>
                    <H4>.focus</H4>
                    <div className={`InputUi InputMd focus w-full`} data-form-hei={`Md`}>
                      <input placeholder={`InputUi`} />
                    </div>
                  </div>
                  <div>
                    <H4>.error</H4>
                    <div className={`InputUi InputMd error w-full`} data-form-hei={`Md`}>
                      <input placeholder={`InputUi`} />
                    </div>
                  </div>
                  <div>
                    <H4>.readonly</H4>
                    <div className={`InputUi InputMd readonly w-full`} data-form-hei={`Md`}>
                      <input defaultValue={`TestValue`} readOnly={true} />
                    </div>
                  </div>
                  <div>
                    <H4>icon</H4>
                    <div className={`InputUi InputMd w-full`} data-form-hei={`Md`}>
                      <input placeholder={`InputUi`} />
                      <button>
                        <img src={`/icons/basic/dropdown_arrow.svg`} alt={``} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`FormUiBox mt-[20px]`}>
                <H3>Sm ( 28px )</H3>
                <div className={`FormUiList`}>
                  <div>
                    <H4>default</H4>
                    <div className={`InputUi InputSm w-full`} data-form-hei={`Sm`}>
                      <input placeholder={`InputUi`} />
                    </div>
                  </div>
                  <div>
                    <H4>.focus</H4>
                    <div className={`InputUi InputSm focus w-full`} data-form-hei={`Sm`}>
                      <input placeholder={`InputUi`} />
                    </div>
                  </div>
                  <div>
                    <H4>.error</H4>
                    <div className={`InputUi InputSm error w-full`} data-form-hei={`Sm`}>
                      <input placeholder={`InputUi`} />
                    </div>
                  </div>
                  <div>
                    <H4>.readonly</H4>
                    <div className={`InputUi InputSm readonly w-full`} data-form-hei={`Sm`}>
                      <input defaultValue={`TestValue`} readOnly={true} />
                    </div>
                  </div>
                  <div>
                    <H4>icon</H4>
                    <div className={`InputUi InputSm w-full`} data-form-hei={`Sm`}>
                      <input placeholder={`InputUi`} />
                      <button>
                        <img src={`/icons/basic/dropdown_arrow.svg`} alt={``} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section data-seq={`20230627060547861`} id={`Select`}>
          <div className={`H-Box`}>
            <div className={`Inner`}>
              <H2>Select</H2>
              <div className={`FormUiBox`}>
                <H3>Xl ( 58px )</H3>
                <div className={`FormUiList`}>
                  <div>
                    <H4>default</H4>
                    <div className={`SelectUi w-full`} data-form-hei={`Xl`}>
                      <button>
                        <div>신상품 10%</div>
                      </button>
                      <div className={`Options`}>
                        <button>A</button>
                        <button>B</button>
                        <button>C</button>
                      </div>
                    </div>
                  </div>
                  <div>
                    <H4>.focus</H4>
                    <div className={`SelectUi focus w-full`} data-form-hei={`Xl`}>
                      <button>
                        <div>신상품 10%</div>
                      </button>
                      <div className={`Options`}>
                        <button>A</button>
                        <button>B</button>
                        <button>C</button>
                      </div>
                    </div>
                  </div>
                  <div>
                    <H4>.On</H4>
                    <div className={`SelectUi On w-full`} data-form-hei={`Xl`}>
                      <button>
                        <div>신상품 10%</div>
                      </button>
                      <div className={`Options`}>
                        <button>A</button>
                        <button>B</button>
                        <button>C</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`FormUiBox mt-[130px]`}>
                <H3>Lg ( 48px )</H3>
                <div className={`FormUiList`}>
                  <div>
                    <H4>default</H4>
                    <div className={`SelectUi w-full`} data-form-hei={`Lg`}>
                      <button>
                        <div>신상품 10%</div>
                      </button>
                      <div className={`Options`}>
                        <button>A</button>
                        <button>B</button>
                        <button>C</button>
                      </div>
                    </div>
                  </div>
                  <div>
                    <H4>.focus</H4>
                    <div className={`SelectUi focus w-full`} data-form-hei={`Lg`}>
                      <button>
                        <div>신상품 10%</div>
                      </button>
                      <div className={`Options`}>
                        <button>A</button>
                        <button>B</button>
                        <button>C</button>
                      </div>
                    </div>
                  </div>
                  <div>
                    <H4>.On</H4>
                    <div className={`SelectUi On w-full`} data-form-hei={`Lg`}>
                      <button>
                        <div>신상품 10%</div>
                      </button>
                      <div className={`Options`}>
                        <button>A</button>
                        <button>B</button>
                        <button>C</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`FormUiBox mt-[130px] text-[red]`}>
                <H3>Md ( 36px )</H3>
                <div className={`FormUiList`}>
                  <div>
                    <H4>default</H4>
                    <div className={`SelectUi w-full`} data-form-hei={`Md`}>
                      <button>
                        <div>신상품 10%</div>
                      </button>
                      <div className={`Options`}>
                        <button>A</button>
                        <button>B</button>
                        <button>C</button>
                      </div>
                    </div>
                  </div>
                  <div>
                    <H4>.focus</H4>
                    <div className={`SelectUi focus w-full`} data-form-hei={`Md`}>
                      <button>
                        <div>신상품 10%</div>
                      </button>
                      <div className={`Options`}>
                        <button>A</button>
                        <button>B</button>
                        <button>C</button>
                      </div>
                    </div>
                  </div>
                  <div>
                    <H4>.On</H4>
                    <div className={`SelectUi On w-full`} data-form-hei={`Md`}>
                      <button>
                        <div>신상품 10%</div>
                      </button>
                      <div className={`Options`}>
                        <button>A</button>
                        <button>B</button>
                        <button>C</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`FormUiBox mt-[130px]`}>
                <H3>Sm ( 28px )</H3>
                <div className={`FormUiList`}>
                  <div>
                    <H4>default</H4>
                    <div className={`SelectUi w-full`} data-form-hei={`Sm`}>
                      <button>
                        <div>신상품 10%</div>
                      </button>
                      <div className={`Options`}>
                        <button>A</button>
                        <button>B</button>
                        <button>C</button>
                      </div>
                    </div>
                  </div>
                  <div>
                    <H4>.focus</H4>
                    <div className={`SelectUi focus w-full`} data-form-hei={`Sm`}>
                      <button>
                        <div>신상품 10%</div>
                      </button>
                      <div className={`Options`}>
                        <button>A</button>
                        <button>B</button>
                        <button>C</button>
                      </div>
                    </div>
                  </div>
                  <div>
                    <H4>.On</H4>
                    <div className={`SelectUi On w-full`} data-form-hei={`Sm`}>
                      <button>
                        <div>신상품 10%</div>
                      </button>
                      <div className={`Options`}>
                        <button>A</button>
                        <button>B</button>
                        <button>C</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

PageFormGuide.Layout = LayoutBasic;
export default PageFormGuide;
