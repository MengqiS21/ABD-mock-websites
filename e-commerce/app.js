/* =========================
   Shared helpers
   ========================= */

   function qs(sel, root = document) {
    return root.querySelector(sel);
  }
  function qsa(sel, root = document) {
    return Array.from(root.querySelectorAll(sel));
  }
  function getParam(name) {
    const url = new URL(window.location.href);
    return url.searchParams.get(name);
  }
  function setParam(name, value) {
    const url = new URL(window.location.href);
    if (value === null || value === undefined || value === "") {
      url.searchParams.delete(name);
    } else {
      url.searchParams.set(name, value);
    }
    window.location.href = url.toString();
  }
  
  function formatMoney(n) {
    // Keep simple and consistent with your UI
    return `$${Number(n).toFixed(2)}`;
  }
  
  function badgeClass(badge) {
    return badge === "New"
      ? "badge-new"
      : badge === "Best Seller"
      ? "badge-bestseller"
      : badge === "Limited"
      ? "badge-limited"
      : "badge-verified";
  }
  
  function renderStars(rating) {
    const filled = Math.floor(Number(rating) || 0);
    return Array(5)
      .fill(0)
      .map(
        (_, i) => `
        <svg class="star ${i < filled ? "star-filled" : "star-empty"}" fill="none" stroke="currentColor" stroke-width="2">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </svg>
      `
      )
      .join("");
  }
  
  /* =========================
     Wishlist (localStorage)
     ========================= */
  
  const WISHLIST_KEY = "elite_wishlist_ids";
  
  function getWishlistSet() {
    try {
      const raw = localStorage.getItem(WISHLIST_KEY);
      const arr = raw ? JSON.parse(raw) : [];
      return new Set(arr);
    } catch {
      return new Set();
    }
  }
  
  function saveWishlistSet(set) {
    localStorage.setItem(WISHLIST_KEY, JSON.stringify(Array.from(set)));
  }
  
  function isWishlisted(id) {
    const set = getWishlistSet();
    return set.has(Number(id));
  }
  
  function toggleWishlistById(id) {
    const set = getWishlistSet();
    const num = Number(id);
    if (set.has(num)) set.delete(num);
    else set.add(num);
    saveWishlistSet(set);
    return set.has(num);
  }
  
  /* =========================
     Product Card (same style)
     - now clickable to product.html?id=...
     - wishlist kept working
     ========================= */
  
  function createProductCard(product) {
    const bClass = product.badge ? badgeClass(product.badge) : "badge-verified";
    const stars = renderStars(product.rating);
  
    const showWishlistBtn = !product.discount; // keep your original rule
    const wishActive = isWishlisted(product.id);
  
    return `
      <div class="product-card" data-product-id="${product.id}" role="link" aria-label="Open ${product.name}">
        <div class="product-image-container">
          <img src="${product.image}" alt="${product.name}" class="product-image">
          ${product.badge ? `<div class="product-badge ${bClass}">${product.badge}</div>` : ""}
          ${product.discount ? `<div class="product-discount">-${product.discount}%</div>` : ""}
          ${
            showWishlistBtn
              ? `
            <button class="wishlist-btn ${wishActive ? "active" : ""}" data-wishlist-id="${product.id}" aria-label="Toggle wishlist">
              <svg fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </button>
          `
              : ""
          }
        </div>
        <div class="product-brand">${product.brand}</div>
        <h3 class="product-name">${product.name}</h3>
        <div class="product-rating">
          <div class="stars">${stars}</div>
          <span class="review-count">(${Number(product.reviews).toLocaleString()})</span>
        </div>
        <div class="product-price">
          <span class="current-price">$${product.price}</span>
          ${product.originalPrice ? `<span class="original-price">$${product.originalPrice}</span>` : ""}
        </div>
      </div>
    `;
  }
  
  /* =========================
     Home page behaviors
     - category: index.html?cat=Electronics
     - search: index.html?q=...
     ========================= */
  
  function filterProducts(products, { cat, q }) {
    let list = [...products];
  
    // category filter (lightweight mock)
    if (cat && cat !== "All") {
      const c = cat.toLowerCase();
      list = list.filter((p) => {
        // This dataset doesn't have category fields.
        // So we simulate by matching brand/name text.
        return (
          p.name.toLowerCase().includes(c) ||
          p.brand.toLowerCase().includes(c) ||
          // make "Electronics" show all tech-like items by default
          (c === "electronics" && true)
        );
      });
  
      // If category match becomes too narrow, keep UX friendly
      if (list.length === 0 && c === "electronics") list = [...products];
    }
  
    // keyword search filter
    if (q) {
      const s = q.toLowerCase().trim();
      if (s) {
        list = list.filter(
          (p) =>
            p.name.toLowerCase().includes(s) ||
            p.brand.toLowerCase().includes(s)
        );
      }
    }
  
    return list;
  }
  
  function initHomePage() {
    const products = window.PRODUCTS || [];
  
    const trendingEl = qs("#trending-scroll");
    const arrivalsEl = qs("#new-arrivals-grid");
  
    const cat = getParam("cat") || "";
    const q = getParam("q") || "";
  
    const filtered = filterProducts(products, { cat, q });
  
    if (trendingEl) trendingEl.innerHTML = filtered.map(createProductCard).join("");
    if (arrivalsEl) arrivalsEl.innerHTML = filtered.map(createProductCard).join("");
  
    // Make product cards clickable -> product.html?id=...
    document.addEventListener("click", (e) => {
      const wishlistBtn = e.target.closest("[data-wishlist-id]");
      if (wishlistBtn) {
        e.preventDefault();
        e.stopPropagation();
        const id = wishlistBtn.getAttribute("data-wishlist-id");
        const nowActive = toggleWishlistById(id);
        wishlistBtn.classList.toggle("active", nowActive);
        return;
      }
  
      const card = e.target.closest(".product-card[data-product-id]");
      if (card) {
        const id = card.getAttribute("data-product-id");
        window.location.href = `product.html?id=${encodeURIComponent(id)}`;
        return;
      }
    });
  
    // Wire category buttons
    qsa(".category-item").forEach((btn) => {
      btn.addEventListener("click", () => {
        const text = btn.textContent.trim();
        window.location.href = `index.html?cat=${encodeURIComponent(text)}`;
      });
    });
  
    // Hero CTA -> Electronics category
    const heroCta = qs(".hero-cta");
    if (heroCta) {
      heroCta.setAttribute("href", "index.html?cat=Electronics");
    }
  
    // Search behavior
    const searchBtn = qs(".search-button");
    const searchInput = qs(".search-input");
    const searchSelect = qs(".search-category");
  
    function runSearch() {
      const keyword = (searchInput?.value || "").trim();
      const selected = searchSelect?.value || "All Categories";
  
      // keep it simple: apply both as query params
      const url = new URL(window.location.href);
      url.searchParams.set("q", keyword);
      if (selected && selected !== "All Categories") {
        // map dropdown values to cat
        url.searchParams.set("cat", selected);
      } else {
        url.searchParams.delete("cat");
      }
      window.location.href = url.toString();
    }
  
    if (searchBtn) searchBtn.addEventListener("click", runSearch);
    if (searchInput) {
      searchInput.addEventListener("keydown", (ev) => {
        if (ev.key === "Enter") runSearch();
      });
    }
  
    // View All links (just jump to sections)
    qsa('a.view-all').forEach((a) => {
      a.addEventListener("click", (ev) => {
        ev.preventDefault();
        // default: scroll to "New Arrivals"
        const target = qs("#new-arrivals-grid");
        if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });
  
    // Sponsored card click -> product 1 detail
    const sponsoredCard = qs(".sponsored-card");
    if (sponsoredCard) {
      sponsoredCard.style.cursor = "pointer";
      sponsoredCard.addEventListener("click", () => {
        window.location.href = "product.html?id=1";
      });
    }
  }
  
  /* =========================
     Product detail page behaviors
     ========================= */
  
  function initProductPage() {
    const products = window.PRODUCTS || [];
    const id = Number(getParam("id"));
    const product = products.find((p) => Number(p.id) === id);
  
    const root = qs("#product-root");
    if (!root) return;
  
    if (!product) {
      root.innerHTML = `
        <div class="container product-page">
          <div class="product-info-card">
            <div class="pdp-brand">ELITE Marketplace</div>
            <div class="pdp-title">Product not found</div>
            <p class="mini-note" style="margin-top: 0.75rem;">
              The product id is missing or invalid. Please return to the homepage.
            </p>
            <div class="pdp-actions">
              <button class="add-to-cart-btn" onclick="window.location.href='index.html'">Back to Home</button>
            </div>
          </div>
        </div>
      `;
      return;
    }
  
    // Breadcrumbs (category is a lightweight mock)
    const categoryGuess = "Electronics";
  
    const wishActive = isWishlisted(product.id);
  
    root.innerHTML = `
      <div class="page-top">
        <div class="container">
          <div class="breadcrumbs">
            <a href="index.html">Home</a>
            <span class="sep">/</span>
            <a href="index.html?cat=${encodeURIComponent(categoryGuess)}">${categoryGuess}</a>
            <span class="sep">/</span>
            <span>${product.name}</span>
          </div>
        </div>
      </div>
  
      <div class="container product-page">
        <div class="product-detail-grid">
          <div class="product-media">
            <img src="${product.image}" alt="${product.name}">
          </div>
  
          <div class="product-info-card">
            <div class="pdp-brand">${product.brand}</div>
            <div class="pdp-title">${product.name}</div>
  
            <div class="pdp-rating-row">
              <div class="stars">${renderStars(product.rating)}</div>
              <span class="review-count">(${Number(product.reviews).toLocaleString()} reviews)</span>
            </div>
  
            <div class="pdp-price-row">
              <div class="pdp-price">$${product.price}</div>
              ${product.originalPrice ? `<div class="pdp-original">$${product.originalPrice}</div>` : ""}
            </div>
  
            <div class="pdp-meta">
              <div class="shipping-info">
                <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
                Free shipping over $50
              </div>
              <div class="delivery-info">
                <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                Delivered in 2-3 days
              </div>
              <div class="mini-note">
                Availability: <strong style="color: var(--emerald-600);">In stock</strong>
              </div>
            </div>
  
            <ul class="pdp-bullets">
              <li>Premium build quality and minimalist design language</li>
              <li>Optimized comfort for extended daily use</li>
              <li>Designed to feel effortless, reliable, and refined</li>
            </ul>
  
            <div class="pdp-actions">
              <button class="add-to-cart-btn" id="pdp-add">Add to Cart</button>
  
              <div class="secondary-actions">
                <button class="secondary-btn" id="pdp-buy">Buy Now</button>
                <button class="secondary-btn pdp-wishlist ${wishActive ? "active" : ""}" id="pdp-wish" aria-label="Toggle wishlist">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                  </svg>
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
  
        <div class="section-divider"></div>
  
        <div class="pdp-sections">
          <div class="pdp-section" id="desc">
            <h3>Description</h3>
            <p class="mini-note">
              This is a premium mock product detail page for your prototype. You can replace this text with real copy later.
              The goal here is to match your existing ELITE visual system and make the prototype feel clickable and complete.
            </p>
          </div>
  
          <div class="pdp-section" id="specs">
            <h3>Specs</h3>
            <p class="mini-note">
              • Brand: ${product.brand}<br>
              • Rating: ${product.rating} / 5<br>
              • Reviews: ${Number(product.reviews).toLocaleString()}<br>
              • Price: ${formatMoney(product.price)}<br>
              ${product.originalPrice ? `• Original: ${formatMoney(product.originalPrice)}<br>` : ""}
              ${product.discount ? `• Discount: ${product.discount}%<br>` : ""}
            </p>
          </div>
  
          <div class="pdp-section" id="reviews">
            <h3>Reviews</h3>
            <p class="mini-note">
              This section is a placeholder for your mockup. You can later add review cards in the same style as product cards.
            </p>
          </div>
        </div>
  
        <div style="margin-top: 2.5rem;">
          <div class="section-header">
            <h2 class="section-title">You may also like</h2>
            <a href="index.html" class="view-all">Back to Home →</a>
          </div>
          <div class="product-scroll" id="you-may-like"></div>
        </div>
      </div>
    `;
  
    // Render recommendations (simple: all except current)
    const rec = products.filter((p) => p.id !== product.id);
    const recEl = qs("#you-may-like");
    if (recEl) recEl.innerHTML = rec.map(createProductCard).join("");
  
    // Click behaviors
    document.addEventListener("click", (e) => {
      const wishlistBtn = e.target.closest("[data-wishlist-id]");
      if (wishlistBtn) {
        e.preventDefault();
        e.stopPropagation();
        const id = wishlistBtn.getAttribute("data-wishlist-id");
        const nowActive = toggleWishlistById(id);
        wishlistBtn.classList.toggle("active", nowActive);
        return;
      }
  
      const card = e.target.closest(".product-card[data-product-id]");
      if (card) {
        const pid = card.getAttribute("data-product-id");
        window.location.href = `product.html?id=${encodeURIComponent(pid)}`;
        return;
      }
    });
  
    const addBtn = qs("#pdp-add");
    const buyBtn = qs("#pdp-buy");
    const wishBtn = qs("#pdp-wish");
  
    if (addBtn) addBtn.addEventListener("click", () => alert("Added to cart (mock)."));
    if (buyBtn) buyBtn.addEventListener("click", () => alert("Checkout flow (mock)."));
    if (wishBtn)
      wishBtn.addEventListener("click", () => {
        const nowActive = toggleWishlistById(product.id);
        wishBtn.classList.toggle("active", nowActive);
      });
  
    // Keep header category buttons usable here too
    qsa(".category-item").forEach((btn) => {
      btn.addEventListener("click", () => {
        const text = btn.textContent.trim();
        window.location.href = `index.html?cat=${encodeURIComponent(text)}`;
      });
    });
  
    // Wire search on product page -> go home with query
    const searchBtn = qs(".search-button");
    const searchInput = qs(".search-input");
    const searchSelect = qs(".search-category");
  
    function runSearch() {
      const keyword = (searchInput?.value || "").trim();
      const selected = searchSelect?.value || "All Categories";
      const url = new URL(window.location.origin + window.location.pathname.replace("product.html", "index.html"));
      url.searchParams.set("q", keyword);
      if (selected && selected !== "All Categories") url.searchParams.set("cat", selected);
      window.location.href = url.toString();
    }
    if (searchBtn) searchBtn.addEventListener("click", runSearch);
    if (searchInput) {
      searchInput.addEventListener("keydown", (ev) => {
        if (ev.key === "Enter") runSearch();
      });
    }
  }
  
  /* =========================
     Carousel placeholder (kept)
     ========================= */
  let currentSlide = 0;
  function changeSlide(direction) {
    console.log("Slide changed:", direction);
    currentSlide += direction;
  }
  
  /* =========================
     Boot
     ========================= */
  document.addEventListener("DOMContentLoaded", () => {
    // Decide which page we are on
    if (qs("#trending-scroll") && qs("#new-arrivals-grid")) {
      initHomePage();
    }
    if (qs("#product-root")) {
      initProductPage();
    }
  });  