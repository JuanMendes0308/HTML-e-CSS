// ================= DADOS DE PRODUTOS ================= 
const products = [
    {
        id: 1,
        name: "Agenda Colorida",
        category: "Papelaria",
        price: 45.90,
        icon: "📔"
    },
    {
        id: 2,
        name: "Garrafinha Térmica",
        category: "Utensílios",
        price: 89.90,
        icon: "🍶"
    },
    {
        id: 3,
        name: "Chaveiro Acrílico",
        category: "Acessórios",
        price: 24.90,
        icon: "🔑"
    },
    {
        id: 4,
        name: "Caneca Especial",
        category: "Presentes",
        price: 34.90,
        icon: "☕"
    },
    {
        id: 5,
        name: "Kit Maternidade",
        category: "Festa",
        price: 159.90,
        icon: "👶"
    },
    {
        id: 6,
        name: "Topo de Bolo",
        category: "Festa",
        price: 29.90,
        icon: "🎂"
    }
];

let currentIndex = 0;

// ================= MENU MÓVEL ================= 
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle) {
    menuToggle.addEventListener("click", () => {
        menuToggle.classList.toggle("active");
        navMenu.classList.toggle("active");
    });

    document.querySelectorAll("#navMenu a").forEach(link => {
        link.addEventListener("click", () => {
            menuToggle.classList.remove("active");
            navMenu.classList.remove("active");
        });
    });
}

// ================= RENDERIZAR CARROSSEL ================= 
function renderCarousel() {
    const track = document.getElementById("carouselTrack");
    if (!track) return;
    
    track.innerHTML = products.map(product => `
        <div class="product-card">
            <div class="product-image">
                <span style="font-size: 3rem;">${product.icon}</span>
                <div class="product-overlay">${product.name}</div>
            </div>
            <div class="product-info">
                <span class="product-category">${product.category}</span>
                <h3 class="product-name">${product.name}</h3>
                <p class="product-price">R$ ${product.price.toFixed(2)}</p>
                <button class="product-btn">Adicionar ao Carrinho</button>
            </div>
        </div>
    `).join("");
}

// ================= CONTROLE DO CARROSSEL ================= 
function updateCarouselPosition() {
    const track = document.getElementById("carouselTrack");
    if (!track) return;
    
    const cardWidth = track.children[0]?.offsetWidth || 0;
    const gap = 32;
    const moveDistance = cardWidth + gap;
    
    track.style.transform = `translateX(-${currentIndex * moveDistance}px)`;
}

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

if (prevBtn && nextBtn) {
    nextBtn.addEventListener("click", () => {
        if (currentIndex < products.length - 1) {
            currentIndex++;
            updateCarouselPosition();
        }
    });

    prevBtn.addEventListener("click", () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarouselPosition();
        }
    });
}

// ================= INICIALIZAÇÃO ================= 
document.addEventListener("DOMContentLoaded", () => {
    renderCarousel();
    updateCarouselPosition();
});
