let carNumberList=['12가3456','34나7890','56다1234'];
let useTimeList=[45,130,320];

let num=prompt("차량번호를입력해주세요:");

let overtime;
let charge=1000;
if(carNumberList.indexOf(num)==-1){
  console.log("존재하지않는차량입니다.")
}else{
if(num<=60){
    console.log("요금:1000원");
}
else if(num>60){
  overtime=num-60;
}
}

if(overtime>=0&&overtime<=30){
  charge+=500;
}
else if(overtime>30&&overtime<=60){
  charge+=1000;
}
else if(overtime>60&&overtime<=90){
  charge+=1000;
}
else if(charge>10000){
  
}