const header = document.querySelector('.site-header');
const revealItems = document.querySelectorAll('.reveal');

const onScroll = () => {
  header.classList.toggle('scrolled', window.scrollY > 20);
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealItems.forEach((item, index) => {
  item.style.transitionDelay = `${Math.min(index * 90, 240)}ms`;
  observer.observe(item);
});

const habitsSlides = document.querySelectorAll('.habits-carousel img');
if (habitsSlides.length > 1) {
  let habitsIndex = 0;
  setInterval(() => {
    habitsSlides[habitsIndex].classList.remove('active');
    habitsIndex = (habitsIndex + 1) % habitsSlides.length;
    habitsSlides[habitsIndex].classList.add('active');
  }, 3000);
}
