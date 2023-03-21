const submitButton = document.getElementById("submitButton");
submitButton.addEventListener("click", loadData);

const progress_circle = document.getElementById("process");

const inputField = document.getElementById("inputField");
const output = document.getElementById("output");
const turnPage = document.getElementById("turnPage");
const pageLink = document.getElementById("link");

// 로그인된 아이디
// const email = "yeoo0@gmail.com";

async function loadData(event) {
  // 폼 제출에 의한 페이지 새로고침 방지
  event.preventDefault();

  const inputValue = inputField.value;

  localStorage.setItem("email", inputValue);

  if (inputValue === "") {
    progress_circle.style.backgroundColor = "red";
    progress_circle.innerText = "email is required";

    output.innerHTML = "email is required";
    console.error("email is required");
    return
  }
  try {
    // Fetch API를 사용하여 요청 보내기
    console.log(inputValue);
    const response = await fetch(
      `http://127.0.0.1:8000/get-email?email=${inputValue}`
    );
    console.log(response);

    //응답이 정상적으로 완료되면
    if (response.ok) {
      const data = await response.json();
      console.log("data : ", data);

      // 찾는 데이터가 없을 경우에
      if (data.status === "non-exist") {
        // 데이터가 없으면, 입력페이지로 전환 시키기
        turnPage.style.display = "block";
        pageLink.innerText = "정보 입력하기";

        progress_circle.style.backgroundColor = "orange";
        progress_circle.innerText = "No data";

        output.innerHTML = "No data";
        console.error("Network response was not ok : ", response.status);
      } else {

        // 화면에 데이터 출력
        output.innerHTML = JSON.stringify(data.status);

        // 버튼 색 바뀌기
        progress_circle.style.backgroundColor = "green";
        progress_circle.innerText = "done";

                // 데이터가 없으면, 입력페이지로 전환 시키기
                turnPage.style.display = "block";
                pageLink.innerText = "정보 수정하기";
      }
    } else {
      // 입력페이지는 보이지 않아아야함.
      turnPage.style.display = "none";
      // 응답이 정상이 아닐 경우,
      // 버튼 색 바뀌기
      progress_circle.style.backgroundColor = "red";
      progress_circle.innerText = "404";
      output.innerHTML = "no such email";

      console.error("no such email ");
    }
  } catch (error) {
    // 입력페이지는 보이지 않아아야함.
    turnPage.style.display = "none";
    // 응답이 정상이 아닐 경우,
    // 버튼 색 바뀌기
    progress_circle.style.backgroundColor = "red";
    progress_circle.innerText = "connect error";
    output.innerHTML = error;
    console.error("catch error : ", error);
  }
}
