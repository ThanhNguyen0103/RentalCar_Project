import { renderInfoBooking } from "./renderProducts.js";

var productID = window.location.href.slice(-1);
const carAPI = fetch("http://localhost:3000/data")
  .then((res) => res.json())
  .then((data) => {
    const carDetails = function (product, productID) {
      const renderSlideShow = document.querySelector(".slideshow");
      var a = product.filter(function (pro) {
        return pro.id == productID;
      });

      var b = a
        .map(function (prod) {
          return ` <div class="myslides">
    <img src="${prod.img}"
        alt="">
</div>
     <div class="myslides">
      <img src="${prod.imgDetails[0]}"
          alt="">
  </div>
  <div class="myslides">
      <img src="${prod.imgDetails[1]}"
          alt="">
  </div>
  <div class="myslides">
  <img src="${prod.imgDetails[2]}"
          alt="">
  </div>
 
  <a href="#" class="prev"><i
          class="fa-solid fa-arrow-left"></i></a>
  <a href="#" class="next"><i
          class="fa-solid fa-arrow-right"></i></a>
  <div class="row">
  <div class="col-3">
  <div class="img-slide">
  <img src="${prod.img}"
          alt="">
  </div>
</div>
      <div class="col-3">
          <div class="img-slide" >
          <img src="${prod.imgDetails[0]}"
                  alt="">
          </div>
      </div>
      <div class="col-3">
          <div class="img-slide">
          <img src="${prod.imgDetails[1]}"
                  alt="">
          </div>
      </div>
      <div class="col-3">
          <div class="img-slide">
          <img src="${prod.imgDetails[2]}"
                  alt="">
          </div>
      </div>
      
  </div>`;
        })
        .join("");
      renderSlideShow.innerHTML = b;
      let slideIndex = 1;
      const prevbtn = document.querySelector(".prev");
      const nextbtn = document.querySelector(".next");
      const imgSlide = document.querySelectorAll(".img-slide");
      const slide = document.querySelectorAll(".myslides");
      const slideShow = function (n) {
        if (n > slide.length) {
          slideIndex = 1;
        }
        if (n < 1) {
          slideIndex = slide.length;
        }
        for (let i = 0; i < slide.length; i++) {
          slide[i].style.display = "none";
        }
        for (let i = 0; i < imgSlide.length; i++) {
          imgSlide[i].classList.remove("active");
        }

        slide[slideIndex - 1].style.display = "block";
        imgSlide[slideIndex - 1].classList.add("active");
      };

      for (let i = 0; i < imgSlide.length; i++) {
        imgSlide[i].onclick = function () {
          currentDisplay(i + 1);
        };
      }

      const plusDisplay = function (n) {
        slideShow((slideIndex = slideIndex + n));
      };
      const currentDisplay = function (n) {
        slideShow((slideIndex = n));
      };
      prevbtn.onclick = function () {
        plusDisplay(-1);
      };
      nextbtn.onclick = function () {
        plusDisplay(1);
      };
      slideShow(slideIndex);
    };
    carDetails(data, productID);
    const getInfomation = function (option) {
      const formElement = document.querySelector(option.form);
      const btn = document.querySelector(".btn-submit")
      
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        option.address.forEach(function (el) {
          var inputElement = document.querySelector(el);
          if (!inputElement.value) {
            while (inputElement.parentElement) {
              if (inputElement.parentElement.matches(".form-group")) {
                const messageError = inputElement.parentElement.querySelector(".form-message");
                messageError.innerText = "Vui long ..";
              }
              inputElement = inputElement.parentElement;
            }
          }
        });
        var valueElement = option.address.reduce(function (value, input) {
          var inputElement = document.querySelector(input);
          value[inputElement.name] = inputElement.value;
          return value;
        }, {});
        console.log(valueElement)
        var c = data.filter(function (product) {
          return product.id == productID;
        });
        var TE = Object.assign(...c, valueElement);
        var tesT = [Object.assign(...c, valueElement)];

        renderInfoBooking(tesT);

        async function postData(url = "", data) {
          // Default options are marked with *
          const response = await fetch(url, {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, *cors, same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "same-origin", // include, *same-origin, omit
            headers: {
              "Content-Type": "application/json",
              // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: "follow", // manual, *follow, error
            referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(data), // body data type must match "Content-Type" header
          });
          return response.json(); // parses JSON response into native JavaScript objects
        }

        postData("http://localhost:3000/da", TE);
      });
    };
    getInfomation({
      form: "#form-1",
      address: [
        "#pickup",
        "#dropoff",
        "#pickup_date",
        "#pickup_time",
        "#dropoff_date",
        "#dropoff_time",
      ],
    });
  });
