import LayoutMarkup from "@/layouts/LayoutMarkup";
import MarkupPageTitle from "@/components/common/MarkupPageTitle";

// https://fontawesome.com/v6/search?o=r&m=free
// https://fontawesome.com/v5/docs/web/use-with/react#using-icons-via-individual-use
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faUser, faSearch, faAnchor, faTruckMedical} from "@fortawesome/free-solid-svg-icons";
import {faGithub, faFacebook} from "@fortawesome/free-brands-svg-icons";
import {faUser as faUser2} from "@fortawesome/free-regular-svg-icons";
import H2 from "@/components/common/H2";


function PageFontawesome() {
  return (
    <div className={`PageFontawesome`}>
      <section data-seq="20230212124855068">
        <H2>FontAwesome</H2>
        <div>
          <FontAwesomeIcon icon={faFacebook}/>
          <FontAwesomeIcon icon={faGithub}/>
        </div>
        <ul>
          <li>
            <FontAwesomeIcon icon={faUser}/>
            <FontAwesomeIcon icon={faUser2}/>
          </li>
          <li>
            <FontAwesomeIcon
              icon={faTruckMedical}
              style={{ fontSize: 100, color: "orange" }}
            />
          </li>
        </ul>
      </section>
    </div>
  );
}

PageFontawesome.Layout = LayoutMarkup;
export default PageFontawesome;