export const loadNonCriticalCSS = () => {
  if (typeof window === 'undefined') return;
  
  // Load non-critical styles after page load
  const loadCSS = (href: string) => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    document.head.appendChild(link);
  };

  // Wait for main content to load
  if (document.readyState === 'complete') {
    setTimeout(() => {
      loadCSS('https://fonts.googleapis.com/css2?family=Roboto+Flex:ital,wght@1,400;1,500;1,600;1,700;1,800&family=Geologica:wght@400;500;600;700;800&display=swap');
    }, 100);
  } else {
    window.addEventListener('load', () => {
      setTimeout(() => {
        loadCSS('https://fonts.googleapis.com/css2?family=Roboto+Flex:ital,wght@1,400;1,500;1,600;1,700;1,800&family=Geologica:wght@400;500;600;700;800&display=swap');
      }, 100);
    });
  }
};

// Auto-execute
loadNonCriticalCSS();
