// [1]안녕하세요. 5번 출력하세요.
console.log("안녕하세요.");
console.log("안녕하세요.");
console.log("안녕하세요.");
console.log("안녕하세요.");
console.log("안녕하세요."); //복붙

//[2] 반복되는 코드,반복되지 않는 코드
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5); //복붙
//문제점:반복수가 늘어나면 코드도 같이 늘어남. 즉 비효율적이다.
//1.반복되는 코드:console.log(?);
//2.반복되지 않는 코드:1 2 3 4 5
//3.반복되지않는 코드의 패턴 찾기:1부터5까지 1씩 증가하고있음
// 초기값:1,조건문:5까지,증감식:1씩,반복코드:console.log();


for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// [3] 1부터 5까지 총합계를 구하시오.

// let sum=0; //총합계 저장 변수
// sum+=1;
// sum+=2;
// sum+=3;
// sum+=4;
// sum+=5;
//1.반복되지않는 코드:1.let sum=0; 2.(1,2,3,4,5)
// 2반복되는 코드:sum+=
// 3.반복되지않는 코드:증감패턴 2.1부터 5까지 1씩 증가
// 초기값:let 더할값=1;
// 조건문:더할값<=5;
// 증감식:더할값++;

let sum = 0;
for (let i = 1; i <= 5; i++) {
  sum += i;
}
console.log(sum);

//[4]배열과 반복문의 관계 배열내 저장된 자료들은 인덱스가 존재한다...
// 인덱스란? 배열내 저장된 자료들의 순서번호*0번시작,1씩 증가
//반복문 초기값이 배열의 인덱스=0
//반복문 조건문과 배열명.length
let ary = []; //빈배열 생성
// let a = prompt("값:"); ary.push(a);
// let b = prompt("값:"); ary.push(b);
// let c = prompt("값:"); ary.push(c);

for (let count = 1; count <= 3; count++){
  let d=prompt("값:");
  ary.push(d);
}
console.log(ary);


//
