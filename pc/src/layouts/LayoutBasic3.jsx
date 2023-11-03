import MainCover from '@/components/common/MainCover';

import FooterBasic from '@/layouts/FooterBasic';
import HeaderBasic3 from '@/layouts/HeaderBasic3';
import {PageTransition} from '@/layouts/layout_manager.js';
import FloatingUtil from '@/modules/FloatingUtil';

import {AnimatePresence, motion} from 'framer-motion';
import {useRouter} from 'next/router';

function LayoutBasic3({ children }) {
  const router = useRouter();

  return (
    <>
      <div id='page'>
        <HeaderBasic3 />
        <FloatingUtil />
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
        <FooterBasic />
      </div>
    </>
  );
}

LayoutBasic3.Name = 'LayoutBasic3';
export default LayoutBasic3;
