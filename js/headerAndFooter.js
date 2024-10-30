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

customElements.define('special-header', SpecialHeader);
customElements.define('special-footer', SpecialFooter);