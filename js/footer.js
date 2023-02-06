const footer = ` 
<div class="container pb-5">
    <div class="row pt-5 pb-2">
      <div class="col-lg-5 p-3 footer-description">
        <h3> <i class="bi bi-cpu-fill"></i> Technology Solutions</h3> 
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa nemo delectus soluta magnam! Dolorem error necessitatibus expedita dolore ut. Eligendi error illo ullam distinctio tempora, labore numquam deserunt nesciunt nulla!</p>
      </div>
      <div class="col-lg-7 py-3">
           <div class="footer-nav d-flex justify-content-center">
              <h5>
                <a href="index.html" class="text-decoration-none">Home</a>
              </h5>
              <h5>
                <a href="about.html" class="text-decoration-none">About-Us</a>
              </h5>
              <h5>
                <a href="services.html" class="text-decoration-none">Services</a>
              </h5>
              <h5>
                <a href="contact.html" class="text-decoration-none">Contact</a>
              </h5>
           </div>
           <div class="footer-logos d-flex align-items-center justify-content-center pt-3">
            <div class="footer-logo"><a><i class="bi bi-instagram"></i></a></div>
            <div class="footer-logo"><a><i class="bi bi-twitter"></i></a></div>
            <div class="footer-logo"><a><i class="bi bi-facebook"></i></a></div>
            <div class="footer-logo">
              <a href="https://github.com/ChristosPts" target="_blank">
              <i class="bi bi-github"></i></a>
            </div>
           </div>
      </div>
    </div>
    <div class="row d-flex justify-content-center text-center">
      <hr>
        <span class="pt-2">Copyright © All rights reserved</span>
    </div>
</div> 
`
document.getElementById("footer-container").insertAdjacentHTML('afterbegin', footer);