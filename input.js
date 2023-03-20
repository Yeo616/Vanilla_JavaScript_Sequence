const submitInfo = document.getElementById("submitInfo");
submitInfo.addEventListener("click", saveData);

const infoInput = document.getElementById("infoInput");

// 바뀌는 버튼
const changeCircle = document.getElementById("progressInfo");
const infoOutput = document.getElementById("infoOutput");

async function saveData(event) {
  // 폼 제출에 의한 페이지 새로고침 방지
  event.preventDefault();

  const infoValue = infoInput.value;
  console.log("input : ", infoValue);

  let email = localStorage.getItem("email");
  console.log(email);

  if (infoValue === "") {
    changeCircle.style.backgroundColor = "red";
    changeCircle.innerText = "info is required";

    infoOutput.innerHTML = "info is required";
    console.error("Info is required");
  }

  try {
    // FormData 객체 생성
    const formData = new FormData();
    formData.append("info", infoValue);
    formData.append("email", email);

    // Fetch API를 사용하여 요청 보내기
    const response = await fetch(`http://127.0.0.1:8000/post-info`, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData),
    });
    const data = await response.json();

    //응답이 정상적으로 완료되면
    if (response.ok) {
      //   infoOutput.innerHTML = JSON.stringify(data);
      infoOutput.innerHTML = JSON.stringify(data.status);
      console.log("response : ", data.status);

      // 버튼 색 바뀌기
      changeCircle.style.backgroundColor = "green";
      changeCircle.innerText = "success";
    }
  } catch (error) {
    // 응답이 정상이 아닐 경우,
    // 버튼 색 바뀌기
    changeCircle.style.backgroundColor = "red";
    changeCircle.innerText = "wrong input";
    infoOutput.innerHTML = error;
    console.error("catch error : ", error);
  }
}
