import LayoutMarkup from "@/layouts/LayoutMarkup";
import MarkupPageTitle from "@/components/common/MarkupPageTitle";
import axios from "axios";
import {Fragment, useEffect, useState} from "react";
function PageAxios() {
  
  const [user_list, setUserList] = useState([]);
  
  useEffect(() => {
    // mount
    console.log('PageAxios mount');
    (async () => {
      console.log('[PageAxios.jsx : 1]');
      await loadUserAwait();
      console.log('[PageAxios.jsx : 3]');
      loadUserAsync();
    })();
  }, [])
  
  function loadUserAsync(){
    // https://axios-http.com/kr/docs/req_config
    const api = "https://jsonplaceholder.typicode.com/users";
    const params = {};
    
    axios({
      url : api,
      method : 'get',
      params : params, // 'GET' 메소드에서 사용
      //data : params, // 'PUT', 'POST', 'PATCH', 'DELETE' 메소드에서만 적용 가능합니다.
      responseType : 'json',// 옵션: 'arraybuffer', 'document', 'json', 'text', 'stream'
      timeout : 0, // 기본값은 `0` (타임아웃 없음)
      //headers : {'Content-Type' : 'multipart/form-data'},
    })
      .then((response) => {
        // console.log('성공 핸들링');
        console.log('loadUserAsync', response);
      })
      .catch((error) => {
        // console.log('에러 핸들링');
        console.log(error);
      })
      .then(() => {
        // console.log('항상 실행되는 영역');
      });
  }
  
  async function loadUserAwait(){
    // https://axios-http.com/kr/docs/req_config
    const api = "https://jsonplaceholder.typicode.com/users";
    const params = {};
    
    try {
      const response = await axios({
        url : api,
        method : 'get',
        params : params, // 'GET' 메소드에서 사용
        //data : params, // 'PUT', 'POST', 'PATCH', 'DELETE' 메소드에서만 적용 가능합니다.
        responseType : 'json',// 옵션: 'arraybuffer', 'document', 'json', 'text', 'stream'
        timeout : 0, // 기본값은 `0` (타임아웃 없음)
        //headers : {'Content-Type' : 'multipart/form-data'},
      });
      console.log('[PageAxios.jsx : 2]');
      console.log('loadUserAwait', response);
      setUserList(response.data);
    }catch(error){
      console.log(error);
    }finally {
      // 이 블록에는 try 블록에서 일어난 일에 관계없이 무조건 실행될 코드가 위치한다.
      
    }
    
  }
  
  return (
    <div className={`PageAxios`}>
      <section data-seq="20230212093809506">
        <ul>
          {
            user_list.map((obj, idx) => {
              return (
              <Fragment key={idx}>
                <li>
                  <div className={`space-x-[10px]`}>
                    <span className={`text-red-700`}>name : {obj.name}</span>
                    <span className={`text-blue-700`}>mail : {obj.email}</span>
                  </div>
                </li>
              </Fragment>
              );
            })
          }
        </ul>
      </section>
    </div>
  );
}

PageAxios.Layout = LayoutMarkup;
export default PageAxios;