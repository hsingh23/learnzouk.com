import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { registerSW } from 'virtual:pwa-register'

// Register service worker with auto-reload on update
registerSW({
  onNeedRefresh() {
    // When a new version is available, automatically reload
    window.location.reload()
  },
  onOfflineReady() {
    console.log('App ready to work offline')
  },
  immediate: true
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
