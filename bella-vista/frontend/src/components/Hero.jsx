import { useState, useEffect } from 'react'

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    setIsVisible(true)
    
    // Subtle time-based animation for elegant movement
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)
    
    return () => clearInterval(timer)
  }, [])

  const heroStyle = {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    background: `linear-gradient(135deg, #1a1a1a 0%, #2c2c2c 100%)`,
    overflow: 'hidden'
  }

  const contentStyle = {
    position: 'relative',
    zIndex: 2,
    width: '100%',
    transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
    opacity: isVisible ? 1 : 0,
    transition: 'all 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
  }

  const textStyle = {
    maxWidth: '700px',
    padding: '0 20px',
    margin: '0 auto',
    textAlign: 'center',
    color: '#ffffff'
  }

  const titleStyle = {
    fontFamily: "'Playfair Display', serif",
    fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
    fontWeight: 700,
    marginBottom: '2rem',
    color: '#ffffff',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
    background: 'linear-gradient(45deg, #ffffff 30%, #D4AF37 50%, #F4D03F 70%, #ffffff 100%)',
    backgroundSize: '300% 100%',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    animation: 'elegantShimmer 8s ease-in-out infinite',
    letterSpacing: '2px'
  }

  const subtitleStyle = {
    fontSize: '1.3rem',
    marginBottom: '3rem',
    color: 'rgba(255, 255, 255, 0.9)',
    lineHeight: 1.8,
    animation: 'fadeInUp 2s ease 0.8s both',
    fontWeight: '300',
    letterSpacing: '0.5px'
  }

  const buttonContainerStyle = {
    display: 'flex',
    gap: '2rem',
    justifyContent: 'center',
    flexWrap: 'wrap',
    animation: 'fadeInUp 2s ease 1.2s both'
  }

  const primaryButtonStyle = {
    padding: '18px 40px',
    border: 'none',
    background: 'linear-gradient(135deg, #D4AF37 0%, #F4D03F 50%, #D4AF37 100%)',
    backgroundSize: '200% 100%',
    color: '#1a1a1a',
    fontWeight: '600',
    fontSize: '1.1rem',
    cursor: 'pointer',
    transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    letterSpacing: '1px',
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '0',
    textTransform: 'uppercase',
    fontFamily: "'Inter', sans-serif"
  }

  const secondaryButtonStyle = {
    padding: '18px 40px',
    background: 'transparent',
    color: '#ffffff',
    border: '2px solid rgba(212, 175, 55, 0.8)',
    fontWeight: '500',
    fontSize: '1.1rem',
    cursor: 'pointer',
    transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    letterSpacing: '1px',
    borderRadius: '0',
    textTransform: 'uppercase',
    fontFamily: "'Inter', sans-serif",
    position: 'relative',
    overflow: 'hidden'
  }

  // Elegant floating geometric elements
  const geometricElement1Style = {
    position: 'absolute',
    top: '15%',
    right: '10%',
    width: '120px',
    height: '120px',
    border: '1px solid rgba(212, 175, 55, 0.3)',
    borderRadius: '50%',
    animation: 'elegantFloat 12s ease-in-out infinite',
    opacity: 0.4
  }

  const geometricElement2Style = {
    position: 'absolute',
    bottom: '20%',
    left: '8%',
    width: '80px',
    height: '80px',
    border: '1px solid rgba(212, 175, 55, 0.2)',
    transform: 'rotate(45deg)',
    animation: 'elegantFloat 15s ease-in-out infinite reverse',
    opacity: 0.3
  }

  const geometricElement3Style = {
    position: 'absolute',
    top: '25%',
    left: '15%',
    width: '60px',
    height: '60px',
    background: 'linear-gradient(45deg, rgba(212, 175, 55, 0.1), transparent)',
    borderRadius: '50%',
    animation: 'elegantFloat 10s ease-in-out infinite',
    opacity: 0.5
  }

  // Subtle animated lines for luxury feel
  const luxuryLineStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '1px',
    height: '200px',
    background: 'linear-gradient(to bottom, transparent, rgba(212, 175, 55, 0.4), transparent)',
    transform: 'translate(-50%, -50%)',
    animation: 'luxuryGlow 6s ease-in-out infinite'
  }

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `
      radial-gradient(ellipse at center, 
        rgba(26, 26, 26, 0.7) 0%, 
        rgba(26, 26, 26, 0.85) 60%, 
        rgba(0, 0, 0, 0.95) 100%)
    `,
    zIndex: 1
  }

  return (
    <section id="home" style={heroStyle}>
      <div style={contentStyle}>
        <div style={textStyle}>
          <h1 style={titleStyle}>Experience Culinary Excellence</h1>
          <p style={subtitleStyle}>
            Where every dish tells a story of passion, tradition, and innovation. 
            Join us for an unforgettable dining experience that transcends the ordinary.
          </p>
          <div style={buttonContainerStyle}>
            <button 
              style={primaryButtonStyle}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-4px)'
                e.target.style.boxShadow = '0 20px 40px rgba(212, 175, 55, 0.3)'
                e.target.style.backgroundPosition = '100% 0'
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)'
                e.target.style.boxShadow = 'none'
                e.target.style.backgroundPosition = '0% 0'
              }}
            >
              View Menu
            </button>
            <button 
              style={secondaryButtonStyle}
              onMouseEnter={(e) => {
                e.target.style.background = 'rgba(212, 175, 55, 0.1)'
                e.target.style.borderColor = '#D4AF37'
                e.target.style.transform = 'translateY(-4px)'
                e.target.style.color = '#D4AF37'
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'transparent'
                e.target.style.borderColor = 'rgba(212, 175, 55, 0.8)'
                e.target.style.transform = 'translateY(0)'
                e.target.style.color = '#ffffff'
              }}
            >
              Book Table
            </button>
          </div>
        </div>
      </div>
      
      {/* Elegant geometric elements */}
      <div style={geometricElement1Style}></div>
      <div style={geometricElement2Style}></div>
      <div style={geometricElement3Style}></div>
      <div style={luxuryLineStyle}></div>
      
      <div style={overlayStyle}></div>
      
      <style>{`
        @keyframes elegantShimmer {
          0%, 100% { 
            background-position: 0% 0%;
          }
          50% { 
            background-position: 100% 0%;
          }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes elegantFloat {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
            opacity: 0.3;
          }
          33% { 
            transform: translateY(-20px) rotate(5deg); 
            opacity: 0.6;
          }
          66% { 
            transform: translateY(-10px) rotate(-3deg); 
            opacity: 0.4;
          }
        }
        
        @keyframes luxuryGlow {
          0%, 100% { 
            opacity: 0.2;
            transform: translate(-50%, -50%) scaleY(0.5);
          }
          50% { 
            opacity: 0.8;
            transform: translate(-50%, -50%) scaleY(1.2);
          }
        }
        
        @media (max-width: 768px) {
          .hero-buttons {
            flex-direction: column;
            align-items: center;
            gap: 1rem;
          }
          
          .hero-buttons button {
            width: 100%;
            max-width: 280px;
          }
        }
      `}</style>
    </section>
  )
}

export default Hero
