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
    { id: 'appetizers', name: 'Appetizers', icon: '🥗' },
    { id: 'mains', name: 'Main Courses', icon: '🥩' },
    { id: 'desserts', name: 'Desserts', icon: '🍰' }
  ]

  useEffect(() => {
    setAnimatingItems(true)
    const timer = setTimeout(() => setAnimatingItems(false), 600)
    return () => clearTimeout(timer)
  }, [activeCategory])

  const sectionStyle = {
    padding: '100px 0',
    background: 'linear-gradient(135deg, #ffffff 0%, #f8f8f8 100%)',
    position: 'relative'
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
      ? 'linear-gradient(45deg, #D4AF37, #F4D03F)' 
      : 'rgba(255, 255, 255, 0.8)',
    color: isActive ? '#1a1a1a' : '#666',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    fontFamily: "'Inter', sans-serif",
    letterSpacing: '0.5px',
    borderRadius: '50px',
    fontSize: '1rem',
    backdropFilter: 'blur(10px)',
    boxShadow: isActive 
      ? '0 8px 25px rgba(212, 175, 55, 0.3)' 
      : '0 4px 15px rgba(0, 0, 0, 0.1)',
    transform: isActive ? 'translateY(-3px) scale(1.05)' : 'translateY(0) scale(1)'
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
    padding: '2rem',
    background: 'rgba(255, 255, 255, 0.7)',
    borderRadius: '20px',
    transition: 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    position: 'relative',
    overflow: 'hidden',
    border: '1px solid rgba(224, 224, 224, 0.3)',
    backdropFilter: 'blur(10px)',
    transform: animatingItems 
      ? 'translateY(30px) scale(0.95)' 
      : 'translateY(0) scale(1)',
    opacity: animatingItems ? 0 : 1,
    animationDelay: `${index * 0.1}s`,
    cursor: 'pointer',
    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.08)'
  })

  const itemInfoStyle = {
    flex: 1
  }

  const itemNameStyle = {
    fontFamily: "'Playfair Display', serif",
    color: '#1a1a1a',
    marginBottom: '0.5rem',
    fontSize: '1.4rem',
    fontWeight: '600',
    position: 'relative',
    display: 'inline-block'
  }

  const itemDescriptionStyle = {
    color: '#666',
    lineHeight: 1.7,
    margin: 0,
    fontSize: '1rem'
  }

  const itemPriceStyle = {
    fontFamily: "'Playfair Display', serif",
    fontSize: '1.3rem',
    fontWeight: '700',
    color: '#D4AF37',
    marginLeft: '2rem',
    flexShrink: 0
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
                  e.target.style.transform = 'translateY(-2px) scale(1.02)'
                  e.target.style.borderColor = '#D4AF37'
                }
              }}
              onMouseLeave={(e) => {
                if (activeCategory !== category.id) {
                  e.target.style.transform = 'translateY(0) scale(1)'
                  e.target.style.borderColor = '#e0e0e0'
                }
              }}
            >
              <span style={{marginRight: '8px'}}>{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>

        <div style={menuItemsStyle}>
          {menuData[activeCategory].map((item, index) => (
            <div 
              key={`${activeCategory}-${index}`}
              style={getMenuItemStyle(index, item.premium)}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-8px) scale(1.02)'
                e.target.style.boxShadow = '0 15px 40px rgba(0, 0, 0, 0.15)'
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0) scale(1)'
                e.target.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.08)'
              }}
            >
              <div style={itemInfoStyle}>
                <h3 style={itemNameStyle}>{item.name}</h3>
                <p style={itemDescriptionStyle}>{item.description}</p>
              </div>
              <div style={itemPriceStyle}>{item.price}</div>
            </div>
          ))}
        </div>
      </div>
      
      <style>{`
        @media (max-width: 768px) {
          .menu-item {
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
