
var productList = [];

function AddProductsToTable(id, name, image, Category, price, quantity, product_info) {
    var cardrow = document.getElementById("products-row");
    // var trow = document.createElement('tr');
    // var td1 = document.createElement('td');
    // var td2 = document.createElement('td');
    // var td3 = document.createElement('td');
    // var td4 = document.createElement('td');
    // var td5 = document.createElement('td');
    // var td6 = document.createElement('td');
    // var td7 = document.createElement('td');

    // adding data to array
    var productDiv = document.createElement('div');
    var productCard = document.createElement('div');
    var productCardBody = document.createElement('div');
    productDiv.classList.add("col-sm-4");
    productDiv.classList.add("col-md-3");
    productDiv.classList.add("pt-3");


    productCard.classList.add("card");

    productCardBody.classList.add("card-body");


    // productDiv.innerHTML = ' <div class="card">';
    productCard.innerHTML += '<div class="card-img text-center"><img class="img-fluid"  src=" ' + image + ' " alt=""  ></div>';

    productCard.appendChild(productCardBody);

    productCardBody.innerHTML += '<h4 class="card-title fw-bold">' + name + '</h4>';
    productCardBody.innerHTML += '<h6 class="card-category">' + Category + '</h6>'
    productCardBody.innerHTML += '<p class="">Price: <span class="card-price">' + price + '</span></p>'
    productCardBody.innerHTML += '<div class="d-grid gap-2"> <button class="btn btn-outline-dark" onclick="FillBoxes(' + id + ')">More Info</button> </div> '

    productDiv.appendChild(productCard);
    cardrow.appendChild(productDiv);
    // td2.classList += "ByName";
    // td4.classList += "ByCategory";
    // td5.classList += "ByPrice";
    // td6.classList += "ByQuantity";


   
    productList.push([id, name, image, Category, price, quantity, product_info]);

}

console.log(productList);

let num = 0;


// for modal updation on every click
const FillBoxes = (data) => {
    for (let key in productList) {
        if (productList[key][0] == data) {
                console.log(data) 
                console.log(productList[key]);    
            // IdMod.value = productList[key][0];
            // NameMod.value = productList[key][1];
            // ImageMod.value = productList[key][2];
            // CategoryMod.value = productList[key][3];
            // PriceMod.value = productList[key][4];
            // QuantityMod.value = productList[key][5];
            // InfoMod.value = productList[key][6];
        }
    }
}


// search functions

// var searchBar = document.getElementById("SearchBar");
// var searchBtn = document.getElementById("SearchBtn");
// var searchCategory = document.getElementById("CategorySelect");
// var tbody = document.getElementById("tbody1");

// function SearchTable(Category) {

//     var filter = searchBar.value.toUpperCase();

//     var tr = tbody.getElementsByTagName('tr');
//     var found;
//     for (let i = 0; i < tr.length; i++) {

//         var td = tr[i].getElementsByClassName(Category);

//         for (let index = 0; index < td.length; index++) {


//             if (td[index].innerHTML.toUpperCase().indexOf(filter) > -1) {
//                 found = true;
//             }

//         }

//         if (found) {
//             tr[i].style.display = "";
//             found = false;
//         } else {
//             tr[i].style.display = "none";
//         }
//     }
// }

// searchBtn.onclick = function () {


//     if (searchBar.value == "") {
//         SearchTable("ByName")

//     } else if (searchCategory.value == 1) {
//         SearchTable("ByName")
//     } else if (searchCategory.value == 2) {
//         SearchTable("ByCategory")
//     } else if (searchCategory.value == 3) {
//         SearchTable("ByPrice")
//     } else if (searchCategory.value == 4) {
//         SearchTable("ByQuantity")

//     }



// }
