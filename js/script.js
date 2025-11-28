// AUTO BANNER SYSTEM FOR DRIVER PAGES

let page = window.location.pathname.split("/").pop();

// If inside drivers folder → use ../images/
let inDriverFolder = window.location.pathname.includes("/drivers/");

if (page.includes("driver1")) {
    document.getElementById("bannerImage").src =
        inDriverFolder ? "../images/banner-driver1.jpg" : "images/banner-driver1.jpg";
}

else if (page.includes("driver2")) {
    document.getElementById("bannerImage").src =
        inDriverFolder ? "../images/banner-driver2.jpg" : "images/banner-driver2.jpg";
}

else if (page.includes("driver3")) {
    document.getElementById("bannerImage").src =
        inDriverFolder ? "../images/banner-driver3.jpg" : "images/banner-driver3.jpg";
}

else {
    document.getElementById("bannerImage").src =
        inDriverFolder ? "../images/banner-default.jpg" : "images/banner-default.jpg";
}



// POPUP IMAGE
function openPopup(imgSrc) {
    document.getElementById("popupImg").src = imgSrc;
    document.getElementById("popup").style.display = "flex";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}



// Back to Top Button
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
