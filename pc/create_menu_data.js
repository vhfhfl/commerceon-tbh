const address = require('address');

const google_sheet_api =
  'https://script.google.com/macros/s/AKfycby4JlyMTvAjOsUfHdPF_YCGLRGLdCNlh3NYZuJN00S-Kjal497WEnS4cy8zciEbjNKB-g/exec';

const fs = require('fs');
const beautify = require('js-beautify').js;
var XLSX = require('xlsx');
let file_text = '';

function xlsxToJSON(filePath, callback) {
  const workbook = XLSX.readFile(filePath);
  const worksheet = workbook.Sheets[workbook.SheetNames[0]];
  const json = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

  // json 가공
  // 첫번째 row 를 기준으로 비어있는 값에 null 값을 넣어준다.
  var first_row_data = json[0];
  var col_len = first_row_data.length;

  json.forEach((obj, idx) => {
    let i = 0;
    while (i < col_len) {
      if (obj[i]) {
        // console.log(obj[i]);
      } else {
        obj[i] = null;
      }
      ++i;
    }
  });

  let result_array = [];
  // index 값 기반을 첫번째 row 의 값 기준 데이터로 변환
  json.forEach((obj, idx) => {
    const new_obj = {};
    if (idx != 0) {
      // console.log(first_row_data);
      obj.forEach((obj2, idx2) => {
        new_obj[first_row_data[idx2]] = obj2;
        //console.log(obj2);
      });

      result_array.push(new_obj);
    }
  });

  callback(result_array);
}

const filePath = 'MENU_DATA.xlsx';

xlsxToJSON(filePath, function (json) {
  saveLocalData(json);
});

function saveLocalData(json) {
  let arr = [];

  // child 노드 추가
  json.forEach((el, index) => {
    el.child = [];
  });

  let d1_el;
  let d2_el;
  let d3_el;
  json.forEach((el, index) => {
    // 뎁스1 넣기
    const d1 = el['뎁스1'];
    if (d1) {
      el.path = reaplceStr(d1);

      d2_el = undefined;
      d3_el = undefined;
      d1_el = el;

      arr.push(d1_el);
    }

    const d2 = el['뎁스2'];
    if (d2) {
      el.path = d1_el.path + '/' + reaplceStr(d2);

      d3_el = undefined;
      d2_el = el;
      d1_el.child.push(d2_el);

      // data.splice(index, 1);
    }

    const d3 = el['뎁스3'];
    if (d3) {
      el.path = d2_el.path + '/' + reaplceStr(d3);

      d3_el = el;
      d2_el.child.push(d3_el);
    }
  });

  file_text += `const MENU_DATA = ${JSON.stringify(arr)};`;
  file_text += `export {MENU_DATA}`;

  const create_file_path = 'src/menu_data.js';

  // 정렬
  file_text = beautify(file_text, { indent_size: 2, space_in_empty_paren: true });

  fs.writeFile(create_file_path, file_text, function (err) {
    if (err === null) {
      // https://github.com/shiena/ansicolor/blob/master/README.md
      console.log(
        '\x1b[93m%s\x1b[0m',
        `=============================================== ${create_file_path} : 파일 작성 완료 ===============================================`,
      );

      console.log('\x1b[96m%s\x1b[0m', '로컬 IP 주소 - ', address.ip());
    } else {
      console.log(`>>>>>>>>>>>>>>>>>>>>>>> ${create_file_path} : 파일 작성 실패 <<<<<<<<<<<<<<<<<<<<<<<`);
    }
  });
}

/**
 * 특수문자 및 공백 제거
 * @param string
 * @returns {string}
 */
function reaplceStr(string) {
  if (typeof string == 'number') string = string.toString();
  // eslint-disable-next-line
  const regExp = /[ \{\}\[\]\/?.,;:|\)*~`!^\-_+┼<>@\#$%&\ '\"\\(\=]/gi;
  return string.replace(regExp, '');
}
