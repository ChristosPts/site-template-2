const activePage = window.location.pathname;
const navLinks = document.querySelectorAll('.navbar a')

navLinks.forEach(link => {
    if(link.href ===  window.location.href){
        link.classList.add('active');    
      }
});