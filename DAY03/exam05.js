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

  // let score1 = Number(prompt("1차 점수를 입력하세요"));
  // let score2 = Number(prompt("2차 점수를 입력하세요"));
// [지문9] 두 사람의 이름을 prompt함수로 각 입력받아서 만일 이름이 '유재석' 이면 뒤에 (방장) 이라고 이름 뒤에 붙 이고 아니면 생략한다.  HTML의 <ol> 에 결과를 출력하시오.