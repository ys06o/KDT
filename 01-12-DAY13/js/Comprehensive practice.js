let 제품=[{"이미지":이미지,"카테고리명":1,"상품명":"코카콜라","가격":1000,"등록일":"2924-24-24","비고":"버튼"}];
//등록함수 만들기
function 등록함수(){
  let img=document.querySelector(".img").value;
  let catagorie=document.querySelector(".catagorie").value;
  let productname=document.querySelector(".productname").value;
  let price=document.querySelector(".price").value;

  let obj={"이미지":img,"카테고리명":catagorie,"상품명":productname,"가격":price,"등록일":"2924-24-24","비고":"버튼"};
  제품.push(obj);
  alert("등록성공");
}