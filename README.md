# SVG Sprites Generator

SVG 스프라이트 제너레이터

## 다운로드

SVG 스프라이트 제너레이터 프로젝트를 다운로드 합니다.

```sh
npx degit yamoo9/svg-sprites svg-sprites
```

## 종속성 모듈 설치

SVG 스프라이트 생성에 필요한 종속성 모듈을 설치합니다.

```sh
npm install
```

## SVG 디렉토리

SVG 스프라이트 생성을 위해 svg 파일이 위치한 디렉토리가 필요합니다. (예: `src` 디렉토리)

## 스프라이트 생성 명령

명령을 실행하면 SVG 스프라이트가 생성됩니다.

```sh
npm run sprites
```

정상적으로 파일이 생성되지 않는다면? (예: Windows 사용자) 아래 명령을 실행합니다.

```sh
npm run sprites-cli
```

## 생성 명령 옵션

필요한 경우 옵션을 설정해 입력, 출력 디렉토리 및 파일 이름을 설정할 수 있습니다.

```sh
-i, --inputdir
-o, --outdir
-f, --filename
```

package.json 파일에는 옵션이 설정된 명령어가 포함되어 있습니다.

```sh
npm run sprites:custom
```

```sh
npm run sprites-cli:custom
```

package.json 파일을 열어 직접 명령을 수정할 수 있습니다.

```json
{
  "scripts": {
    "sprites:custom": "node svg-scripts -i src -o output -f svg-sprites",
    "sprites-cli:custom": "node svg-sprites-cli -i src -o output -f euid-sprites"
  }
}
```

COPYRIGHT RESERVED 2022 @ EUID