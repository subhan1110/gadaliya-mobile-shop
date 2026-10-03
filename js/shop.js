/**
 * Gadaliya Mobile Lamination Shop
 * Shop logic: products, cart, checkout, orders
 */

'use strict';

const LAMINATION_PRICE = 150;
const SHIPPING_PRICE = 50;
const TOTAL_PRICE = LAMINATION_PRICE + SHIPPING_PRICE;

const PRODUCTS = [
  // iPhone
  { id: 'iph-15-pro-max', brand: 'iPhone', model: 'iPhone 15 Pro Max', type: 'Hydrogel Full Cover', popular: true },
  { id: 'iph-15-pro',     brand: 'iPhone', model: 'iPhone 15 Pro',     type: 'Hydrogel Full Cover', popular: true },
  { id: 'iph-15-plus',    brand: 'iPhone', model: 'iPhone 15 Plus',    type: 'Hydrogel Full Cover' },
  { id: 'iph-15',         brand: 'iPhone', model: 'iPhone 15',         type: 'Hydrogel Full Cover', popular: true },
  { id: 'iph-14-pro-max', brand: 'iPhone', model: 'iPhone 14 Pro Max', type: 'Hydrogel Full Cover' },
  { id: 'iph-14-pro',     brand: 'iPhone', model: 'iPhone 14 Pro',     type: 'Hydrogel Full Cover' },
  { id: 'iph-14-plus',    brand: 'iPhone', model: 'iPhone 14 Plus',    type: 'Hydrogel Full Cover' },
  { id: 'iph-14',         brand: 'iPhone', model: 'iPhone 14',         type: 'Hydrogel Full Cover' },
  { id: 'iph-13-pro-max', brand: 'iPhone', model: 'iPhone 13 Pro Max', type: 'Hydrogel Full Cover' },
  { id: 'iph-13-pro',     brand: 'iPhone', model: 'iPhone 13 Pro',     type: 'Hydrogel Full Cover' },
  { id: 'iph-13',         brand: 'iPhone', model: 'iPhone 13',         type: 'Hydrogel Full Cover' },
  { id: 'iph-12-pro-max', brand: 'iPhone', model: 'iPhone 12 Pro Max', type: 'Hydrogel Full Cover' },
  { id: 'iph-12',         brand: 'iPhone', model: 'iPhone 12',         type: 'Hydrogel Full Cover' },
  { id: 'iph-se3',        brand: 'iPhone', model: 'iPhone SE 3rd Gen', type: 'Hydrogel Full Cover' },
  // Samsung
  { id: 'sam-s24-ultra',  brand: 'Samsung', model: 'Samsung Galaxy S24 Ultra', type: 'Hydrogel Full Cover', popular: true },
  { id: 'sam-s24-plus',   brand: 'Samsung', model: 'Samsung Galaxy S24+',      type: 'Hydrogel Full Cover' },
  { id: 'sam-s24',        brand: 'Samsung', model: 'Samsung Galaxy S24',        type: 'Hydrogel Full Cover', popular: true },
  { id: 'sam-s23-ultra',  brand: 'Samsung', model: 'Samsung Galaxy S23 Ultra',  type: 'Hydrogel Full Cover' },
  { id: 'sam-s23',        brand: 'Samsung', model: 'Samsung Galaxy S23',        type: 'Hydrogel Full Cover' },
  { id: 'sam-a55',        brand: 'Samsung', model: 'Samsung Galaxy A55',        type: 'Hydrogel Full Cover' },
  { id: 'sam-a54',        brand: 'Samsung', model: 'Samsung Galaxy A54',        type: 'Hydrogel Full Cover', popular: true },
  { id: 'sam-a35',        brand: 'Samsung', model: 'Samsung Galaxy A35',        type: 'Hydrogel Full Cover' },
  { id: 'sam-a34',        brand: 'Samsung', model: 'Samsung Galaxy A34',        type: 'Hydrogel Full Cover' },
  { id: 'sam-a25',        brand: 'Samsung', model: 'Samsung Galaxy A25',        type: 'Hydrogel Full Cover' },
  { id: 'sam-a15',        brand: 'Samsung', model: 'Samsung Galaxy A15',        type: 'Hydrogel Full Cover' },
  { id: 'sam-f55',        brand: 'Samsung', model: 'Samsung Galaxy F55',        type: 'Hydrogel Full Cover' },
  // OnePlus
  { id: 'op-12',          brand: 'OnePlus', model: 'OnePlus 12',          type: 'Hydrogel Full Cover', popular: true },
  { id: 'op-12r',         brand: 'OnePlus', model: 'OnePlus 12R',         type: 'Hydrogel Full Cover' },
  { id: 'op-11',          brand: 'OnePlus', model: 'OnePlus 11',          type: 'Hydrogel Full Cover' },
  { id: 'op-nord-ce4',    brand: 'OnePlus', model: 'OnePlus Nord CE 4',   type: 'Hydrogel Full Cover' },
  { id: 'op-nord-ce3',    brand: 'OnePlus', model: 'OnePlus Nord CE 3',   type: 'Hydrogel Full Cover' },
  { id: 'op-nord-3',      brand: 'OnePlus', model: 'OnePlus Nord 3',      type: 'Hydrogel Full Cover' },
  // Vivo
  { id: 'vivo-v30-pro',   brand: 'Vivo', model: 'Vivo V30 Pro',   type: 'Hydrogel Full Cover', popular: true },
  { id: 'vivo-v30',       brand: 'Vivo', model: 'Vivo V30',       type: 'Hydrogel Full Cover' },
  { id: 'vivo-v29',       brand: 'Vivo', model: 'Vivo V29',       type: 'Hydrogel Full Cover' },
  { id: 'vivo-y200',      brand: 'Vivo', model: 'Vivo Y200',      type: 'Hydrogel Full Cover' },
  { id: 'vivo-y100',      brand: 'Vivo', model: 'Vivo Y100',      type: 'Hydrogel Full Cover' },
  { id: 'vivo-t3x',       brand: 'Vivo', model: 'Vivo T3x',       type: 'Hydrogel Full Cover' },
  // Oppo
  { id: 'oppo-reno12-pro', brand: 'Oppo', model: 'Oppo Reno 12 Pro', type: 'Hydrogel Full Cover', popular: true },
  { id: 'oppo-reno12',     brand: 'Oppo', model: 'Oppo Reno 12',     type: 'Hydrogel Full Cover' },
  { id: 'oppo-reno11-pro', brand: 'Oppo', model: 'Oppo Reno 11 Pro', type: 'Hydrogel Full Cover' },
  { id: 'oppo-reno11',     brand: 'Oppo', model: 'Oppo Reno 11',     type: 'Hydrogel Full Cover' },
  { id: 'oppo-reno10',     brand: 'Oppo', model: 'Oppo Reno 10',     type: 'Hydrogel Full Cover' },
  { id: 'oppo-a98',        brand: 'Oppo', model: 'Oppo A98',         type: 'Hydrogel Full Cover' },
  // Realme
  { id: 'rm-12-pro-plus',  brand: 'Realme', model: 'Realme 12 Pro+',      type: 'Hydrogel Full Cover', popular: true },
  { id: 'rm-12-pro',       brand: 'Realme', model: 'Realme 12 Pro',       type: 'Hydrogel Full Cover' },
  { id: 'rm-12',           brand: 'Realme', model: 'Realme 12',           type: 'Hydrogel Full Cover' },
  { id: 'rm-gt6t',         brand: 'Realme', model: 'Realme GT 6T',        type: 'Hydrogel Full Cover' },
  { id: 'rm-narzo70pro',   brand: 'Realme', model: 'Realme Narzo 70 Pro', type: 'Hydrogel Full Cover' },
  { id: 'rm-c67',          brand: 'Realme', model: 'Realme C67',          type: 'Hydrogel Full Cover' },
  // Xiaomi
  { id: 'xi-note13-pro-plus', brand: 'Xiaomi', model: 'Redmi Note 13 Pro+', type: 'Hydrogel Full Cover', popular: true },
  { id: 'xi-note13-pro',      brand: 'Xiaomi', model: 'Redmi Note 13 Pro',  type: 'Hydrogel Full Cover' },
  { id: 'xi-note13',          brand: 'Xiaomi', model: 'Redmi Note 13',      type: 'Hydrogel Full Cover' },
  { id: 'xi-poco-x6-pro',     brand: 'Xiaomi', model: 'POCO X6 Pro',        type: 'Hydrogel Full Cover' },
  { id: 'xi-poco-m6-pro',     brand: 'Xiaomi', model: 'POCO M6 Pro',        type: 'Hydrogel Full Cover' },
  { id: 'xi-13c',             brand: 'Xiaomi', model: 'Redmi 13C',          type: 'Hydrogel Full Cover' },
  { id: 'xi-14',              brand: 'Xiaomi', model: 'Xiaomi 14',          type: 'Hydrogel Full Cover' },
  // Other
  { id: 'other-generic',   brand: 'Other', model: 'Other Brand (Custom)', type: 'Hydrogel Full Cover' },
];

const BRAND_COLORS = {
  'iPhone':  { bg: 'rgba(120,120,128,0.15)', accent: '#A0A0B8', border: 'rgba(160,160,184,0.25)' },
  'Samsung': { bg: 'rgba(26,115,232,0.12)',  accent: '#4488FF', border: 'rgba(68,136,255,0.25)' },
  'OnePlus': { bg: 'rgba(235,75,61,0.12)',   accent: '#EB4B3D', border: 'rgba(235,75,61,0.25)' },
  'Vivo':    { bg: 'rgba(33,150,243,0.12)',  accent: '#2196F3', border: 'rgba(33,150,243,0.25)' },
  'Oppo':    { bg: 'rgba(76,175,80,0.12)',   accent: '#4CAF50', border: 'rgba(76,175,80,0.25)' },
  'Realme':  { bg: 'rgba(255,152,0,0.12)',   accent: '#FF9800', border: 'rgba(255,152,0,0.25)' },
  'Xiaomi':  { bg: 'rgba(255,102,0,0.12)',   accent: '#FF6200', border: 'rgba(255,102,0,0.25)' },
  'Other':   { bg: 'rgba(156,39,176,0.12)',  accent: '#9C27B0', border: 'rgba(156,39,176,0.25)' },
};

let cart   = JSON.parse(localStorage.getItem('gadLamCart')   || '[]');
let orders = JSON.parse(localStorage.getItem('gadLamOrders') || '[]');
let currentFilter = 'All';

function saveCart()   { localStorage.setItem('gadLamCart',   JSON.stringify(cart));   }
function saveOrders() { localStorage.setItem('gadLamOrders', JSON.stringify(orders)); }
function cartCount()  { return cart.reduce((s,i) => s + i.qty, 0); }
function fmtCur(n)    { return '\u20b9' + n.toLocaleString('en-IN'); }
function today()      { return new Date().toLocaleDateString('en-IN', {day:'2-digit',month:'short',year:'numeric'}); }

function generateOrderId() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let id = 'GAD-';
  for (let i = 0; i < 8; i++) id += chars[Math.floor(Math.random() * chars.length)];
  return id;
}

function phoneSVG(accent) {
  return `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" width="56" height="56">
    <rect x="14" y="3" width="36" height="58" rx="8" fill="${accent}" fill-opacity="0.12" stroke="${accent}" stroke-width="1.8"/>
    <rect x="22" y="12" width="20" height="32" rx="3" fill="${accent}" fill-opacity="0.07"/>
    <circle cx="32" cy="54" r="3" fill="${accent}" fill-opacity="0.5"/>
    <rect x="26" y="7" width="12" height="2" rx="1" fill="${accent}" fill-opacity="0.4"/>
    <line x1="20" y1="20" x2="44" y2="20" stroke="${accent}" stroke-opacity="0.2" stroke-width="1"/>
    <line x1="20" y1="26" x2="44" y2="26" stroke="${accent}" stroke-opacity="0.12" stroke-width="1"/>
    <line x1="20" y1="32" x2="36" y2="32" stroke="${accent}" stroke-opacity="0.12" stroke-width="1"/>
  </svg>`;
}

function renderProducts(filter) {
  const grid = document.getElementById('productsGrid');
  const noResults = document.getElementById('noResults');
  if (!grid) return;

  const list = filter === 'All' ? PRODUCTS : PRODUCTS.filter(p => p.brand === filter);
  grid.innerHTML = '';

  if (list.length === 0) {
    if (noResults) noResults.style.display = 'flex';
    return;
  }
  if (noResults) noResults.style.display = 'none';

  list.forEach(p => {
    const bc = BRAND_COLORS[p.brand] || BRAND_COLORS['Other'];
    const card = document.createElement('div');
    card.className = 'prod-card';
    card.innerHTML = `
      <div class="prod-card-visual" style="background:${bc.bg};">
        ${p.popular ? '<div class="prod-badge-popular">⭐ Popular</div>' : ''}
        <div class="prod-phone-svg">${phoneSVG(bc.accent)}</div>
        <div class="prod-brand-pill" style="color:${bc.accent};border-color:${bc.border}">${p.brand}</div>
      </div>
      <div class="prod-card-body">
        <h3 class="prod-model">${p.model}</h3>
        <p class="prod-type-label">✦ ${p.type}</p>
        <div class="prod-pricing-block">
          <div class="prod-price-line"><span>Lamination</span><span>\u20b9${LAMINATION_PRICE}</span></div>
          <div class="prod-price-line"><span>Shipping</span><span>\u20b9${SHIPPING_PRICE}</span></div>
          <div class="prod-price-total-line"><span>Total</span><span>\u20b9${TOTAL_PRICE}</span></div>
        </div>
        <button class="btn-add-to-cart" onclick="addToCart('${p.id}')">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.2">
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
            <line x1="3" y1="6" x2="21" y2="6"/>
            <path d="M16 10a4 4 0 0 1-8 0"/>
          </svg>
          Add to Cart
        </button>
      </div>`;
    grid.appendChild(card);
  });
}

function initFilters() {
  document.querySelectorAll('.filter-tab').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-tab').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.dataset.brand;
      renderProducts(currentFilter);
    });
  });
}

function addToCart(productId) {
  const p = PRODUCTS.find(x => x.id === productId);
  if (!p) return;
  const existing = cart.find(i => i.id === productId);
  if (existing) existing.qty += 1;
  else cart.push({ id: p.id, brand: p.brand, model: p.model, type: p.type, qty: 1 });
  saveCart();
  syncCartUI();
  showToast(p.model + ' added to cart!');
  openCart();
}

function removeFromCart(id) {
  cart = cart.filter(i => i.id !== id);
  saveCart();
  syncCartUI();
}

function changeQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty = Math.max(1, item.qty + delta);
  saveCart();
  syncCartUI();
}

function syncCartUI() {
  const badge = document.getElementById('cartBadge');
  const count = cartCount();
  if (badge) { badge.textContent = count; badge.style.display = count > 0 ? 'flex' : 'none'; }

  const itemsEl = document.getElementById('cartItems');
  const emptyEl = document.getElementById('cartEmpty');
  const footerEl = document.getElementById('cartFooter');
  if (!itemsEl) return;

  if (cart.length === 0) {
    if (emptyEl) emptyEl.style.display = 'flex';
    if (footerEl) footerEl.style.display = 'none';
    itemsEl.innerHTML = '';
    return;
  }
  if (emptyEl) emptyEl.style.display = 'none';
  if (footerEl) footerEl.style.display = 'block';

  itemsEl.innerHTML = cart.map(item => {
    const bc = BRAND_COLORS[item.brand] || BRAND_COLORS['Other'];
    return `<div class="cart-item">
      <div class="cart-item-icon" style="background:${bc.bg};border-color:${bc.border};">${phoneSVG(bc.accent)}</div>
      <div class="cart-item-details">
        <div class="cart-item-model">${item.model}</div>
        <div class="cart-item-meta">${item.type}</div>
        <div class="cart-item-price-info">\u20b9150 + \u20b950 shipping = <strong>\u20b9200</strong> each</div>
      </div>
      <div class="cart-item-actions">
        <div class="qty-row">
          <button class="qty-btn" onclick="changeQty('${item.id}',-1)">&#8722;</button>
          <span class="qty-val">${item.qty}</span>
          <button class="qty-btn" onclick="changeQty('${item.id}',1)">+</button>
        </div>
        <div class="cart-item-subtotal">\u20b9${TOTAL_PRICE * item.qty}</div>
        <button class="cart-remove" onclick="removeFromCart('${item.id}')" title="Remove">
          <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/></svg>
        </button>
      </div>
    </div>`;
  }).join('');

  const qty = cartCount();
  const sub = LAMINATION_PRICE * qty;
  const shp = SHIPPING_PRICE * qty;
  const ttl = sub + shp;
  const el = id => document.getElementById(id);
  if (el('cartSub'))   el('cartSub').textContent   = fmtCur(sub);
  if (el('cartShip'))  el('cartShip').textContent  = fmtCur(shp);
  if (el('cartTotal')) el('cartTotal').textContent = fmtCur(ttl);
}

function openCart()  { document.getElementById('cartPanel')?.classList.add('open');    document.getElementById('cartBackdrop')?.classList.add('open');    document.body.style.overflow='hidden'; }
function closeCart() { document.getElementById('cartPanel')?.classList.remove('open'); document.getElementById('cartBackdrop')?.classList.remove('open'); document.body.style.overflow=''; }

function showToast(msg) {
  const t = document.getElementById('shopToast');
  if (!t) return;
  t.textContent = '✓ ' + msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2800);
}

function openCheckout() {
  if (!cart.length) return;
  closeCart();
  buildCheckoutSummary();
  document.getElementById('checkoutModal')?.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCheckout() {
  document.getElementById('checkoutModal')?.classList.remove('open');
  document.body.style.overflow = '';
}

function buildCheckoutSummary() {
  const el = document.getElementById('coSummary');
  if (!el) return;
  const qty = cartCount();
  const sub = LAMINATION_PRICE * qty;
  const shp = SHIPPING_PRICE * qty;
  el.innerHTML = cart.map(i => `<div class="co-line"><span>${i.model} &times; ${i.qty}</span><span>${fmtCur(TOTAL_PRICE * i.qty)}</span></div>`).join('') +
    `<div class="co-sep"></div>
     <div class="co-line"><span>Lamination</span><span>${fmtCur(sub)}</span></div>
     <div class="co-line"><span>Shipping</span><span>${fmtCur(shp)}</span></div>
     <div class="co-line co-grand"><span>Total Payable</span><span>${fmtCur(sub + shp)}</span></div>`;
}

function submitOrder(e) {
  e.preventDefault();
  const form = e.target;
  if (!form.checkValidity()) { form.reportValidity(); return; }
  const d = Object.fromEntries(new FormData(form));
  const qty = cartCount();
  const order = {
    orderId: generateOrderId(), date: today(),
    name: d.fullName, phone: d.phone,
    address: d.address, city: d.city, state: d.state, pincode: d.pincode,
    note: d.note || '',
    items: JSON.parse(JSON.stringify(cart)),
    qty, lamination: LAMINATION_PRICE * qty, shipping: SHIPPING_PRICE * qty,
    total: TOTAL_PRICE * qty,
    paymentStatus: 'Pending', orderStatus: 'Pending',
  };
  orders.unshift(order);
  saveOrders();
  cart = [];
  saveCart();
  syncCartUI();
  closeCheckout();
  form.reset();
  showConfirm(order);
}

function showConfirm(order) {
  const el = document.getElementById('confirmBody');
  if (el) el.innerHTML = `
    <div class="conf-order-id">
      <span class="conf-oid-lbl">Order ID</span>
      <span class="conf-oid-val">${order.orderId}</span>
    </div>
    <div class="conf-info-grid">
      <div class="conf-info-row"><span>Name</span><strong>${order.name}</strong></div>
      <div class="conf-info-row"><span>Phone</span><strong>${order.phone}</strong></div>
      <div class="conf-info-row"><span>Address</span><strong>${order.address}, ${order.city}, ${order.state} - ${order.pincode}</strong></div>
    </div>
    <div class="conf-items-block">
      ${order.items.map(i => `<div class="conf-item"><span>${i.model} &times; ${i.qty}</span><span>${fmtCur(TOTAL_PRICE * i.qty)}</span></div>`).join('')}
    </div>
    <div class="conf-totals-block">
      <div class="conf-tot-row"><span>Lamination</span><span>${fmtCur(order.lamination)}</span></div>
      <div class="conf-tot-row"><span>Shipping</span><span>${fmtCur(order.shipping)}</span></div>
      <div class="conf-tot-grand"><span>Total</span><span>${fmtCur(order.total)}</span></div>
    </div>
    <div class="conf-status-note">
      <span class="status-pill pending">&#9203; Pending Confirmation</span>
      <p>We will contact you on <strong>${order.phone}</strong> to confirm your order and collect payment via UPI / Cash on Delivery.</p>
    </div>`;
  document.getElementById('confirmModal')?.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeConfirm() {
  document.getElementById('confirmModal')?.classList.remove('open');
  document.body.style.overflow = '';
}

function initiatePayment() {
  /* RAZORPAY / UPI INTEGRATION POINT
   * To connect Razorpay:
   *   1. Add Razorpay script to <head>
   *   2. Replace this body with Razorpay order creation API call + rzp.open()
   *
   * Example:
   *   const rzp = new Razorpay({
   *     key: 'YOUR_RAZORPAY_KEY_ID',
   *     amount: totalAmount * 100,
   *     currency: 'INR',
   *     name: 'Gadaliya Mobile Lamination',
   *     handler: (response) => confirmPayment(response),
   *   });
   *   rzp.open();
   */
  alert('\u26a0\ufe0f Payment gateway not yet configured.\n\nAfter placing your order, Prakash Gadaliya will contact you on your registered mobile number to collect payment via:\n\u2022 UPI / Google Pay / PhonePe\n\u2022 Cash on Delivery\n\nCall / WhatsApp: +91 91733 09034');
}

document.addEventListener('DOMContentLoaded', () => {
  renderProducts('All');
  initFilters();
  syncCartUI();

  document.querySelectorAll('[data-open-cart]').forEach(b => b.addEventListener('click', openCart));
  document.getElementById('cartBackdrop')?.addEventListener('click', closeCart);
  document.getElementById('btnCloseCart')?.addEventListener('click', closeCart);
  document.getElementById('btnCheckout')?.addEventListener('click', openCheckout);
  document.getElementById('btnCloseCheckout')?.addEventListener('click', closeCheckout);
  document.getElementById('checkoutForm')?.addEventListener('submit', submitOrder);
  document.getElementById('btnCloseConfirm')?.addEventListener('click', closeConfirm);
  document.getElementById('btnContinue')?.addEventListener('click', closeConfirm);
  document.getElementById('btnPayNow')?.addEventListener('click', initiatePayment);

  document.getElementById('shopHeroCta')?.addEventListener('click', () => {
    document.getElementById('shopSection')?.scrollIntoView({ behavior: 'smooth' });
  });

  const mobileToggle = document.getElementById('mobileNavToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const mobileBackdrop = document.getElementById('mobileDrawerBackdrop');
  const mobileClose   = document.getElementById('mobileDrawerClose');
  function openDrawer()  { mobileDrawer?.classList.add('active');    mobileBackdrop?.classList.add('active');    document.body.style.overflow='hidden'; }
  function closeDrawer() { mobileDrawer?.classList.remove('active'); mobileBackdrop?.classList.remove('active'); document.body.style.overflow=''; }
  mobileToggle?.addEventListener('click', openDrawer);
  mobileClose?.addEventListener('click', closeDrawer);
  mobileBackdrop?.addEventListener('click', closeDrawer);
  document.querySelectorAll('.mobile-nav-link').forEach(l => l.addEventListener('click', closeDrawer));

  document.addEventListener('keydown', e => {
    if (e.key !== 'Escape') return;
    closeCart(); closeCheckout(); closeConfirm(); closeDrawer();
  });
});
