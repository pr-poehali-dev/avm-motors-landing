export const lazyLoadCSS = (href: string) => {
  if (typeof window === 'undefined') return;
  
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = href;
  document.head.appendChild(link);
};

if (typeof window !== 'undefined') {
  window.addEventListener('load', () => {
    setTimeout(() => {
      lazyLoadCSS('https://fonts.googleapis.com/css2?family=Roboto+Flex:ital,wght@1,400;1,500;1,600;1,700;1,800&family=Geologica:wght@400;500;600;700;800&display=swap');
    }, 100);
  });
}
