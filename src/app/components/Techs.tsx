'use client';
import Link from 'next/link'
import { motion } from 'framer-motion';

const Technologies = () => {
  const technologies = [
    {
      name: 'ERPNext',
      description: 'Open Source ERP Software',
      link: 'https://erpnext.com',
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="currentColor" d="M2.88 0A2.88 2.88 0 0 0 0 2.88v18.24A2.88 2.88 0 0 0 2.88 24h18.24A2.88 2.88 0 0 0 24 21.12V2.88A2.88 2.88 0 0 0 21.12 0Zm5.04 5.76h8.254v2.146H7.92Zm0 5.033h7.85v2.146h-5.233v2.954h5.703v2.146H7.92Z" /></svg>
    },
    {
      name: 'Frappe',
      description: 'Low Code Framework',
      link: 'https://frappeframework.com',
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="currentColor" d="M2.88 0A2.88 2.88 0 0 0 0 2.88v18.24A2.88 2.88 0 0 0 2.88 24h18.24A2.88 2.88 0 0 0 24 21.12V2.88A2.88 2.88 0 0 0 21.12 0zM8.4 6h8.024v2.111H8.4zm0 5.385h7.49v2.113h-4.93V18H8.4z" /></svg>
    },
    {
      name: 'FrappeCloud',
      description: 'Cloud Hosting Platform',
      link: 'https://frappecloud.com',
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="currentColor" d="m17 9l-.351.015A5.97 5.97 0 0 0 11 5c-3.309 0-6 2.691-6 6l.001.126A4.01 4.01 0 0 0 2 15c0 2.206 1.794 4 4 4h5v-4.586l-1.293 1.293a.997.997 0 0 1-1.414 0a1 1 0 0 1 0-1.414l2.999-2.999a1 1 0 0 1 1.416 0l2.999 2.999a.999.999 0 1 1-1.414 1.414L13 14.414V19h4c2.757 0 5-2.243 5-5s-2.243-5-5-5" /></svg>
    },
    {
      name: 'MariaDB',
      description: 'Open Source Database',
      link: 'https://mariadb.org',
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 128 128"><path fill="currentColor" d="M127.434 12.182a1.73 1.73 0 0 0-1.174-.392c-1.168 0-2.68.793-3.495 1.218l-.322.165a11.1 11.1 0 0 1-4.365 1.1c-1.554.049-2.892.14-4.635.322c-10.327 1.06-14.933 8.975-19.37 16.63c-2.416 4.164-4.91 8.489-8.33 11.793a22.5 22.5 0 0 1-2.252 1.913c-3.54 2.631-7.985 4.51-11.443 5.84c-3.329 1.273-6.964 2.417-10.474 3.524c-3.219 1.012-6.255 1.97-9.048 3.008a97 97 0 0 1-3.275 1.14c-2.545.825-4.378 1.458-7.06 3.304a45 45 0 0 0-2.804 2.066a29.6 29.6 0 0 0-5.597 5.894a34.8 34.8 0 0 1-4.701 5.642c-.566.554-1.57.826-3.074.826c-1.76 0-3.895-.363-6.154-.747c-2.33-.413-4.738-.805-6.803-.805c-1.677 0-2.962.273-3.92.826c0 0-1.617.942-2.298 2.16l.67.302a13.7 13.7 0 0 1 2.859 2.065a14.3 14.3 0 0 0 2.973 2.115a2.55 2.55 0 0 1 .918.582c-.281.413-.694.946-1.129 1.516c-2.384 3.119-3.774 5.09-2.977 6.163a2.5 2.5 0 0 0 1.239.28c5.196 0 7.989-1.35 11.52-3.06c1.024-.495 2.066-1.004 3.305-1.528c2.065-.896 4.288-2.325 6.647-3.838c3.084-2.01 6.31-4.076 9.442-5.072a25.7 25.7 0 0 1 7.943-1.115c3.305 0 6.783.441 10.138.872c2.499.322 5.089.652 7.63.805c.986.057 1.9.086 2.787.086a32 32 0 0 0 3.557-.185l.284-.1c1.781-1.094 2.617-3.444 3.425-5.717c.52-1.462.96-2.775 1.652-3.61a1 1 0 0 1 .132-.11a.166.166 0 0 1 .202.032v.066c-.412 8.885-3.99 14.527-7.608 19.543l-2.416 2.59s3.383 0 5.307-.744c7.024-2.099 12.324-6.725 16.181-14.103a60 60 0 0 0 2.549-5.82c.065-.165.673-.47.616.384c-.021.252-.038.533-.059.827c0 .173 0 .35-.033.528c-.1 1.24-.392 3.859-.392 3.859l2.169-1.162c5.229-3.304 9.26-9.97 12.318-20.343c1.272-4.321 2.205-8.613 3.027-12.392c.983-4.545 1.83-8.44 2.801-9.952c1.524-2.37 3.85-3.973 6.101-5.53c.306-.211.616-.414.917-.637c2.83-1.986 5.643-4.279 6.263-8.555v-.095c.45-3.189.07-4.002-.364-4.373zm-7.283 103.727h-10.327V97.92h9.315c3.56 0 6.952.67 6.902 4.66c0 2.813-1.747 3.59-3.589 3.886c2.615.224 4.188 1.892 4.188 4.586c.017 4.035-3.523 4.858-6.489 4.858zm-.772-10.14c3.565 0 4.362-1.372 4.362-3.115c0-2.619-1.595-3.214-4.362-3.214h-7.402v6.328zm.099 1.52h-7.501v7.1h7.823c2.194 0 4.511-.723 4.511-3.486c0-3.19-2.665-3.615-4.833-3.615zm-31.497-9.37h8.125c6.828 0 10.24 3.764 10.19 8.994c.05 5.436-3.716 8.997-9.591 8.997H87.98zm2.242 1.596v14.825h6.197c5.432 0 7.501-3.665 7.501-7.477c0-4.309-2.59-7.348-7.5-7.348zm-10.838 5.357v-2.095h3.404v13.132h-3.392v-2.114c-.896 1.52-2.739 2.391-4.982 2.391c-4.684 0-7.303-3.305-7.303-7.105c0-3.664 2.479-6.609 6.804-6.609c2.454.029 4.498.855 5.469 2.4m-8.675 4.387c0 2.416 1.52 4.485 4.462 4.485c2.841 0 4.386-2.02 4.386-4.411c0-2.392-1.599-4.436-4.544-4.436c-2.828 0-4.3 2.04-4.3 4.362zm-10.013-9.947a1.72 1.72 0 0 1 1.818-1.768a1.79 1.79 0 0 1 1.847 1.821a1.714 1.714 0 0 1-1.847 1.744a1.743 1.743 0 0 1-1.818-1.797m.15 3.465h3.39v9.596c0 .595.125 1.02.62 1.02a3.7 3.7 0 0 0 .648-.073l.525 2.478a5.9 5.9 0 0 1-2.242.414c-1.421 0-2.942-.414-2.942-3.64zM52.15 115.91h-3.386v-13.132h3.386v2.942a5.2 5.2 0 0 1 4.735-3.218a6.1 6.1 0 0 1 2.119.347l-.723 2.479a7.4 7.4 0 0 0-1.793-.249c-2.445 0-4.338 1.843-4.338 4.545zm-11.037-11.037v-2.095h3.392v13.132h-3.392v-2.114c-.896 1.52-2.738 2.391-4.982 2.391c-4.688 0-7.303-3.305-7.303-7.105c0-3.664 2.479-6.609 6.804-6.609c2.466.029 4.51.855 5.481 2.4m-8.675 4.387c0 2.416 1.52 4.485 4.462 4.485c2.838 0 4.383-2.02 4.383-4.411s-1.595-4.436-4.544-4.436c-2.826 0-4.296 2.04-4.296 4.362zm-9.24-11.34l4.651 17.99h-3.51l-3.099-12.96l-5.84 12.96h-2.965l-5.808-12.883l-3.19 12.883H0l4.61-17.99h3.04l6.28 13.93l6.253-13.93z" /></svg>

    },
    {
      name: 'AWS',
      description: 'Cloud Computing Services',
      link: 'https://aws.amazon.com',
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 32 32"><path fill="currentColor" d="M9.016 13.38c0 .396.047.714.12.948c.083.234.193.49.339.766a.45.45 0 0 1 .078.245q0 .162-.203.323l-.672.443a.5.5 0 0 1-.276.099q-.163-.001-.318-.151a3 3 0 0 1-.385-.5a7 7 0 0 1-.328-.625q-1.248 1.469-3.13 1.469c-.896 0-1.609-.255-2.13-.766c-.521-.516-.786-1.193-.786-2.047c0-.901.318-1.641.969-2.193s1.51-.828 2.609-.828c.359 0 .734.031 1.125.083c.396.052.802.141 1.224.234v-.776q0-1.21-.5-1.703c-.339-.328-.911-.49-1.734-.49c-.37 0-.755.042-1.151.135a9 9 0 0 0-1.146.365c-.125.057-.25.099-.375.141a1 1 0 0 1-.167.031q-.225.001-.224-.333v-.521c0-.167.021-.297.073-.37a.74.74 0 0 1 .297-.224a6 6 0 0 1 1.339-.479a6.4 6.4 0 0 1 1.661-.203c1.271 0 2.193.286 2.792.865c.583.573.88 1.443.88 2.615v3.448zM4.698 15q.524.001 1.094-.193a2.3 2.3 0 0 0 1.01-.677c.172-.203.302-.427.365-.682s.104-.568.104-.927v-.448a9 9 0 0 0-.979-.182a8 8 0 0 0-1-.063c-.714 0-1.234.141-1.583.427c-.354.286-.521.693-.521 1.224c0 .5.125.87.391 1.125q.384.398 1.12.396zm8.547 1.151c-.193 0-.323-.031-.406-.109c-.083-.063-.161-.214-.224-.411l-2.5-8.229a1.8 1.8 0 0 1-.094-.427c0-.172.083-.266.25-.266h1.047c.203 0 .339.031.411.104c.089.063.151.214.214.417l1.792 7.047l1.661-7.047c.052-.214.115-.354.198-.417a.72.72 0 0 1 .427-.104h.849c.203 0 .344.031.427.104c.083.063.161.214.203.417l1.682 7.13l1.839-7.13q.103-.322.214-.417a.7.7 0 0 1 .417-.104h.99c.172 0 .266.083.266.266c0 .052-.01.104-.021.172a2 2 0 0 1-.073.266l-2.568 8.224q-.093.322-.224.417a.64.64 0 0 1-.401.104h-.917c-.203 0-.339-.031-.427-.104c-.083-.073-.156-.214-.198-.427l-1.651-6.865l-1.641 6.854c-.052.214-.115.354-.203.427c-.083.073-.234.104-.427.104zm13.672.287c-.552 0-1.104-.068-1.635-.193s-.948-.266-1.224-.427c-.172-.094-.286-.198-.328-.297a.7.7 0 0 1-.068-.297v-.542c0-.224.089-.333.245-.333q.096 0 .193.031c.063.026.161.068.266.109q.547.243 1.172.37c.427.089.839.13 1.266.13c.672 0 1.193-.12 1.552-.354c.354-.214.568-.599.557-1.01a1.07 1.07 0 0 0-.286-.745c-.193-.198-.557-.38-1.078-.552l-1.542-.479c-.776-.245-1.354-.604-1.703-1.083a2.55 2.55 0 0 1-.536-1.547c0-.448.099-.839.292-1.182c.193-.339.448-.635.766-.87a3.3 3.3 0 0 1 1.104-.552c.427-.13.875-.182 1.344-.182c.234 0 .479.01.714.042c.245.031.469.073.693.12c.208.052.411.104.604.167s.344.13.448.193a.9.9 0 0 1 .318.266a.57.57 0 0 1 .099.354v.5c0 .224-.089.339-.245.339a1.1 1.1 0 0 1-.406-.125a4.8 4.8 0 0 0-2.042-.417c-.609 0-1.089.094-1.417.297c-.333.203-.5.51-.5.948c0 .297.104.552.318.755s.609.406 1.172.589l1.51.474c.766.245 1.323.589 1.651 1.026c.328.432.49.932.49 1.49c0 .453-.099.87-.276 1.234a3 3 0 0 1-.776.938c-.333.266-.724.453-1.182.594a5.2 5.2 0 0 1-1.526.224zm2.015 5.171c-3.505 2.589-8.589 3.958-12.964 3.958c-6.13 0-11.656-2.266-15.828-6.036c-.328-.297-.031-.703.365-.464c4.51 2.615 10.078 4.203 15.833 4.203c3.885 0 8.151-.813 12.083-2.469c.583-.271 1.083.38.51.807zm1.459-1.661c-.448-.573-2.964-.276-4.099-.135c-.339.042-.396-.26-.083-.484c2-1.401 5.286-1 5.672-.531c.38.484-.109 3.771-1.979 5.344c-.286.245-.568.12-.438-.203c.427-1.052 1.375-3.422.927-3.99z" /></svg>
    },
    {
      name: 'VueJS',
      description: 'Progressive JavaScript Framework',
      link: 'https://vuejs.org',
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 28 24"><path fill="currentColor" d="M22.313 0h5.688l-14 24l-14-24h11l3 5.563L17.501 0zM3.5 2L14 20L24.5 2h-3.375L14 14.375L6.875 2z" /></svg>
    },
    {
      name: 'ReactJS',
      description: 'JavaScript Library for UI',
      link: 'https://reactjs.org',
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><g fill="none"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8.013c-5.385 0-9.75 1.785-9.75 3.987s4.365 3.987 9.75 3.987s9.75-1.785 9.75-3.987S17.385 8.013 12 8.013" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.423 10.006c-2.692-4.704-6.407-7.625-8.298-6.524c-1.89 1.101-1.24 5.807 1.452 10.512c2.692 4.704 6.408 7.625 8.298 6.524s1.24-5.807-1.452-10.512" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.423 13.994c2.693-4.705 3.343-9.41 1.452-10.512c-1.89-1.1-5.606 1.82-8.298 6.524s-3.342 9.41-1.452 10.512c1.89 1.1 5.606-1.82 8.298-6.524" /><circle cx="12" cy="12" r="1.5" fill="currentColor" /></g></svg>
    },
    {
      name: 'NextJS',
      description: 'React Framework for Production',
      link: 'https://nextjs.org',
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 15V9l7.745 10.65A9 9 0 1 1 19 17.657M15 12V9" /></svg>
    },
    {
      name: 'FrappeUI',
      description: 'Design System for Frappe Framework',
      link: 'https://ui.frappe.io/',
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
        <path fill="currentColor" fillRule="evenodd" d="M14 8H8v6h6zM8 6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zm6 15H8v6h6zm-6-2a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2zm6 15H8v6h6zm-6-2a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2zM27 8h-6v6h6zm-6-2a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zm6 15h-6v6h6zm-6-2a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2zm6 15h-6v6h6zm-6-2a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2zM40 8h-6v6h6zm-6-2a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zm6 15h-6v6h6zm-6-2a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2zm6 15h-6v6h6zm-6-2a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2z" clipRule="evenodd" />
      </svg>
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  // Individual card animation variants
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <motion.section 
      className="py-16 bg-gradient-to-b from-gray-50 to-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Technology Stack
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Powered by cutting-edge technologies to deliver exceptional solutions
          </p>
        </motion.div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {technologies.map((tech) => (
              <motion.div
                key={tech.name}
                className="relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                variants={cardVariants}
                whileHover="hover"
              >
                <div>
                  <motion.h3 
                    className="text-xl font-semibold text-gray-900"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                  >
                    <Link href={tech.link} target="_blank" className="focus:outline-none">
                      <span className="absolute inset-0" aria-hidden="true" />
                      {tech.name}
                    </Link>
                  </motion.h3>
                  <motion.p 
                    className="mt-2 text-sm text-gray-500"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                  >
                    {tech.description}
                  </motion.p>
                </div>
                <motion.span
                  className="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400 transition-colors duration-300"
                  aria-hidden="true"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  {tech.icon}
                </motion.span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Technologies