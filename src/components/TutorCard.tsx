import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  StarIcon, 
  PlayIcon,
  HeartIcon,
  ClockIcon,
  AcademicCapIcon,
  CheckBadgeIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline';
import { StarIcon as StarSolidIcon } from '@heroicons/react/24/solid';

interface TutorCardProps {
  tutor: {
    id: number;
    name: string;
    title: string;
    image: string;
    quote: string;
    subjects: string[];
    experience: string;
    rating: number;
    price: number;
    badges: string[];
    available: boolean;
    studentsCount: number;
    responseTime: string;
  };
  index: number;
}

const TutorCard: React.FC<TutorCardProps> = ({ tutor, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  return (
    <motion.div
      className="tutor-card relative group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -8 }}
    >
      {/* Availability indicator */}
      <motion.div
        className={`absolute -top-2 -right-2 z-20 px-3 py-1 rounded-full text-xs font-semibold ${
          tutor.available 
            ? 'bg-green-500 text-white shadow-glow' 
            : 'bg-gray-400 text-white'
        }`}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: index * 0.1 + 0.3, type: "spring" }}
      >
        {tutor.available ? '🟢 Disponible' : '🔴 Occupé'}
      </motion.div>

      {/* Header */}
      <div className="flex items-start space-x-4 mb-6">
        <div className="relative">
          <motion.img
            src={tutor.image}
            alt={tutor.name}
            className="tutor-avatar"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          />
          
          {/* Video play button overlay */}
          <motion.button
            className="absolute inset-0 bg-black/50 rounded-2xl flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300"
            onClick={() => setShowVideo(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <PlayIcon className="w-8 h-8 text-white" />
          </motion.button>
        </div>
        
        <div className="flex-1 min-w-0">
          <h3 className="text-xl font-display font-bold text-gray-900 mb-1 truncate">
            {tutor.name}
          </h3>
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">{tutor.title}</p>
          
          {/* Rating */}
          <div className="flex items-center space-x-2 mb-2">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.4 + i * 0.05 }}
                >
                  {i < tutor.rating ? (
                    <StarSolidIcon className="w-4 h-4 text-warm-400" />
                  ) : (
                    <StarIcon className="w-4 h-4 text-gray-300" />
                  )}
                </motion.div>
              ))}
            </div>
            <span className="text-sm text-gray-600 font-medium">({tutor.rating}.0)</span>
          </div>

          {/* Quick stats */}
          <div className="flex items-center space-x-4 text-xs text-gray-500">
            <div className="flex items-center space-x-1">
              <AcademicCapIcon className="w-3 h-3" />
              <span>{tutor.studentsCount} élèves</span>
            </div>
            <div className="flex items-center space-x-1">
              <ClockIcon className="w-3 h-3" />
              <span>{tutor.responseTime}</span>
            </div>
          </div>
        </div>

        {/* Heart/Favorite button */}
        <motion.button
          className="p-2 rounded-full hover:bg-gray-100 transition-colors group"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <HeartIcon className="w-5 h-5 text-gray-400 group-hover:text-coral-500 transition-colors" />
        </motion.button>
      </div>

      {/* Quote */}
      <motion.div
        className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-4 mb-6 relative overflow-hidden"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        <div className="absolute top-2 left-2 text-3xl text-primary-200 font-serif">"</div>
        <p className="text-gray-700 italic text-sm leading-relaxed pl-6">
          {tutor.quote}
        </p>
        <div className="absolute bottom-2 right-2 text-3xl text-primary-200 font-serif rotate-180">"</div>
      </motion.div>

      {/* Subjects */}
      <div className="mb-4">
        <h4 className="text-sm font-semibold text-gray-700 mb-2">Spécialités</h4>
        <div className="flex flex-wrap gap-2">
          {tutor.subjects.slice(0, 3).map((subject, subjectIndex) => (
            <motion.span
              key={subject}
              className="badge text-xs"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 + 0.5 + subjectIndex * 0.05 }}
              whileHover={{ scale: 1.05 }}
            >
              {subject}
            </motion.span>
          ))}
          {tutor.subjects.length > 3 && (
            <span className="badge bg-gray-100 text-gray-600 text-xs">
              +{tutor.subjects.length - 3}
            </span>
          )}
        </div>
      </div>

      {/* Badges */}
      <div className="mb-6">
        <h4 className="text-sm font-semibold text-gray-700 mb-2">Expertises</h4>
        <div className="flex flex-wrap gap-2">
          {tutor.badges.map((badge, badgeIndex) => (
            <motion.span
              key={badge}
              className="inline-flex items-center space-x-1 px-3 py-1 bg-gradient-to-r from-accent-100 to-primary-100 text-accent-700 rounded-full text-xs font-medium border border-accent-200/50"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 + 0.6 + badgeIndex * 0.05 }}
              whileHover={{ scale: 1.05 }}
            >
              <CheckBadgeIcon className="w-3 h-3" />
              <span>{badge}</span>
            </motion.span>
          ))}
        </div>
      </div>

      {/* Info & Price */}
      <div className="flex items-center justify-between text-sm text-gray-600 mb-6 p-3 bg-gray-50 rounded-xl">
        <div className="flex items-center space-x-1">
          <AcademicCapIcon className="w-4 h-4" />
          <span>{tutor.experience}</span>
        </div>
        <div className="flex items-center space-x-1">
          <span className="text-lg font-bold text-primary-600">{tutor.price}€</span>
          <span>/h</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="space-y-3">
        <motion.button
          className="w-full btn-primary group relative overflow-hidden"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <span className="relative z-10 flex items-center justify-center space-x-2">
            <span>Réserver un cours</span>
            <motion.div
              animate={{ x: isHovered ? 5 : 0 }}
              transition={{ duration: 0.2 }}
            >
              →
            </motion.div>
          </span>
        </motion.button>
        
        <div className="grid grid-cols-2 gap-2">
          <motion.button
            className="btn-secondary text-sm py-2 flex items-center justify-center space-x-1"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <PlayIcon className="w-4 h-4" />
            <span>Vidéo</span>
          </motion.button>
          
          <motion.button
            className="btn-secondary text-sm py-2 flex items-center justify-center space-x-1"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <ChatBubbleLeftRightIcon className="w-4 h-4" />
            <span>Message</span>
          </motion.button>
        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {showVideo && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowVideo(false)}
          >
            <motion.div
              className="bg-white rounded-3xl p-6 max-w-md w-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="aspect-video bg-gray-200 rounded-2xl mb-4 flex items-center justify-center">
                <div className="text-center">
                  <PlayIcon className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-600">Vidéo de présentation</p>
                  <p className="text-sm text-gray-500">30 secondes</p>
                </div>
              </div>
              <button
                className="w-full btn-secondary"
                onClick={() => setShowVideo(false)}
              >
                Fermer
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default TutorCard;