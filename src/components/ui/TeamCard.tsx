'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { TeamMember } from '@/data/team';
import { useLanguage } from '@/context/LanguageContext';
import { Linkedin, Twitter, Github, Globe } from 'lucide-react';

export default function TeamCard({ member, index = 0 }: { member: TeamMember; index?: number }) {
  const { language, t } = useLanguage();

  const name = member.name[language] || member.name.en;
  const role = member.role[language] || member.role.en;
  const bio = member.bio[language] || member.bio.en;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative p-6 rounded-3xl bg-navy-800/60 border border-slate-700/60 hover:border-electric-500/50 hover:bg-navy-800/90 transition-all duration-300 shadow-xl flex flex-col justify-between"
    >
      <div>
        {/* Profile Image */}
        <div className="relative h-64 w-full rounded-2xl overflow-hidden mb-6">
          <Image
            src={member.image}
            alt={name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-transparent to-transparent" />
          
          <div className="absolute top-3 left-3 bg-navy-900/90 text-electric-400 text-xs font-bold px-3 py-1 rounded-full border border-electric-500/30 backdrop-blur-md">
            {member.experienceYears}+ {t('team.experience')}
          </div>
        </div>

        {/* Info */}
        <h3 className="text-xl font-bold text-white group-hover:text-electric-300 transition-colors">
          {name}
        </h3>
        <span className="text-xs font-semibold text-accent-400 block mt-1">
          {role}
        </span>
        <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
          {bio}
        </p>

        {/* Skill Tags */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {member.skills.map((skill, i) => (
            <span key={i} className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-navy-900 text-slate-300 border border-slate-700">
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Social Links */}
      <div className="mt-6 pt-4 border-t border-slate-700/60 flex items-center gap-3">
        {member.socials.linkedin && (
          <a href={member.socials.linkedin} className="p-2 rounded-lg bg-navy-900 text-slate-400 hover:text-white hover:bg-electric-600 transition-colors" aria-label="LinkedIn">
            <Linkedin className="w-4 h-4" />
          </a>
        )}
        {member.socials.twitter && (
          <a href={member.socials.twitter} className="p-2 rounded-lg bg-navy-900 text-slate-400 hover:text-white hover:bg-electric-600 transition-colors" aria-label="Twitter">
            <Twitter className="w-4 h-4" />
          </a>
        )}
        {member.socials.github && (
          <a href={member.socials.github} className="p-2 rounded-lg bg-navy-900 text-slate-400 hover:text-white hover:bg-electric-600 transition-colors" aria-label="GitHub">
            <Github className="w-4 h-4" />
          </a>
        )}
        {member.socials.behance && (
          <a href={member.socials.behance} className="p-2 rounded-lg bg-navy-900 text-slate-400 hover:text-white hover:bg-electric-600 transition-colors" aria-label="Behance">
            <Globe className="w-4 h-4" />
          </a>
        )}
      </div>
    </motion.div>
  );
}
