//함수=기능==여러코드들의 집합

//1.출력 기능/함수
console.log("안녕하세요");
alert("안녕하세요");
document.write("<h3>안녕하세요</h3>"); //html는 문자언어이기 때문에 큰따옴표 사용
document.querySelector("h3").innerText="안녕하세요2";

//과정최종흐름:HTML <-----JS리액트<----자바/파이썬/노드js <---데이터베이스

//2.입력 기능/함수

let 반환값1=confirm(); //확인/취소
let 반환값2=prompt(); //입력창 제공 알림,사용자가 입력한 값이 변수의 저장된다.
let 반환값3=x+y;

let 반환값4=document.querySelector("h3").innerHTML;
console.log(반환값4);


