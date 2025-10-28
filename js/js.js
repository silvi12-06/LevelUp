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

//scrolltrigger mapa, animación con GSAP
document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);

    // Animación del mapa
    gsap.fromTo(".gsap-map", 
        {
            y: 100,
            opacity: 0
        },
        {
            y: 0,
            opacity: 1,
            duration: 2.2,
            ease: "power3.out",
            scrollTrigger: {
                trigger: "#home",
                start: "top 80%",        // Cuando el top de #home llegue al 80% de la ventana
                end: "bottom 60%",
                toggleActions: "play none none reverse", // Se reproduce al entrar, se revierte al salir
                // markers: true,       // Quitar en producción
            }
        }
    );

    //animar el texto también (entrada desde izquierda)
    gsap.fromTo(".content-wrapper", 
        {
            x: -100,
            opacity: 0
        },
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
});

        