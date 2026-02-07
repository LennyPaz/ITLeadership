'use client'

import { useEffect, useState, useCallback } from 'react'

interface TocSection {
  id: string
  label: string
}

const sections: TocSection[] = [
  { id: 'information-we-collect', label: 'Information We Collect' },
  { id: 'how-we-use-your-information', label: 'How We Use Your Information' },
  { id: 'email-communications', label: 'Email Communications' },
  { id: 'donations', label: 'Donations' },
  { id: 'data-security', label: 'Data Security' },
  { id: 'childrens-privacy', label: "Children's Privacy" },
  { id: 'changes-to-this-policy', label: 'Changes to This Policy' },
  { id: 'contact-us', label: 'Contact Us' },
]

export default function PrivacyTableOfContents() {
  const [activeId, setActiveId] = useState<string>('')

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
      e.preventDefault()
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
        // Update URL hash without jumping
        history.pushState(null, '', `#${id}`)
      }
    },
    []
  )

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Find the first intersecting section
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)

        if (visible.length > 0) {
          setActiveId(visible[0].target.id)
        }
      },
      {
        rootMargin: '-128px 0px -40% 0px',
        threshold: 0,
      }
    )

    sections.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* Desktop: Sticky sidebar */}
      <nav
        aria-label="Table of contents"
        className="hidden lg:block sticky top-32 self-start"
      >
        <p className="text-sm font-semibold text-neutral-charcoal uppercase tracking-wider mb-4">
          On this page
        </p>
        <ul className="space-y-1">
          {sections.map(({ id, label }) => {
            const isActive = activeId === id
            return (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={(e) => handleClick(e, id)}
                  aria-current={isActive ? 'true' : undefined}
                  className={`block py-1.5 pl-3 border-l-2 text-sm transition-colors ${
                    isActive
                      ? 'border-primary text-primary font-medium'
                      : 'border-transparent text-neutral-gray hover:text-neutral-charcoal hover:border-neutral-light'
                  }`}
                >
                  {label}
                </a>
              </li>
            )
          })}
        </ul>
      </nav>

      {/* Mobile: Horizontal scrollable pill bar */}
      <nav
        aria-label="Table of contents"
        className="lg:hidden sticky top-[72px] z-30 bg-white/95 backdrop-blur-sm border-b border-neutral-light -mx-4 px-4 py-3 overflow-x-auto scrollbar-hide"
      >
        <ul className="flex gap-2 min-w-max">
          {sections.map(({ id, label }) => {
            const isActive = activeId === id
            return (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={(e) => handleClick(e, id)}
                  aria-current={isActive ? 'true' : undefined}
                  className={`inline-block whitespace-nowrap px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                    isActive
                      ? 'bg-primary text-white'
                      : 'bg-neutral-cream text-neutral-gray hover:bg-neutral-light hover:text-neutral-charcoal'
                  }`}
                >
                  {label}
                </a>
              </li>
            )
          })}
        </ul>
      </nav>
    </>
  )
}
