// Smooth scrolling and interactive features for Heartwood Wellbeing

document.addEventListener('DOMContentLoaded', function() {
    
    // Add fade-in animation to sections when they come into view
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);

    // Observe all sections for animation
    const sections = document.querySelectorAll('.section, .pricing-card, .feature-card, .service-item');
    sections.forEach(section => {
        observer.observe(section);
    });

    // Add hover effects to pricing cards
    const pricingCards = document.querySelectorAll('.pricing-card');
    pricingCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = this.classList.contains('featured') ? 'scale(1.05)' : 'translateY(0) scale(1)';
        });
    });

    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add active state to navigation
    window.addEventListener('scroll', function() {
        const scrollPos = window.scrollY + 100;
        const sections = document.querySelectorAll('section[id]');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                // Remove active class from all nav links
                document.querySelectorAll('.nav-menu a').forEach(link => {
                    link.classList.remove('active');
                });
                
                // Add active class to current section link
                const activeLink = document.querySelector(`.nav-menu a[href="#${sectionId}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    });

    // Add subtle parallax effect to hero section
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallax = document.querySelector('.hero');
        
        if (parallax) {
            const speed = scrolled * 0.5;
            parallax.style.backgroundPosition = `center ${speed}px`;
        }
    });

    // Add loading animation
    window.addEventListener('load', function() {
        document.body.style.opacity = '1';
        document.body.style.transition = 'opacity 0.5s ease-in-out';
    });

    // Set initial body opacity for loading effect
    document.body.style.opacity = '0';
});

// Add custom cursor effects for interactive elements
document.addEventListener('mousemove', function(e) {
    const interactiveElements = document.querySelectorAll('.btn-primary, .btn-secondary, .cta-button, .pricing-card');
    
    interactiveElements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const isHovering = e.clientX >= rect.left && 
                          e.clientX <= rect.right && 
                          e.clientY >= rect.top && 
                          e.clientY <= rect.bottom;
        
        if (isHovering) {
            document.body.style.cursor = 'pointer';
        }
    });
});

// Form validation for contact (if form is added later)
function validateContactForm(formData) {
    const errors = [];
    
    if (!formData.name || formData.name.trim().length < 2) {
        errors.push('Please enter a valid name');
    }
    
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
        errors.push('Please enter a valid email address');
    }
    
    if (!formData.phone || !/^[\d\s\-\+\(\)]+$/.test(formData.phone)) {
        errors.push('Please enter a valid phone number');
    }
    
    return errors;
}

// Google Analytics or tracking setup (placeholder)
function setupAnalytics() {
    // Add Google Analytics or other tracking code here
    console.log('Analytics ready for Heartwood Wellbeing');
}

// Call setup functions
setupAnalytics(); 