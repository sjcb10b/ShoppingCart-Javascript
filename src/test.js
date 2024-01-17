let wraper0 = document.getElementById("wraper0");
//console.log(wraper);

// parse the basket into localstorage assign to basket
let basket = JSON.parse(localStorage.getItem("data")) || [];

let displayProducts = (id = 0) => {
  // pull the data from shopItemsData

  let itemSelected = id;

  let Id = shopItemsData[itemSelected].id;
  let Name = shopItemsData[itemSelected].name;
  let Subtitle = shopItemsData[itemSelected].subtitle;
  let Price = shopItemsData[itemSelected].price;
  let Desc = shopItemsData[itemSelected].desc;
  let Img = shopItemsData[itemSelected].img;

  let search = basket.find((x) => x.id === Id) || [];

  if (search === undefined) {
    console.log(0);
  } else {
    search.item;
    console.log(Id);
    console.log(search.item);
  }

  console.log("======================================");
  console.log(Name);
  console.log(Subtitle);
  console.log(Img);

  return (wraper0.innerHTML = `
  <img src=${Img} class="card-img-top" alt="Image 01">
  <div class="card-body text-center">
      <h5 class="card-title" id="title">${Name}</h5>
      <h6 class="card-title" id="subtitle">${Subtitle}</h6>
      <p class="card-text"> ${Desc}  </p>
      <p id="price">$ ${Price}</p>
      <div class="buttons flex-container">
          <div>
          <i onclick="decrement(${Id})" class="bi bi-dash-lg"></i>
         </div>
          <div>
          <div id=${Id} class="quantity">
          ${search.item === undefined ? 0 : search.item}
          </div>
          </div>
          <div>
          <i onclick="increment(${Id})" class="bi bi-plus-lg"></i>
          </div>
      </div>
  </div>
  `);
};

displayProducts();

/* second group of products */

let wraper2 = document.getElementById("wraper2");

let displayProducts2 = (id = 5) => {
  let itemSelected = id;
  let Id = shopItemsData[itemSelected].id;
  let Name = shopItemsData[itemSelected].name;
  let Subtitle = shopItemsData[itemSelected].subtitle;
  let Price = shopItemsData[itemSelected].price;
  let Desc = shopItemsData[itemSelected].desc;
  let Img = shopItemsData[itemSelected].img;

  let search2 = basket.find((x) => x.id === Id) || [];

  return (wraper2.innerHTML = `
  <img src=${Img} class="card-img-top" alt="Image 01">
  <div class="card-body text-center">
      <h5 class="card-title" id="title">${Name}</h5>
      <h6 class="card-title" id="subtitle">${Subtitle}</h6>
      <p class="card-text"> ${Desc}  </p>
      <p id="price">$ ${Price}</p>
      <div class="buttons  flex-container">
         <div>
         <i onclick="decrement(${Id})" class="bi bi-dash-lg"></i>
         </div>
          <div>
          <div id=${Id} class="quantity">
          ${search2.item === undefined ? 0 : search2.item}
          </div>
          </div>
          <div>
           <i onclick="increment(${Id})" class="bi bi-plus-lg"></i>
         </div>
         
      </div>
  </div>
  `);
};

displayProducts2();

/* 3rd group of products */

let wraper3 = document.getElementById("wraper3");
//console.log(wraper);

// parse the basket into localstorage assign to basket

let displayProducts3 = (id = 10) => {
  // pull the data from shopItemsData
  // let index = shopItemsData.find((x) => (x.id = id));

  let itemSelected = id;

  let Id = shopItemsData[itemSelected].id;
  let Name = shopItemsData[itemSelected].name;
  let Subtitle = shopItemsData[itemSelected].subtitle;
  let Price = shopItemsData[itemSelected].price;
  let Desc = shopItemsData[itemSelected].desc;
  let Img = shopItemsData[itemSelected].img;
  

  let search3 = basket.find((x) => x.id === Id) || [];
  return (wraper3.innerHTML = `
  <img src=${Img} class="card-img-top" alt="Image 01">
  <div class="card-body text-center">
      <h5 class="card-title" id="title">${Name}</h5>
      <h6 class="card-title" id="subtitle">${Subtitle}</h6>
      <p class="card-text"> ${Desc}  </p>
      <p id="price">$ ${Price}</p>
         <div class="buttons  flex-container">
         <div>
         <i onclick="decrement(${Id})" class="bi bi-dash-lg"></i>
         </div>
          <div>
          <div id=${Id} class="quantity">
          ${search3.item === undefined ? 0 : search3.item}
          </div>
          </div>
          <div>
           <i onclick="increment(${Id})" class="bi bi-plus-lg"></i>
         </div>
         
      </div>
  </div>
  `);
};

displayProducts3();

/* 4th group of products */

let wraper4 = document.getElementById("wraper4");
//console.log(wraper);

// parse the basket into localstorage assign to basket

let displayProducts4 = (id = 15) => {
  // pull the data from shopItemsData
  // let index = shopItemsData.find((x) => (x.id = id));

  let itemSelected = id;

  let Id = shopItemsData[itemSelected].id;
  let Name = shopItemsData[itemSelected].name;
  let Subtitle = shopItemsData[itemSelected].subtitle;
  let Price = shopItemsData[itemSelected].price;
  let Desc = shopItemsData[itemSelected].desc;
  let Img = shopItemsData[itemSelected].img;
  let search4 = basket.find((x) => x.id === Id) || [];
  return (wraper4.innerHTML = `
  <img src=${Img} class="card-img-top" alt="Image 01">
  <div class="card-body text-center">
      <h5 class="card-title" id="title">${Name}</h5>
      <h6 class="card-title" id="subtitle">${Subtitle}</h6>
      <p class="card-text"> ${Desc}  </p>
      <p id="price">$ ${Price}</p>
         <div class="buttons  flex-container">
         <div>
         <i onclick="decrement(${Id})" class="bi bi-dash-lg"></i>
         </div>
          <div>
          <div id=${Id} class="quantity">
          ${search4.item === undefined ? 0 : search4.item}
          </div>
          </div>
          <div>
           <i onclick="increment(${Id})" class="bi bi-plus-lg"></i>
         </div>
         
      </div>
  </div>
  `);
};

displayProducts4();

/* ********* 
 
 HERE ARE THE FUNCTIONS 

************/

let increment = (id) => {
  let selectedItem = id;

  console.log(selectedItem);

  let search = basket.find((x) => x.id === selectedItem.id);

  if (search === undefined) {
    basket.push({
      id: selectedItem.id,
      item: 1,
    });
  } else {
    search.item += 1;
  }

  console.log(basket);
  updateItem(selectedItem.id);
  localStorage.setItem("data", JSON.stringify(basket));
};

let decrement = (id) => {
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem.id);

  if (search === undefined) return;
  else if (search.item === 0) return;
  else {
    search.item -= 1;
  }
  updateItem(selectedItem.id);
  basket = basket.filter((x) => x.item !== 0);
  console.log(basket);
  localStorage.setItem("data", JSON.stringify(basket));
};

/* update item */
let updateItem = (id) => {
  let search = basket.find((x) => x.id === id);
  // console.log(search.item);
  document.getElementById(id).innerHTML = search.item;
  calculation();
};

/* *** here is the calculation of the items */

let calculation = () => {
  let cartIcon = document.getElementById("cartAmount");
  cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};

calculation();
