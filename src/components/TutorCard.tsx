import React from 'react';
import { motion } from 'framer-motion';
import { StarIcon, PlayIcon } from '@heroicons/react/24/solid';
import { AcademicCapIcon, ClockIcon } from '@heroicons/react/24/outline';

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
  };
}

const TutorCard: React.FC<TutorCardProps> = ({ tutor }) => {
  return (
    <motion.div
      className="card p-6 h-full"
      whileHover={{ y: -5, shadow: "0 20px 40px rgba(0,0,0,0.1)" }}
      transition={{ duration: 0.3 }}
    >
      {/* Header */}
      <div className="flex items-start space-x-4 mb-4">
        <div className="relative">
          <img
            src={tutor.image}
            alt={tutor.name}
            className="w-16 h-16 rounded-2xl object-cover"
          />
          {tutor.available && (
            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 border-2 border-white rounded-full"></div>
          )}
        </div>
        
        <div className="flex-1">
          <h3 className="text-xl font-display font-bold text-gray-900 mb-1">
            {tutor.name}
          </h3>
          <p className="text-gray-600 text-sm mb-2">{tutor.title}</p>
          
          {/* Rating */}
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <StarIcon
                key={i}
                className={`w-4 h-4 ${
                  i < tutor.rating ? 'text-yellow-400' : 'text-gray-300'
                }`}
              />
            ))}
            <span className="text-sm text-gray-600 ml-1">({tutor.rating})</span>
          </div>
        </div>

        {/* Video Play Button */}
        <motion.button
          className="w-10 h-10 bg-primary-100 hover:bg-primary-200 rounded-full flex items-center justify-center transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <PlayIcon className="w-5 h-5 text-primary-600" />
        </motion.button>
      </div>

      {/* Quote */}
      <div className="bg-gray-50 rounded-xl p-4 mb-4">
        <p className="text-gray-700 italic text-sm leading-relaxed">
          "{tutor.quote}"
        </p>
      </div>

      {/* Subjects */}
      <div className="mb-4">
        <div className="flex flex-wrap gap-2">
          {tutor.subjects.slice(0, 3).map((subject) => (
            <span
              key={subject}
              className="badge bg-primary-100 text-primary-700"
            >
              {subject}
            </span>
          ))}
          {tutor.subjects.length > 3 && (
            <span className="badge bg-gray-100 text-gray-600">
              +{tutor.subjects.length - 3}
            </span>
          )}
        </div>
      </div>

      {/* Badges */}
      <div className="mb-4">
        <div className="flex flex-wrap gap-2">
          {tutor.badges.map((badge) => (
            <span
              key={badge}
              className="badge bg-accent-100 text-accent-700 text-xs"
            >
              {badge}
            </span>
          ))}
        </div>
      </div>

      {/* Info */}
      <div className="flex items-center justify-between text-sm text-gray-600 mb-6">
        <div className="flex items-center space-x-1">
          <AcademicCapIcon className="w-4 h-4" />
          <span>{tutor.experience}</span>
        </div>
        <div className="flex items-center space-x-1">
          <ClockIcon className="w-4 h-4" />
          <span>{tutor.price}€/h</span>
        </div>
      </div>

      {/* CTA */}
      <motion.button
        className="w-full btn-primary"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        Découvrir le profil
      </motion.button>
    </motion.div>
  );
};

export default TutorCard;