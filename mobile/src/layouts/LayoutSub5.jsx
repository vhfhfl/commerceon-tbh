import MainCover from '@/components/common/MainCover';

import FooterBasic from '@/layouts/FooterBasic';
import FooterCollapse from '@/layouts/FooterCollapse';
import HeaderSub from '@/layouts/HeaderSub';
import HeaderSub5 from "@/layouts/HeaderSub5";
import {PageTransition} from '@/layouts/layout_manager.js';

import {AnimatePresence, motion} from 'framer-motion';
import {useRouter} from 'next/router';

function LayoutSub5({ children }) {
  const router = useRouter();

  return (
    <>
      <div id='page'>
        <HeaderSub5 />
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

LayoutSub5.Name = 'LayoutSub5';
export default LayoutSub5;
