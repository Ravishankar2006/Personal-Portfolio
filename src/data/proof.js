/**
 * PROOF — the numbers and the credentials, one argument in one section.
 * (SocialProof and Achievements used to make this identical case in two
 * separate places, each at half strength; SocialProof had no header at all.)
 */

import dsaUdemy from "../assets/dsa_udemy-thumb.webp";
import dsaUdemyFull from "../assets/dsa_udemy-full.webp";
import mern from "../assets/mern_internship_campus_aacharya-thumb.webp";
import mernFull from "../assets/mern_internship_campus_aacharya-full.webp";
import techsprint from "../assets/techsprint_gdg-thumb.webp";
import techsprintFull from "../assets/techsprint_gdg-full.webp";
import kagglePython from "../assets/kaggle_python-thumb.webp";
import kagglePythonFull from "../assets/kaggle_python-full.webp";
import kaggleIntroML from "../assets/kaggle_intro_ml-thumb.webp";
import kaggleIntroMLFull from "../assets/kaggle_intro_ml-full.webp";
import kagglePandas from "../assets/kaggle_pandas-thumb.webp";
import kagglePandasFull from "../assets/kaggle_pandas-full.webp";
import kaggleInterML from "../assets/kaggle_intermediate_ml-thumb.webp";
import kaggleInterMLFull from "../assets/kaggle_intermediate_ml-full.webp";
import kaggleDL from "../assets/kaggle_intro_deep_learning-thumb.webp";
import kaggleDLFull from "../assets/kaggle_intro_deep_learning-full.webp";
import hcl from "../assets/hcl_ai_social_impact-thumb.webp";
import hclFull from "../assets/hcl_ai_social_impact-full.webp";
import adobe from "../assets/adobe_university_hackathon-thumb.webp";
import adobeFull from "../assets/adobe_university_hackathon-full.webp";
import ey from "../assets/ey_techathon-thumb.webp";
import eyFull from "../assets/ey_techathon-full.webp";
import smartMotion from "../assets/smart_motion_hackathon-thumb.webp";
import smartMotionFull from "../assets/smart_motion_hackathon-full.webp";
import codeathon from "../assets/codeathon_thiran-thumb.webp";
import codeathonFull from "../assets/codeathon_thiran-full.webp";
import brainwave from "../assets/brainwave_ggsipu-thumb.webp";
import brainwaveFull from "../assets/brainwave_ggsipu-full.webp";

/** The four headline numerics. */
export const stats = [
  { value: 550, suffix: "+", label: "LeetCode solved" },
  { value: 1702, suffix: "", label: "LeetCode rating" },
  { value: 400, suffix: "+", label: "GitHub contributions" },
  { value: 6, suffix: "", label: "Projects shipped" },
];

/** Secondary numbers, set as a mono strip rather than more big tiles. */
export const statsMeta = [
  "Top 13% globally",
  "42 contests",
  "5★ C++ · HackerRank",
];

/**
 * Credentials, strongest first. The five Kaggle micro-certs collapse
 * into ONE grouped row — as five equal cards they outweighed the
 * hackathon placing 5:1 visually, which inverted their actual worth.
 */
export const credentials = [
  {
    year: "2026",
    title: "TechSprint Hackathon — Top 10 Teams",
    org: "GDG on Campus & SECE",
    thumb: techsprint,
    full: techsprintFull,
  },
  {
    year: "2026",
    title: "AI for Social Impact Challenge — Top 100 Finalists",
    org: "HCLFoundation & StartupTN",
    thumb: hcl,
    full: hclFull,
  },
  {
    year: "2025",
    title: "MERN Stack Internship with Capstone",
    org: "Campus Aacharya",
    thumb: mern,
    full: mernFull,
  },
  {
    year: "2025",
    title: "Mastering Data Structures & Algorithms in C/C++",
    org: "Udemy — Abdul Bari",
    thumb: dsaUdemy,
    full: dsaUdemyFull,
  },
];

/** Grouped so five small certificates read as one credential. */
export const kaggleGroup = {
  year: "2025",
  title: "Kaggle — 5 certificates",
  org: "Through intermediate level",
  prefix: "Kaggle",
  items: [
    { label: "Python", thumb: kagglePython, full: kagglePythonFull },
    { label: "Pandas", thumb: kagglePandas, full: kagglePandasFull },
    { label: "Intro to ML", thumb: kaggleIntroML, full: kaggleIntroMLFull },
    { label: "Intermediate ML", thumb: kaggleInterML, full: kaggleInterMLFull },
    { label: "Intro to Deep Learning", thumb: kaggleDL, full: kaggleDLFull },
  ],
};

/**
 * Five participation-only hackathon certs, grouped for the same reason
 * kaggleGroup is: as individual rows they'd outweigh actual placings
 * (TechSprint, HCL) 5:1, which inverts what each one is worth.
 */
export const hackathonGroup = {
  year: "2026",
  title: "Hackathon Participation — 5 certificates",
  org: "Adobe · EY · CIT · GGSIPU · SECE",
  prefix: "Hackathon",
  items: [
    { label: "Adobe University Hackathon", thumb: adobe, full: adobeFull },
    { label: "EY Techathon 6.0", thumb: ey, full: eyFull },
    { label: "Smart Motion Hackathon", thumb: smartMotion, full: smartMotionFull },
    { label: "Codeathon 2.0 — THIRAN", thumb: codeathon, full: codeathonFull },
    { label: "Brainwave — GGSIPU Delhi", thumb: brainwave, full: brainwaveFull },
  ],
};
