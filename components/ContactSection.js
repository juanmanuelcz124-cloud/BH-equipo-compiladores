function ContactSection() {
  try {
    const branches = [
      {
        name: 'Sucursal Centro',
        address: 'Av. Juárez #123, Col. Centro',
        phone: '(555) 123-4567',
        hours: 'Lun-Jue: 8AM-10PM | Vie-Dom: 8AM-11PM'
      },
      {
        name: 'Sucursal Norte',
        address: 'Blvd. Norte #456, Col. San José',
        phone: '(555) 234-5678',
        hours: 'Lun-Jue: 8AM-10PM | Vie-Dom: 8AM-11PM'
      },
      {
        name: 'Sucursal Sur',
        address: 'Av. Insurgentes #789, Col. Del Valle',
        phone: '(555) 345-6789',
        hours: 'Lun-Jue: 8AM-10PM | Vie-Dom: 8AM-11PM'
      }
    ];

    return (
      <div className="container mx-auto px-4 py-16" data-name="contact-section" data-file="components/ContactSection.js">
        <h2 className="text-4xl font-bold text-center mb-4">Contáctanos</h2>
        <p className="text-center text-[var(--text-light)] mb-12 text-lg">Visítanos o pide a domicilio</p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
                <i className="fas fa-phone text-2xl text-[var(--primary-color)]"></i>
              </div>
              <h3 className="text-2xl font-bold">Pedidos a Domicilio</h3>
            </div>
            <p className="text-[var(--text-light)] mb-4">Llámanos o escríbenos por WhatsApp</p>
            <a href="tel:+525551234567" className="block text-[var(--primary-color)] font-bold text-xl mb-2 hover:underline">
              (555) 123-4567
            </a>
            <a 
              href="https://wa.me/525551234567" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-green-600 font-semibold hover:underline"
            >
              <i className="fab fa-whatsapp text-xl"></i>
              WhatsApp Business
            </a>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                <i className="fas fa-envelope text-2xl text-[var(--primary-color)]"></i>
              </div>
              <h3 className="text-2xl font-bold">Atención a Clientes</h3>
            </div>
            <p className="text-[var(--text-light)] mb-4">Quejas, sugerencias y comentarios</p>
            <a href="mailto:contacto@bh-burgers.com" className="text-[var(--primary-color)] font-semibold hover:underline">
              contacto@bh-burgers.com
            </a>
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-3xl font-bold text-center mb-8">Nuestras Sucursales</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {branches.map((branch, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg card-hover border border-gray-100">
                <h4 className="text-xl font-bold mb-3 text-[var(--primary-color)]">{branch.name}</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <i className="fas fa-map-marker-alt text-[var(--text-light)] mt-1"></i>
                    <p className="text-sm">{branch.address}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="fas fa-phone text-[var(--text-light)]"></i>
                    <a href={`tel:${branch.phone.replace(/[^0-9]/g, '')}`} className="text-sm hover:text-[var(--primary-color)]">
                      {branch.phone}
                    </a>
                  </div>
                  <div className="flex items-start gap-2">
                    <i className="fas fa-clock text-[var(--text-light)] mt-1"></i>
                    <p className="text-sm">{branch.hours}</p>
                  </div>
                </div>
                <a href={`tel:${branch.phone.replace(/[^0-9]/g, '')}`} className="btn-primary w-full mt-4 text-center block">
                  Llamar
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.8598!2d-99.1332!3d19.4326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDI1JzU3LjQiTiA5OcKwMDcnNTkuNSJX!5e0!3m2!1ses!2smx!4v1234567890"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    );
  } catch (error) {
    console.error('ContactSection component error:', error);
    return null;
  }
}