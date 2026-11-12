/**
 * ===================================================================
 * STACKLY - LUXURY TRAVEL BOOKING PLATFORM
 * Core Application Engine & Interactive Functionalities
 * ===================================================================
 */

'use strict';

// -------------------------------------------------------------------
// 1. DATA STORES (Destinations, Hotels, Offers, Testimonials)
// -------------------------------------------------------------------

const DESTINATIONS_DATA = [
  {
    id: 'dest-bali',
    name: 'Bali, Indonesia',
    shortName: 'Bali',
    country: 'Indonesia',
    category: 'beach',
    tag: 'Tropical Haven',
    price: 185,
    staysCount: 142,
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'dest-santorini',
    name: 'Santorini, Greece',
    shortName: 'Santorini',
    country: 'Greece',
    category: 'beach',
    tag: 'Sunset Paradise',
    price: 295,
    staysCount: 98,
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'dest-kyoto',
    name: 'Kyoto, Japan',
    shortName: 'Kyoto',
    country: 'Japan',
    category: 'historic',
    tag: 'Zen & Culture',
    price: 210,
    staysCount: 116,
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'dest-alps',
    name: 'Zermatt, Swiss Alps',
    shortName: 'Swiss Alps',
    country: 'Switzerland',
    category: 'mountain',
    tag: 'Alpine Majesty',
    price: 420,
    staysCount: 74,
    image: 'https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'dest-paris',
    name: 'Paris, France',
    shortName: 'Paris',
    country: 'France',
    category: 'city',
    tag: 'City of Lights',
    price: 280,
    staysCount: 210,
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'dest-amalfi',
    name: 'Amalfi Coast, Italy',
    shortName: 'Amalfi',
    country: 'Italy',
    category: 'beach',
    tag: 'Coastal Luxury',
    price: 360,
    staysCount: 88,
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'dest-dubai',
    name: 'Dubai, UAE',
    shortName: 'Dubai',
    country: 'UAE',
    category: 'city',
    tag: 'Modern Glamour',
    price: 340,
    staysCount: 165,
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'dest-banff',
    name: 'Banff National Park',
    shortName: 'Banff',
    country: 'Canada',
    category: 'mountain',
    tag: 'Pristine Wilderness',
    price: 245,
    staysCount: 62,
    image: 'https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=800&q=80'
  }
];

const HOTELS_DATA = [
  {
    id: 'h1',
    name: 'The Royal Azure Cliff Resort',
    location: 'Uluwatu, Bali, Indonesia',
    city: 'Bali',
    starRating: 5.0,
    score: 9.8,
    reviewsCount: 428,
    price: 285,
    originalPrice: 380,
    badge: 'Best Seller',
    amenities: ['Private Pool', 'Ocean View', 'Spa', 'Free WiFi'],
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'h2',
    name: 'Grace Caldera Santorini Suites',
    location: 'Oia, Santorini, Greece',
    city: 'Santorini',
    starRating: 5.0,
    score: 9.9,
    reviewsCount: 384,
    price: 520,
    originalPrice: 650,
    badge: 'Iconic View',
    amenities: ['Infinity Pool', 'Sunset Terrace', 'Fine Dining', 'Breakfast'],
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'h3',
    name: 'The Matterhorn Glacier Chalet',
    location: 'Zermatt, Swiss Alps, Switzerland',
    city: 'Swiss Alps',
    starRating: 4.9,
    score: 9.7,
    reviewsCount: 295,
    price: 640,
    originalPrice: 780,
    badge: 'Ski-in Ski-out',
    amenities: ['Heated Pool', 'Alpine Spa', 'Fireplace', 'Valet'],
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'h4',
    name: 'Hoshinoya Riverside Haven',
    location: 'Arashiyama, Kyoto, Japan',
    city: 'Kyoto',
    starRating: 4.8,
    score: 9.6,
    reviewsCount: 312,
    price: 390,
    originalPrice: 470,
    badge: 'Zen Sanctuary',
    amenities: ['Hot Spring Onsen', 'Tea House', 'Garden', 'WiFi'],
    image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'h5',
    name: 'Hôtel Plaza Athénée Royale',
    location: 'Avenue Montaigne, Paris, France',
    city: 'Paris',
    starRating: 5.0,
    score: 9.8,
    reviewsCount: 512,
    price: 780,
    originalPrice: 950,
    badge: 'Palace Luxury',
    amenities: ['Eiffel Tower View', 'Michelin Chef', 'Dior Spa', 'Concierge'],
    image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'h6',
    name: 'Le Sirenuse Panoramic Villa',
    location: 'Positano, Amalfi Coast, Italy',
    city: 'Amalfi',
    starRating: 4.9,
    score: 9.7,
    reviewsCount: 340,
    price: 610,
    originalPrice: 720,
    badge: 'Seaside Jewel',
    amenities: ['Private Beach', 'Limoncello Bar', 'Spa', 'Balcony'],
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'h7',
    name: 'Burj Al Marina Grand Hotel',
    location: 'Jumeirah Beach, Dubai, UAE',
    city: 'Dubai',
    starRating: 4.9,
    score: 9.6,
    reviewsCount: 460,
    price: 450,
    originalPrice: 580,
    badge: 'VIP Club Access',
    amenities: ['Private Beach', 'Helipad', 'Rooftop Lounge', 'Spa'],
    image: 'https://images.unsplash.com/photo-1580835845971-a393b73bf370?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'h8',
    name: 'Fairmont Chateau Lake Louise',
    location: 'Banff National Park, Canada',
    city: 'Banff',
    starRating: 4.7,
    score: 9.5,
    reviewsCount: 278,
    price: 360,
    originalPrice: 440,
    badge: 'Lakeside Gem',
    amenities: ['Canoeing', 'Glacier View', 'Fitness Center', 'Heated Pool'],
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'h9',
    name: 'Four Seasons Sayan Rainforest',
    location: 'Ubud, Bali, Indonesia',
    city: 'Bali',
    starRating: 4.9,
    score: 9.8,
    reviewsCount: 389,
    price: 495,
    originalPrice: 620,
    badge: 'Eco Sanctuary',
    amenities: ['Jungle Pool', 'Yoga Pavilion', 'Organic Dining', 'River View'],
    image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'h10',
    name: 'Villa Honegg Serenity Palace',
    location: 'Lake Lucerne, Switzerland',
    city: 'Swiss Alps',
    starRating: 5.0,
    score: 9.9,
    reviewsCount: 260,
    price: 720,
    originalPrice: 890,
    badge: 'Top Rated 2026',
    amenities: ['Panoramic Infinity Pool', 'Cinema Room', 'Spa', 'Fine Wine'],
    image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'h11',
    name: 'Canaves Oia Epitome Luxury',
    location: 'Ammoudi, Santorini, Greece',
    city: 'Santorini',
    starRating: 4.8,
    score: 9.6,
    reviewsCount: 215,
    price: 580,
    originalPrice: 700,
    badge: 'Boutique Villa',
    amenities: ['Private Plunge Pool', 'Sea Sunset View', 'Butler', 'Spa'],
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'h12',
    name: 'The Ritz Paris Vendôme',
    location: 'Place Vendôme, Paris, France',
    city: 'Paris',
    starRating: 5.0,
    score: 9.9,
    reviewsCount: 440,
    price: 890,
    originalPrice: 1100,
    badge: 'Legendary Stay',
    amenities: ['Historic Suites', 'Bar Hemingway', 'Indoor Pool', 'Garden'],
    image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=800&q=80'
  }
];

const OFFERS_DATA = [
  {
    id: 'offer-1',
    discount: '35% OFF',
    title: 'Spring Escapes Global Promo',
    description: 'Save 35% on all curated beachfront resorts in Bali, Santorini, and Amalfi for stays 3 nights or longer.',
    code: 'SPRING35',
    type: 'percent',
    percent: 35,
    validUntil: 'Valid through May 31, 2026',
    image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'offer-2',
    discount: '20% OFF',
    title: 'First Voyage Explorer Bonus',
    description: 'New to Stackly? Enjoy 20% instant credit deduction off any boutique or mountain chalet worldwide.',
    code: 'WANDER20',
    type: 'percent',
    percent: 20,
    validUntil: 'Valid for new bookings',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'offer-3',
    discount: '$50 CREDIT',
    title: 'VIP Weekend Suite Upgrade',
    description: 'Direct $50 savings plus complimentary daily organic breakfast at select five-star European city hotels.',
    code: 'LUXURY50',
    type: 'flat',
    flatAmount: 50,
    validUntil: 'Limited to first 500 bookings',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=600&q=80'
  }
];

const TESTIMONIALS_DATA = [
  {
    name: 'Dr. Evelyn Martinez',
    role: 'Architect & Travel Writer',
    location: 'Barcelona, Spain',
    trip: 'Stayed in Grace Caldera, Santorini',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    text: 'Booking through Stackly was completely effortless. The private caldera suite in Santorini was even more spectacular than the photos. Their 24/7 concierge helped us secure a private sunset catamaran with just two hours notice!'
  },
  {
    name: 'Marcus & Chloe Thorne',
    role: 'Honeymooners',
    location: 'Sydney, Australia',
    trip: 'Stayed in Uluwatu Resort, Bali',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    text: 'The best travel platform we have ever used. Not only did code SPRING35 save us nearly $600 on our honeymoon villa, but the resort greeted us with chilled champagne and a complimentary room upgrade. Unbeatable service!'
  },
  {
    name: 'Julian Henderson',
    role: 'Software Executive',
    location: 'London, UK',
    trip: 'Stayed in Matterhorn Glacier Chalet',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    text: 'I travel internationally 15+ times a year. The verified stays guarantee is real—the ski chalet in Zermatt exceeded five-star standards. Real-time dynamic pricing with zero hidden checkout fees is deeply refreshing.'
  },
  {
    name: 'Aiko Tanaka',
    role: 'Creative Director',
    location: 'Tokyo, Japan',
    trip: 'Stayed in Hôtel Plaza Athénée, Paris',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
    text: 'Stackly’s curation is impeccable. Every single hotel feels carefully vetted. Our Paris stay on Avenue Montaigne was divine, and when our flight got delayed, their support team instantly modified our check-in seamlessly.'
  },
  {
    name: 'David & Sarah Chen',
    role: 'Family Travelers',
    location: 'San Francisco, USA',
    trip: 'Stayed in Banff Fairmont Chateau',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=200&q=80',
    text: 'Traveling with two young kids is rarely simple, but the room configuration and instant verification made our Banff holiday a dream. The lakeside view was surreal and customer care answered all questions within 3 minutes.'
  },
  {
    name: 'Sophia Lindqvist',
    role: 'Photojournalist',
    location: 'Stockholm, Sweden',
    trip: 'Stayed in Positano Seaside Villa, Amalfi',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
    text: 'I fell in love with the interface first, then the actual travel experience blew me away. The Amalfi cliffside stay was magical. I have already saved four more dream destinations to my Stackly wishlist!'
  }
];

// -------------------------------------------------------------------
// 2. STATE MANAGEMENT & STORAGE
// -------------------------------------------------------------------

const STORAGE_KEYS = {
  WISHLIST: 'voyagevista_wishlist',
  SUBSCRIBERS: 'voyagevista_subscribers',
  BOOKINGS: 'voyagevista_bookings',
  USER: 'voyagevista_auth_user',
  CURRENCY: 'voyagevista_currency'
};

const CURRENCY_RATES = {
  USD: { symbol: '$', rate: 1.0 },
  EUR: { symbol: '€', rate: 0.92 },
  GBP: { symbol: '£', rate: 0.79 },
  INR: { symbol: '₹', rate: 84.5 }
};

let currentCurrency = 'USD';
let activeDestinationCategory = 'all';
let appliedPromo = null;
let currentBookingHotel = null;

// Testimonials Slider State
let currentSlideIndex = 0;
let sliderAutoplayTimer = null;

// Wishlist LocalStorage Store
let wishlist = [];
try {
  const saved = localStorage.getItem(STORAGE_KEYS.WISHLIST);
  wishlist = saved ? JSON.parse(saved) : [];
} catch (e) {
  wishlist = [];
}

// -------------------------------------------------------------------
// 3. INITIALIZATION & DOM READY
// -------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize AOS animation library
  if (typeof AOS !== 'undefined') {
    AOS.init({
      once: true,
      duration: 800,
      offset: 60,
      easing: 'ease-out-cubic'
    });
  }

  // 2. Setup Default Dates
  setupDefaultDates();

  // 3. Render Dynamic Components
  renderDestinations(DESTINATIONS_DATA);
  renderHotels(HOTELS_DATA);
  renderOffers(OFFERS_DATA);
  initTestimonialSlider();

  // 4. Update Wishlist UI
  updateWishlistUI();

  // 5. Setup User Auth State
  checkUserAuthState();

  // 6. Bind All Event Listeners
  bindNavigationEvents();
  bindSearchEvents();
  bindHotelFilterEvents();
  bindBookingModalEvents();
  bindWishlistEvents();
  bindAuthModalEvents();
  bindNewsletterEvents();
  bindCurrencyEvents();
  bindScrollEvents();
});

// -------------------------------------------------------------------
// 4. HELPER & FORMATTING UTILITIES
// -------------------------------------------------------------------

function formatCurrency(amountUSD) {
  const info = CURRENCY_RATES[currentCurrency] || CURRENCY_RATES.USD;
  const converted = Math.round(amountUSD * info.rate);
  return `${info.symbol}${converted.toLocaleString()}`;
}

function showToast(message, type = 'info', iconClass = null) {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;

  let icon = 'fa-solid fa-circle-info';
  if (type === 'success') icon = 'fa-solid fa-circle-check';
  if (type === 'error') icon = 'fa-solid fa-circle-exclamation';
  if (iconClass) icon = iconClass;

  toast.innerHTML = `
    <i class="${icon}"></i>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('hide');
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 3500);
}

function setupDefaultDates() {
  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 2);
  const checkout = new Date();
  checkout.setDate(today.getDate() + 6);

  const formatDate = (d) => d.toISOString().split('T')[0];

  const checkInInput = document.getElementById('checkInDate');
  const checkOutInput = document.getElementById('checkOutDate');
  const bookCheckIn = document.getElementById('bookCheckIn');
  const bookCheckOut = document.getElementById('bookCheckOut');

  const todayStr = formatDate(today);
  const tomorrowStr = formatDate(tomorrow);
  const checkoutStr = formatDate(checkout);

  if (checkInInput) {
    checkInInput.min = todayStr;
    checkInInput.value = tomorrowStr;
  }
  if (checkOutInput) {
    checkOutInput.min = tomorrowStr;
    checkOutInput.value = checkoutStr;
  }
  if (bookCheckIn) {
    bookCheckIn.min = todayStr;
    bookCheckIn.value = tomorrowStr;
  }
  if (bookCheckOut) {
    bookCheckOut.min = tomorrowStr;
    bookCheckOut.value = checkoutStr;
  }

  // Update checkOut min date whenever checkIn changes
  if (checkInInput && checkOutInput) {
    checkInInput.addEventListener('change', () => {
      const selected = new Date(checkInInput.value);
      selected.setDate(selected.getDate() + 1);
      checkOutInput.min = formatDate(selected);
      if (new Date(checkOutInput.value) <= new Date(checkInInput.value)) {
        checkOutInput.value = formatDate(selected);
      }
    });
  }

  if (bookCheckIn && bookCheckOut) {
    bookCheckIn.addEventListener('change', () => {
      const selected = new Date(bookCheckIn.value);
      selected.setDate(selected.getDate() + 1);
      bookCheckOut.min = formatDate(selected);
      if (new Date(bookCheckOut.value) <= new Date(bookCheckIn.value)) {
        bookCheckOut.value = formatDate(selected);
      }
      recalculateBookingPrice();
    });
    bookCheckOut.addEventListener('change', recalculateBookingPrice);
  }
}

// -------------------------------------------------------------------
// 5. DESTINATIONS RENDERING & FILTERING
// -------------------------------------------------------------------

function renderDestinations(data) {
  const grid = document.getElementById('destinationsGrid');
  if (!grid) return;

  grid.innerHTML = '';
  data.forEach((dest, index) => {
    const card = document.createElement('div');
    card.className = 'destination-card';
    card.setAttribute('data-aos', 'fade-up');
    card.setAttribute('data-aos-delay', (index * 75).toString());
    card.innerHTML = `
      <div class="destination-img-wrap">
        <img src="${dest.image}" alt="${dest.name}" loading="lazy">
        <div class="destination-overlay">
          <span class="destination-badge">${dest.tag}</span>
          <div class="destination-content">
            <span class="destination-country"><i class="fa-solid fa-location-dot"></i> ${dest.country}</span>
            <h3 class="destination-name">${dest.name}</h3>
            <div class="destination-info-row">
              <span class="destination-stays-count"><i class="fa-solid fa-hotel"></i> ${dest.staysCount} Luxury Stays</span>
              <span class="destination-price">From <strong>${formatCurrency(dest.price)}</strong> / night</span>
            </div>
          </div>
        </div>
      </div>
    `;

    // Click card to search and filter hotels by this destination!
    card.addEventListener('click', () => {
      filterHotelsByDestination(dest.shortName);
    });

    grid.appendChild(card);
  });
}

function filterHotelsByDestination(cityName) {
  const keywordInput = document.getElementById('hotelKeywordInput');
  if (keywordInput) {
    keywordInput.value = cityName;
  }
  const searchInput = document.getElementById('searchDestination');
  if (searchInput) {
    searchInput.value = cityName;
  }
  applyHotelFilters();

  const hotelsSection = document.getElementById('hotels');
  if (hotelsSection) {
    hotelsSection.scrollIntoView({ behavior: 'smooth' });
  }
  showToast(`Showing luxury stays in ${cityName}`, 'info');
}

// -------------------------------------------------------------------
// 6. FEATURED HOTELS RENDERING & FILTERING
// -------------------------------------------------------------------

function renderHotels(hotels) {
  const grid = document.getElementById('hotelsGrid');
  const countDisplay = document.getElementById('hotelCountDisplay');
  const emptyState = document.getElementById('noHotelsFound');

  if (!grid) return;

  grid.innerHTML = '';

  if (hotels.length === 0) {
    if (emptyState) emptyState.classList.remove('hidden');
    if (countDisplay) countDisplay.textContent = 'Showing 0 hotels';
    return;
  }

  if (emptyState) emptyState.classList.add('hidden');
  if (countDisplay) {
    countDisplay.textContent = `Showing ${hotels.length} luxury ${hotels.length === 1 ? 'hotel' : 'hotels'}`;
  }

  hotels.forEach((hotel, idx) => {
    const isSaved = wishlist.includes(hotel.id);
    const card = document.createElement('div');
    card.className = 'hotel-card';
    card.setAttribute('data-aos', 'fade-up');
    card.setAttribute('data-aos-delay', (Math.min(idx, 6) * 60).toString());

    // Generate stars HTML
    const fullStars = Math.floor(hotel.starRating);
    let starsHtml = '';
    for (let i = 0; i < fullStars; i++) {
      starsHtml += '<i class="fa-solid fa-star"></i>';
    }
    if (hotel.starRating % 1 !== 0) {
      starsHtml += '<i class="fa-solid fa-star-half-stroke"></i>';
    }

    // Amenities pills
    const amenitiesHtml = hotel.amenities.map(a => {
      let icon = 'fa-solid fa-check';
      if (a.includes('Pool')) icon = 'fa-solid fa-water-ladder';
      if (a.includes('View')) icon = 'fa-solid fa-mountain';
      if (a.includes('Spa') || a.includes('Hot Spring')) icon = 'fa-solid fa-spa';
      if (a.includes('WiFi')) icon = 'fa-solid fa-wifi';
      if (a.includes('Dining') || a.includes('Breakfast')) icon = 'fa-solid fa-utensils';
      if (a.includes('Ski')) icon = 'fa-solid fa-person-skiing';
      if (a.includes('Beach')) icon = 'fa-solid fa-umbrella-beach';
      return `<span class="amenity-tag"><i class="${icon}"></i> ${a}</span>`;
    }).join('');

    card.innerHTML = `
      <div class="hotel-card-media">
        <img src="${hotel.image}" alt="${hotel.name}" loading="lazy">
        <span class="hotel-badge-tag">${hotel.badge}</span>
        <button class="hotel-wishlist-btn ${isSaved ? 'active' : ''}" data-id="${hotel.id}" aria-label="Toggle Wishlist" title="${isSaved ? 'Remove from saved' : 'Save to Wishlist'}">
          <i class="${isSaved ? 'fa-solid fa-heart' : 'fa-regular fa-heart'}"></i>
        </button>
      </div>

      <div class="hotel-card-body">
        <div class="hotel-location">
          <i class="fa-solid fa-location-dot"></i>
          <span>${hotel.location}</span>
        </div>
        <h3 class="hotel-name">${hotel.name}</h3>

        <div class="hotel-rating-row">
          <div class="star-rating">${starsHtml}</div>
          <span class="score-badge">${hotel.score.toFixed(1)}</span>
          <span class="review-count">(${hotel.reviewsCount} verified reviews)</span>
        </div>

        <div class="hotel-amenities-tags">
          ${amenitiesHtml}
        </div>

        <div class="hotel-card-footer">
          <div class="hotel-price-block">
            <span class="price-original">${formatCurrency(hotel.originalPrice)}</span>
            <div class="price-current">${formatCurrency(hotel.price)} <span>/ night</span></div>
          </div>
          <button class="btn btn-primary btn-book-hotel" data-id="${hotel.id}">
            Book Stay
          </button>
        </div>
      </div>
    `;

    // Wishlist Toggle
    const wishBtn = card.querySelector('.hotel-wishlist-btn');
    wishBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleWishlist(hotel.id);
    });

    // Book Now button
    const bookBtn = card.querySelector('.btn-book-hotel');
    bookBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      openBookingModal(hotel);
    });

    grid.appendChild(card);
  });
}

function applyHotelFilters() {
  const keywordInput = document.getElementById('hotelKeywordInput');
  const ratingFilter = document.getElementById('hotelRatingFilter');
  const priceInput = document.getElementById('priceRangeInput');
  const sortSelect = document.getElementById('hotelSortSelect');

  const query = (keywordInput ? keywordInput.value : '').trim().toLowerCase();
  const minRating = ratingFilter ? ratingFilter.value : 'all';
  const maxPrice = priceInput ? parseFloat(priceInput.value) : 950;
  const sort = sortSelect ? sortSelect.value : 'featured';

  let filtered = HOTELS_DATA.filter(hotel => {
    // Keyword search match
    if (query) {
      const matchName = hotel.name.toLowerCase().includes(query);
      const matchLoc = hotel.location.toLowerCase().includes(query);
      const matchCity = hotel.city.toLowerCase().includes(query);
      if (!matchName && !matchLoc && !matchCity) return false;
    }

    // Rating match
    if (minRating !== 'all') {
      const threshold = parseFloat(minRating);
      if (hotel.starRating < threshold) return false;
    }

    // Price match
    if (hotel.price > maxPrice) return false;

    return true;
  });

  // Sorting
  if (sort === 'price-low') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sort === 'price-high') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (sort === 'rating') {
    filtered.sort((a, b) => b.starRating - a.starRating || b.score - a.score);
  } else if (sort === 'reviews') {
    filtered.sort((a, b) => b.reviewsCount - a.reviewsCount);
  }

  renderHotels(filtered);
  updateActiveFilterTags(query, minRating, maxPrice);
}

function updateActiveFilterTags(query, minRating, maxPrice) {
  const tagsContainer = document.getElementById('activeFilterTags');
  if (!tagsContainer) return;
  tagsContainer.innerHTML = '';

  if (query) {
    const chip = createFilterChip(`Search: "${query}"`, () => {
      document.getElementById('hotelKeywordInput').value = '';
      applyHotelFilters();
    });
    tagsContainer.appendChild(chip);
  }

  if (minRating !== 'all') {
    const chip = createFilterChip(`${minRating}★ & above`, () => {
      document.getElementById('hotelRatingFilter').value = 'all';
      applyHotelFilters();
    });
    tagsContainer.appendChild(chip);
  }

  if (maxPrice < 950) {
    const chip = createFilterChip(`Under ${formatCurrency(maxPrice)}`, () => {
      const priceInput = document.getElementById('priceRangeInput');
      priceInput.value = 950;
      document.getElementById('priceRangeValue').textContent = formatCurrency(950);
      applyHotelFilters();
    });
    tagsContainer.appendChild(chip);
  }
}

function createFilterChip(text, onRemove) {
  const chip = document.createElement('span');
  chip.className = 'filter-tag-chip';
  chip.innerHTML = `${text} <i class="fa-solid fa-xmark"></i>`;
  chip.querySelector('i').addEventListener('click', onRemove);
  return chip;
}

// -------------------------------------------------------------------
// 7. SPECIAL OFFERS RENDERING & ONE-CLICK COUPON COPY
// -------------------------------------------------------------------

function renderOffers(offers) {
  const grid = document.getElementById('offersGrid');
  if (!grid) return;
  grid.innerHTML = '';

  offers.forEach((offer, idx) => {
    const card = document.createElement('div');
    card.className = 'offer-card';
    card.setAttribute('data-aos', 'fade-up');
    card.setAttribute('data-aos-delay', (idx * 100).toString());
    card.innerHTML = `
      <div class="offer-card-header">
        <img src="${offer.image}" alt="${offer.title}" loading="lazy">
        <span class="offer-ribbon">${offer.discount}</span>
      </div>
      <div class="offer-body">
        <span class="offer-tag"><i class="fa-solid fa-bolt"></i> Exclusive Deal</span>
        <h3 class="offer-title">${offer.title}</h3>
        <p class="offer-description">${offer.description}</p>
        <div class="offer-validity">
          <i class="fa-regular fa-clock"></i>
          <span>${offer.validUntil}</span>
        </div>
        <div class="coupon-box">
          <div class="coupon-details">
            <span class="coupon-label">Promo Code</span>
            <span class="coupon-code">${offer.code}</span>
          </div>
          <button class="btn-copy-code" data-code="${offer.code}">
            <i class="fa-regular fa-copy"></i> <span>Copy Code</span>
          </button>
        </div>
      </div>
    `;

    const copyBtn = card.querySelector('.btn-copy-code');
    copyBtn.addEventListener('click', () => {
      copyCouponCode(offer.code, copyBtn);
    });

    grid.appendChild(card);
  });
}

function copyCouponCode(code, buttonElement) {
  navigator.clipboard.writeText(code).then(() => {
    buttonElement.classList.add('copied');
    buttonElement.innerHTML = '<i class="fa-solid fa-check"></i> <span>Copied!</span>';
    showToast(`Coupon code "${code}" copied to clipboard! Paste it at booking checkout.`, 'success');

    setTimeout(() => {
      buttonElement.classList.remove('copied');
      buttonElement.innerHTML = '<i class="fa-regular fa-copy"></i> <span>Copy Code</span>';
    }, 2800);
  }).catch(() => {
    // Fallback for older browsers
    const ta = document.createElement('textarea');
    ta.value = code;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);

    buttonElement.classList.add('copied');
    buttonElement.innerHTML = '<i class="fa-solid fa-check"></i> <span>Copied!</span>';
    showToast(`Coupon code "${code}" copied!`, 'success');
    setTimeout(() => {
      buttonElement.classList.remove('copied');
      buttonElement.innerHTML = '<i class="fa-regular fa-copy"></i> <span>Copy Code</span>';
    }, 2800);
  });
}

// -------------------------------------------------------------------
// 8. TESTIMONIALS SLIDER ENGINE
// -------------------------------------------------------------------

function initTestimonialSlider() {
  const track = document.getElementById('testimonialsTrack');
  const dotsContainer = document.getElementById('sliderDots');
  const prevBtn = document.getElementById('sliderPrevBtn');
  const nextBtn = document.getElementById('sliderNextBtn');

  if (!track || !dotsContainer) return;

  track.innerHTML = '';
  dotsContainer.innerHTML = '';

  TESTIMONIALS_DATA.forEach((item) => {
    const card = document.createElement('div');
    card.className = 'testimonial-card';
    card.innerHTML = `
      <div class="testimonial-inner">
        <i class="fa-solid fa-quote-left testimonial-quote-icon"></i>
        <div class="testimonial-stars">
          ${'<i class="fa-solid fa-star"></i>'.repeat(item.rating)}
        </div>
        <p class="testimonial-text">"${item.text}"</p>
        <div class="testimonial-author-row">
          <img src="${item.avatar}" alt="${item.name}" class="testimonial-avatar" loading="lazy">
          <div class="testimonial-meta">
            <span class="author-name">${item.name}</span>
            <span class="author-location">${item.role} • ${item.location}</span>
            <span class="author-trip"><i class="fa-solid fa-circle-check"></i> ${item.trip}</span>
          </div>
        </div>
      </div>
    `;
    track.appendChild(card);
  });

  // Calculate total slides depending on screen width
  const totalSlides = TESTIMONIALS_DATA.length;
  for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement('span');
    dot.className = `slider-dot ${i === 0 ? 'active' : ''}`;
    dot.setAttribute('data-index', i.toString());
    dot.addEventListener('click', () => {
      goToSlide(i);
    });
    dotsContainer.appendChild(dot);
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      goToSlide(currentSlideIndex - 1);
    });
  }
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      goToSlide(currentSlideIndex + 1);
    });
  }

  // Start Autoplay
  startSliderAutoplay();

  // Pause autoplay on mouse hover
  const container = document.getElementById('testimonialsTrackContainer');
  if (container) {
    container.addEventListener('mouseenter', stopSliderAutoplay);
    container.addEventListener('mouseleave', startSliderAutoplay);
  }
}

function getCardsPerView() {
  if (window.innerWidth >= 1024) return 3;
  if (window.innerWidth >= 768) return 2;
  return 1;
}

function goToSlide(index) {
  const track = document.getElementById('testimonialsTrack');
  const dots = document.querySelectorAll('.slider-dot');
  if (!track) return;

  const cardsPerView = getCardsPerView();
  const maxIndex = TESTIMONIALS_DATA.length - cardsPerView;

  if (index < 0) {
    currentSlideIndex = maxIndex;
  } else if (index > maxIndex) {
    currentSlideIndex = 0;
  } else {
    currentSlideIndex = index;
  }

  const shiftPercentage = (100 / cardsPerView) * currentSlideIndex;
  track.style.transform = `translateX(-${shiftPercentage}%)`;

  dots.forEach((dot, idx) => {
    dot.classList.toggle('active', idx === currentSlideIndex);
  });
}

function startSliderAutoplay() {
  stopSliderAutoplay();
  sliderAutoplayTimer = setInterval(() => {
    goToSlide(currentSlideIndex + 1);
  }, 5000);
}

function stopSliderAutoplay() {
  if (sliderAutoplayTimer) {
    clearInterval(sliderAutoplayTimer);
    sliderAutoplayTimer = null;
  }
}

window.addEventListener('resize', () => {
  goToSlide(currentSlideIndex);
});

// -------------------------------------------------------------------
// 9. DYNAMIC BOOKING MODAL & PRICE CALCULATION
// -------------------------------------------------------------------

function openBookingModal(hotel) {
  currentBookingHotel = hotel;
  appliedPromo = null;

  const modalBackdrop = document.getElementById('bookingModalBackdrop');
  const modalHotelImg = document.getElementById('bookingModalHotelImage');
  const modalHotelName = document.getElementById('bookingModalHotelName');
  const modalHotelLoc = document.getElementById('bookingModalHotelLocation');
  const modalHotelRating = document.getElementById('bookingModalHotelRating');
  const modalRate = document.getElementById('bookingModalRate');
  const couponInput = document.getElementById('bookCouponCode');
  const couponMsg = document.getElementById('couponFeedbackMsg');

  if (modalHotelImg) modalHotelImg.src = hotel.image;
  if (modalHotelName) modalHotelName.textContent = hotel.name;
  if (modalHotelLoc) {
    modalHotelLoc.innerHTML = `<i class="fa-solid fa-location-dot"></i> ${hotel.location}`;
  }
  if (modalHotelRating) {
    modalHotelRating.innerHTML = `
      <i class="fa-solid fa-star"></i> <strong>${hotel.starRating.toFixed(1)}</strong> 
      (${hotel.reviewsCount} reviews) • <span style="color: var(--sky-blue); font-weight: 600;">Verified Luxury</span>
    `;
  }
  if (modalRate) modalRate.textContent = formatCurrency(hotel.price);
  if (couponInput) couponInput.value = '';
  if (couponMsg) {
    couponMsg.textContent = '';
    couponMsg.className = 'coupon-msg';
  }

  const discountRow = document.getElementById('breakdownDiscountRow');
  if (discountRow) discountRow.classList.add('hidden');

  // Pre-fill user details if logged in
  try {
    const savedUser = localStorage.getItem(STORAGE_KEYS.USER);
    if (savedUser) {
      const user = JSON.parse(savedUser);
      const nameInput = document.getElementById('bookFullName');
      const emailInput = document.getElementById('bookEmail');
      if (nameInput && user.name) nameInput.value = user.name;
      if (emailInput && user.email) emailInput.value = user.email;
    }
  } catch (e) {}

  recalculateBookingPrice();

  if (modalBackdrop) {
    modalBackdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeBookingModal() {
  const modalBackdrop = document.getElementById('bookingModalBackdrop');
  if (modalBackdrop) {
    modalBackdrop.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function calculateNights(checkInDateStr, checkOutDateStr) {
  const start = new Date(checkInDateStr);
  const end = new Date(checkOutDateStr);
  const diffTime = end.getTime() - start.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays > 0 ? diffDays : 1;
}

function recalculateBookingPrice() {
  if (!currentBookingHotel) return;

  const checkIn = document.getElementById('bookCheckIn').value;
  const checkOut = document.getElementById('bookCheckOut').value;
  const roomSelect = document.getElementById('bookRoomType');

  const nights = calculateNights(checkIn, checkOut);
  const roomMultiplier = roomSelect ? parseFloat(roomSelect.selectedOptions[0].dataset.multiplier || 1.0) : 1.0;

  const baseRatePerNight = Math.round(currentBookingHotel.price * roomMultiplier);
  const baseSubtotal = baseRatePerNight * nights;
  const taxes = Math.round(baseSubtotal * 0.12); // 12% taxes & fees

  let discount = 0;
  if (appliedPromo) {
    if (appliedPromo.type === 'percent') {
      discount = Math.round((baseSubtotal + taxes) * (appliedPromo.percent / 100));
    } else if (appliedPromo.type === 'flat') {
      discount = appliedPromo.flatAmount;
    }
  }

  const grandTotal = Math.max(0, baseSubtotal + taxes - discount);

  // Update DOM labels
  const nightsLabel = document.getElementById('breakdownNightsLabel');
  const basePriceEl = document.getElementById('breakdownBasePrice');
  const taxesEl = document.getElementById('breakdownTaxes');
  const discountRow = document.getElementById('breakdownDiscountRow');
  const discountPercentEl = document.getElementById('breakdownDiscountPercent');
  const discountAmountEl = document.getElementById('breakdownDiscountAmount');
  const totalPriceEl = document.getElementById('breakdownTotalPrice');

  if (nightsLabel) {
    nightsLabel.textContent = `Rate (${formatCurrency(baseRatePerNight)} × ${nights} ${nights === 1 ? 'night' : 'nights'})`;
  }
  if (basePriceEl) basePriceEl.textContent = formatCurrency(baseSubtotal);
  if (taxesEl) taxesEl.textContent = formatCurrency(taxes);

  if (appliedPromo && discount > 0) {
    if (discountRow) discountRow.classList.remove('hidden');
    if (discountPercentEl) {
      discountPercentEl.textContent = appliedPromo.type === 'percent' ? `${appliedPromo.percent}%` : `$${appliedPromo.flatAmount} Flat`;
    }
    if (discountAmountEl) discountAmountEl.textContent = `-${formatCurrency(discount)}`;
  } else {
    if (discountRow) discountRow.classList.add('hidden');
  }

  if (totalPriceEl) totalPriceEl.textContent = formatCurrency(grandTotal);

  return { nights, baseSubtotal, taxes, discount, grandTotal };
}

function handleApplyCoupon() {
  const codeInput = document.getElementById('bookCouponCode');
  const feedback = document.getElementById('couponFeedbackMsg');
  if (!codeInput || !feedback) return;

  const entered = codeInput.value.trim().toUpperCase();
  if (!entered) {
    feedback.textContent = 'Please enter a coupon code.';
    feedback.className = 'coupon-msg error';
    return;
  }

  const match = OFFERS_DATA.find(o => o.code === entered);
  if (match) {
    appliedPromo = match;
    feedback.textContent = `Coupon "${match.code}" applied! You unlocked ${match.discount}.`;
    feedback.className = 'coupon-msg success';
    recalculateBookingPrice();
    showToast(`Promo ${match.code} applied successfully!`, 'success');
  } else {
    feedback.textContent = 'Invalid promo code. Try SPRING35 or WANDER20.';
    feedback.className = 'coupon-msg error';
  }
}

function handleBookingSubmit(e) {
  e.preventDefault();

  const nameInput = document.getElementById('bookFullName');
  const emailInput = document.getElementById('bookEmail');
  const checkIn = document.getElementById('bookCheckIn').value;
  const checkOut = document.getElementById('bookCheckOut').value;
  const guests = document.getElementById('bookGuests').value;

  if (!nameInput.value.trim() || !emailInput.value.trim()) {
    showToast('Please provide your full name and email address.', 'error');
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInput.value.trim())) {
    showToast('Please enter a valid email address.', 'error');
    return;
  }

  const priceCalc = recalculateBookingPrice();
  const refCode = 'VV-' + Math.floor(100000 + Math.random() * 900000);

  // Store Booking in LocalStorage
  const newBooking = {
    reference: refCode,
    hotelId: currentBookingHotel.id,
    hotelName: currentBookingHotel.name,
    hotelLocation: currentBookingHotel.location,
    guestName: nameInput.value.trim(),
    guestEmail: emailInput.value.trim(),
    checkIn,
    checkOut,
    nights: priceCalc.nights,
    guests,
    totalPaid: priceCalc.grandTotal,
    dateBooked: new Date().toISOString()
  };

  try {
    const existing = JSON.parse(localStorage.getItem(STORAGE_KEYS.BOOKINGS) || '[]');
    existing.push(newBooking);
    localStorage.setItem(STORAGE_KEYS.BOOKINGS, JSON.stringify(existing));
  } catch (err) {}

  closeBookingModal();

  // Show Confirmation Receipt Modal
  const successModal = document.getElementById('successModalBackdrop');
  const receiptRef = document.getElementById('receiptRef');
  const receiptHotel = document.getElementById('receiptHotel');
  const receiptGuest = document.getElementById('receiptGuest');
  const receiptDates = document.getElementById('receiptDates');
  const receiptTotal = document.getElementById('receiptTotal');

  if (receiptRef) receiptRef.textContent = refCode;
  if (receiptHotel) receiptHotel.textContent = currentBookingHotel.name;
  if (receiptGuest) receiptGuest.textContent = nameInput.value.trim();
  if (receiptDates) {
    receiptDates.textContent = `${checkIn} to ${checkOut} (${priceCalc.nights} ${priceCalc.nights === 1 ? 'night' : 'nights'})`;
  }
  if (receiptTotal) receiptTotal.textContent = formatCurrency(priceCalc.grandTotal);

  if (successModal) {
    successModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  showToast('Booking successfully reserved and confirmed!', 'success');
}

// -------------------------------------------------------------------
// 10. WISHLIST MANAGEMENT (LocalStorage)
// -------------------------------------------------------------------

function toggleWishlist(hotelId) {
  const hotel = HOTELS_DATA.find(h => h.id === hotelId);
  if (!hotel) return;

  const index = wishlist.indexOf(hotelId);
  const isAdding = index === -1;

  if (isAdding) {
    wishlist.push(hotelId);
    showToast(`"${hotel.name}" saved to your Wishlist!`, 'success', 'fa-solid fa-heart');
  } else {
    wishlist.splice(index, 1);
    showToast(`Removed from your Wishlist.`, 'info');
  }

  try {
    localStorage.setItem(STORAGE_KEYS.WISHLIST, JSON.stringify(wishlist));
  } catch (e) {}

  // Update card buttons across document
  document.querySelectorAll(`.hotel-wishlist-btn[data-id="${hotelId}"]`).forEach(btn => {
    btn.classList.toggle('active', isAdding);
    btn.setAttribute('title', isAdding ? 'Remove from saved' : 'Save to Wishlist');
    btn.innerHTML = `<i class="${isAdding ? 'fa-solid fa-heart' : 'fa-regular fa-heart'}"></i>`;
  });

  updateWishlistUI();
}

function updateWishlistUI() {
  const countBadge = document.getElementById('wishlistCount');
  const drawerCount = document.getElementById('wishlistDrawerCount');
  const count = wishlist.length;

  if (countBadge) {
    countBadge.textContent = count;
    countBadge.classList.remove('bounce');
    void countBadge.offsetWidth; // Trigger reflow
    countBadge.classList.add('bounce');
  }

  if (drawerCount) drawerCount.textContent = count;

  renderWishlistDrawerItems();
}

function renderWishlistDrawerItems() {
  const container = document.getElementById('wishlistItemsContainer');
  const clearBtn = document.getElementById('clearWishlistBtn');
  if (!container) return;

  container.innerHTML = '';

  if (wishlist.length === 0) {
    container.innerHTML = `
      <div class="wishlist-empty-msg">
        <i class="fa-regular fa-heart"></i>
        <h4>Your Wishlist is Empty</h4>
        <p>Explore our luxury hotels and click the heart icon on any stay to bookmark your favorites.</p>
      </div>
    `;
    if (clearBtn) clearBtn.style.display = 'none';
    return;
  }

  if (clearBtn) clearBtn.style.display = 'inline-flex';

  wishlist.forEach(id => {
    const hotel = HOTELS_DATA.find(h => h.id === id);
    if (!hotel) return;

    const item = document.createElement('div');
    item.className = 'wishlist-item';
    item.innerHTML = `
      <img src="${hotel.image}" alt="${hotel.name}">
      <div class="wishlist-item-info">
        <h4 class="wishlist-item-title">${hotel.name}</h4>
        <span class="wishlist-item-loc"><i class="fa-solid fa-location-dot"></i> ${hotel.city}</span>
        <span class="wishlist-item-price">${formatCurrency(hotel.price)} / night</span>
      </div>
      <div class="wishlist-item-actions">
        <button class="btn btn-primary btn-sm btn-item-book" data-id="${hotel.id}">Book</button>
        <button class="btn-item-remove" data-id="${hotel.id}" title="Remove"><i class="fa-solid fa-trash"></i></button>
      </div>
    `;

    item.querySelector('.btn-item-book').addEventListener('click', () => {
      closeWishlistDrawer();
      openBookingModal(hotel);
    });

    item.querySelector('.btn-item-remove').addEventListener('click', () => {
      toggleWishlist(hotel.id);
    });

    container.appendChild(item);
  });
}

function openWishlistDrawer() {
  const drawer = document.getElementById('wishlistDrawer');
  const backdrop = document.getElementById('wishlistBackdrop');
  if (drawer) drawer.classList.add('open');
  if (backdrop) backdrop.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeWishlistDrawer() {
  const drawer = document.getElementById('wishlistDrawer');
  const backdrop = document.getElementById('wishlistBackdrop');
  if (drawer) drawer.classList.remove('open');
  if (backdrop) backdrop.classList.remove('active');
  document.body.style.overflow = '';
}

function clearAllWishlist() {
  wishlist = [];
  try {
    localStorage.removeItem(STORAGE_KEYS.WISHLIST);
  } catch (e) {}

  document.querySelectorAll('.hotel-wishlist-btn').forEach(btn => {
    btn.classList.remove('active');
    btn.innerHTML = '<i class="fa-regular fa-heart"></i>';
  });

  updateWishlistUI();
  showToast('Cleared all items from your Wishlist.', 'info');
}

// -------------------------------------------------------------------
// 11. SEARCH ENGINE & GUEST POPOVER
// -------------------------------------------------------------------

let guestCountState = {
  adults: 2,
  children: 0,
  rooms: 1
};

function bindSearchEvents() {
  const searchInput = document.getElementById('searchDestination');
  const suggestionsBox = document.getElementById('destinationSuggestions');
  const form = document.getElementById('heroSearchForm');
  const guestTrigger = document.getElementById('guestsDropdownTrigger');
  const guestPopover = document.getElementById('guestPopover');
  const applyGuestsBtn = document.getElementById('applyGuestsBtn');

  // Destination Autocomplete
  if (searchInput && suggestionsBox) {
    searchInput.addEventListener('input', () => {
      const val = searchInput.value.trim().toLowerCase();
      if (!val) {
        suggestionsBox.classList.remove('open');
        return;
      }

      const matches = DESTINATIONS_DATA.filter(d => 
        d.name.toLowerCase().includes(val) || d.country.toLowerCase().includes(val)
      );

      if (matches.length > 0) {
        suggestionsBox.innerHTML = matches.map(m => `
          <div class="suggestion-item" data-name="${m.shortName}">
            <i class="fa-solid fa-location-dot"></i>
            <div>
              <strong>${m.name}</strong>
              <div style="font-size: 0.75rem; color: #64748b;">${m.staysCount} curated stays from ${formatCurrency(m.price)}</div>
            </div>
          </div>
        `).join('');
        suggestionsBox.classList.add('open');

        suggestionsBox.querySelectorAll('.suggestion-item').forEach(item => {
          item.addEventListener('click', () => {
            searchInput.value = item.dataset.name;
            suggestionsBox.classList.remove('open');
          });
        });
      } else {
        suggestionsBox.classList.remove('open');
      }
    });

    document.addEventListener('click', (e) => {
      if (!searchInput.contains(e.target) && !suggestionsBox.contains(e.target)) {
        suggestionsBox.classList.remove('open');
      }
    });
  }

  // Guest popover toggle
  if (guestTrigger && guestPopover) {
    guestTrigger.addEventListener('click', (e) => {
      if (guestPopover.contains(e.target)) return;
      guestPopover.classList.toggle('open');
      guestTrigger.classList.toggle('active');
    });

    document.addEventListener('click', (e) => {
      if (!guestTrigger.contains(e.target)) {
        guestPopover.classList.remove('open');
        guestTrigger.classList.remove('active');
      }
    });
  }

  // Guest counters (+/-)
  document.querySelectorAll('.btn-counter').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const action = btn.dataset.action;
      const target = btn.dataset.target;
      const valEl = document.getElementById(target);
      if (!valEl) return;

      let val = parseInt(valEl.textContent);
      if (target === 'adultsCount') {
        if (action === 'increase' && val < 8) val++;
        if (action === 'decrease' && val > 1) val--;
        guestCountState.adults = val;
      } else if (target === 'childrenCount') {
        if (action === 'increase' && val < 6) val++;
        if (action === 'decrease' && val > 0) val--;
        guestCountState.children = val;
      } else if (target === 'roomsCount') {
        if (action === 'increase' && val < 5) val++;
        if (action === 'decrease' && val > 1) val--;
        guestCountState.rooms = val;
      }
      valEl.textContent = val;
      updateGuestSummaryText();
    });
  });

  if (applyGuestsBtn && guestPopover) {
    applyGuestsBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      guestPopover.classList.remove('open');
      if (guestTrigger) guestTrigger.classList.remove('active');
    });
  }

  // Hero Search Form Submission
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const destination = (searchInput ? searchInput.value : '').trim();
      const checkIn = document.getElementById('checkInDate').value;
      const checkOut = document.getElementById('checkOutDate').value;
      const alertBox = document.getElementById('searchAlert');

      // Date validation
      if (!checkIn || !checkOut) {
        showSearchAlert('Please choose valid check-in and check-out dates.');
        return;
      }

      if (new Date(checkOut) <= new Date(checkIn)) {
        showSearchAlert('Check-out date must be after check-in date.');
        return;
      }

      if (alertBox) alertBox.style.display = 'none';

      // Apply to Hotel Search
      const hotelSearchInput = document.getElementById('hotelKeywordInput');
      if (hotelSearchInput) {
        hotelSearchInput.value = destination;
      }
      applyHotelFilters();

      // Scroll to hotels section
      const hotelsSection = document.getElementById('hotels');
      if (hotelsSection) {
        hotelsSection.scrollIntoView({ behavior: 'smooth' });
      }

      showToast(`Showing hotels for ${destination || 'all destinations'} (${guestCountState.adults} Adults, ${guestCountState.rooms} ${guestCountState.rooms === 1 ? 'Room' : 'Rooms'})`, 'success');
    });
  }
}

function updateGuestSummaryText() {
  const summaryEl = document.getElementById('guestSummaryText');
  if (!summaryEl) return;
  const { adults, children, rooms } = guestCountState;
  let text = `${adults} ${adults === 1 ? 'Adult' : 'Adults'}`;
  if (children > 0) {
    text += `, ${children} ${children === 1 ? 'Child' : 'Children'}`;
  }
  text += `, ${rooms} ${rooms === 1 ? 'Room' : 'Rooms'}`;
  summaryEl.textContent = text;
}

function showSearchAlert(msg) {
  const alertBox = document.getElementById('searchAlert');
  if (alertBox) {
    alertBox.textContent = msg;
    alertBox.style.display = 'block';
  }
  showToast(msg, 'error');
}

// -------------------------------------------------------------------
// 12. HOTEL CONTROLS & LISTENERS
// -------------------------------------------------------------------

function bindHotelFilterEvents() {
  const keywordInput = document.getElementById('hotelKeywordInput');
  const ratingFilter = document.getElementById('hotelRatingFilter');
  const priceInput = document.getElementById('priceRangeInput');
  const priceValue = document.getElementById('priceRangeValue');
  const sortSelect = document.getElementById('hotelSortSelect');
  const resetBtn = document.getElementById('resetFiltersBtn');
  const emptyResetBtn = document.getElementById('emptyResetBtn');

  if (keywordInput) keywordInput.addEventListener('input', applyHotelFilters);
  if (ratingFilter) ratingFilter.addEventListener('change', applyHotelFilters);
  if (sortSelect) sortSelect.addEventListener('change', applyHotelFilters);

  if (priceInput && priceValue) {
    priceInput.addEventListener('input', () => {
      priceValue.textContent = formatCurrency(parseFloat(priceInput.value));
      applyHotelFilters();
    });
  }

  const resetAll = () => {
    if (keywordInput) keywordInput.value = '';
    if (ratingFilter) ratingFilter.value = 'all';
    if (priceInput) priceInput.value = 950;
    if (priceValue) priceValue.textContent = formatCurrency(950);
    if (sortSelect) sortSelect.value = 'featured';

    const destSearch = document.getElementById('searchDestination');
    if (destSearch) destSearch.value = '';

    applyHotelFilters();
    showToast('Reset all filters to default', 'info');
  };

  if (resetBtn) resetBtn.addEventListener('click', resetAll);
  if (emptyResetBtn) emptyResetBtn.addEventListener('click', resetAll);

  // Destination category filter pills
  const pills = document.querySelectorAll('#destinationFilterPills .filter-pill');
  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      pills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      const cat = pill.dataset.category;
      activeDestinationCategory = cat;

      if (cat === 'all') {
        renderDestinations(DESTINATIONS_DATA);
      } else {
        const filtered = DESTINATIONS_DATA.filter(d => d.category === cat);
        renderDestinations(filtered);
      }
    });
  });
}

// -------------------------------------------------------------------
// 13. MODALS, DRAWERS & NAVIGATION BINDINGS
// -------------------------------------------------------------------

function bindNavigationEvents() {
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const drawerCloseBtn = document.getElementById('drawerCloseBtn');
  const drawerOverlay = document.getElementById('drawerOverlay');
  const drawerLoginBtn = document.getElementById('drawerLoginBtn');

  const openMobileMenu = () => {
    if (mobileDrawer) mobileDrawer.classList.add('open');
    if (drawerOverlay) drawerOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeMobileMenu = () => {
    if (mobileDrawer) mobileDrawer.classList.remove('open');
    if (drawerOverlay) drawerOverlay.classList.remove('active');
    document.body.style.overflow = '';
  };

  if (hamburgerBtn) hamburgerBtn.addEventListener('click', openMobileMenu);
  if (drawerCloseBtn) drawerCloseBtn.addEventListener('click', closeMobileMenu);
  if (drawerOverlay) drawerOverlay.addEventListener('click', closeMobileMenu);

  document.querySelectorAll('.drawer-nav-link').forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });

  if (drawerLoginBtn) {
    drawerLoginBtn.addEventListener('click', () => {
      closeMobileMenu();
      openAuthModal();
    });
  }

  // Top destination links in footer
  document.querySelectorAll('.dest-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const destName = link.dataset.dest;
      filterHotelsByDestination(destName);
    });
  });
}

function bindBookingModalEvents() {
  const bookingCloseBtn = document.getElementById('bookingModalCloseBtn');
  const bookingBackdrop = document.getElementById('bookingModalBackdrop');
  const applyCouponBtn = document.getElementById('applyCouponBtn');
  const bookingForm = document.getElementById('bookingForm');
  const roomSelect = document.getElementById('bookRoomType');
  const successBackdrop = document.getElementById('successModalBackdrop');
  const closeSuccessModalBtn = document.getElementById('closeSuccessModalBtn');

  if (bookingCloseBtn) bookingCloseBtn.addEventListener('click', closeBookingModal);

  if (bookingBackdrop) {
    bookingBackdrop.addEventListener('click', (e) => {
      if (e.target === bookingBackdrop) closeBookingModal();
    });
  }

  if (roomSelect) {
    roomSelect.addEventListener('change', recalculateBookingPrice);
  }

  if (applyCouponBtn) {
    applyCouponBtn.addEventListener('click', handleApplyCoupon);
  }

  if (bookingForm) {
    bookingForm.addEventListener('submit', handleBookingSubmit);
  }

  if (closeSuccessModalBtn) {
    closeSuccessModalBtn.addEventListener('click', () => {
      if (successBackdrop) successBackdrop.classList.remove('active');
      document.body.style.overflow = '';
    });
  }
}

function bindWishlistEvents() {
  const openBtn = document.getElementById('wishlistOpenBtn');
  const closeBtn = document.getElementById('wishlistCloseBtn');
  const backdrop = document.getElementById('wishlistBackdrop');
  const clearBtn = document.getElementById('clearWishlistBtn');
  const browseBtn = document.getElementById('wishlistBrowseBtn');

  if (openBtn) openBtn.addEventListener('click', openWishlistDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeWishlistDrawer);
  if (backdrop) backdrop.addEventListener('click', closeWishlistDrawer);
  if (clearBtn) clearBtn.addEventListener('click', clearAllWishlist);
  if (browseBtn) browseBtn.addEventListener('click', closeWishlistDrawer);
}

// -------------------------------------------------------------------
// 14. AUTHENTICATION & LOGIN MODAL
// -------------------------------------------------------------------

function openAuthModal() {
  const modal = document.getElementById('authModalBackdrop');
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeAuthModal() {
  const modal = document.getElementById('authModalBackdrop');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function checkUserAuthState() {
  const userContainer = document.getElementById('userAuthContainer');
  if (!userContainer) return;

  try {
    const raw = localStorage.getItem(STORAGE_KEYS.USER);
    if (raw) {
      const user = JSON.parse(raw);
      const initial = user.name ? user.name.charAt(0).toUpperCase() : 'U';
      userContainer.innerHTML = `
        <div class="user-profile-nav" title="Signed in as ${user.name}">
          <span class="user-avatar-circle">${initial}</span>
          <span>${user.name.split(' ')[0]}</span>
          <button class="user-logout-btn" id="logoutBtn" title="Log Out"><i class="fa-solid fa-arrow-right-from-bracket"></i></button>
        </div>
      `;
      const logoutBtn = document.getElementById('logoutBtn');
      if (logoutBtn) {
        logoutBtn.addEventListener('click', handleLogout);
      }
      return;
    }
  } catch (e) {}

  userContainer.innerHTML = `
    <button class="btn btn-outline-primary btn-sm login-btn" id="loginModalBtn">
      <i class="fa-regular fa-user"></i>
      <span class="login-text">Sign In</span>
    </button>
  `;
  const loginBtn = document.getElementById('loginModalBtn');
  if (loginBtn) loginBtn.addEventListener('click', openAuthModal);
}

function handleLogout() {
  localStorage.removeItem(STORAGE_KEYS.USER);
  checkUserAuthState();
  showToast('You have been logged out.', 'info');
}

function bindAuthModalEvents() {
  const closeBtn = document.getElementById('authCloseBtn');
  const backdrop = document.getElementById('authModalBackdrop');
  const tabs = document.querySelectorAll('.auth-tab');
  const signInForm = document.getElementById('signInForm');
  const signUpForm = document.getElementById('signUpForm');
  const googleBtn = document.getElementById('googleLoginBtn');
  const appleBtn = document.getElementById('appleLoginBtn');

  if (closeBtn) closeBtn.addEventListener('click', closeAuthModal);
  if (backdrop) {
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) closeAuthModal();
    });
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const target = tab.dataset.authTab;
      if (target === 'signin') {
        signInForm.classList.remove('hidden');
        signUpForm.classList.add('hidden');
      } else {
        signInForm.classList.add('hidden');
        signUpForm.classList.remove('hidden');
      }
    });
  });

  if (signInForm) {
    signInForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('loginEmail').value.trim();
      const pass = document.getElementById('loginPassword').value.trim();

      if (!email || !pass) {
        showToast('Please fill in both email and password.', 'error');
        return;
      }

      const simulatedUser = {
        name: email.split('@')[0].replace(/[._]/g, ' '),
        email: email
      };
      // Capitalize name
      simulatedUser.name = simulatedUser.name.charAt(0).toUpperCase() + simulatedUser.name.slice(1);

      localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(simulatedUser));
      closeAuthModal();
      checkUserAuthState();
      showToast(`Welcome back, ${simulatedUser.name}!`, 'success');
    });
  }

  if (signUpForm) {
    signUpForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('regName').value.trim();
      const email = document.getElementById('regEmail').value.trim();
      const pass = document.getElementById('regPassword').value.trim();
      const terms = document.getElementById('agreeTerms').checked;

      if (!name || !email || !pass) {
        showToast('Please fill in all registration fields.', 'error');
        return;
      }
      if (!terms) {
        showToast('Please accept the Terms & Conditions.', 'error');
        return;
      }

      const newUser = { name, email };
      localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(newUser));
      closeAuthModal();
      checkUserAuthState();
      showToast(`Account created! Welcome to Stackly, ${name}.`, 'success');
    });
  }

  const socialLogin = (provider) => {
    const demoUser = { name: 'Alex Vance', email: 'alex.vance@example.com' };
    localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(demoUser));
    closeAuthModal();
    checkUserAuthState();
    showToast(`Signed in with ${provider}!`, 'success');
  };

  if (googleBtn) googleBtn.addEventListener('click', () => socialLogin('Google'));
  if (appleBtn) appleBtn.addEventListener('click', () => socialLogin('Apple'));
}

// -------------------------------------------------------------------
// 15. NEWSLETTER FORM VALIDATION
// -------------------------------------------------------------------

function bindNewsletterEvents() {
  const form = document.getElementById('newsletterForm');
  const emailInput = document.getElementById('newsletterEmail');
  const feedback = document.getElementById('newsletterFeedback');

  if (!form || !emailInput || !feedback) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      feedback.textContent = 'Please enter your email address.';
      feedback.className = 'form-feedback error';
      return;
    }

    if (!emailRegex.test(email)) {
      feedback.textContent = 'Please enter a valid email address (e.g. name@domain.com).';
      feedback.className = 'form-feedback error';
      return;
    }

    // Check existing subscribers in LocalStorage
    let subscribers = [];
    try {
      subscribers = JSON.parse(localStorage.getItem(STORAGE_KEYS.SUBSCRIBERS) || '[]');
    } catch (err) {}

    if (subscribers.includes(email)) {
      feedback.textContent = 'You are already subscribed to our VIP deals newsletter!';
      feedback.className = 'form-feedback error';
      showToast('You are already subscribed!', 'info');
      return;
    }

    subscribers.push(email);
    try {
      localStorage.setItem(STORAGE_KEYS.SUBSCRIBERS, JSON.stringify(subscribers));
    } catch (err) {}

    feedback.textContent = '🎉 Thank you! Check your inbox for your 25% welcome voucher!';
    feedback.className = 'form-feedback success';
    emailInput.value = '';
    showToast('Subscribed! Welcome promo sent to your email.', 'success');
  });
}

// -------------------------------------------------------------------
// 16. MULTI-CURRENCY CONVERTER
// -------------------------------------------------------------------

function bindCurrencyEvents() {
  const selector = document.getElementById('currencySelector');
  if (!selector) return;

  // Retrieve saved currency
  const saved = localStorage.getItem(STORAGE_KEYS.CURRENCY);
  if (saved && CURRENCY_RATES[saved]) {
    currentCurrency = saved;
    selector.value = saved;
  }

  selector.addEventListener('change', () => {
    currentCurrency = selector.value;
    localStorage.setItem(STORAGE_KEYS.CURRENCY, currentCurrency);

    // Refresh dynamic views
    renderDestinations(
      activeDestinationCategory === 'all' 
        ? DESTINATIONS_DATA 
        : DESTINATIONS_DATA.filter(d => d.category === activeDestinationCategory)
    );
    applyHotelFilters();
    renderWishlistDrawerItems();
    recalculateBookingPrice();

    showToast(`Currency changed to ${currentCurrency} (${CURRENCY_RATES[currentCurrency].symbol})`, 'info');
  });
}

// -------------------------------------------------------------------
// 17. SCROLL INTERACTIONS & BACK-TO-TOP
// -------------------------------------------------------------------

function bindScrollEvents() {
  const header = document.getElementById('header');
  const scrollTopBtn = document.getElementById('scrollTopBtn');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;

    // Sticky header shadow
    if (header) {
      if (scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }

    // Scroll to top button visibility
    if (scrollTopBtn) {
      if (scrollY > 400) {
        scrollTopBtn.classList.add('visible');
      } else {
        scrollTopBtn.classList.remove('visible');
      }
    }

    // Active nav link highlight on scroll
    let currentSectionId = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute('id');
      }
    });

    if (currentSectionId) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSectionId}`) {
          link.classList.add('active');
        }
      });
    }
  });

  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
}

