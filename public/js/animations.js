// Scroll animation script for portfolio

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
  // Setup scroll animations
  const setupScrollAnimations = () => {
    // Find all elements that should be animated on scroll
    const animatedElements = document.querySelectorAll('.skill-item, .experience-item, .contact-info-container');
    
    // Observer callback
    const onIntersect = (entries, observer) => {
      entries.forEach(entry => {
        // Add animation class when element comes into view
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          observer.unobserve(entry.target); // Stop observing once animated
        }
      });
    };
    
    // Create IntersectionObserver
    const observer = new IntersectionObserver(onIntersect, {
      root: null, // Viewport
      threshold: 0.15, // When at least 15% of the element is visible
      rootMargin: '0px 0px -50px 0px' // Trigger slightly before element enters view
    });
    
    // Observe each element
    animatedElements.forEach(el => observer.observe(el));
  };
  
  // Setup parallax effect for background elements
  const setupParallaxEffect = () => {
    const parallaxElements = document.querySelectorAll('[data-parallax]');
    
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      
      parallaxElements.forEach(el => {
        const speed = parseFloat(el.getAttribute('data-parallax') || '0.1');
        const offsetY = scrollY * speed;
        el.style.transform = `translateY(${offsetY}px)`;
      });
    });
  };
  
  // Setup interactive hover effects
  const setupHoverEffects = () => {
    // Profile image interaction
    const profileContainer = document.querySelector('.profile-image-container');
    
    if (profileContainer) {
      profileContainer.addEventListener('mousemove', (e) => {
        const { left, top, width, height } = profileContainer.getBoundingClientRect();
        const x = (e.clientX - left) / width - 0.5;
        const y = (e.clientY - top) / height - 0.5;
        
        profileContainer.style.transform = `perspective(1000px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) scale(1.03)`;
      });
      
      profileContainer.addEventListener('mouseleave', () => {
        profileContainer.style.transform = 'perspective(1000px) rotateY(0) rotateX(0) scale(1)';
      });
    }
  };
  
  // Setup mobile menu functionality
  const setupMobileMenu = () => {
    const menuButton = document.querySelector('.mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuLinks = mobileMenu?.querySelectorAll('a');
    
    if (menuButton && mobileMenu) {
      menuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
      });
      
      // Close menu when a link is clicked
      menuLinks?.forEach(link => {
        link.addEventListener('click', () => {
          mobileMenu.classList.remove('active');
        });
      });
    }
  };
  
  // Initialize all functionality
  setupScrollAnimations();
  setupParallaxEffect();
  setupHoverEffects();
  setupMobileMenu();
});
