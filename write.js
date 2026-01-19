function boardWrite() {
  let title = document.querySelector("#title").value;
  let content = document.querySelector("#title").value;
  let pw = document.querySelector("#pw").value;

  let obj = { title, content, pw };

  let boardList = localStorage.getItem('boardList');
  boardList = (boardList == null) ? [] : JSON.parse(boardList);
  obj.no = (boardList.length == 0) ? 1 : boardList[boardList.length - 1].no + 1;

  boardList.push(obj);

  //배열에 객체 저장
  //스토리지에 다시 저장
  localStorage.setItem('boardList',JSON.stringify(boardList));

  alert("게시물 등록성공");
  location.href = 'list.html';
}