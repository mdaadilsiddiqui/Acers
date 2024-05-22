// js for hamburger
var sidemenu = document.getElementById("sidemenu");

function openmenu() {
    sidemenu.style.right = "0";
}
function closemenu() {
    sidemenu.style.right = "-250px";
}

// js for aadil's portfolio button 
document.getElementById('aadil').addEventListener('click', function() {
    window.location.href = 'https://mdaadilsiddiqui.github.io/Portfolio/';
}); 