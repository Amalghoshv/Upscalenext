const Projects = () => (
    <section id="projects" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-black">Our Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-800">
          {[
            {
              title: 'Logistics Management',
              description: 'Managed logistics operations with custom ERPNext modules',
              tech: ['ERPNext', 'Custom Modules', 'API Integration']
            },
            {
              title: 'HR & Payroll System with Biometrics',
              description: 'Integrated HR and payroll system with biometric attendance',
              tech: ['ERPNext', 'HR', 'Payroll', 'Biometrics']
            },
            {
              title: 'Retail Management System',
              description: 'Developed a custom retail management system for a chain of stores',
              tech: ['ERPNext', 'Sales', 'Custom Reports']
            },
            {
                title: 'KSA ZATCA Integration - Phase 1 & 2',
                description: 'Integrated ERPNext with KSA ZATCA for VAT compliance',
                tech: ['ERPNext', 'Tax', 'Custom Reports']
              }
          ].map((project, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span key={i} className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
  export default Projects