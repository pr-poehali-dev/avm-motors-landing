import { StrictMode, lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client'
import './index.css'

const App = lazy(() => import('./App'));

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Suspense fallback={
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        background: 'hsl(var(--background))'
      }}>
        <div style={{
          width: '40px',
          height: '40px',
          border: '4px solid hsl(var(--accent))',
          borderTopColor: 'transparent',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite'
        }} />
      </div>
    }>
      <App />
    </Suspense>
  </StrictMode>
);