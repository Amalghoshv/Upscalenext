import { FC } from 'react';

const Footer: FC = () => (
  <footer className="relative bg-gray-900 text-white py-12 overflow-hidden">
    {/* SVG Background */}
    <div 
      className="absolute inset-0 z-0 footer-background"
      style={{
        backgroundImage: 'url(/layered.svg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        opacity: 0.5 
      }}
    />
    
    {/* Content Container */}
    <div className="relative z-10 max-w-6xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 sm:grid-cols-2 text-center md:text-left">
        {/* Company Info */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold">UpScaleNext Innovations</h3>
          <p className="text-gray-400">
        Transforming businesses with next-gen ERPNext solutions
          </p>
          <img 
        src="./newLogo.png" 
        alt="UpScaleNext Logo"
        className="max-h-32 w-auto mx-auto md:mx-0"
          />
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
        {['Home', 'About', 'Projects', 'Why Us', 'Contact'].map((item) => (
          <li key={item}>
            <a 
          href={`#${item.toLowerCase().replace(' ', '-')}`} 
          className="text-gray-400 hover:text-white transition-colors duration-200"
            >
          {item}
            </a>
          </li>
        ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Services</h4>
          <ul className="space-y-2">
        {['ERPNext Development', 'Consulting', 'Implementation', 'Support'].map((item) => (
          <li key={item} className="text-gray-400 hover:text-gray-300 transition-colors duration-200">
            {item}
          </li>
        ))}
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Connect</h4>
          <div className="space-y-2 text-gray-400">
        <p className="hover:text-gray-300 transition-colors duration-200">
          Email: upscalenext@gmail.com
        </p>
        <p className="hover:text-gray-300 transition-colors duration-200">
          Phone: +91 7025732665
        </p>
        <p className="hover:text-gray-300 transition-colors duration-200">
          Phone: +91 8943248736
        </p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} UpScaleNext. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;