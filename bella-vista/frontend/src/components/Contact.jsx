import { useState } from 'react';
import { createReservation } from '../services/api'; // Import the API service

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '',
    message: ''
  });
  
  const [focusedField, setFocusedField] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: name === 'guests' ? parseInt(value, 10) : value // Parse guests as a number
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage('');
    setErrorMessage('');

    console.log('Form Data:', formData); // Log the form data

    try {
      await createReservation(formData); // Send data to the backend
      setSuccessMessage('Reservation successfully created!');
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        guests: '',
        message: ''
      });
    } catch (error) {
      console.error('Error:', error); // Log the error
      setErrorMessage('Failed to create reservation. Please try again.');
    }
  };

  const sectionStyle = {
    padding: '100px 0',
    background: 'linear-gradient(135deg, #1a1a1a 0%, #2c2c2c 100%)',
    color: '#ffffff',
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
    alignItems: 'start'
  }

  const titleStyle = {
    fontFamily: "'Playfair Display', serif",
    fontSize: 'clamp(2rem, 4vw, 3rem)',
    marginBottom: '1rem',
    background: 'linear-gradient(45deg, #ffffff, #D4AF37)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
  }

  const subtitleStyle = {
    fontSize: '1.2rem',
    marginBottom: '2rem',
    color: 'rgba(255, 255, 255, 0.8)',
    lineHeight: 1.6
  }

  const infoGroupStyle = {
    marginBottom: '2rem',
    padding: '1.5rem',
    background: 'rgba(255, 255, 255, 0.05)',
    borderRadius: '15px',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(212, 175, 55, 0.2)',
    transition: 'all 0.3s ease',
    cursor: 'pointer'
  }

  const infoTitleStyle = {
    color: '#D4AF37',
    marginBottom: '0.5rem',
    fontSize: '1.3rem',
    fontWeight: '600'
  }

  const infoTextStyle = {
    color: 'rgba(255, 255, 255, 0.9)',
    margin: 0,
    lineHeight: 1.6
  }

  const formStyle = {
    background: 'rgba(255, 255, 255, 0.1)',
    padding: '3rem',
    borderRadius: '20px',
    backdropFilter: 'blur(15px)',
    border: '1px solid rgba(212, 175, 55, 0.3)',
    boxShadow: '0 25px 50px rgba(0, 0, 0, 0.3)'
  }

  const formRowStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '1rem',
    marginBottom: '1.5rem'
  }

  const getInputStyle = (fieldName) => ({
    padding: '16px 20px',
    border: `2px solid ${focusedField === fieldName ? '#D4AF37' : 'rgba(255, 255, 255, 0.2)'}`,
    borderRadius: '12px',
    fontFamily: "'Inter', sans-serif",
    fontSize: '1rem',
    transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    background: 'rgba(255, 255, 255, 0.1)',
    color: '#ffffff',
    backdropFilter: 'blur(10px)',
    transform: focusedField === fieldName ? 'translateY(-2px) scale(1.02)' : 'translateY(0) scale(1)',
    boxShadow: focusedField === fieldName 
      ? '0 8px 25px rgba(212, 175, 55, 0.2)' 
      : '0 4px 15px rgba(0, 0, 0, 0.1)'
  })

  const textareaStyle = {
    ...getInputStyle('message'),
    gridColumn: '1 / -1',
    resize: 'vertical',
    minHeight: '120px',
    fontFamily: "'Inter', sans-serif"
  }

  const submitButtonStyle = {
    width: '100%',
    padding: '18px',
    background: 'linear-gradient(45deg, #D4AF37, #F4D03F)',
    color: '#1a1a1a',
    border: 'none',
    borderRadius: '12px',
    fontFamily: "'Inter', sans-serif",
    fontWeight: '600',
    fontSize: '1.1rem',
    cursor: 'pointer',
    transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    letterSpacing: '0.5px',
    marginTop: '1rem',
    textTransform: 'uppercase',
    boxShadow: '0 8px 25px rgba(212, 175, 55, 0.3)'
  }

  const backgroundDecoration = {
    position: 'absolute',
    top: '20%',
    left: '-20%',
    width: '60%',
    height: '60%',
    background: 'radial-gradient(circle, rgba(212, 175, 55, 0.1), transparent)',
    borderRadius: '50%',
    animation: 'pulse 4s ease-in-out infinite'
  }

  const infoCards = [
    {
      title: "Location",
      content: "123 Culinary Boulevard\nDowntown District, NY 10001",
      icon: "📍"
    },
    {
      title: "Hours",
      content: "Monday - Thursday: 5:00 PM - 10:00 PM\nFriday - Saturday: 5:00 PM - 11:00 PM\nSunday: 4:00 PM - 9:00 PM",
      icon: "🕒"
    },
    {
      title: "Contact",
      content: "Phone: (555) 123-4567\nEmail: reservations@bellavista.com",
      icon: "📞"
    }
  ]

  return (
    <section id="contact" style={sectionStyle}>
      <div style={backgroundDecoration}></div>
      <div style={containerStyle}>
        <div style={contentStyle}>
          <div>
            <h2 style={titleStyle}>Reserve Your Table</h2>
            <p style={subtitleStyle}>
              Experience unforgettable dining. Book your table today and embark on a culinary journey.
            </p>
            
            {infoCards.map((card, index) => (
              <div 
                key={index}
                style={{
                  ...infoGroupStyle,
                  transform: hoveredCard === index ? 'translateY(-5px) scale(1.02)' : 'translateY(0) scale(1)',
                  background: hoveredCard === index 
                    ? 'rgba(212, 175, 55, 0.1)' 
                    : 'rgba(255, 255, 255, 0.05)'
                }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <h3 style={infoTitleStyle}>
                  <span style={{marginRight: '10px', fontSize: '1.5rem'}}>{card.icon}</span>
                  {card.title}
                </h3>
                <p style={infoTextStyle}>
                  {card.content.split('\n').map((line, i) => (
                    <span key={i}>
                      {line}
                      {i < card.content.split('\n').length - 1 && <br />}
                    </span>
                  ))}
                </p>
              </div>
            ))}
          </div>

          <form style={formStyle} onSubmit={handleSubmit}>
            <div style={formRowStyle}>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                onFocus={() => setFocusedField('name')}
                onBlur={() => setFocusedField(null)}
                style={getInputStyle('name')}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                onFocus={() => setFocusedField('email')}
                onBlur={() => setFocusedField(null)}
                style={getInputStyle('email')}
                required
              />
            </div>

            <div style={formRowStyle}>
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                onFocus={() => setFocusedField('phone')}
                onBlur={() => setFocusedField(null)}
                style={getInputStyle('phone')}
                required
              />
              <select
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                onFocus={() => setFocusedField('guests')}
                onBlur={() => setFocusedField(null)}
                style={getInputStyle('guests')}
                required
              >
                <option value="">Number of Guests</option>
                <option value="1">1 Guest</option>
                <option value="2">2 Guests</option>
                <option value="3">3 Guests</option>
                <option value="4">4 Guests</option>
                <option value="5">5 Guests</option>
                <option value="6+">6+ Guests</option>
              </select>
            </div>

            <div style={formRowStyle}>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                onFocus={() => setFocusedField('date')}
                onBlur={() => setFocusedField(null)}
                style={getInputStyle('date')}
                required
              />
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                onFocus={() => setFocusedField('time')}
                onBlur={() => setFocusedField(null)}
                style={getInputStyle('time')}
                required
              />
            </div>

            <textarea
              name="message"
              placeholder="Special requests or dietary restrictions"
              value={formData.message}
              onChange={handleChange}
              onFocus={() => setFocusedField('message')}
              onBlur={() => setFocusedField(null)}
              style={textareaStyle}
              rows="4"
            ></textarea>

            <button 
              type="submit" 
              style={submitButtonStyle}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-3px) scale(1.02)'
                e.target.style.boxShadow = '0 15px 35px rgba(212, 175, 55, 0.5)'
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0) scale(1)'
                e.target.style.boxShadow = '0 8px 25px rgba(212, 175, 55, 0.3)'
              }}
            >
              Reserve Table
            </button>
            {successMessage && <p style={{ color: 'green', marginTop: '1rem' }}>{successMessage}</p>}
            {errorMessage && <p style={{ color: 'red', marginTop: '1rem' }}>{errorMessage}</p>}
          </form>
        </div>
      </div>
      
      <style>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1) rotate(0deg); opacity: 0.5; }
          50% { transform: scale(1.1) rotate(5deg); opacity: 0.8; }
        }
        
        input::placeholder, textarea::placeholder, select option {
          color: rgba(255, 255, 255, 0.6);
        }
        
        select option {
          background: #1a1a1a;
          color: #ffffff;
        }
        
        @media (max-width: 768px) {
          .contact-content {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          .form-row {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}

export default Contact
