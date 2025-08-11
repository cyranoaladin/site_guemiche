import React from 'react';
import { motion } from 'framer-motion';
import { 
  MagnifyingGlassIcon, 
  CalendarDaysIcon, 
  ChartBarIcon,
  ArrowRightIcon,
  SparklesIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

const HowItWorks = () => {
  const steps = [
    {
      icon: MagnifyingGlassIcon,
      title: "Diagnostiquer",
      subtitle: "Votre profil d'apprentissage",
      description: "Un quiz interactif de 5 minutes pour comprendre votre style d'apprentissage et identifier vos forces",
      features: ["Quiz personnalisé", "Analyse immédiate", "Conseils sur-mesure"],
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50",
      delay: 0
    },
    {
      icon: CalendarDaysIcon,
      title: "Réserver",
      subtitle: "Votre tuteur idéal",
      description: "Choisissez le tuteur parfait selon vos besoins et planifiez votre première session en quelques clics",
      features: ["Profils détaillés", "Vidéos de présentation", "Réservation instantanée"],
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-50 to-pink-50",
      delay: 0.2
    },
    {
      icon: ChartBarIcon,
      title: "Progresser",
      subtitle: "Vers l'excellence",
      description: "Suivez vos progrès en temps réel avec notre système de gamification motivant et nos outils de suivi",
      features: ["Tableau de bord XP", "Badges de réussite", "Suivi détaillé"],
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50",
      delay: 0.4
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="how-it-works" className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-primary-200/30 to-accent-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-coral-200/30 to-warm-200/30 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-100 to-accent-100 rounded-full px-6 py-3 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <SparklesIcon className="w-5 h-5 text-primary-600" />
            <span className="text-primary-800 font-semibold">Comment ça marche ?</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-display font-bold text-gray-900 mb-6">
            Trois étapes simples pour
            <span className="text-gradient block mt-2">transformer votre réussite</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Notre méthode éprouvée vous guide pas à pas vers l'excellence académique
          </p>
          
          <div className="section-divider mt-8"></div>
        </motion.div>

        {/* Steps */}
        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Connection Lines - Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 transform -translate-y-1/2">
            <div className="h-full bg-gradient-to-r from-blue-300 via-purple-300 to-green-300 rounded-full opacity-30"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                className="relative group"
                variants={itemVariants}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {/* Step Card */}
                <div className={`card-glow p-8 text-center relative z-10 bg-gradient-to-br ${step.bgColor} border-2 border-white/50 group-hover:border-white/80`}>
                  {/* Step Number */}
                  <motion.div
                    className="absolute -top-4 -right-4 w-10 h-10 bg-gradient-to-br from-gray-800 to-gray-600 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: step.delay + 0.3, duration: 0.5, type: "spring" }}
                  >
                    {index + 1}
                  </motion.div>

                  {/* Icon */}
                  <motion.div
                    className={`feature-icon mx-auto bg-gradient-to-br ${step.color} group-hover:shadow-glow-lg`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <step.icon className="w-8 h-8" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-2xl font-display font-bold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  
                  <h4 className="text-lg font-semibold text-gray-600 mb-4">
                    {step.subtitle}
                  </h4>
                  
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {step.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3">
                    {step.features.map((feature, featureIndex) => (
                      <motion.div
                        key={feature}
                        className="flex items-center justify-center space-x-2 text-sm text-gray-600"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: step.delay + 0.5 + featureIndex * 0.1 }}
                      >
                        <CheckCircleIcon className="w-4 h-4 text-green-500" />
                        <span>{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Hover effect overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-300`}></div>
                </div>

                {/* Arrow (Desktop) */}
                {index < steps.length - 1 && (
                  <motion.div
                    className="hidden lg:block absolute top-1/2 -right-6 transform -translate-y-1/2 z-20"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: step.delay + 0.6 }}
                  >
                    <div className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-gray-100 group-hover:border-primary-200 transition-colors">
                      <ArrowRightIcon className="w-6 h-6 text-gray-400 group-hover:text-primary-500 transition-colors" />
                    </div>
                  </motion.div>
                )}

                {/* Mobile connector */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center my-8">
                    <motion.div
                      className="w-1 h-12 bg-gradient-to-b from-gray-300 to-gray-200 rounded-full"
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: step.delay + 0.4, duration: 0.5 }}
                    />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <motion.button
            className="btn-primary text-xl px-12 py-5 group relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center space-x-3">
              <span>Commencer maintenant</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRightIcon className="w-6 h-6" />
              </motion.div>
            </span>
          </motion.button>
          
          <p className="text-gray-500 mt-4 text-sm">
            ✨ Diagnostic gratuit • Sans engagement • Résultats immédiats
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;