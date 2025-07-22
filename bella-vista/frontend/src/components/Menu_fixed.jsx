import { useState, useEffect } from 'react'

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('appetizers')
  const [animatingItems, setAnimatingItems] = useState(false)

  const menuData = {
    appetizers: [
      { name: "Truffle Arancini", description: "Crispy risotto balls with black truffle and parmesan", price: "$18" },
      { name: "Burrata & Prosciutto", description: "Fresh burrata with San Daniele prosciutto and fig compote", price: "$22" },
      { name: "Tuna Tartare", description: "Yellowfin tuna with avocado, citrus, and sesame", price: "$24" },
      { name: "Duck Liver Mousse", description: "Smooth mousse with port wine gelée and brioche", price: "$20" }
    ],
    mains: [
      { name: "Wagyu Ribeye", description: "12oz A5 Wagyu with roasted bone marrow and truffle jus", price: "$85" },
      { name: "Lobster Ravioli", description: "House-made pasta with Maine lobster in saffron cream", price: "$38" },
      { name: "Duck Confit", description: "Classic preparation with cherry gastrique and fingerling potatoes", price: "$34" },
      { name: "Branzino", description: "Mediterranean sea bass with herb crust and lemon butter", price: "$32" }
    ],
    desserts: [
      { name: "Chocolate Soufflé", description: "Dark chocolate soufflé with vanilla bean ice cream", price: "$16" },
      { name: "Tiramisu", description: "Traditional Italian tiramisu with espresso and mascarpone", price: "$14" },
      { name: "Crème Brûlée", description: "Vanilla bean custard with caramelized sugar", price: "$12" },
      { name: "Gelato Selection", description: "Daily selection of artisanal gelato", price: "$10" }
    ]
  }

  const categories = [
    { id: 'appetizers', name: 'Appetizers' },
    { id: 'mains', name: 'Main Courses' },
    { id: 'desserts', name: 'Desserts' }
  ]

  useEffect(() => {
    setAnimatingItems(true)
    const timer = setTimeout(() => {
      setAnimatingItems(false)
    }, 100)
    return () => clearTimeout(timer)
  }, [activeCategory])

  const sectionStyle = {
    padding: '100px 0',
    background: 'linear-gradient(135deg, #ffffff 0%, #f8f8f8 100%)',
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

  const categoriesStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
    marginBottom: '3rem',
    flexWrap: 'wrap'
  }

  const getCategoryButtonStyle = (isActive) => ({
    padding: '15px 30px',
    border: `2px solid ${isActive ? '#D4AF37' : '#e0e0e0'}`,
    background: isActive 
      ? 'linear-gradient(135deg, #D4AF37 0%, #F4D03F 50%, #D4AF37 100%)' 
      : 'rgba(255, 255, 255, 0.8)',
    backgroundSize: '200% 100%',
    color: isActive ? '#1a1a1a' : '#666',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    fontFamily: "'Inter', sans-serif",
    letterSpacing: '0.5px',
    borderRadius: '50px',
    fontSize: '1rem',
    backdropFilter: 'blur(10px)',
    boxShadow: isActive 
      ? '0 15px 35px rgba(212, 175, 55, 0.4), 0 5px 15px rgba(212, 175, 55, 0.2)' 
      : '0 4px 15px rgba(0, 0, 0, 0.1)',
    transform: isActive ? 'translateY(-5px) scale(1.08)' : 'translateY(0) scale(1)',
    position: 'relative',
    overflow: 'hidden',
    textShadow: isActive ? '1px 1px 2px rgba(0, 0, 0, 0.2)' : 'none',
    filter: isActive ? 'brightness(1.1)' : 'brightness(1)',
    outline: 'none'
  })

  const menuItemsStyle = {
    display: 'grid',
    gap: '2rem',
    maxWidth: '900px',
    margin: '0 auto'
  }

  const getMenuItemStyle = (index) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: '2.5rem',
    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(248, 248, 248, 0.8))',
    borderRadius: '25px',
    transition: 'all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    position: 'relative',
    overflow: 'hidden',
    border: '1px solid rgba(212, 175, 55, 0.1)',
    backdropFilter: 'blur(15px)',
    transform: animatingItems 
      ? 'translateY(40px) scale(0.92) rotateX(10deg)' 
      : 'translateY(0) scale(1) rotateX(0deg)',
    opacity: animatingItems ? 0 : 1,
    transitionDelay: `${index * 0.12}s`,
    cursor: 'pointer',
    boxShadow: '0 12px 35px rgba(0, 0, 0, 0.08), 0 2px 8px rgba(212, 175, 55, 0.1)',
    outline: 'none'
  })

  const itemInfoStyle = {
    flex: 1
  }

  const itemNameStyle = {
    fontFamily: "'Playfair Display', serif",
    color: '#1a1a1a',
    marginBottom: '0.5rem',
    fontSize: '1.5rem',
    fontWeight: '700',
    position: 'relative',
    display: 'inline-block',
    background: 'linear-gradient(45deg, #1a1a1a, #D4AF37, #1a1a1a)',
    backgroundSize: '200% 100%',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    transition: 'all 0.4s ease'
  }

  const itemDescriptionStyle = {
    color: '#666',
    lineHeight: 1.8,
    margin: 0,
    fontSize: '1.05rem',
    transition: 'color 0.3s ease'
  }

  const itemPriceStyle = {
    fontFamily: "'Playfair Display', serif",
    fontSize: '1.4rem',
    fontWeight: '700',
    color: '#D4AF37',
    marginLeft: '2rem',
    flexShrink: 0,
    background: 'linear-gradient(45deg, #D4AF37, #F4D03F)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    textShadow: '0 2px 4px rgba(212, 175, 55, 0.3)',
    transition: 'all 0.3s ease'
  }

  return (
    <section id="menu" style={sectionStyle}>
      <div style={containerStyle}>
        <div style={headerStyle}>
          <h2 style={titleStyle}>Our Menu</h2>
          <p style={subtitleStyle}>Crafted with passion, served with pride</p>
        </div>

        <div style={categoriesStyle}>
          {categories.map(category => (
            <button
              key={category.id}
              style={getCategoryButtonStyle(activeCategory === category.id)}
              onClick={() => setActiveCategory(category.id)}
              onMouseEnter={(e) => {
                if (activeCategory !== category.id) {
                  e.target.style.transform = 'translateY(-3px) scale(1.05)'
                  e.target.style.borderColor = '#D4AF37'
                  e.target.style.background = 'linear-gradient(135deg, rgba(212, 175, 55, 0.1), rgba(244, 208, 63, 0.1))'
                  e.target.style.boxShadow = '0 12px 25px rgba(212, 175, 55, 0.2)'
                  e.target.style.backgroundPosition = '100% 0'
                }
              }}
              onMouseLeave={(e) => {
                if (activeCategory !== category.id) {
                  e.target.style.transform = 'translateY(0) scale(1)'
                  e.target.style.borderColor = '#e0e0e0'
                  e.target.style.background = 'rgba(255, 255, 255, 0.8)'
                  e.target.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)'
                  e.target.style.backgroundPosition = '0% 0'
                }
              }}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div style={menuItemsStyle}>
          {menuData[activeCategory].map((item, index) => (
            <div 
              key={`${activeCategory}-${index}`}
              style={getMenuItemStyle(index)}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-10px) scale(1.03) rotateX(-2deg)'
                e.target.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.15), 0 10px 30px rgba(212, 175, 55, 0.2)'
                e.target.style.background = 'linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(212, 175, 55, 0.05))'
                e.target.style.borderColor = 'rgba(212, 175, 55, 0.3)'
                
                // Animate title
                const title = e.target.querySelector('h3')
                if (title) {
                  title.style.backgroundPosition = '100% 0'
                  title.style.transform = 'translateX(5px)'
                }
                
                // Animate description
                const description = e.target.querySelector('p')
                if (description) {
                  description.style.color = '#555'
                }
                
                // Animate price
                const price = e.target.querySelector('.price')
                if (price) {
                  price.style.transform = 'scale(1.1)'
                  price.style.textShadow = '0 2px 8px rgba(212, 175, 55, 0.4)'
                }
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0) scale(1) rotateX(0deg)'
                e.target.style.boxShadow = '0 12px 35px rgba(0, 0, 0, 0.08), 0 2px 8px rgba(212, 175, 55, 0.1)'
                e.target.style.background = 'linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(248, 248, 248, 0.8))'
                e.target.style.borderColor = 'rgba(212, 175, 55, 0.1)'
                
                // Reset title
                const title = e.target.querySelector('h3')
                if (title) {
                  title.style.backgroundPosition = '0% 0'
                  title.style.transform = 'translateX(0)'
                }
                
                // Reset description
                const description = e.target.querySelector('p')
                if (description) {
                  description.style.color = '#666'
                }
                
                // Reset price
                const price = e.target.querySelector('.price')
                if (price) {
                  price.style.transform = 'scale(1)'
                  price.style.textShadow = '0 2px 4px rgba(212, 175, 55, 0.3)'
                }
              }}
            >
              <div style={itemInfoStyle}>
                <h3 style={itemNameStyle}>{item.name}</h3>
                <p style={itemDescriptionStyle}>{item.description}</p>
              </div>
              <div className="price" style={itemPriceStyle}>{item.price}</div>
            </div>
          ))}
        </div>
      </div>
      
      <style>{`
        /* Remove default focus outlines */
        button:focus,
        div:focus,
        *:focus {
          outline: none !important;
        }
        
        /* Custom focus styles for accessibility */
        button:focus-visible {
          outline: 2px solid rgba(212, 175, 55, 0.5) !important;
          outline-offset: 2px !important;
        }
        
        @media (max-width: 768px) {
          .menu-categories {
            flex-direction: column !important;
            gap: 1rem !important;
            text-align: center !important;
          }
          .item-price {
            margin-left: 0 !important;
            font-size: 1.5rem !important;
          }
        }
      `}</style>
    </section>
  )
}

export default Menu
