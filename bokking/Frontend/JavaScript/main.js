/* ===========================
   MAIN JS - GLOBAL FUNCTIONS
   =========================== */

document.addEventListener("DOMContentLoaded", () => {
    setMinDates();
    mobileMenuToggle();
});

/* ===========================
   SET MIN DATE FOR CHECK-IN
   =========================== */
function setMinDates() {
    const checkin = document.querySelector('input[name="checkin"]');
    const checkout = document.querySelector('input[name="checkout"]');

    if (!checkin || !checkout) return;

    const today = new Date().toISOString().split("T")[0];
    checkin.min = today;

    checkin.addEventListener("change", () => {
        checkout.min = checkin.value;
    });
}

/* ===========================
   SEARCH FORM VALIDATION
   =========================== */
const searchForm = document.querySelector(".search-form");

if (searchForm) {
    searchForm.addEventListener("submit", (e) => {
        const location = searchForm.location.value.trim();
        const guests = searchForm.guests.value;

        if (location === "") {
            alert("Please enter a location");
            e.preventDefault();
        }

        if (guests < 1) {
            alert("Guests must be at least 1");
            e.preventDefault();
        }
    });
}

/* ===========================
   MOBILE NAV TOGGLE
   =========================== */
function mobileMenuToggle() {
    const nav = document.querySelector(".nav");
    const menuBtn = document.createElement("div");

    menuBtn.innerHTML = "☰";
    menuBtn.style.fontSize = "24px";
    menuBtn.style.color = "#fff";
    menuBtn.style.cursor = "pointer";
    menuBtn.style.display = "none";

    document.querySelector(".header .container").appendChild(menuBtn);

    if (window.innerWidth < 768) {
        menuBtn.style.display = "block";
        nav.style.display = "none";
    }

    menuBtn.addEventListener("click", () => {
        nav.style.display = nav.style.display === "block" ? "none" : "block";
    });
}

/* ===========================
   HOTEL CARD CLICK (DEMO)
   =========================== */
const hotelCards = document.querySelectorAll(".hotel-card");

hotelCards.forEach(card => {
    card.addEventListener("click", () => {
        window.location.href = "hotel-details.html";
    });
});

/* ===========================
   GLOBAL UTILITIES
   =========================== */
function showLoader() {
    const loader = document.createElement("div");
    loader.id = "loader";
    loader.innerHTML = "Loading...";
    document.body.appendChild(loader);
}

function hideLoader() {
    const loader = document.getElementById("loader");
    if (loader) loader.remove();
}
