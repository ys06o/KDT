//사용자가 값을 입력하고 등록버튼을 누르면 게시판이 등록되는 함수
function boardWrite() {
  //1.사용자한테 입력받은 마크업 가져오고 값 가져오기.
  const title = document.querySelector('#titleinput').value;
  const content = document.querySelector('#contentinput').value;
  const pwd = document.querySelector('#pwdinput').value; 
  //2.객체생성(속성명괴 속성값이 같으므로 속성값 생략)
  const obj = { title, content, pwd };
  //4.localStorage에서 배열 가져오기
  const boardList=JSON.parse(localStorage.getItem('boardList'))||[];
  //5.no속성(게시물 번호)추가, 
  obj.no = boardList.length == 0 ? 1 : boardList[boardList.length - 1].no + 1;
  boardList.push(obj);
  //6.localStorage에 배열 저장하기.
  localStorage.setItem('boardList', JSON.stringify(boardList));

  // 7.기타
  alert("게시물 작성 성공");
  location.href = 'list.html';
}


