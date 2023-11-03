import LayoutMarkup from "@/layouts/LayoutMarkup";
import {MENU_DATA} from "@/menu_data";
import {Fragment} from "react";

function PageSitemap() {
  
  return (
    <div className={`PageSitemap`}>
      {/*prettier-ignore*/}
      <style jsx global>{`
        /* 전역 선언 */
        html{background:linear-gradient(-45deg, #ee7752, #fff980, #23a6d5, #23d5ab);background-size:400% 400%;animation:gradient 3s ease infinite;height:100vh;background-attachment:fixed;}
        
        @keyframes gradient{
          0%{background-position:0% 20%;}
          50%{background-position:100% 20%;}
          100%{background-position:0% 20%;}
        }
        
        /**/
        .SITEMAP{ }
        .SITEMAP > ul{ display:grid; gap:10px; }
        .SITEMAP > ul{ grid-template-columns:repeat(1, minmax(0, 1fr)); }
        .SITEMAP > ul > li{ background-color:white; padding:5px; border-radius:5px; border:2px solid black; }
        .SITEMAP > ul > li > *:not(ul){ font-weight:600; font-size:20px; }
        .SITEMAP > ul > li > ul{ }
        .SITEMAP > ul > li > ul > li{ }
        .SITEMAP > ul > li > ul > li > ul{ }
        .SITEMAP > ul > li *{ padding:2px; }
        .SITEMAP > ul > li ul{ margin-left:20px; }
        .SITEMAP > ul > li a[href]{ padding:5px 10px; color:dodgerblue; display:block; border-radius:5px; }
        .SITEMAP > ul > li a[href]:hover{ background-color:gold; }
        
        /* 768px 이상 화면*/
        @media screen and (min-width:768px){
          .SITEMAP > ul{ grid-template-columns:repeat(2, minmax(0, 1fr)); }
        }
        
        /* 1024px 이상 화면*/
        @media screen and (min-width:1024px){
          .SITEMAP > ul{ grid-template-columns:repeat(3, minmax(0, 1fr)); }
        }
        
        /* 1280px 이상 화면*/
        @media screen and (min-width:1280px){
          .SITEMAP > ul{ grid-template-columns:repeat(4, minmax(0, 1fr)); }
        }
        
      `}</style>
      <div className={`SITEMAP`}>
        <ul>
          {
            MENU_DATA.map((obj1, idx1) => {
              
              return (
                <Fragment key={idx1}>
                  <li>
                    {obj1.PAGE != "" ?
                      (<a href={obj1.PAGE} target={`_blank`}>{obj1.뎁스1}</a>)
                      :
                      (<div>{obj1.뎁스1}</div>)
                    }
                    <ul>
                      {
                        obj1.child.map((obj2, idx2) => {
                          
                          return (
                            <Fragment key={idx2}>
                              <li>
                                {obj2.PAGE != "" ?
                                  (<a href={obj2.PAGE} target={`_blank`}>{obj2.뎁스2}</a>)
                                  :
                                  (<div>{obj2.뎁스2}</div>)
                                }
                                <ul>
                                  {
                                    obj2.child.map((obj3, idx3) => {
                                      return (
                                        <Fragment key={idx3}>
                                          <li>
                                            {obj3.PAGE != "" ?
                                              (<a href={obj3.PAGE} target={`_blank`}>{obj3.뎁스3}</a>)
                                              :
                                              (<div>{obj3.뎁스3}</div>)
                                            }
                                          </li>
                                        </Fragment>
                                      );
                                    })
                                  }
                                </ul>
                              </li>
                            </Fragment>
                          );
                        })
                      }
                    </ul>
                  </li>
                </Fragment>
              );
            })
          }
        </ul>
      </div>
    </div>
  );
}

PageSitemap.Layout = LayoutMarkup;
export default PageSitemap;