import './style.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from '@studio-freight/lenis'

gsap.registerPlugin(ScrollTrigger);

// Initialize Lenis for buttery smooth scroll
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smooth: true
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}
requestAnimationFrame(raf)

// Hero Dual Clip-Path Logic
const hero = document.getElementById('hero')
const panelLeft = document.getElementById('panelLeft')
const divider = document.getElementById('heroDivider')
const parallaxBgs = document.querySelectorAll('.parallax-bg')
const leftTextP = document.querySelector('.left-text p')
const rightTextP = document.querySelector('.right-text p')

// Initial state: paragraphs are slightly faded until hovered
gsap.set([leftTextP, rightTextP], { opacity: 0 })

if (hero && panelLeft) {
  hero.addEventListener('mousemove', (e) => {
    const isLeft = e.clientX < window.innerWidth / 2;
    const xPercent = isLeft ? 100 : 0;
    
    // Split screen logic
    gsap.to(panelLeft, {
      clipPath: `polygon(0 0, ${xPercent}% 0, ${xPercent}% 100%, 0 100%)`,
      duration: 1.2,
      ease: "power3.out",
      overwrite: "auto"
    });
    
    if (divider) {
      gsap.to(divider, {
        left: `${xPercent}%`,
        duration: 1.2,
        ease: "power3.out",
        overwrite: "auto"
      });
    }

    // Hardware accelerated Parallax logic for mountains
    const shiftX = (e.clientX / window.innerWidth - 0.5) * -80; 
    
    gsap.to(parallaxBgs, {
      x: shiftX,
      duration: 1.5,
      ease: "power2.out",
      overwrite: "auto"
    });

    // Reveal text on hover
    gsap.to(leftTextP, {
      opacity: isLeft ? 1 : 0,
      y: isLeft ? 0 : 10,
      duration: 0.8,
      ease: "power2.out",
      overwrite: "auto"
    });

    gsap.to(rightTextP, {
      opacity: !isLeft ? 1 : 0,
      y: !isLeft ? 0 : 10,
      duration: 0.8,
      ease: "power2.out",
      overwrite: "auto"
    });
  });
  
  hero.addEventListener('mouseleave', () => {
    gsap.to(panelLeft, {
      clipPath: `polygon(0 0, 50% 0, 50% 100%, 0 100%)`,
      duration: 1.2,
      ease: "power3.out",
      overwrite: "auto"
    });
    
    if (divider) {
      gsap.to(divider, {
        left: `50%`,
        duration: 1.2,
        ease: "power3.out",
        overwrite: "auto"
      });
    }

    gsap.to(parallaxBgs, {
      x: 0,
      duration: 1.5,
      ease: "power3.out",
      overwrite: "auto"
    });

    // Hide paragraphs when mouse leaves
    gsap.to([leftTextP, rightTextP], {
      opacity: 0,
      y: 10,
      duration: 0.8,
      ease: "power2.out",
      overwrite: "auto"
    });
  });
}

// Magnetic Button Logic
const magneticWrap = document.getElementById('magneticWrap')
const magneticBtn = document.getElementById('magneticBtn')

if (magneticWrap && magneticBtn) {
  magneticWrap.addEventListener('mousemove', (e) => {
    const rect = magneticWrap.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    gsap.to(magneticBtn, {
      x: x * 0.4,
      y: y * 0.4,
      duration: 0.6,
      ease: "power2.out",
      overwrite: "auto"
    });
  });
  
  magneticWrap.addEventListener('mouseleave', () => {
    gsap.to(magneticBtn, {
      x: 0,
      y: 0,
      duration: 1,
      ease: "elastic.out(1, 0.3)",
      overwrite: "auto"
    });
  });
}

// ═══════════════════════════════════════════════════════════
//   SCROLL ANIMATIONS (Hero Descent & Conversion Reveal)
// ═══════════════════════════════════════════════════════════

// 2. Dramatic Pause & Typing Reveal in Conversion Section
const convTitle = document.querySelector('.conversion-title');
const convSub = document.querySelector('.conversion-sub');

// Função para quebrar o texto em spans e manter o layout intacto (evitando que o texto nasça do centro)
function splitTextToSpans(element) {
  const text = element.innerHTML;
  element.innerHTML = '';
  const fragments = text.split(/(<br\s*\/?>)/i);
  fragments.forEach(frag => {
    if (frag.toLowerCase().startsWith('<br')) {
      element.appendChild(document.createElement('br'));
    } else {
      frag.split('').forEach(char => {
        const span = document.createElement('span');
        // Usa espaço normal para permitir a quebra de linha natural (word-wrap)
        span.textContent = char;
        span.style.opacity = 0;
        element.appendChild(span);
      });
    }
  });
  return element.querySelectorAll('span');
}

const titleChars = splitTextToSpans(convTitle);
const subChars = splitTextToSpans(convSub);

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: '.conversion-section',
    start: 'top 40%', // Start animation when the section is visibly dominating the screen
  }
});

// Dramatic pause of 1 second
tl.to({}, { duration: 1.0 });

// Type the Title (character by character reveal, preserving natural layout)
tl.to(titleChars, {
  opacity: 1,
  duration: 0.01, 
  stagger: 0.08,  // Slower typing speed (back to original feel)
  ease: "none"
});

// Type the Subtitle
tl.to(subChars, {
  opacity: 1,
  duration: 0.01,
  stagger: 0.03, // Slower typing for subtitle
  ease: "none"
}, "+=0.3"); // Small gap before starting subtitle

// Fade up the Button and Footer
tl.fromTo('.reveal-fade', {
  y: 30, opacity: 0
}, {
  y: 0, 
  opacity: 1,
  duration: 1.2,
  ease: 'power3.out',
  stagger: 0.3
}, "+=0.3"); // Show CTA shortly after subtitle finishes

// 3. Mouse Tracking 3D Parallax on Conversion Section
const convSection = document.querySelector('.conversion-section');
const convBg = document.querySelector('.conversion-bg');
const convContent = document.querySelector('.conversion-content');

if (convSection && convBg && convContent) {
  convSection.addEventListener('mousemove', (e) => {
    // Normalize mouse coordinates from -1 to 1 based on viewport
    const x = (e.clientX / window.innerWidth - 0.5) * 2;
    const y = (e.clientY / window.innerHeight - 0.5) * 2;

    // Move background slightly in the opposite direction of mouse
    gsap.to(convBg, {
      x: x * -15, // Move up to 15px
      y: y * -15,
      duration: 1,
      ease: 'power2.out'
    });

    // Move content slightly in the same direction of mouse to create 3D depth
    gsap.to(convContent, {
      x: x * 10,
      y: y * 10,
      duration: 1,
      ease: 'power2.out'
    });
  });

  // Reset positions when mouse leaves the section
  convSection.addEventListener('mouseleave', () => {
    gsap.to([convBg, convContent], {
      x: 0, y: 0, duration: 1, ease: 'power2.out'
    });
  });
}
