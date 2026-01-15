// [1] 메모리 설계 표/테이블=배열, 표제목:속성명, 행/가로 단위:객체 1개
// 1.저장할 데이터들을 객체로 구성
// {"image":"https://placehold.co/100x100","catagory":1,"name":"코카콜라","price":1000,"date":2026-01-14};
// 2.각 객체들간의 식별을 해주는(식별키)를 1개 이상 필요,단 중복이 없는 속성으로 선택!
// pcode:productcode 제품코드(식별키)
// {"pcode":1,"image":"https://placehold.co/100x100","catagory":1,"name":"코카콜라","price":1000,"date":2026-01-14};

// 3.테이블 간의 연관관계 구성

// {"ccode":1,"catagoty":1}; 
// {"pcode":1,"ccode":1,"image":"https://placehold.co/100x100","catagory":1,"name":"코카콜라","price":1000,"date":2026-01-14};


// 4.객체가 다수일떄는 배열을 사용한다.
const catagoryAry = [{ "ccode": 1, "catagory": "음료" }, { "ccode": 2, "catagory": "과자" }];
const productAry = [{ "ccode":1,"pcode": 1, "image": "https://placehold.co/100x100", "catagory": 1, "name": "코카콜라", "price": 1000, "date": "2026-01-14" }, { "ccode":1,"pcode": 2, "image": "https://placehold.co/100x100", "catagory": 1, "name": "사이다", "price": 1500, "date": "2026-01-14" }];


//[2] 기능/함수 설계
// 함수 갯수:등록기능,출력기능,수정기능,삭제기능,[CRUD]
// 1.등록함수  매개변수 X,리턴값:X,처리:입력받은 4개와 현재시스템의 날짜를 객체로 만들어서 배열로 저장 실행조건:<등록>버튼을 클릭하면 실행!


// 2.출력함수 매개변수 X,리턴값:X,처리:배열내 모든 객체들을 tr로 구성하여 출력 실행조건:1.페이지열렸을때,2.등록성공 3.삭제성공 4.수정성공




// 3.수정함수  매개변수:pcode(수정할대상) 리턴값:X 처리:수정할 값 prompt로 받아서 매개변수의 제품 수정 실행조건:1. <수정>버튼을 클릭하면

// 4. \삭제함수 매개변수:pcode(수정할대상), 리턴값:X 처리:매개변수의 제품 삭제 실행조건:<삭제>버튼을 클릭하면



// [3]구현
// 1.출력함수 어디에/무엇을 출력할건지
productprint(); //JS가 열렸을때 최초 1번 실행
function productprint() {

  const tbody = document.querySelector("tbody");  //어디에
  let html = "";
  for (let index = 0; index <= productAry.length - 1; index++) {
    const product = productAry[index];
    let categoryName="";
    for(let index=0; index<=catagoryAry.length-1; index++){
      if(product.ccode==catagoryAry[index].ccode){
        categoryName=catagoryAry[index].catagory;
        break;
      }
    }
    html += `<tr>
            <td class="product-img"><img src="${product.image}" alt=""></td>
            <td>${product.pcode}</td>
            <td>${product.name}</td>
            <td>${Number(product.price)}원</td>
            <td>${product.date}</td>
            <td>
              <button onclick="productDelete(${product.pcode})" class="button1">삭제</button> 
              <button onclick="productUpdate(${product.pcode})" class="button2">수정</button>
            </td>
          </tr>`;
    tbody.innerHTML = html;
  }
}



// 2.삭제함수:해당하는 행의 <삭제>버튼을 클릭하면 삭제(배열내 제거.splice)처리

function productDelete(pcode) { //매개변수로 삭제할 pcode를 받았다.
  //1.pcode의 배열내 인덱스를 찾기.
  for (let index = 0; index <= productAry.length - 1; index++) {
    if (pcode == productAry[index].pcode) { //2.만약에 삭제할 pcode와 인덱스 번째 pcode랑 같으면 삭제
      productAry.splice(index, 1);
      productprint()
      //4.1개만 삭제할 예정이므로 목표(삭제)했으면 break;
      break;   //
    }
  }
}

// 3.수정함수:해당하는 행의 <수정> 버튼을 클릭하면 수정(배열변수명[인덱스].속성명=새로운값)
function productUpdate(pcode) {
  for (let index = 0; index <= productAry.length - 1; index++) {
    if (pcode == productAry[index].pcode) {
      const newname = prompt("수정할 상품명:");
      const newPrice = prompt("수정할 가격:");
      productAry[index].name = newname;
      productAry[index].price = newPrice;
      productprint();
      // 수정성공시 즉시 렌더링
      return;
    }
  }
}

// 1.입력받은 값 가져오기
// 2.객체 구성(입력받은 값과 식별코드+1),현재날짜(newdate)로 객체 구성
// 3.구성한 객체를 배열에 저장
// 4.화면 새로고침/랜더링 한다.

let pcode = 1; //전역변수로 사용
function productAdd() {
  const categoryDom = document.querySelector(".catagorie");
  const catagory = categoryDom.value;

  const nameDom = document.querySelector(".productname");
  const name = nameDom.value;

  const priceDom = document.querySelector(".price");
  const price = priceDom.value;

  const imageDom = document.querySelector(".img");
  const image = imageDom.files[0];

  const year = new Date().getFullYear();
  const month = new Date().getMonth()+1;
  const day = new Date().getDate();
  const date = `${year}-${month < 10 ? "0" + month : month}-${day < 10 ? 0 + day : day}`;
  // pcode는 자동으로 마지막 객체에 pcode+1
  //2.유효성 검사 필요
  pcode += 1;
  if(catagory=="disabled"){alert("카테고리를선택하세요."); return;}
  if(name==""||price==""){alert("제품명과 가격은 필수입력입니다."); return;};
  const obj = { "pcode": pcode, "image": image==undefined ? "https://placehold.co/100x100":URL.createObjectURL(image), "catagory": ccode, "name": name, "price": price, "date": date };

  productAry.push(obj);
  productprint();
}
