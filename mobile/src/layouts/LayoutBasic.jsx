import MainCover from '@/components/common/MainCover';

import FooterBasic from '@/layouts/FooterBasic';
import FooterCollapse from '@/layouts/FooterCollapse';
import HeaderBasic from '@/layouts/HeaderBasic';
import { PageTransition } from '@/layouts/layout_manager.js';

import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';

function LayoutBasic({ children }) {
  const router = useRouter();

  return (
    <>
      <div id='page'>
        <HeaderBasic />
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

LayoutBasic.Name = 'LayoutBasic';
export default LayoutBasic;
