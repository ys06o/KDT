// [지문1] prompt 함수로 국어 , 영어 , 수학 점수를 각 입력받아서 (각 변수에 저장하고) 총점 과 평균을 계산하여 console탭에 출력하시오.
// 1]산술연산자:+,-,*,/,% 몫:parseInt(10/3)
// console.log(10+3); //13
// console.log(10-3); //7
// console.log(10*3); //30
// console.log(10/3); //3.3333333333333335
// console.log(parseInt(10/3)); //몫 3
// console.log(10%3); //나머지 1

// let ko=Number(prompt("국어 점수를 입력하세요."));
// let en=Number(prompt("영어 점수를 입력하세요."));
// let mt=Number(prompt("수학 점수를 입력하세요."));
// let total=ko+en+mt;
// let avarage=(total/3);

// console.log(`총점수:${total}`); // `
// console.log(`평균점수:${avarage}`);

// // [지문2] prompt 함수로 반지름를 입력받아서 원넓이[반지름*반지름*3.14] 계산하여 console탭에 출력하시오.
// let radius=Number(prompt("반지름을 입력하세요."));
// let area=radius*radius*3.14;

// console.log(`원넓이:${area}`);


// [지문3] prompt 함수로 두 실수를 입력받아서 앞 실수의 값이 뒤실수의 값의 비율% 계산하여 console탭에 출력하시오.
// // let one=Number(prompt("첫번쨰 실수를 입력하세요"));
// // let two=Number(prompt("두번쨰 실수를 입력하세요"));

// let pacent=(one/two)*100;
// console.log(`비율:${pacent}%`);
// // [지문4] prompt 함수로 정수를 입력받아 입력받은 값이 홀수이면 true / 짝수이면 false 로 console탭에 출력하시오.
// let one=Number(prompt('정수를 입력하세요.'));
// let result=(one%2==1);
// console.log(`결과:${result}`);

// [지문5] prompt 함수로 정수를 입력받아 입력받은 값이 7의 배수이면 true / 아니면 false 로 console탭에 출력하시오.
// let num=parseInt(prompt('정수를 입력하세요'));
// console.log(`결과:${num%7==0}`);

// [지문6] prompt 함수로 아이디 와 비밀번호를 입력받아서 (입력받은)아이디가 'admin' 이고 (입력받은)비밀번호가 1234 와 일치하면 true / 아니면 false 출력하시오.
// let id=String(prompt("아이디를 입력하세요"));
// let password=Number(prompt("비밀번호를 입력하세요"));
// console.log(`결과:${id=='admin'&&password==1234}`);

// [지문7] prompt 함수로 정수를 입력받아 입력받은 값이 홀수 이면서 7배수 이면 true / 아니면 false 로 console탭에 출력하시오.
// let num=parseInt(prompt("정수를 입력하세요"));
// console.log(`결과:${num%2==1&&num%7==0}`);

// [지문8] 1차점수 와 2차점수 prompt함수로 각 입력받아서 총점이 150점이상이면 '합격' 아니면 '불합격' HTML의 <h3> 에 출력하시오.


// 할당/대입연산자
// 오른쪽 자료를 왼쪽에 대입,let 변수명=3
// += 오른쪽 자료를 왼쪽 자료와 더한 후 왼쪽에 대입
// ->let a=2; a+=3,a는 5가 저장된다.
// ->let  a=2; a=a+3; a는 5가 저장된다.

// //5.증감연산자 증가,또는 감소 연산자
// ++,--
// 1.선위 증가:++변수명;,선위 감소:--변수명;
// 2.후위 증가: 변수명++;,후위 감소:변수명--;
// // *선위 후위는 ;(세미콜론)/문장

// let age=40;
// age++; //혼자 있을때는 차이점x
// ++age; //혼자 있을때는차이점x

// console.log(++age);  //세미콜론 안에 여러 명령어가 존재하므로 차이 존재
// console.log(age++);
// let score1=prompt('1차점수를입력하세요');
// let score2=prompt('2차점수를입력하세요');
// let sum=Number(score1)+Number(score2);
// let result=sum>=150 ?'합격':'불합격';

// document.querySelector('h3').innerHTML=`실습8: ${result}`; //미리 h3 마크업을 만들어야 한다.,js파일 호출 코드 위에 html이 존재해야한다. 즉 js파일은 가장 하단에 작성한다.



// [지문9] 두 사람의 이름을 prompt함수로 각 입력받아서 만일 이름이 '유재석' 이면 뒤에 (방장) 이라고 이름 뒤에 붙 이고 아니면 생략한다.  HTML의 <ol> 에 결과를 출력하시오.


let person1=prompt('첫번째 이름을 입력하세요');
let person2=prompt('두번째 이름을 입력하세요');

person1+=person1=='유재석' ? '(방장)': ' ';
person2+=person2=='유재석' ? '(방장)': ' ';

let result2=`
  <li>${person1}</li>
  <li>${person2}</li>
  `;
  
  document.querySelector('ol').innerHTML=result2;
  //연산은 매개변수(연산은 인수에 따라 결과를 항상다르게 반횐된다.)


