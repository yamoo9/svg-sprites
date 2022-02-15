/* 종속성 패키지 ------------------------------------------------------------------ */

const fs = require('fs');
const glob = require('glob');
const path = require('path');
const File = require('vinyl');
const mkdirp = require('mkdirp');
const SVGSpriter = require('svg-sprite');
const argv = require('minimist')(process.argv.slice(2));

/* 사용자 정의 설정 ---------------------------------------------------------------- */

const SVG_DIR = argv.i || argv.input || 'src';
const OUT_DIR = argv.o || argv.outdir || 'build';
const SVG_FILENAME = argv.f || argv.filename || 'sprites';

/* 스프라이트 구성 ----------------------------------------------------------------- */

const config = require('./config')({
  dest: OUT_DIR,
  filename: SVG_FILENAME,
  mode: {
    view: true,
    symbol: true,
    stack: false,
    defs: false,
    css: false,
  },
});

/* 스프라이트 객체 ----------------------------------------------------------------- */

const cwd = path.resolve(process.cwd(), SVG_DIR);
const files = glob.sync('*.svg', { cwd });
const spriter = new SVGSpriter(config);

files.forEach((file) => {
  const filePath = `${SVG_DIR}/${file}`;

  spriter.add(
    path.resolve(filePath),
    filePath,
    fs.readFileSync(path.resolve(filePath), { encoding: 'utf-8' })
  );
});

spriter.compile(function (error, result, cssData) {
  for (var mode in result) {
    for (var type in result[mode]) {
      mkdirp.sync(path.dirname(result[mode][type].path));
      fs.writeFileSync(result[mode][type].path, result[mode][type].contents);
    }
  }
});
