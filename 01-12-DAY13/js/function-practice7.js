/*[ JS 함수 실습 ]*/
/*실습 1: 성인 인증 함수
나이(age)를 매개변수로 받아, 20세 이상이면 true를, 미만이면 false를 반환하는 isAdult 함수를 만드세요. isAdult(25)와 isAdult(17)의 결과를 각각 콘솔에 출력해 보세요.*/

// function isAdult(age) {
//   return age >= 20;
// }
// console.log(isAdult(25));
// console.log(isAdult(17));

/*실습 2: 배열의 총합 구하기
숫자로 이루어진 배열을 매개변수로 받아, for 반복문을 사용해 모든 요소의 합계를 구하여 반환하는 sumArray 함수를 만드세요. 아래 numbers 배열로 테스트해 보세요.
const numbers = [10, 20, 30, 40, 50];*/
const numbers = [10, 20, 30, 40, 50];
function sumArray(list) { //매개변수란? 함수호출시 전달되는 인자값 연결되는 변수 //주의할점: 매개변수는 지역변수 특징으로 함수밖 numbers를 인자값으로 전달하더라도 서로다르다.
  let sum = 0;
  for (let index = 0; index <= list.length - 1; index++) {
    sum += list[index];
  }
  return sum;
}
console.log(sumArray(numbers));


/*실습 3: 가장 긴 단어 찾기
문자열로 이루어진 배열을 매개변수로 받아, for 반복문을 사용해 가장 긴 단어를 찾아 반환하는 findLongestWord 함수를 만드세요. 아래 words 배열로 테스트해 보세요.
const words = ['apple', 'banana', 'kiwi', 'strawberry'];*/
const words = ['apple', 'banana', 'kiwi', 'strawberry'];
function findLongestWord(word) {
  let longword = word[0];
  for (let i = 1; i <= word.length - 1; i++) {
    if (longword.length < word[i].length) {
      longword = word[i];
    }
  }
  return longword;
}
console.log(findLongestWord(words));

/*실습 4: 게임 점수 관리하기
let userScore = 0; 전역 변수를 만드세요. gainScore() 함수는 userScore를 10 증가시키고, loseScore() 함수는 5 감소시킵니다.
gainScore()를 세 번, loseScore()를 한 번 호출한 뒤, 최종 점수를 콘솔에 출력하세요.*/
let userScore = 0;
function gainScore() {
  userScore += 10;
}
function loseScore() {
  userScore -= 5;
}
gainScore();
gainScore();
gainScore();
loseScore();
console.log(userScore);



/*실습 5: 최고 점수 학생 찾기
전역변수 students 배열 데이터를 이용하여 , 가장 높은 점수(score)를 가진 학생의 이름을 찾아 반환하는 findTopStudent 함수를 만드세요.
const students = [
  { name: '김철수', score: 85 },
  { name: '이영희', score: 92 },
  { name: '박민준', score: 78 }
];*/
const students = [
  { name: '김철수', score: 85 },
  { name: '이영희', score: 92 },
  { name: '박민준', score: 78 }
];

function findTopStudent() {
  let topStudent = students[0];

  for (let i = 1; i <= students.length-1; i++) {
    if (students[i].score > topStudent.score) {
      topStudent = students[i]; //속성값을 비교하여 객체대입
    }
  }

  return topStudent.name;
}

let result = findTopStudent();
console.log(result);


/*실습 6: 상품 목록 페이지 만들기
전역변수 products 배열 데이터를 이용하여, 각 상품을 소개하는 HTML 요소를 동적으로 만들어 페이지에 표시하는 renderProducts 함수를 만드세요.
각 상품은 이름(<h4>), 가격(<p>), 재고(<p>)를 포함한 div로 묶여야 합니다.
div h4 p p div
const products = [
  { name: '노트북', price: 1200000, stock: 5 },
  { name: '모니터', price: 350000, stock: 12 },
  { name: '키보드', price: 80000, stock: 25 }
];*/
const products = [
  { name: '노트북', price: 1200000, stock: 5 },
  { name: '모니터', price: 350000, stock: 12 },
  { name: '키보드', price: 80000, stock: 25 }
];



function renderProducts() {
 let html = "";
 for(let index6=0; index6<=products.length-1; index6++){
  let prod=products[index6];
  html+=`<div>
  <h4>${prod.name}</h4>
  <p>${prod.price}</p>
  <p>${prod.stock}</p>
  </div>`
}  
document.write(html);
}
renderProducts();

/*실습 7: 간단한 계산기
num1, num2, operator ( '+', '-') 세 개의 매개변수를 받는 calculator 함수를 만드시오.
operator가 '+'이면 두 수의 합을, '-'이면 두 수의 차를 콘솔에 출력하시오. (if문 사용)*/

function calculator(num1, num2, operator) {
  if (operator == '+') {
    console.log(num1 + num2);
  }
  if (operator == '-') {
    console.log(num1 - num2);
  }
}
calculator(10, 10, '-');


/*실습 8: HTML 리스트(ul, li) 동적 생성
todoList라는 할 일 목록이 담긴 전역 배열이 있습니다.
renderList() 함수를 정의하시오. 이 함수는 todoList 배열을 순회하며 <li>할 일 내용</li> 형태의 HTML 문자열을 만듭니다.
최종적으로 이 문자열을 HTML <ul> 태그로 표현하여 리스트를 화면에 그리시오.
let todoList = ['장보기', '운동하기']*/

let html8=`<ul>`;
let todoList = ['장보기', '운동하기'];
function renderList(){
  for(let index8=0; index8<=todoList.length-1; index8++){
    let todo=todoList[index8]; //index번쨰 객체 1개 호출하여 변수에 담음.
    html8+=`<li>${todo}</li>`;
  }
  html8+=`</ul>`;
  document.write(html8);
}
renderList();

/*실습 9: 입장료 계산 함수
임의의 나이(age)를 매개변수로 받아 입장료를 반환하는 getTicketPrice 함수를 만드시오.
8세 미만: "무료"
8세 이상 19세 이하: "5,000원"
20세 이상: "10,000원"
계산된 가격 문자열을 반환(return)하시오.*/
function getTicketPrice(age){
  let ticket="";
  if(age<8){
    ticket="무료";
  }
  else if(age>=8&&age<=19){
    ticket="5,000원";
  }
  else{
    ticket="10,000원";
  }
  return ticket;
}
console.log(getTicketPrice(19));

// 변수의 종류를 분류하는 시점:선언
// 선언:키워드가 기준
