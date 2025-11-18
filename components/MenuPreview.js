function MenuPreview({ scrollToSection }) {
  try {
    const featured = [
      {
        name: 'Hamburguesa Clásica BH',
        description: 'Carne premium, queso cheddar, lechuga y tomate',
        price: '$89',
        image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80'
      },
      {
        name: 'Burrito Carne Asada',
        description: 'Carne asada, frijoles, arroz y pico de gallo',
        price: '$95',
        image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&q=80'
      },
      {
        name: 'Papas Con Queso',
        description: 'Papas crujientes bañadas en queso cheddar',
        price: '$45',
        image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&q=80'
      },
      {
        name: 'Malteada de Chocolate',
        description: 'Malteada cremosa con chocolate belga',
        price: '$55',
        image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&q=80'
      }
    ];

    return (
      <div className="bg-white py-20" data-name="menu-preview" data-file="components/MenuPreview.js">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-3" style={{ letterSpacing: '-0.02em' }}>Menú del Día</h2>
          <p className="text-center text-[var(--text-light)] mb-16 text-lg">Nuestros platillos más populares</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {featured.map((item, index) => (
              <div key={index} className="bg-white rounded-3xl overflow-hidden shadow-sm card-hover">
                <div className="relative">
                  <img src={item.image} alt={item.name} className="w-full h-56 object-cover" />
                  <span className="absolute top-4 right-4 glassmorphism text-[var(--text-dark)] px-4 py-2 rounded-full text-xs font-bold tracking-wide">
                    ESPECIAL
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-2">{item.name}</h3>
                  <p className="text-[var(--text-light)] text-sm mb-4 leading-relaxed">{item.description}</p>
                  <p className="text-[var(--primary-color)] font-bold text-2xl">{item.price}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button onClick={() => scrollToSection('menu')} className="btn-primary text-base">
              Ver Menú Completo
            </button>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('MenuPreview component error:', error);
    return null;
  }
}