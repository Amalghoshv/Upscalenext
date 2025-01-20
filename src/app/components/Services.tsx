import React from 'react';
import { Settings, Code2, Server, Globe } from 'lucide-react';
import ServiceCard from './ServiceCard';
import { Service } from '../types';

const servicesData: Service[] = [
  {
    id: 'erp-consultation',
    title: "ERPNext Consultation",
    icon: Settings,
    description: "Expert guidance for implementing and optimizing ERPNext for your business needs.",
    features: [
      { id: 'cons-1', text: "Business process analysis and mapping" },
      { id: 'cons-2', text: "System architecture planning" },
      { id: 'cons-3', text: "Implementation strategy development" },
      { id: 'cons-4', text: "Performance optimization recommendations" }
    ]
  },
  {
    id: 'custom-dev',
    title: "Custom App Development",
    icon: Code2,
    description: "Tailored ERPNext applications and extensions to meet your specific requirements.",
    features: [
      { id: 'dev-1', text: "Custom module development" },
      { id: 'dev-2', text: "API integration services" },
      { id: 'dev-3', text: "Workflow automation" },
      { id: 'dev-4', text: "Custom report development" }
    ]
  },
  {
    id: 'installation',
    title: "Installation & Configuration",
    icon: Server,
    description: "Professional ERPNext setup and configuration services for optimal performance.",
    features: [
      { id: 'inst-1', text: "Server setup and optimization" },
      { id: 'inst-2', text: "Database configuration" },
      { id: 'inst-3', text: "Security implementation" },
      { id: 'inst-4', text: "Performance tuning" }
    ]
  },
  {
    id: 'web-dev',
    title: "Web Development Integration",
    icon: Globe,
    description: "Seamless integration of web applications with your ERPNext system.",
    features: [
      { id: 'web-1', text: "E-commerce integration" },
      { id: 'web-2', text: "Website customization" },
      { id: 'web-3', text: "Payment gateway setup" },
      { id: 'web-4', text: "API development and integration" }
    ]
  }
];

const Services: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive ERPNext solutions to help your business grow and succeed
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicesData.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
