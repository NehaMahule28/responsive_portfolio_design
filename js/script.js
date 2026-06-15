// Fade-in Animation

const cards = document.querySelectorAll(".project-card");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
});

cards.forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = "0.5s";
    observer.observe(card);
});
// About section scroll animation
const aboutParagraphs = document.querySelectorAll("#about p");

const aboutObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
});

aboutParagraphs.forEach(p => {
    aboutObserver.observe(p);
});
const projectCards = document.querySelectorAll(".project-card");

const projectObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
});

projectCards.forEach(card => {
    projectObserver.observe(card);
});

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    alert("Message sent successfully 🚀");

    form.reset();
});
// Back to Top Button

const topBtn = document.getElementById("topBtn");

window.onscroll = function () {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
};

topBtn.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
const darkToggle = document.getElementById("darkModeToggle");

if(localStorage.getItem("darkMode") === "enabled"){
    document.body.classList.add("dark-mode");
    darkToggle.checked = true;
}

darkToggle.addEventListener("change", () => {

    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){
        localStorage.setItem("darkMode","enabled");
    }else{
        localStorage.setItem("darkMode","disabled");
    }

});
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});
const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(item => {
    item.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});