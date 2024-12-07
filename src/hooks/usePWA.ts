import { useEffect, useState } from 'react'
import { registerSW } from 'virtual:pwa-register'

interface PWAStatus {
  offlineReady: boolean
}

export function usePWA(): PWAStatus {
  const [offlineReady, setOfflineReady] = useState(false)

  useEffect(() => {
    registerSW({
      onOfflineReady() {
        setOfflineReady(true)
      },
      onRegistered(swRegistration) {
        console.log('SW Registered:', swRegistration)
      },
      onRegisterError(error) {
        console.error('SW registration error', error)
      }
    })
  }, [])

  return {
    offlineReady
  }
}
