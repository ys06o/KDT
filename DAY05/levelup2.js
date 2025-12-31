let carNumberList = ['12가3456', '34나7890', '56다1234'];
let useTimeList = [45, 130, 320];

let num = prompt("차량번호를입력해주세요:");
let re=0;
let overtime = useTimeList.indexOf(num);
let result=parseInt((useTimeList[overtime] - 60) / 30);
if ((useTimeList[overtime]-60)%30>0){
  result+=1
}else{
  result+=0
}
if (overtime == -1) {
  console.log("존재하지않는차량입니다.")
} else{
  if(useTimeList[overtime]<=60){
    re=1000;
    console.log(re);
  }else if(useTimeList[overtime]<=600){
    re=1000+500*result;
    console.log(re);
  }else{
    re=10000;
    console.log(re);
  }
}