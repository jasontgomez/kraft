//header//
const headerElement = document.getElementById('header');
const footerElement = document.getElementById('footer')

const headerContent = '<nav><a href="index.html">Home</a><a href="aboutus.html">About Us</a><a href="contact.html">Contact Us</a><a href="products.html">Products</a></nav>';
document.getElementById('header').innerHTML = headerContent;
const footerContent ='<footer>&copy; 2023 Kraft Heinz. All rights reserved.</footer>'
document.getElementById('footer').innerHTML = footerContent;