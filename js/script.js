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
