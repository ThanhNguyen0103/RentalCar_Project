
fetch("http://localhost:3000/da")
.then(res => res.json())
.then(data => {
    const totalPrice  = document.querySelector(".total-price");
    const confirmCar = document.querySelector(".confirm-car");
    const confirmPickupLocation = document.querySelector(".confirm-pickup-location");
    const confirmDropoffLocation = document.querySelector(".confirm-dropoff-location");
  const price = data.map(function(product){
   const  priceTax = product.price.replace("$","")*0.1 ;
    const totalPrice = product.price.replace("$","")*1 + priceTax;
    return totalPrice + "$";
   })
   totalPrice.innerHTML = price;

    confirmCar.innerHTML = data.map(function(product){
   return `<div class="confirm-title">
   <h6>
       Car Details
   </h6>
</div>
<ul>
   <li>
       <img class="img-car" src="${product.img}" alt="">
       <div>
           <h6>${product.name}</h6>
           <span>${product.price}</span>
       </div>
   </li>
</ul>`
   });
   confirmPickupLocation.innerHTML = data.map(function(product){
      return ` <div class="confirm-title">
      <h6>
          Pickup Location & Date
      </h6>
  </div>
  <ul>
      <li>
          ${product.pickup_location}
      </li>
      <li>
      ${product.pickup_date} - ${product.pickup_time}
      </li>
  </ul>`
   });
   confirmDropoffLocation.innerHTML = data.map(function(product){
    return ` <div class="confirm-title">
    <h6>
        Dropoff Location & Date
    </h6>
</div>
<ul>
    <li>
        ${product.dropoff_location}
    </li>
    <li>
    ${product.dropoff_date} - ${product.dropoff_date}
    </li>
</ul>`
 });

})