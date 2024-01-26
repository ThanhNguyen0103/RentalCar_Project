
import {displayProductsListingPage} from "./displayProducts.js"

// function setCategories(products) {
//   const categoryName = document.querySelectorAll(".form-check-label");
//   const categoryList = document.querySelectorAll(".category_list");
//   console.log(categoryName, categoryList);
//   const allCategories = products.map(function (product) {
//     return product.category;
//   });
//   const categories = [
//     "All",
//     ...allCategories.filter(function (category, index) {
//       return allCategories.indexOf(category) === index;
//     }),
//   ];
//   const categoryList_name = [...categoryName];
//   for (let i = 0; i < categoryList.length; i++) {
//     categoryList_name[i].innerHTML = categories[i];
//     categoryList[i].addEventListener("click", function (e) {
//       categoryList.forEach(function (elem) {
//         if (elem.matches(".active")) {
//           elem.classList.remove("active");
//         }
//         e.target.classList.add("active");
//       });
//       const selectedCategory = e.target.innerText;
//       selectedCategory === "All"
//         ? displayProducts(data)
//         : displayProducts(
//             data.filter(function (product) {
//               return product.category == selectedCategory;
//             })
//           );
//     });
//   }
// }


 export const filterProduct = function (products) {
    carCategories(products);
    searchProduct(products);
    setPrices(products);
  }
function searchProduct (products) {
    const searchInput = document.querySelector(".search-input");
    searchInput.addEventListener("keyup", function (e) {
      let value = e.target.value.toLowerCase().trim();
      if (value) {
        displayProductsListingPage(
          products.filter(function (product) {
            return product.name.toLowerCase().indexOf(value) != -1;
          })
        );
      }
    });
  };
// function renderRangtingStar(){
//   const carRangting = document.querySelector('.car-rangting');
// }
var setPrices = function (productPrices){
  const rangeValue = document.getElementById("priceRange");
  const output = document.querySelector('.output_value');
  const priceList = productPrices.map(function(product){
    return product.price.replace("$","");
  });
  const minPrice = Math.min(...priceList);
  const maxPrice = Math.max(...priceList);
  // rangeValue.min = minPrice;
  rangeValue.max = maxPrice;
  output.innerHTML = rangeValue.value ;
 
  rangeValue.oninput = function(){
    var val = (rangeValue.value/maxPrice) * 100 ;
    output.innerHTML = rangeValue.value ;
    // output.style.left = val +"%";
    displayProductsListingPage(productPrices.filter(function(product){
        return +product.price.replace("$","") <= +rangeValue.value ;
     }));
  }
}
// export const elementCarIcon = function renderCarIcon(){
//   const elementCarIcon = document.querySelectorAll('.car-icon');
// }
function carCategories(products) {
  const elementInputs = document.querySelectorAll(".form-check-input");
  const btnSubmit = document.querySelector(".btn-sort-product");
  var arrElement = [];
  elementInputs.forEach(function (element) {
    element.addEventListener("click", function (e) {
      if (element.matches(":checked")) {
        arrElement.push(element);
      }
      else if (element != "checked") {
        let index = arrElement.indexOf(element);
        if (index != -1) {
          arrElement.splice(index, 1);
        }
      }
    });
  });
  btnSubmit.addEventListener("click", function (e) {
    e.preventDefault();
    let arr_categoryName = [];
    let productCategory = [];
    let categoryName = arrElement.map(function (element) {
      return element.name;
    });
    // console.log( categoryName);
    // console.log(arrElement)
    for (let i = 0; i < arrElement.length; i++) {
      arr_categoryName.push(
        products.filter(function (product) {
          let indexSpace = product.name.indexOf(" ");
          let productName = product.name.slice(0, indexSpace);
          let productType = product.type;
          let productCapacity = product.capacity;
       
          if (
            productName == categoryName[i] ||
            productType == categoryName[i] ||
            productCapacity == categoryName[i]
          ) {
            return true;
          }
        })
      );
      productCategory.push(...arr_categoryName[i]);
    }
    displayProductsListingPage(
      productCategory.filter(function (product, index) {
        return productCategory.indexOf(product) === index;
      })
    );
  });
}

