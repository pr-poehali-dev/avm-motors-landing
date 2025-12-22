export const setupLazyLoad = () => {
  if (typeof window === 'undefined') return;
  
  // Setup intersection observer for lazy loading
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;
          
          // Load background images
          const bgImage = target.dataset.bgImage;
          if (bgImage) {
            target.style.backgroundImage = `url(${bgImage})`;
            delete target.dataset.bgImage;
          }
          
          // Load images
          const img = target as HTMLImageElement;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            delete img.dataset.src;
          }
          
          observer.unobserve(target);
        }
      });
    },
    {
      rootMargin: '50px',
      threshold: 0.01,
    }
  );
  
  // Observe all elements with data-bg-image or data-src
  const observeElements = () => {
    const elements = document.querySelectorAll('[data-bg-image], [data-src]');
    elements.forEach((el) => observer.observe(el));
  };
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', observeElements);
  } else {
    observeElements();
  }
};

if (typeof window !== 'undefined') {
  setupLazyLoad();
}
