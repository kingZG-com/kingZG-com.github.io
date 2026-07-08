// Initialize AOS Animation
AOS.init({
    once: true,
    offset: 50,
});

// Theme Toggle Logic (Default Light Mode)
const themeToggleBtns = [
    document.getElementById('theme-toggle'), 
    document.getElementById('theme-toggle-mobile')
];
const themeToggleIcons = [
    document.getElementById('theme-toggle-icon'), 
    document.getElementById('theme-toggle-icon-mobile')
];

function applyTheme(theme) {
    if (theme === 'dark') {
        document.documentElement.classList.add('dark');
        themeToggleIcons.forEach(icon => {
            if (icon) {
                icon.classList.remove('fa-moon');
                icon.classList.add('fa-sun');
            }
        });
    } else {
        document.documentElement.classList.remove('dark');
        themeToggleIcons.forEach(icon => {
            if (icon) {
                icon.classList.remove('fa-sun');
                icon.classList.add('fa-moon');
            }
        });
    }
}

// Check local storage or default to light mode
const savedTheme = localStorage.getItem('theme') || 'light';
applyTheme(savedTheme);

themeToggleBtns.forEach(btn => {
    if (btn) {
        btn.addEventListener('click', () => {
            const currentTheme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            localStorage.setItem('theme', newTheme);
            applyTheme(newTheme);
        });
    }
});

// Mobile Menu Toggle
const menuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        mobileMenu.classList.toggle('flex');
    });

    // Close mobile menu on click
    document.querySelectorAll('#mobile-menu a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            mobileMenu.classList.remove('flex');
        });
    });
}

// Contact Form AJAX Submission
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');
const submitBtn = document.getElementById('submit-btn');
const btnText = document.getElementById('btn-text');
const btnIcon = document.getElementById('btn-icon');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Disable submit button and show loading spinner
        submitBtn.disabled = true;
        btnText.textContent = 'Sending...';
        btnIcon.className = 'fas fa-spinner fa-spin text-sm';
        
        const formData = new FormData(contactForm);
        
        fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: formData
        })
        .then(async (response) => {
            let json = await response.json();
            if (response.status == 200) {
                // Success feedback
                formStatus.className = 'p-4.5 rounded-2xl text-sm font-semibold mb-6 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20';
                formStatus.textContent = 'Thank you! Your message has been sent successfully.';
                formStatus.classList.remove('hidden');
                contactForm.reset();
            } else {
                // Error response
                formStatus.className = 'p-4.5 rounded-2xl text-sm font-semibold mb-6 bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20';
                formStatus.textContent = json.message || 'Something went wrong. Please try again.';
                formStatus.classList.remove('hidden');
            }
        })
        .catch(error => {
            // General connection error
            formStatus.className = 'p-4.5 rounded-2xl text-sm font-semibold mb-6 bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20';
            formStatus.textContent = 'Network error. Please check your internet connection.';
            formStatus.classList.remove('hidden');
        })
        .then(() => {
            // Re-enable button and restore state
            submitBtn.disabled = false;
            btnText.textContent = 'Send Message';
            btnIcon.className = 'fas fa-paper-plane text-sm';
            
            // Auto hide message after 6 seconds
            setTimeout(() => {
                formStatus.classList.add('hidden');
            }, 6000);
        });
    });
}
