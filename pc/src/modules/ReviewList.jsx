import {Layer} from '@/scripts/util';
import Image from 'next/image';
import Link from 'next/link';
import {Fragment} from 'react';

function ReviewList(props) {
  const { className = '' } = props;
  return (
    <>
      {/*prettier-ignore*/}
      <style jsx global>{`
        /* 전역 선언 */
        .ReviewList{ --gap:6px; }
        .ReviewList > ul{ display:grid; gap:var(--gap); }
        .ReviewList > ul{ align-items:flex-start; }
        .ReviewList > ul > li{ width:100%; }
        .ReviewList > ul > li > div{ width:100%; cursor:pointer; overflow:hidden; }
        .ReviewList > ul > li:nth-child(2n) > div:first-child{ aspect-ratio:400/400; }
        .ReviewList > ul > li:nth-child(2n) > div:last-child{ aspect-ratio:400/516; }
        .ReviewList > ul > li:nth-child(2n-1) > div:first-child{ aspect-ratio:400/516; }
        .ReviewList > ul > li:nth-child(2n-1) > div:last-child{ aspect-ratio:400/400; }
        .ReviewList > ul > li > div + div{ margin-top:var(--gap); }
        .ReviewList > ul > li > div > img{ width:100%; height:100%; object-fit:cover; }
        .ReviewList > ul > li > div > img{ transition:all 1s cubic-bezier(0.215, 0.610, 0.355, 1.000); }
        .ReviewList > ul > li > div:hover > img{ transform:scale(1.1); }
      
      `}</style>
      <div {...props} className={`ReviewList ${className}`}>
        <ul
          className={`grid-cols-[repeat(2,_minmax(0,_1fr))] md:grid-cols-[repeat(3,_minmax(0,_1fr))] lg:grid-cols-[repeat(4,_minmax(0,_1fr))]`}>
          {[
            [1, 2],
            [3, 4],
            [5, 6],
            [7, 8],
          ].map((obj, idx) => {
            return (
              <Fragment key={idx}>
                <li data-idx={idx} className={`max-md:[&:nth-child(n+3)]:hidden max-lg:md:[&:nth-child(n+4)]:hidden`}>
                  <div>
                    <Image src={`https://picsum.photos/600/800.jpg?random=${idx}`} width={600} height={800} alt='' />
                  </div>
                  <div>
                    <Image
                      src={`https://picsum.photos/600/800.jpg?random=${idx}${idx}`}
                      width={600}
                      height={800}
                      alt=''
                    />
                  </div>
                </li>
              </Fragment>
            );
          })}
        </ul>
        <div className={`mt-[70px] flex flex-row items-center justify-center`}>
          <Link
            href={`#`}
            className={`flex h-[56px] flex-row items-center justify-center border-[1px] border-solid border-[var(--color5)] px-[70px] text-[16px] font-[400] text-[var(--color1)] hover:bg-[var(--color7)]`}>
            리뷰 전체보기
          </Link>
        </div>
      </div>
    </>
  );
}

export default ReviewList;
