let wraper = document.getElementById("wraper");
let wraper2 = document.getElementById("wraper2");
let wraper3 = document.getElementById("wraper3");
let wraper4 = document.getElementById("wraper4");

let basket = JSON.parse(localStorage.getItem("data")) || [];

console.log(basket);

let displayShop = () => {
  let Id = shopItemsData[4].id;
  let Name = shopItemsData[4].name;
  let Subtitle = shopItemsData[4].subtitle;
  let Price = shopItemsData[4].price;
  let Desc = shopItemsData[4].desc;
  let Img = shopItemsData[4].img;

  let search = basket.find((x) => x.Id === Id) || [];

  //let seeItem = basket.find(Id === "aaabbbc");
  //index = basket.findIndex((x) => x.Id === "aaabbbc");

  const index = basket.find((x) => (x.Id = "aaabbbcc"));

  console.log(index.Id);
  console.log(index.item);

  /*
  if (basket.find(Id === "aaabbbc") > 1) {
    console.log("existe");
  } else {
    console.log("no existe");
  }
  */

  console.log(search);

  console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");

  return (wraper.innerHTML = `  
                       <img src=${Img} class="card-img-top" alt="Image 01">
                        <div class="card-body">
                            <h5 class="card-title" id="title">${Name}</h5>
                            <h6 class="card-title" id="subtitle">${Subtitle}</h6>
                            <p class="card-text"> ${Desc}  </p>
                            <p id="price">$ ${Price}</p>
                            <div class="buttons">
                                <i onclick="decrement(${Id})" class="bi bi-dash-lg"></i>
                                <div id=${Id} class="quantity">
                                ${index.Id === undefined ? 0 : index.item}
                                </div>
                                <i onclick="increment(${Id})" class="bi bi-plus-lg"></i>
                            </div>
                        </div>
                         

`);
};

displayShop();

let changeProduct = (id) => {
  let itemSelected = id;

  let Id = shopItemsData[itemSelected].id;
  let Name = shopItemsData[itemSelected].name;
  let Subtitle = shopItemsData[itemSelected].subtitle;
  let Price = shopItemsData[itemSelected].price;
  let Desc = shopItemsData[itemSelected].desc;
  let Img = shopItemsData[itemSelected].img;

  let search = basket.find((x) => x.Id === Id) || [];

  return (wraper.innerHTML = `
  
 
                        <img src=${Img} class="card-img-top" alt="Image 01">
                        <div class="card-body">
                            <h5 class="card-title" id="title">${Name}</h5>
                            <h6 class="card-title" id="subtitle">${Subtitle}</h6>
                            <p class="card-text"> ${Desc}  </p>
                            

                            <p id="price">$ ${Price}</p>

                            <div class="buttons">
                                <i onclick="decrement(${Id})" class="bi bi-dash-lg"></i>
                                <div id=${Id} class="quantity">
                                ${search.Id === undefined ? 0 : search.Id}
                                </div>
                                <i onclick="increment(${Id})" class="bi bi-plus-lg"></i>

                            </div>

                          </div>
                         
  
  
  `);
};
/* product 2 */

let displayShop2 = () => {
  let Id = shopItemsData2[4].id;
  let Name = shopItemsData2[4].name;
  let Subtitle = shopItemsData2[4].subtitle;
  let Price = shopItemsData2[4].price;
  let Desc = shopItemsData2[4].desc;
  let Img = shopItemsData2[4].img;

  let search = basket.find((Id) => Id === Id) || [];
  return (wraper2.innerHTML = `  
                       <img src=${Img} class="card-img-top" alt="Image 01">
                        <div class="card-body">
                            <h5 class="card-title" id="title">${Name}</h5>
                            <h6 class="card-title" id="subtitle">${Subtitle}</h6>
                            <p class="card-text"> ${Desc}  </p>
                            <p id="price">$ ${Price}</p>
                            <div class="buttons">
                                <i onclick="decrement(${Id})" class="bi bi-dash-lg"></i>
                                <div id=${Id} class="quantity">
                                ${search.item === undefined ? 0 : search.item}
                                </div>
                                <i onclick="increment(${Id})" class="bi bi-plus-lg"></i>
                            </div>
                        </div>
                         

`);
};

displayShop2();

let changeProduct2 = (id) => {
  let itemSelected = id;

  let Id = shopItemsData2[itemSelected].id;
  let Name = shopItemsData2[itemSelected].name;
  let Subtitle = shopItemsData2[itemSelected].subtitle;
  let Price = shopItemsData2[itemSelected].price;
  let Desc = shopItemsData2[itemSelected].desc;
  let Img = shopItemsData2[itemSelected].img;
  let search = basket.find((Id) => Id === Id) || [];
  return (wraper2.innerHTML = `
  
 
                        <img src=${Img} class="card-img-top" alt="Image 01">
                        <div class="card-body">
                            <h5 class="card-title" id="title">${Name}</h5>
                            <h6 class="card-title" id="subtitle">${Subtitle}</h6>
                            <p class="card-text"> ${Desc}  </p>
                            

                            <p id="price">$ ${Price}</p>

                            <div class="buttons">
                                <i onclick="decrement(${Id})" class="bi bi-dash-lg"></i>
                                <div id=${Id} class="quantity">
                                ${search.item === undefined ? 0 : search.item}
                                </div>
                                <i onclick="increment(${Id})" class="bi bi-plus-lg"></i>

                            </div>

                          </div>
                         
  
  
  `);
};
/* product 3 */

let displayShop3 = () => {
  let Id = shopItemsData3[4].id;
  let Name = shopItemsData3[4].name;
  let Subtitle = shopItemsData3[4].subtitle;
  let Price = shopItemsData3[4].price;
  let Desc = shopItemsData3[4].desc;
  let Img = shopItemsData3[4].img;
  let search = basket.find((Id) => Id === Id) || [];
  return (wraper3.innerHTML = `  
                       <img src=${Img} class="card-img-top" alt="Image 01">
                        <div class="card-body">
                            <h5 class="card-title" id="title">${Name}</h5>
                            <h6 class="card-title" id="subtitle">${Subtitle}</h6>
                            <p class="card-text"> ${Desc}  </p>
                            <p id="price">$ ${Price}</p>
                            <div class="buttons">
                                <i onclick="decrement(${Id})" class="bi bi-dash-lg"></i>
                                <div id=${Id} class="quantity">
                                ${search.item === undefined ? 0 : search.item}
                                </div>
                                <i onclick="increment(${Id})" class="bi bi-plus-lg"></i>
                            </div>
                        </div>
                         

`);
};

displayShop3();

let changeProduct3 = (id) => {
  let itemSelected = id;

  let Id = shopItemsData3[itemSelected].id;
  let Name = shopItemsData3[itemSelected].name;
  let Subtitle = shopItemsData3[itemSelected].subtitle;
  let Price = shopItemsData3[itemSelected].price;
  let Desc = shopItemsData3[itemSelected].desc;
  let Img = shopItemsData3[itemSelected].img;
  let search = basket.find((Id) => Id === Id) || [];
  return (wraper3.innerHTML = `
  
 
                        <img src=${Img} class="card-img-top" alt="Image 01">
                        <div class="card-body">
                            <h5 class="card-title" id="title">${Name}</h5>
                            <h6 class="card-title" id="subtitle">${Subtitle}</h6>
                            <p class="card-text"> ${Desc}  </p>
                            

                            <p id="price">$ ${Price}</p>

                            <div class="buttons">
                                <i onclick="decrement(${Id})" class="bi bi-dash-lg"></i>
                                <div id=${Id} class="quantity">
                                ${search.item === undefined ? 0 : search.item}
                                </div>
                                <i onclick="increment(${Id})" class="bi bi-plus-lg"></i>

                            </div>

                          </div>
                         
  
  
  `);
};
/* product 4 */

let displayShop4 = () => {
  let Id = shopItemsData4[4].id;
  let Name = shopItemsData4[4].name;
  let Subtitle = shopItemsData4[4].subtitle;
  let Price = shopItemsData4[4].price;
  let Desc = shopItemsData4[4].desc;
  let Img = shopItemsData4[4].img;
  let search = basket.find((Id) => Id === Id) || [];
  return (wraper4.innerHTML = `  
                       <img src=${Img} class="card-img-top" alt="Image 01">
                        <div class="card-body">
                            <h5 class="card-title" id="title">${Name}</h5>
                            <h6 class="card-title" id="subtitle">${Subtitle}</h6>
                            <p class="card-text"> ${Desc}  </p>
                            <p id="price">$ ${Price}</p>
                            <div class="buttons">
                                <i onclick="decrement(${Id})" class="bi bi-dash-lg"></i>
                                <div id=${Id} class="quantity">
                                ${search.item === undefined ? 0 : search.item}
                                </div>
                                <i onclick="increment(${Id})" class="bi bi-plus-lg"></i>
                            </div>
                        </div>
                         

`);
};

displayShop4();

let changeProduct4 = (id) => {
  let itemSelected = id;

  let Id = shopItemsData4[itemSelected].id;
  let Name = shopItemsData4[itemSelected].name;
  let Subtitle = shopItemsData4[itemSelected].subtitle;
  let Price = shopItemsData4[itemSelected].price;
  let Desc = shopItemsData4[itemSelected].desc;
  let Img = shopItemsData4[itemSelected].img;
  let search = basket.find((Id) => Id === Id) || [];
  return (wraper4.innerHTML = `
  
 
                        <img src=${Img} class="card-img-top" alt="Image 01">
                        <div class="card-body">
                            <h5 class="card-title" id="title">${Name}</h5>
                            <h6 class="card-title" id="subtitle">${Subtitle}</h6>
                            <p class="card-text"> ${Desc}  </p>
                            

                            <p id="price">$ ${Price}</p>

                            <div class="buttons">
                                <i onclick="decrement(${Id})" class="bi bi-dash-lg"></i>
                                <div id=${Id} class="quantity">
                                ${search.item === undefined ? 0 : search.item}
                                </div>
                                <i onclick="increment(${Id})" class="bi bi-plus-lg"></i>

                            </div>

                          </div>
                         
  
  
  `);
};

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
  // console.log(basket);
  localStorage.setItem("data", JSON.stringify(basket));
};

/* update item */
let updateItem = (id) => {
  let search = basket.find((x) => x.id === id);
  // console.log(search.item);
  document.getElementById(id).innerHTML = search.item;
  calculation();
};

let calculation = () => {
  let cartIcon = document.getElementById("cartAmount");
  cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};

calculation();
