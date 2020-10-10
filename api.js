const key = "6b556e7949716b723130374d74785767";
const url = `http://openapi.seoul.go.kr:8088/${key}/json/ListPriceModelStoreService/1/50/`;

fetch(url)
  .then((res) => res.json())
  .then((myJson) => {
    let array = [];
    array = myJson.ListPriceModelStoreService.row;
    console.log(array);

    createTable(array);
  });


function createTable(data) {
    let table = document.getElementById('store_data');

    for (let i =0; i < data.length; i++) {
        let api_data = `
            <h1>${data[i].SH_NAME}</h1>
            <p>${data[i].SH_ADDR}</p>
            <p>${data[i].SH_PRIDE}</p>
        `
        table.innerHTML += api_data
    }

}