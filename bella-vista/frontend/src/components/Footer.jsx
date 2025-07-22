import { useState } from 'react'

const Footer = () => {
  const [hoveredSection, setHoveredSection] = useState(null)
  const [hoveredSocial, setHoveredSocial] = useState(null)

  const footerStyle = {
    background: 'linear-gradient(135deg, #1a1a1a 0%, #000000 100%)',
    color: '#ffffff',
    padding: '4rem 0 2rem',
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
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '3rem',
    marginBottom: '3rem'
  }

  const sectionStyle = (index) => ({
    transform: hoveredSection === index ? 'translateY(-5px)' : 'translateY(0)',
    transition: 'all 0.3s ease',
    padding: '1.5rem',
    borderRadius: '15px',
    background: hoveredSection === index 
      ? 'rgba(212, 175, 55, 0.05)' 
      : 'transparent',
    border: hoveredSection === index 
      ? '1px solid rgba(212, 175, 55, 0.2)' 
      : '1px solid transparent'
  })

  const brandTitleStyle = {
    fontFamily: "'Playfair Display', serif",
    background: 'linear-gradient(45deg, #D4AF37, #F4D03F)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontSize: '2rem',
    marginBottom: '1rem',
    fontWeight: '700'
  }

  const sectionTitleStyle = {
    color: '#D4AF37',
    marginBottom: '1rem',
    fontSize: '1.3rem',
    fontWeight: '600'
  }

  const textStyle = {
    color: 'rgba(255, 255, 255, 0.8)',
    lineHeight: 1.7,
    marginBottom: '1rem'
  }

  const linkStyle = {
    color: 'rgba(255, 255, 255, 0.7)',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    display: 'block',
    padding: '0.3rem 0',
    borderRadius: '5px'
  }

  const socialLinksStyle = {
    display: 'flex',
    gap: '1rem',
    marginTop: '1.5rem'
  }

  const getSocialLinkStyle = (index) => ({
    width: '50px',
    height: '50px',
    background: hoveredSocial === index 
      ? 'linear-gradient(45deg, #D4AF37, #F4D03F)' 
      : 'rgba(212, 175, 55, 0.2)',
    color: hoveredSocial === index ? '#1a1a1a' : '#D4AF37',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '1.2rem',
    transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    transform: hoveredSocial === index ? 'translateY(-5px) scale(1.1)' : 'translateY(0) scale(1)',
    boxShadow: hoveredSocial === index 
      ? '0 10px 25px rgba(212, 175, 55, 0.4)' 
      : '0 4px 15px rgba(0, 0, 0, 0.2)'
  })

  const contactItemStyle = {
    marginBottom: '1rem',
    padding: '0.8rem',
    borderRadius: '10px',
    background: 'rgba(255, 255, 255, 0.03)',
    transition: 'all 0.3s ease'
  }

  const contactLabelStyle = {
    color: '#D4AF37',
    display: 'block',
    marginBottom: '0.3rem',
    fontWeight: '600',
    fontSize: '0.9rem'
  }

  const hoursStyle = {
    marginBottom: '0.8rem',
    padding: '0.5rem 0',
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
  }

  const footerBottomStyle = {
    borderTop: '1px solid rgba(212, 175, 55, 0.3)',
    paddingTop: '2rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '1rem'
  }

  const copyrightStyle = {
    margin: 0,
    color: 'rgba(255, 255, 255, 0.6)',
    fontSize: '0.95rem'
  }

  const bottomLinksStyle = {
    display: 'flex',
    gap: '2rem'
  }

  const backgroundDecoration = {
    position: 'absolute',
    bottom: '10%',
    right: '-15%',
    width: '40%',
    height: '40%',
    background: 'radial-gradient(circle, rgba(212, 175, 55, 0.1), transparent)',
    borderRadius: '50%',
    animation: 'pulse 6s ease-in-out infinite'
  }

  const socialLinks = [
    { name: 'Facebook', icon: 'FB', url: '#' },
    { name: 'Instagram', icon: 'IG', url: '#' },
    { name: 'Twitter', icon: 'TW', url: '#' },
    { name: 'LinkedIn', icon: 'LI', url: '#' }
  ]

  const quickLinks = ['Home', 'About', 'Menu', 'Gallery', 'Contact']

  return (
    <footer style={footerStyle}>
      <div style={backgroundDecoration}></div>
      <div style={containerStyle}>
        <div style={contentStyle}>
          <div 
            style={sectionStyle(0)}
            onMouseEnter={() => setHoveredSection(0)}
            onMouseLeave={() => setHoveredSection(null)}
          >
            <h3 style={brandTitleStyle}>Bella Vista</h3>
            <p style={textStyle}>
              Where culinary artistry meets exceptional service. 
              Experience the finest dining in an atmosphere of elegance and warmth.
            </p>
            <div style={socialLinksStyle}>
              {socialLinks.map((social, index) => (
                <a
                  key={social.name}
                  href={social.url}
                  style={getSocialLinkStyle(index)}
                  onMouseEnter={() => setHoveredSocial(index)}
                  onMouseLeave={() => setHoveredSocial(null)}
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div 
            style={sectionStyle(1)}
            onMouseEnter={() => setHoveredSection(1)}
            onMouseLeave={() => setHoveredSection(null)}
          >
            <h4 style={sectionTitleStyle}>Quick Links</h4>
            <ul style={{listStyle: 'none', padding: 0}}>
              {quickLinks.map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase()}`}
                    style={linkStyle}
                    onMouseEnter={(e) => {
                      e.target.style.color = '#D4AF37'
                      e.target.style.paddingLeft = '10px'
                      e.target.style.background = 'rgba(212, 175, 55, 0.1)'
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = 'rgba(255, 255, 255, 0.7)'
                      e.target.style.paddingLeft = '0'
                      e.target.style.background = 'transparent'
                    }}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div 
            style={sectionStyle(2)}
            onMouseEnter={() => setHoveredSection(2)}
            onMouseLeave={() => setHoveredSection(null)}
          >
            <h4 style={sectionTitleStyle}>Contact Info</h4>
            <div style={contactItemStyle}>
              <strong style={contactLabelStyle}>📍 Address:</strong>
              <p style={{...textStyle, margin: 0}}>
                123 Culinary Boulevard<br />
                Downtown District, NY 10001
              </p>
            </div>
            <div style={contactItemStyle}>
              <strong style={contactLabelStyle}>📞 Phone:</strong>
              <p style={{...textStyle, margin: 0}}>(555) 123-4567</p>
            </div>
            <div style={contactItemStyle}>
              <strong style={contactLabelStyle}>✉️ Email:</strong>
              <p style={{...textStyle, margin: 0}}>info@bellavista.com</p>
            </div>
          </div>

          <div 
            style={sectionStyle(3)}
            onMouseEnter={() => setHoveredSection(3)}
            onMouseLeave={() => setHoveredSection(null)}
          >
            <h4 style={sectionTitleStyle}>Hours</h4>
            <div style={hoursStyle}>
              <p style={{...textStyle, margin: 0}}>
                <strong style={{color: '#D4AF37'}}>Mon - Thu:</strong> 5:00 PM - 10:00 PM
              </p>
            </div>
            <div style={hoursStyle}>
              <p style={{...textStyle, margin: 0}}>
                <strong style={{color: '#D4AF37'}}>Fri - Sat:</strong> 5:00 PM - 11:00 PM
              </p>
            </div>
            <div style={hoursStyle}>
              <p style={{...textStyle, margin: 0}}>
                <strong style={{color: '#D4AF37'}}>Sunday:</strong> 4:00 PM - 9:00 PM
              </p>
            </div>
          </div>
        </div>

        <div style={footerBottomStyle}>
          <p style={copyrightStyle}>
            &copy; 2025 Bella Vista Restaurant. All rights reserved.
          </p>
          <div style={bottomLinksStyle}>
            <a 
              href="#"
              style={linkStyle}
              onMouseEnter={(e) => e.target.style.color = '#D4AF37'}
              onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.6)'}
            >
              Privacy Policy
            </a>
            <a 
              href="#"
              style={linkStyle}
              onMouseEnter={(e) => e.target.style.color = '#D4AF37'}
              onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.6)'}
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1) rotate(0deg); opacity: 0.3; }
          50% { transform: scale(1.2) rotate(10deg); opacity: 0.6; }
        }
        
        @media (max-width: 768px) {
          .footer-content {
            grid-template-columns: 1fr !important;
            text-align: center !important;
          }
          .footer-bottom {
            flex-direction: column !important;
            text-align: center !important;
          }
          .social-links {
            justify-content: center !important;
          }
        }
      `}</style>
    </footer>
  )
}

export default Footer
