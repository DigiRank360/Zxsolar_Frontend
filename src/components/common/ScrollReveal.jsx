import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollReveal() {
  const { pathname } = useLocation()

  useEffect(() => {
    const items = document.querySelectorAll('main section h1, main section h2, main section h3, main section p, main section article, main section blockquote, main section [class*="shadow-"]')
    const observer = 'IntersectionObserver' in window
      ? new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed')
            observer.unobserve(entry.target)
          }
        })
      }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 })
      : null

    items.forEach((item, index) => {
      item.classList.add('reveal-item')
      item.style.setProperty('--reveal-delay', `${Math.min(index * 45, 270)}ms`)

      if (item.matches('article, blockquote, [class*="shadow-"]')) {
        item.classList.add('reveal-card')
      }

      if (observer) observer.observe(item)
      else item.classList.add('is-revealed')
    })

    return () => observer?.disconnect()
  }, [pathname])

  return null
}