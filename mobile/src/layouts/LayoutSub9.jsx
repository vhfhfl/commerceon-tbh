import MainCover from '@/components/common/MainCover';
import FooterBasic from '@/layouts/FooterBasic';
import FooterCollapse from '@/layouts/FooterCollapse';
import HeaderSub8 from "@/layouts/HeaderSub8";
import {PageTransition} from '@/layouts/layout_manager.js';
import {AnimatePresence, motion} from 'framer-motion';
import {useRouter} from 'next/router';

function LayoutSub9({ children }) {
  const router = useRouter();

  return (
    <>
      <div id='page'>
        <HeaderSub8 />
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

LayoutSub9.Name = 'LayoutSub9';
export default LayoutSub9;