import React from 'react';
import { motion } from 'framer-motion';
import { 
  SparklesIcon, 
  PlayIcon, 
  StarIcon,
  TrophyIcon,
  HeartIcon,
  LightBulbIcon
} from '@heroicons/react/24/outline';
import { 
  StarIcon as StarSolidIcon,
  TrophyIcon as TrophySolidIcon 
} from '@heroicons/react/24/solid';

const Hero = () => {
  const floatingElements = [
    { icon: StarSolidIcon, color: 'text-warm-400', size: 'w-6 h-6', delay: 0 },
    { icon: TrophySolidIcon, color: 'text-primary-400', size: 'w-8 h-8', delay: 1 },
    { icon: HeartIcon, color: 'text-coral-400', size: 'w-5 h-5', delay: 2 },
    { icon: LightBulbIcon, color: 'text-accent-400', size: 'w-7 h-7', delay: 3 },
  ];

  const stats = [
    { number: '500+', label: 'élèves accompagnés', icon: '🎓' },
    { number: '95%', label: 'de satisfaction', icon: '⭐' },
    { number: '+3', label: 'points de moyenne', icon: '📈' },
    { number: '98%', label: 'objectif mention', icon: '🏆' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background animé */}
      <div className="absolute inset-0 hero-bg"></div>
      
      {/* Particules flottantes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingElements.map((element, index) => (
          <motion.div
            key={index}
            className={`absolute ${element.color} ${element.size} floating-element`}
            style={{
              left: `${20 + index * 20}%`,
              top: `${30 + index * 15}%`,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.6, scale: 1 }}
            transition={{ delay: element.delay, duration: 0.8 }}
          >
            <element.icon />
          </motion.div>
        ))}
      </div>

      {/* Mesh gradient overlay */}
      <div className="absolute inset-0 bg-mesh-gradient opacity-30"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contenu principal */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/30"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
            >
              <SparklesIcon className="w-5 h-5 text-warm-400" />
              <span className="text-gray-700 font-semibold">Objectif la Mention au Bac</span>
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="w-4 h-4 text-warm-400 fill-current" />
                ))}
              </div>
            </motion.div>

            {/* Titre principal */}
            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-display font-black leading-tight mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <span className="text-gray-900">Plus que des</span>
              <br />
              <span className="text-gradient-warm">cours</span>
              <span className="text-gray-900">, un</span>
              <br />
              <motion.span 
                className="text-gradient inline-block"
                animate={{ 
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
              >
                déclic
              </motion.span>
              <motion.span
                className="inline-block ml-4"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              >
                ✨
              </motion.span>
            </motion.h1>

            {/* Sous-titre */}
            <motion.p
              className="text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Des méthodes claires, une motivation durable, des résultats tangibles. 
              Nous accompagnons votre réussite avec <span className="font-semibold text-primary-600">exigence</span> et <span className="font-semibold text-accent-600">bienveillance</span>.
            </motion.p>

            {/* Boutons CTA */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <motion.button
                className="btn-primary group relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center justify-center space-x-2">
                  <span>Démarrer mon diagnostic gratuit</span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.div>
                </span>
              </motion.button>
              
              <motion.button
                className="btn-secondary group flex items-center justify-center space-x-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <PlayIcon className="w-5 h-5 text-white ml-1" />
                </div>
                <span>Voir comment ça marche</span>
              </motion.button>
            </motion.div>

            {/* Statistiques */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center group"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + index * 0.1, duration: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="stats-number group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image hero */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="relative">
              {/* Image principale */}
              <motion.div
                className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              >
                <img
                  src="https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Élève confiant révisant - Objectif la Mention au Bac"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              </motion.div>

              {/* Éléments flottants autour de l'image */}
              <motion.div
                className="absolute -top-6 -right-6 glass-strong rounded-2xl p-4 shadow-glow"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                whileHover={{ scale: 1.1 }}
              >
                <div className="flex items-center space-x-2">
                  <TrophyIcon className="w-6 h-6 text-warm-500" />
                  <div>
                    <div className="text-sm font-bold text-gray-900">Mention Très Bien</div>
                    <div className="text-xs text-gray-600">Objectif atteint !</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-6 -left-6 glass-strong rounded-2xl p-4 shadow-glow"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.4, duration: 0.6 }}
                whileHover={{ scale: 1.1 }}
              >
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-accent-400 to-primary-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">+3</span>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-900">Points gagnés</div>
                    <div className="text-xs text-gray-600">En moyenne</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute top-1/2 -right-8 glass-strong rounded-full p-3 shadow-glow"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.6, duration: 0.6 }}
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <HeartIcon className="w-6 h-6 text-coral-500" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center cursor-pointer hover:border-primary-500 transition-colors"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <motion.div
            className="w-1 h-3 bg-gradient-to-b from-primary-500 to-accent-500 rounded-full mt-2"
            animate={{ scaleY: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;