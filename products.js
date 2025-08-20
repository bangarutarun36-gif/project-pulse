const products = [
  { name: "Smartphone", category: "electronics", price: 40000 },
  { name: "Headphones", category: "electronics", price: 5000 },
  { name: "Tablet", category: "electronics", price: 30000 },
  { name: "Men Shirt", category: "men", price: 1200 },
  { name: "Men Jacket", category: "men", price: 1800 },
  { name: "Women Kurti", category: "women", price: 1500 },
  { name: "Women Saree", category: "women", price: 2000 },
  { name: "Kids T-Shirt", category: "kids", price: 500 },
  { name: "Kids Shorts", category: "kids", price: 600 }
];

const productList = document.getElementById("productList");
const categoryFilter = document.getElementById("categoryFilter");
const priceSort = document.getElementById("priceSort");
const priceRange = document.getElementById("priceRange");
const priceValue = document.getElementById("priceValue");

function renderProducts() {
  const category = categoryFilter.value;
  const sort = priceSort.value;
  const maxPrice = parseInt(priceRange.value);
  priceValue.textContent = maxPrice;

  let filtered = products.filter(p => 
    (category === "all" || p.category === category) && p.price <= maxPrice
  );

  if (sort === "asc") filtered.sort((a, b) => a.price - b.price);
  else if (sort === "desc") filtered.sort((a, b) => b.price - a.price);

  productList.innerHTML = "";
  filtered.forEach(p => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <h3>${p.name}</h3>
      <p>Category: ${p.category}</p>
      <p>Price: ₹${p.price}</p>
    `;
    productList.appendChild(card);
  });
}

// Event listeners
categoryFilter.addEventListener("change", renderProducts);
priceSort.addEventListener("change", renderProducts);
priceRange.addEventListener("input", renderProducts);

// Initial render
renderProducts();