# Node_Management_App

### 데이터베이스

## 1. 유저 테이블 ( users )

- id
- name
- email
- password
- user_type
- address
- salary
- profile_image
- birth
- join_date
- leave_date
- working_year
- grade
- half_vacation
- year_vacation
- total_year_vacation

## 2. 근태정보 ( attendances )

- id
- userId
- late
- start_time
- finish_time
- created_at

## 3. 게시판 ( boards )

- id
- userId
- title
- contents
- view
- created_at

### 기능

## 1. 유저관련

- 새로운 유저 생성 ( 유효성검사, 필수값 입력 )
- 유저 로그인 ( 이메일, 패스워드 )
- 유저 리스트 조회 ( 관리자 only )
- 단일 유저 조회 ( 본인정보 및 관리자 조회 )
