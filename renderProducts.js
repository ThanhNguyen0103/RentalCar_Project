
import { displayProducts} from './displayProducts.js';
export const renderNameCategory =  function (products) {
    const carCategory = document.querySelector(".car-category");
    let productName = products.map((productName, index) => {
      let indexSpace = productName.name.indexOf(" ");
      return productName.name.slice(0, indexSpace);
    });
    let renderNameCategory = productName
      .filter((name, index) => {
        return productName.indexOf(name) === index;
      })
      .map((label) => {
        return ` <label class="category-name" for="${label}">
                      ${label}                             
          </label>
          <input class="form-check-input" name="${label}" type="checkbox" value="" id="${label}">
          `;
      })
      .join("");
    carCategory.innerHTML = renderNameCategory;
  }
  export const renderNameType = function (products) {
    var carType = document.querySelector(".car-type");
  
    var productType = products.map((productType) => {
      return productType.type;
    });
  
    var rederNameType = productType
      .filter((nameType, index) => {
        return productType.indexOf(nameType) === index;
      })
      .map((type) => {
        return `   <label class="category-type" for="${type}">
          ${type}
      </label>
      <input class="form-check-input" name="${type}" type="checkbox" value="" id="${type}">`;
      })
      .join("");
    carType.innerHTML = rederNameType;
  }
  export const renderNameCapacity = function (products){
    const carCapacity = document.querySelector(".car-capacity");
    let carNameCapacity = products.map((product) => {
      return product.capacity;
    })
    let car = carNameCapacity.filter((carCapacity , index) => {
        return carNameCapacity.indexOf(carCapacity) === index ;
    }).map((nameCarCapacity) => {
      return ` <label class="category-name" for="${nameCarCapacity}">
                      ${nameCarCapacity}                             
          </label>
          <input class="form-check-input" name="${nameCarCapacity}" type="checkbox" value="" id="${nameCarCapacity}">
          `;
    }).join("");
    carCapacity.innerHTML = car;
  }
  export const renderCategory =  function (products) {
      const categoryName = document.querySelectorAll(".category-name");
      const categoryList = document.querySelectorAll(".category-list");
      const carIcon = document.querySelectorAll(".car-icon");
      const allCategories = products.map(function (product) {
        return product.category;
      });
      const carIconImg = products.map(function(car_icon){
          return `<img src="${car_icon.brand}" alt="">`;
      })
    
      const categories = [
        "All",
        ...allCategories.filter(function (category, index) {
          return allCategories.indexOf(category) === index;
        }),
      ];
    
    
      const categoryList_name = [...categoryName];
      for (let i = 0; i < categoryList.length; i++) {
        carIcon[i].innerHTML = carIconImg[i];
        categoryList_name[i].innerHTML = categories[i];
        categoryList[i].addEventListener("click", function (e) {
          categoryList.forEach(function (elem) {
            const elemActive = elem.querySelector(".nav-link");
            if (elemActive.matches(".active")) {
              elemActive.classList.remove("active");
            }
            e.target.classList.add("active");
          });
          const selectedCategory = e.target.innerText;
          selectedCategory === "All"
            ? displayProducts(products)
            : displayProducts(
              products.filter(function (product) {
                  return product.category == selectedCategory;
                })
              );
        });
      }
    }
  export const renderNameProduct = function (products) {
      renderNameCategory(products);
      renderNameType(products);
      renderNameCapacity(products)
    }
  export const  renderInfoBooking = function(tesT){
      const book = document.querySelector(".booking-info");
      const q = document.querySelector(".details-price");
      const w = document.querySelector(".total-price");
      const ma = tesT.map(function (info) {
          return `<div class="col-4 pickup-address">
                <h5>Pickup</h5>
                <p>
                   ${info.pickup_location}
                </p>
                <span>
                 Date : ${info.pickup_date}<br>
                 Time : ${info.pickup_time} 
                </span>
            </div>
            <div class="col-4 drop-address">
                <h5>Drop Off</h5>
                <p>
                 ${info.dropoff_location}
                </p>
                <span>
                 Date : ${info.dropoff_date}<br>
                 Time : ${info.dropoff_time} 
                </span>
            </div>
            <div class="col-4 booking-amount">
                <h5>Booking Amount</h5>
                <h6>
                    <span>${info.price}</span>
                    /Day
                </h6>
            </div>`;
        });
      
        var n = tesT.map(function (info) {
          const priceTax = Math.round(info.price.replace("$", "") * 0.1)
          return `<ul>
          <li>
              Booking Price
              <span>${info.price}</span>
          </li>
          <li>
              Tax
              <span>${priceTax + "$"}</span>
          </li>
      </ul>`;
        });
        var m = tesT.map(function (info) {
          const priceTax = Math.round(info.price.replace("$", "") * 0.1)
          const totalPrice = info.price.replace("$", "") * 1 + priceTax;
          return `     <h5>
          Total
          <span>${totalPrice + "$"}  </span>
      </h5>`;
        });
        book.innerHTML = ma;
        q.innerHTML = n;
        w.innerHTML = m;
        var po = tesT;
        return po
  }
  export const renderHeader =  function (){
    return ` <nav class="navbar navbar-expand-lg header-nav">
    <div class="container-fluid">
        <div class="header-logo-img col-3">
            <a class="navbar-brand header-logo" href="./index.html">
                <img src="./img/logo.png" alt="">
            </a>
            <a class="navbar-brand header-logo-small" href="./index.html">
                <img src="./img/logo-small.png" alt="">
            </a>
        </div>
        <button class="navbar-toggler btn-nav" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
            aria-expanded="false" aria-label="Toggle navigation">
            <span>
                <i class="fa-solid fa-bars"></i>
            </span>
        </button>
        <div class="collapse  nav-menu collapse-horizontal" id="navbarSupportedContent">
            <div class="menu-header">
                <a class="navbar-brand" href="#">
                    <img src="./img/logo.png" alt="">
                </a>
                <a type="button" class="btn-close-nav" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-label="Close">
                    <span>
                        <i class="fa-solid fa-xmark"></i>
                    </span>
                </a>
            </div>
            <ul class="navbar-nav main-nav">
                <li class="nav-item active">
                    <a href="./index.html" class="nav-link">Home</a>
                </li>
                <li class="nav-item dropdown">
                    <a href="#" class="nav-link">Blog
                        <i class="fas fa-chevron-down"></i>
                    </a>
                    <ul class=" dropdown-menu sub-menu">
                        <li>
                            <a href="" class="dropdown-item">Listings Grid</a>
                        </li>
                        <li>
                            <a href="./Listings.html" class="dropdown-item">Listings List</a>
                        </li>
                        <li>
                            <a href="./Listings.html" class="dropdown-item">Listings Details</a>
                        </li>
                    </ul>
                </li>
                <li class="nav-item dropdown list-item">
                    <a href="#" class="nav-link">Pages
                        <i class="fas fa-chevron-down"></i>
                    </a>
                    <ul class="dropdown-menu sub-menu">
                        <li>
                            <a href="" class="dropdown-item "> About Us </a>
                        </li>
                        <li class="dropdown sub-item">
                            <a href="" class="dropdown-item "> Authentication</a>
                            <ul class="dropdown-menu sub-menu">
                                <li>
                                    <a href="" class="dropdown-item">Sign up</a>
                                </li>
                                <li>
                                    <a href="" class="dropdown-item">Sign in</a>
                                </li>
                                <li>
                                    <a href="" class="dropdown-item">Forgot Password</a>
                                </li>
                                <li>
                                    <a href="" class="dropdown-item">Reset Password</a>
                                </li>
                            </ul>
                        </li>
                        <li class="dropdown sub-item">
                            <a href="" class="dropdown-item ">Booking </a>
                            <ul class="dropdown-menu sub-menu">
                                <li>
                                    <a href="" class="dropdown-item">Booking Checkout</a>
                                </li>
                                <li>
                                    <a href="" class="dropdown-item">Booking</a>
                                </li>
                                <li>
                                    <a href="" class="dropdown-item">Invoice Details</a>
                                </li>
                            </ul>
                        </li>
                        <li class="dropdown sub-item">
                            <a href="" class="dropdown-item ">Error Page </a>
                            <ul class="dropdown-menu sub-menu">
                                <li>
                                    <a href="" class="dropdown-item">404 Error</a>
                                </li>
                                <li>
                                    <a href="" class="dropdown-item">500 Error</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="" class="dropdown-item">Pricing </a>
                        </li>
                        <li>
                            <a href="" class="dropdown-item"> FAQ</a>
                        </li>
                        <li>
                            <a href="" class="dropdown-item">Gallery </a>
                        </li>
                        <li>
                            <a href="" class="dropdown-item">Our Team </a>
                        </li>
                        <li>
                            <a href="" class="dropdown-item"> Testimonials</a>
                        </li>
                        <li>
                            <a href="" class="dropdown-item">Terms & Conditions </a>
                        </li>
                        <li>
                            <a href="" class="dropdown-item">Privacy Policy </a>
                        </li>
                        <li>
                            <a href="" class="dropdown-item">Maintenance </a>
                        </li>
                        <li>
                            <a href="" class="dropdown-item">Coming Soon </a>
                        </li>
                    </ul>
                </li>
                <li class="nav-item dropdown">
                    <a href="#" class="nav-link">Blog
                        <i class="fas fa-chevron-down"></i>
                    </a>
                    <ul class="dropdown-menu sub-menu">
                        <li>
                            <a href="" class="dropdown-item">Blogs Grid</a>
                        </li>
                        <li>
                            <a href="" class="dropdown-item">Blogs List</a>
                        </li>
                        <li>
                            <a href="" class="dropdown-item">Blogs Details</a>
                        </li>
                </li>
            </ul>
            </li>
            <li class="nav-item">
                <a href="" class="nav-link">Contact
                </a>
            </li>
            </ul>
            <ul class="navbar-nav main-nav-mobile">
                <li class="nav-item active">
                    <a href="./index.html" class="nav-link">Home</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link" data-bs-toggle="collapse" href="#Listings" role="button"
                        aria-expanded="false" aria-controls="collapseExample">
                        Listings
                        <i class="fas fa-chevron-down"></i>
                    </a>
                    <div>
                        <ul class="collapse sub-menu collapse" id="Listings">
                            <li>
                                <a href="./Listings.html" class="dropdown-item">Listings Grid</a>
                            </li>
                            <li>
                                <a href="./Listings.html" class="dropdown-item">Listings List</a>
                            </li>
                            <li>
                                <a href="./Listings.html" class="dropdown-item">Listings Details</a>
                            </li>
  
                        </ul>
                    </div>
                </li>
  
                <li class="nav-item dropdown list-item">
                    <a class="nav-link" data-bs-toggle="collapse" href="#pages" role="button"
                        aria-expanded="false" aria-controls="collapseExample">
                        Pages
                        <i class="fas fa-chevron-down"></i>
                    </a>
  
                    <div>
                        <ul class="collapse sub-menu" id="pages">
                            <li>
                                <a href="" class="dropdown-item "> About Us </a>
                            </li>
                            <li class="dropdown sub-item">
                                <a class="dropdown-item" data-bs-toggle="collapse" href="#Authentication"
                                    role="button" aria-expanded="false" aria-controls="collapseExample">
                                    Authentication
                                </a>
                                <div>
                                    <ul class="collapse sub-menu" id="Authentication">
                                        <li>
                                            <a href="" class="dropdown-item">Sign up</a>
                                        </li>
                                        <li>
                                            <a href="" class="dropdown-item">Sign in</a>
                                        </li>
                                        <li>
                                            <a href="" class="dropdown-item">Forgot Password</a>
                                        </li>
                                        <li>
                                            <a href="" class="dropdown-item">Reset Password</a>
                                        </li>
                                    </ul>
                                </div>
  
                            </li>
                            <li class="dropdown sub-item">
                                <a class="dropdown-item" data-bs-toggle="collapse" href="#Booking"
                                    role="button" aria-expanded="false" aria-controls="collapseExample">
                                    Booking
                                </a>
                                <ul class="collapse sub-menu" id="Booking">
                                    <li>
                                        <a href="" class="dropdown-item">Booking Checkout</a>
                                    </li>
                                    <li>
                                        <a href="" class="dropdown-item">Booking</a>
                                    </li>
                                    <li>
                                        <a href="" class="dropdown-item">Invoice Details</a>
                                    </li>
                                </ul>
                            </li>
                            <li class="dropdown sub-item">
  
                                <a class="dropdown-item" data-bs-toggle="collapse" href="#ErrorPage"
                                    role="button" aria-expanded="false" aria-controls="collapseExample">
                                    Error Page
                                </a>
                                <ul class="collapse sub-menu" id="ErrorPage">
                                    <li>
                                        <a href="" class="dropdown-item">404 Error</a>
                                    </li>
                                    <li>
                                        <a href="" class="dropdown-item">500 Error</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="" class="dropdown-item">Pricing </a>
                            </li>
                            <li>
                                <a href="" class="dropdown-item"> FAQ</a>
                            </li>
                            <li>
                                <a href="" class="dropdown-item">Gallery </a>
                            </li>
                            <li>
                                <a href="" class="dropdown-item">Our Team </a>
                            </li>
                            <li>
                                <a href="" class="dropdown-item"> Testimonials</a>
                            </li>
                            <li>
                                <a href="" class="dropdown-item">Terms & Conditions </a>
                            </li>
                            <li>
                                <a href="" class="dropdown-item">Privacy Policy </a>
                            </li>
                            <li>
                                <a href="" class="dropdown-item">Maintenance </a>
                            </li>
                            <li>
                                <a href="" class="dropdown-item">Coming Soon </a>
                            </li>
                        </ul>
                    </div>
  
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link" data-bs-toggle="collapse" href="#blog" role="button"
                        aria-expanded="false" aria-controls="collapseExample">
                        Blog
                        <i class="fas fa-chevron-down"></i>
                    </a>
                    <div>
                        <ul class="collapse sub-menu collapse" id="blog">
                            <li>
                                <a href="" class="dropdown-item">Blogs Grid</a>
                            </li>
                            <li>
                                <a href="" class="dropdown-item">Blogs List</a>
                            </li>
                            <li>
                                <a href="" class="dropdown-item">Blogs Details</a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li class="nav-item">
                    <a href="" class="nav-link">Contact
                    </a>
                </li>
                <li class="nav-item">
                    <a href="" class="nav-link">Sign Up
                    </a>
                </li>
                <li class="nav-item">
                    <a href="" class="nav-link">Sign In
  
                    </a>
                </li>
            </ul>
        </div>
        <div class="navbar-login">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a href="" class="nav-link nav-login">
                        <span>
                            <i class="fa-regular fa-user"></i>
                        </span>
                        Sign In
                    </a>
                </li>
                <li class="nav-item ">
                    <a href="" class="nav-link nav-reg">
                        <span>
                            <i class="fa-solid fa-lock"></i>
                        </span>
                        Sign Up
                    </a>
                </li>
            </ul>
        </div>
    </div>
  </nav>`
   }
   export const renderFooter = function(){
    return `<div class="footer-top">
    <div class="container">
        <div class="row">
            <div class="col-lg-7 ">
                <div class="row">
                    <div class="col-xl-4 col-md-6">
                        <div class="footer-menu">
                            <h5 class="footer-title">
                                About Company
                            </h5>
                            <ul>
                                <li>
                                    <a href="" class="">Our Company</a>
                                </li>
                                <li>
                                    <a href="" class="">Shop Toyota</a>
                                </li>
                                <li>
                                    <a href="" class="">Dreamsrentals USA</a>
                                </li>
                                <li>
                                    <a href="" class="">Dreamsrentals Worldwide</a>
                                </li>
                                <li>
                                    <a href="" class="">Dreamsrentals Racing</a>
                                </li>
                                <li>
                                    <a href="" class="">Dreamsrentals Racing</a>
                                </li>
                                <li>
                                    <a href="" class="">Virtual Auto Show</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-xl-4 col-md-6">
                        <div class="footer-menu">
                            <h5 class="footer-title">
                                Vehicles Type
                            </h5>
                            <ul>
                                <li>
                                    <a href="" class="">All Vehicles</a>
                                </li>
                                <li>
                                    <a href="" class="">SUVs</a>
                                </li>
                                <li>
                                    <a href="" class="">Trucks</a>
                                </li>
                                <li>
                                    <a href="" class="">Cars</a>
                                </li>
                                <li>
                                    <a href="" class="">Crossovers</a>
                                </li>
                                <li>
                                    <a href="" class="">Electrified Vehicles</a>
                                </li>
                                <li>
                                    <a href="" class="">Hybrids</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-xl-4 col-md-6">
                        <div class="footer-menu">
                            <h5 class="footer-title">
                                Quick links
                            </h5>
                            <ul>
                                <li>
                                    <a href="" class="">My Account</a>
                                </li>
                                <li>
                                    <a href="" class="">Champaigns</a>
                                </li>
                                <li>
                                    <a href="" class="">Dreamsrental Dealers</a>
                                </li>
                                <li>
                                    <a href="" class="">Deals and Incentive</a>
                                </li>
                                <li>
                                    <a href="" class="">Financial Services</a>
                                </li>
                                <li>
                                    <a href="" class="">Dreamsrental Insurance</a>
                                </li>
                                <li>
                                    <a href="" class="">Dreamsrental Care</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-5 ">
                <div class="footer-contact">
                    <h5 class="footer-title">
                        Contact Info
                    </h5>
                    <div class="footer-contact-info">
                        <div class="footer-address">
                            <span>
                                <i class="fa-solid fa-phone-volume"></i>
                            </span>
                            <div class="address-info">
                                <a href="" class="">+ 1 (888) 760 1940</a>
                            </div>
                        </div>
                    </div>
                    <div class="footer-contact-info">
                        <div class="footer-address">
                            <span>
                                <i class="fa-solid fa-envelope"></i>
                            </span>
                            <div class="address-info">
                                <a href="" class="">support@example.com</a>
                            </div>

                        </div>
                    </div>
                    <div class="update-form">
                        <form action="">
                            <span>
                                <i class="fa-solid fa-envelope"></i>
                            </span>
                            <input type="email" class="form-control" id="exampleFormControlInput1"
                                placeholder="Enter You Mail Here">
                            <button type="submit" class="btn btn-primary mb-3">
                                <i class="fa-sharp fa-solid fa-paper-plane"></i>
                            </button>

                        </form>
                    </div>
                    <div class="footer-social-widget">
                        <h6>
                            Connect with us
                        </h6>
                        <ul class="nav-social">
                            <li>
                                <a href="">
                                    <i class="fa-brands fa-facebook icon-facebook"></i>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <i class="fa-brands fa-instagram icon-instagram"></i>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <i class="fa-brands fa-behance icon-behance"></i>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <i class="fa-brands fa-twitter icon-twitter"></i>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <i class="fa-brands fa-linkedin icon-linkedin"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="footer-bottom">
    <div class="container">
        <div class="row">
            <div class="footer-bottom-copyright">
                <div class="col-xl-6  ">
                    <div class="copyright-text">
                        <p>© 2023 Dreams Rent. All Rights Reserved.</p>
                    </div>
                </div>
                <div class="col-xl-6 ">
                    <div class="copyright-menu">
                        <ul>
                            <li>
                                <a href="" class="">
                                    <img src="./img/icons/paypal.svg" alt="">
                                </a>
                            </li>
                            <li>
                                <a href="" class="">
                                    <img src="./img/icons/visa.svg" alt="">
                                </a>
                            </li>
                            <li>
                                <a href="" class="">
                                    <img src="./img/icons/master.svg" alt="">
                                </a>
                            </li>
                            <li>
                                <a href="" class="">
                                    <img src="./img/icons/applegpay.svg" alt="">
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>`
   }