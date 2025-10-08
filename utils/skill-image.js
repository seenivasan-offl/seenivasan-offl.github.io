// utils/skill-image.js

import html from '../app/assets/svg/skills/html.svg';
import css from '../app/assets/svg/skills/css.svg';
import javascript from '../app/assets/svg/skills/javascript.svg';
import typescript from '../app/assets/svg/skills/typescript.svg';
import react from '../app/assets/svg/skills/react.svg';
import nextJS from '../app/assets/svg/skills/nextJS.svg';
import tailwind from '../app/assets/svg/skills/tailwind.svg';
import bootstrap from '../app/assets/svg/skills/bootstrap.svg';
import java from '../app/assets/svg/skills/java.svg';
import springboot from '../app/assets/svg/skills/Spring_Boot.svg';
import postgresql from '../app/assets/svg/skills/postgresql.svg';
import mysql from '../app/assets/svg/skills/mysql.svg';
import git from '../app/assets/svg/skills/git.svg';
import aws from '../app/assets/svg/skills/aws.svg';
import materialui from '../app/assets/svg/skills/materialui.svg';
import docker from '../app/assets/svg/skills/docker.svg';
import figma from '../app/assets/svg/skills/figma.svg';

// Map skill names to imported SVGs
const skillMap = {
  html,
  css,
  javascript,
  typescript,
  react,
  'next js': nextJS,
  tailwind,
  bootstrap,
  java,
  'spring boot': springboot,
  postgresql,
  mysql,
  git,
  aws,
  materialui,
  docker,
  figma,
};

// Function to get skill SVG safely
export const skillsImage = (skill) => {
  if (!skill) return null;
  const key = skill.toLowerCase().trim();
  return skillMap[key] || null; // fallback is null
};
