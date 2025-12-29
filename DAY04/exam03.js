// [1] 조건문:조건이 ture이면 코드실행
// vs
// 삼항연산자 
// 1. 복잡한 논리 할때 가독성 떨어짐
  //  2.ture와 false(항) 함수호출 또는 변수선언 불가능하다.
  
// 10>5 ?console.log('참');:console.log('거짓');

if(10>3){
  console.log("[1]:참");
}
if(10<20){
  console.log('1-2참');
}

// [2]명령어 문장이 2개이상이면 {}로 묶는다
if(10>3){
  console.log("2-1참");
  console.log("거짓");
}

// [3]조건이 참일때,거짓일때

if(10>20){
console.log("4-1참");
}
else if(10>15)
{
console.log("4-2참");
}
else if(10>5){
console.log("4-3참");
}
else{
  console.log("false");
}