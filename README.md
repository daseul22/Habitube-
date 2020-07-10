

# Habitube (하비튜브)

### 팀원 소개

---
### 서비스 설명

  * 의미 : 영단어 Habit과 Youtube의 합성어로 유튜브를 통해 취미생활을 한다는 의미를 가지고 있음.
  * 대상 : 가벼운 취미를 일정을 관리하면서 꾸준히 하고싶은 사용자
  * 서비스 요약 : 
    - 빈도수가 적은 취미라는 일정을 관리할수 있도록 사용자에게 맞춤 달력을 제공하고, 이에 대한 성취도를 표시하여 행동을 장려하는 서비스.
    - 유튜브라는 동영상 플랫폼을 이용해 유저의 다양한 취미를 포괄할수 있도록 서비스함.
  * 사용 예시 :
    - 홈트레이닝 : 유튜브에 있는 다양한 홈트 영상으로 홈트를 계획해서 운동 일정을 관리할수 있다.
    - 영어 듣기 : 영어로 된 영상(영화 클립, 미드, 팝 등등)을 보며 따라해 본다.
    - 레시피 따라해보기 : 집에서 편하게 고든램지의 레시피도 소환할수있다! 레시피를 따라 요리해보고 메모도 남겨본다. 
   
---   
### 와이어 프레임
![Veiwing 001](https://user-images.githubusercontent.com/61297852/86470796-205dd680-bd77-11ea-88c2-51cf5a67b481.jpeg)
![Veiwing 002](https://user-images.githubusercontent.com/61297852/86470805-23f15d80-bd77-11ea-9ecf-11192efcde3b.jpeg)
![Veiwing 003](https://user-images.githubusercontent.com/61297852/86470809-25228a80-bd77-11ea-916b-a6bd01a8f04d.jpeg)

---
### 데이터 베이스 스키마  
![doe](https://user-images.githubusercontent.com/59544288/86110879-0fa42b00-bb01-11ea-8b1e-6de5ed54fe46.png)

```js
// Creating tables
Table users as U {
  id int [pk, increment] // auto-increment
  email varchar
  username varchar
  password varchar
  keyword varchar
  
}

Table toDoBox as T {
  id int [pk, increment]
  memoTitle varchar
  memoContent varchar
  youtubeUrl varchar
  isComplete boolean
  date varchar
  usersId int
}

Ref: "users"."id" < "toDoBox"."usersId" 
```

---  
### 스크린샷 or 데모
여러분이 작성한 프로젝트의 시연 스크린샷 혹은 gif 파일을 첨부해서 어떤 결과물을 구현했는지 한 눈에 볼 수 있도록 해 주세요. 
  1. 소개페이지
      - gif첨부https://hanee24.github.io/2017/12/21/how-to-upload-image-with-github-readme/
  2. 회원가입 
  3. 로그인
  4. 목표 설정하기
  5. 영상 설정하기
  6. 다른 날짜 영상 설정하기
  7. 영상 자동 재생
  8. 메모 입력하기
  9. 달성률 보여주기
  10. 이전달/다음달 탐색
  11. 완료 페이지
  
---  
### 주요 기능에 대한 안내  
  1. 소개페이지
      - 인풋에 따른 피드백 구현
  2. 회원가입 
      - 정규식 표현을 통한 id,password validation 기능
  3. 로그인
      - 이메일 기억 기능
  4. 목표 설정하기
      - 기존 사용 이력이 있는 유저를 구분하여 상황에 맞는 페이지로 이동
      - 유저가 주제를 설정하고 목표로 하는 기간과 빈도를 정한다.
      - 서버에서는 요청에대한 응답으로 달력 데이터를 만들어 보내준다.
  5. 영상 설정하기
      - 목록에서 원하는 영상을 선택해서 시청한다.
  6. 다른 날짜 영상 설정하기
      - 다른 날짜에 있는 영상도 원하는 영상을 선택해서 시청한다.
  7. 영상 자동 재생
      - 영상을 자동으로 재생할 수 있게 한다.
  8. 메모 입력하기
      - 각 영상마다 메모를 입력할 수 있는 공간이 있어서, 영상을 시청하면서 동시에 메모도 입력하여 기록을 할 수 있다.
  9. 달성률 보여주기
      - 영상을 보고나서 영상을 다 봤다는 표시를 해주면, 우측 상단에 달성률의 퍼센트가 올라간다. 
  10. 이전달/다음달 탐색
      - 달 마다 페이지를 나눠 놔서 각 월 마다 언제 스케줄이 있는지 확인할 수 있다.
  11. 목표 완료
      - 목표를 다 달성했으면 완료페이지로 이동한다.
  
---  
### 기술 스택
   * front-end : React(hooks), Redux, Redux-thunk, Reactstrap, CSS, React-router
   * back-end : express, sequelize, nodejs, mysql, etc.. Youtube API, Calendar API, 구글 OAuth Api
   * [레퍼런스](https://velog.io/@loakick/Shield-IO-%EC%82%AC%EC%9A%A9%EB%B2%95-iojyndy4pi)를 참고하여 뱃지로 표현할 수도 있어요.

---

### Clone & Setup

> 이 리포지토리를 사용하여 로컬 컴퓨터에 클론하세요. 

```shell
$ git clone `https://github.com/codestates/Habitube.git`
```
> 업데이트와 첫 페키지를 설치를 하셔야 합니다,

```shell
$ brew update
$ brew install fvcproductions
```

> 이제 npm 및 bower 패키지를 설치하고 실행시키십시오.

```shell
$ npm install
$ npm run start
```

> 이 외에도 팀원 소개(ㅇㅇ), 아키텍쳐, 스키마(ㅇㅇ) 등 여러분의 프로젝트를 더 잘 어필할 수 있는 내용들을 추가해 주세요. 
> 예시가 될 수 있는 레파지토리들을 검색해서 참고하면 좋겠습니다. 

(http://img.shields.io/codeclimate/github/badges/badgerbadgerbadger.svg?style=flat-square)](https://codeclimate.com/github/badges/badgerbadgerbadger) [![Github Issues]

<br/>
<br/>

