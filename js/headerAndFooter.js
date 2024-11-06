class PrestigeHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
       
        <nav class="navbar">
            <div class="logo">Prestige</div>
            <input type="checkbox" id="sidebar-active">
            <label for="sidebar-active" class="open-sidebar-button">
                <svg xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 -960 960 960" width="32"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
            </label>
            <label id="overlay" for="sidebar-active"></label>
            <div class="links-container">
                <label for="sidebar-active" class="close-sidebar-button">
                    <svg xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 -960 960 960" width="32"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
                </label>
                <a class="home-link" href="elegant.html">Home</a> 
                <a href="#about">About</a>
                <!-- Dropdown for Services -->
                <div class="d">
                    <button class="d-btn">Services</button>
                    <div class="d-content">
                        <div class="column">
                            <a href="">Planning Professional Agendas</a>
                            <a href="">Planning Professional Agendas</a>
                            <a href="">Planning Professional Agendas</a>
                            <a href="">Planning Professional Agendas</a>
                            <a href="">Planning Professional Agendas</a>
                        </div>
                    </div>
                </div>
                <a href="#contact">Contact</a>
            </div>
        </nav>
        `
    }
}


class PrestigeFooter extends HTMLElement{
    connectedCallback() {
        this.innerHTML = 
        `
        <footer class="bg-dark text-light pt-5 pb-3">
            <div class="container">
                <div class="row">
                    <!-- Contact Info 
                    <div class="col-md-4 mb-4">
                        <h5 class="fw-bold mb-3">Have a Question?</h5>
                        <ul class="list-unstyled">
                            <li class="mb-2"><i class="fas fa-map-marker-alt me-2"></i>502 Palms Drive Ayi Mensah Park, Accra, Ghana</li>
                            <li class="mb-2"><i class="fas fa-phone me-2"></i>+233558766567</li>
                            <li class="mb-2"><i class="fas fa-envelope me-2"></i><a href="mailto:sandrine.agbcompta@gmail.com" class="text-light text-decoration-none">sandrine.agbcompta@gmail.com</a></li>
                        </ul>
                    </div>
                -->

                    <!-- Contact Info -->
                    <div class="col-md-4 mb-4">
                        <h5 class="fw-bold mb-3">Have a Question?</h5>
                        <ul class="list-unstyled">
                            <li class="mb-2"><span class="fas fa-map-marker-alt"></span><span class="text-light">502 Palms Drive Ayi Mensah Park, Accra, Ghana</span></li>
                            <li class="mb-2"><span class="fas fa-phone"></span><span class="text-light">+233558766567</span></li>
                            <li class="mb-2"><span class="fas fa-envelope"></span><a href="mailto:sandrine.agbcompta@gmail.com" class="text-light text-decoration-none">sandrine.agbcompta@gmail.com</a></li>
                        </ul>
                    </div>

                    <!-- Quick Links -->
                    <div class="col-md-4 mb-4 offset-md-1">
                        <h5 class="fw-bold mb-3">Quick Links</h5>
                        <ul class="list-unstyled">
                            <li class="mb-2"><a href="#" class="text-light text-decoration-none">Home</a></li>
                            <li class="mb-2"><a href="#" class="text-light text-decoration-none">About</a></li>
                            <li class="mb-2"><a href="#" class="text-light text-decoration-none">Services</a></li>
                            <li><a href="#" class="text-light text-decoration-none">Contact</a></li>
                        </ul>
                    </div>
        
                    <!-- Social Media -->
                    <div class="col-md-3 mb-4 text-center text-md-start">
                        <h5 class="fw-bold mb-3">Connect With Us</h5>
                        <ul class="list-inline">
                            <li class="list-inline-item">
                                <a href="#" class="text-light me-3"><i class="fab fa-twitter fa-2x"></i></a>
                            </li>
                            <li class="list-inline-item">
                                <a href="#" class="text-light me-3"><i class="fab fa-facebook fa-2x"></i></a>
                            </li>
                            <li class="list-inline-item">
                                <a href="#" class="text-light"><i class="fab fa-instagram fa-2x"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
        
                <hr class="bg-light">
        
                <!-- Copyright -->
                <div class="row">
                    <div class="col-md-12 text-center">
                        <p class="mb-0">Copyright © All rights reserved | Designed by <a href="#" class="text-decoration-underline text-light fw-bold">WisdomFromAbove Designs</a></p>
                    </div>
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
        <footer class="ftco-footer ftco-bg-dark ftco-section">
            <div class="container">
            <div class="row mb-5">
                <div class="col-md-4 col-lg-4">
                <div class="ftco-footer-widget mb-5">
                    <h2 class="ftco-heading-2">Have a Question?</h2>
                    <div class="block-23 mb-3">
                        <ul>
                        <li><span class="icon icon-map-marker"></span><span class="text">502 Palms Drive Ayi Mensah Park,
                         Accra, Ghana</span></li>
                        <li><a href="#"><span class="icon icon-phone"></span><span class="text">+233558766567</span></a></li>
                        <li><a href="#"><span class="icon icon-envelope"></span><span class="text">sandrine.agbcompta@gmail.com</span></a></li>
                        </ul>
                    </div>
                </div>
                </div>
                <div class="col-md-4 col-lg-4 offset-md-1">
                <div class="ftco-footer-widget mb-5 ml-md-4">
                    <h2 class="ftco-heading-2">Quick Links</h2>
                    <ul class="list-unstyled">
                    <li><a href="#"><span class="ion-ios-arrow-round-forward mr-2"></span>Home</a></li>
                    <li><a href="#"><span class="ion-ios-arrow-round-forward mr-2"></span>About</a></li>
                    <li><a href="#"><span class="ion-ios-arrow-round-forward mr-2"></span>Services</a></li>
                    <li><a href="#"><span class="ion-ios-arrow-round-forward mr-2"></span>Contact</a></li>
                    </ul>
                </div>
                </div>
                <div class="col-md-3 col-lg-3">
                <div class="ftco-footer-widget mb-5">
                    <h2 class="ftco-heading-2 mb-0">Connect With Us</h2>
                    <ul class="ftco-footer-social list-unstyled float-md-left float-lft mt-3">
                    <li class="ftco-animate"><a href="#"><span class="icon-twitter"></span></a></li>
                    <li class="ftco-animate"><a href="#"><span class="icon-facebook"></span></a></li>
                    <li class="ftco-animate"><a href="#"><span class="icon-instagram"></span></a></li>
                    </ul>
                </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12 text-center">
    
        Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | Designed by <a href="https://wisdom-kalu.github.io/simple_portfolio/" target="_blank">WisdomFromAbove Designs</a>
        <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --></p>
                </div>
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