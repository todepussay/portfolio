var today = new Date();
var now = today.toLocaleDateString();

var anniv = "14/07/2003";
var an = anniv.substr(6,4);
var mois = anniv.substr(3,2);
var day = anniv.substr(0,2);

var dateNaissance = new Date(an + "-" + mois + "-" + day);

var age = today.getFullYear() - dateNaissance.getFullYear();
var m = today.getMonth() - dateNaissance.getMonth();
if (m < 0 || (m === 0 && today.getDate() < dateNaissance.getDate())) {
    age--;
}

document.getElementById('age').innerHTML = age;

// Scroll to anchor

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.getElementById('menu-btn').onclick = function() {
    document.getElementById('menu-div').style.opacity = 0;
    document.getElementById('menu-div').style.transform = 'translateX(-100%)';
    document.getElementById('menu-div').style.display = 'block';
    setTimeout(function() {
        document.getElementById('menu-div').style.opacity = 1;
        document.getElementById('menu-div').style.transform = 'translateX(0)';
    }, 100);
}

document.getElementById('close-btn').onclick = function() {
    setTimeout(function() {
        document.getElementById('menu-div').style.opacity = 0;
        document.getElementById('menu-div').style.transform = 'translateX(-100%)';
        document.getElementById('menu-div').style.display = 'none';
    }, 100);
}