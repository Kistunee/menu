
const MENU_DATA = [
  {
    id: "classic-coffee",
    name: "Classic Coffee",
    items: [
      { name: "Espresso", price: 100, desc: "Pure, concentrated shot of rich dark coffee", tags: ["veg"] },
      { name: "Doppio", price: 120, desc: "Double the intensity, double the pleasure", tags: ["veg"] },
      { name: "Americano", price: 130, desc: "Espresso with hot water, clean and bold", tags: ["veg"] },
      { name: "Cappuccino", price: 180, desc: "Espresso with steamed milk and thick foam", tags: ["veg"] },
      { name: "Latte", price: 180, desc: "Silky steamed milk with a shot of espresso", tags: ["veg"] },
      { name: "Flat White", price: 190, desc: "Velvety microfoam on a double ristretto", tags: ["veg"] },
      { name: "Macchiato", price: 150, desc: "Espresso 'stained' with a dash of foam", tags: ["veg"] },
      { name: "Mocha Madness", price: 240, desc: "Chocolate and espresso — the classic pairing", tags: ["veg"] },
      { name: "Affogato", price: 180, desc: "Scoop of vanilla ice cream with shot of espresso", tags: ["veg"] },
      { name: "Long Black", price: 200, desc: "Hot water topped with a double espresso", tags: ["veg"] },
    ]
  },


 {
    id: "frappe",
    name: "Frappe",
    items: [
      { name: "Oreo Frappe", price: 270, desc: "Blended Oreo cookies with creamy coffee base", tags: ["veg", "kids"] },
      { name: "KitKat Frappe", price: 270, desc: "Crunchy KitKat blended into a thick frappe", tags: ["veg", "kids"] },
      { name: "Chocolate Frappe", price: 270, desc: "Rich dark chocolate blended with ice and cream", tags: ["veg"] },
      { name: "Caramel Frappe", price: 270, desc: "Buttery caramel swirled into a frosty blend", tags: ["veg"] },
    ]
  },

  {
    id: "nonveg",
    name: "Non-Veg",
    items: [
      { name: "Panner Curry", price: 200, desc: "", tags: ["veg", "kids"] },
      { name: "Mix Veg Curry", price: 150, desc: "", tags: ["veg", "kids"] },
      { name: "French Fries", price: 120, desc: "", tags: ["veg"] },
      { name: "Alu Sadeko", price: 170, desc: "", tags: ["veg"] },
    ]
  },

  {
    id: "momo",
    name: "Momo",
    items: [
      { name: "Buff Momo", price: 270, desc: "", tags: ["veg", "kids"] },
      { name: "Chicken Momo", price: 270, desc: "", tags: ["veg", "kids"] },
      { name: "Veg Momo", price: 270, desc: "" ,tags: ["veg"] },
      { name: "Panner Momo", price: 270, desc: "", tags: ["veg"] },
    ]
  },
  {
    id: "refreshers",
    name: "Refreshers",
    items: [
      { name: "Lemon Mint ", price: 210, desc: "Fresh lemon with mint and soda", tags: ["veg"] },
      { name: "Virgin Kiwi Mojito", price: 280, desc: "Lime, mint, soda with kiwi burst", tags: ["veg", "kids"] },
      { name: "Virgin Strawberry Mojito", price: 280, desc: "Lime, mint with sweet burst of strawberry flavor", tags: ["veg", "kids"] },
      { name: "Virgin Mojito", price: 250, desc: "Lime, mint, sugar, soda — the classic cooler", tags: ["veg"] },
      { name: "Strawberry Lime", price: 210, desc: "Blended fresh strawberries with mint and lime", tags: ["veg", "kids"] },
      { name: "Iced Lemon Tea", price: 190, desc: "Brewed black tea chilled with fresh lemon", tags: ["veg", "kids"] },
      { name: "Peach Ice Tea", price: 190, desc: "Peach flavor with ice", tags: ["veg", "kids"] },
      { name: "Blueberry Lime", price: 210, desc: "Blueberry flavor with mint and lime", tags: ["veg"] }
  ]
  },
  {
    id: "burgers",
    name: "Burgers",
    items: [
      { name: "Chicken Burger", price: 250, desc: "Juicy patty, lettuce, tomato, house sauce", tags: ["spicy"] },
      { name: "Saze Special Burger", price: 320, desc: "Double  chicken patty with caramelised onion and cheese", tags: ["spicy"] },
      { name: "Grilled Chicken Burger", price: 320, desc: "Grilled patty, pickles, onion", tags: ["kids"] },
      { name: "Veg Burger", price: 220, desc: "Panner patty, lettuce, grilled mushroom", tags: ["veg"] },
      { name: "Kids Mini Burger", price: 280, desc: "Small beef slider with ketchup and cheese", tags: ["kids"] },
    ]
  },
  {
    id: "rice",
    name: "Rice",
    items: [
      { name: "Plain Rice", price: 100, desc: "Steam plain rice", tags: [] },
      { name: "Jeera Rice", price: 120, desc: "Stream rice with tarka of jeera", tags: ["veg"] },
      { name: "Veg Fried Rice", price: 160, desc: " Rice Stir-fried with carrot, onion and other vegs", tags: ["veg","kids"] },
      { name: "Egg Fried Rice", price: 170, desc: "Rice stir-fired with egg and vegs", tags: ["kids"] },
      { name: "Chicked Fired Rice", price: 200, desc: " Rice stir-fried with chicken and vegs", tags: [] },
      { name: "Mixed Non Veg Fried Rice", price: 250, desc: "Stir-Fried with eggs, chicken and vegs", tags: [] },
    ]
  },
  {
    id: "starters",
    name: "Starters",
    items: [
      { name: "Crispy Calamari", price: 320, desc: "Lightly battered squid, lemon aioli", tags: [] },
      { name: "Chicken Wings", price: 380, desc: "8 wings — buffalo or honey garlic glaze", tags: ["spicy"] },
      { name: "Paneer Tikka", price: 280, desc: "Charred spiced cottage cheese, mint chutney", tags: ["veg", "spicy"] },
      { name: "Loaded Nachos", price: 300, desc: "Corn chips, cheese sauce, jalapeños, salsa", tags: ["veg", "spicy"] },
      { name: "Spring Rolls", price: 240, desc: "Crispy vegetable rolls, sweet chili dip", tags: ["veg", "kids"] },
      { name: "Garlic Bread", price: 180, desc: "Toasted sourdough, herb butter, parmesan", tags: ["veg", "kids"] },
      { name: "Prawn Tempura", price: 420, desc: "Light battered tiger prawns, ginger ponzu", tags: [] },
    ]
  },
  {
    id: "desserts",
    name: "Desserts",
    items: [
      { name: "Chocolate Lava Cake", price: 320, desc: "Warm dark chocolate, vanilla ice cream", tags: ["veg", "kids"] },
      { name: "Cheesecake", price: 290, desc: "New York style with berry coulis", tags: ["veg"] },
      { name: "Gulab Jamun", price: 200, desc: "Soft milk dumplings in rose-cardamom syrup", tags: ["veg", "kids"] },
      { name: "Tiramisu", price: 340, desc: "Espresso-soaked ladyfingers, mascarpone cream", tags: ["veg"] },
      { name: "Mango Sorbet", price: 220, desc: "Dairy-free pure mango sorbet", tags: ["veg", "kids"] },
    ]
  },
 {
    id: "smoke",
    name: "SMOKE",
    items: [
      { name: "Shikhar Ice", price: 25, desc: "" },
      { name: "Surya(red)", price:  25, desc: "" },
      { name: "Surya(Light)", price: 25, desc: ""},
      { name: "Mint Hukka Normal", price: 350 },
      { name: "Mint Hukka Coconut", price: 600 },
      { name: "1001 Hukka Coconut", price: 600, desc: "" },
      { name: "Pan hukka Coconut", price: 600, desc: "" },
      { name: "Double Apple Hukka Coconut", price: 600, desc: "" },
      { name: "Double Apple Hukka", price: 350, desc: "" },
      { name: "Extra Coal", price: 30, desc: "" },
      { name: "Coconut Coal", price: 65, desc: "" },

    ]
  }
]

buildMenu();
function buildMenu() {
  const menu = document.getElementById("menu");
  MENU_DATA.forEach(cat => {
    cat.items.forEach(item => {
      const div = document.createElement("div");
      div.className = "item " + cat.id;
      div.setAttribute("data-name", item.name.toLowerCase());
      div.innerHTML = `
        <div>${item.name}</div>
        <div>
          <span class="price">${item.price}</span>
          <button onclick="add('${item.name}', ${item.price})">Add</button>
        </div>`;
      menu.appendChild(div);
    });
  });
}

function filter(cat) {
  let items = document.querySelectorAll(".item");
  let buttons = document.querySelectorAll(".cat-btn");

  buttons.forEach(b => b.classList.remove("active"));
  event.target.classList.add("active");

  items.forEach(i => {
    i.style.display = (cat === "all" || i.classList.contains(cat)) ? "flex" : "none";
  });
}

function searchFood() {
  let input = document.getElementById("search").value.toLowerCase();
  let items = document.querySelectorAll(".item");

  items.forEach(i => {
    let name = i.getAttribute("data-name");
    i.style.display = name.includes(input) ? "flex" : "none";
  });
}

