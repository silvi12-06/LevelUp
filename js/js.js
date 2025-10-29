//Animación para el modal de las imagenes de actividades
function openModal(images, title) {
  const modalTitle = document.getElementById('modalTitle');
  const modalImageContainer = document.getElementById('modalImageContainer');

  modalTitle.textContent = title;
  modalImageContainer.innerHTML = '';

  const selectedImages = images.slice(0, 6);

  // Crear filas de 3 imágenes
  for (let i = 0; i < selectedImages.length; i += 3) {
    const row = document.createElement('div');
    row.className = 'row g-3 mb-3'; 

    for (let j = i; j < i + 3 && j < selectedImages.length; j++) {
      const col = document.createElement('div');
      col.className = 'col-12 col-md-4';

      const img = document.createElement('img');
      img.src = selectedImages[j];
      img.className = 'img-fluid rounded shadow-sm w-100';
      img.style.height = '220px';
      img.style.objectFit = 'cover';
      img.alt = '${title} - Imagen ${j + 1}';
      img.loading = 'lazy';
      img.style.cursor = 'zoom-in';

      img.onclick = () => openZoomImage(selectedImages[j]);

      col.appendChild(img);
      row.appendChild(col);
    }

    modalImageContainer.appendChild(row);
  }

  const modal = new bootstrap.Modal(document.getElementById('imageModal'));
  modal.show();
}

//Zoom para las imagenes
function openZoomImage(src) {
  const zoomHTML = `
    <div class="modal fade" tabindex="-1">
      <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content bg-dark">
          <div class="modal-body text-center p-2">
            <img src="${src}" class="img-fluid rounded" style="max-height: 90vh;">
          </div>
        </div>
      </div>
    </div>`;

  document.body.insertAdjacentHTML('beforeend', zoomHTML);
  const modalEl = document.body.lastElementChild;
  const modal = new bootstrap.Modal(modalEl);
  modal.show();
  modalEl.addEventListener('hidden.bs.modal', () => modalEl.remove());
}

function closeModal() {
  const modal = bootstrap.Modal.getInstance(document.getElementById('imageModal'));
  if (modal) modal.hide();
}

//Animacion en actividades con javascript para que aumenten el tamaño
document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll('.hover-scale-card');

    cards.forEach(card => {
        const scaleItems = card.querySelectorAll('.scale-item');

        card.addEventListener('mouseenter', () => {
            scaleItems.forEach(item => {
                item.style.transform = 'scale(1.12)';
            });
        });

        card.addEventListener('mouseleave', () => {
            scaleItems.forEach(item => {
                item.style.transform = 'scale(1)';
            });
        });

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

//Animación para el hero 
document.addEventListener("DOMContentLoaded", () => {
    const heroLogo = document.querySelector(".hero-logo-animated");

    if (heroLogo) {
        gsap.set(heroLogo, {
            scale: 0.3,
            opacity: 0,
            y: -50
        });

        gsap.to(heroLogo, {
            scale: 1,
            opacity: 1,
            y: 0,
            duration: 1.4,
            ease: "back.out(1.6)",
            delay: 0.3
        });
    }
});

// Animación con GSAP para la cinta debajo del hero
document.addEventListener("DOMContentLoaded", () => {
    const elementoFrase = document.querySelector(".frase");
    if (elementoFrase) {
        gsap.fromTo(
            elementoFrase,
            { x: "-100vw" },
            {
                x: "100vw",
                duration: 8,          
                ease: "none",         
                repeat: -1,
                repeatDelay: 0.2,      
                onRepeat: () => {
                    gsap.set(elementoFrase, { x: "-100vw" });
                }
            }
        );
    } else {
        console.error("No se encontró el elemento con clase 'frase'");
    }

});

// Animación ScrollTrigger: Mapa y texto
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

//Animación actividades con GSAP y SCROLLTRIGGER
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

//Efecto HOVER en actividades
const actividadItems = document.querySelectorAll("[data-gsap='actividad']");

actividadItems.forEach(item => {
    const container = item.querySelector('.hover-scale-card');
    const scaleItems = item.querySelectorAll('.scale-item');

    item.addEventListener('mouseenter', () => {
        gsap.to(container, {
            y: -20,
            scale: 1.06,
            boxShadow: "0 25px 50px rgba(245, 211, 89, 0.35)",
            duration: 0.5,
            ease: "power2.out"
        });
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

//Aanimación tarifas con GSAP y SCROLLTRIGGER 
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

//Efecto HOVER en tarifas
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

//Animación FAQ
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

//Efecto HOVER para FAQ
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