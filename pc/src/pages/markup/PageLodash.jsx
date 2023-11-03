import LayoutMarkup from "@/layouts/LayoutMarkup";
import _ from "lodash";
function PageLodash() {
  console.log("_.indexOf([1, 2, 1, 2], 2) == ", _.indexOf([1, 2, 1, 2], 2));
  console.log("_.uniq([2, 1, 2]) == ", _.uniq([2, 1, 2]));
  console.log("_.shuffle([1, 2, 3, 4]) == ", _.shuffle([1, 2, 3, 4]));
  return (
    <div className={`PageLodash`}>
      PageLodash
    </div>
  );
}

PageLodash.Layout = LayoutMarkup;
export default PageLodash;