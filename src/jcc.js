const wraper = document.getElementById("wrapper");

//let basket = JSON.parse(localStorage.getItem("data")) || [];

//id = 'jfhgbvnscs'
/*let changeProduct = () => {
  
  let index = shopItemsData.find((x) => (x.Id = id));

  console.log(index.Id);
  let Id = index.id;
  let Name = index.name;

  console.log(Id);
  console.log(Name);

  let Subtitle = index.subtitle;
  let Price = index.price;
  let Desc = index.desc;
  let Img = index.img;

  //let search = basket.find((x) => x.Id === Id) || [];

  //console.log(Id);
   */
//  return (wraper.innerHTML = `Hi`);

//};

//changeProduct();

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
