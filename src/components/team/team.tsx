'use client';

import { motion } from 'framer-motion';
import { team } from '../../constants';
import { TeamCard } from './team-card';

export function Team() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="team" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Nossa Equipe
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Profissionais qualificados e experientes, prontos para cuidar do seu sorriso
            com dedicação, tecnologia e humanização.
          </p>
        </motion.div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {team.map((member, index) => (
            <motion.div key={member.id} variants={itemVariants}>
              <TeamCard member={member} index={index} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}