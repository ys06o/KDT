// 1.숫자
100; //숫자형
console.log(100); //1. 소괄호부터 읽는다.
console.log(typeof 150); //2 . typeof  자료형 알려주는것
// 100 vs "100"; //숫자형 vs 문자형 
// //http:hyper text transfer protocol

console.log(3.37); //컴퓨터는 소수점을 모른다. 제약<부동소수점>

//2.문자
console.log("안녕"); // 1.큰따옴표
console.log('hello'); // 2.작은따옴표
console.log(`hi`); // 3.백틱 키보드 tap 위에

// 4~7 이스케이프 문자(제어 문자)
console.log("\\안녕하세요"); //4. \\일때 \하나 출력
console.log("\n안녕5"); //5. \n 줄바꿈
console.log("\t안녕6"); //6. \t 일때 들여쓰기(tap 키)
console.log("\"안녕\""); //7. \"큰따옴표 출력

//8 템플릿 리터럴:문자열과 변수/수식/함수를 조합할때 사용
let 키=180;
console.log("나의 키:"+키); // 방법1:"문자열"+변수명 문자+숫자=문자이다.
console.log(`나의 키:${키}`); //방법2.백틱`${변수명} 2번 방법을 많이쓴다.

//10문자는 하나를 문자라고 하고 여러개를 문자열이라고 한다. 2개이상 문자=문자열 "문자열은 배열(여러개묶음)이다"

console.log('안녕하세요'.length); //문자열 길이(문자길이) 반환
console.log('안녕하세요'[1]); //안[0]녕[1]하[2]세[3]요[4] ->순서번호는 0부터 시작 즉 인덱스라고 한다.

//3. boolean(논리형) :(조건문/반복문에서 자주사용됨)
console.log(true);
console.log(false);

//4 특수 
let var1; //변수를 선언 초기(처음)에 값을 대입(=)하지 않았다. 초기값이 없다.
console.log(var1); // 1. undefined,변수는 존재하지만 값이 없다.
let var2=null; //null vs""vs undefined 다른것
console.log(var2); //변수에 데이터가 유효하지않는다. 정의는 한것

//5. 배열:여러개 자료들을 *순서*대로 저장하는 *자료*즉 배열도 자료다
let ary1=['봄','여름','가을','겨울'];
// 1)let ary1:변수명과 선언/만들기
// 2)=대입,오른쪽 자료를 왼쪽 상자에 넣기
// 3)'봄','여름' :자료(리터럴)
// 4)[]:배열

//6.인덱스:배열내 저장된 순서번호:*0번부터 시작*,중간의 삭제되더라도 한칸씩 당겨진다.
console.log(ary1[0]); // 변수명[인덱스 번호]
console.log(ary1[1]);
console.log(ary1[2]);
console.log(ary1[3]);
console.log(ary1[4]); //undefined

//7.배열내 자료(요소) 수정:변수명[수정할인덱스]=새로운값
ary1[0]='spring'; //수정
console.log
console.log(ary1);

//8.배열내자료(요소)추가 변수명.push(새로운값)
ary1.push('sp2');
console.log(ary1);

// 9.배열내자료(요소) 삭제 변수명.splice(삭제할 인덱스,개수)
ary1.splice(2,1); //2번 인덱스부터 한개 삭제
console.log(ary1);

//10배열내자료(요소) 중간 삽입:변수명.splice(삽입할 인덱스,0,추가할 자료명)
ary1.splice(2,0,'가을');
console.log(ary1);

// 10.배열내자료(요소)값 찾기:변수명.indexOf(찾을값),찾을값이 존재하면 인덱스 반환,없으면 -1

let result=ary1.indexOf('가을');
console.log(result);

// 11.배열내요소 개수 반환:변수명.length
let count=ary1.length
console.log(count);

// 형변환 ,다른 프로그래밍/환경 통신간의 데이터 변환 다수 발생
let input=prompt("숫자를:") //prompt 무조건 문자열로 반환한다.
console.log(typeof input); //100->문자열로 뜬다
input=input*1;
console.log(typeof input); //"100 *1"-->숫자로변환됨
input=Number(input);
console.log(typeof input);
console.log(Number("100")); //100->숫자 100

console.log(parseInt("100"));
console.log(parseFloat("3.14")); //"3.14"->숫자 3.14
console.log(String(100)); //100->"100"
console.log(100+"");
console.log(Boolean("true")); //"ture"->true





















