class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Algo salió mal</h1>
            <p className="text-gray-600 mb-4">Lo sentimos, ocurrió un error inesperado.</p>
            <button onClick={() => window.location.reload()} className="btn-primary">
              Recargar Página
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

function App() {
  try {
    const [sidebarOpen, setSidebarOpen] = React.useState(false);
    const [activeSection, setActiveSection] = React.useState('inicio');

    React.useEffect(() => {
      const handleScroll = () => {
        const sections = ['inicio', 'menu', 'resenas', 'contacto'];
        const scrollPosition = window.scrollY + 100;

        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const offsetTop = element.offsetTop;
            const offsetBottom = offsetTop + element.offsetHeight;
            
            if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
              setActiveSection(section);
              break;
            }
          }
        }
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setSidebarOpen(false);
      }
    };

    return (
      <div className="min-h-screen bg-white" data-name="app" data-file="app.js">
        <Sidebar 
          isOpen={sidebarOpen}
          setIsOpen={setSidebarOpen}
          activeSection={activeSection}
          scrollToSection={scrollToSection}
        />

        <main>
          <section id="inicio">
            <HeroCarousel scrollToSection={scrollToSection} />
            <HoursSection />
            <MenuPreview scrollToSection={scrollToSection} />
          </section>

          <section id="menu">
            <MenuSection />
          </section>

          <section id="resenas">
            <ReviewsSection />
          </section>

          <section id="contacto">
            <ContactSection />
          </section>
        </main>

        <a
          href="https://wa.me/525551234567?text=Hola%2C%20me%20gustaría%20hacer%20un%20pedido"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-float flex items-center justify-center"
          aria-label="Contactar por WhatsApp"
        >
          <i className="fab fa-whatsapp text-white text-3xl"></i>
        </a>

        <footer className="bg-[var(--accent-color)] text-white py-6 text-center">
          <p>&copy; 2025 BH - Hamburguesas y Burritos. Todos los derechos reservados.</p>
        </footer>
      </div>
    );
  } catch (error) {
    console.error('App component error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);