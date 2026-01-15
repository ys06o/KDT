function url() {
  //1.url 상의 웹주소 가져오기
  const url = new URLSearchParams(location.search);
  //2.웹주소에서 선택된 게시물번호(쿼리스트링값)가져오기
  const selectNo = url.get('no');
  //3.localStorage에서 배열 가져오기
  let boardList = localStorage.getItem('boardList');
  boardList = (boardList == null) ? [] : JSON.parse(boardList);
  return { selectNo, boardList };
}



//(1)쿼리스트링에서 특정한 게시물번호의 정보 조회
getBoard();

function getBoard() {
  const { selectNo, boardList } = url();
  //4.선택된게시물번호와 일치한 게시물 찾기 
  for (let index = 0; index <= boardList.length - 1; index++) {
    const obj = boardList[index];
    if (obj.no == selectNo) {
      document.querySelector('#title').innerHTML = obj.title;
      document.querySelector('#content').innerHTML = obj.content;
      return;
    }
  }
}



//2.삭제함수

function boardDelete() {
  const { selectNo, boardList } = url();
  for (let index = 0; index <= boardList.length - 1; index++) {
    if (obj.no == selectNo) {
      const confirm = prompt("비밀번호 입력");
      if (obj.pwd == confirm) {
        boardList.splice(index, 1);
        localStorage.setItem('boardList', JSON.stringify(boardList));
        alert("삭제 성공");
        location.href = "list.html"
      }
    } else {
      alert("비밀번호 불일치");
    }
  }
}


//3.수정 함수
function boardUpdateView() {
  const { selectNo, boardList } = url();
  for (let index = 0; index <= boardList.length - 1; index++) {
    const obj = boardList[index];
    if (obj.no == selectNo) {
      const confirm = prompt("비밀번호 입력");
      location.href = `update.html?no=${selectNo}`;
    } else {
      alert("비밀번호 불일치");
    }
  }
}


