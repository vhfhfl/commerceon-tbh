const fs = require('fs');
const beautify = require('js-beautify').js;

const target_folder = 'src/swipers';
let arr = [];
fs.readdirSync(target_folder).forEach((file) => {
  var regExp = new RegExp('.jsx', 'gi');
  file = file.replace(regExp, '');
  arr.push(file);
});

let file_text = '';
file_text = beautify(file_text, { indent_size: 2, space_in_empty_paren: true });
file_text += `const SWIPER_DATA = ${JSON.stringify(arr)};`;
file_text += `export {SWIPER_DATA}`;

const create_file_path = 'src/swiper_data.js';
fs.writeFile(create_file_path, file_text, function (err) {
  if (err === null) {
    // https://github.com/shiena/ansicolor/blob/master/README.md
    console.log('\x1b[94m%s\x1b[0m', `=============================================== ${create_file_path} : 파일 작성 완료 ===============================================`);
  } else {
    console.log(`>>>>>>>>>>>>>>>>>>>>>>> ${create_file_path} : 파일 작성 실패 <<<<<<<<<<<<<<<<<<<<<<<`);
  }
});
