const argv = require('minimist')(process.argv.slice(2));

const SVG_DIR = argv.i || argv.input || 'src';
const OUT_DIR = argv.o || argv.outdir || 'build';
const SVG_FILENAME = argv.f || argv.filename || 'sprites';

/* -------------------------------------------------------------------------- */

const fs = require('fs');
const path = require('path');
const svgstore = require('svgstore');
const getRootPath = (_path) => path.resolve(process.cwd(), _path);

fs.readdir(getRootPath(SVG_DIR), async (error, files) => {

  if (error) {
    return console.error(error.message);
  }

  const fileNames = files.map((filename) => filename);
  const filePaths = files.map((filename) => getRootPath(`${SVG_DIR}/${filename}`));

  const sprites = svgstore();

  fileNames.forEach((name, index) => {
    sprites.add(name.replace(/\.svg$/i, ''), fs.readFileSync(filePaths[index]), 'utf8');
  });

  const buildDir = getRootPath(OUT_DIR);

  if (!fs.existsSync(buildDir)){
    fs.mkdirSync(buildDir);
  }

  fs.writeFileSync(getRootPath(`${OUT_DIR}/${SVG_FILENAME}.svg`), sprites);

  console.log(`———————————————————————————————————————————————————————————\n${OUT_DIR}/${SVG_FILENAME}.svg 스프라이트 파일이 생성되었습니다. 🎉\n———————————————————————————————————————————————————————————`);

});