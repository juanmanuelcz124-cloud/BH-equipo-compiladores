function MenuSection() {
  try {
    const [activeCategory, setActiveCategory] = React.useState('hamburguesas');

    const categories = {
      hamburguesas: [
        { name: 'Clásica BH', desc: 'Carne, queso cheddar, lechuga, tomate', price: '$89', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80' },
        { name: 'Doble Queso', desc: 'Doble carne, doble queso cheddar', price: '$115', image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&q=80' },
        { name: 'BBQ', desc: 'Carne, queso, tocino, salsa BBQ', price: '$99', image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=400&q=80' },
        { name: 'Picante', desc: 'Carne, jalapeños, queso pepper jack', price: '$95', image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=400&q=80' },
        { name: 'Vegetariana', desc: 'Hamburguesa de garbanzo, aguacate', price: '$85', image: 'https://images.unsplash.com/photo-1520072959219-c595dc870360?w=400&q=80' }
      ],
      burritos: [
        { name: 'Carne Asada', desc: 'Carne asada, frijoles, arroz, pico de gallo', price: '$95', image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&q=80' },
        { name: 'Pollo', desc: 'Pollo marinado, frijoles, arroz, crema', price: '$89', image: 'https://images.unsplash.com/photo-1641983935450-4f1d2f5e69f4?w=400&q=80' },
        { name: 'Mixto', desc: 'Carne y pollo, frijoles, arroz, queso', price: '$105', image: 'https://images.unsplash.com/photo-1599084993091-1cb5c0721cc6?w=400&q=80' },
        { name: 'Vegetariano', desc: 'Frijoles, arroz, verduras, guacamole', price: '$79', image: 'https://images.unsplash.com/photo-1566836492207-2e4a8c6e2fbc?w=400&q=80' },
        { name: 'Picante', desc: 'Carne, jalapeños, salsa habanera', price: '$99', image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&q=80' }
      ],
      complementos: [
        { name: 'Papas Clásicas', desc: 'Papas fritas crujientes', price: '$35', image: 'https://images.unsplash.com/photo-1576107232684-1279f390859f?w=400&q=80' },
        { name: 'Papas Con Queso', desc: 'Papas con queso cheddar fundido', price: '$45', image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&q=80' },
        { name: 'Papas Con Chili', desc: 'Papas con chili con carne', price: '$55', image: 'https://images.unsplash.com/photo-1630431341973-02e1f2980619?w=400&q=80' },
        { name: 'Aros de Cebolla', desc: 'Aros crujientes con dip ranch', price: '$40', image: 'https://images.unsplash.com/photo-1639024471283-03518883512d?w=400&q=80' },
        { name: 'Nuggets', desc: '8 piezas de nuggets de pollo', price: '$50', image: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=400&q=80' },
        { name: 'Ensalada César', desc: 'Lechuga, crutones, parmesano', price: '$65', image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400&q=80' }
      ],
      bebidas: [
        { name: 'Refresco', desc: 'Coca-Cola, Pepsi, Sprite (500ml)', price: '$25', image: 'https://images.unsplash.com/photo-1581006852262-e4307cf6283a?w=400&q=80' },
        { name: 'Agua Natural', desc: 'Limón, naranja, jamaica (500ml)', price: '$30', image: 'https://images.unsplash.com/photo-1523677011781-c91d1bbe2f0b?w=400&q=80' },
        { name: 'Café Americano', desc: 'Café recién hecho', price: '$35', image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&q=80' },
        { name: 'Malteada', desc: 'Chocolate, vainilla, fresa', price: '$55', image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&q=80' }
      ],
      postres: [
        { name: 'Pay de Queso', desc: 'Rebanada de pay de queso NY', price: '$45', image: 'https://images.unsplash.com/photo-1533134242558-c704fa31d9d8?w=400&q=80' },
        { name: 'Brownie', desc: 'Brownie de chocolate con helado', price: '$50', image: 'https://images.unsplash.com/photo-1606313564659-5afb0a4c91d7?w=400&q=80' },
        { name: 'Helado', desc: '2 bolas de helado (varios sabores)', price: '$40', image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&q=80' },
        { name: 'Churros', desc: '5 churros con cajeta', price: '$45', image: 'https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400&q=80' }
      ]
    };

    const categoryLabels = {
      hamburguesas: 'Hamburguesas',
      burritos: 'Burritos',
      complementos: 'Complementos',
      bebidas: 'Bebidas',
      postres: 'Postres'
    };

    return (
      <div className="bg-[var(--secondary-color)] py-20" data-name="menu-section" data-file="components/MenuSection.js">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-16" style={{ letterSpacing: '-0.02em' }}>Nuestro Menú</h2>
          
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {Object.keys(categories).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-8 py-3 rounded-2xl font-semibold transition-all text-sm tracking-wide ${
                  activeCategory === cat
                    ? 'bg-[var(--primary-color)] text-white shadow-lg'
                    : 'bg-white text-[var(--text-dark)] hover:bg-gray-50 shadow-sm'
                }`}
              >
                {categoryLabels[cat]}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {categories[activeCategory].map((item, index) => (
              <div key={index} className="bg-white rounded-3xl overflow-hidden shadow-sm card-hover">
                <div className="relative">
                  <img src={item.image} alt={item.name} className="w-full h-56 object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{item.name}</h3>
                  <p className="text-[var(--text-light)] mb-4 text-sm leading-relaxed">{item.desc}</p>
                  <p className="text-[var(--primary-color)] font-bold text-2xl">{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('MenuSection component error:', error);
    return null;
  }
}