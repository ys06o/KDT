// [1] 객체: 서로 다른 자료들을 하나의 자료로 구성하는 것
// 종류: (1) 직접 만든 객체 { }  (2) 내장 객체 console, document (미리 만들어진 기능)
console.log(document); // 현재 HTML 객체 출력

// [2] .write(): HTML에 문자열 출력
document.write("<h3>내장객체 함수실행</h3>");

// [3] .querySelector(): CSS 선택자로 마크업 객체 1개 반환
let div = document.querySelector("div");   // <div> 객체 가져오기
let box2 = document.querySelector(".box2"); // .box2 객체 가져오기
let box3 = document.querySelector("#box3"); // #box3 객체 가져오기
// ※ 변수에는 함수의 '실행 결과'가 저장됨

// [4] .querySelectorAll(): 조건에 맞는 모든 마크업을 '배열'로 반환
let div2 = document.querySelectorAll("div"); 
console.log(div2);

// [5] .innerHTML: 선택된 마크업 사이의 텍스트/HTML 호출 및 변경
let html1 = document.querySelector("#box3").innerHTML; // 읽기
document.querySelector("#box3").innerHTML = "박스3";    // 수정

// [6] .value: 입력 태그(input 등)의 값 호출
function func1() {
  let value = document.querySelector(".myInput").value; // 값 가져오기
  console.log(value + "입력:");
  document.querySelector(".myInput").value = " ";       // 값 비우기
}

function func2() {
  document.querySelector(".title").innerHTML = "js에서 넣어준";
}

// [7] .style: 디자인 변경 (카멜 표기법 사용)
function func3() {
  // .이 많아지면 코드가 복잡해지므로 변수에 담아서 활용
  let title2 = document.querySelector(".title2");
  
  title2.style.color = "red";             // 글자색
  title2.style.backgroundColor = "blue";  // 배경색 (- 대신 대문자)
}