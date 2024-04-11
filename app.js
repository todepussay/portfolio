var videos = [
    "OjqkYVSnW9c?si=gHVCtlDMKsardFHa",
    "icPhPplst20?si=rnnvuM9fKkm3n0Cb",
    "JfB6IkP6GAg?si=VHSqM5iIl4c0svoG",
]

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

for(var i = 0; i < document.getElementsByClassName("age").length; i++) {
    document.getElementsByClassName("age")[i].innerHTML = age;
}

// Get % of progress bar

var progress_bar = document.querySelectorAll(".progress-bar");

var array_progress = [];

for (var i = 0; i < progress_bar.length; i++) {
    var progression = progress_bar[i].style.width;
    progress_bar[i].style.width = progression;
    array_progress.push(progression);
    progress_bar[i].style.width = "0%";
}

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
    document.getElementById('menu-div').style.display = 'block';
    document.getElementById('menu-div').style.animation = "open-menu 0.5s forwards";
}

document.getElementById('close-btn').onclick = function() {
    document.getElementById('menu-div').style.animation = "close-menu 0.5s forwards";
    setTimeout(function() {
        document.getElementById('menu-div').style.display = 'none';
    }, 500);
}

window.addEventListener("scroll", function reveal() {

    var top_btn = document.getElementById("top-btn");

    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        top_btn.style.display = "block";
        top_btn.style.animation = "reveal-top-btn 0.2s ease-in-out forwards";
    } else {
        top_btn.style.animation = "dereveal-top-btn 0.2s ease-in-out forwards";
        setTimeout(function() {
            top_btn.style.display = "none";
        }, 200);
    }

    var reveals = document.querySelectorAll(".reveal");

    var reveals_skills_img = document.querySelectorAll(".reveal-skills-img");
    var reveals_skills_txt = document.querySelectorAll(".reveal-skills-txt");
    var reveals_skills_progress = document.querySelectorAll(".reveal-skills-progress");
  
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 300;
  
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }

    for (var i = 0; i < reveals_skills_img.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals_skills_img[i].getBoundingClientRect().top;
        var elementVisible = 150;
  
        if (elementTop < windowHeight - elementVisible) {
            reveals_skills_img[i].classList.add("active-skills-img");
            reveals_skills_txt[i].classList.add("active-skills-txt");

            reveals_skills_progress[i].style.transition = "width 1s";
            reveals_skills_progress[i].style.width = array_progress[i];
        }
    }

    
});

const onglets = document.querySelectorAll('.onglet');
let ongletActif = document.querySelector('.onglet.active');

for(let i = 0; i < onglets.length; i++){
    onglets[i].addEventListener('click', function(){
        if(!this.classList.contains('active')){
            this.classList.add('active');
            ongletActif.classList.remove('active');

            document.getElementById(this.id + "-list").style.display = "flex";
            document.getElementById(ongletActif.id + "-list").style.display = "none";
            ongletActif = this;
        }
    });
}

for(let i = 0; i < 3; i++){
    let url = videos[i];
    var iframe = $('<iframe></iframe>');
    iframe.attr('src', "https://www.youtube.com/embed/" + url);
    iframe.attr('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
    iframe.attr('referrerpolicy', 'strict-origin-when-cross-origin');
    iframe.attr('allowfullscreen', '');
    iframe.attr("width", "420");
    iframe.attr("height", "200");
    iframe.attr("frameborder", "0")

    $('#videos').append(iframe);
}

const underscore = document.querySelector('#underscore');
let position = 0;

setInterval(function(){
    if(position == 0){
        underscore.style.opacity = 0;
        position = 1;
    } else {
        underscore.style.opacity = 1;
        position = 0;
    }
}, 1000)

const h2 = document.querySelector('#appear-name');
let appear_text = "Tom Depussay";
let j = 0;

setTimeout(function(){
    setInterval(function(){
        if(j < appear_text.length){
            h2.innerHTML += appear_text.charAt(j);
            j++;
        }
    }, 100);
}, 500);