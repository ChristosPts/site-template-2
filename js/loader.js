const loaderWrapper = document.querySelector(".loader-wrapper");

if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
} else {
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }
}
 
window.addEventListener('load',function(){
    setTimeout(()=> {
    loaderWrapper.classList.add("fade-out");
    document.body.style.overflowY = "scroll"
    document.body.style.pointerEvents = "all"
    },2000)
})
