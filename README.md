React Cyberpunk Portfolio
A modern, cyberpunk-themed personal portfolio built with React, Vite, Tailwind CSS, and Framer Motion. It features glassmorphism UI, an orbital skills system, custom cursor, smooth animations, and a floating navigation bar, designed to impress recruiters and showcase projects effectively.

Tech Stack:
-> React + Vite

-> Tailwind CSS (styling, glassmorphism)

-> Framer Motion (animations, transitions)​

-> Custom JavaScript for cursor, scroll, and nav interactions​

Core Features:

  Profile Intro:

  -> Glitch-animated name, 3D-tilting profile avatar, subtle particles

  -> Animated counters for CGPA, projects, and skills​

  Education Timeline:

  -> Glassmorphism cards with alternating layout

  -> Animated vertical timeline line and pulsing nodes

  -> Expandable details for each milestone (10th, 12th, CSE)​

  Tech Workflow:

  -> Tab-based workflow (Development, Design, Backend, Mobile)

  -> Light, performant hover and entrance animations​

  Projects Section:

  -> Featured projects like Banking Core System, N-Queen Visualizer, etc., with tech tags​

  Social Proof & Skills:

  -> Orbital skills system around a brain icon (Ethical Hacking, System Design, Algorithm Optimization, AI/ML)

  -> Click-to-expand descriptions and stat cards with glitch counters​

  Achievements:

  -> Certifications and achievements in glass cards with subtle motion​

  Contact Section:

  -> Glass connect cards for GitHub, LinkedIn, Email, Twitter​

  UX Enhancements:

  -> Custom neon cursor and trail

  -> Smooth scroll and scroll-based animations

  -> Floating right-side dot navigation with active section tracking
  
Project Structure:
 
src/
├── components/
│   ├── sections/
│   │   ├── ProfileIntro.jsx
│   │   ├── Timeline.jsx
│   │   ├── TechWorkflow.jsx
│   │   ├── Projects.jsx
│   │   ├── Terminal.jsx
│   │   ├── SocialProof.jsx
│   │   ├── Achievements.jsx
│   │   └── Contact.jsx
│   ├── layout/
│   │   └── FloatingNav.jsx
│   ├── effects/
│   │   ├── Enhancements.jsx
│   │   └── SmoothScroll.jsx
│   └── ui/
│       └── SkipLink.jsx
├── App.jsx
└── index.css

Getting Started:

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

Customization:
-> Update profile, education, and stats in ProfileIntro.jsx and Timeline.jsx.​

-> Edit skills and orbital system in SocialProof.jsx.​

-> Add or modify projects in Projects.jsx.​

-> Adjust workflow tabs and tools in TechWorkflow.jsx.​

-> Configure links in Contact.jsx and achievements in Achievements.jsx.

Notes:
-> Designed for dark mode with glassmorphism and cyberpunk gradients only.​

-> Animations are tuned for smoothness and performance, with many set to trigger once on scroll.​
