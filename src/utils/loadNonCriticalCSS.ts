export const loadNonCriticalCSS = () => {
  if (typeof window === 'undefined') return;
  
  const loadCSS = (href: string, media: string = 'all') => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    link.media = 'print';
    link.onload = () => { link.media = media; };
    document.head.appendChild(link);
  };

  const loadFonts = () => {
    loadCSS('https://fonts.googleapis.com/css2?family=Geologica:wght@600;700;800&display=swap');
  };

  if ('requestIdleCallback' in window) {
    (window as any).requestIdleCallback(loadFonts, { timeout: 2000 });
  } else {
    setTimeout(loadFonts, 2000);
  }
};

if (typeof window !== 'undefined') {
  if (document.readyState === 'complete') {
    loadNonCriticalCSS();
  } else {
    window.addEventListener('load', loadNonCriticalCSS);
  }
}