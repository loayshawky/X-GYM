
window.addEventListener("load", () => {
    // aos
    document.querySelector(".js-preloader").classList.add("loaded");
    document.querySelector(".js-preloader-slide").addEventListener("animationend", () => {
        document.querySelector(".js-preloader").style.display = "none";
 
    AOS.init({
        once: true,
        duration: 2000
         });
    });
});








// nav toogler
function nav () {
const navToggler = document.querySelector(".js-header-toggler");
const nav = document.querySelector(".js-header-nav");


navToggler.addEventListener("click", toggleNav);
function toggleNav() {
    navToggler.classList.toggle("active");

    nav.classList.toggle("open");
    if(nav.classList.contains("open")) {
        document.body.style.overflow = "hidden";
    }
    else {
        document.body.style.removeProperty("overflow");
    }
}
nav.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", toggleNav);
});
}
nav();




// video pop 
function video(){
    const btns = ['.js-video-popup-close', '.js-about-play-btn'];
    const popup = document.querySelector(".js-video-popup");
    const iFrame = document.querySelector(".js-video-popup-iframe");
    const src = iFrame.src;

btns.forEach((btn) => {
    document.querySelector(btn).addEventListener("click", () => {
        if(popup.classList.contains("open")){
            popup.classList.remove("open");
            iFrame.src = "";
        }
        else {
            popup.classList.add("open");
            if(iFrame.getAttribute("src") == ""){
                iFrame.src = src;
                }
            }
    });
});
}
video();



// accordion 
function accordion(ele) {
    const accordion = document.querySelector(ele);
    accordion.addEventListener("click", ({target}) => {
        if(!target.closest(".js-accordion-btn")){
            return;
        }
        const btn = target.closest(".js-accordion-btn");
        const item = btn.parentElement.parentElement;
        const body = btn.parentElement.nextElementSibling;

        if (target.closest(".active")){
            slideup();
            return;
        }
        if(accordion.querySelector(".active")){
            slideup();
        }
        item.classList.add("active");
        body.style.height = body.scrollHeight + "px";  
        function slideup(){
            accordion.querySelector(".active").lastElementChild.style.height = "0";
            accordion.querySelector(".active").classList.remove(".active");
        }
   });

}
accordion(".js-accordion");
