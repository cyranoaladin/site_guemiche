import React from 'react';
import { motion } from 'framer-motion';
import { StarIcon } from '@heroicons/react/24/solid';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Emma, 16 ans",
      role: "Élève en Terminale S",
      image: "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=200",
      content: "Grâce à Marie, j'ai enfin compris les maths ! Elle explique de façon si claire que tout devient évident. Mon stress a complètement disparu.",
      rating: 5,
      subject: "Mathématiques"
    },
    {
      id: 2,
      name: "Mme Rousseau",
      role: "Maman de Lucas, 14 ans",
      image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=200",
      content: "Lucas a retrouvé confiance en lui. Thomas a su s'adapter à ses difficultés et maintenant il adore les sciences. Un vrai miracle !",
      rating: 5,
      subject: "Physique-Chimie"
    },
    {
      id: 3,
      name: "Julien, 17 ans",
      role: "Élève en Première L",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=200",
      content: "Sophie m'a aidé à structurer mes idées pour le français. Mes notes ont progressé de 8 à 15 de moyenne. Je recommande à 100% !",
      rating: 5,
      subject: "Français"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-primary-50 to-accent-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            Ils ont retrouvé le
            <span className="text-gradient"> sourire</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez comment nos tuteurs transforment la vie de nos élèves
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card p-6 hover:scale-105 transition-transform duration-300"
            >
              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.content}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center space-x-3">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.role}
                  </div>
                </div>
              </div>

              {/* Subject Badge */}
              <div className="mt-4">
                <span className="badge bg-primary-100 text-primary-700">
                  {testimonial.subject}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            { number: "95%", label: "de satisfaction" },
            { number: "+3", label: "points de moyenne" },
            { number: "500+", label: "élèves accompagnés" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-display font-bold text-gradient mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;