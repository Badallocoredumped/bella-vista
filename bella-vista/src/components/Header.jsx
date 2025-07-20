import { useState, useEffect } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const headerStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    background: scrolled 
      ? 'rgba(255, 255, 255, 0.98)' 
      : 'rgba(26, 26, 26, 0.9)',
    backdropFilter: 'blur(20px)',
    zIndex: 1000,
    transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    borderBottom: scrolled 
      ? '1px solid rgba(212, 175, 55, 0.3)' 
      : '1px solid rgba(212, 175, 55, 0.2)',
    boxShadow: scrolled 
      ? '0 8px 32px rgba(0, 0, 0, 0.1)' 
      : '0 4px 20px rgba(0, 0, 0, 0.3)'
  }

  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: scrolled ? '1rem 20px' : '1.5rem 20px',
    maxWidth: '1200px',
    margin: '0 auto',
    transition: 'padding 0.4s ease'
  }

  const logoStyle = {
    fontFamily: "'Playfair Display', serif",
    fontSize: scrolled ? '1.6rem' : '2.2rem',
    margin: 0,
    fontWeight: 700,
    cursor: 'pointer',
    transition: 'all 0.4s ease',
    color: scrolled ? '#1a1a1a' : '#ffffff',
    textShadow: scrolled 
      ? 'none' 
      : '2px 2px 4px rgba(0, 0, 0, 0.5)',
    position: 'relative',
    letterSpacing: '1px'
  }

  const navStyle = {
    display: 'flex',
    gap: '2rem',
    alignItems: 'center',
    transition: 'all 0.3s ease'
  }

  const linkStyle = {
    color: scrolled ? '#1a1a1a' : '#ffffff',
    textDecoration: 'none',
    fontWeight: '600',
    fontSize: '1rem',
    letterSpacing: '0.5px',
    transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    position: 'relative',
    padding: '10px 16px',
    borderRadius: '8px',
    textShadow: scrolled 
      ? 'none' 
      : '1px 1px 2px rgba(0, 0, 0, 0.3)'
  }

  const reservationBtnStyle = {
    background: 'linear-gradient(135deg, #D4AF37, #F4D03F)',
    color: '#1a1a1a',
    border: 'none',
    padding: '14px 28px',
    fontWeight: '700',
    cursor: 'pointer',
    transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    fontSize: '1rem',
    letterSpacing: '0.8px',
    borderRadius: '8px',
    boxShadow: '0 6px 20px rgba(212, 175, 55, 0.4)',
    textTransform: 'uppercase',
    fontFamily: "'Inter', sans-serif"
  }

  const menuItems = ['Home', 'About', 'Menu', 'Gallery', 'Contact']

  return (
    <header style={headerStyle}>
      <div style={containerStyle}>
        <div>
          <h2 
            style={logoStyle}
            onMouseEnter={(e) => {
              e.target.style.color = '#D4AF37'
              e.target.style.transform = 'scale(1.05)'
            }}
            onMouseLeave={(e) => {
              e.target.style.color = scrolled ? '#1a1a1a' : '#ffffff'
              e.target.style.transform = 'scale(1)'
            }}
          >
            Bella Vista
            <span style={{
              position: 'absolute',
              bottom: '-4px',
              left: '0',
              width: '100%',
              height: '2px',
              background: 'linear-gradient(90deg, #D4AF37, #F4D03F)',
              opacity: scrolled ? 0.8 : 0.6,
              transition: 'all 0.3s ease'
            }}></span>
          </h2>
        </div>
        
        <nav style={navStyle}>
          {menuItems.map((item, index) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`}
              style={{
                ...linkStyle,
                animationDelay: `${index * 0.1}s`
              }}
              onMouseEnter={(e) => {
                e.target.style.color = '#D4AF37'
                e.target.style.transform = 'translateY(-2px)'
                e.target.style.background = scrolled 
                  ? 'rgba(212, 175, 55, 0.1)' 
                  : 'rgba(212, 175, 55, 0.2)'
              }}
              onMouseLeave={(e) => {
                e.target.style.color = scrolled ? '#1a1a1a' : '#ffffff'
                e.target.style.transform = 'translateY(0)'
                e.target.style.background = 'transparent'
              }}
            >
              {item}
            </a>
          ))}
        </nav>

        <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
          <button 
            style={reservationBtnStyle}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-3px) scale(1.05)'
              e.target.style.boxShadow = '0 10px 30px rgba(212, 175, 55, 0.6)'
              e.target.style.background = 'linear-gradient(135deg, #F4D03F, #D4AF37)'
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0) scale(1)'
              e.target.style.boxShadow = '0 6px 20px rgba(212, 175, 55, 0.4)'
              e.target.style.background = 'linear-gradient(135deg, #D4AF37, #F4D03F)'
            }}
          >
            Reserve
          </button>
          
          {/* Mobile menu toggle */}
          <button
            style={{
              display: 'none',
              flexDirection: 'column',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '8px',
              gap: '4px'
            }}
            className="mobile-menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span style={{
              width: '25px',
              height: '2px',
              backgroundColor: scrolled ? '#1a1a1a' : '#ffffff',
              transition: 'all 0.3s ease'
            }}></span>
            <span style={{
              width: '25px',
              height: '2px',
              backgroundColor: scrolled ? '#1a1a1a' : '#ffffff',
              transition: 'all 0.3s ease'
            }}></span>
            <span style={{
              width: '25px',
              height: '2px',
              backgroundColor: scrolled ? '#1a1a1a' : '#ffffff',
              transition: 'all 0.3s ease'
            }}></span>
          </button>
        </div>
      </div>
      
      <style>{`
        @media (max-width: 768px) {
          nav {
            display: none !important;
          }
          
          .mobile-menu-toggle {
            display: flex !important;
          }
          
          .reservation-btn-mobile {
            padding: 12px 20px !important;
            font-size: 0.9rem !important;
          }
        }
        
        @media (max-width: 480px) {
          .logo-text {
            font-size: 1.8rem !important;
          }
        }
      `}</style>
    </header>
  )
}

export default Header
