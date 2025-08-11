import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FunnelIcon, 
  MagnifyingGlassIcon,
  SparklesIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';
import TutorCard from './TutorCard';

const TutorsSection = () => {
  const [selectedFilter, setSelectedFilter] = useState('Tous');
  const [searchTerm, setSearchTerm] = useState('');

  const filters = ['Tous', 'Mathématiques', 'Sciences', 'Français', 'Langues', 'Histoire'];

  const tutors = [
    {
      id: 1,
      name: "Marie Dubois",
      title: "Professeure agrégée de Mathématiques • Spécialiste Terminale",
      image: "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=400",
      quote: "Mon objectif : transformer l'anxiété des maths en passion pour la logique et la beauté des démonstrations.",
      subjects: ["Mathématiques", "Physique", "Statistiques", "Algorithmique"],
      experience: "8 ans d'expérience",
      rating: 5,
      price: 35,
      badges: ["Gestion du stress", "Préparation Bac", "Méthodes visuelles"],
      available: true,
      studentsCount: 127,
      responseTime: "< 2h"
    },
    {
      id: 2,
      name: "Thomas Martin",
      title: "Docteur en Physique • Expert Sciences Expérimentales",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400",
      quote: "La science devient passionnante quand on comprend le 'pourquoi' derrière chaque phénomène.",
      subjects: ["Physique-Chimie", "SVT", "Mathématiques", "Sciences de l'Ingénieur"],
      experience: "6 ans d'expérience",
      rating: 5,
      price: 32,
      badges: ["Spécialiste 'dys'", "Expériences pratiques", "Prépa concours"],
      available: true,
      studentsCount: 89,
      responseTime: "< 1h"
    },
    {
      id: 3,
      name: "Sophie Laurent",
      title: "Professeure certifiée de Lettres • Experte Expression",
      image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400",
      quote: "Chaque élève a une histoire unique à raconter. Mon rôle est de l'aider à la structurer avec élégance.",
      subjects: ["Français", "Littérature", "Philosophie", "Latin"],
      experience: "10 ans d'expérience",
      rating: 5,
      price: 30,
      badges: ["Préparation orale", "Confiance en soi", "Méthode dissertation"],
      available: false,
      studentsCount: 156,
      responseTime: "< 3h"
    },
    {
      id: 4,
      name: "Alexandre Chen",
      title: "Ingénieur Polytechnique • Spécialiste Maths Sup/Spé",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
      quote: "Les mathématiques sont un langage universel. Une fois maîtrisé, il ouvre toutes les portes.",
      subjects: ["Mathématiques", "Physique", "Sciences de l'Ingénieur", "Informatique"],
      experience: "5 ans d'expérience",
      rating: 5,
      price: 40,
      badges: ["Prépa Grandes Écoles", "Méthodes efficaces", "Résolution de problèmes"],
      available: true,
      studentsCount: 73,
      responseTime: "< 30min"
    },
    {
      id: 5,
      name: "Emma Rodriguez",
      title: "Professeure bilingue • Experte Langues Vivantes",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400",
      quote: "Apprendre une langue, c'est découvrir une nouvelle façon de voir le monde.",
      subjects: ["Anglais", "Espagnol", "Italien", "Français langue étrangère"],
      experience: "7 ans d'expérience",
      rating: 5,
      price: 28,
      badges: ["Conversation native", "Préparation TOEFL", "Culture internationale"],
      available: true,
      studentsCount: 94,
      responseTime: "< 1h"
    },
    {
      id: 6,
      name: "David Moreau",
      title: "Docteur en Histoire • Passionné de Géopolitique",
      image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400",
      quote: "L'histoire n'est pas une succession de dates, mais une aventure humaine passionnante.",
      subjects: ["Histoire", "Géographie", "Géopolitique", "SES"],
      experience: "9 ans d'expérience",
      rating: 5,
      price: 33,
      badges: ["Analyse critique", "Méthodes de dissertation", "Actualité"],
      available: true,
      studentsCount: 112,
      responseTime: "< 2h"
    }
  ];

  const filteredTutors = tutors.filter(tutor => {
    const matchesFilter = selectedFilter === 'Tous' || tutor.subjects.some(subject => 
      subject.toLowerCase().includes(selectedFilter.toLowerCase())
    );
    const matchesSearch = tutor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tutor.subjects.some(subject => 
                           subject.toLowerCase().includes(searchTerm.toLowerCase())
                         );
    return matchesFilter && matchesSearch;
  });

  return (
    <section id="tutors" className="py-24 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 right-20 w-64 h-64 bg-gradient-to-br from-primary-100/50 to-accent-100/50 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-20 w-48 h-48 bg-gradient-to-br from-coral-100/50 to-warm-100/50 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-100 to-accent-100 rounded-full px-6 py-3 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <UserGroupIcon className="w-5 h-5 text-primary-600" />
            <span className="text-primary-800 font-semibold">Nos Tuteurs Stars</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-display font-bold text-gray-900 mb-6">
            Découvrez nos tuteurs
            <span className="text-gradient block mt-2">d'exception</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            Des experts passionnés, sélectionnés pour leur pédagogie et leur capacité à transformer l'apprentissage en aventure
          </p>
          
          <div className="section-divider"></div>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {/* Search Bar */}
          <div className="max-w-md mx-auto mb-8">
            <div className="relative">
              <MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Rechercher un tuteur ou une matière..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white border-2 border-gray-200 rounded-2xl focus:border-primary-500 focus:ring-0 transition-colors text-gray-700 placeholder-gray-400"
              />
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3">
            <div className="flex items-center space-x-2 text-gray-600 mr-4">
              <FunnelIcon className="w-5 h-5" />
              <span className="font-medium">Filtrer par :</span>
            </div>
            {filters.map((filter) => (
              <motion.button
                key={filter}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  filter === selectedFilter 
                    ? 'bg-gradient-to-r from-primary-600 to-accent-600 text-white shadow-glow' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
                }`}
                onClick={() => setSelectedFilter(filter)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + filters.indexOf(filter) * 0.05 }}
              >
                {filter}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Results count */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-gray-600">
            <span className="font-semibold text-primary-600">{filteredTutors.length}</span> tuteur{filteredTutors.length > 1 ? 's' : ''} 
            {selectedFilter !== 'Tous' && ` en ${selectedFilter}`}
            {searchTerm && ` pour "${searchTerm}"`}
          </p>
        </motion.div>

        {/* Tutors Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          {filteredTutors.map((tutor, index) => (
            <TutorCard key={tutor.id} tutor={tutor} index={index} />
          ))}
        </motion.div>

        {/* No results */}
        {filteredTutors.length === 0 && (
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <MagnifyingGlassIcon className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Aucun tuteur trouvé</h3>
            <p className="text-gray-500 mb-6">Essayez de modifier vos critères de recherche</p>
            <button
              className="btn-secondary"
              onClick={() => {
                setSelectedFilter('Tous');
                setSearchTerm('');
              }}
            >
              Réinitialiser les filtres
            </button>
          </motion.div>
        )}

        {/* View All CTA */}
        {filteredTutors.length > 0 && (
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <motion.button
              className="btn-secondary text-lg px-8 py-4 group relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center space-x-2">
                <span>Voir tous nos tuteurs</span>
                <SparklesIcon className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              </span>
            </motion.button>
            
            <p className="text-gray-500 mt-4 text-sm">
              Plus de 50 tuteurs experts vous attendent • Tous niveaux • Toutes matières
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default TutorsSection;