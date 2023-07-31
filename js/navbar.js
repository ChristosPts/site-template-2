const navbar = `
<nav class="navbar navbar-expand-md bg-white">
  <div class="container-fluid px-4">
   <a class="navbar-brand" href="index.html"><i class="bi bi-cpu-fill"></i></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" 
			data-bs-target="#navbar">
      <i class="bi bi-list"></i>
    </button>
	
	
    <div class="collapse navbar-collapse" id="navbar">
     
      <ul class="navbar-nav d-flex justify-content-center align-items-center flex-grow-1">
        <li class="nav-item">
          <a class="nav-link" href="index.html">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="about.html">About Us</a>
        </li>
		<li class="px-3 navbar-logo">
           <a href="index.html"> <i class="bi bi-cpu-fill"></i> </a>   
        </li>
        <li class="nav-item">
          <a class="nav-link" href="services.html">Services</a>
        </li>
		<li class="nav-item">
          <a class="nav-link" href="contact.html">Contact Us</a>
        </li>
	  </ul>
    </div>
  </div>
</nav>
`

document.getElementById("nav-container").insertAdjacentHTML('afterbegin', navbar);