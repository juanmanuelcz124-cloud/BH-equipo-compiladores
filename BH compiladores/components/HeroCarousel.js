function HeroCarousel({ scrollToSection }) {
  try {
    const slides = [
      {
        image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=1920&q=80',
        title: 'Hamburguesas Artesanales',
        subtitle: 'Preparadas con ingredientes frescos'
      },
      {
        image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=1920&q=80',
        title: 'Burritos Auténticos',
        subtitle: 'Sabor tradicional en cada bocado'
      },
      {
        image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=1920&q=80',
        title: 'Complementos Deliciosos',
        subtitle: 'Papas, aros de cebolla y más'
      }
    ];

    return (
      <div className="relative" data-name="hero-carousel" data-file="components/HeroCarousel.js">
        <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            {slides.map((slide, index) => (
              <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                <img src={slide.image} className="d-block w-100" alt={slide.title} style={{ height: '600px', objectFit: 'cover' }} />
                <div className="position-absolute top-50 end-0 translate-middle-y me-5" style={{ maxWidth: '480px' }}>
                  <div className="glassmorphism p-6 rounded-4 shadow-lg" style={{ borderRadius: '1.5rem' }}>
                    <div className="text-center mb-5">
                      <h1 className="display-2 font-weight-bold text-[var(--text-dark)] mb-0" style={{ letterSpacing: '-0.03em' }}>BH</h1>
                      <p className="text-[var(--text-light)] fs-6 mt-2" style={{ letterSpacing: '0.1em' }}>HAMBURGUESAS & BURRITOS</p>
                    </div>
                    <h2 className="fs-1 fw-bold mb-3" style={{ lineHeight: '1.2' }}>{slide.title}</h2>
                    <p className="text-[var(--text-light)] mb-5 fs-6">{slide.subtitle}</p>
                    <button onClick={() => scrollToSection('menu')} className="btn-primary w-100 fs-6">
                      Ver Menú Completo
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon"></span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>
      </div>
    );
  } catch (error) {
    console.error('HeroCarousel component error:', error);
    return null;
  }
}