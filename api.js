const key = "6b556e7949716b723130374d74785767";
const url = `http://openapi.seoul.go.kr:8088/${key}/json/ListPriceModelStoreService/1/50/`;

const modal = document.querySelector('.modal')
const closeBtn = document.getElementById('modal_btn')
const bg = document.querySelector('.background')

//서울시 공공데이터 json가져오기
fetch(url)
  .then((res) => res.json())
  .then((myJson) => {
    let array = [];
    array = myJson.ListPriceModelStoreService.row;
    console.log(array);

    createTable(array);
  });

//json파일 정보 테이블 생성 함수
function createTable(data) {
    let table = document.getElementById('store_data');

    for (let i =0; i < data.length; i++) {
        let api_data = `
        <div class='store_wrap'>
            <h1>${data[i].SH_NAME}</h1>
            <p class='add'>${data[i].SH_ADDR}</p>
            <p class='des'>${data[i].SH_PRIDE}</p>
            <img src='${data[i].SH_PHOTO}'>
            <img class='store_logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Logo_of_Seoul%2C_South_Korea.svg/1024px-Logo_of_Seoul%2C_South_Korea.svg.png"/>
        <div>
        `
        table.innerHTML += api_data
    }

}

//모달창
const closeModal = () => {
    modal.classList.add('hide')
    bg.classList.add('hide')
}

closeBtn.addEventListener('click', closeModal)