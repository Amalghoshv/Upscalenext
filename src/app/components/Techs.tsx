
import Link from 'next/link'

const Technologies = () => {
  const technologies = [
    {
      name: 'ERPNext',
      description: 'Open Source ERP Software',
      link: 'https://erpnext.com'
    },
    {
      name: 'Frappe',
      description: 'Low Code Framework',
      link: 'https://frappeframework.com'
    },
    {
      name: 'FrappeCloud',
      description: 'Cloud Hosting Platform',
      link: 'https://frappecloud.com'
    },
    {
      name: 'MariaDB',
      description: 'Open Source Database',
      link: 'https://mariadb.org'
    },
    {
      name: 'AWS',
      description: 'Cloud Computing Services',
      link: 'https://aws.amazon.com'
    },
    {
      name: 'VueJS',
      description: 'Progressive JavaScript Framework',
      link: 'https://vuejs.org'
    },
    {
      name: 'ReactJS',
      description: 'JavaScript Library for UI',
      link: 'https://reactjs.org'
    },
    {
      name: 'NextJS',
      description: 'React Framework for Production',
      link: 'https://nextjs.org'
    },
    {
      name: 'TailwindCSS',
      description: 'Utility-First CSS Framework',
      link: 'https://tailwindcss.com'
    }
  ]

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Technology Stack
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Powered by cutting-edge technologies to deliver exceptional solutions
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {technologies.map((tech) => (
              <div
                key={tech.name}
                className="relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    <Link href={tech.link} target="_blank" className="focus:outline-none">
                      <span className="absolute inset-0" aria-hidden="true" />
                      {tech.name}
                    </Link>
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    {tech.description}
                  </p>
                </div>
                <span
                  className="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400 transition-colors duration-300"
                  aria-hidden="true"
                >
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
                  </svg>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Technologies