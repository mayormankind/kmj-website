
        // Theme toggle
        const themeToggle = document.getElementById('theme-toggle');
        const html = document.documentElement;
        
        themeToggle.addEventListener('click', () => {
            html.classList.toggle('dark');
            localStorage.setItem('theme', html.classList.contains('dark') ? 'dark' : 'light');
        });
        
        // Mobile menu toggle
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
        
        // Close mobile menu when clicking a link
        document.querySelectorAll('#mobile-menu a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
        
        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });
        
        // Menu items data
        const menuItems = [
            {
                name: "Small Chops Platter",
                description: "Assortment of puff puff, spring rolls, samosas, and meat pies",
                price: "₦15,000 per tray",
                image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            },
            {
                name: "Jollof Rice & Chicken",
                description: "Flavorful Nigerian jollof rice with fried, grilled or roasted chicken",
                price: "₦8,000 per plate",
                image: "https://images.unsplash.com/photo-1603064752734-4c48eff53d05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1588&q=80"
            },
            {
                name: "Pepper Soup Assortment",
                description: "Spicy Nigerian pepper soup with assorted meats or fish",
                price: "₦12,000 per serving",
                image: "https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            },
            {
                name: "Suya Platter",
                description: "Grilled spicy skewered meat with onions and pepper",
                price: "₦10,000 per platter",
                image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1635&q=80"
            },
            {
                name: "Mini Dessert Table",
                description: "Assortment of mini cakes, cupcakes, and pastries",
                price: "₦25,000 for 50 pieces",
                image: "https://images.unsplash.com/photo-1550617931-e17a7b70dce2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            },
            {
                name: "Signature Cocktails",
                description: "Custom cocktails and mocktails for your event",
                price: "₦5,000 per glass",
                image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            }
        ];
        
        // Generate menu items
        const menuContainer = document.querySelector('#menu .grid');
        menuItems.forEach(item => {
            const menuItem = document.createElement('div');
            menuItem.className = 'menu-item bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300';
            menuItem.innerHTML = `
                <div class="relative h-48 overflow-hidden">
                    <img src="${item.image}" alt="${item.name}" class="w-full h-full object-cover">
                    <div class="menu-overlay absolute inset-0 bg-primary bg-opacity-70 flex items-center justify-center opacity-0 transition-all duration-300">
                        <div class="text-center text-white p-4">
                            <h4 class="font-bold text-lg mb-2">${item.name}</h4>
                            <p class="text-sm">${item.description}</p>
                        </div>
                    </div>
                </div>
                <div class="p-4">
                    <h3 class="font-bold text-lg mb-1">${item.name}</h3>
                    <p class="text-gray-600 dark:text-gray-300 text-sm mb-2">${item.description}</p>
                    <p class="text-primary font-medium">${item.price}</p>
                </div>
            `;
            menuContainer.appendChild(menuItem);
        });
        
        // Gallery data
        const galleryItems = [
            {
                image: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
                caption: "Wedding Reception Setup"
            },
            {
                image: "https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
                caption: "Gourmet Appetizers"
            },
            {
                image: "https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
                caption: "Corporate Event Catering"
            },
            {
                image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
                caption: "Elegant Table Setting"
            },
            {
                image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
                caption: "Small Chops Display"
            },
            {
                image: "https://images.unsplash.com/photo-1550617931-e17a7b70dce2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
                caption: "Dessert Table"
            },
            {
                image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
                caption: "Signature Cocktails"
            },
            {
                image: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
                caption: "Birthday Celebration"
            }
        ];
        
        // Generate gallery items
        const galleryContainer = document.querySelector('#gallery .grid');
        galleryItems.forEach(item => {
            const galleryItem = document.createElement('div');
            galleryItem.className = 'gallery-item relative group overflow-hidden rounded-lg';
            galleryItem.innerHTML = `
                <img src="${item.image}" alt="${item.caption}" class="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110">
                <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p class="text-white font-medium text-center px-4">${item.caption}</p>
                </div>
            `;
            galleryContainer.appendChild(galleryItem);
        });
        
        // Testimonials data
        const testimonials = [
            {
                name: "Adebisi Johnson",
                role: "Wedding Client",
                content: "KMJ Catering made our wedding day absolutely perfect! The food was delicious and the decor was stunning. Our guests are still talking about it months later.",
                rating: 5
            },
            {
                name: "Chinedu Okonkwo",
                role: "Corporate Client",
                content: "We've used KMJ for three corporate events now and they never disappoint. Professional, punctual, and the food is always top-notch.",
                rating: 5
            },
            {
                name: "Folake Adeleke",
                role: "Birthday Party Client",
                content: "The small chops were the highlight of my daughter's birthday party! So many guests asked for their contact information. Will definitely use them again.",
                rating: 4
            }
        ];
        
        // Generate testimonials carousel
        const testimonialsTrack = document.getElementById('testimonials-track');
        const testimonialDotsEl = document.getElementById('testimonial-dots');
        const prevBtn = document.getElementById('prev-testimonial');
        const nextBtn = document.getElementById('next-testimonial');
        let currentTestimonial = 0;

        function getVisibleCount() {
            if (window.innerWidth >= 1024) return 3;
            if (window.innerWidth >= 768)  return 2;
            return 1;
        }

        if (testimonialsTrack) {
            testimonials.forEach((testimonial, idx) => {
                const slide = document.createElement('div');
                slide.className = 'testimonial-slide';
                slide.innerHTML = `
                    <div class="testimonial-card bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md transition-all duration-300 h-full">
                        <div class="flex items-center mb-4">
                            ${Array(testimonial.rating).fill('<i class="fas fa-star text-yellow-400"></i>').join('')}
                            ${Array(5 - testimonial.rating).fill('<i class="far fa-star text-yellow-400"></i>').join('')}
                        </div>
                        <p class="text-gray-600 dark:text-gray-300 mb-6">"${testimonial.content}"</p>
                        <div class="flex items-center">
                            <div class="w-12 h-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mr-4">
                                <i class="fas fa-user text-primary"></i>
                            </div>
                            <div>
                                <h4 class="font-bold">${testimonial.name}</h4>
                                <p class="text-sm text-gray-500">${testimonial.role}</p>
                            </div>
                        </div>
                    </div>
                `;
                testimonialsTrack.appendChild(slide);

                const dot = document.createElement('button');
                dot.className = `w-3 h-3 rounded-full border-none cursor-pointer transition-all duration-300 ${idx === 0 ? 'bg-primary' : 'bg-gray-300'}`;
                dot.addEventListener('click', () => goToTestimonial(idx));
                testimonialDotsEl.appendChild(dot);
            });

            function goToTestimonial(n) {
                const count  = getVisibleCount();
                const max    = Math.max(0, testimonials.length - count);
                currentTestimonial = Math.min(Math.max(n, 0), max);
                const slideW = testimonialsTrack.children[0] ? testimonialsTrack.children[0].offsetWidth : 0;
                testimonialsTrack.style.transform = `translateX(-${currentTestimonial * slideW}px)`;
                [...testimonialDotsEl.children].forEach((d, i) => {
                    d.className = `w-3 h-3 rounded-full border-none cursor-pointer transition-all duration-300 ${i === currentTestimonial ? 'bg-primary' : 'bg-gray-300'}`;
                });
            }

            if (prevBtn) prevBtn.addEventListener('click', () => goToTestimonial(currentTestimonial - 1));
            if (nextBtn) nextBtn.addEventListener('click', () => goToTestimonial(currentTestimonial + 1));
            window.addEventListener('resize', () => goToTestimonial(currentTestimonial));

            setInterval(() => {
                const count = getVisibleCount();
                const max   = Math.max(0, testimonials.length - count);
                goToTestimonial(currentTestimonial < max ? currentTestimonial + 1 : 0);
            }, 4000);
        }
        
        // ===== HERO BACKGROUND CAROUSEL =====
        const heroSlides = document.querySelectorAll('.hero-slide');
        const heroDotsContainer = document.getElementById('hero-dots');
        let currentHero = 0;

        if (heroSlides.length && heroDotsContainer) {
            heroSlides.forEach((_, i) => {
                const dot = document.createElement('button');
                dot.className = 'hero-dot' + (i === 0 ? ' active' : '');
                dot.addEventListener('click', () => setHeroSlide(i));
                heroDotsContainer.appendChild(dot);
            });

            function setHeroSlide(n) {
                heroSlides[currentHero].classList.remove('active');
                heroDotsContainer.children[currentHero].classList.remove('active');
                currentHero = n;
                heroSlides[currentHero].classList.add('active');
                heroDotsContainer.children[currentHero].classList.add('active');
            }

            setInterval(() => setHeroSlide((currentHero + 1) % heroSlides.length), 5000);
        }

        // Form submission
        const contactForm = document.querySelector('form');
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const templateParams = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                eventType: document.getElementById('event-type').value,
                message: document.getElementById('message').value,
                year: new Date().getFullYear(),
            }
                    
            // send this data to your email
            emailjs.send(
                "service_vcutf9w",
                "template_5d5j77t",
                templateParams
            )
            .then(() => {
                alert("Thank you for your message! We’ll get back to you shortly.");
                contactForm.reset();
             })
             .catch((error) => {
                 console.error("Email failed:", error);
                 alert("Something went wrong. Please try again.");
             });
        });

        // ===== STAGGER DELAYS ON SERVICE CARDS =====
        document.querySelectorAll('.service-card[data-animate]').forEach((el, i) => {
            el.style.transitionDelay = `${i * 0.1}s`;
        });

        // ===== ADD ANIMATE ATTRS TO JS-GENERATED ITEMS =====
        document.querySelectorAll('.menu-item').forEach((el, i) => {
            el.setAttribute('data-animate', 'zoom-in');
            el.style.transitionDelay = `${i * 0.07}s`;
        });
        document.querySelectorAll('.gallery-item').forEach((el, i) => {
            el.setAttribute('data-animate', 'fade-up');
            el.style.transitionDelay = `${i * 0.05}s`;
        });

        // ===== SCROLL REVEAL (IntersectionObserver) =====
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                    revealObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12 });

        document.querySelectorAll('[data-animate]').forEach(el => revealObserver.observe(el));

        // ===== ANIMATED COUNTER =====
        function animateCounter(el) {
            const target   = parseInt(el.dataset.counter, 10);
            const suffix   = el.dataset.suffix || '';
            const duration = 1800;
            let startTime  = null;
            function step(ts) {
                if (!startTime) startTime = ts;
                const progress = Math.min((ts - startTime) / duration, 1);
                el.textContent = Math.floor(progress * target) + suffix;
                if (progress < 1) requestAnimationFrame(step);
            }
            requestAnimationFrame(step);
        }

        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.querySelectorAll('[data-counter]').forEach(animateCounter);
                    counterObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        const aboutSection = document.getElementById('about');
        if (aboutSection) counterObserver.observe(aboutSection);

        // ===== ACTIVE NAV LINK ON SCROLL =====
        const allSections = document.querySelectorAll('section[id]');
        const allNavLinks = document.querySelectorAll('.nav-link');
        window.addEventListener('scroll', () => {
            const pos = window.scrollY + 120;
            allSections.forEach(section => {
                if (pos >= section.offsetTop && pos < section.offsetTop + section.offsetHeight) {
                    allNavLinks.forEach(link => {
                        link.classList.toggle('active', link.getAttribute('href') === '#' + section.id);
                    });
                }
            });
        }, { passive: true });
