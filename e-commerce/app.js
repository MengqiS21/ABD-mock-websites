/* ══════════════════════════════════════════════════════════════
   app.js — ELITE Marketplace shared JavaScript
   ══════════════════════════════════════════════════════════════ */

/* ── Helpers ───────────────────────────────────────────────── */

/** Parse URL query string into an object */
function getQueryParams() {
    const params = {};
    new URLSearchParams(window.location.search).forEach((v, k) => { params[k] = v; });
    return params;
  }
  
  /** Render star SVGs for a given rating (out of 5) */
  function renderStars(rating, size = 14) {
    return Array.from({ length: 5 }, (_, i) => {
      const cls = i < Math.floor(rating) ? 'star-filled' : 'star-empty';
      return `<svg class="star ${cls}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`;
    }).join('');
  }
  
  /** Badge CSS class from badge string */
  function badgeClass(badge) {
    if (!badge) return '';
    const map = { 'New': 'badge-new', 'Best Seller': 'badge-bestseller', 'Limited': 'badge-limited' };
    return map[badge] || 'badge-verified';
  }
  
  /** Create a product card HTML string — used on both pages */
  function createProductCard(product, isGrid = false) {
    return `
      <a href="product.html?id=${product.id}" class="product-card${isGrid ? ' grid-card' : ''}" data-id="${product.id}">
        <div class="product-image-container">
          <img src="${product.image}" alt="${product.name}" class="product-image" loading="lazy">
          ${product.badge ? `<div class="product-badge ${badgeClass(product.badge)}">${product.badge}</div>` : ''}
          ${product.discount ? `<div class="product-discount">-${product.discount}%</div>` : ''}
          ${!product.discount ? `
            <button class="wishlist-btn" data-wishlist="${product.id}" onclick="event.preventDefault();toggleWishlist(this)">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </button>` : ''}
        </div>
        <div class="product-brand">${product.brand}</div>
        <h3 class="product-name">${product.name}</h3>
        <div class="product-rating">
          <div class="stars">${renderStars(product.rating)}</div>
          <span class="review-count">(${product.reviews.toLocaleString()})</span>
        </div>
        <div class="product-price">
          <span class="current-price">$${product.price.toFixed(2)}</span>
          ${product.originalPrice ? `<span class="original-price">$${product.originalPrice.toFixed(2)}</span>` : ''}
        </div>
      </a>`;
  }
  
  /** Wishlist toggle (cards + PDP) */
  function toggleWishlist(btn) {
    btn.classList.toggle('active');
  }
  
  /* ── Carousel (homepage hero) ──────────────────────────────── */
  let currentSlide = 0;
  function changeSlide(dir) {
    const slides = document.querySelectorAll('.hero-slide');
    const dots   = document.querySelectorAll('.carousel-dot');
    if (!slides.length) return;
    slides[currentSlide].classList.remove('active');
    dots[currentSlide]?.classList.remove('active');
    currentSlide = (currentSlide + dir + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
    dots[currentSlide]?.classList.add('active');
  }
  
  /* ── Search behaviour (homepage) ───────────────────────────── */
  function initSearch() {
    const btn   = document.querySelector('.search-button');
    const input = document.querySelector('.search-input');
    if (!btn || !input) return;
  
    function doSearch() {
      const q = input.value.trim();
      if (q) window.location.href = `index.html?search=${encodeURIComponent(q)}`;
    }
    btn.addEventListener('click', doSearch);
    input.addEventListener('keydown', e => { if (e.key === 'Enter') doSearch(); });
  }
  
  /* ── Category click (homepage nav + footer) ────────────────── */
  function initCategoryNav() {
    document.querySelectorAll('.category-item').forEach(btn => {
      const cat = btn.textContent.trim();
      btn.addEventListener('click', () => {
        window.location.href = `index.html?cat=${encodeURIComponent(cat)}`;
      });
    });
  }
  
  /* ── Init helpers shared across pages ──────────────────────── */
  function initShared() {
    initSearch();
    initCategoryNav();
  }