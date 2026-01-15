
// let memberList = [{ "no": 1, "id": "sdf", "pw": "dsf" }];

function signup() {
  let id = document.querySelector('.signId').value;
  let pw = document.querySelector('.signPw').value;


  let memberList = localStorage.getItem("memberList");
  if (memberList == null) {
    memberList = [];
  } else {
    memberList = JSON.parse(memberList);
  }

  for(let i=0; i<=memberList.length-1; i++){
    if(memberList[i].id==id){
      alert("중복된 아이디입니다.");
    }
    return;
  }

  let no = memberList.length >= 1 ? memberList[memberList.length - 1].no + 1 : 1;
  //만약에 회원목록에서 1개이상이면 마지막 회원번호에 +1 아니면 1
  const members = { 'no': no, 'id': id, 'pw': pw };
  memberList.push(members);
  alert("회원가입 성공");
  localStorage.setItem("memberList", JSON.stringify(memberList));
}


//2.로그인함수:매:x, 리:x,처:입력받은값이 배열내 존재하는지[비교]

function login() {
  let id = document.querySelector('.loginId').value;
  let pw = document.querySelector('.loginPw').value;


  let memberList = localStorage.getItem("memberList");
  if (memberList == null) {
    memberList = [];
  } else {
    memberList = JSON.parse(memberList);
  }

  for (let index = 0; index <= memberList.length - 1; index++) {
    const members = memberList[index];
    if (members.id == id && members.pw == pw) {
      alert("로그인 성공");
      return;
    }
  }
  alert("로그인 실패");
}