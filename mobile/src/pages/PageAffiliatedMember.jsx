import LayoutSub from '@/layouts/LayoutSub';
import { Fragment } from 'react';
import FormTable8 from '@/modules/FormTable8';

function PageAffiliatedMember() {
  const help_desc_data = [
    {
      num: '1',
      desc: '제휴회원 신청서 작성',
    },
    {
      num: '2',
      desc: '신청서 확인 안내',
    },
    {
      num: '3',
      desc: '임직원 인증',
    },
    {
      num: '4',
      desc: '제휴회원 등록',
    },
  ];

  return (
    <div className={`PageAffiliatedMember`}>
      <div className={`H-Box mt-[20px]`}>
        <div className={`Inner`}>
          <section data-seq={`20230721134455192`}>
            <div className={`Title-3`}>
              <div className={`Txt1`}>제휴회원 진행안내</div>
            </div>
            <div
              className={`space-y-[4px] border-t-[2px] border-b-[1px] border-t-[var(--color1)] border-b-[var(--color6)] py-[14px]`}>
              {help_desc_data.map((obj, idx) => {
                const { num, desc } = obj;
                return (
                  <Fragment key={idx}>
                    <article className={`grid grid-cols-[60px_1fr] items-center gap-0 bg-[var(--color7)] py-[20px]`}>
                      <div className={`Montserrat CenterCenter text-[14px] font-[600] text-[var(--color1)]`}>{num}</div>
                      <div className={`ml-[10px] text-[14px] font-[600] text-[var(--color1)]`}>{desc}</div>
                    </article>
                  </Fragment>
                );
              })}
            </div>
          </section>
          <section data-seq={`20230720155028`} className={`mt-[40px]`}>
            <div className={`Title-3`}>
              <div className={`Txt1`}>신청서 작성</div>
              <div className={`Txt2 !text-[var(--color2)]`}>*필수 입력 항목입니다.</div>
            </div>
            <div>
              <FormTable8 />
            </div>
          </section>
          <section data-seq={`20230721104645`} className={`mt-[20px]`}>
            <div className={`mt-[40px]`}>
              <button className={`ButtonXl ButtonStyle2 w-full`}>신청완료</button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

PageAffiliatedMember.Layout = LayoutSub;
export default PageAffiliatedMember;
