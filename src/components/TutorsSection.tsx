import React from 'react';
import { motion } from 'framer-motion';
import TutorCard from './TutorCard';

const TutorsSection = () => {
  const tutors = [
    {
      id: 1,
      name: "Marie Dubois",
      title: "Professeure de Mathématiques",
      image: "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=400",
      quote: "Mon but est de rendre les maths intuitives et amusantes",
      subjects: ["Mathématiques", "Physique", "Statistiques"],
      experience: "8 ans d'expérience",
      rating: 5,
      price: 35,
      badges: ["Gestion du stress", "Préparation Bac"],
      available: true
    },
    {
      id: 2,
      name: "Thomas Martin",
      title: "Expert en Sciences",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400",
      quote: "La science devient passionnante quand on comprend le 'pourquoi'",
      subjects: ["Physique-Chimie", "SVT", "Mathématiques"],
      experience: "6 ans d'expérience",
      rating: 5,
      price: 32,
      badges: ["Spécialiste 'dys'", "Méthodes visuelles"],
      available: true
    },
    {
      id: 3,
      name: "Sophie Laurent",
      title: "Professeure de Français",
      image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400",
      quote: "Chaque élève a une histoire à raconter, je l'aide à la structurer",
      subjects: ["Français", "Littérature", "Philosophie"],
      experience: "10 ans d'expérience",
      rating: 5,
      price: 30,
      badges: ["Préparation orale", "Confiance en soi"],
      available: false
    }
  ];

  return (
    <section id="tutors" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            Découvrez nos tuteurs
            <span className="text-gradient"> stars</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Des experts passionnés qui transforment l'apprentissage en aventure
          </p>
          
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3">
            {['Tous', 'Mathématiques', 'Sciences', 'Français', 'Langues'].map((filter) => (
              <motion.button
                key={filter}
                className={`px-4 py-2 rounded-full font-medium transition-all ${
                  filter === 'Tous' 
                    ? 'bg-primary-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {filter}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Tutors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tutors.map((tutor, index) => (
            <motion.div
              key={tutor.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <TutorCard tutor={tutor} />
            </motion.div>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            className="btn-secondary text-lg px-8 py-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Voir tous nos tuteurs
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default TutorsSection;