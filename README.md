# React Blog  
React와 Firebase를 이용한 리액트 블로그 프로젝트입니다.  
URL: https://react-blog-2b711.web.app/  

---

## 📌 프로젝트 설명

### 주요 기능
- 게시글 CRUD 기능
- 사용자 인증 및 권한 관리 (Firebase Auth)
- 라우팅과 페이지 구성 (React Router v7)

### 앱 구조
- create-react-app 기반 SPA
- Context API를 활용한 상태관리
- 사용자 인증 및 테마 다크모드 기능
- Toastify를 이용한 알림 처리

### 애니메이션 & 스타일링
- CSS (BEM 방식)
- 캐러셀에 transition 효과 적용

### 배포
- Firebase Hosting

---

## 🔌 API 및 연동
- Firestore를 통한 실시간 게시글/댓글 데이터 처리
- Firebase Auth를 이용한 이메일 기반 사용자 인증

---

## 🛠 사용 스택
- React 19
- TypeScript
- Firebase (Auth, Firestore, Hosting)
- React Router v7
- CSS (BEM 방식)
- React Toastify
- React Icons

---

## 📁 기타 학습 개념
- CRA 기반 프로젝트 세팅
- React Hooks (useEffect, useState, useContext, useCallback)
- React Router v7의 구조적 라우팅 처리

---

## 💻 구현 기능

# 공통 페이지
- 로그인 / 회원가입 페이지 (Firebase Auth)

# 메인 페이지
- 최신 글 목록
- 캐러셀 콘텐츠 배치

# 게시글 목록 페이지
- 전체 글 리스트 보기
- 상세 페이지로 이동

# 게시글 상세 페이지
- 제목, 본문, 작성자, 작성일 표시
- 댓글 입력 및 삭제 기능

# 글 수정 페이지
- 본인 작성 글 수정 및 삭제

# 카테고리 필터
- 카테고리 탭 클릭 시 해당 글만 보기

# 사용자 프로필
- 로그인한 사용자 정보 확인 (Velog / Medium 스타일)

# 기타
- 다크모드 / 라이트모드 전환
- 내가 쓴 글만 모아보기
- 댓글 CRUD

