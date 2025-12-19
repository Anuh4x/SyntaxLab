// mobile nav toggles
function bindBurger(burgerId, mobileNavId){
  const b = document.getElementById(burgerId);
  const m = document.getElementById(mobileNavId);
  if(!b || !m) return;
  b.addEventListener('click', ()=> {
    m.style.display = m.style.display === 'flex' ? 'none' : 'flex';
  });
}
bindBurger('burger','mobileNav');
bindBurger('burger2','mobileNav2');
bindBurger('burger3','mobileNav3');

// Contact form demo handler (client-side only)
const form = document.getElementById('contactForm');
if(form){
  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const msg = document.getElementById('formMsg');
    msg.textContent = 'Thanks! Your message was received (demo). We will reply shortly.';
    form.reset();
  });
}
// Smooth Lerp Cursor Glow Effect
const glow = document.getElementById("cursor-glow");

let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;

let glowX = mouseX;
let glowY = mouseY;

// How smooth the glow follows (0.05 = very smooth)
const smoothness = 0.07;

// Track mouse position
document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    glow.style.opacity = 1;
});

// Hide glow when mouse leaves
document.addEventListener("mouseleave", () => {
    glow.style.opacity = 0;
});

// Animation loop for smooth movement
function animateGlow() {
    glowX += (mouseX - glowX) * smoothness;
    glowY += (mouseY - glowY) * smoothness;

    glow.style.transform = `translate(${glowX - 150}px, ${glowY - 150}px)`;

    requestAnimationFrame(animateGlow);
}

animateGlow();
