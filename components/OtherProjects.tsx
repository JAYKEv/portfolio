'use client';

import React from 'react';
import { Github } from 'lucide-react';
import { motion } from 'framer-motion';

interface OtherProject {
  title: string;
  tags: string[];
  github: string;
}

interface OtherProjectsProps {
  projects: OtherProject[];
}

export default function OtherProjects({ projects }: OtherProjectsProps) {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Other Projects
          </h2>
          <p className="text-gray-600">
            Additional projects available on GitHub
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {projects.map((project, index) => (
            <motion.a
              key={project.title}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              className="group bg-white border border-gray-200 rounded-lg p-4
                         hover:border-gray-300 hover:shadow-md transition-all duration-300
                         flex flex-col items-center text-center"
            >
              <Github className="w-6 h-6 text-gray-600 group-hover:text-gray-900 mb-2 transition-colors" />
              <h3 className="text-sm font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                {project.title}
              </h3>
              <div className="flex flex-wrap gap-1 justify-center">
                {project.tags.slice(0, 2).map((tag, i) => (
                  <span
                    key={i}
                    className="px-2 py-0.5 text-xs bg-gray-100 text-gray-600 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

