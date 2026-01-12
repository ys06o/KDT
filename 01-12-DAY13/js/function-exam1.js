// [1] 함수:함(상자/공간/블럭) 수(숫자/코드/명령어)
// 누군가가 상자에 미리 넣어둔 숫자/코드
// 왜? 한번 넣어둔 숫자/코드를 재사용 수학(공식), 라이브러리/API

// [2]함수정의
function 내가만든함수() {   //함수 시작
  console.log("내가만든함수");                     // 중괄호 안에 미리 정의할 코드/명령어
}  //함수 끝

// [3]함수 호출/사용하기
내가만든함수();


// [4]함수 종류:1.내가만든함수 function 2.남이만든함수 console.log() alert()등등

// [5]함수 예:
function 믹서기함수(과일) {
  let 주스 = 과일 + "주스";  //믹서기 함수가 처리하는 코드 정의/만들기
  return 주스;
}  //매겨변수는 함수가 종료되면 사라진다.<지역변수 특징>
let 컵 = 믹서기함수("사과");    //믹서기함수에 "사과"라는 문자열을 전달했다. 인자값/인수
//참고:"사과"이면 자료이고, 사과이면 변수/함수명(키워드)
let data = "딸기"
let 컵2 = 믹서기함수(data);
//변수는 값을 저장,함수는 코드를 저장하는것 //반복문은 조건에따른 재사용!!

// [6]매개변수x, 반환x
function func1() {
  console.log("func1 exe");
}
func1();

//매개변수 O,반환x 대표적으로 console.log();
function func2(x, y) {
  console.log("func2 exe");
}
func2(2, 6);

//매개변수 o,반환o 대표적으로 prompt();
function func3(x, y) {                                     //,생활:자판기(돈->음료)
  console.log("fun3 exe");
  return x + y;
}
let result1 = func3(3, 6);

// 매개변수x,반환o
function func4() {
  console.log("fun4 exe");
  return 10;
}

let result2 = func4();


// [7]지역변수란? 특정한 if/for/함수 {}안에서 선언된 (매개)변수는 {}밖에서 호출/사용 안된다.
let 전역변수 = "대한민국";

if (true) {
  let 지역변수1 = "경기도";
  console.log(지역변수1);

  for (let i = 0; i < 1; i++) {
    let 지역변수2 = "안양";
    console.log(지역변수2);
  }

  // console.log(지역변수2);
  // console.log(지역변수1);
}

function func5(지역변수3) {
  let 지역변수4 = "수원시";  //즉 매개변수 또한 지역변수의 특징을 갖는다. 장점:함수 호출/사용 시에만  메모리(저장소)사용한다.
}
func5("안산시");
// console.log(지역변수3);
//   console.log(지역변수2);

// console.log(지역변수1); //지역변수1 is not defined //지역변수의 특징


// [8]함수 호출/사용 방법
//(1)JS에서 호출:함수명();
alert("js에서 실행");
// (2)HTML에서 호출:<마크업명 이벤트속성명="함수명()"/>
// onclick:해당 마크업 클릭했을때 발생
