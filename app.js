const sliderdetails = [
  {
    id: 1,
    bgtext: "Over Ear",
    pdname: "JBL Live 660NC",
    image: "./images/products/jbl660nc-1.png",
    tagline: "Keep The Noise Out, Or In. You Choose.",
    descprice: 9999,
    originalPrice: 14999,
  },
  {
    id: 2,
    bgtext: "In Ear",
    pdname: "boAt Airdopes 131",
    image: "./images/products/boat131-3.png",
    tagline: "Featherweight For Comfort All-Day.",
    descprice: 1099,
    originalPrice: 2990,
  },
  {
    id: 3,
    bgtext: "Over Ear",
    pdname: "Sony WH-XB910N",
    image: "./images/products/sonyXb910n-1.png",
    tagline: "Give Your Favourite Music A Boost.",
    descprice: 13489,
    originalPrice: 19990,
  },
];

const container = document.getElementById("container");
let count = 0;

function updateSlide() {
  const currentproduct = sliderdetails[count];

  const slide = document.createElement("div");

  slide.innerHTML = `
    <h1 class='bgtext'>${currentproduct.bgtext}</h1>
    <h1 class='pdname'>${currentproduct.pdname}</h1>
    <h1 class='tagline'>${currentproduct.tagline}</h1>
    <div class='price'>  <span >₹${currentproduct.descprice}</span>  <strike> ₹${currentproduct.originalPrice}</strike></div>
    <button class='btn'>Shop Now</button>
    <img src=${currentproduct.image} alt="bomma" class="featured-img" />
    `;

  container.appendChild(slide);

  count = (count + 1) % sliderdetails.length;

  setTimeout(() => {
    container.removeChild(container.firstElementChild);
  }, 10000);
}

updateSlide();

setInterval(updateSlide, 2000);

// cards

import productsData from "./data.js";

let products = document.getElementById("productcards");
let info = productsData.slice(0, 11).map((item) => {
let stars = '<i class="fa-solid fa-star"></i>'.repeat(item.rateCount);
  return `
<div class='layoutcards'>
  <div class='imageback'>
    <img src=${item.images[0]} alt="imagesss" class='product-image'/>
  </div>
  ${stars} 
    <h3>${item.title}</h3>
    <p class='product-desc'>${item.info}</p>
    <p class='product-price'><span>
      ₹${item.finalPrice}</span> <strike > ₹${item.originalPrice}</strike>
    </p>
    <button class='productbtn'>Add to cart</button>
  </div>
</div>`;
  })
  .join("");

products.innerHTML = info;
// headphonecontainer.style.display = "none";
document.getElementById("all").addEventListener("click",  ()=> {
document.getElementById("productcards").style.display = "flex";
document.getElementById("productcards").style.flexwrap="wrap";
document.getElementById("headphonecontainer").style.display ="none"
document.getElementById("earburdscontainer").style.display ="none"
document.getElementById("earPhonescontainer").style.display ="none"
document.getElementById("neckbandscontainer").style.display ="none"
});


// ===============Headphone section================

document.getElementById("onlyheadphones").addEventListener("click",()=>{
  let product2 = document.getElementById("headphonecontainer");


  let info2 = productsData.filter(item => item.category === "Headphones").map(item => {
    let stars = '<i class="fa-solid fa-star"></i>'.repeat(item.rateCount);
    return `
<div class='layoutcards'>
  <div class='imageback'>
    <img src=${item.images[0]} alt="imagesss" class='product-image'/>
  </div>
  ${stars} 
    <h3>${item.title}</h3>
    <p class='product-desc'>${item.info}</p>
    <p class='product-price'><span>
      ₹${item.finalPrice}</span> <strike > ₹${item.originalPrice}</strike>
    </p>
    <button class='productbtn'>Add to cart</button>
  </div>
</div>`;
  }).join("");

product2.innerHTML = info2;
document.getElementById("productcards").style.display = "none";
document.getElementById("headphonecontainer").style.display = "flex";
document.getElementById("headphonecontainer").style.flexwrap = "wrap";
document.getElementById("earburdscontainer").style.display = "none";
document.getElementById("earPhonescontainer").style.display ="none"
document.getElementById("neckbandscontainer").style.display ="none"
});

// ============Earburds Sectiin============

document.getElementById("onlyEarburds").addEventListener("click",()=>{
  let product3 = document.getElementById("earburdscontainer");


  let info3 = productsData.filter(item => item.category === "Earbuds").map(item => {
    let stars = '<i class="fa-solid fa-star"></i>'.repeat(item.rateCount);
    return `
<div class='layoutcards'>
  <div class='imageback'>
    <img src=${item.images[0]} alt="imagesss" class='product-image'/>
  </div>
  ${stars} 
    <h3>${item.title}</h3>
    <p class='product-desc'>${item.info}</p>
    <p class='product-price'><span>
      ₹${item.finalPrice}</span> <strike > ₹${item.originalPrice}</strike>
    </p>
    <button class='productbtn'>Add to cart</button>
  </div>
</div>`;
  }).join("");

product3.innerHTML = info3;
document.getElementById("productcards").style.display = "none";
document.getElementById("earburdscontainer").style.display = "flex";
document.getElementById("earburdscontainer").style.flexwrap = "wrap";
document.getElementById("headphonecontainer").style.display = "none";
document.getElementById("earPhonescontainer").style.display ="none"
document.getElementById("neckbandscontainer").style.display ="none"
});


// ======================
document.getElementById("onlyEarphones").addEventListener("click",()=>{
  let product4= document.getElementById("earPhonescontainer");


  let info4 = productsData.filter(item => item.category === "Earphones").map(item => {
    let stars = '<i class="fa-solid fa-star"></i>'.repeat(item.rateCount);
    return `
<div class='layoutcards'>
  <div class='imageback'>
    <img src=${item.images[0]} alt="imagesss" class='product-image'/>
  </div>
  ${stars} 
    <h3>${item.title}</h3>
    <p class='product-desc'>${item.info}</p>
    <p class='product-price'><span>
      ₹${item.finalPrice}</span> <strike > ₹${item.originalPrice}</strike>
    </p>
    <button class='productbtn'>Add to cart</button>
  </div>
</div>`;
  }).join("");

product4.innerHTML = info4;
document.getElementById("productcards").style.display = "none";
document.getElementById("earPhonescontainer").style.display = "flex";
document.getElementById("earPhonescontainer").style.flexwrap = "wrap";
document.getElementById("earburdscontainer").style.display = "none";
document.getElementById("headphonecontainer").style.display ="none"
document.getElementById("neckbandscontainer").style.display ="none"
});

// ==============
document.getElementById("onlyNeckbands").addEventListener("click",()=>{
  let product2 = document.getElementById("neckbandscontainer");


  let info2 = productsData.filter(item => item.category === "Neckbands").map(item => {
    let stars = '<i class="fa-solid fa-star"></i>'.repeat(item.rateCount);
    return `
<div class='layoutcards'>
  <div class='imageback'>
    <img src=${item.images[0]} alt="imagesss" class='product-image'/>
  </div>
  ${stars} 
    <h3>${item.title}</h3>
    <p class='product-desc'>${item.info}</p>
    <p class='product-price'><span>
      ₹${item.finalPrice}</span> <strike > ₹${item.originalPrice}</strike>
    </p>
    <button class='productbtn'>Add to cart</button>
  </div>
</div>`;
  }).join("");

product2.innerHTML = info2;
document.getElementById("productcards").style.display = "none";
document.getElementById("neckbandscontainer").style.display = "flex";
document.getElementById("neckbandscontainer").style.flexwrap = "wrap";
document.getElementById("earburdscontainer").style.display = "none";
document.getElementById("earPhonescontainer").style.display ="none"
document.getElementById("headphonecontainer").style.display ="none"
});
// =========================


























// // Headphone Category
// document
//   .getElementById("onlyheadphones")
//   .addEventListener("click", function () {
//     let headphonecontainer = document.getElementById("headphonecontainer");
//     let headphonescard = productsData
//       .filter((item) => item.category === "Headphones")
//       .map((item) => {
//         return `
//     const stars = '<i class="fa-solid fa-star"></i>'.repeat(item.rateCount);
   
// <div class='layoutcards'>
//   <div class='imageback'>
//     <img src=${item.images[0]} alt="imagesss" class='product-image'/>
    
   

// </div>
//  <div class = 'starcolor'> ${stars}</div>
//   <div class='product-details'> 
//     <h3 class='product-title'>${item.title}</h3>
//     <p class='product-desc'>${item.info}</p>
//   <div class='line'></div>
//     <h1 class='product-price'>
//       ₹${item.finalPrice} <strike> ₹${item.originalPrice}</strike>
//     </h1>
//     <button type='submit' class='productbtn'>Add to cart</button>
//   </div>
// </div>`;
//       })
//       .join("");

//     headphonecontainer.innerHTML = headphonescard;

//     headphonecontainer.style.display = "flex";
//     headphonecontainer.style.flexwrap = "wrap";
//   });
// products.style.display = "none";

// document.getElementById("onlyheadphones").addEventListener("click", function(){
//   let headphoneContainer = document.getElementById("headphone_container");
//   let headphonescard = productsData.filter(item => item.category === "Headphones").map(item => {

//     const stars = '<i class="fa-solid fa-star"></i>'.repeat(item.rateCount)
//     return `
// <div class='layoutcards'>
//   <div class='imageback'>
//     <img src=${item.images[0]} alt="imagesss" class='product-image'/>
//   </div>
//   <div class = 'starcolor'> ${stars}</div>
//   <div class='product-details'>
//     <h3 class='product-title'>${item.title}</h3>
//     <p class='product-desc'>${item.info}</p>
//     <div class='line'></div>
//     <h1 class='product-price'>
//       ₹${item.finalPrice} <strike> ₹${item.originalPrice}</strike>
//     </h1>
//     <button type='submit' class='productbtn'>Add to cart</button>
//   </div>
// </div>`;
//   }).join("");

//   headphoneContainer.innerHTML = headphonescard;
//   headphoneContainer.style.display = "flex";
//   headphoneContainer.style.flexWrap = "wrap";
// });

// products.style.display = "none"; // This line seems to be outside the event listener, so it might not work as intended
