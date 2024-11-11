class PrestigeHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `

        <!-- Logo and Title Section -->
        <div class="header-logo" style="background-color: transparent;">
            <a href="index.html">
                <img src="images/logo-2.png" alt="Logo" class="logo-image">
                <!--
                <h1 class="header-title">Your Company Name</h1>
                <p class="header-subtitle">Tagline or Subtitle</p>
                -->
            </a>
        </div>
       
        <!-- Navbar -->
            <nav class="navbar navbar-expand-lg dark-background sticky-top">
                <div class="container-fluid">
                    <a class="navbar-brand d-lg-none" href="index.html">Prestige</a>
                    <!-- Toggle button for Offcanvas (only shown on small screens) -->
                    <button class="navbar-toggler ms-auto" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <!-- Offcanvas and Navbar Collapse for larger screens -->
                    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Prestige</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                            <!-- Navbar links -->
                            <ul class="navbar-nav mx-auto mb-2 mb-lg-0 text-white">
                                <li class="nav-item px-3">
                                    <a class="nav-link active" aria-current="page" href="index.html">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link px-3" href="about-us.html">About</a>
                                </li>

                                <!-- Dropdown Menu -->
                                <li class="nav-item dropdown px-3">
                                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Services
                                    </a>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                         <li><a class="dropdown-item" href="business-travel.html">Personalized Business Travel</a></li>
                                        <li><hr class="dropdown-divider"></li>
                                        <li><a class="dropdown-item" href="luxury-concierge.html">24/7 High-End Concierge Service</a></li>
                                        <li><hr class="dropdown-divider"></li>
                                        <li><a class="dropdown-item" href="luxury-travel-experiences.html">Luxury Travel and Unique Experiences</a></li>
                                        <li><hr class="dropdown-divider"></li>
                                        <li><a class="dropdown-item" href="business-and-event-management.html">Business and Private Event Management</a></li>
                                        <li><hr class="dropdown-divider"></li>
                                        <li><a class="dropdown-item" href="multilingual-assistance.html">Multilingual and Continuous Assistance</a></li>
                                    </ul>
                                </li>

                                <li class="nav-item">
                                     <a class="nav-link px-3" href="destinations.html">Destinations</a>
                                </li>

                                <li class="nav-item px-3">
                                    <a class="nav-link" href="contact.html">Contact</a>
                                </li>
                            </ul>

                            <div class="btn-group mx-auto" role="group" aria-label="Language switcher">
                                <input type="radio" class="btn-check" name="language" id="english" autocomplete="off" checked>
                                <label class="btn btn-outline-light" for="english">
                                    <img src="https://flagcdn.com/w20/gb.png" alt="English" class="me-1"> English
                                </label>
                            
                                <input type="radio" class="btn-check" name="language" id="french" autocomplete="off">
                                <label class="btn btn-outline-light" for="french">
                                    <img src="https://flagcdn.com/w20/fr.png" alt="French" class="me-1"> Français
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        `
    }
}


class PrestigeFooter extends HTMLElement{
    connectedCallback() {
        this.innerHTML = 
        `
        <footer class="text-light py-5">
        <div class="container">
            <div class="row social-icons"">

                <!-- Address Column -->
                <div class="col-md-4 mb-4">
                    <h5 class="text-uppercase" style="color: var(--accent-color);">Address</h5>
                    <p class="text-light">
                        502 Palms Drive, Ayi Mensah Park <br>
                        Accra, Ghana <br>
                        Phone: +233 558 766 567 <br>
                        Email: <a href="mailto:sandrine.agbcompta@gmail.com" class="text-decoration-none text-light">sandrine.agbcompta@gmail.com</a>
                    </p>
                </div>

                <!-- Quick Links Column -->
                <div class="col-md-4 mb-4">
                    <h5 class="text-uppercase" style="color: var(--accent-color);">Quick Links</h5>
                    <ul class="list-unstyled">
                        <li><a href="#" class="text-light text-decoration-none">Home</a></li>
                        <li><a href="#" class="text-light text-decoration-none">About Us</a></li>
                        <li><a href="#" class="text-light text-decoration-none">Services</a></li>
                        <li><a href="#" class="text-light text-decoration-none">Contact</a></li>
                    </ul>
                </div>

    
                <!-- Social Media Column -->
                <div class="col-md-4 mb-4">
                    <h5 class="text-uppercase" style="color: var(--accent-color);">Follow Us</h5>
                    <div class="social-icons">
                        <!-- Facebook Icon -->
                        <a href="https://www.facebook.com" target="_blank">
                            <img src="https://cdn-icons-png.flaticon.com/512/145/145802.png" alt="Facebook" width="40" height="40">
                        </a>
                
                        <!-- Twitter Icon -->
                        <a href="https://www.twitter.com" target="_blank">
                            <img src="https://cdn-icons-png.flaticon.com/512/145/145812.png" alt="Twitter" width="40" height="40">
                        </a>
                
                        <!-- LinkedIn Icon -->
                        <a href="https://www.linkedin.com" target="_blank">
                            <img src="https://cdn-icons-png.flaticon.com/512/145/145807.png" alt="LinkedIn" width="40" height="40">
                        </a>
                
                        <!-- Instagram Icon -->
                        <a href="https://www.instagram.com" target="_blank">
                            <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" width="40" height="40">
                        </a>
                    </div>
            
                </div>
            </div>
            
            <!-- Copyright Section -->
            <div class="text-center mt-4">
                <hr class="bg-light">
                <p class="mb-0">&copy; 2024 Prestige Business Travel. All Rights Reserved.</p>
            </div>
        </div>
    </footer>
    
        
        `
    }
} 














class SpecialHeader extends HTMLElement{
    connectedCallback() {
        this.innerHTML = 
        `
            <div class="bg-top navbar-light">
                <div class="container">
                    <div class="row no-gutters d-flex align-items-center align-items-stretch">
                        <div class="col-md-5 d-flex align-items-center py-4">
                            <a class="navbar-brand" href="index.html">Prestige Business Travel</a>
                        </div>
                        <div class="col-lg-7 d-block">
                            <div class="row d-flex">
                                <div class="col-md d-flex topper align-items-center align-items-stretch py-md-4">
                                    <div class="icon d-flex justify-content-center align-items-center"><span class="icon-paper-plane"></span></div>
                                    <div class="text">
                                        <span>Email</span>
                                        <span>hello@gmail.com</span>
                                    </div>
                                </div>
                                <div class="col-md d-flex topper align-items-center align-items-stretch py-md-4">
                                    <div class="icon d-flex justify-content-center align-items-center"><span class="icon-phone2"></span></div>
                                    <div class="text">
                                        <span>Call Us</span>
                                        <span>+233 203 1234 12</span>
                                    </div>
                                </div>
                                <div class="col-md topper d-flex align-items-center justify-content-end">
                                    <p class="mb-0 d-block">
                                        <a href="#" class="btn py-2 px-3 btn-primary">
                                            <span>Free Consulting</span>
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark ftco-navbar-light" id="ftco-navbar">
                <div class="container d-flex align-items-center">
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="oi oi-menu"></span> Menu
                </button>
                <form action="#" class="searchform order-lg-last">
                <div class="form-group d-flex">
                    <input type="text" class="form-control pl-3" placeholder="Search">
                    <button type="submit" placeholder="" class="form-control search"><span class="ion-ios-search"></span></button>
                </div>
                </form>
                <div class="collapse navbar-collapse" id="ftco-nav">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active"><a href="#" class="nav-link pl-0">Home</a></li>
                        <li class="nav-item"><a href="#" class="nav-link">About Us</a></li>
                        <li class="nav-item"><a href="#" class="nav-link">Our Services</a></li>
                        <li class="nav-item"><a href="#" class="nav-link">Contact Us</a></li>
                    </ul>
                </div>
                </div>
            </nav>
        
        `
    }
} 

class SpecialFooter extends HTMLElement{
    connectedCallback() {
        this.innerHTML = 
        `
        <footer class="bg-dark text-light py-5">
    <div class="container">
        <div class="row">
            <!-- Quick Links Column -->
            <div class="col-md-4 mb-4">
                <h5 class="text-uppercase" style="color: var(--accent-color);">Quick Links</h5>
                <ul class="list-unstyled">
                    <li><a href="#" class="text-light text-decoration-none">Home</a></li>
                    <li><a href="#" class="text-light text-decoration-none">About Us</a></li>
                    <li><a href="#" class="text-light text-decoration-none">Services</a></li>
                    <li><a href="#" class="text-light text-decoration-none">Contact</a></li>
                </ul>
            </div>

            <!-- Address Column -->
            <div class="col-md-4 mb-4">
                <h5 class="text-uppercase" style="color: var(--accent-color);">Address</h5>
                <p class="text-light">
                    502 Palms Drive, Ayi Mensah Park <br>
                    Accra, Ghana <br>
                    Phone: +233 558 766 567 <br>
                    Email: <a href="mailto:sandrine.agbcompta@gmail.com" class="text-decoration-none text-light">sandrine.agbcompta@gmail.com</a>
                </p>
            </div>

            <!-- Social Media Column -->
            <div class="col-md-4 mb-4">
                <h5 class="text-uppercase" style="color: var(--accent-color);">Follow Us</h5>
                <ul class="list-inline">
                    <li class="list-inline-item">
                        <a href="#" class="text-light text-decoration-none">
                            <i class="fab fa-facebook fa-lg"></i>
                        </a>
                    </li>
                    <li class="list-inline-item">
                        <a href="#" class="text-light text-decoration-none">
                            <i class="fab fa-twitter fa-lg"></i>
                        </a>
                    </li>
                    <li class="list-inline-item">
                        <a href="#" class="text-light text-decoration-none">
                            <i class="fab fa-instagram fa-lg"></i>
                        </a>
                    </li>
                    <li class="list-inline-item">
                        <a href="#" class="text-light text-decoration-none">
                            <i class="fab fa-linkedin fa-lg"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        
        <!-- Copyright Section -->
        <div class="text-center mt-4">
            <hr class="bg-light">
            <p class="mb-0">&copy; 2024 Prestige Business Travel. All Rights Reserved.</p>
        </div>
    </div>
</footer>

        
        `
    }
} 

customElements.define('prestige-header', PrestigeHeader);
customElements.define('prestige-footer', PrestigeFooter);
customElements.define('special-header', SpecialHeader);
customElements.define('special-footer', SpecialFooter);