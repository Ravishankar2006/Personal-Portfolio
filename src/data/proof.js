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

/** The four headline numerics. */
export const stats = [
  { value: 450, suffix: "+", label: "LeetCode solved" },
  { value: 1702, suffix: "", label: "LeetCode rating" },
  { value: 150, suffix: "+", label: "GitHub contributions" },
  { value: 6, suffix: "", label: "Projects shipped" },
];

/** Secondary numbers, set as a mono strip rather than more big tiles. */
export const statsMeta = [
  "Top 13% globally",
  "39 contests",
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
  items: [
    { label: "Python", thumb: kagglePython, full: kagglePythonFull },
    { label: "Pandas", thumb: kagglePandas, full: kagglePandasFull },
    { label: "Intro to ML", thumb: kaggleIntroML, full: kaggleIntroMLFull },
    { label: "Intermediate ML", thumb: kaggleInterML, full: kaggleInterMLFull },
    { label: "Intro to Deep Learning", thumb: kaggleDL, full: kaggleDLFull },
  ],
};
