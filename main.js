let wrapper = document.querySelector(".slidderWrapper");
let menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Air Max Excee",
    price: 119,
    colors: [
      {
        code: "white",
        img: "./Air_Max_Excee_Sneakers_removebg.PNG",
      },
      {
        code: "gray",
        img: "./Excee_gray_removebg.PNG",
      },
    ],
  },
  {
    id: 2,
    title: "Air Max Impact",
    price: 149,
    colors: [
      {
        code: "white",
        img: "Air_Max_Impact_white.PNG.PNG",
      },
      {
        code: "black",
        img: "Impact_black_removebg.PNG",
      },
    ],
  },
  {
    id: 3,
    title: "Air Max SC",
    price: 109,
    colors: [
      {
        code: "black",
        img: "./Air_Maxx_SC_Sneakers_removebg.PNG",
      },
      {
        code: "blue",
        img: "./Air_Max_SC_Sneakers_blue_removebg.PNG",
      },
    ],
  },
  {
    id: 4,
    title: "Elevate",
    price: 129,
    colors: [
      {
        code: "gray",
        img: "./Renew_Elevate_III_Basketball_Shoes_removebg.PNG",
      },
      {
        code: "red",
        img: "./Elevate_red_removebg.PNG",
      },
    ],
  },
  {
    id: 5,
    title: "Tanjun",
    price: 99,
    colors: [
      {
        code: "black",
        img: "./Tanjun_Sustainable_Sneakers-removebg.PNG",
      },
      {
        code: "white",
        img: "./Tunjan_white_removebg.PNG",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImage");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    choosenProduct = products[index];

    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = choosenProduct.price + "$";
    currentProductImg.src = choosenProduct.colors[0].img;

    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});


currentProductColors.forEach((color, index)=>{
    color.addEventListener("click", ()=>{
        currentProductImg.src = choosenProduct.colors[index].img
    })
})

currentProductSizes.forEach((size, index)=>{
    size.addEventListener("click", () => {
        currentProductSizes.forEach(size => {
            size.style.backgroundColor = "white"
            size.style.color = "black"
        });
        size.style.backgroundColor = "black"
        size.style.color = "white"
    });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click",()=>{
    payment.style.display="flex"
});

close.addEventListener("click",()=>{
    payment.style.display="none"
});

// const productButton = document.querySelector(".productButton");
// const payment = document.querySelector(".payment");
// const close = document.querySelector(".close");

// productButton.addEventListener("click", () => {
//   if (payment.style.display === "none") {
//     payment.style.display = "flex";
//   } else {
//     payment.style.display = "none";
//   }
// });

// close.addEventListener("click", () => {
//   payment.style.display = "none";
// });


// const productButton = document.querySelector(".productButton");
// const payment = document.querySelector(".payment");
// const close = document.querySelector(".close");

// productButton.addEventListener("click", () => {
//   if (payment.style.display === "none") {
//     payment.style.display = "flex";
//   } else {
//     payment.style.display = "none";
//   }
// });

// close.addEventListener("click", () => {
//   payment.style.display = "none";
// });

