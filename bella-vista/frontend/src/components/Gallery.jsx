import { useState, useEffect, useRef } from 'react'

const Gallery = () => {
  const [visibleItems, setVisibleItems] = useState(new Set())
  const [hoveredItem, setHoveredItem] = useState(null)
  const galleryRef = useRef(null)

  const images = [
    { src: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=500&fit=crop", alt: "Signature dish presentation" },
    { src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop", alt: "Restaurant interior" },
    { src: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400&h=500&fit=crop", alt: "Wine selection" },
    { src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=300&fit=crop", alt: "Outdoor dining area" },
    { src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=500&fit=crop", alt: "Fine dining experience" },
    { src: "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=400&h=400&fit=crop", alt: "Gourmet pizza" }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisibleItems(prev => new Set([...prev, entry.target.dataset.index]))
            }, index * 200)
          }
        })
      },
      { threshold: 0.1 }
    )

    const items = galleryRef.current?.querySelectorAll('.gallery-item')
    items?.forEach(item => observer.observe(item))

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

  const headerStyle = {
    textAlign: 'center',
    marginBottom: '4rem'
  }

  const titleStyle = {
    fontFamily: "'Playfair Display', serif",
    fontSize: 'clamp(2rem, 4vw, 3rem)',
    color: '#1a1a1a',
    marginBottom: '1rem',
    background: 'linear-gradient(45deg, #1a1a1a, #D4AF37)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
  }

  const subtitleStyle = {
    fontSize: '1.1rem',
    color: '#666',
    fontStyle: 'italic',
    marginBottom: '3rem'
  }

  const filterStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
    marginBottom: '3rem',
    flexWrap: 'wrap'
  }

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
    marginTop: '2rem'
  }

  const getItemStyle = (index, isVisible, isHovered) => ({
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '20px',
    aspectRatio: '4/3',
    cursor: 'pointer',
    transform: isVisible 
      ? isHovered 
        ? 'translateY(-15px) scale(1.05) rotate(2deg)' 
        : 'translateY(0) scale(1)'
      : 'translateY(50px) scale(0.9)',
    opacity: isVisible ? 1 : 0,
    transition: 'all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    transitionDelay: isVisible ? `${index * 0.15}s` : '0s',
    boxShadow: isHovered 
      ? '0 30px 60px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(212, 175, 55, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
      : '0 15px 35px rgba(0, 0, 0, 0.1)',
    background: 'linear-gradient(135deg, #ffffff, #f8f8f8)',
    filter: isHovered ? 'brightness(1.05)' : 'brightness(1)'
  })

  const imageStyle = (isHovered) => ({
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    transform: isHovered ? 'scale(1.2) rotate(3deg)' : 'scale(1.1)',
    filter: isHovered ? 'brightness(0.85) contrast(1.15) saturate(1.2)' : 'brightness(1)'
  })

  const overlayStyle = (isHovered) => ({
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: isHovered 
      ? 'linear-gradient(45deg, rgba(212, 175, 55, 0.8), rgba(26, 26, 26, 0.6))'
      : 'linear-gradient(45deg, transparent, rgba(0, 0, 0, 0.1))',
    opacity: isHovered ? 1 : 0,
    transition: 'all 0.4s ease',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  })

  const overlayTextStyle = {
    color: '#ffffff',
    fontFamily: "'Playfair Display', serif",
    fontSize: '1.4rem',
    fontWeight: '600',
    textAlign: 'center',
    transform: 'translateY(20px)',
    transition: 'transform 0.4s ease 0.1s',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
  }

  const decorativeElementStyle = {
    position: 'absolute',
    top: '10%',
    right: '5%',
    width: '100px',
    height: '100px',
    background: 'linear-gradient(45deg, rgba(212, 175, 55, 0.1), transparent)',
    borderRadius: '50%',
    animation: 'galleryFloat 8s ease-in-out infinite',
    zIndex: 1
  }

  return (
    <section id="gallery" style={sectionStyle}>
      <div style={decorativeElementStyle}></div>
      <div style={containerStyle}>
        <div style={headerStyle}>
          <h2 style={titleStyle}>Gallery</h2>
          <p style={subtitleStyle}>A glimpse into our culinary world</p>
        </div>

        <div style={gridStyle} ref={galleryRef}>
          {images.map((image, index) => {
            const isVisible = visibleItems.has(index.toString())
            const isHovered = hoveredItem === index
            
            return (
              <div
                key={index}
                className="gallery-item"
                data-index={index}
                style={getItemStyle(index, isVisible, isHovered)}
                onMouseEnter={() => setHoveredItem(index)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <img 
                  src={image.src} 
                  alt={image.alt}
                  style={imageStyle(isHovered)}
                />
                <div style={overlayStyle(isHovered)}>
                  <span style={{
                    ...overlayTextStyle,
                    transform: isHovered ? 'translateY(0)' : 'translateY(20px)'
                  }}>
                    {image.alt}
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      
      <style>{`
        @keyframes galleryFloat {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(3deg); }
        }
        
        @media (max-width: 768px) {
          .gallery-grid {
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)) !important;
            gap: 1.5rem !important;
          }
        }
      `}</style>
    </section>
  )
}

export default Gallery
