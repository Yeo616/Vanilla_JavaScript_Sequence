

# 순수 자바스크립트 상태관리

- 순수 자바스크립트로 만든 상태 관리 시퀀스입니다.  
- 해당 프로젝트는 JavaScript와 HTML로 이루어진, font-end이며, 상태 관리 진행을 위해서는 back-end 프로젝트 또한 설치해야 합니다.

<br>

## 시작하기

- 해당 프로젝트의 원활한 실행을 위해서는 back-end 프로젝트 또한 설치해야 합니다.
- Back-end의 깃허브 주소 참고: https://github.com/Yeo616/Sequence_backend_FastAPI

### 주의!
<b>back-end가 실행되고 있는 상태</b>에서만, 해당 프로젝트 실행이 가능합니다.

<br>

## 기능
- 사용자 이메일 확인 및 찾고자 하는 데이터 여부 확인
- 데이터가 없을 경우, 입력하여 DB에 저장
- 데이터가 있을 경우, 수정하여 DB에 업데이트
- 다른 페이지로 넘어가기
- 기존에 존재하던 데이터 삭제 
<br>

## 스크린샷
모두 프론트에서 입력받은 데이터를 DB에서 확인하여, 화면에 표시하는 방식으로 진행했습니다.
여기서 말하는 DB는 Backend와 연동된 MongoDB의 test DB의 user_db컬렉션을 칭합니다.

<br>

> index.html

정보 조회 페이지.
- 여기서 데이터를 조회하고, 해당 계정에 데이터가 없으면, 정보 입력 페이지로 넘어갑니다.
- 칼라별 의미는 아래 설명 참고

![enter image description here](https://user-images.githubusercontent.com/102447800/226276914-50c182b0-49b3-4a79-97c9-629fb2113943.gif)

<br>

> input.html

정보 입력 페이지


- 해당 계정에 데이터가 없을 경우에 넘어올 수 있는 페이지입니다.
- 조회 페이지(index.html)에서 입력한 메일을 local Storage에 저장하여, 불러왔습니다. 
- 데이터를 입력하면, 최신 데이터로 추가/수정이 됩니다. 
- 데이터가 추가/수정이 되면, 데이터를 삭제할 수 있는 버튼이 나타납니다.
- 삭제 버튼을 클릭하면, 해당 필드를 DB에서 지울 수 있습니다.
![enter image description here](https://user-images.githubusercontent.com/102447800/226555930-cc413602-1a7f-4403-a7f7-6fe24694690c.gif)

<br>

## 칼라별 의미
### 녹색
- 로그인 된 이메일이 유효할 때

>  입력한 유저는 DB에 있고, 찾고자 하는 데이터도 DB에 있음을 나타냅니다. 해당 프로젝트에서는 찾고자 하는 데이터를 phone_number로 지정하였습니다.

![enter image description here](https://user-images.githubusercontent.com/102447800/226273953-3d4565f5-9939-42b0-833c-eee6a7b88f79.png)

- 데이터 입력 성공했을 때

> 데이터를 입력하여 DB에 성공적으로 저장했을 때 나타납니다.
> 새로 입력한 데이터가 무엇인지 하단 문구에 표시됩니다.
> 
![enter image description here](https://user-images.githubusercontent.com/102447800/226517191-d12efde2-07e1-4f68-a94a-e4c937473a7d.png)

- 데이터를 삭제할 때

> DB에 저장되어있는 데이터를 성공적으로 삭제했을 때 나타납니다. 
> 하단 문구에는 데이터가 성공적으로 지워졌다고 표시됩니다.
> 데이터는 존재하지 않으므로, 삭제 버튼은 없어집니다.

![enter image description here](https://user-images.githubusercontent.com/102447800/226551595-8a397f1b-928a-4fb9-9c01-d84a4d0ad6d4.png)

### 주황색 
- 유저는 DB에 있으나, 찾고자 하는 데이터가 없음을 표시합니다. 이때, 데이터를 입력할 창으로 넘어가는 링크가 나타납니다.
> -원 안에는 No data로 표시되며, 밑 문구에는 'No data'라는 문구가 표시됩니다. 

![enter image description here](https://user-images.githubusercontent.com/102447800/226274078-37459f50-1192-4298-8649-0157e0b6b356.png)

### 빨간색
하단에 에러 문구 및, 원 안에 에러 사항 표시
> - 없는 유저데이터: 원안에 404를 표시하고, 밑 문구에는 유효하지 않은 이메일이라는 표시를 합니다.
> 
![enter image description here](https://user-images.githubusercontent.com/102447800/226272154-a7f5feb3-9f45-4ca3-b603-57cf7ee4be50.png)
> - 아무 입력 없이 버튼을 눌렀을 때: 원 안에 'email is required'표시를 하고, 밑 문구에도 같은 표시를 합니다.

![enter image description here](https://user-images.githubusercontent.com/102447800/226270395-2baa3ae3-4221-4c17-95e1-9253350e0709.png)

> - 입력 에러: 정보 입력 창에서 입력을 하지 않았을 때 나타나는 에러입니다.

![enter image description here](https://user-images.githubusercontent.com/102447800/226551918-73afc146-961d-4d24-a0fd-7499d8903a96.png)

> - API연결 에러: 원안에 connect error표시가 되고, 밑 문구에는 어떤 에러인지 표시를 합니다.

![enter image description here](https://user-images.githubusercontent.com/102447800/226270293-b169df08-6e28-4cae-abe4-5ba7b1bb1726.png)


<br>

## 연락처 정보

guswls9281@gmail.com
