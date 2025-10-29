// Animación con GSAP
document.addEventListener("DOMContentLoaded", () => {
    const elementoFrase = document.querySelector(".frase");
    if (elementoFrase) { // Verifica que el elemento exista
        gsap.fromTo(
            elementoFrase,
            { x: "-100vw" },
            {
                x: "100vw",
                duration: 15,
                ease: "power1.inOut",
                repeat: -1,
                repeatDelay: 1,
                onRepeat: () => {
                    gsap.set(elementoFrase, { x: "-100vw" });
                }
            }
        );
    } else {
        console.error("No se encontró el elemento con clase 'frase'");
    }
});

//animacion con gsap
function openModal(imageUrls, title) {
    const modal = document.getElementById('imageModal');
    const modalImageContainer = document.getElementById('modalImageContainer');
    const modalTitle = document.getElementById('modalTitle');
    
    // Set modal title
    modalTitle.textContent = title;
    
    // Clear previous images
    modalImageContainer.innerHTML = '';
    
    // Add new images
    if (Array.isArray(imageUrls)) {
        imageUrls.forEach(url => {
            const col = document.createElement('div');
            col.className = 'col-md-4';
            const img = document.createElement('img');
            img.src = url;
            img.className = 'img-fluid';
            img.alt = title;
            col.appendChild(img);
            modalImageContainer.appendChild(col);
        });
    } else {
        const col = document.createElement('div');
        col.className = 'col-md-12';
        const img = document.createElement('img');
        img.src = imageUrls;
        img.className = 'img-fluid';
        img.alt = title;
        col.appendChild(img);
        modalImageContainer.appendChild(col);
    }
    
    // Show modal
    modal.classList.add('show');
    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.classList.remove('show');
    modal.style.display = 'none';
}

//animacion en actividades con javascript
// Esperamos a que cargue el DOM
document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll('.hover-scale-card');

    cards.forEach(card => {
        const scaleItems = card.querySelectorAll('.scale-item');

        // Mouse enter
        card.addEventListener('mouseenter', () => {
            scaleItems.forEach(item => {
                item.style.transform = 'scale(1.12)';
            });
        });

        // Mouse leave
        card.addEventListener('mouseleave', () => {
            scaleItems.forEach(item => {
                item.style.transform = 'scale(1)';
            });
        });

        // BONUS: Soporte táctil (móviles)
        card.addEventListener('touchstart', () => {
            scaleItems.forEach(item => {
                item.style.transform = 'scale(1.08)';
            });
        }, { passive: true });

        card.addEventListener('touchend', () => {
            setTimeout(() => {
                scaleItems.forEach(item => {
                    item.style.transform = 'scale(1)';
                });
            }, 150);
        });
    });
});

// === ANIMACIÓN LOGO HERO AL CARGAR PÁGINA ===
document.addEventListener("DOMContentLoaded", () => {
    const heroLogo = document.querySelector(".hero-logo-animated");

    if (heroLogo) {
        // Aseguramos que empiece oculto y pequeño
        gsap.set(heroLogo, {
            scale: 0.3,
            opacity: 0,
            y: -50
        });

        // Animación de entrada: crece, sube y rebota
        gsap.to(heroLogo, {
            scale: 1,
            opacity: 1,
            y: 0,
            duration: 1.4,
            ease: "back.out(1.6)", // Rebote suave
            delay: 0.3
        });
    }
});

// Animación con GSAP
document.addEventListener("DOMContentLoaded", () => {
    const elementoFrase = document.querySelector(".frase");
    if (elementoFrase) {
        gsap.fromTo(
            elementoFrase,
            { x: "-100vw" },
            {
                x: "100vw",
                duration: 8,           // ← MENOS TIEMPO: 8 segundos (antes 15)
                ease: "none",          // ← Movimiento lineal (más natural para scroll infinito)
                repeat: -1,
                repeatDelay: 0.5,      // ← MENOS ESPERA: 0.5 segundos (antes 1)
                onRepeat: () => {
                    gsap.set(elementoFrase, { x: "-100vw" });
                }
            }
        );
    } else {
        console.error("No se encontró el elemento con clase 'frase'");
    }
});

// ScrollTrigger: Mapa y texto
gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(".gsap-map", 
    { y: 100, opacity: 0 },
    {
        y: 0,
        opacity: 1,
        duration: 2.2,
        ease: "power3.out",
        scrollTrigger: {
            trigger: "#home",
            start: "top 80%",
            end: "bottom 60%",
            toggleActions: "play none none reverse"
        }
    }
);

gsap.fromTo(".content-wrapper", 
    { x: -100, opacity: 0 },
    {
        x: 0,
        opacity: 1,
        duration: 2,
        ease: "power3.out",
        delay: 0.3,
        scrollTrigger: {
            trigger: "#home",
            start: "top 80%",
            toggleActions: "play none none reverse"
        }
    }
);

// === ANIMACIÓN ACTIVIDADES CON GSAP + SCROLLTRIGGER ===
gsap.fromTo("[data-gsap='actividad']", 
    {
        y: 100,
        opacity: 0,
        scale: 0.85
    },
    {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.9,
        ease: "back.out(1.7)",
        stagger: 0.18,
        scrollTrigger: {
            trigger: "#about",
            start: "top 85%",
            toggleActions: "play none none reverse"
        }
    }
);

// === HOVER EFECTO EN ACTIVIDADES ===
const actividadItems = document.querySelectorAll("[data-gsap='actividad']");

actividadItems.forEach(item => {
    const container = item.querySelector('.hover-scale-card');
    const scaleItems = item.querySelectorAll('.scale-item');

    item.addEventListener('mouseenter', () => {
        // Animar contenedor
        gsap.to(container, {
            y: -20,
            scale: 1.06,
            boxShadow: "0 25px 50px rgba(245, 211, 89, 0.35)",
            duration: 0.5,
            ease: "power2.out"
        });
        // Animar logo y botón
        gsap.to(scaleItems, {
            scale: 1.15,
            duration: 0.5,
            ease: "back.out(1.4)"
        });
    });

    item.addEventListener('mouseleave', () => {
        gsap.to(container, {
            y: 0,
            scale: 1,
            boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
            duration: 0.5,
            ease: "power2.out"
        });
        gsap.to(scaleItems, {
            scale: 1,
            duration: 0.5,
            ease: "power2.out"
        });
    });
});

// === ANIMACIÓN TARIFAS CON GSAP + SCROLLTRIGGER ===
gsap.fromTo("[data-gsap='tarifa']", 
    {
        y: 80,
        opacity: 0,
        scale: 0.9
    },
    {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "back.out(1.4)",
        stagger: 0.2,
        scrollTrigger: {
            trigger: "#cuota",
            start: "top 80%",
            toggleActions: "play none none reverse"
        }
    }
);

// === HOVER EFECTO EN TARIFAS ===
const tarifaItems = document.querySelectorAll("[data-gsap='tarifa']");

tarifaItems.forEach(item => {
    const card = item.querySelector('.flip-card');

    item.addEventListener('mouseenter', () => {
        gsap.to(card, {
            y: -15,
            scale: 1.05,
            boxShadow: "0 20px 40px rgba(245, 211, 89, 0.4)", // Amarillo suave
            duration: 0.4,
            ease: "power2.out"
        });
    });

    item.addEventListener('mouseleave', () => {
        gsap.to(card, {
            y: 0,
            scale: 1,
            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
            duration: 0.4,
            ease: "power2.out"
        });
    });
});

// === ANIMACIÓN FAQ  ===
gsap.fromTo("[data-gsap='faq']", 
    {
        y: 80,
        opacity: 0,
        scale: 0.9
    },
    {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "back.out(1.4)",
        stagger: 0.15,
        scrollTrigger: {
            trigger: "#preguntas",
            start: "top 80%",
            toggleActions: "play none none reverse"
        }
    }
);

// Hover effect para FAQ
const faqItems = document.querySelectorAll("[data-gsap='faq']");
faqItems.forEach(item => {
    const card = item.querySelector('.flip-card');

    item.addEventListener('mouseenter', () => {
        gsap.to(card, {
            y: -15,
            scale: 1.05,
            boxShadow: "0 20px 40px rgba(245, 211, 89, 0.4)",
            duration: 0.4,
            ease: "power2.out"
        });
    });

    item.addEventListener('mouseleave', () => {
        gsap.to(card, {
            y: 0,
            scale: 1,
            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
            duration: 0.4,
            ease: "power2.out"
        });
    });
});   