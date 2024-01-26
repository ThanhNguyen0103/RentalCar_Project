
export const displayProducts =  function (products) {
    const productsContainer = document.querySelector(".products");
    
  const product_details = products.map(function (product) {
    return ` <div class="col-xl-4 col-md-6 col-12 p-2">
      <div class="listing-item card" id="${product.id}">
      <div class="listing-img">
      <a href="">
          <img src="${product.img}" alt="" class="card-img-top" >
      </a>
      <div class="fav-item">
          <span>
              ${product.category}
          </span>
          <a href="" class="fav-icon">
              <i class="img-heart">
              </i>
          </a>
      </div>
      </div>
      <div class="card-body listing-item-content">
      <div class="listing-item-features">
          <a href="" class="author-img">
              <img src="${product.seller}" alt="">
          </a>
          <h4 class="card-title">
              ${product.name}
          </h4>
          <div class="listing-rate">
              <i class="fa-solid fa-star active"></i>
              <i class="fa-solid fa-star active"></i>
              <i class="fa-solid fa-star active"></i>
              <i class="fa-solid fa-star active"></i>
              <i class="fa-solid fa-star active"></i>
              <span>(5.0)</span>
          </div>
      </div>
      <div class="listing-details-group">
          <ul class="list-group ">
              <li class="list-group-item">
                  <span>
                      <img src="./img/icons/car-parts-01.svg" alt="">
                  </span>
                  Auto</li>
              <li class="list-group-item">
                  <span>
                  <img src="./img/icons/car-parts-02.svg" alt="">
                  </span>10KM</li>
              <li class="list-group-item">
                  <span>
                  <img src="./img/icons/car-parts-03.svg" alt="">
                  </span>Petrol</li>
          </ul>
          <ul class="list-group">
              <li class="list-group-item">
                  <span>
                  <img src="./img/icons/car-parts-04.svg" alt="">
                  </span>Power</li>
              <li class="list-group-item">
                  <span>
                  <img src="./img/icons/car-parts-05.svg" alt="">
                  </span>2018</li>
              <li class="list-group-item">
                  <span>
                  <img src="./img/icons/car-parts-06.svg" alt="">
                  </span>
                  5 Persons </li>
          </ul>
      </div>
      <div class="listiing-details-location">
          <div class="details-location">
              <span>
                  <i class="img-map-pin"></i>
              </span>
              ${product.address}
          </div>
          <div class="details-price">
              <span> ${product.price} </span> 
              <p>/Day</p>
          </div>
      </div>
      <div class="listing-buttuon">
         
          <a href="carDetails.html?product=${product.id}" class="btn btn-order">
              <span>
                  <i class="img-calendar" >
                  </i>
              </span>
              Rent Now
          </a>
      </div>
      </div>
      </div>
  </div> `;
  });

  const displayProduct = [];
  for (let i = 0; i < 6; i++) {
    displayProduct[i] = product_details[i];
  }
  productsContainer.innerHTML = displayProduct.join("");

  var b = document.querySelectorAll(".listing-item");
  var c = [...b];
 
  var t = c.map(function (d) {
    d.onclick = function () {
      var b = window.location.href;
      console.log(b.slice(-1))
    };
  });

}
export const displayProductsListingPage = function (products) {
    const productsContainer = document.querySelector(".products");
    const product_details = products.map(function (product) {
      return ` <div class="listing-item card">
      <div class="listing-img">
      <a href="">
          <img src="${product.img}" alt="" class="card-img" >
       </a>
      </div>
  
  <div class="card-body listing-item-content">
      <div class="listing-item-features">
           <h4 class="card-title">
                  ${product.name}
          </h4>
          <div class="listing-rate">
              <i class="fa-solid fa-star active"></i>
              <i class="fa-solid fa-star active"></i>
              <i class="fa-solid fa-star active"></i>
              <i class="fa-solid fa-star active"></i>
              <i class="fa-solid fa-star active"></i>
              <span>(5.0)</span>
          </div>
          
      </div>
      <div class="listiing-details-location">
          <div class="details-location">
              Category : ${product.category}
          </div>
          <div class="details-price">
             <span>${product.price} </span> 
            <p>/Day</p>
          </div>
      </div>
      <div class="listing-details-group">
          <ul class="list-group ">
              <li class="list-group-item">
                  <span>
                      <img src="./img/icons/car-parts-01.svg" alt="">
                  </span>
                  Auto</li>
              <li class="list-group-item">
                  <span>
                      <img src="./img/icons/car-parts-02.svg" alt="">
                  </span>10KM</li>
              <li class="list-group-item">
                  <span>
                      <img src="./img/icons/car-parts-03.svg" alt="">
                  </span>Petrol</li>
                  <li class="list-group-item">
                      <span>
                          <img src="./img/icons/car-parts-04.svg" alt="">
                      </span>Power</li>
                  <li class="list-group-item">
                      <span>
                          <img src="./img/icons/car-parts-05.svg" alt="">
                      </span>2018</li>
                  <li class="list-group-item">
                      <span>
                          <img src="./img/icons/car-parts-06.svg" alt="">
                      </span>
                       5 Persons
                  </li>
          </ul>
          
      </div>
      <div class="blog-list-tilte">
          <div class="tilte-bottom">
              <div class="car-list-img">
                  <img src="./img/cars/car-list-icon-01.png" alt="">
              </div>
              <div class="address-info">
                 <span>
                  Toyota Of Lincoln Park
                  </span> 
                <p>
                  <i class="fa-solid fa-location-dot"></i>
                  Newyork, USA </p>
              </div>
          </div>
          <div class="listing-buttuon">
              <a href="carDetails.html?product=${product.id}" class="btn btn-order">
                  <span>
                      <i class="img-calendar" >
                      </i>
                  </span>
                  Rent Now
              </a>
          </div>
      </div>
  </div>
      </div>`;
    });
  
    const displayProduct = [];
    for (let i = 0; i < 6; i++) {
      displayProduct[i] = product_details[i];
    }
    productsContainer.innerHTML = displayProduct.join("");
  }