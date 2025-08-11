import React from 'react';
import { motion } from 'framer-motion';
import { AcademicCapIcon } from '@heroicons/react/24/outline';
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon 
} from '@heroicons/react/24/outline';

const Footer = () => {
  const footerLinks = {
    platform: [
      { name: 'Comment ça marche', href: '#' },
      { name: 'Nos tuteurs', href: '#' },
      { name: 'Tarifs', href: '#' },
      { name: 'Témoignages', href: '#' }
    ],
    support: [
      { name: 'Centre d\'aide', href: '#' },
      { name: 'Contact', href: '#' },
      { name: 'FAQ', href: '#' },
      { name: 'Blog', href: '#' }
    ],
    legal: [
      { name: 'Mentions légales', href: '#' },
      { name: 'Politique de confidentialité', href: '#' },
      { name: 'CGU', href: '#' },
      { name: 'Cookies', href: '#' }
    ]
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <motion.div 
              className="flex items-center space-x-2 mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center">
                <AcademicCapIcon className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-display font-bold">
                Next<span className="text-gradient">Gen</span>
              </span>
            </motion.div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              La plateforme de cours particuliers qui révèle le potentiel de chaque élève. 
              Rejoignez notre communauté de réussite.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <EnvelopeIcon className="w-5 h-5 text-accent-400" />
                <span className="text-gray-300">contact@nextgen-cours.fr</span>
              </div>
              <div className="flex items-center space-x-3">
                <PhoneIcon className="w-5 h-5 text-accent-400" />
                <span className="text-gray-300">01 23 45 67 89</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPinIcon className="w-5 h-5 text-accent-400" />
                <span className="text-gray-300">Paris, France</span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Plateforme</h3>
            <ul className="space-y-2">
              {footerLinks.platform.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-accent-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Support</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-accent-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Légal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-accent-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 NextGen. Tous droits réservés.
          </p>
          
          <div className="flex space-x-6 mt-4 md:mt-0">
            <motion.button
              className="text-gray-400 hover:text-accent-400 transition-colors"
              whileHover={{ scale: 1.1 }}
            >
              <span className="sr-only">Facebook</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M20 10C20 4.477 15.523 0 10 0S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" clipRule="evenodd" />
              </svg>
            </motion.button>
            
            <motion.button
              className="text-gray-400 hover:text-accent-400 transition-colors"
              whileHover={{ scale: 1.1 }}
            >
              <span className="sr-only">Instagram</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zm4.896 4.896a.896.896 0 01.896.896v8.416a.896.896 0 01-.896.896H5.104a.896.896 0 01-.896-.896V5.792a.896.896 0 01.896-.896h8.792z" clipRule="evenodd" />
              </svg>
            </motion.button>
            
            <motion.button
              className="text-gray-400 hover:text-accent-400 transition-colors"
              whileHover={{ scale: 1.1 }}
            >
              <span className="sr-only">LinkedIn</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;