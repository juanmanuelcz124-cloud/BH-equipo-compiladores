function ReviewsSection() {
  try {
    const reviews = [
      {
        name: 'Carlos Méndez',
        date: '15 Oct 2024',
        rating: 5,
        comment: 'Las mejores hamburguesas de la ciudad, siempre frescas y deliciosas. El servicio es excelente y las entregas son rápidas.',
        verified: true,
        initials: 'CM'
      },
      {
        name: 'Ana Rodríguez',
        date: '8 Oct 2024',
        rating: 5,
        comment: 'Me encanta la variedad del menú. Los burritos están increíbles y las porciones son generosas. Definitivamente mi lugar favorito.',
        verified: true,
        initials: 'AR'
      },
      {
        name: 'Luis Hernández',
        date: '2 Oct 2024',
        rating: 5,
        comment: 'Excelente relación calidad-precio. Las papas con queso son adictivas y el ambiente en la sucursal es muy agradable.',
        verified: false,
        initials: 'LH'
      },
      {
        name: 'María Torres',
        date: '28 Sep 2024',
        rating: 5,
        comment: 'Simplemente espectacular. Los ingredientes son frescos, el sabor es auténtico y el servicio es impecable. Totalmente recomendado.',
        verified: true,
        initials: 'MT'
      },
      {
        name: 'Roberto Sánchez',
        date: '20 Sep 2024',
        rating: 5,
        comment: 'Increíble sabor en cada bocado. Las hamburguesas son jugosas y los ingredientes son de primera calidad. Muy recomendado.',
        verified: true,
        initials: 'RS'
      },
      {
        name: 'Patricia López',
        date: '15 Sep 2024',
        rating: 4,
        comment: 'Excelente servicio y comida deliciosa. La atención es muy amable y todo está preparado con mucho cuidado. Volveré pronto.',
        verified: false,
        initials: 'PL'
      },
      {
        name: 'Diego Ramírez',
        date: '10 Sep 2024',
        rating: 5,
        comment: 'Me encanta que ofrecen opciones vegetarianas. La hamburguesa de garbanzo es deliciosa y el personal es muy amable.',
        verified: true,
        initials: 'DR'
      },
      {
        name: 'Carmen Flores',
        date: '5 Sep 2024',
        rating: 5,
        comment: 'Excelente sabor y presentación. Los precios son justos para la calidad que ofrecen. Mis favoritas son las papas con chili.',
        verified: true,
        initials: 'CF'
      }
    ];

    const renderStars = (rating) => {
      return [...Array(5)].map((_, i) => (
        <i key={i} className={`fas fa-star ${i < rating ? 'text-yellow-500' : 'text-gray-300'}`}></i>
      ));
    };

    return (
      <div className="bg-[var(--secondary-color)] py-16" data-name="reviews-section" data-file="components/ReviewsSection.js">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Reseñas de Clientes</h2>
          
          <div className="flex justify-center items-center gap-8 mb-12">
            <div className="text-center">
              <div className="text-5xl font-bold text-[var(--primary-color)] mb-2">4.9</div>
              <div className="flex gap-1 justify-center mb-2">
                {renderStars(5)}
              </div>
              <p className="text-[var(--text-light)]">150+ reseñas</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-[var(--text-light)] mb-2">Disponible en:</p>
              <div className="flex gap-3">
                <span className="bg-white px-3 py-1 rounded-full text-xs font-semibold">Google Reviews</span>
                <span className="bg-white px-3 py-1 rounded-full text-xs font-semibold">Tripadvisor</span>
                <span className="bg-white px-3 py-1 rounded-full text-xs font-semibold">Uber Eats</span>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 max-w-6xl mx-auto">
            {reviews.map((review, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg card-hover border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-[var(--primary-color)] flex items-center justify-center text-white font-bold">
                    {review.initials}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">{review.name}</h4>
                    <p className="text-xs text-[var(--text-light)]">{review.date}</p>
                  </div>
                </div>
                
                <div className="flex gap-1 mb-3">
                  {renderStars(review.rating)}
                </div>
                
                <p className="text-[var(--text-light)] text-sm mb-3">{review.comment}</p>
                
                {review.verified && (
                  <span className="inline-flex items-center gap-1 text-xs text-green-600 font-semibold">
                    <i className="fas fa-check-circle"></i> Cliente Verificado
                  </span>
                )}
              </div>
            ))}
          </div>

          <div className="text-center bg-white rounded-2xl p-8 max-w-2xl mx-auto shadow-lg">
            <h3 className="text-2xl font-bold mb-3">¿Ya probaste nuestros platillos?</h3>
            <p className="text-[var(--text-light)] mb-6">Cuéntanos tu experiencia y ayuda a otros clientes</p>
            <a 
              href="https://www.google.com/search?q=BH+Hamburguesas+y+Burritos+reviews" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary inline-block"
            >
              Dejar Tu Reseña
            </a>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('ReviewsSection component error:', error);
    return null;
  }
}
