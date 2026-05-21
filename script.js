// Animation légère: reveal progressif des cartes
const observer = new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
    if(entry.isIntersecting){
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
},{threshold:.12});

document.querySelectorAll('.card, details').forEach((el)=>{
  el.style.opacity='0';
  el.style.transform='translateY(12px)';
  el.style.transition='all .45s ease';
  observer.observe(el);
});
