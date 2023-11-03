import AccordionBox from '@/components/common/AccordionBox';
import H1 from '@/components/common/H1';
import H2 from '@/components/common/H2';
import TabBtnBox from '@/components/common/TabBtnBox';
import TabChildBox from '@/components/common/TabChildBox';
import Table from '@/components/common/Table';
import CheckBox from '@/components/form/CheckBox';
import CheckBox1 from '@/components/form/CheckBox1';
import CustomSelect from '@/components/form/CustomSelect';
import RadioBtn from '@/components/form/RadioBtn';
import SelectBox from '@/components/form/SelectBox';
import SwitchBtn from '@/components/form/SwitchBtn';
import TextInput from '@/components/form/TextInput';
import LayoutMarkup from '@/layouts/LayoutMarkup';
import ColorChip16 from '@/modules/ColorChip16';
import ColorChip20 from '@/modules/ColorChip20';
import ColorChip24 from '@/modules/ColorChip24';
import ColorChip30 from '@/modules/ColorChip30';
import ColorChip34 from '@/modules/ColorChip34';
import TermsBox from '@/modules/TermsBox';
import TreeMenu from '@/modules/TreeMenu';
import {Data} from '@/scripts/data_manager';
import {Util} from '@/scripts/util';
import {Fragment} from 'react';

function PageTemplate() {
  const button_style_count = 4;
  return (
    <div className={`PageTemplate`}>
      <section data-seq={`20230712160937762`} className={``}>
        <H1>Title</H1>
        <br />
        <div className={`Title-1`}>
          <div className={`Txt1`}>1:1문의 게시판</div>
          <div className={`Txt2`}>각 항목별로 더 많은 궁금증을 해결하실 수 있습니다.</div>
        </div>
        <br />
        <div className={`Title-2`}>
          <div className={`Txt1`}>재입고 알림 신청 리스트</div>
          <div className={`Txt2`}>최근 30일 내에 진행중인 주문 정보입니다</div>
        </div>
      </section>
      <section data-seq={`20230704093308598`} className={``}>
        <H1>TabUi</H1>
        <div className={`TabUi1`}>
          {['상세정보', '기본정보', '후기(000)', '문의'].map((obj, idx) => {
            return (
              <Fragment key={idx}>
                <button className={`${idx == 0 && `On`} TabButton1`}>{obj}</button>
              </Fragment>
            );
          })}
        </div>
        <br />
        <div className={`TabUi2`}>
          {['BUTTON', 'BUTTON', 'BUTTON', 'BUTTON'].map((obj, idx) => {
            return (
              <Fragment key={idx}>
                <button className={`${idx == 1 && `On`}`}>{obj}</button>
              </Fragment>
            );
          })}
        </div>
        <br />
        <div className={`TabUi3`}>
          {['BUTTON', 'BUTTON', 'BUTTON', 'BUTTON'].map((obj, idx) => {
            return (
              <Fragment key={idx}>
                <button className={`${idx == 1 && `On`}`}>{obj}</button>
              </Fragment>
            );
          })}
        </div>
        <br />
        <div className={`TabUi4`}>
          {['BUTTON', 'BUTTON', 'BUTTON', 'BUTTON'].map((obj, idx) => {
            return (
              <Fragment key={idx}>
                <button className={`${idx == 1 && `On`}`}>{obj}</button>
              </Fragment>
            );
          })}
        </div>
      </section>
      <br />
      <br />
      <br />
      <section data-seq={`20230630082920022`} className={``}>
        <H1>TermsBox</H1>
        <div>
          <TermsBox className={`h-[258px]`} />
        </div>
        <div className={`mt-[14px]`}>
          <CheckBox1>
            <span className={`text-[var(--color13)]`}>(필수)</span> 만 14세 이상입니다.
          </CheckBox1>
          <div className={`mt-[7px]`}>
            <CheckBox1>TBH SHOP의 모든 약관을 확인하고 전체 동의합니다. (전체동의, 선택항목도 포함됩니다.)</CheckBox1>
          </div>
        </div>
        <div className={`mt-[14px] flex flex-row items-center gap-[0]`}>
          <CheckBox1>
            <span className={`text-[var(--color13)]`}>(필수)</span>
            &nbsp;
            <span>비회원 글 작성에 대한 개인정보 수집 및 이용동의</span>
          </CheckBox1>
          <a
            href='https://www.google.com'
            target='_blank'
            className={`ml-[9px] inline-flex flex-row items-center justify-center gap-[0] text-[14px] font-[400] text-[var(--color5)]`}>
            전체보기
            <img src={`/icons/zco_72.svg`} alt={``} />
          </a>
        </div>
      </section>
      <br />
      <br />
      <br />
      <section data-seq={`20230624072634939`} className={``}>
        <H1>ColorButton</H1>
        <br />
        <H2>ColorButton34</H2>
        <div className={`mt-[17px] flex flex-row items-end gap-[0]`}>
          <ColorChip34 />
          <div className={`Montserrat ml-[13px] text-[12px] font-[500] leading-[34px] text-[var(--color1)]`}>WHITE</div>
        </div>
        <br />
        <H2>ColorButton30</H2>
        <div className={`mt-[17px] flex flex-row items-end gap-[0]`}>
          <ColorChip30 />
          <div className={`Montserrat ml-[13px] text-[12px] font-[500] leading-[30px] text-[var(--color1)]`}>WHITE</div>
        </div>
        <br />
        <H2>ColorButton24</H2>
        <div className={`mt-[17px] flex flex-row items-end gap-[0]`}>
          <ColorChip24 />
          <div className={`Montserrat ml-[13px] text-[12px] font-[500] leading-[24px] text-[var(--color1)]`}>WHITE</div>
        </div>
        <br />
        <H2>ColorButton20</H2>
        <div className={`mt-[17px] flex flex-row items-end gap-[0]`}>
          <ColorChip20 />
          <div className={`Montserrat ml-[13px] text-[12px] font-[500] leading-[20px] text-[var(--color1)]`}>WHITE</div>
        </div>
        <br />
        <H2>ColorButton16</H2>
        <div className={`mt-[17px] flex flex-row items-end gap-[0]`}>
          <ColorChip16 />
          <div className={`Montserrat ml-[13px] text-[12px] font-[500] leading-[16px] text-[var(--color1)]`}>WHITE</div>
        </div>
      </section>
      <br />
      <br />
      <br />
      <section data-seq={`20230624072634939`} className={``}>
        <H1>SizeButton</H1>
        <H2>SizeButton36</H2>
        <div className={`mt-[17px] flex flex-row items-end gap-[0]`}>
          <article className={`inline-grid grid-cols-10 gap-[5px]`}>
            {Array.from(Array(3)).map((obj, idx) => {
              return (
                <Fragment key={idx}>
                  {Array.from(Array(2)).map((obj, idx) => {
                    return (
                      <Fragment key={idx}>
                        <button className={`SizeButton36`}>030</button>
                        <button className={`SizeButton36 On`}>030</button>
                        <button className={`SizeButton36 Disabled`}>030</button>
                      </Fragment>
                    );
                  })}
                </Fragment>
              );
            })}
          </article>
        </div>
        <H2>SizeButton34</H2>
        <div className={`mt-[17px] flex flex-row items-end gap-[0]`}>
          <article className={`inline-grid grid-cols-10 gap-[5px]`}>
            {Array.from(Array(3)).map((obj, idx) => {
              return (
                <Fragment key={idx}>
                  {Array.from(Array(2)).map((obj, idx) => {
                    return (
                      <Fragment key={idx}>
                        <button className={`SizeButton34`}>030</button>
                        <button className={`SizeButton34 On`}>030</button>
                        <button className={`SizeButton34 Disabled`}>030</button>
                      </Fragment>
                    );
                  })}
                </Fragment>
              );
            })}
          </article>
        </div>
        <H2>SizeButton32</H2>
        <div className={`mt-[17px] flex flex-row items-end gap-[0]`}>
          <article className={`inline-grid grid-cols-10 gap-[5px]`}>
            {Array.from(Array(3)).map((obj, idx) => {
              return (
                <Fragment key={idx}>
                  {Array.from(Array(2)).map((obj, idx) => {
                    return (
                      <Fragment key={idx}>
                        <button className={`SizeButton32`}>030</button>
                        <button className={`SizeButton32 On`}>030</button>
                        <button className={`SizeButton32 Disabled`}>030</button>
                      </Fragment>
                    );
                  })}
                </Fragment>
              );
            })}
          </article>
        </div>
        <H2>SizeButton28</H2>
        <div className={`mt-[17px] flex flex-row items-end gap-[0]`}>
          <article className={`inline-grid grid-cols-10 gap-[5px]`}>
            {Array.from(Array(3)).map((obj, idx) => {
              return (
                <Fragment key={idx}>
                  {Array.from(Array(2)).map((obj, idx) => {
                    return (
                      <Fragment key={idx}>
                        <button className={`SizeButton28`}>030</button>
                        <button className={`SizeButton28 On`}>030</button>
                        <button className={`SizeButton28 Disabled`}>030</button>
                      </Fragment>
                    );
                  })}
                </Fragment>
              );
            })}
          </article>
        </div>
      </section>
      <br />
      <br />
      <br />
      <section data-seq='20230330083344826'>
        <H1>TabBtnBox</H1>
        <TabBtnBox theme={`1`} uuid={`594c28d8-1aa3-44a2-a2b9-9c4e854c5276`}>
          <button className={`On`}>1</button>
          <button>2</button>
          <button>3</button>
        </TabBtnBox>
        <TabChildBox uuid='594c28d8-1aa3-44a2-a2b9-9c4e854c5276'>
          <div className={`On`}>
            <div>1</div>
          </div>
          <div>
            <div>2</div>
          </div>
          <div>
            <div>3</div>
          </div>
        </TabChildBox>
        <TabBtnBox theme={`2`} uuid={`b75929ad-a126-4603-a70d-6b49b8b4e032`}>
          <button className={`On`}>A</button>
          <button>B</button>
          <button>C</button>
        </TabBtnBox>
        <TabChildBox uuid='b75929ad-a126-4603-a70d-6b49b8b4e032'>
          <div className={`On`}>
            <div>A</div>
          </div>
          <div>
            <div>B</div>
          </div>
          <div>
            <div>C</div>
          </div>
        </TabChildBox>
      </section>
      <br />
      <br />
      <br />
      <section data-seq='20230211130644060'>
        <H1>SWITCH</H1>
        <SwitchBtn>스위치1</SwitchBtn>
        <SwitchBtn>스위치2</SwitchBtn>
      </section>
      <br />
      <br />
      <br />
      <section data-seq='20230211130644060'>
        <H1>INPUT</H1>
        <div>
          <TextInput
            defaultValue={`KSM`}
            onClick={(evt) => {
              console.log(evt.target);
            }}
          />
          <TextInput placeholder={`NICE`} />
        </div>
        <br />
        <H2>size</H2>
        <div className={`grid grid-cols-3 items-center gap-2`}>
          <TextInput size={'SM'} defaultValue={`size SM`} />
          <TextInput defaultValue={`size Default`} />
          <TextInput size={'LG'} defaultValue={`size LG`} />
        </div>
      </section>
      <br />
      <br />
      <br />
      <section data-seq={`20230621004319024`} className={``}>
        <H1>INPUT TYPE 2</H1>
        <div>
          <input className={`TextInput2`} type={`text`} />
        </div>
        <br />
        <div>
          <input className={`TextInput2`} type={`text`} defaultValue={'티비에이치'} />
        </div>
        <br />
        <div>
          <div className={`relative inline-block w-[270px]`}>
            <input className={`TextInput2 On w-full`} type={`text`} defaultValue={`활성화 시`} />
            <div className={`Options`}>
              {[
                '배송 전에 연락주세요 배송 전에 연락주세요 배송 전에 연락주세요',
                '부재시 경비실에 맡겨주세요',
                '부재시 문 앞에 놓아주세요',
                '파손되지 않게 조심히 배송해 주세요',
              ].map((obj, idx) => {
                return (
                  <Fragment key={idx}>
                    <button>{obj}</button>
                  </Fragment>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <section data-seq={`20230627100827152`} className={``}>
        <H1>INPUT TYPE 3</H1>
        <div className={`TextInput3 w-[150px]`}>
          <input
            className={`w-0 grow`}
            type={`text`}
            onFocus={(evt) => {
              const el_parent = evt.target.parentElement;
              el_parent.classList.add('focus');
            }}
            onBlur={(evt) => {
              const el_parent = evt.target.parentElement;
              el_parent.classList.remove('focus');
            }}
          />
          <button className={`w-[20px]`}>
            <img src={`/icons/zco_70.svg`} alt={``} />
          </button>
        </div>
        <br />
        <br />
        <div className={`TextInput3 w-[150px]`}>
          <input
            className={`w-0 grow`}
            type={`text`}
            onFocus={(evt) => {
              const el_parent = evt.target.parentElement;
              el_parent.classList.add('focus');
            }}
            onBlur={(evt) => {
              const el_parent = evt.target.parentElement;
              el_parent.classList.remove('focus');
            }}
          />
          <button className={`w-[20px]`}>
            <img src={`/icons/zco_63.svg`} alt={`날짜선택`} />
          </button>
        </div>
      </section>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <section data-seq='20230211130644060'>
        <H1>TEXTAREA</H1>
        <textarea className={`TAREA-1`} placeholder={`placeholder`}></textarea>
      </section>
      <br />
      <br />
      <br />
      <section data-seq='20230406102840840'>
        <H1>TABLE</H1>
        <Table>
          <colgroup>
            <col className={`w-[150px]`} />
            <col />
          </colgroup>
          <thead>
            <tr>
              <th>A</th>
              <th>B</th>
              <th>C</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>2</td>
              <td>3</td>
            </tr>
          </tbody>
        </Table>
      </section>
      <br />
      <br />
      <br />
      <section data-seq='20230211122919867'>
        <H1>RADIO</H1>
        <div className={`grid grid-cols-[repeat(auto-fit,_minmax(0,_1fr))] items-center gap-2`}>
          {['🍎', '🍋', '🥑'].map((obj, idx) => {
            return (
              <Fragment key={idx}>
                <RadioBtn name='20230211122919867'>라디오{idx}</RadioBtn>
              </Fragment>
            );
          })}
        </div>
      </section>
      <br />
      <br />
      <br />
      <section data-seq='20230211105054830'>
        <H1>CHECKBOX</H1>
        <div className={`grid grid-cols-[repeat(auto-fit,_minmax(0,_1fr))] items-center gap-2`}>
          {['🍎', '🍋', '🥑'].map((obj, idx) => {
            return (
              <Fragment key={idx}>
                <CheckBox>체크{idx}</CheckBox>
              </Fragment>
            );
          })}
        </div>
      </section>
      <br />
      <br />
      <br />
      <section data-seq='20230211102612645'>
        <H1>SELECT</H1>
        <div className={`grid grid-cols-3 items-center gap-2`}>
          {['SM', '', 'LG'].map((obj, idx) => {
            return (
              <Fragment key={idx}>
                <SelectBox size={obj}>
                  <option value='a'>A {obj}</option>
                  <option value='b'>B {obj}</option>
                  <option value='c'>C {obj}</option>
                </SelectBox>
              </Fragment>
            );
          })}
        </div>
      </section>
      <br />
      <br />
      <br />
      <section data-seq={`20230621085026070`} className={``}>
        <H1>SELECT TYPE 2</H1>
        <div className={`flex flex-row items-center gap-[10px]`}>
          <div className={`SelectBox1 w-full`}>
            <button>
              <div>신상품 10%</div>
            </button>
            <div className={`Options`}>
              <button>A</button>
              <button>B</button>
              <button>C</button>
            </div>
          </div>
          <div
            className={`SelectBox1 On w-full`}
            onClick={(evt) => {
              const target = evt.target.closest('.SelectBox1');
              Util.toggleClass(target, 'On');
            }}>
            <button>
              <div>주말특가 중복할인 50%</div>
            </button>
            <div className={`Options`}>
              <button>A</button>
              <button>B</button>
              <button>C</button>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </section>
      <br />
      <br />
      <br />
      <section data-seq='20230211130644060'>
        <H1>CUSTOM SELECT</H1>
        <div className={`grid grid-cols-3 items-center gap-2`}>
          {['SM', '', 'LG'].map((obj, idx) => {
            return (
              <Fragment key={idx}>
                <CustomSelect size={obj}>
                  <option value='a'>A {obj}</option>
                  <option value='b'>B {obj}</option>
                  <option value='c'>C {obj}</option>
                </CustomSelect>
              </Fragment>
            );
          })}
        </div>
      </section>
      <br />
      <br />
      <br />
      <section data-seq='20230410141340271'>
        <H1>AccordionBox</H1>
        <AccordionBox name={'4a7af3f3-905d-4703-bd54-1fbd5acbf31c'}>
          <div>Q. 질문 1</div>
          <div>
            봄이 벌써 불러 가을로 까닭입니다. 걱정도 불러 계절이 이국 패, 없이 듯합니다. 하나에 별이 써 피어나듯이
            마디씩 밤을 너무나 그리고 계십니다. 별 겨울이 나의 별 가난한 버리었습니다. 언덕 헤는 무덤 있습니다.
          </div>
        </AccordionBox>
        <br />
        <AccordionBox name={'4a7af3f3-905d-4703-bd54-1fbd5acbf31c'}>
          <div>Q. 질문 2</div>
          <div>
            위에도 나의 노루, 별 나는 밤이 잔디가 속의 거외다. 별이 토끼, 오는 멀듯이, 아스라히 위에도 아이들의 때
            이름과, 봅니다. 차 이름을 나의 하늘에는 이웃 다하지 사랑과 봅니다. 잔디가 차 걱정도 토끼, 아름다운 이국
            있습니다. 이름과, 둘 덮어 하나 까닭입니다. 슬퍼하는 하나에 프랑시스 듯합니다.
          </div>
        </AccordionBox>
        <br />
        <AccordionBox name={'4a7af3f3-905d-4703-bd54-1fbd5acbf31c'}>
          <div>Q. 질문 3</div>
          <div>
            내린 동경과 슬퍼하는 흙으로 비둘기, 별이 이제 않은 봅니다. 쉬이 없이 소학교 이름과, 둘 이네들은 같이 별을
            다하지 있습니다. 별 하나에 이름과, 있습니다. 이름을 벌레는 그리워 듯합니다. 별 겨울이 그러나 남은 가슴속에
            토끼, 릴케 아무 하늘에는 계십니다. 잠, 내 위에 헤는 된 이름을 나는 다 봅니다. 다하지 별들을 써 오면 부끄러운
            나는 별에도 이네들은 봅니다.
          </div>
        </AccordionBox>
      </section>
      <br />
      <br />
      <br />
      <section data-seq='20230413134540044'>
        <H1>TreeMenu</H1>
        <H2>Type 1 ( 2 뎁스 )</H2>
        <TreeMenu data={Data.testTree}></TreeMenu>
      </section>
    </div>
  );
}

PageTemplate.Layout = LayoutMarkup;
export default PageTemplate;
