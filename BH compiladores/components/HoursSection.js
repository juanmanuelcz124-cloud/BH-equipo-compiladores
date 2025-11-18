function HoursSection() {
  try {
    const schedules = [
      {
        icon: 'fa-mobile-screen',
        title: 'Servicio en Línea',
        days: 'Lunes a Domingo',
        hours: '7:00 AM - 11:00 PM',
        color: 'bg-green-100'
      },
      {
        icon: 'fa-store',
        title: 'Sucursales Físicas',
        days: 'Lunes a Jueves: 8:00 AM - 10:00 PM',
        hours: 'Viernes a Domingo: 8:00 AM - 11:00 PM',
        color: 'bg-blue-100'
      }
    ];

    return (
      <div className="container mx-auto px-4 py-20 bg-[var(--secondary-color)]" data-name="hours-section" data-file="components/HoursSection.js">
        <h2 className="text-5xl font-bold text-center mb-16" style={{ letterSpacing: '-0.02em' }}>Horarios de Atención</h2>
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {schedules.map((schedule, index) => (
            <div key={index} className="card-hover bg-white rounded-3xl p-10 shadow-sm">
              <div className={`w-20 h-20 rounded-2xl ${schedule.color} flex items-center justify-center mb-6`}>
                <i className={`fas ${schedule.icon} text-4xl text-[var(--primary-color)]`}></i>
              </div>
              <h3 className="text-3xl font-bold mb-4">{schedule.title}</h3>
              <p className="text-[var(--text-light)] mb-2 text-base leading-relaxed">{schedule.days}</p>
              <p className="text-[var(--text-dark)] font-semibold text-base">{schedule.hours}</p>
            </div>
          ))}
        </div>
      </div>
    );
  } catch (error) {
    console.error('HoursSection component error:', error);
    return null;
  }
}