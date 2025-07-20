import { useState, useEffect, useRef } from 'react'

const About = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredElement, setHoveredElement] = useState(null)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const sectionStyle = {
    padding: '100px 0',
    background: 'linear-gradient(135deg, #f8f8f8 0%, #ffffff 100%)',
    position: 'relative',
    overflow: 'hidden'
  }

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px'
  }

  const contentStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '4rem',
    alignItems: 'center'
  }

  const textStyle = {
    transform: isVisible ? 'translateX(0)' : 'translateX(-50px)',
    opacity: isVisible ? 1 : 0,
    transition: 'all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
  }

  const titleStyle = {
    fontFamily: "'Playfair Display', serif",
    fontSize: 'clamp(2rem, 4vw, 3rem)',
    color: '#1a1a1a',
    marginBottom: '1.5rem',
    background: 'linear-gradient(45deg, #1a1a1a, #D4AF37)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
  }

  const leadStyle = {
    fontSize: '1.3rem',
    color: '#1a1a1a',
    fontWeight: '500',
    marginBottom: '1.5rem',
    lineHeight: 1.6,
    fontStyle: 'italic'
  }

  const paragraphStyle = {
    marginBottom: '1.5rem',
    lineHeight: 1.8,
    color: '#666',
    fontSize: '1rem'
  }

  const chefSignatureStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    marginTop: '2rem',
    paddingTop: '2rem',
    borderTop: '2px solid rgba(212, 175, 55, 0.3)',
    transform: hoveredElement === 'chef' ? 'translateY(-5px)' : 'translateY(0)',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    padding: '1.5rem',
    borderRadius: '15px',
    background: hoveredElement === 'chef' 
      ? 'linear-gradient(135deg, rgba(212, 175, 55, 0.1), rgba(255, 255, 255, 0.8))'
      : 'transparent'
  }

  const chefPhotoStyle = {
    width: '70px',
    height: '70px',
    borderRadius: '50%',
    objectFit: 'cover',
    border: '3px solid #D4AF37',
    transition: 'all 0.3s ease',
    transform: hoveredElement === 'chef' ? 'scale(1.1)' : 'scale(1)'
  }

  const chefInfoStyle = {
    flex: 1
  }

  const chefNameStyle = {
    margin: 0,
    color: '#1a1a1a',
    fontSize: '1.2rem',
    fontWeight: '600'
  }

  const chefTitleStyle = {
    margin: 0,
    color: '#D4AF37',
    fontSize: '0.95rem',
    fontWeight: '500'
  }

  const imageContainerStyle = {
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '20px',
    boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15)',
    transform: isVisible ? 'translateX(0)' : 'translateX(50px)',
    opacity: isVisible ? 1 : 0,
    transition: 'all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.3s'
  }

  const imageStyle = {
    width: '100%',
    height: '600px',
    objectFit: 'cover',
    transition: 'all 0.6s ease',
    transform: 'scale(1)'
  }

  const imageOverlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(45deg, transparent, transparent)',
    transition: 'all 0.4s ease'
  }

  const decorationStyle = {
    position: 'absolute',
    top: '15%',
    right: '5%',
    width: '200px',
    height: '200px',
    background: 'linear-gradient(45deg, rgba(212, 175, 55, 0.1), transparent)',
    borderRadius: '50%',
    animation: 'float 6s ease-in-out infinite',
    zIndex: 1
  }

  const statsStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '1rem',
    marginTop: '2rem'
  }

  const statItemStyle = (index) => ({
    textAlign: 'center',
    padding: '1.5rem',
    background: 'rgba(212, 175, 55, 0.05)',
    borderRadius: '15px',
    border: '1px solid rgba(212, 175, 55, 0.2)',
    transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
    opacity: isVisible ? 1 : 0,
    transition: `all 0.6s ease ${index * 0.2}s`,
    cursor: 'pointer'
  })

  const statNumberStyle = {
    fontFamily: "'Playfair Display', serif",
    fontSize: '2rem',
    fontWeight: '700',
    color: '#D4AF37',
    margin: 0
  }

  const statLabelStyle = {
    fontSize: '0.9rem',
    color: '#666',
    margin: 0,
    textTransform: 'uppercase',
    letterSpacing: '1px'
  }

  const stats = [
    { number: '25+', label: 'Years of Excellence' },
    { number: '50K+', label: 'Happy Customers' },
    { number: '200+', label: 'Signature Dishes' }
  ]

  return (
    <section id="about" style={sectionStyle} ref={sectionRef}>
      <div style={decorationStyle}></div>
      <div style={containerStyle}>
        <div style={contentStyle}>
          <div style={textStyle}>
            <h2 style={titleStyle}>Our Story</h2>
            <p style={leadStyle}>
              For over two decades, Bella Vista has been a cornerstone of culinary excellence, 
              blending traditional techniques with modern innovation.
            </p>
            <p style={paragraphStyle}>
              Founded by Chef Maria Rodriguez in 2001, our restaurant has evolved into a 
              destination for food enthusiasts seeking an extraordinary dining experience. 
              We source the finest ingredients from local farms and international suppliers, 
              ensuring every dish meets our exacting standards.
            </p>
            <p style={paragraphStyle}>
              Our commitment to sustainability and community engagement drives everything we do, 
              from our zero-waste kitchen practices to our partnerships with local artisans.
            </p>
            
            <div style={statsStyle}>
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  style={statItemStyle(index)}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-8px) scale(1.05)'
                    e.target.style.boxShadow = '0 15px 30px rgba(212, 175, 55, 0.2)'
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0) scale(1)'
                    e.target.style.boxShadow = 'none'
                  }}
                >
                  <h3 style={statNumberStyle}>{stat.number}</h3>
                  <p style={statLabelStyle}>{stat.label}</p>
                </div>
              ))}
            </div>

            <div 
              style={chefSignatureStyle}
              onMouseEnter={() => setHoveredElement('chef')}
              onMouseLeave={() => setHoveredElement(null)}
            >
              <img 
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=150&h=150&fit=crop&crop=face" 
                alt="Chef Maria Rodriguez" 
                style={chefPhotoStyle}
              />
              <div style={chefInfoStyle}>
                <h4 style={chefNameStyle}>Chef Albert Alfonzo</h4>
                <p style={chefTitleStyle}>Executive Chef & Founder</p>
              </div>
            </div>
          </div>
          
          <div 
            style={imageContainerStyle}
          >
            <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&h=600&fit=crop" alt="Restaurant interior" style={imageStyle} />
            <div style={imageOverlayStyle}></div>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        @media (max-width: 768px) {
          .about-content {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          .about-image {
            order: -1 !important;
          }
          .stats-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}

export default About
