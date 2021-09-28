# Vue.js-Docker Template

# プロジェクト内容
- Vue 2.0
- Vuex
- Vue Router
- node-sass
- ESLint + pretteir

## コンテナ作成の手順
### 1.Cloneする
```
git clone https://github.com/PiedPiperNagoya/frontend-template-vue.git
```
### 2.Dockerイメージを作成
```
cd vue_js-docker &&\
docker-compose up -d
```
### 3.Dockerコンテナ内に入る
```
docker-compose exec front sh
```
## Vue.jsのプロジェクトの依存関係をインストール（初回のみ）
### 1.コンテナ内で以下コマンドを実行
```
cd <プロジェクト名>
```
### 2.コンテナ内で以下コマンドを実行
```
npm ci
```

## Vue.jsでの開発
### 2.プロジェクトのテスト
```
cd <プロジェクト名>
npm run serve
```
### 3.テストをlocalhostで確認する
http://localhost:8080/ にアクセスする

---

## コンテナの停止
```
docker-compose down
```
