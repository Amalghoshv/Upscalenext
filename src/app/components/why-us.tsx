const WhyUs = () => (
    <section id="why-us" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-black">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-gray-800 " >
          {[
            {
              title: 'Expert Team',
              description: 'Young, dynamic professionals with deep ERPNext expertise'
            },
            {
              title: 'Innovation First',
              description: 'Cutting-edge solutions using the latest technologies'
            },
            {
              title: 'Quick Support',
              description: '24/7 support and maintenance for your systems'
            },
            {
              title: 'Custom Solutions',
              description: 'Tailored implementations for your specific needs'
            }
          ].map((item, index) => (
            <div key={index} className="p-6 bg-gray-100 rounded-lg border-2 border-gray-200">
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
  export default WhyUs