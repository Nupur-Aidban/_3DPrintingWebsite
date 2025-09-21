import "./Services.css";

export default function Services() {
  const services = [
    { title: "Prototyping", desc: "High-quality prototypes." },
    { title: "Custom 3D Models", desc: "Tailored designs for unique projects." },
    { title: "Bulk Printing", desc: "Cost-effective solutions for large orders." }
  ];

  return (
    <section className="services-section" id="services">
      <h3 className="service-title">Our Services</h3>
      <div className="services-grid">
        {services.map((service, i) => (
          <div className="service-card" key={i}>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
