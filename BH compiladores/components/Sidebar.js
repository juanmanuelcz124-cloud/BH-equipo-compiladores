function Sidebar({ isOpen, setIsOpen, activeSection, scrollToSection }) {
  try {
    const menuItems = [
      { id: 'inicio', label: 'INICIO', icon: 'house' },
      { id: 'menu', label: 'MENÚ', icon: 'utensils' },
      { id: 'resenas', label: 'RESEÑAS', icon: 'star' },
      { id: 'contacto', label: 'CONTACTO', icon: 'phone' }
    ];

    return (
      <>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="fixed top-6 left-6 z-50 bg-white text-[var(--text-dark)] p-4 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100"
          data-name="sidebar-toggle"
          data-file="components/Sidebar.js"
        >
          <div className={`icon-${isOpen ? 'x' : 'menu'} text-xl`}></div>
        </button>

        <div
          className={`fixed top-0 left-0 h-full bg-white shadow-2xl z-40 transition-transform duration-300 ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
          style={{ width: '280px' }}
          data-name="sidebar"
          data-file="components/Sidebar.js"
        >
          <div className="p-10">
            <div className="mb-16 text-center">
              <h2 className="text-4xl font-bold text-[var(--text-dark)] mb-1">BH</h2>
              <p className="text-xs text-[var(--text-light)] mt-2 tracking-wider">HAMBURGUESAS & BURRITOS</p>
            </div>

            <nav>
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full text-left px-5 py-4 rounded-xl mb-3 flex items-center gap-4 transition-all ${
                    activeSection === item.id
                      ? 'bg-[var(--primary-color)] text-white shadow-lg'
                      : 'text-[var(--text-dark)] hover:bg-[var(--secondary-color)]'
                  }`}
                >
                  <div className={`icon-${item.icon} text-xl`}></div>
                  <span className="font-semibold text-sm tracking-wide">{item.label}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>

        {isOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-30 z-30"
            onClick={() => setIsOpen(false)}
          ></div>
        )}
      </>
    );
  } catch (error) {
    console.error('Sidebar component error:', error);
    return null;
  }
}