let accountNumberList=['111-222','333-444','555-666'];
let balanceList=[50000,120000,30000];

let account=prompt('계좌번호를 입력해주세요:');
let price=Number(prompt("출금 금액을 입력하세요"));

index=accountNumberList.indexOf(account);
if(index==-1){
  console.log("존재하지않는 계좌입니다.");
}
else
{
if(price<10000){
  console.log("출금 금액이 너무 적습니다.");
}
else if(price%10000!==0){
  console.log("출력단위 오류입니다.");
}
else if(price+1200>balanceList[index]){
  console.log("잔액이 부족합니다.");
}
else{
  console.log("출금완료");
}
}