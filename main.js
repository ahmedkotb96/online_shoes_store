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
        img: "Air_Max_Impact_white.PNG",
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

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});

document.querySelector(".searchInput").addEventListener("input", function (e) {
  const searchTerm = e.target.value.toLowerCase();
  const menuItems = document.querySelectorAll(".menuItem");
  const searchResults = document.querySelector(".search-results");

  // Clear previous results
  searchResults.innerHTML = "";

  if (searchTerm.length > 0) {
    // Filter products
    const matchedProducts = products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm)
    );

    // Show results
    matchedProducts.forEach((product) => {
      const div = document.createElement("div");
      div.className = "search-result-item";
      div.innerHTML = `
                <img src="${product.colors[0].img}" alt="${product.title}">
                <span>${product.title}</span>
                <span>$${product.price}</span>
            `;
      div.addEventListener("click", () => {
        const index = products.findIndex((p) => p.id === product.id);
        wrapper.style.transform = `translateX(${-100 * index}vw)`;
        searchResults.style.display = "none";
      });
      searchResults.appendChild(div);
    });

    searchResults.style.display = matchedProducts.length ? "block" : "none";
  } else {
    searchResults.style.display = "none";
  }
});

// Close search results when clicking outside
document.addEventListener("click", (e) => {
  const searchResults = document.querySelector(".search-results");
  const searchContainer = document.querySelector(".search-container");
  if (!searchContainer.contains(e.target)) {
    searchResults.style.display = "none";
  }
});

// Initialize cart count
let cartCount = 0;
document.querySelector(".cart-count").textContent = cartCount;

// Animated cart counter
function updateCart() {
  const cartCounter = document.querySelector(".cart-count");
  cartCounter.classList.add("bump");
  cartCounter.textContent = cartCount;
  setTimeout(() => cartCounter.classList.remove("bump"), 300);
}

document.querySelectorAll(".buyButton").forEach((button) => {
  button.addEventListener("click", () => {
    cartCount++;
    updateCart();
  });
});

// Menu item hover effects
menuItems.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    item.classList.add("menu-hover");
  });
  item.addEventListener("mouseleave", () => {
    item.classList.remove("menu-hover");
  });
});

// Enhanced search functionality
const searchInput = document.querySelector('.searchInput');
const searchContainer = document.querySelector('.search-container');

searchInput.addEventListener('focus', () => {
    searchContainer.style.width = '200px';  // smaller expanded width
});

searchInput.addEventListener('blur', () => {
    // Remove this event listener as we'll handle width reset in the document click
});

// Debounced search function
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

const handleSearch = debounce((searchTerm) => {
    const searchResults = products.filter(product => 
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    const resultsContainer = document.querySelector('.search-results');
    resultsContainer.innerHTML = '';
    
    if (searchTerm.length > 0) {
        searchResults.forEach(product => {
            const resultItem = document.createElement('div');
            resultItem.className = 'search-result-item';
            resultItem.innerHTML = `
                <img src="${product.colors[0].img}" alt="${product.title}">
                <div class="result-info">
                    <div class="result-title">${product.title}</div>
                    <div class="result-price">$${product.price}</div>
                </div>
            `;
            resultsContainer.appendChild(resultItem);
        });
        resultsContainer.style.display = 'block';
    } else {
        resultsContainer.style.display = 'none';
    }
}, 300);

searchInput.addEventListener('input', (e) => handleSearch(e.target.value));

// Close search results when clicking outside
document.addEventListener('click', (e) => {
    if (!searchContainer.contains(e.target)) {
        document.querySelector('.search-results').style.display = 'none';
    }
});

// Enhanced search functionality
const searchBtn = document.querySelector('.search-btn');

function performSearch() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    if (!searchTerm) return;

    const searchResults = products.filter(product => 
        product.title.toLowerCase().includes(searchTerm)
    );

    // Highlight matching items in the navigation
    document.querySelectorAll('.menuItem').forEach(item => {
        const text = item.textContent.toLowerCase();
        item.style.opacity = text.includes(searchTerm) ? '1' : '0.5';
    });

    // Scroll to matching slider item if found
    const firstMatch = searchResults[0];
    if (firstMatch) {
        const index = products.findIndex(p => p.id === firstMatch.id);
        wrapper.style.transform = `translateX(${-100 * index}vw)`;
    }
}

// Search on enter key
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        performSearch();
    }
});

// Search on button click
searchBtn.addEventListener('click', performSearch);

// Reset opacity when clearing search
searchInput.addEventListener('input', (e) => {
    if (!e.target.value) {
        document.querySelectorAll('.menuItem').forEach(item => {
            item.style.opacity = '1';
        });
    }
});

document.addEventListener('click', (e) => {
    const searchContainer = document.querySelector('.search-container');
    const searchResults = document.querySelector('.search-results');
    
    // If click is outside search container
    if (!searchContainer.contains(e.target)) {
        searchContainer.style.width = '120px';  // reset to initial width
        searchResults.style.display = 'none';
    }
});

