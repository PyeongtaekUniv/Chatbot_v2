# Next.js 애플리케이션을 위한 Dockerfile
FROM node:alpine

# 작업 디렉터리 설정
WORKDIR /app

# 의존성 파일 복사
COPY package.json yarn.lock ./

# Yarn을 사용해 의존성 설치
RUN yarn install

# 애플리케이션 파일 복사
COPY . .

# Next.js 애플리케이션 빌드
RUN yarn build

# 앱 실행
CMD ["yarn", "start"]