//[1]객체 선언 방법
{ }
//[2]선언한 객체를 변수에 대입
let obj1 = {};
//[3]객체 선언과 동시에 속성{속성명:값}정의/구성
//3-1속성명과 속성값은 하나의 쌍(엔트리=entry)이며 ,(쉼표)로 구분한다.
//3-2속성명은 문자취급하며,특수문자가 들어간 경우," "or' '로 감싼다. 
//3-3속성명은 자료(속성값)를 식별하는 목적으로 동일한 객체내 중복 불가능하다.

let obj2 = { 속성명1: 10, 속성명2: "hello" };

//[4]객체 호출     
console.log(obj2);
console.log(obj2.속성명1);   //.(접근/도트 연산자)이란? 앞에있는 항의 주소값(위치/포인터)
console.log(Object.keys(obj2));
console.log(Object.values(obj2));
console.log(Object.entries(obj2)); //키 값을 배열로 반환한다.

//[5]객체 속성(엔트리)추가 객체변수명.새로운 속성명=값;
obj2.속성명3 = true;

//[6]객체 속성 값 수정,객체변수명.수정할속성명=새로운값;
obj2.속성명3 = false;

//[7] 객체 속성 삭제, delete 객체변수명.속성명;
delete obj2.속성명3;
//[8]객체 속성 내 모든 자료형(타입) 가능하다.
let obj3 = { a: 1, b: "안녕", c: 'ture', d: { aa: 1, bb: 2 } };

//[9]in 연산자:해당 객체 내 속성이 있는지 확인 ture/false
console.log('1' in obj3);
console.log('a' in obj3);






