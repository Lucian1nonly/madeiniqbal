document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Initialize AOS (Animate On Scroll)
    AOS.init({
        once: true,
        offset: 100,
        duration: 800,
        easing: 'ease-out-cubic',
    });

    // 2. Initialize Swiper for Testimonials
    const swiper = new Swiper('.mySwiper', {
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        effect: 'fade',
        speed: 1000,
    });

    // 3. Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('nav-scrolled');
        } else {
            navbar.classList.remove('nav-scrolled');
        }
    });

    // 4. Language Switcher Logic (Simple Implementation)
    const langSwitch = document.getElementById('lang-switch');
    const htmlTag = document.documentElement;
    
    // Translation Dictionary
    const translations = {
        en: {
            nav_home: "Home",
            nav_dest: "Destinations",
            nav_act: "Activities",
            nav_cars: "Transport",
            nav_contact: "Contact",
            btn_book: "Book Now",
            hero_sub: "Premium Bali Experience",
            hero_title_1: "Luxury",
            hero_title_2: "Bali Journey",
            hero_desc: "Private tours, premium transport, and unforgettable tropical memories tailored just for you.",
            btn_explore: "Explore Tours",
            btn_whatsapp: "WhatsApp Us",
            sec_dest_sub: "The Paradise",
            sec_dest_title: "Exclusive Destinations",
            sec_act_sub: "Experience More",
            sec_act_title: "Curated Activities",
            sec_car_sub: "Comfort & Style",
            sec_car_title: "Premium Fleet",
            sec_prog_title: "Signature Itineraries"
        },
        ar: {
            nav_home: "الرئيسية",
            nav_dest: "الوجهات",
            nav_act: "الأنشطة",
            nav_cars: "النقل",
            nav_contact: "اتصل بنا",
            btn_book: "احجز الآن",
            hero_sub: "تجربة بالي الفاخرة",
            hero_title_1: "رحلة",
            hero_title_2: "بالي الاستثنائية",
            hero_desc: "جولات خاصة، نقل فاخر، وذكريات استوائية لا تُنسى مصممة خصيصاً لك.",
            btn_explore: "استكشف الجولات",
            btn_whatsapp: "راسلنا واتساب",
            sec_dest_sub: "الجنة",
            sec_dest_title: "وجهات حصرية",
            sec_act_sub: "المزيد من التجارب",
            sec_act_title: "أنشطة مختارة",
            sec_car_sub: "راحة وأناقة",
            sec_car_title: "أسطول السيارات",
            sec_prog_title: "برامج مميزة"
        }
    };

    let currentLang = 'en';

    langSwitch.addEventListener('click', () => {
        // Toggle Language
        currentLang = currentLang === 'en' ? 'ar' : 'en';
        
        // Update HTML Attributes
        htmlTag.setAttribute('lang', currentLang);
        htmlTag.setAttribute('dir', currentLang === 'ar' ? 'rtl' : 'ltr');

        // Update Text Content
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[currentLang][key]) {
                element.textContent = translations[currentLang][key];
            }
        });

        // Update Button Text
        langSwitch.textContent = currentLang === 'en' ? 'EN / AR' : 'AR / EN';
    });
});document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Initialize AOS
    AOS.init({
        once: true,
        offset: 50,
        duration: 800,
        easing: 'ease-out-cubic',
    });

    // 2. Navbar Scroll Effect
    const navBg = document.getElementById('nav-bg');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navBg.classList.add('scrolled');
        } else {
            navBg.classList.remove('scrolled');
        }
    });

    // 3. Initialize Swiper
    const swiper = new Swiper('.testimonial-swiper', {
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        effect: 'fade',
        speed: 1000,
        fadeEffect: {
            crossFade: true
        },
    });

    // 4. Language Switcher
    const langSwitchBtn = document.getElementById('lang-switch');
    const langIcon = document.getElementById('lang-icon');
    const htmlTag = document.documentElement;
    
    // Translations
    const translations = {
        en: {
            nav_home: "Home",
            nav_dest: "Destinations",
            nav_act: "Activities",
            nav_cars: "Transport",
            nav_contact: "Contact",
            btn_book: "Book Now",
            hero_sub: "Premium Bali Experience",
            hero_title_1: "Luxury Bali",
            hero_title_2: "Journey",
            hero_desc: "Private tours, premium transport, and unforgettable tropical memories tailored exclusively for you.",
            btn_explore: "Explore Tours",
            btn_whatsapp: "WhatsApp Us",
            sec_dest_sub: "The Paradise",
            sec_dest_title: "Exclusive Destinations",
            sec_act_sub: "Experience More",
            sec_act_title: "Curated Activities",
            sec_car_sub: "Comfort & Style",
            sec_car_title: "Premium Fleet",
            sec_prog_title: "Tour Programs",
            sec_contact_sub: "Get in Touch",
            footer_copy: "© 2026 AlFauzan Bali Tour. All Rights Reserved."
        },
        ar: {
            nav_home: "الرئيسية",
            nav_dest: "الوجهات",
            nav_act: "الأنشطة",
            nav_cars: "النقل",
            nav_contact: "اتصل بنا",
            btn_book: "احجز الآن",
            hero_sub: "تجربة بالي الفاخرة",
            hero_title_1: "رحلة",
            hero_title_2: "بالي الاستثنائية",
            hero_desc: "جولات خاصة، نقل فاخر، وذكريات استوائية لا تُنسى مصممة خصيصاً لك.",
            btn_explore: "استكشف الجولات",
            btn_whatsapp: "راسلنا واتساب",
            sec_dest_sub: "الجنة",
            sec_dest_title: "وجهات حصرية",
            sec_act_sub: "المزيد من التجارب",
            sec_act_title: "أنشطة مختارة",
            sec_car_sub: "راحة وأناقة",
            sec_car_title: "أسطول السيارات",
            sec_prog_title: "برامج الجولات",
            sec_contact_sub: "تواصل معنا",
            footer_copy: "جميع الحقوق محفوظة © 2026 الفوزان بالي تور"
        }
    };

    let currentLang = 'en';

    langSwitchBtn.addEventListener('click', () => {
        // Toggle Logic
        currentLang = currentLang === 'en' ? 'ar' : 'en';
        
        // Apply Attributes
        htmlTag.setAttribute('lang', currentLang);
        htmlTag.setAttribute('dir', currentLang === 'ar' ? 'rtl' : 'ltr');
        
        // Update Icon
        langIcon.textContent = currentLang === 'en' ? 'AR' : 'EN';
        
        // Apply Fonts
        if (currentLang === 'ar') {
            document.body.classList.remove('font-poppins');
            document.body.classList.add('font-cairo');
            document.querySelectorAll('h1, h2, h3, h4, h5, h6').forEach(el => {
                el.classList.remove('font-playfair');
                el.classList.add('font-cairo');
            });
            document.querySelectorAll('.font-playfair').forEach(el => {
                el.classList.remove('font-playfair');
                el.classList.add('font-cairo');
            });
        } else {
            document.body.classList.remove('font-cairo');
            document.body.classList.add('font-poppins');
            document.querySelectorAll('h1, h2, h3, h4, h5, h6').forEach(el => {
                el.classList.remove('font-cairo');
                el.classList.add('font-playfair');
            });
            // Fix nav logo specifically
            document.querySelector('nav .group span').classList.remove('font-cairo');
            document.querySelector('nav .group span').classList.add('font-playfair');
        }

        // Update Text Content
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[currentLang][key]) {
                element.textContent = translations[currentLang][key];
            }
        });

        // Re-render AOS if needed
        AOS.refresh();
    });
});