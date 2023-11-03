import AccordionBox from '@/components/common/AccordionBox';
import H1 from '@/components/common/H1';
import H2 from '@/components/common/H2';
import TabBtnBox from '@/components/common/TabBtnBox';
import TabChildBox from '@/components/common/TabChildBox';
import Table from '@/components/common/Table';
import Btn from '@/components/form/Btn';
import CheckBox from '@/components/form/CheckBox';
import CheckBox1 from '@/components/form/CheckBox1';
import CustomSelect from '@/components/form/CustomSelect';
import RadioBtn from '@/components/form/RadioBtn';
import SelectBox from '@/components/form/SelectBox';
import SwitchBtn from '@/components/form/SwitchBtn';
import TextArea from '@/components/form/TextArea';
import TextInput from '@/components/form/TextInput';
import TextInputBox from '@/components/form/TextInputBox';
import LayoutMarkup from '@/layouts/LayoutMarkup';
import Image from 'next/image';
import { Fragment } from 'react';
import ColorChip16 from '@/modules/ColorChip16';
import ColorChip20 from '@/modules/ColorChip20';
import ColorChip24 from '@/modules/ColorChip24';
import ColorChip30 from '@/modules/ColorChip30';
import ColorChip34 from '@/modules/ColorChip34';

function PageTemplate() {
  return (
    <div className={`PageTemplate`}>
      <section data-seq={`20230624072634939`}>
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
      <section data-seq={`20230624072634939`}>
        <H1>SizeButton</H1>
        <H2>SizeButton36</H2>
        <div className={`mt-[17px] flex flex-row items-end gap-[0]`}>
          <article className={`inline-grid grid-cols-7 gap-[5px]`}>
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
          <article className={`inline-grid grid-cols-7 gap-[5px]`}>
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
          <article className={`inline-grid grid-cols-7 gap-[5px]`}>
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
          <article className={`inline-grid grid-cols-7 gap-[5px]`}>
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
      <section data-seq={`20230523133652672`}>
        <H1>Form</H1>
        <div className={`mt-[15px] space-y-[14px]`}>
          <div className={`grid grid-cols-[1fr_62px] items-center justify-center gap-[5px]`}>
            <TextInputBox>
              <input type={`text`} className={`TextInput1 w-full`} placeholder={`이메일*`} />
            </TextInputBox>
            <Btn theme={`Dark`} size={`Sm`}>
              인증완료
            </Btn>
          </div>
          <div className={`grid grid-cols-[1fr_auto] items-end justify-center gap-[5px]`}>
            <TextInputBox>
              <input type={`text`} className={`TextInput1 w-full`} placeholder={`이메일*`} />
            </TextInputBox>
            <Btn size={`Sm`}>우편번호 검색</Btn>
          </div>
          <TextInputBox>
            <div slot={`Left`}>
              <input type={`text`} className={`TextInput1 w-full`} placeholder={`이메일*`} />
            </div>
            <div slot={`Right`}>
              <div className={`flex h-full flex-row items-center justify-center gap-[3px]`}>
                <button className={`flex h-full flex-row items-center justify-center`}>
                  <Image src={`/icons/zco_11_1.svg`} width={26} height={24} alt='' />
                </button>
              </div>
            </div>
          </TextInputBox>
          <TextInputBox>
            <div slot={`Left`}>
              <input type={`text`} className={`TextInput1 w-full`} placeholder={`이메일*`} />
            </div>
            <div slot={`Right`}>
              <Image src={`/icons/zco_12.svg`} width={24} height={24} alt='' />
              <button className={`flex h-full flex-row items-center justify-center`}>
                <Image src={`/icons/zco_11_1.svg`} width={26} height={24} alt='' />
              </button>
              <button className={`flex h-full flex-row items-center justify-center`}>
                <Image src={`/icons/zco_11_2.svg`} width={26} height={24} alt='' />
              </button>
              <Image src={`/icons/zco_13.svg`} width={24} height={24} alt='' />
            </div>
          </TextInputBox>
          <div className={`WarnTxt1`}>
            <div className={`text-[var(--color13)]`}>
              영문(소문자,대문자), 숫자, 특수문자 중 3종류 이상을 조합하여 최소 10자리이상으로 설정해주세요.
            </div>
            <div>인증시간이 초과됐습니다. 재전송을 해주시기 바랍니다.</div>
            <div className={`text-[var(--color5)]`}>
              ※ 새로운 비밀번호 변경시, 00일 내 사용된 비밀번호는 사용이 불가능합니다.
            </div>
          </div>
        </div>
      </section>
      <br />
      <br />
      <br />
      <section data-seq={`20230211100258362`}>
        <H1>BUTTON</H1>
        <H2>theme</H2>
        <div className={`grid grid-cols-2 gap-2`}>
          <Btn
            onClick={(evt) => {
              console.log(evt);
            }}>
            Btn
          </Btn>
          <Btn disabled>Btn [disabled]</Btn>
          <Btn theme={`DARK`}>Btn DARK</Btn>
          {Array.from(Array(6)).map((obj, idx) => {
            const no = idx + 1;
            return (
              <Fragment key={idx}>
                <Btn theme={`${no}`}>Btn Theme {no}</Btn>
              </Fragment>
            );
          })}
          <br />
        </div>
        <br />
        <H2>size</H2>
        <div className={`grid grid-cols-2 items-center gap-2`}>
          <Btn theme={`1`} size={`SM`}>
            Btn Size SM
          </Btn>
          <Btn theme={`1`}>Btn Size Default</Btn>
          <Btn theme={`1`} size={`LG`}>
            Btn Size LG
          </Btn>
        </div>
      </section>
      <br />
      <br />
      <br />
      <section data-seq={`20230330083344826`}>
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
      <section data-seq={`20230211130644060`}>
        <H1>SWITCH</H1>
        <SwitchBtn>스위치1</SwitchBtn>
        <SwitchBtn>스위치2</SwitchBtn>
      </section>
      <br />
      <br />
      <br />
      <section data-seq={`20230211130644060`}>
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
          <TextInput size={`SM`} defaultValue={`size SM`} />
          <TextInput defaultValue={`size Default`} />
          <TextInput size={`LG`} defaultValue={`size LG`} />
        </div>
      </section>
      <br />
      <br />
      <br />
      <section data-seq={`20230211130644060`}>
        <H1>TEXTAREA</H1>
        <TextArea className={`KSM`}>
          봄이 벌써 불러 가을로 까닭입니다. 걱정도 불러 계절이 이국 패, 없이 듯합니다. 하나에 별이 써 피어나듯이 마디씩
          밤을 너무나 그리고 계십니다. 별 겨울이 나의 별 가난한 버리었습니다. 언덕 헤는 무덤 있습니다. 위에도 나의 노루,
          별 나는 밤이 잔디가 속의 거외다. 별이 토끼, 오는 멀듯이, 아스라히 위에도 아이들의 때 이름과, 봅니다. 차 이름을
          나의 하늘에는 이웃 다하지 사랑과 봅니다. 잔디가 차 걱정도 토끼, 아름다운 이국 있습니다. 이름과, 둘 덮어 하나
          까닭입니다. 슬퍼하는 하나에 프랑시스 듯합니다. 내린 동경과 슬퍼하는 흙으로 비둘기, 별이 이제 않은 봅니다. 쉬이
          없이 소학교 이름과, 둘 이네들은 같이 별을 다하지 있습니다. 별 하나에 이름과, 있습니다. 이름을 벌레는 그리워
          듯합니다. 별 겨울이 그러나 남은 가슴속에 토끼, 릴케 아무 하늘에는 계십니다. 잠, 내 위에 헤는 된 이름을 나는 다
          봅니다. 다하지 별들을 써 오면 부끄러운 나는 별에도 이네들은 봅니다.
        </TextArea>
      </section>
      <br />
      <br />
      <br />
      <section data-seq={`20230406102840840`}>
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
      <section data-seq={`20230211122919867`}>
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
      <section data-seq={`20230211105054830`}>
        <H1>CHECKBOX</H1>
        <CheckBox size={`Lg`}>
          <div className={`font-[600]`}>회원 통합진행에 동의하여, 통합을 진행합니다.</div>
        </CheckBox>
        <CheckBox>
          <div className={`font-[600]`}>회원 통합진행에 동의하여, 통합을 진행합니다.</div>
        </CheckBox>
        <CheckBox size={`Sm`}>
          <div className={`font-[600]`}>회원 통합진행에 동의하여, 통합을 진행합니다.</div>
        </CheckBox>
        <CheckBox1 size={`Lg`}>
          <div className={`font-[600]`}>회원 통합진행에 동의하여, 통합을 진행합니다.</div>
        </CheckBox1>
        <CheckBox1>
          <div className={`font-[600]`}>회원 통합진행에 동의하여, 통합을 진행합니다.</div>
        </CheckBox1>
        <CheckBox1 size={`Sm`}>
          <div className={`font-[600]`}>회원 통합진행에 동의하여, 통합을 진행합니다.</div>
        </CheckBox1>
      </section>
      <br />
      <br />
      <br />
      <section data-seq={`20230211102612645`}>
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
      <section data-seq={`20230211130644060`}>
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
      <section data-seq={`20230410141340271`}>
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
    </div>
  );
}

PageTemplate.Layout = LayoutMarkup;
export default PageTemplate;
