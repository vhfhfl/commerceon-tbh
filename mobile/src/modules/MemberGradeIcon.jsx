import { Fragment } from 'react';

function MemberGradeIcon(props) {
  const { className = '' } = props;
  
  return (
    <>
      <div className={`MemberGradeIcon ${className}`}>
        <div className={`h-[65px]`}>
          <ul className={`flex flex-row items-center justify-center gap-[6px]`}>
            {[
              { title: '일반', color: '#333333' },
              { title: 'FRIENDS', color: '#333333' },
              { title: 'FAMILY', color: '#333333' },
              { title: 'MANIA', color: '#333333' },
              { title: 'STAR', color: '#333333' },
            ].map((obj, idx) => {
              return (
                <Fragment key={idx}>
                  <li className={`h-[30px] w-[30px]`}>
                    {idx == 4 ? (
                      <div className={`mx-auto aspect-square w-[30px] rounded-full bg-[#B82C4E]`}></div>
                    ) : (
                      <div className={`mx-auto aspect-square w-[30px] rounded-full bg-[#C0C0C0]`}></div>
                    )}

                    {idx == 4 ? (
                      <div
                        className={`mt-[11px] whitespace-nowrap text-[12px] font-[400] leading-[18px] text-[#B82C4E]`}>
                        <div className={`relative left-1/2 inline-block -translate-x-1/2`}>{obj.title}</div>
                      </div>
                    ) : (
                      <div
                        className={`mt-[11px] whitespace-nowrap text-[12px] font-[400] leading-[18px] text-[#C0C0C0]`}>
                        <div className={`relative left-1/2 inline-block -translate-x-1/2`}>{obj.title}</div>
                      </div>
                    )}
                  </li>
                  <li className={`last-of-type:hidden`}>
                    <svg xmlns='http://www.w3.org/2000/svg' width='23' height='3' viewBox='0 0 23 3' fill='none'>
                      <circle cx='1.5' cy='1.5' r='1.5' fill='#D9D9D9' />
                      <circle cx='11.5' cy='1.5' r='1.5' fill='#D9D9D9' />
                      <circle cx='21.5' cy='1.5' r='1.5' fill='#D9D9D9' />
                    </svg>
                  </li>
                </Fragment>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default MemberGradeIcon;
