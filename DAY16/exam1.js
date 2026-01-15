console.log(var1);
func1();

//[2]JS는 HTML에 종속된 관계라서 F5누르면 초기화(변수재생성)
//즉, 그래서 백엔드가 필요하다.
//자동로그인,검색기록,비회원제 장바구니,최근본제품 등등 (쿠키)

//웹스토리지(브라우저)저장소 제공:F12(application)클릭->사이드바 메뉴
// [로컬저장소]/[세션 저장소]

// 2.종류
console.log(sessionStorage);
console.log(localStorage);



// 3.주요 함수 기능
// 1].setItem('key,value');   //세션/로컬 저장소의 속성/자료 추가
// 2].getItem  :세션/로컬 저장소의 'key'의 해당하는 자료호출
// 3].removeItem:세션/로컬 저장소의 'key'의 해당하는 자료삭제
// 4].clear(); :모든 'key'삭제
sessionStorage.setItem('name','유재석');
localStorage.setItem('age',40);  //F12->aplication탭에서 확인가능
//2.차이점   1.local은 서로다른 html간의 자료를 공유 단 도메인이 동일해아한다. session은 x

// 2.localstorage는 모든 브라우저가 종료되도 자료 저장<사용자가 직접 삭제>


// 4.JSON변환
// 1]JSON.stringify:JS객체->JSON문자열
console.log(sessionStorage.getItem('name'));
console.log(localStorage.getItem('age'));

sessionStorage.removeItem('name'); 
localStorage.removeItem('age');

// 4]활용:복잡한 샘플 데이터
// 세션/로컬 저장소는 문자열만 저장가능! 배열/객체를 문자열로 변환해야한다. *****JSON:자바스크립트 객체 기반의 문자열 형식

sessionStorage.setItem('회원목록',JSON.stringify([{name:"유재석",age:40},{name:"강호동",age:40}]));
console.log(JSON.parse(sessionStorage.getItem('회원목록')));