const menuBtn=document.getElementById("menuBtn"),navLinks=document.getElementById("navLinks");
menuBtn?.addEventListener("click",()=>navLinks.classList.toggle("open"));
document.querySelectorAll(".nav-links a").forEach(a=>a.addEventListener("click",()=>navLinks.classList.remove("open")));

const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("show");observer.unobserve(entry.target)}})
},{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

const glow=document.querySelector(".cursor-glow");
window.addEventListener("pointermove",e=>{if(glow){glow.style.left=e.clientX+"px";glow.style.top=e.clientY+"px"}});

const lightbox=document.getElementById("lightbox"),lightboxImage=document.getElementById("lightboxImage"),closeLightbox=document.getElementById("closeLightbox");
document.querySelectorAll(".project-gallery img,.media-grid img,.lead-photo img").forEach(img=>{
  img.addEventListener("click",()=>{
    if(!img.getAttribute("src"))return;
    lightboxImage.src=img.src;
    lightbox.classList.add("active");
    lightbox.setAttribute("aria-hidden","false");
  });
});
const close=()=>{lightbox.classList.remove("active");lightbox.setAttribute("aria-hidden","true")};
closeLightbox?.addEventListener("click",close);
lightbox?.addEventListener("click",e=>{if(e.target===lightbox)close()});
document.addEventListener("keydown",e=>{if(e.key==="Escape")close()});
