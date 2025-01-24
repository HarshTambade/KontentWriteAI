import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { GlassCard } from '../ui/GlassCard';

export const HeroSection = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50" />
      
      {/* Animated shapes */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-20 -right-20 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20"
      />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, -90, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute -top-20 -left-20 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            KontentWrite<span className="text-blue-600">AI</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Your all-in-one AI content creation suite. Generate engaging content for blogs, 
            social media, and e-commerce with advanced AI technology.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center gap-4"
        >
          <GlassCard className="px-8 py-4">
            <div className="flex items-center gap-2 text-blue-600">
              <Sparkles size={20} />
              <span className="font-semibold">Powered by Gemini AI</span>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </div>
  );
};