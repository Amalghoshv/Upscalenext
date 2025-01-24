import { FC } from 'react';

interface Project {
  title: string;
  description: string;
  tech: string[];
  bg: string;
}

const Projects: FC = () => {
  const projects: Project[] = [
    {
      title: 'Logistics Management',
      description: 'Managed logistics operations with custom ERPNext modules',
      tech: ['ERPNext', 'Custom Modules', 'API Integration'],
      bg:'./logistics.svg'
    },
    {
      title: 'HR & Payroll System with Biometrics',
      description: 'Integrated HR and payroll system with biometric attendance',
      tech: ['ERPNext', 'HR', 'Payroll', 'Biometrics'],
      bg:'./fingerprint.svg'
    },
    {
      title: 'Retail Management System',
      description: 'Developed a custom retail management system for a chain of stores',
      tech: ['ERPNext', 'Sales', 'Custom Reports'],
      bg:'./retail.svg'
    },
    {
      title: 'KSA ZATCA Integration - Phase 1 & 2',
      description: 'Integrated ERPNext with KSA ZATCA for VAT compliance',
      tech: ['ERPNext', 'Tax', 'Custom Reports'],
      bg:'./integration.svg'
    },
    {
      title: 'Customized Themes - ERPNext',
      description: 'Developed custom themes for ERPNext for a better user experience',
      tech: ['ERPNext', 'Theme', 'Customization'],
      bg:'./themes.svg'
    },
    {
      title: 'Property Management System',
      description: 'Developed a custom property management system for a real estate company',
      tech: ['ERPNext', 'Dashboard', 'Customization'],
      bg:'./property.svg'
    }
  ];

  return (
    <section id="projects" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-black">
          Our Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-800">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white p-6 rounded-lg shadow-md flex flex-col h-full overflow-hidden"
            >
              {/* Bottom animated border */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-transparent overflow-hidden">
                <div className="w-full h-full bg-blue-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out" />
              </div>
              
              {/* Right animated border */}
              <div className="absolute top-0 right-0 h-full w-1 bg-transparent overflow-hidden">
                <div className="w-full h-full bg-blue-600 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
              </div>
              
              {/* Content Container */}
              <div className="relative flex flex-col flex-grow">
                {/* Background Image with Responsive Styling */}
                <div 
                  className="absolute inset-0 bg-no-repeat 
                             md:bg-right-bottom 
                             md:bg-[length:47%]
                             max-md:bg-contain max-md:bg-bottom-right
                             opacity-50 group-hover:opacity-100 
                             transition-opacity duration-300 ease-in-out 
                             mix-blend-multiply" 
                  style={{
                    backgroundImage: `url(${project.bg})`,
                    backgroundPositionX: 'calc(100% - 20px)', // Adjust horizontal position for larger screens
                    backgroundPositionY: 'calc(100% - 20px)'  // Adjust vertical position for larger screens
                  }} 
                />
                
                {/* Content with Full Opacity */}
                <div className="relative z-10 h-full flex flex-col">
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4 flex-grow">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;