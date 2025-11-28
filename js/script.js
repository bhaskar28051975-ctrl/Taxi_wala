// AUTO BANNER SYSTEM FOR DRIVER PAGES

// Detect current page file name
let page = window.location.pathname.split("/").pop();

// Change banner based on driver page
if (page.includes("driver1")) {
    document.getElementById("bannerImage").src = "images/banner-driver1.jpg";
}

else if (page.includes("driver2")) {
    document.getElementById("bannerImage").src = "images/banner-driver2.jpg";
}

else if (page.includes("driver3")) {
    document.getElementById("bannerImage").src = "images/banner-driver3.jpg";
}

// Default banner for all other pages
else {
    document.getElementById("bannerImage").src = "images/banner-default.jpg";
}
// AUTO BANNER SYSTEM FOR DRIVER PAGES

let page = window.location.pathname.split("/").pop();

if (page.includes("driver1")) {
    document.getElementById("bannerImage").src = "../images/banner-driver1.jpg";
}

else if (page.includes("driver2")) {
    document.getElementById("bannerImage").src = "../images/banner-driver2.jpg";
}

else if (page.includes("driver3")) {
    document.getElementById("bannerImage").src = "../images/banner-driver3.jpg";
}

else {
    document.getElementById("bannerImage").src = "images/banner-default.jpg";
}

// POPUP IMAGE
function openPopup(imgSrc) {
    document.getElementById("popupImg").src = imgSrc;
    document.getElementById("popup").style.display = "flex";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

// Back to Top Button Function
let topBtn = document.getElementById("topBtn");

window.onscroll = function () {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
};

function topFunction() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}


