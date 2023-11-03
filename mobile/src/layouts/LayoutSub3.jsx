import MainCover from '@/components/common/MainCover';
import FooterBasic from '@/layouts/FooterBasic';
import FooterCollapse from '@/layouts/FooterCollapse';
import HeaderSub2 from "@/layouts/HeaderSub2";
import {PageTransition} from '@/layouts/layout_manager.js';

import {AnimatePresence, motion} from 'framer-motion';
import {useRouter} from 'next/router';

function LayoutSub3({ children }) {
  const router = useRouter();

  return (
    <>
      <div id='page'>
        <HeaderSub2 />
        <AnimatePresence mode='wait'>
          <motion.main
            className={'PAGE-TRANSITION-WRAP'}
            key={router.route}
            initial={PageTransition.initial}
            animate={PageTransition.animate}
            transition={PageTransition.transition}
            exit={PageTransition.exit}>
            {children}
            <MainCover />
          </motion.main>
        </AnimatePresence>
        <FooterCollapse />
        <FooterBasic />
      </div>
    </>
  );
}

LayoutSub3.Name = 'LayoutSub3';
export default LayoutSub3;
