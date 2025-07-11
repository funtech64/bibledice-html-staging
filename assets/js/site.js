// Enhanced site functionality for BibleDice

// Back to top button
document.addEventListener('DOMContentLoaded', function() {
    // Create back to top button if it doesn't exist
    if (!document.querySelector('.back-to-top')) {
        const backToTop = document.createElement('button');
        backToTop.className = 'back-to-top';
        backToTop.innerHTML = '↑';
        backToTop.onclick = () => window.scrollTo(0, 0);
        document.body.appendChild(backToTop);
    }
    
    // Early books toggle functionality
    const toggle = document.getElementById('earlyBooksToggle');
    const table = document.getElementById('earlyBooksTable');
    
    if (toggle && table) {
        toggle.addEventListener('change', function() {
            if (this.checked) {
                table.classList.add('active');
            } else {
                table.classList.remove('active');
            }
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Track dice rolls (optional analytics)
function trackRoll(bookNumber, bookName) {
    console.log(`Rolled: ${bookNumber} - ${bookName}`);
    // Could add Google Analytics or other tracking here
}
