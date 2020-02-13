const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// Nav Link Text
let nav_links = document.querySelectorAll('nav a');
nav_links.forEach((v, k) => v.textContent = siteContent['nav'][`nav-item-${k + 1}`]);

// CTA
let cta_text = document.querySelector('.cta-text');
cta_text.querySelector('h1').textContent = siteContent['cta']['h1'];
cta_text.querySelector('button').textContent = siteContent['cta']['button'];

let cta_img = document.getElementById("cta-img");
cta_img.setAttribute('src', siteContent['cta']['img-src']);

// Top Content

let top_content_sections = document.querySelectorAll('.top-content .text-content');
let features = top_content_sections[0];
let about = top_content_sections[1];

features.querySelector('h4').textContent = siteContent['main-content']['features-h4'];
features.querySelector('p').textContent = siteContent['main-content']['features-content'];

about.querySelector('h4').textContent = siteContent['main-content']['about-h4'];
about.querySelector('p').textContent = siteContent['main-content']['about-content'];

// Middle Image
let middle_img = document.getElementById("middle-img");
middle_img.setAttribute('src', siteContent['main-content']['middle-img-src']);

// Bottom Content
let bottom_content_sections = document.querySelectorAll('.bottom-content .text-content');
let services = bottom_content_sections[0];
let product = bottom_content_sections[1];
let vision = bottom_content_sections[2];

services.querySelector('h4').textContent = siteContent['main-content']['services-h4'];
services.querySelector('p').textContent = siteContent['main-content']['services-content'];

product.querySelector('h4').textContent = siteContent['main-content']['product-h4'];
product.querySelector('p').textContent = siteContent['main-content']['product-content'];

vision.querySelector('h4').textContent = siteContent['main-content']['vision-h4'];
vision.querySelector('p').textContent = siteContent['main-content']['vision-content'];

// contact
let contact_h4 = document.querySelector('.contact h4');
let contact_fields = document.querySelectorAll('.contact p');

contact_h4.textContent = siteContent['contact']['contact-h4'];

let contact_address = contact_fields[0];
let contact_phone = contact_fields[1];
let contact_email = contact_fields[2];

contact_address.textContent = siteContent['contact']['address'];
contact_phone.textContent = siteContent['contact']['phone'];
contact_email.textContent = siteContent['contact']['email'];

// footer
let footer_copyright = document.querySelector('footer p');
footer_copyright.textContent = siteContent['footer']['copyright']