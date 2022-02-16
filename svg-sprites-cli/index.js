const { exec } = require('child_process');

const argv = require('minimist')(process.argv.slice(2));
const SVG_DIR = argv.i || argv.input || 'src';
const OUT_DIR = argv.o || argv.outdir || 'build';
const SVG_FILENAME = argv.f || argv.filename || 'sprites';

exec(
  `npx svg-sprite --svg-xmldecl=false --svg-doctype=false -v --view-prefix='' --vs='${SVG_FILENAME}' --view-bust=false --vx=true -s --symbol-prefix='' --symbol-sprite='${SVG_FILENAME}' --symbol-bust=false --symbol-example=true --dest=${OUT_DIR} '${SVG_DIR}/**/*.svg'`, 
  errorCallback
);

function errorCallback(error, stdout, stderr) {
  if (error) {
    console.log(`error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.log(`stderr: ${stderr}`);
    return;
  }
  // console.log(`stdout: ${stdout}`);
  console.log(`${OUT_DIR} 디렉토리에 SVG Sprites 이미지가 생성되었습니다.`);
}