document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide Icons
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  // ==========================================
  // MOBILE MENU TOGGLE
  // ==========================================
  const menuBtn = document.getElementById('menu-btn');
  const navLinks = document.getElementById('nav-links');

  if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      menuBtn.classList.toggle('open');
      
      // Animate hamburger icon
      const spans = menuBtn.querySelectorAll('span');
      if (menuBtn.classList.contains('open')) {
        spans[0].style.transform = 'rotate(45deg) translate(6px, 6px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
      } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
      }
    });

    // Close menu when a link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuBtn.classList.remove('open');
        menuBtn.querySelectorAll('span').forEach(span => span.style.transform = 'none');
        menuBtn.querySelectorAll('span')[1].style.opacity = '1';
      });
    });
  }

  // ==========================================
  // HEADER SCROLL STYLES
  // ==========================================
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // ==========================================
  // TYPING ANIMATION (HERO)
  // ==========================================
  const typedTextSpan = document.getElementById('typed-text');
  const textArray = ["Desenvolvedor Fullstack", "Criador de Soluções Web", "Especialista React / Node", "Resolvedor de Problemas"];
  const typingSpeed = 100;
  const erasingSpeed = 50;
  const newTextDelay = 2000; // Delay between current and next text
  let textArrayIndex = 0;
  let charIndex = 0;

  function type() {
    if (charIndex < textArray[textArrayIndex].length) {
      typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, typingSpeed);
    } else {
      setTimeout(erase, newTextDelay);
    }
  }

  function erase() {
    if (charIndex > 0) {
      typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(erase, erasingSpeed);
    } else {
      textArrayIndex++;
      if (textArrayIndex >= textArray.length) textArrayIndex = 0;
      setTimeout(type, typingSpeed + 500);
    }
  }

  if (typedTextSpan) {
    typedTextSpan.textContent = "";
    setTimeout(type, 1000);
  }

  // ==========================================
  // SCROLL REVEAL (INTERSECTION OBSERVER)
  // ==========================================
  const reveals = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        // Once revealed, no need to track it anymore
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
  });

  reveals.forEach(reveal => {
    revealObserver.observe(reveal);
  });

  // ==========================================
  // PROJECTS GRID FILTER
  // ==========================================
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      // Toggle active button class
      filterBtns.forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');

      const filterValue = e.target.getAttribute('data-filter');

      projectCards.forEach(card => {
        // Simple hardware accelerated smooth transition
        card.style.opacity = '0';
        card.style.transform = 'scale(0.95)';
        
        setTimeout(() => {
          const category = card.getAttribute('data-category');
          if (filterValue === 'all' || category === filterValue) {
            card.style.display = 'flex';
            // Trigger reflow to restart animation
            card.offsetHeight; 
            card.style.opacity = '1';
            card.style.transform = 'scale(1)';
          } else {
            card.style.display = 'none';
          }
        }, 300); // matches transition time
      });
    });
  });

  // ==========================================
  // CONTACT FORM VALIDATION & SUBMISSION
  // ==========================================
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const submitBtn = contactForm.querySelector('.submit-btn');
      const originalText = submitBtn.innerHTML;
      
      // Simulate API Call sending
      submitBtn.innerHTML = 'Enviando... <i data-lucide="loader" class="animate-spin"></i>';
      if (typeof lucide !== 'undefined') lucide.createIcons();
      
      setTimeout(() => {
        // Success feedback
        submitBtn.innerHTML = 'Mensagem Enviada! <i data-lucide="check"></i>';
        submitBtn.style.background = 'linear-gradient(135deg, #10b981 0%, #059669 100%)'; // Green feedback
        if (typeof lucide !== 'undefined') lucide.createIcons();
        
        contactForm.reset();
        
        // Reset button state after a delay
        setTimeout(() => {
          submitBtn.innerHTML = originalText;
          submitBtn.style.background = '';
          if (typeof lucide !== 'undefined') lucide.createIcons();
        }, 4000);
        
      }, 1500);
    });
  }
});
