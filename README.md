# 안녕하세요!

vuetiful korea 2회 밋업에서 라이브코딩한 블로그의 코드입니다.

# 시작하기

## 1. 서버 세팅
node.js + express.js 기반의 간단한 api 서버입니다.

1. `/vuetiful-blog-example/vuetiful-api/` 경로에 들어가셔서 `npm install` 혹은 `yarn install` 해주세요.
2. 패키지들을 내려받으셨다면, `app.js` 파일을 열어주세요.
3. `25번째 줄`에 `MongoDB` 연결하는 부분이 있습니다. 로컬 MongoDB 계정을 연결하거나 [mLab](https://mlab.com/)에서 무료로 MongoDB 계정을 생성하실 수 있습니다.
4. DB 연결이 완료되었다면 `app.js` 파일을 실행해주세요. 3000번 포트로 api 서버가 열립니다.
5. (귀찮게 해서 죄송합니다 ㅠㅠ)

## 2. 프론트 엔드

1. `/vuetiful-blog-example/vuetiful-blog/` 경로에 들어가셔서 `npm install` 혹은 `yarn install` 해주세요.
2. `yarn run dev` 혹은 `npm run dev` 하시면 뷰로 작성된 간단한 블로그가 열립니다.


# 사용한 패키지

**안내**: 이 패키지들은 이미 `package.json`에 포함되어 있습니다. 이미 `npm install` 하셨다면 다시 설치하실 필요 없습니다.

`vue-cli`의 webpack 템플릿이 기본적으로 설정해주는 패키지 이외에 추가로 사용한 패키지들은 다음과 같습니다.

* `axios` - http 통신 클라이언트입니다.
* `marked` - 마크다운을 HTML로 변환해줍니다.
* `node-sass` 및 `sass-loader` - 프로젝트에서 `scss`를 사용할 수 있게 해줍니다.


# 궁금하신 점 있으시면

뷰 사용자 모임 슬랙 `@chiwoong` 으로 DM 주세요!
