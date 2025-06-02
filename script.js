// Initialize AOS (Animate on Scroll)
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// Custom cursor
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    
    setTimeout(() => {
        cursorFollower.style.left = e.clientX + 'px';
        cursorFollower.style.top = e.clientY + 'px';
    }, 100);
});

// Typing animation
const typed = new Typed('.typing', {
    strings: ['Student', 'Web Developer', 'Programmer'],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

// Mobile menu toggle
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');
let menuOpen = false;

menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtn.classList.add('open');
        navLinks.style.display = 'flex';
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '100%';
        navLinks.style.left = '0';
        navLinks.style.width = '100%';
        navLinks.style.background = 'white';
        navLinks.style.padding = '1rem';
        navLinks.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        navLinks.style.display = 'none';
        menuOpen = false;
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        
        // Close mobile menu if open
        if (menuOpen) {
            menuBtn.click();
        }
    });
});

// Active navigation link on scroll
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute('id');
        }
    });
    
    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href').slice(1) === current) {
            item.classList.add('active');
        }
    });
});

// Scroll to top button
const scrollToTopBtn = document.querySelector('.scroll-to-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.classList.add('active');
    } else {
        scrollToTopBtn.classList.remove('active');
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Form handling
const contactForm = document.querySelector('.contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const message = document.querySelector('#message').value;
    
    // Here you would typically send this data to a server
    // For now, we'll just log it
    console.log('Form submitted:', { name, email, message });
    
    // Clear form
    contactForm.reset();
    
    // Show success message (you can customize this)
    alert('Thank you for your message! I will get back to you soon.');
});

// Skill progress animation
const skillItems = document.querySelectorAll('.skill-item');

const animateSkills = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.querySelector('.progress').style.width = 
                entry.target.querySelector('.progress').style.width;
            observer.unobserve(entry.target);
        }
    });
};

const skillsObserver = new IntersectionObserver(animateSkills, {
    threshold: 0.5
});

skillItems.forEach(item => {
    skillsObserver.observe(item);
});

// Project card hover effect
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    const links = card.querySelectorAll('.project-link');
    
    card.addEventListener('mouseenter', () => {
        links.forEach((link, index) => {
            setTimeout(() => {
                link.style.transform = 'translateY(0)';
                link.style.opacity = '1';
            }, index * 100);
        });
    });
    
    card.addEventListener('mouseleave', () => {
        links.forEach(link => {
            link.style.transform = 'translateY(20px)';
            link.style.opacity = '0';
        });
    });
});