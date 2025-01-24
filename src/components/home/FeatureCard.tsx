import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  link: string;
  color: string;
  delay?: number;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon: Icon,
  title,
  description,
  link,
  color,
  delay = 0
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.02 }}
      className="relative"
    >
      <Link
        to={link}
        className="block h-full"
      >
        <div className="relative overflow-hidden rounded-xl border border-white/20 bg-white/10 p-6 backdrop-blur-lg transition-all hover:bg-white/20">
          <div className={`absolute top-0 right-0 w-24 h-24 -mr-8 -mt-8 rounded-full ${color} opacity-10`} />
          <div className="relative">
            <div className="flex items-center gap-4 mb-4">
              <div className={`p-2 rounded-lg ${color} bg-opacity-10`}>
                <Icon className={`h-6 w-6 ${color} text-white`} />
              </div>
              <h2 className="text-xl font-semibold text-gray-900">
                {title}
              </h2>
            </div>
            <p className="text-gray-600">{description}</p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};