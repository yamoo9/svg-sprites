// [참고]
// https://github.com/svg-sprite/svg-sprite/blob/main/docs/configuration.md
// https://svg-sprite.github.io/svg-sprite

module.exports = ({
  dest = 'build',
  filename = 'sprites',
  log = 'info',
  mode = {
    view: true,
    symbol: true,
    css: false,
    defs: false,
    stack: true,
  },
  shape,
  svg,
} = {}) => {
  return {
    dest,
    log,
    mode: {
      css: mode.css && {
        sprite: filename,
        bust: false,
        example: false,
      },
      view: mode.view && {
        sprite: filename,
        bust: false,
        example: true,
      },
      defs: mode.defs && {
        sprite: filename,
        example: false,
      },
      symbol: mode.symbol && {
        sprite: filename,
        example: true,
      },
      stack: mode.stack && {
        sprite: filename,
        example: true,
      },
    },
    shape: shape || {
      id: {
        separator: '',
      },
      spacing: {
        padding: 0,
        box: 'content',
      },
      transform: ['svgo'],
    },
    svg: svg || {
      xmlDeclaration: false,
      doctypeDeclaration: true,
      namespaceIDs: true,
      namespaceClassnames: true,
      dimensionAttributes: true,
    },
  };
};

/* 가이드 ---------------------------------------------------------------------- */

/*

{
  // 출력 디렉토리
  dest,
  // 로깅
  log,

  shape: {
    // SVG 쉐입 옵션
    id: {
      // SVG 쉐입 ID 옵션
      separator: '--', // 디렉토리 이름 순환을 위한 구분 기호
      generator() {
        // SVG 쉐입 ID 제너레이터 콜백
      },
      pseudo: '~', // 모양 상태에 대한 파일 이름 구분 기호(예: ':hover')
    },
    dimension: {
      // 수치 옵션
      maxWidth: 2000, // 최대 쉐입 너비
      maxHeight: 2000, // 최대 쉐입 높이
      precision: 2, // 부동 소수점 정밀도
      attributes: false, // 포함된 쉐입의 너비 및 높이 속성
    },
    spacing: {
      // 간격 옵션
      padding: 0, // 쉐입 내부 공간 간격
      box: 'content', // 패딩 전략(CSS 'box-sizing'과 유사)
    },
    transform: ['svgo'], // 트랜스폼, 최적화 목록
    meta: null, // 메타/접근성 데이터가 있는 YAML 파일 경로
    align: null, // 확장된 정렬 데이터가 있는 YAML 파일 경로
    dest: null, // 최적화된 인터미데이트 SVG 쉐입을 위한 출력 디렉토리
  },

  svg: {
    // 생성된 SVG 파일에 대한 일반 옵션
    xmlDeclaration: false, // SVG 스프라이트에 XML 선언 추가
    doctypeDeclaration: true, // SVG 스프라이트에 DOCTYPE 선언 추가
    namespaceIDs: true, // SVG 쉐입의 모든 ID에 네임스페이스 토큰 추가
    namespaceClassnames: true, // SVG 쉐입의 모든 CSS 클래스 이름에 네임스페이스 토큰 추가
    dimensionAttributes: true, // 스프라이트의 너비 및 높이 속성
  },

  variables: {}, // 사용자 정의 Mustache 템플릿 변수 및 함수

  mode: mode && {
    css: false, // «css» 스프라이트 생성
    view: true, // «view» 스프라이트 생성
    defs: false, // «defs» 스프라이트 생성
    symbol: true, // «symbol» 스프라이트 생성
    stack: true, // «stack» 스프라이트 생성
  },
};

*/
