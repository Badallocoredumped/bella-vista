import { useState, useEffect, useRef } from 'react'

const Gallery = () => {
  const [visibleItems, setVisibleItems] = useState(new Set())
  const [hoveredItem, setHoveredItem] = useState(null)
  const galleryRef = useRef(null)

  const images = [
    { src: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=500&fit=crop", alt: "Signature dish presentation", category: "food" },
    { src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop", alt: "Restaurant interior", category: "interior" },
    { src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop", alt: "Chef preparing meal", category: "kitchen" },
    { src: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400&h=500&fit=crop", alt: "Wine selection", category: "drinks" },
    { src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=300&fit=crop", alt: "Outdoor dining area", category: "interior" },
    { src: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=400&h=400&fit=crop", alt: "Dessert presentation", category: "food" }
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
    fontStyle: 'italic'
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
    borderRadius: '15px',
    aspectRatio: '4/3',
    cursor: 'pointer',
    transform: isVisible 
      ? isHovered 
        ? 'translateY(-15px) scale(1.03)' 
        : 'translateY(0) scale(1)'
      : 'translateY(50px) scale(0.8)',
    opacity: isVisible ? 1 : 0,
    transition: 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    transitionDelay: isVisible ? `${index * 0.1}s` : '0s',
    boxShadow: isHovered 
      ? '0 25px 50px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(212, 175, 55, 0.3)'
      : '0 10px 30px rgba(0, 0, 0, 0.1)',
    background: 'linear-gradient(45deg, #ffffff, #f8f8f8)'
  })

  const imageStyle = (isHovered) => ({
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    transform: isHovered ? 'scale(1.1) rotate(1deg)' : 'scale(1)',
    filter: isHovered ? 'brightness(0.8) contrast(1.1)' : 'brightness(1)'
  })

  const overlayStyle = (isHovered) => ({
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: isHovered 
      ? 'linear-gradient(45deg, rgba(212, 175, 55, 0.9), rgba(26, 26, 26, 0.8))'
      : 'linear-gradient(45deg, transparent, transparent)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: isHovered ? 1 : 0,
    transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    backdropFilter: isHovered ? 'blur(5px)' : 'blur(0px)'
  })

  const overlayTextStyle = (isHovered) => ({
    color: '#ffffff',
    fontSize: '1.4rem',
    fontWeight: '600',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    transform: isHovered ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.8)',
    transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
  })

  const backgroundDecorationStyle = {
    position: 'absolute',
    top: '10%',
    right: '-10%',
    width: '40%',
    height: '40%',
    background: 'linear-gradient(45deg, rgba(212, 175, 55, 0.1), transparent)',
    borderRadius: '50%',
    animation: 'float 8s ease-in-out infinite'
  }

  return (
    <section id="gallery" style={sectionStyle}>
      <div style={backgroundDecorationStyle}></div>
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
                  <span style={overlayTextStyle(isHovered)}>
                    View
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
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
