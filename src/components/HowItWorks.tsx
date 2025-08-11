import React from 'react';
import { motion } from 'framer-motion';
import { 
  MagnifyingGlassIcon, 
  CalendarDaysIcon, 
  ChartBarIcon,
  ArrowRightIcon 
} from '@heroicons/react/24/outline';

const HowItWorks = () => {
  const steps = [
    {
      icon: MagnifyingGlassIcon,
      title: "Diagnostiquer",
      description: "Un quiz interactif de 5 minutes pour comprendre le profil d'apprentissage de votre enfant",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: CalendarDaysIcon,
      title: "Réserver",
      description: "Choisissez le tuteur parfait et planifiez votre première session en quelques clics",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: ChartBarIcon,
      title: "Progresser",
      description: "Suivez les progrès en temps réel avec notre système de gamification motivant",
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            Comment ça marche ?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trois étapes simples pour transformer l'expérience d'apprentissage de votre enfant
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Lines */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-purple-200 to-green-200 transform -translate-y-1/2"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative"
              >
                {/* Step Card */}
                <div className="card p-8 text-center relative z-10 hover:scale-105 transition-transform duration-300">
                  {/* Icon */}
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Step Number */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-white border-4 border-gray-100 rounded-full flex items-center justify-center font-bold text-gray-600 shadow-lg">
                    {index + 1}
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow (Desktop) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-6 transform -translate-y-1/2 z-20">
                    <div className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center">
                      <ArrowRightIcon className="w-6 h-6 text-gray-400" />
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            className="btn-primary text-lg px-8 py-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Commencer maintenant
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;