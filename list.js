boardPrint();

function boardPrint(){
  let tbody=document.querySelector("#body");

  let boardList=localStorage.getItem('boardList');

  boardList=(boardList==null)?[]:JSON.parse(boardList);

  let html=``;

  for(let index=0; index<=boardList.length-1; index++){
    let obj=boardList[index];
html+=`<tr>
<td>${obj.no}</td>
<td><a href="view.html?no=${obj.no}">${obj.title}</a></td>
</tr>`
  }
  tbody.innerHTML=html;
}