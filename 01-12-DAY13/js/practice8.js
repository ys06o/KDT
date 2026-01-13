// [1]:메모리 설계
// 표=배열,행=레코드=객체1,표제목=속성명,셀[한칸]=데이터/속성값

let 항목목록 = [{ 코드: 1, "날짜": "2026-01-26", "항목": "아메리카노", "금액": 1500 }, { 코드: 2, "날짜": "2026-01-26", "항목": "아메리카노", "금액": 1500 }];
//화면에는 보이지 않지만 내부적으로 객체/레코드 식별하는 식별코드를 정의하면좋다. <중복없는데이터>
// [2]기능 설계
//화면에 보이는 이벤트/행위, 화면에 보이지 않는 이벤트 찾기
// 1.등록 처리 기능 필요 =등록(create)
// 매개변수:x,리턴값:x,처리:document.querySelector을 이용해서 입력받은 3개데이터를 객체로 만들어서배열에 저장,발동조건:등록버튼을 클릭했을떄
// 2.표에 출력하는 기능 필요=출력(read)
//  매개변수:x,리턴값:x,처리:현재 전역배열에 저장된 모든 객체를 tr로구성하여 html에 출력,발동조건:등록을 성공했을때
// 참고:1.함수/기능은 나눠서 따로 만드는것이 좋다.  why?유지보수의 용이,나누는기준:CRUD
// 참고2.배열을 전역변수로 사용한 이유는 서로다른 함수들 간의 공유(같은 배열) 사용하기 위해
//[3]구현
//3-1 등록함수  
function 등록함수() {
  // 1.입력받은 값 가져오기
  let dateDom = document.querySelector(".날짜입력"); 
  let date = dateDom.value;

  let contentDom = document.querySelector(".항목입력");
  let content = contentDom.value;

  let money = document.querySelector(".금액입력").value;
  // (1)document.querySeletor를 이용하여 dom가져오기
  // (2).value깂 가져오기
  // 2. 입력받은 값들을 객체 구성
  let code = 항목목록[항목목록.length - 1].코드 + 1;
  let obj = { 코드: code, "날짜": date, "항목": content, "금액": money };
  // {속성명:값,속성명:값}
  // 3.(전역)배열에 저장+백엔드 통신
  항목목록.push(obj);
  alert("등록성공");
  contentDom.value = ""; //추가코드2:입력받은값 초기화
  // 배열변수명.push()
  출력함수(); //즉시 테이블에 반영
}


function 출력함수() {
  //1.어디에:tbody  
  let 테이블본문 = document.querySelector(".테이블본문");
  // 2.무엇을:배열내 객체들을 <tr></tr>로 구성
  let html = ``;
  for (let index = 0; index <= 항목목록.length - 1; index++) {
    let obj = 항목목록[index];
    html += `<tr>
          <td>${obj.날짜}</td>
          <td>${obj.항목}</td>
          <td>${obj.금액}</td>
        </tr>`;
  }
  // 3.출력:구성된 html출력
  테이블본문.innerHTML =html;
}
//[4]테스트 
