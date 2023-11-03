import MarkupPageTitle from "@/components/common/MarkupPageTitle";
import {PageTransition} from "@/layouts/layout_manager.js";

import {AnimatePresence, motion} from "framer-motion";
import {useRouter} from "next/router";

function LayoutMarkup({children}) {
  const router = useRouter();
  
  return (
    <>
      <div id="page" className={`p-4`}>
        <MarkupPageTitle>{router.pathname.replace(/\/markup\//gi, "")}</MarkupPageTitle>
        <AnimatePresence mode='wait'>
          <motion.main className={'PAGE-TRANSITION-WRAP'}
                       key={router.route}
                       initial={PageTransition.initial}
                       animate={PageTransition.animate}
                       transition={PageTransition.transition}
                       exit={PageTransition.exit}>
            {children}
          </motion.main>
        </AnimatePresence>
      </div>
    </>
  );
}
LayoutMarkup.Name = 'LayoutMarkup';
export default LayoutMarkup;