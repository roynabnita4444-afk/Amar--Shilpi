// Menu Data
const menuItems = [
    // Combos
    { name: "Veg Combo", desc: "Veg Rice/Noodles + Chilli Paneer (4 Pieces) + Thums Up/Sprite", price: "₹250", category: "Combos", img: "https://images.unsplash.com/photo-1631452180519-c014fe946bc0?q=80&w=600&auto=format&fit=crop" },
    { name: "Chicken Combo", desc: "Chicken Rice/Noodles + Chilli Chicken (4 Pieces) + Thums Up/Sprite", price: "₹250", category: "Combos", img: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=600&auto=format&fit=crop" },

    // Salads
    { name: "Onion Salad", desc: "Fresh sliced onions with lemon and green chillies", price: "₹70", category: "Salads", img: null },
    { name: "Green Salad", desc: "Fresh seasonal greens", price: "₹70", category: "Salads", img: "https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=600&auto=format&fit=crop" },

    // Soups
    { name: "Veg Manchow Soup", desc: "Spicy dark soup with crispy noodles", price: "₹110", category: "Soups", img: "https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=600&auto=format&fit=crop" },
    { name: "Veg Hot and Sour Soup", desc: "Classic tangy and spicy soup", price: "₹110", category: "Soups", img: null },
    { name: "Veg Clear Soup", desc: "Light and healthy vegetable broth", price: "₹110", category: "Soups", img: null },
    { name: "Veg Sweet Corn Soup", desc: "Comforting sweet corn soup", price: "₹110", category: "Soups", img: null },
    { name: "Chicken Manchow Soup", desc: "Spicy dark chicken soup with crispy noodles", price: "₹170", category: "Soups", img: "https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=600&auto=format&fit=crop" },
    { name: "Chicken Hot and Sour Soup", desc: "Classic tangy and spicy chicken soup", price: "₹170", category: "Soups", img: null },
    { name: "Chicken Clear Soup", desc: "Light and healthy chicken broth", price: "₹170", category: "Soups", img: null },
    { name: "Chicken Sweet Corn Soup", desc: "Comforting chicken and sweet corn soup", price: "₹170", category: "Soups", img: "https://images.unsplash.com/photo-1603569283847-aa295f0d016a?q=80&w=600&auto=format&fit=crop" },

    // Veg Starters
    { name: "Classic Paneer Tikka (6 Pieces)", desc: "Paneer cubes marinated in spices and grilled in a tandoor", price: "₹270", category: "Starters - Veg", img: "https://images.unsplash.com/photo-1599487405230-019904d9a42d?q=80&w=600&auto=format&fit=crop" },
    { name: "Malai Paneer Tikka (6 Pieces)", desc: "Creamy and mild paneer chunks grilled in tandoor", price: "₹270", category: "Starters - Veg", img: null },
    { name: "Crispy Chilli Baby Corn", desc: "Batter fried baby corn tossed in spicy sauce", price: "₹250", category: "Starters - Veg", img: "https://images.unsplash.com/photo-1596541655181-1250325bdfa9?q=80&w=600&auto=format&fit=crop" },
    { name: "Salt and Pepper Mushroom", desc: "Crispy mushrooms tossed with coarse pepper and salt", price: "₹250", category: "Starters - Veg", img: "https://images.unsplash.com/photo-1596797038530-2c107229654b?q=80&w=600&auto=format&fit=crop" },
    { name: "Salt and Pepper Corn", desc: "Crispy sweet corn tossed with coarse pepper", price: "₹250", category: "Starters - Veg", img: "https://images.unsplash.com/photo-1541814674064-07dcc264dbdb?q=80&w=600&auto=format&fit=crop" },
    { name: "Chilli Mushroom", desc: "Mushrooms tossed in spicy Indo-Chinese sauce", price: "₹250", category: "Starters - Veg", img: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=600&auto=format&fit=crop" },
    { name: "Chilli Paneer Dry (8 Pieces)", desc: "Classic Indo-chinese dish of paneer tossed in soy sauce and chillies", price: "₹300", category: "Starters - Veg", img: "https://images.unsplash.com/photo-1631452180519-c014fe946bc0?q=80&w=600&auto=format&fit=crop" },
    { name: "Salt and Pepper Paneer", desc: "Crispy paneer chunks tossed with salt & pepper", price: "₹280", category: "Starters - Veg", img: null },
    { name: "Paneer 65", desc: "Spicy and crispy South Indian style paneer starter", price: "₹260", category: "Starters - Veg", img: null },
    { name: "Mayo Paneer", desc: "Crispy paneer tossed in special mayo sauce", price: "₹260", category: "Starters - Veg", img: null },
    { name: "Black Pepper Paneer", desc: "Paneer tossed in an aromatic black pepper sauce", price: "₹260", category: "Starters - Veg", img: null },
    { name: "Assorted Paneer Tikka (6 Pieces)", desc: "A platter of our finest paneer tikkas", price: "₹300", category: "Starters - Veg", img: null },

    // Chicken Starters
    { name: "Classic Chicken Tikka (6 Pieces)", desc: "Boneless chicken marinated in spices and grilled in tandoor", price: "₹300", category: "Starters - Chicken", img: "https://images.unsplash.com/photo-1599487405230-019904d9a42d?q=80&w=600&auto=format&fit=crop" }, /* reused image just for representation */
    { name: "Murg Malai Tikka (6 Pieces)", desc: "Creamy and mild boneless chicken chunks grilled in tandoor", price: "₹300", category: "Starters - Chicken", img: null },
    { name: "Drums of Heaven (8 Pieces)", desc: "Chicken lollipops tossed in a sweet and spicy sauce", price: "₹300", category: "Starters - Chicken", img: "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?q=80&w=600&auto=format&fit=crop" },
    { name: "Peri Peri Chicken (8 Pieces)", desc: "Spicy and tangy peri peri marinated chicken", price: "₹300", category: "Starters - Chicken", img: null },
    { name: "Gondhoraj Chicken Fry", desc: "Chicken flavoured with the aromatic Gondhoraj lemon from Bengal", price: "₹300", category: "Starters - Chicken", img: null },
    { name: "Chilli Chicken Dry (8 Pieces)", desc: "The iconic Indo-Chinese starter", price: "₹300", category: "Starters - Chicken", img: "https://images.unsplash.com/photo-1626082896492-766af4eb65ed?q=80&w=600&auto=format&fit=crop" },
    { name: "Honey Chilli Chicken Dry (8 Pieces)", desc: "Sweet, spicy, and sticky crispy chicken", price: "₹300", category: "Starters - Chicken", img: null },
    { name: "Hot Garlic Chicken Dry (8 Pieces)", desc: "Chicken tossed in an assertive hot garlic sauce", price: "₹300", category: "Starters - Chicken", img: null },
    { name: "Schezwan Chicken Dry (8 Pieces)", desc: "Spicy Schezwan style chicken starter", price: "₹300", category: "Starters - Chicken", img: null },
    { name: "Chicken Manchurian Dry (8 Pieces)", desc: "Chicken tossed in rich coriander & soy manchurian sauce", price: "₹300", category: "Starters - Chicken", img: null },
    { name: "Chicken 65", desc: "Classic South Indian style deep fried spicy chicken", price: "₹320", category: "Starters - Chicken", img: null },
    { name: "Black Pepper Chicken", desc: "Chicken tossed in fresh ground black pepper", price: "₹320", category: "Starters - Chicken", img: null },
    { name: "Tandoori Chicken", desc: "Bone-in chicken marinated in tandoori spices and char-grilled", price: "₹290", category: "Starters - Chicken", img: "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?q=80&w=600&auto=format&fit=crop" },
    { name: "Kasturi Murg Tikka (6 Pieces)", desc: "Flavored with dried fenugreek leaves", price: "₹300", category: "Starters - Chicken", img: null },
    { name: "Nilgiri Murg Tikka (6 Pieces)", desc: "Chicken marinated with mint and coriander greens", price: "₹300", category: "Starters - Chicken", img: null },
    { name: "Assorted Chicken Tikka (6 Pieces)", desc: "A platter of 3 different types of chicken tikka", price: "₹300", category: "Starters - Chicken", img: null },
    { name: "Asian Barbeque Wings (8 Pieces)", desc: "Juicy wings tossed in Asian BBQ sauce", price: "₹300", category: "Starters - Chicken", img: "https://images.unsplash.com/photo-1524114664604-cd8133cd67ad?q=80&w=600&auto=format&fit=crop" },

    // Fish Starters
    { name: "Fish Tikka (5 Pieces)", desc: "Fish chunks marinated and cooked in tandoor", price: "₹340", category: "Starters - Fish", img: null },
    { name: "Gondhoraj Fish Tikka (5 Pieces)", desc: "Fish tikka flavoured with native Bengali Gondhoraj lemon", price: "₹340", category: "Starters - Fish", img: null },
    { name: "Fish Fry (2 Pieces)", desc: "Classic Kolkata style crumb coated fish fillet fry", price: "₹230", category: "Starters - Fish", img: "https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?q=80&w=600&auto=format&fit=crop" },
    { name: "Fish Finger (6 Pieces)", desc: "Crumbed and fried batons of fish served with tartar sauce", price: "₹300", category: "Starters - Fish", img: null },
    { name: "Chilli Fish Dry (8 Pieces)", desc: "Fish cubes tossed in spicy chilli soy sauce", price: "₹340", category: "Starters - Fish", img: null },
    { name: "Honey Chilli Fish Dry (8 Pieces)", desc: "Sweet and spicy fish starter", price: "₹340", category: "Starters - Fish", img: null },
    { name: "Hot Garlic Fish Dry (8 Pieces)", desc: "Fish tossed in pungent hot garlic sauce", price: "₹340", category: "Starters - Fish", img: null },
    { name: "Black Pepper Fish", desc: "Zingy fresh black pepper tossed fish", price: "₹360", category: "Starters - Fish", img: null },

    // Main Course Veg
    { name: "Dal Makhani", desc: "Slow cooked black lentils with butter and cream", price: "₹250", category: "Main Course - Veg", img: "https://images.unsplash.com/photo-1585937421612-70a008356136?q=80&w=600&auto=format&fit=crop" },
    { name: "Mixed Veg", desc: "Assorted seasonal vegetables cooked in Indian spices", price: "₹270", category: "Main Course - Veg", img: null },
    { name: "Mushroom Peas Masala", desc: "Button mushroom and green peas in flavourful gravy", price: "₹270", category: "Main Course - Veg", img: null },
    { name: "Chilli Paneer Gravy (8 Pieces)", desc: "Paneer chunks in spicy dark soy-based gravy", price: "₹300", category: "Main Course - Veg", img: null },
    { name: "Kadai Paneer (10 Pieces)", desc: "Paneer cooked with bell peppers in freshly ground spices", price: "₹300", category: "Main Course - Veg", img: "https://images.unsplash.com/photo-1631452180519-c014fe946bc0?q=80&w=600&auto=format&fit=crop" },
    { name: "Paneer Butter Masala (10 Pieces)", desc: "Rich and creamy tomato based paneer curry", price: "₹300", category: "Main Course - Veg", img: null },
    { name: "Paneer Tikka Butter Masala (10 Pieces)", desc: "Tandoori paneer tikka tossed in rich makhani gravy", price: "₹300", category: "Main Course - Veg", img: null },

    // Main Course Chicken
    { name: "Chilli Chicken Gravy (8 Pieces)", desc: "Diced chicken in spicy, tangy soy gravy", price: "₹300", category: "Main Course - Chicken", img: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=600&auto=format&fit=crop" },
    { name: "Honey Chilli Chicken Gravy (8 Pieces)", desc: "Chicken in sweet and spicy thickened gravy", price: "₹300", category: "Main Course - Chicken", img: null },
    { name: "Hot Garlic Chicken Gravy (8 Pieces)", desc: "Garlicky and spicy chicken gravy", price: "₹300", category: "Main Course - Chicken", img: null },
    { name: "Schezwan Chicken Gravy (8 Pieces)", desc: "Chicken cooked in fiery schezwan sauce", price: "₹300", category: "Main Course - Chicken", img: null },
    { name: "Chicken Manchurian Gravy (8 Pieces)", desc: "Chicken in dark soy and coriander manchurian gravy", price: "₹300", category: "Main Course - Chicken", img: null },
    { name: "Kadai Chicken (6 Pieces)", desc: "Chicken pieces tossed with peppers and thick Indian kadai masala", price: "₹340", category: "Main Course - Chicken", img: null },
    { name: "Chicken Bharta", desc: "Shredded chicken in a smooth, rich, and creamy egg-based gravy", price: "₹340", category: "Main Course - Chicken", img: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=600&auto=format&fit=crop" },
    { name: "Tandoori Chicken Butter Masala (4 Pieces)", desc: "Classic bone-in tandoori chicken simmered in rich gravy", price: "₹380", category: "Main Course - Chicken", img: null },
    { name: "Chicken Tikka Masala (6 Pieces)", desc: "Boneless chicken tikkas in an onion-tomato spicy gravy", price: "₹340", category: "Main Course - Chicken", img: null },
    { name: "Chicken Lababdar (6 Pieces)", desc: "Rich, creamy, and luscious chicken curry", price: "₹340", category: "Main Course - Chicken", img: null },

    // Main Course Fish
    { name: "Chilli Fish Gravy (8 Pieces)", desc: "Fish cubes in dark spicy gravy", price: "₹340", category: "Main Course - Fish", img: "https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?q=80&w=600&auto=format&fit=crop" },
    { name: "Honey Chilli Fish Gravy (8 Pieces)", desc: "Fish in sweet and spicy thickened gravy", price: "₹340", category: "Main Course - Fish", img: null },
    { name: "Hot Garlic Fish Gravy (8 Pieces)", desc: "Garlicky and spicy fish gravy", price: "₹340", category: "Main Course - Fish", img: null },
    { name: "Fish Lababdar (4 Pieces)", desc: "Rich and creamy fish curry", price: "₹340", category: "Main Course - Fish", img: null },
    { name: "Fish Tikka Masala (4 Pieces)", desc: "Fish tikkas slow cooked in onion-tomato masala", price: "₹340", category: "Main Course - Fish", img: null },

    // Breads
    { name: "Plain Tandoori Roti", desc: "Whole wheat bread baked in tandoor", price: "₹30", category: "Breads", img: null },
    { name: "Butter Tandoori Roti", desc: "Tandoori roti glazed with butter", price: "₹60", category: "Breads", img: null },
    { name: "Plain Naan", desc: "Soft refined flour bread", price: "₹70", category: "Breads", img: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=600&auto=format&fit=crop" },
    { name: "Butter Naan", desc: "Naan rich in butter", price: "₹90", category: "Breads", img: null },
    { name: "Tandoor Laccha Paratha", desc: "Layered whole wheat bread", price: "₹60", category: "Breads", img: null },

    // Rice
    { name: "Veg Pulao", desc: "Aromatic basmati rice cooked with mixed vegetables", price: "₹150", category: "Rice", img: null },
    { name: "Peas Pulao", desc: "Basmati rice with green peas", price: "₹150", category: "Rice", img: null },
    { name: "Steamed Rice", desc: "Plain steamed basmati rice", price: "₹110", category: "Rice", img: "https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?q=80&w=600&auto=format&fit=crop" },
    { name: "Jeera Rice", desc: "Cumin tempered rice", price: "₹150", category: "Rice", img: null },
    { name: "Egg Pulao", desc: "Aromatic rice with eggs", price: "₹180", category: "Rice", img: null },
    { name: "Chicken Pulao", desc: "Aromatic rice cooked with chicken chunks", price: "₹210", category: "Rice", img: null },

    // Fried Rice
    { name: "Veg Fried Rice", desc: "Classic Indo-chinese wok tossed rice with vegetables", price: "₹150", category: "Fried Rice", img: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?q=80&w=600&auto=format&fit=crop" },
    { name: "Veg Chilli Garlic Fried Rice", desc: "Spicy and garlicky veg fried rice", price: "₹150", category: "Fried Rice", img: null },
    { name: "Egg Fried Rice", desc: "Wok tossed rice with eggs and veggies", price: "₹180", category: "Fried Rice", img: null },
    { name: "Egg Chilli Garlic Fried Rice", desc: "Spicy egg fried rice", price: "₹180", category: "Fried Rice", img: null },
    { name: "Chicken Fried Rice", desc: "Classic chicken fried rice", price: "₹210", category: "Fried Rice", img: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?q=80&w=600&auto=format&fit=crop" },
    { name: "Chicken Chilli Garlic Fried Rice", desc: "Spicy and pungent chicken fried rice", price: "₹210", category: "Fried Rice", img: null },

    // Noodles
    { name: "Veg Hakka Noodles", desc: "Wok tossed noodles with crunch vegetables", price: "₹150", category: "Noodles", img: "https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=600&auto=format&fit=crop" },
    { name: "Veg Chilli Garlic Noodles", desc: "Spicy and garlicky wok tossed noodles", price: "₹150", category: "Noodles", img: null },
    { name: "Egg Hakka Noodles", desc: "Noodles tossed with shredded egg", price: "₹180", category: "Noodles", img: null },
    { name: "Egg Chilli Garlic Noodles", desc: "Spicy egg noodles", price: "₹180", category: "Noodles", img: null },
    { name: "Chicken Hakka Noodles", desc: "Noodles wok tossed with chicken strips", price: "₹210", category: "Noodles", img: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?q=80&w=600&auto=format&fit=crop" },
    { name: "Chicken Chilli Garlic Noodles", desc: "Spicy and garlicky chicken noodles", price: "₹210", category: "Noodles", img: null },

    // Snacks
    { name: "Veg Pakoda (8 Pieces)", desc: "Crispy fried assorted vegetable fritters", price: "₹220", category: "Snacks", img: null },
    { name: "Paneer Pakoda (8 Pieces)", desc: "Batter fried crisp paneer fritters", price: "₹270", category: "Snacks", img: null },
    { name: "Chicken Pakoda (8 Pieces)", desc: "Crispy coated bite sized chicken fritters", price: "₹270", category: "Snacks", img: "https://images.unsplash.com/photo-1562967914-01efa7e87832?q=80&w=600&auto=format&fit=crop" },

    // Momos
    { name: "Veg Steamed Momos (6 Pieces)", desc: "Delicate dumplings filled with mixed vegetables", price: "₹110", category: "Momos", img: "https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?q=80&w=600&auto=format&fit=crop" },
    { name: "Veg Fried Momos (6 Pieces)", desc: "Crispy fried vegetable dumplings", price: "₹130", category: "Momos", img: null },
    { name: "Veg Pan Fried Momos (6 Pieces)", desc: "Momos pan fried in a hot sauce", price: "₹140", category: "Momos", img: null },
    { name: "Chicken Steamed Momos (6 Pieces)", desc: "Steamed dumplings bursting with juicy chicken", price: "₹150", category: "Momos", img: "https://images.unsplash.com/photo-1643440700547-41befc1e95e8?q=80&w=600&auto=format&fit=crop" },
    { name: "Chicken Fried Momos (6 Pieces)", desc: "Crispy golden fried chicken dumplings", price: "₹170", category: "Momos", img: null },
    { name: "Chicken Pan Fried Momos (6 Pieces)", desc: "Juicy chicken momos tossed in spicy sauce", price: "₹180", category: "Momos", img: null },
    { name: "Chicken Tandoori Momos (6 Pieces)", desc: "Momos marinated with tandoori spices and charred", price: "₹210", category: "Momos", img: null },
    { name: "Chicken Cheese Momos (6 Pieces)", desc: "Chicken momos enriched with gooey cheese", price: "₹210", category: "Momos", img: null }
];

document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Toggle
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navLinks = document.querySelector('.nav-links');

    mobileToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const icon = mobileToggle.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-xmark');
        } else {
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
        }
    });

    // 2. Extract Categories and Setup Filters
    const menuGrid = document.getElementById('menu-grid');
    const menuFilters = document.getElementById('menu-filters');

    // Define main filter tabs
    const filterTabs = [
        "All", "Combos", "Starters", "Main Course", "Rice & Noodles", "Snacks & Momos", "Soups & Salads"
    ];

    // Map strict categories to broad filter tabs
    const categoryMapping = {
        "Combos": "Combos",
        "Salads": "Soups & Salads",
        "Soups": "Soups & Salads",
        "Starters - Veg": "Starters",
        "Starters - Chicken": "Starters",
        "Starters - Fish": "Starters",
        "Main Course - Veg": "Main Course",
        "Main Course - Chicken": "Main Course",
        "Main Course - Fish": "Main Course",
        "Breads": "Main Course", // Breads group well with main course
        "Rice": "Rice & Noodles",
        "Fried Rice": "Rice & Noodles",
        "Noodles": "Rice & Noodles",
        "Snacks": "Snacks & Momos",
        "Momos": "Snacks & Momos"
    };

    let activeFilter = "All";

    // Create Filter Buttons
    filterTabs.forEach(filter => {
        const btn = document.createElement('button');
        btn.className = `filter-btn ${filter === 'All' ? 'active' : ''}`;
        btn.textContent = filter;
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            activeFilter = filter;
            renderMenu();
        });
        menuFilters.appendChild(btn);
    });

    // Render Menu Function
    function renderMenu() {
        menuGrid.innerHTML = ''; // Clear current grid

        let filteredItems = menuItems;

        if (activeFilter !== "All") {
            filteredItems = menuItems.filter(item => {
                return categoryMapping[item.category] === activeFilter;
            });
        }

        filteredItems.forEach(item => {
            const card = document.createElement('div');
            card.className = 'menu-list-item';

            card.innerHTML = `
                <div class="menu-header">
                    <div class="menu-title">${item.name}</div>
                </div>
                <div class="menu-desc">${item.desc}</div>
            `;
            menuGrid.appendChild(card);
        });
    }

    // Initial render
    renderMenu();

    // 3. Current year for footer
    document.getElementById('year').textContent = new Date().getFullYear();

    // 4. Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
            navbar.style.padding = '0.5rem 0';
        } else {
            navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.05)';
            navbar.style.padding = '1rem 0';
        }
    });
});
