document.addEventListener('DOMContentLoaded', function() {
    // Ye selector ab dono classes (.dropdown-menu aur .submenu) ko handle karega
    const dropdown = document.querySelector('.dropdown');
    const dropdownLink = document.querySelector('.dropdown > a');
    const menuToToggle = document.querySelector('.dropdown-menu, .submenu');

    if (dropdownLink && menuToToggle) {
        // Click event for mobile
        dropdownLink.addEventListener('click', function(e) {
            // Check if mobile view
            if (window.innerWidth <= 768) {
                e.preventDefault(); // Page ko upar jump karne se rokega
                e.stopPropagation(); // Click event ko document tak jane se rokega
                menuToToggle.classList.toggle('show');
            }
        });

        // Agar user menu ke bahar click kare toh band ho jaye
        document.addEventListener('click', function(e) {
            if (!dropdown.contains(e.target)) {
                menuToToggle.classList.remove('show');
            }
        });
    }
});