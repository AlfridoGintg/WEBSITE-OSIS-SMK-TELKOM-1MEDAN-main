
        AOS.init({
            duration: 800,
            once: true,
            easing: 'ease-in-out'
        });
        
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
        
        // Mobile menu toggle
        const menuButton = document.getElementById('mobileMenuBtn');
        const mobileMenu = document.querySelector('.mobile-menu');
        
        menuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
        });
        
        // Scroll to top button
        const scrollToTopBtn = document.querySelector('.scroll-top-btn');
        
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                scrollToTopBtn.classList.add('show');
            } else {
                scrollToTopBtn.classList.remove('show');
            }
        });
        
        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        // Close mobile menu when clicking on links
        document.querySelectorAll('.mobile-menu a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
            });
        });

        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        primary: '#E63946',
                        secondary: '#1D3557',
                        softred: '#F1FAEE',
                        darkred: '#A8DADC',
                        glass: 'rgba(255, 255, 255, 0.15)',
                        darkglass: 'rgba(29, 53, 87, 0.1)'
                    },
                    boxShadow: {
                        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
                        'card': '0 4px 30px rgba(0, 0, 0, 0.05)',
                        'deep': '0 10px 30px rgba(0, 0, 0, 0.15)'
                    },
                    backdropBlur: {
                        'sm': '6px',
                    },
                    fontFamily: {
                        'sans': ['Montserrat', 'sans-serif'],
                        'serif': ['Playfair Display', 'serif']
                    }
                }
            }
        }
        // Tampilkan popup saat halaman dimuat
document.addEventListener('DOMContentLoaded', function() {
    const popup = document.getElementById('warningPopup');
    const closeButton = document.getElementById('closePopup');
    const continueButton = document.getElementById('continueButton');
    
    // Tampilkan popup
    popup.classList.remove('hidden');
    
    // Fungsi untuk menyembunyikan popup
    function hidePopup() {
        popup.classList.add('hidden');
    }
    
    // Event listener untuk tombol tutup dan lanjutkan
    closeButton.addEventListener('click', hidePopup);
    continueButton.addEventListener('click', hidePopup);
});

