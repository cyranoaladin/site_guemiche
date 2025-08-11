import React from 'react';
import { motion } from 'framer-motion';
import { 
  AcademicCapIcon,
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon,
  HeartIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';

const Footer = () => {
  const footerLinks = {
    platform: [
      { name: 'Comment ça marche', href: '#how-it-works' },
      { name: 'Nos tuteurs', href: '#tutors' },
      { name: 'Diagnostic gratuit', href: '#diagnostic' },
      { name: 'Témoignages', href: '#testimonials' }
    ],
    subjects: [
      { name: 'Mathématiques', href: '#math' },
      { name: 'Sciences Physiques', href: '#physics' },
      { name: 'Français', href: '#french' },
      { name: 'Langues', href: '#languages' }
    ],
    support: [
      { name: 'Centre d\'aide', href: '#help' },
      { name: 'Contact', href: '#contact' },
      { name: 'FAQ', href: '#faq' },
      { name: 'Blog', href: '#blog' }
    ],
    legal: [
      { name: 'Mentions légales', href: '#legal' },
      { name: 'Politique de confidentialité', href: '#privacy' },
      { name: 'CGU', href: '#terms' },
      { name: 'Cookies', href: '#cookies' }
    ]
  };

  const socialLinks = [
    { name: 'Facebook', href: '#', icon: '📘' },
    { name: 'Instagram', href: '#', icon: '📷' },
    { name: 'LinkedIn', href: '#', icon: '💼' },
    { name: 'YouTube', href: '#', icon: '📺' },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-56 h-56 bg-gradient-to-br from-coral-500/20 to-warm-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div 
              className="flex items-center space-x-3 mb-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 via-accent-500 to-coral-500 rounded-2xl flex items-center justify-center shadow-glow">
                  <AcademicCapIcon className="w-7 h-7 text-white" />
                </div>
                <motion.div
                  className="absolute -top-1 -right-1 w-4 h-4 bg-warm-400 rounded-full flex items-center justify-center"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <SparklesIcon className="w-2.5 h-2.5 text-white" />
                </motion.div>
              </div>
              <div>
                <span className="text-2xl font-display font-bold">
                  Objectif la <span className="text-gradient-warm">Mention</span> au Bac
                </span>
                <div className="text-xs text-gray-400 font-medium">Excellence & Bienveillance</div>
              </div>
            </motion.div>
            
            <motion.p
              className="text-gray-300 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Des méthodes claires, une motivation durable, des résultats tangibles. 
              Rejoignez notre communauté de réussite et transformez votre parcours scolaire.
            </motion.p>

            {/* Contact Info */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <motion.div 
                className="flex items-center space-x-3 group cursor-pointer"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
                  <EnvelopeIcon className="w-5 h-5 text-white" />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors">contact@objectif-mention-bac.fr</span>
              </motion.div>
              
              <motion.div 
                className="flex items-center space-x-3 group cursor-pointer"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-10 h-10 bg-gradient-to-br from-accent-500 to-coral-500 rounded-xl flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
                  <PhoneIcon className="w-5 h-5 text-white" />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors">01 23 45 67 89</span>
              </motion.div>
              
              <motion.div 
                className="flex items-center space-x-3 group cursor-pointer"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-10 h-10 bg-gradient-to-br from-coral-500 to-warm-500 rounded-xl flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
                  <MapPinIcon className="w-5 h-5 text-white" />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors">Paris, France</span>
              </motion.div>
            </motion.div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 + categoryIndex * 0.1, duration: 0.6 }}
            >
              <h3 className="font-display font-semibold text-lg mb-6 text-white capitalize">
                {category === 'platform' && 'Plateforme'}
                {category === 'subjects' && 'Matières'}
                {category === 'support' && 'Support'}
                {category === 'legal' && 'Légal'}
              </h3>
              <ul className="space-y-3">
                {links.map((link, linkIndex) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 + categoryIndex * 0.1 + linkIndex * 0.05 }}
                  >
                    <motion.a 
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-300 text-sm block py-1"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      {link.name}
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Section */}
        <motion.div
          className="mt-16 pt-12 border-t border-gray-700"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-display font-bold mb-4">
                Restez informé de nos actualités
              </h3>
              <p className="text-gray-300 mb-6">
                Recevez nos conseils d'étude, nos success stories et nos offres exclusives
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="flex-1 px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:border-primary-500 focus:ring-0 transition-colors"
              />
              <motion.button
                className="btn-primary whitespace-nowrap"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                S'abonner
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          className="mt-16 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <div className="flex items-center space-x-2 text-gray-400 text-sm mb-4 md:mb-0">
            <span>© 2024 Objectif la Mention au Bac. Tous droits réservés.</span>
            <span>Fait avec</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <HeartIcon className="w-4 h-4 text-coral-400" />
            </motion.div>
            <span>à Paris</span>
          </div>
          
          <div className="flex space-x-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.href}
                className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center text-xl hover:bg-white/20 transition-all duration-300 hover:scale-110"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.4 + index * 0.1, type: "spring" }}
                whileHover={{ y: -2 }}
                title={social.name}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;