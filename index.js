import { displayProducts,displayProductsListingPage} from "./displayProducts.js";
import { renderCategory, renderNameProduct,renderHeader,renderFooter } from "./renderProducts.js";
import { filterProduct } from "./filterProducts.js";  
const elememtHeader = document.querySelector(".header");
 elememtHeader.innerHTML = renderHeader();
 const elementFooter = document.querySelector(".footer");
 elementFooter.innerHTML = renderFooter();
export const getData = function(){
  return fetch("http://localhost:3000/data")
  .then(res => res.json());
}
getData()
.then(data => {
  renderCategory(data);
  displayProducts(data);
  if (location.href == "http://localhost:8080/Listings.html") {
    renderNameProduct(data);
    displayProductsListingPage(data);
    filterProduct(data);
  }
})



