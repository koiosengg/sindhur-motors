import { useEffect, useState } from 'react'

export const ROUTES = ['/', '/about', '/contact', '/privacy', '/terms']

export function resolveRoute() {
  if (typeof window === 'undefined') return '/'

  // Clean legacy hash if present (e.g. #/ or #/about -> / or /about)
  if (window.location.hash) {
    const hashClean = window.location.hash.replace(/^#\/?/, '/')
    const targetRoute = hashClean.split('?')[0] || '/'
    if (ROUTES.includes(targetRoute)) {
      window.history.replaceState(null, '', targetRoute + window.location.search)
      return targetRoute
    }
    // If hash was just "#" or "#/"
    window.history.replaceState(null, '', (window.location.pathname || '/') + window.location.search)
  }

  const path = window.location.pathname.replace(/\/+$/, '') || '/'
  const clean = path.split('?')[0]
  if (ROUTES.includes(clean)) return clean
  return '/'
}

export function navigate(to) {
  if (typeof window === 'undefined') return
  const cleanTo = to.startsWith('#') ? to.replace(/^#\/?/, '/') : to
  const target = cleanTo.startsWith('/') ? cleanTo : `/${cleanTo}`
  
  if (window.location.pathname !== target || window.location.hash) {
    window.history.pushState(null, '', target)
    window.dispatchEvent(new Event('popstate'))
  }
  window.scrollTo({ top: 0, behavior: 'auto' })
}

export function useRoute() {
  const [route, setRoute] = useState(resolveRoute)

  useEffect(() => {
    const handleRouteChange = () => {
      setRoute(resolveRoute())
    }

    window.addEventListener('popstate', handleRouteChange)
    window.addEventListener('hashchange', handleRouteChange)
    return () => {
      window.removeEventListener('popstate', handleRouteChange)
      window.removeEventListener('hashchange', handleRouteChange)
    }
  }, [])

  return route
}

// Global click interceptor for internal links to enable seamless SPA navigation without full reloads
if (typeof window !== 'undefined') {
  document.addEventListener('click', (e) => {
    const anchor = e.target.closest('a')
    if (!anchor) return

    // Allow user to use middle-click or Cmd/Ctrl/Shift/Alt to open in a new tab/window
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0 || anchor.target === '_blank') {
      return
    }

    const href = anchor.getAttribute('href')
    if (!href) return

    // Intercept internal path routing (e.g. "/about" or legacy "#/about")
    if (href.startsWith('#/')) {
      e.preventDefault()
      navigate(href.replace(/^#/, ''))
    } else if (href.startsWith('/') && !href.startsWith('//')) {
      e.preventDefault()
      navigate(href)
    }
  })
}
