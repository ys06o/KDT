/*
[인터벌:inteval]:간격/주기
   1.시간적인 간격에 따라 특정 코드/함수 실행
   2.사용법
     setinteval(함수명,밀리초);
     -함수명:함수명만 작성한, ()생략 함수이름:fuc()이면 fuc만쓴다.
     -밀리초:1/1000초
*/

//[1]
let value = 0;
function 증가함수() {
  value += 1;
  const box1 = document.querySelector("#box1");
  box1.innerHTML = value;
}

//특정한 시간 간격마다 함수실행

setInterval(증가함수,1000); //1초 마다 증가함수가 자동으로 실행

//주의할점:증가함수:함수 그자체vs 증가함수():함수실행


function 시계함수(){
  // new Date():현재 시스템에 날짜랑 시간 반환 함수
  let today=new Date();
  let hour=today.getHours();
  let minute=today.getMinutes();
  let second=today.getSeconds();
  let time=`${hour}:${minute}:${second<10?'0'+second:second}`;
  const box2=document.querySelector("#box2");
  box2.innerHTML=time;
} //f end

setInterval(시계함수,1000); //자동으로 1초마다 시계함수가 실행된다.






let time=0; //현재 타이머의 시간(초)
let timerId; //interval 객체를 저장하는 변수


function 타이머시작(){
  //interval실행후 반환된 객체를 timerId에 대입
  // 왜? 추후에 제어(종료)하기 위해서
  timerId=setInterval(시간함수,1000);

}

function 타이머종료(){
  clearInterval(timerId); //clearInterval(종료할 interval객체)
}

function 시간함수(){
  time++; //1증가
  document.querySelector("#box3").innerHTML=time;
  //유재석객체.편의점에서 고르기().innerHTML
}



