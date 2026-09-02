/**
 * CedCina Luxury Eyewear - Vanilla JavaScript Core
 * Handles Navigation, Cart State, Telegram Ordering, Search & Filters, Modals, and Accordions
 * Zero build step required - 100% compatible with GitHub Pages drag-and-drop.
 */

// Default Telegram contact username for ordering (can be customized)
const TELEGRAM_USERNAME = "CedCinaSupport";

// Catalog of products used across the site
const PRODUCTS_CATALOG = [
  {
    id: "xl-alpha",
    name: "مدل ایکس‌ال-آلفا",
    category: "sunglasses",
    frameType: "aviator",
    price: 1200000,
    priceFormatted: "۱,۲۰۰,۰۰۰ تومان",
    badge: "جدید",
    description: "فریم تیتانیوم سبک با لنزهای پلاریزه ضدخش و پوشش آنتی‌رفلکس کامل.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBBQvNOK1lYNmIFq9zugZaynhITDfiCBpDliMY_F1SQPegX3K-mRJYB6twRY35ZipThbTqEn8nBky50QvqHIAibsCrQAopYfbOuRd35w1eewknt34-sO2IR3I36mJCdtazne6wxYJTaLG5YZupYiH0kNcXLQqLhXaBPKuOp4zxMwv7LIy8aPKMc0AxYgd_f4ouoZ1UL0rEO5wRhWAU9Kny5QaZagZSWSYn8hDT2QlmcSx2HHnSvTNtq"
  },
  {
    id: "optical-neo",
    name: "اُپتیکال نئو",
    category: "prescription",
    frameType: "round",
    price: 850000,
    priceFormatted: "۸۵۰,۰۰۰ تومان",
    badge: null,
    description: "طراحی مینیمال گرد برای استایل روزمره مدرن با وزن فوق‌العاده سبک ۱۲ گرم.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA0pZhFPhuPfsOiD_f_rbGRPgWfC5rWvBERmxzmFAkppB6mIBy0FEnBR5G4azdcb5Z_1A8rUotEEMo2MTDoKilH-Iv54vVJK0Ti_ikxYR3UXUux3mhEIst0r-IxR4ebPC-tFtyFy0niD65OV8QkVroe4NxZb91vm9-Zxyni6A7gB3UWimXBAjyk2X6QMaUf7fLbUV90FiYAheCBR9OwnAEmn43d9wfohgqswrnT1uXGbIVlVCtdjNXM"
  },
  {
    id: "cyber-shield",
    name: "سایبر شیلد",
    category: "special",
    frameType: "shield",
    price: 2500000,
    priceFormatted: "۲,۵۰۰,۰۰۰ تومان",
    badge: "محدود",
    description: "طراحی آینده‌نگر با پوشش کامل و لنزهای بازتابنده رنگین‌کمانی محافظ UV400.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBZuE8Kx9gycUNEbcNft4LJPOJR7ZfzKmpOclAMY7vVy1QzalvdAkIRFoyFXhOBNlihMNC3pbkSemSz5kKUa4swB0lamc5NFrCSiXMrDl0YpBORSnYWNvOie44ky-LHgWd46bLLH-VZpFj7uX-3wlS80TL55ZXj0Lq-Q-2DD2nISVndLL3yyiCa-csPqvPVdAG1mVMCBXMhUqsJiD3xdFhU0Ep6018hJ4Pg1NFzhaeBL3FN9vzNzPrm"
  },
  {
    id: "classic-gunmetal",
    name: "کلاسیک گان‌متال",
    category: "sunglasses",
    frameType: "wayfarer",
    price: 1050000,
    priceFormatted: "۱,۰۵۰,۰۰۰ تومان",
    badge: null,
    description: "تلفیقی از اصالت ویفرر و متریال‌های پیشرفته صنعتی مقاوم در برابر ضربه.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuChECbDCnmbQCkvrimlZ8SOonORR0dUXhEmA_LMmDgpcLlTmxoI_gc6gOju0OecoVXmplvcwkji4UY0mQXi2YOF31VeXOaw7cmXJLJ8fL8IXV18PRYBylEqnCkmvc7YIAYbEN1aNcnq1Wxezw5dt0rUuZmfy4javz7qUXL-fqikDqp-cgWGGGP04ekO3DGV1BCsupG_KGLKtKmzmmfvvLOBbTPWEaJmaHkZeJLp2IjtQDM2C5pmPUmS"
  },
  {
    id: "cyber-classic",
    name: "فریم کلاسیک سایبر",
    category: "special",
    frameType: "wayfarer",
    price: 3500000,
    priceFormatted: "۳,۵۰۰,۰۰۰ تومان",
    badge: "ویژه",
    description: "فریم فوق‌العاده خاص تیتانیوم کربن با لولاهای هیدرولیکی مهندسی دقیق.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAk5oK6cVuqR4YOVVRfbpWNCMAuaiCYoMyPb55dMVOk9O42nA4mZkVmlIrP0NtuXnNZ_8UO1OllFvVl-zuAd5dGZS74rMDtjqaD5_PJ2GufMLxfwXi4PBNhHR37hoYa02TSHBz80EeDlmSSfziVHp9IVYGd1syh5BpR8DW0a49zTGnNrxi1SqKm70OBfMS7CqNVSyMvRGQmtg79YboeTuLlaJqZTBO2X1Sr-wLpecFXE5Q18zt1SnY3"
  },
  {
    id: "neon-sunglasses",
    name: "عینک آفتابی نئون",
    category: "sunglasses",
    frameType: "round",
    price: 4200000,
    priceFormatted: "۴,۲۰۰,۰۰۰ تومان",
    badge: "محبوب",
    description: "لنز فتوکرومیک با انحنای ارگونومیک و بازتاب هولوگرافیک در نور روز.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBue7b7hBkalpRSJ6qn93JA8e1T0Kqn3W1aNd0kyG1TN12km0GAutyqqU8-1OWkAePR3KnnJGxrfTbECb-yfNit5CIPvK4FMaIeDbnhMpy4v1UT3WPnJILnHpHu9lUZ3K7BK7S-MM7cL0QCZIPu8g-mZnwm3j3n9n2bbhdq0DFTvrfuFc7K3-be7HKhppPKbp4CupG8KW1L4KC-AJDvG2AWSAUjS4ZEaqWuIbnpiXpu7DIbHrJPqVr0"
  },
  {
    id: "limited-edition",
    name: "مدل لیمیتد ادیشن ۲۰۲۴",
    category: "special",
    frameType: "shield",
    price: 7800000,
    priceFormatted: "۷,۸۰۰,۰۰۰ تومان",
    badge: "کلکسیونی",
    description: "نسخه بسیار محدود شماره‌دار با شناسنامه دیجیتال، همراه با کیف چرمی دست‌ساز.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBlkb3xWQ-gLd3jmSmkOafQjgY-I-8OhXmGWTKIkAGC-ddk0DB88q-nO2qVKp-nA1SZ53oRAMsMUUQxZpFSaKA8PkNLGlZaqchEcNyM_8zL6bZ0bPfFBIqFdKEh4CK5gtA_M8nClFMZ1wOgrAqXBz9tqfMCnur9YryTqQaPF4QXcAo6xlIX7VZU5O73FS5d7_nIAToxBjYJ_xMh1-Sw3enDk3u69FyWf4E42vPT0fOyk8fQunitfzM4"
  },
  {
    id: "titan-prescription",
    name: "طبی تیتانیوم اولترا",
    category: "prescription",
    frameType: "aviator",
    price: 1950000,
    priceFormatted: "۱,۹۵۰,۰۰۰ تومان",
    badge: null,
    description: "فریم انعطاف‌پذیر نشکن از تیتانیوم فضایی مناسب لنزهای نمره بالا.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAmoW0XKyOTJGNdM4O5Ce1TBIOI7AU9CYQEzIR2EdSjTLz2WxkCMH5A6qFyWNETpdVYmhpLgIdpN_tEJAZWedqzMO_8LRTd55FVgmLqNVDboHIhigkZG7PIaTCKxlBRyXTm1kA7Bc_donCvqmWGDG7kXop34NWe1JzLVuPw2OzKNgM6TwZDgM-IyeSFJA0dgIIw5StzY_x-E5GATBerPzRiSoxUj9X8qVM8ohkiwTFWkq0KGw0Hgbno"
  }
];

// Cart State Manager
class CartStore {
  constructor() {
    this.key = 'cedcina_cart_items';
    this.items = this.load();
  }

  load() {
    try {
      const data = localStorage.getItem(this.key);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      console.error("Failed to load cart", e);
      return [];
    }
  }

  save() {
    try {
      localStorage.setItem(this.key, JSON.stringify(this.items));
      this.notify();
    } catch (e) {
      console.error("Failed to save cart", e);
    }
  }

  addItem(productId, quantity = 1) {
    const product = PRODUCTS_CATALOG.find(p => p.id === productId);
    if (!product) return;

    const existing = this.items.find(item => item.id === productId);
    if (existing) {
      existing.quantity += quantity;
    } else {
      this.items.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: quantity
      });
    }
    this.save();
    showToast(`«${product.name}» به سبد خرید افزوده شد.`);
  }

  updateQuantity(productId, delta) {
    const item = this.items.find(i => i.id === productId);
    if (!item) return;

    item.quantity += delta;
    if (item.quantity <= 0) {
      this.items = this.items.filter(i => i.id !== productId);
    }
    this.save();
  }

  removeItem(productId) {
    this.items = this.items.filter(i => i.id !== productId);
    this.save();
  }

  clear() {
    this.items = [];
    this.save();
  }

  getCount() {
    return this.items.reduce((sum, item) => sum + item.quantity, 0);
  }

  getTotalPrice() {
    return this.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  }

  notify() {
    updateCartBadges();
    renderCartDrawerContent();
  }
}

const cart = new CartStore();

// Persian Number Formatter
function toPersianDigits(n) {
  const farsiDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  return n.toString().replace(/\d/g, x => farsiDigits[x]);
}

function formatPrice(num) {
  const formatted = num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "،");
  return toPersianDigits(formatted) + ' تومان';
}

// Toast Notifications
function showToast(message, duration = 3200) {
  let container = document.getElementById('cedcina-toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'cedcina-toast-container';
    container.className = 'fixed bottom-6 left-6 z-[9999] flex flex-col gap-3 pointer-events-none max-w-sm w-full px-4';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'glass-panel p-4 rounded-xl border border-primary/40 bg-surface/90 text-on-surface shadow-[0_10px_30px_rgba(0,0,0,0.8)] backdrop-blur-xl flex items-center justify-between gap-3 pointer-events-auto toast-enter';
  toast.innerHTML = `
    <div class="flex items-center gap-3">
      <span class="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary text-sm">
        <span class="material-symbols-outlined text-base">check_circle</span>
      </span>
      <p class="text-sm font-body-md font-medium text-on-surface">${message}</p>
    </div>
    <button class="text-on-surface-variant hover:text-on-surface text-xs" onclick="this.parentElement.remove()">✕</button>
  `;
  container.appendChild(toast);

  // Trigger animation
  requestAnimationFrame(() => {
    toast.classList.add('toast-enter-active');
  });

  setTimeout(() => {
    toast.classList.remove('toast-enter-active');
    toast.classList.add('toast-exit');
    setTimeout(() => toast.remove(), 300);
  }, duration);
}

// Update Cart Badge on all buttons
function updateCartBadges() {
  const count = cart.getCount();
  const badges = document.querySelectorAll('.cart-badge');
  badges.forEach(badge => {
    if (count > 0) {
      badge.textContent = toPersianDigits(count);
      badge.classList.remove('hidden');
      badge.classList.add('flex');
    } else {
      badge.classList.add('hidden');
      badge.classList.remove('flex');
    }
  });
}

// Inject Global Cart Drawer & Search Modal
function injectSharedUIComponents() {
  if (document.getElementById('cart-drawer')) return;

  const drawerHTML = `
    <!-- Cart Backdrop -->
    <div id="cart-backdrop" class="fixed inset-0 bg-black/70 backdrop-blur-sm z-[999] opacity-0 pointer-events-none transition-opacity duration-300"></div>

    <!-- Cart Drawer (RTL: slides in from right or left) -->
    <aside id="cart-drawer" class="fixed top-0 left-0 h-full w-full sm:w-[420px] bg-surface-container-lowest/95 backdrop-blur-2xl border-r border-outline-variant/20 shadow-[-10px_0_40px_rgba(0,0,0,0.8)] z-[1000] flex flex-col -translate-x-full transition-transform duration-300 pointer-events-none">
      <!-- Drawer Header -->
      <div class="p-6 border-b border-outline-variant/20 flex items-center justify-between">
        <div class="flex items-center gap-3">
          <span class="material-symbols-outlined text-primary">shopping_bag</span>
          <h3 class="font-headline-md text-on-surface">سبد خرید شما</h3>
        </div>
        <button id="close-cart-btn" class="text-on-surface-variant hover:text-on-surface p-2 rounded-full hover:bg-primary/10 transition-colors">
          <span class="material-symbols-outlined">close</span>
        </button>
      </div>

      <!-- Items List -->
      <div id="cart-items-container" class="flex-1 overflow-y-auto p-6 space-y-4">
        <!-- Dynamic Cart Items injected here -->
      </div>

      <!-- Drawer Footer & Telegram Order Section -->
      <div class="p-6 border-t border-outline-variant/20 bg-surface/50 space-y-4">
        <div class="flex items-center justify-between text-base">
          <span class="text-on-surface-variant">مجموع کل:</span>
          <span id="cart-total-price" class="font-headline-md text-primary font-bold">۰ تومان</span>
        </div>

        <!-- Optional Order Details Form -->
        <div class="space-y-2 pt-2">
          <input id="order-customer-name" type="text" placeholder="نام و نام خانوادگی خریدار" class="w-full bg-surface-container-low border border-outline-variant/40 rounded-lg px-3 py-2 text-xs text-on-surface focus:outline-none focus:border-primary">
          <input id="order-customer-phone" type="tel" dir="ltr" placeholder="شماره تماس (جهت هماهنگی)" class="w-full bg-surface-container-low border border-outline-variant/40 rounded-lg px-3 py-2 text-xs text-on-surface focus:outline-none focus:border-primary text-right">
        </div>

        <!-- Telegram Action Buttons -->
        <div class="space-y-2 pt-1">
          <button id="telegram-checkout-btn" class="w-full bg-primary-container hover:bg-primary text-on-primary-container hover:text-on-primary font-body-md font-semibold py-3 px-4 rounded-lg btn-primary-glow flex items-center justify-center gap-2 transition-all">
            <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.52 2.77-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .42z"/></svg>
            <span>ثبت سفارش مستقیم در تلگرام</span>
          </button>
          <button id="copy-order-btn" class="w-full glass-panel text-primary text-xs py-2 rounded-lg hover:bg-primary/10 transition-colors flex items-center justify-center gap-2">
            <span class="material-symbols-outlined text-sm">content_copy</span>
            <span>کپی پیش‌فاکتور جهت ارسال</span>
          </button>
        </div>
      </div>
    </aside>

    <!-- Global Search Modal -->
    <div id="search-modal" class="fixed inset-0 z-[1001] bg-black/80 backdrop-blur-md hidden items-center justify-center p-4">
      <div class="glass-panel bg-surface-container-lowest/95 border border-outline-variant/40 rounded-2xl w-full max-w-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.9)] flex flex-col max-h-[85vh]">
        <div class="p-4 border-b border-outline-variant/20 flex items-center gap-3">
          <span class="material-symbols-outlined text-primary text-2xl">search</span>
          <input id="quick-search-input" type="text" placeholder="جستجوی مدل، جنس فریم یا دسته‌بندی عینک..." class="w-full bg-transparent border-none text-on-surface text-base focus:ring-0 focus:outline-none placeholder:text-on-surface-variant/60 font-body-md">
          <button id="close-search-btn" class="text-on-surface-variant hover:text-on-surface p-1">
            <span class="material-symbols-outlined">close</span>
          </button>
        </div>
        <div id="search-results-container" class="p-4 overflow-y-auto space-y-3 flex-1">
          <p class="text-xs text-on-surface-variant text-center py-8">عبارت مورد نظر خود را تایپ کنید (مثلاً: تیتانیوم، آفتابی، سایبر، نئو)...</p>
        </div>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', drawerHTML);

  // Setup Event Listeners
  setupCartDrawerEvents();
  setupSearchModalEvents();
}

function openCartDrawer() {
  const drawer = document.getElementById('cart-drawer');
  const backdrop = document.getElementById('cart-backdrop');
  if (drawer && backdrop) {
    renderCartDrawerContent();
    drawer.classList.add('open');
    backdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

function closeCartDrawer() {
  const drawer = document.getElementById('cart-drawer');
  const backdrop = document.getElementById('cart-backdrop');
  if (drawer && backdrop) {
    drawer.classList.remove('open');
    backdrop.classList.remove('open');
    document.body.style.overflow = '';
  }
}

function setupCartDrawerEvents() {
  const closeBtn = document.getElementById('close-cart-btn');
  const backdrop = document.getElementById('cart-backdrop');
  const telegramBtn = document.getElementById('telegram-checkout-btn');
  const copyBtn = document.getElementById('copy-order-btn');

  if (closeBtn) closeBtn.addEventListener('click', closeCartDrawer);
  if (backdrop) backdrop.addEventListener('click', closeCartDrawer);

  // Bind all cart trigger buttons in navigation
  document.querySelectorAll('[data-action="open-cart"]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openCartDrawer();
    });
  });

  if (telegramBtn) {
    telegramBtn.addEventListener('click', () => {
      handleTelegramCheckout();
    });
  }

  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      copyOrderToClipboard();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeCartDrawer();
      closeSearchModal();
    }
  });
}

function renderCartDrawerContent() {
  const container = document.getElementById('cart-items-container');
  const totalElem = document.getElementById('cart-total-price');
  if (!container || !totalElem) return;

  const items = cart.items;
  const total = cart.getTotalPrice();
  totalElem.textContent = formatPrice(total);

  if (items.length === 0) {
    container.innerHTML = `
      <div class="text-center py-16 flex flex-col items-center gap-4">
        <div class="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center text-outline">
          <span class="material-symbols-outlined text-3xl">remove_shopping_cart</span>
        </div>
        <p class="text-on-surface-variant font-body-md">سبد خرید شما در حال حاضر خالی است.</p>
        <a href="products.html" class="bg-primary/20 hover:bg-primary/30 text-primary border border-primary/40 px-6 py-2 rounded-lg text-sm transition-colors mt-2" onclick="closeCartDrawer()">
          مشاهده و انتخاب عینک‌ها
        </a>
      </div>
    `;
    return;
  }

  container.innerHTML = items.map(item => `
    <div class="glass-panel p-4 rounded-xl flex items-center gap-4 bg-surface-container-low/60 border border-outline-variant/30">
      <img src="${item.image}" alt="${item.name}" class="w-16 h-16 object-cover rounded-lg bg-surface border border-outline-variant/20">
      <div class="flex-1 min-w-0">
        <h4 class="font-headline-md text-sm text-on-surface truncate">${item.name}</h4>
        <p class="text-xs text-primary font-medium mt-1">${formatPrice(item.price)}</p>
        <div class="flex items-center gap-3 mt-2">
          <button class="w-6 h-6 rounded-md bg-surface-container flex items-center justify-center text-on-surface text-xs hover:bg-primary/20 transition-colors" onclick="cart.updateQuantity('${item.id}', -1)">-</button>
          <span class="text-xs font-semibold text-on-surface">${toPersianDigits(item.quantity)}</span>
          <button class="w-6 h-6 rounded-md bg-surface-container flex items-center justify-center text-on-surface text-xs hover:bg-primary/20 transition-colors" onclick="cart.updateQuantity('${item.id}', 1)">+</button>
        </div>
      </div>
      <button class="text-outline hover:text-error transition-colors p-1" title="حذف" onclick="cart.removeItem('${item.id}')">
        <span class="material-symbols-outlined text-lg">delete</span>
      </button>
    </div>
  `).join('');
}

// Telegram Ordering Formatting
function generateTelegramOrderMessage() {
  const items = cart.items;
  if (items.length === 0) return null;

  const nameInput = document.getElementById('order-customer-name');
  const phoneInput = document.getElementById('order-customer-phone');
  const customerName = (nameInput && nameInput.value.trim()) || "ذکر نشده";
  const customerPhone = (phoneInput && phoneInput.value.trim()) || "ذکر نشده";

  let message = `سلام، قصد ثبت سفارش از عینک لوکس CedCina را دارم:\n\n`;
  message += `━━━━━━━━━━━━━━━━━━━━\n`;
  message += `📋 اقلام درخواستی:\n`;

  items.forEach((item, idx) => {
    message += `${toPersianDigits(idx + 1)}. ${item.name} - تعداد: ${toPersianDigits(item.quantity)} عدد - فی: ${formatPrice(item.price)}\n`;
  });

  message += `━━━━━━━━━━━━━━━━━━━━\n`;
  message += `💰 مبلغ کل فاکتور: ${formatPrice(cart.getTotalPrice())}\n`;
  message += `👤 نام خریدار: ${customerName}\n`;
  message += `📞 شماره تماس: ${customerPhone}\n`;
  message += `📅 تاریخ: ${new Date().toLocaleDateString('fa-IR')}\n`;
  message += `━━━━━━━━━━━━━━━━━━━━\n`;
  message += `لطفاً جهت تأیید و نحوه پرداخت راهنمایی فرمایید. سپاس.`;

  return message;
}

function handleTelegramCheckout() {
  if (cart.items.length === 0) {
    showToast("سبد خرید شما خالی است.");
    return;
  }

  const message = generateTelegramOrderMessage();
  const encodedMessage = encodeURIComponent(message);
  const telegramUrl = `https://t.me/${TELEGRAM_USERNAME}?text=${encodedMessage}`;

  // Open Telegram in new tab
  window.open(telegramUrl, '_blank');
  showToast("سفارش آماده ارسال به تلگرام شد.");
}

function copyOrderToClipboard() {
  const message = generateTelegramOrderMessage();
  if (!message) {
    showToast("سبد خرید شما خالی است.");
    return;
  }

  navigator.clipboard.writeText(message).then(() => {
    showToast("پیش‌فاکتور با موفقیت در کلیپ‌بورد کپی شد.");
  }).catch(() => {
    showToast("خطا در کپی پیش‌فاکتور.");
  });
}

// Global Quick Search Modal Events
function openSearchModal() {
  const modal = document.getElementById('search-modal');
  const input = document.getElementById('quick-search-input');
  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    if (input) {
      input.value = '';
      input.focus();
      renderSearchResults('');
    }
  }
}

function closeSearchModal() {
  const modal = document.getElementById('search-modal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}

function setupSearchModalEvents() {
  const closeBtn = document.getElementById('close-search-btn');
  const modal = document.getElementById('search-modal');
  const input = document.getElementById('quick-search-input');

  if (closeBtn) closeBtn.addEventListener('click', closeSearchModal);
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeSearchModal();
    });
  }

  document.querySelectorAll('[data-action="open-search"]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openSearchModal();
    });
  });

  if (input) {
    input.addEventListener('input', (e) => {
      renderSearchResults(e.target.value.trim());
    });
  }
}

function renderSearchResults(query) {
  const container = document.getElementById('search-results-container');
  if (!container) return;

  if (!query) {
    container.innerHTML = `<p class="text-xs text-on-surface-variant text-center py-8">نام مدل یا ویژگی دلخواه خود را تایپ کنید...</p>`;
    return;
  }

  const q = query.toLowerCase();
  const results = PRODUCTS_CATALOG.filter(p => 
    p.name.toLowerCase().includes(q) || 
    p.description.toLowerCase().includes(q) || 
    p.frameType.toLowerCase().includes(q)
  );

  if (results.length === 0) {
    container.innerHTML = `<p class="text-xs text-on-surface-variant text-center py-8">هیچ محصولی با عبارت «${query}» یافت نشد.</p>`;
    return;
  }

  container.innerHTML = results.map(item => `
    <div class="glass-panel p-3 rounded-xl flex items-center justify-between gap-4 hover:border-primary/50 transition-colors">
      <div class="flex items-center gap-3">
        <img src="${item.image}" alt="${item.name}" class="w-12 h-12 object-cover rounded-lg bg-surface">
        <div>
          <h4 class="text-sm font-semibold text-on-surface">${item.name}</h4>
          <p class="text-xs text-primary font-medium">${formatPrice(item.price)}</p>
        </div>
      </div>
      <div class="flex items-center gap-2">
        <button class="bg-primary/20 hover:bg-primary/30 text-primary px-3 py-1.5 rounded-lg text-xs font-medium transition-colors" onclick="cart.addItem('${item.id}'); closeSearchModal();">
          افزودن به سبد
        </button>
      </div>
    </div>
  `).join('');
}

// Initialize on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  injectSharedUIComponents();
  updateCartBadges();

  // Highlight current page in navigation
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('text-primary');
      link.classList.remove('text-on-surface-variant');
    }
  });

  // Mobile menu toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileNav = document.getElementById('mobile-nav');
  if (mobileMenuBtn && mobileNav) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileNav.classList.toggle('hidden');
    });
  }

  // Quick order single item directly to Telegram
  window.quickOrderTelegram = function(productId) {
    const product = PRODUCTS_CATALOG.find(p => p.id === productId);
    if (!product) return;

    const message = `سلام، قصد سفارش مستقیم این محصول از وب‌سایت CedCina را دارم:\n\n👓 محصول: ${product.name}\n💰 قیمت: ${formatPrice(product.price)}\n\nلطفاً راهنمایی فرمایید.`;
    window.open(`https://t.me/${TELEGRAM_USERNAME}?text=${encodeURIComponent(message)}`, '_blank');
  };

  // Bind any "Add to Cart" buttons that have data-product-id
  document.addEventListener('click', (e) => {
    const addBtn = e.target.closest('[data-add-to-cart]');
    if (addBtn) {
      e.preventDefault();
      const id = addBtn.getAttribute('data-add-to-cart');
      if (id) {
        cart.addItem(id);
      }
    }
  });
});
