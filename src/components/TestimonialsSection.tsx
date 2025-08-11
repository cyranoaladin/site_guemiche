import React from 'react';
import { motion } from 'framer-motion';
import { 
  StarIcon,
  HeartIcon,
  TrophyIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';
import { StarIcon as StarSolidIcon } from '@heroicons/react/24/solid';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Emma, 17 ans",
      role: "Élève en Terminale S",
      image: "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=200",
      content: "Grâce à Marie, j'ai enfin compris les maths ! Elle explique de façon si claire que tout devient évident. Mon stress a complètement disparu et j'ai gagné 4 points de moyenne.",
      rating: 5,
      subject: "Mathématiques",
      improvement: "+4 points",
      badge: "Mention Très Bien",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      name: "Mme Rousseau",
      role: "Maman de Lucas, 16 ans",
      image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=200",
      content: "Lucas a retrouvé confiance en lui. Thomas a su s'adapter à ses difficultés et maintenant il adore les sciences. Un vrai miracle ! Nous recommandons à 100%.",
      rating: 5,
      subject: "Physique-Chimie",
      improvement: "Confiance retrouvée",
      badge: "Progrès spectaculaire",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      name: "Julien, 18 ans",
      role: "Élève en Terminale L",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=200",
      content: "Sophie m'a aidé à structurer mes idées pour le français. Mes notes ont progressé de 8 à 15 de moyenne. Maintenant j'adore écrire et je vise une prépa littéraire !",
      rating: 5,
      subject: "Français",
      improvement: "+7 points",
      badge: "Objectif prépa",
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 4,
      name: "Sarah, 16 ans",
      role: "Élève en Première",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=200",
      content: "Alexandre m'a donné le goût des maths. Ses méthodes sont géniales et il rend tout simple. Je pense maintenant faire une école d'ingénieur !",
      rating: 5,
      subject: "Mathématiques",
      improvement: "Nouvelle passion",
      badge: "Projet d'ingénieur",
      color: "from-orange-500 to-red-500"
    },
    {
      id: 5,
      name: "M. Dubois",
      role: "Papa de Chloé, 15 ans",
      image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=200",
      content: "Emma a transformé le rapport de Chloé à l'anglais. Elle parle maintenant couramment et envisage des études internationales. Merci pour ce déclic !",
      rating: 5,
      subject: "Anglais",
      improvement: "Niveau bilingue",
      badge: "Études internationales",
      color: "from-teal-500 to-blue-500"
    },
    {
      id: 6,
      name: "Antoine, 17 ans",
      role: "Élève en Terminale ES",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200",
      content: "David m'a fait aimer l'histoire ! Ses cours sont passionnants et j'ai enfin compris comment bien disserter. Je vise Sciences Po maintenant !",
      rating: 5,
      subject: "Histoire",
      improvement: "Passion découverte",
      badge: "Objectif Sciences Po",
      color: "from-indigo-500 to-purple-500"
    }
  ];

  const stats = [
    { number: "95%", label: "de satisfaction", icon: "⭐" },
    { number: "+3.2", label: "points de moyenne", icon: "📈" },
    { number: "500+", label: "élèves accompagnés", icon: "🎓" },
    { number: "98%", label: "objectif mention", icon: "🏆" }
  ];

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-br from-primary-50 via-white to-accent-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-br from-primary-200/30 to-accent-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-56 h-56 bg-gradient-to-br from-coral-200/30 to-warm-200/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full blur-3xl"></div>
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
            <HeartIcon className="w-5 h-5 text-primary-600" />
            <span className="text-primary-800 font-semibold">Témoignages</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-display font-bold text-gray-900 mb-6">
            Ils ont retrouvé le
            <span className="text-gradient block mt-2">sourire</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Découvrez comment nos tuteurs transforment la vie de nos élèves et redonnent confiance aux familles
          </p>
          
          <div className="section-divider mt-8"></div>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="testimonial-card group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              {/* Badge */}
              <motion.div
                className={`absolute -top-3 -right-3 px-4 py-2 bg-gradient-to-r ${testimonial.color} text-white rounded-full text-xs font-bold shadow-lg`}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.3, type: "spring" }}
              >
                {testimonial.badge}
              </motion.div>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.4 + i * 0.05, type: "spring" }}
                  >
                    <StarSolidIcon className="w-5 h-5 text-warm-400" />
                  </motion.div>
                ))}
                <motion.div
                  className="ml-2 px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.6 }}
                >
                  {testimonial.improvement}
                </motion.div>
              </div>

              {/* Content */}
              <blockquote className="text-gray-700 mb-8 leading-relaxed text-sm">
                "{testimonial.content}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <motion.img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-2xl object-cover shadow-lg"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="flex-1">
                  <div className="font-semibold text-gray-900 text-sm">
                    {testimonial.name}
                  </div>
                  <div className="text-xs text-gray-600 mb-1">
                    {testimonial.role}
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={`inline-block w-3 h-3 rounded-full bg-gradient-to-r ${testimonial.color}`}></span>
                    <span className="text-xs font-medium text-gray-700">{testimonial.subject}</span>
                  </div>
                </div>
              </div>

              {/* Hover effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-300`}></div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center group"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9 + index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="text-4xl mb-3"
                animate={{ 
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  delay: index * 0.5 
                }}
              >
                {stat.icon}
              </motion.div>
              <div className="stats-number group-hover:scale-110 transition-transform duration-300">
                {stat.number}
              </div>
              <div className="text-sm text-gray-600 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="cta-section text-center relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
        >
          <div className="relative z-10">
            <motion.div
              className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <TrophyIcon className="w-5 h-5 text-warm-300" />
              <span className="text-white font-semibold">Rejoignez nos success stories</span>
            </motion.div>

            <h3 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Prêt(e) à écrire votre propre success story ?
            </h3>
            
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Rejoignez les centaines d'élèves qui ont transformé leurs résultats et retrouvé confiance en eux
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="bg-white text-primary-700 font-semibold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center space-x-2">
                  <span>Commencer mon diagnostic gratuit</span>
                  <SparklesIcon className="w-5 h-5" />
                </span>
              </motion.button>
              
              <motion.button
                className="bg-white/20 backdrop-blur-sm text-white font-semibold px-8 py-4 rounded-2xl border-2 border-white/30 hover:bg-white/30 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Découvrir nos tuteurs
              </motion.button>
            </div>

            <p className="text-white/70 mt-6 text-sm">
              ✨ Diagnostic gratuit • Sans engagement • Résultats garantis
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;